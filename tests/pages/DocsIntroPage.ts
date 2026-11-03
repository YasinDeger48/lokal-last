import type { Locator, Page } from '@playwright/test'

// /docs/intro: elements named by what the user sees. Recordings add the ones they use.
export class DocsIntroPage {
  readonly mcpLink: Locator

  constructor(readonly page: Page) {
    this.mcpLink = page.getByRole('link', { name: 'MCP' })
  }
}
