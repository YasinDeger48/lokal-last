import type { Locator, Page } from '@playwright/test'

// /: elements named by what the user sees. Recordings add the ones they use.
export class HomePage {
  readonly docsLink: Locator

  constructor(readonly page: Page) {
    this.docsLink = page.getByRole('link', { name: 'Docs' })
  }
}
