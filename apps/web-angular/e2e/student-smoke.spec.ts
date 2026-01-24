import { test, expect } from '@playwright/test';

test('login demo -> tenant -> student home', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Institución').click();
  await page.getByRole('option').first().click();
  await page.getByLabel('Rol').click();
  await page.getByRole('option', { name: 'Estudiante' }).click();
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await expect(page).toHaveURL(/\/student\/home/);
});
