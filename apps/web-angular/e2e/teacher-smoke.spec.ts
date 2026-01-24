import { test, expect } from '@playwright/test';

test('login teacher -> course dashboard', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Institución').click();
  await page.getByRole('option').first().click();
  await page.getByLabel('Rol').click();
  await page.getByRole('option', { name: 'Docente' }).click();
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.goto('/teacher/course/1/dashboard');
  await expect(page).toHaveURL(/\/teacher\/course\/1\/dashboard/);
});
