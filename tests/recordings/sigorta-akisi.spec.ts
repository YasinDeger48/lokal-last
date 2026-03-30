import { test, expect } from '@playwright/test'

test('sigorta akışı', async ({ page }) => {
  await page.goto('https://www.hesapkurdu.com/');
  await expect(page.getByRole('heading', { name: 'En Avantajlı Finansal Fırsatlar', exact: true }).nth(0)).toHaveText('En Avantajlı Finansal Fırsatlar');
  await page.getByRole('button', { name: 'Sigorta' }).nth(0).click();
  await expect(page.locator('[href="https://www.koalay.com/"]').nth(0)).toBeVisible();
})
