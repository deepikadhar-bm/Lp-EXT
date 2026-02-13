import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Ice Admin Application
 * Elements: 2
 */
export class IceAdminApplicationPage {
  constructor(private page: Page) {}

  get Welcome_to_Encompass_Admin(): Locator {
    return this.page.locator("//h2[@data-testid=\"ds-typography-element\"]");
  }

  get latestiframehtml_iFrame(): Locator {
    return this.page.locator("//iframe[@id='pui-iframe-container-emAdminUI']");
  }

}