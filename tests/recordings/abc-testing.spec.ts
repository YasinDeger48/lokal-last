import { test, expect } from '@playwright/test'

test('abc testing', async ({ page }) => {
  await page.goto('https://www.hesapkurdu.com/');
  await expect(page.getByRole('heading', { name: 'En Avantajlı Finansal Fırsatlar', exact: true }).nth(0)).toHaveText('En Avantajlı Finansal Fırsatlar');
  await page.getByRole('button', { name: 'Faizli Kredi' }).nth(0).click();
  await expect(page.getByRole('button', { name: 'Detayları İncele' }).nth(0)).toHaveText('Detayları İncele');
  await page.locator('[id="22-product-card-59"]').getByRole('button', { name: 'Başvur' }).click();
  await page.getByRole('img', { name: 'GetirFinans QR Kod' }).nth(0).click();
  await page.getByRole('textbox', { name: 'Telefon numaranız' }).nth(0).click();
  await page.getByRole('textbox', { name: 'Telefon numaranız' }).nth(0).fill('555-555-5555');
  await page.getByRole('checkbox', { name: 'İndirimli teklifler için' }).nth(0).click();
  await page.getByRole('button', { name: 'Link gönder' }).nth(0).click();
})
