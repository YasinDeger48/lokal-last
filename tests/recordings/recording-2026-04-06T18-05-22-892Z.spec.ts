import { test, expect } from '@playwright/test'

test('zeyno', async ({ page }) => {
  test.setTimeout(180000)
  page.setDefaultTimeout(10000)
  page.setDefaultNavigationTimeout(30000)

  await page.goto('https://www.hesapkurdu.com/');
  await page.waitForLoadState('load', { timeout: 30000 })
  await page.getByRole('button', { name: 'Kredi Kartı' }).nth(1).waitFor({ state: 'visible', timeout: 10000 })
  await page.getByRole('button', { name: 'Kredi Kartı' }).nth(1).click();
  await page.getByRole('button', { name: 'Tüm Kredi Kartları' }).nth(0).waitFor({ state: 'visible', timeout: 10000 })
  await page.getByRole('button', { name: 'Tüm Kredi Kartları' }).nth(0).click();
  await page.getByRole('button', { name: 'Kabul Et' }).nth(0).waitFor({ state: 'visible', timeout: 10000 })
  await page.getByRole('button', { name: 'Kabul Et' }).nth(0).click();
})
