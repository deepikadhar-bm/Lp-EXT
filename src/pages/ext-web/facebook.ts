import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Facebook
 * Elements: 3
 */
export class FacebookPage {
  constructor(private page: Page) {}

  get LOG_IN_BUTTON(): Locator {
    return this.page.locator("[name=\"login\"]");
  }

  get User_name_Field(): Locator {
    return this.page.locator("email");
  }

  get Password_text_Field(): Locator {
    return this.page.locator("pass");
  }

}