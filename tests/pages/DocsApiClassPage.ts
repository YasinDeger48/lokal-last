import type { Locator, Page } from '@playwright/test'

// /docs/api/class-playwright: elements named by what the user sees. Recordings add the ones they use.
export class DocsApiClassPage {
  readonly skipToMainContentField: Locator
  readonly playwrightTestHeading: Locator
  readonly playwrightTestLink: Locator

  constructor(readonly page: Page) {
    this.skipToMainContentField = page.getByLabel('Skip to main content', { exact: true })
    this.playwrightTestHeading = page.getByRole('heading', { name: 'Playwright Test' })
    this.playwrightTestLink = page.getByRole('link', { name: 'Playwright Test' }).first()
  }
}
