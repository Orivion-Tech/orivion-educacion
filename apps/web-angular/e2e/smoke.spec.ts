import { test, expect } from '@playwright/test';

test.describe('smoke flows', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.clear();
    });
  });

  test('demo login selects tenant and reaches student home', async ({ page }) => {
    await page.goto('/login');
    await page.getByTestId('demo-login').click();
    await expect(page).toHaveURL(/tenant-select/);
    await page.getByTestId('tenant-north').click();
    await expect(page).toHaveURL(/\\/student\\/home/);
    await expect(page.getByRole('heading', { name: /student home/i })).toBeVisible();
  });

  test('teacher login lands on course dashboard', async ({ page }) => {
    await page.goto('/login');
    await page.getByTestId('teacher-login').click();
    await expect(page).toHaveURL(/\\/teacher\\/course\\/101\\/dashboard/);
    await expect(page.getByRole('heading', { name: /course 101 dashboard/i })).toBeVisible();
  });
});
