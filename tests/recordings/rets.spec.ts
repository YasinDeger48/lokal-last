import { test, expect } from '@playwright/test'

test('rets', async ({ page }) => {
  test.setTimeout(180000)
  page.setDefaultTimeout(10000)
  page.setDefaultNavigationTimeout(30000)

  await page.goto('https://www.hepsiburada.com/');
  await page.waitForLoadState('load', { timeout: 30000 })
  await expect(page.locator('img').nth(0)).toBeVisible();
})
