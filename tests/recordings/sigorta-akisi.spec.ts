import { test, expect } from '@playwright/test'

test('sigorta akışı', async ({ page }) => {
  await page.goto('https://www.hesapkurdu.com/');
  await expect(page.getByRole('button', { name: 'İhtiyaç Kredisi' }).nth(0)).toBeVisible();
  await expect(page.locator('h1')).toContainText('En Avantajlı Finansal Fırsatlar');
  await page.getByRole('button', { name: 'Sigorta' }).nth(0).click();
  await expect(page.getByRole('heading', { name: 'Sigorta Şimdi Çok Kolay!', exact: true }).nth(0)).toHaveText('Sigorta Şimdi Çok Kolay!');
})
