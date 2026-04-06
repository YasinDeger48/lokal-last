import { test, expect } from '@playwright/test'

test('TC-010 Hangi Kredisi Senaryosu', async ({ page }) => {
  test.setTimeout(180000)
  page.setDefaultTimeout(10000)
  page.setDefaultNavigationTimeout(30000)

  await page.goto('https://www.hangikredi.com/');
  await page.waitForLoadState('load', { timeout: 30000 })
  await expect(page.getByText('Finansal ihtiyaçlarınız için en avantajlı çözümler', { exact: true })).toHaveText('Finansal ihtiyaçlarınız için en avantajlı çözümler');
})
