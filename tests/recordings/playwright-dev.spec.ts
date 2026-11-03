import { test, expect } from '../fixtures'

test('playwright', async ({ page, homePage, docsIntroPage, mcpIntroductionPage, agentCliIntroductionPage, docsApiClassPage }) => {
  await page.goto('https://playwright.dev/');
  await homePage.docsLink.click();
  await docsIntroPage.mcpLink.click();
  await mcpIntroductionPage.cliLink.click();
  await agentCliIntroductionPage.apiLink.click();
  await docsApiClassPage.skipToMainContentField.click();
  await expect(docsApiClassPage.playwrightTestHeading).toHaveText('Playwright Test');
})

test('abc', async ({ page, homePage, docsIntroPage, mcpIntroductionPage, agentCliIntroductionPage, docsApiClassPage }) => {
  await page.goto('https://playwright.dev/');
  await homePage.docsLink.click();
  await docsIntroPage.mcpLink.click();
  await mcpIntroductionPage.cliLink.click();
  await agentCliIntroductionPage.apiLink.click();
  await docsApiClassPage.playwrightTestLink.click();
  await docsApiClassPage.playwrightTestLink.click();
  await expect(docsApiClassPage.playwrightTestHeading).toHaveText('Playwright Test');
})
