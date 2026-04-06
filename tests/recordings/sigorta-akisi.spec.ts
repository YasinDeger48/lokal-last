import { test, expect } from '@playwright/test'

test('TC-005 Test Senaryosu', async ({ page }) => {
  await page.goto('https://www.hesapkurdu.com/');
  await expect(page.getByRole('heading', { name: 'En Avantajlı Finansal Fırsatlar', exact: true }).nth(0)).toHaveText('En Avantajlı Finansal Fırsatlar');
  await page.getByRole('button', { name: 'Sigorta' }).nth(0).click();
  await expect(page.locator('[href="https://www.koalay.com/"]').nth(0)).toBeVisible();
})

test('TC-006 Test Senaryosu', async ({ page }) => {
  await page.goto('https://example.com')
  await expect(page).toHaveTitle(/Example/)
})

test('TC-007 Test Senaryosu', async ({ page }) => {
  await page.goto('https://www.hesapkurdu.com/');
  await expect(page.getByRole('heading', { name: 'En Avantajlı Finansal Fırsatlar', exact: true }).nth(0)).toHaveText('En Avantajlı Finansal Fırsatlar');
  await page.getByRole('button', { name: 'Sigorta' }).nth(0).click();
  await expect(page.locator('[href="https://www.koalay.com/"]').nth(0)).toBeVisible();
})