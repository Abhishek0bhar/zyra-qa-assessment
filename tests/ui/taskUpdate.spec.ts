import { test, expect } from "@playwright/test";

test("Task dropdown visible", async ({
  page
}) => {
  await page.goto(
    "https://zyra-qa-test.onrender.com"
  );

  const dropdown =
    page.locator("select").first();

  await expect(dropdown).toBeVisible();
});
