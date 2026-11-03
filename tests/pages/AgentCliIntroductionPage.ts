import type { Locator, Page } from '@playwright/test'

// /agent-cli/introduction: elements named by what the user sees. Recordings add the ones they use.
export class AgentCliIntroductionPage {
  readonly apiLink: Locator

  constructor(readonly page: Page) {
    this.apiLink = page.getByRole('link', { name: 'API' })
  }
}
