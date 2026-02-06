import { test } from "@playwright/test"

test("Amazon logo presence", async ({ page }) => {
    await page.goto("https://www.amazon.com/");
})
