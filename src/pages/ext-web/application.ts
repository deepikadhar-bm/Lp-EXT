import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Application
 * Elements: 2
 */
export class ApplicationPage {
  constructor(private page: Page) {}

  get Save_Button1(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Save\"]]");
  }

  get latestiframehtml_iFrame4(): Locator {
    return this.page.locator("//iframe[@id='pui-iframe-container-encompassweb']");
  }

}