import type { Locator, Page } from '@playwright/test'

// /mcp/introduction: elements named by what the user sees. Recordings add the ones they use.
export class McpIntroductionPage {
  readonly cliLink: Locator

  constructor(readonly page: Page) {
    this.cliLink = page.getByRole('link', { name: 'CLI', exact: true })
  }
}
