import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Chrome Downloads
 * Elements: 1
 */
export class ChromeDownloadsPage {
  constructor(private page: Page) {}

  get Latest_Downloaded_File(): Locator {
    return this.page.locator("document.querySelector(\"body > downloads-manager\").shadowRoot.querySelector(\"#frb0\").shadowRoot.querySelector(\"#file-link\")");
  }

}