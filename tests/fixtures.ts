import { test as base, expect } from '@playwright/test'
import { HomePage } from './pages/HomePage'
import { DocsIntroPage } from './pages/DocsIntroPage'
import { McpIntroductionPage } from './pages/McpIntroductionPage'
import { AgentCliIntroductionPage } from './pages/AgentCliIntroductionPage'
import { DocsApiClassPage } from './pages/DocsApiClassPage'

// Page objects as fixtures: a test names the pages it uses, `async ({ loginPage }) => { … }`.
type Pages = {
  homePage: HomePage
  docsIntroPage: DocsIntroPage
  mcpIntroductionPage: McpIntroductionPage
  agentCliIntroductionPage: AgentCliIntroductionPage
  docsApiClassPage: DocsApiClassPage
}

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => { await use(new HomePage(page)) },
  docsIntroPage: async ({ page }, use) => { await use(new DocsIntroPage(page)) },
  mcpIntroductionPage: async ({ page }, use) => { await use(new McpIntroductionPage(page)) },
  agentCliIntroductionPage: async ({ page }, use) => { await use(new AgentCliIntroductionPage(page)) },
  docsApiClassPage: async ({ page }, use) => { await use(new DocsApiClassPage(page)) }
})

export { expect }
