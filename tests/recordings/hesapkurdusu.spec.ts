import { test, expect } from '@playwright/test'

test('TC-003 Test Senaryosu', async ({ page }) => {
  test.setTimeout(180000)
  page.setDefaultTimeout(10000)
  page.setDefaultNavigationTimeout(30000)

  await page.goto('https://www.hesapkurdu.com/');
  await page.waitForLoadState('load', { timeout: 30000 })
  await expect(page.getByText('En Avantajlı Finansal Fırsatlar', { exact: true })).toBeVisible();
})
