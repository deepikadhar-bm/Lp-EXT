import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Extension
 * Elements: 5
 */
export class ExtensionPage {
  constructor(private page: Page) {}

  get Request_Extension_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request Extension\"]]");
  }

  get Confirm_Button_In_Lock_Request_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Request_1_Day_Extension_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request 1 Day Extension\"]]");
  }

  get Lock_Extension_Request_Dropdown(): Locator {
    return this.page.locator("//select[@id='l-e']");
  }

  get Request_Lock_Button_Pipeline(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request Lock\"]]");
  }

}