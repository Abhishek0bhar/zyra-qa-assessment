import { test, expect } from "@playwright/test";

test("Profile visible", async ({ page }) => {
  await page.goto(
    "https://zyra-qa-test.onrender.com"
  );

  await expect(
    page.getByText("Student profile")
  ).toBeVisible();

  await expect(
    page.getByText("Maya Patel")
  ).toBeVisible();
});
