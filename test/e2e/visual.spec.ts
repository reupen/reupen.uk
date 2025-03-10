import { expect, test } from "@playwright/test"
import { PAGES } from "./constants.ts"

PAGES.forEach((path) => {
  test.describe(path, () => {
    test("matches the saved screenshot", async ({ page }) => {
      await page.goto(path)
      await expect(page).toHaveScreenshot(
        [path.replaceAll(/(^\/|\/$)/g, ""), "screenshot.png"].filter(
          (segment) => segment,
        ),
        {
          fullPage: true,
        },
      )
    })
  })
})
