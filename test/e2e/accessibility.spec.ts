import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

import { COLOUR_SCHEMES, PAGES } from "./constants.ts"

PAGES.forEach((path) => {
  COLOUR_SCHEMES.forEach((colourScheme) => {
    test.describe(`${colourScheme} mode`, () => {
      test.use({ colorScheme: colourScheme })

      test.describe(path, () => {
        test("passes accessibility checks", async ({ page }) => {
          await page.goto(path)

          const axeResults = await new AxeBuilder({ page }).analyze()

          expect(axeResults.violations).toEqual([])
        })
      })
    })
  })
})
