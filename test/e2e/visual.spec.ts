import { expect, test } from "@playwright/test"
import { COLOUR_SCHEMES, PAGES } from "./constants.ts"

PAGES.forEach((path) => {
  COLOUR_SCHEMES.forEach((colourScheme) => {
    test.describe(`${colourScheme} mode`, () => {
      test.use({ colorScheme: colourScheme })

      test.describe(path, () => {
        test("matches the saved screenshot", async ({ page }) => {
          await page.goto(path)
          await expect(page).toHaveScreenshot(
            [path.replaceAll(/(^\/|\/$)/g, ""), `${colourScheme}.png`].filter(
              (segment) => segment,
            ),
            {
              fullPage: true,
            },
          )
        })
      })
    })
  })
})
