import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Reprice
 * Elements: 3
 */
export class RepricePage {
  constructor(private page: Page) {}

  get Reprice_Text_Popup(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"You will be directed to pricing results valid as of\"]]");
  }

  get Confirm_Button_in_Reprice_Text_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Cancel_Button_in_Reprice_Text_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Cancel\"]]");
  }

}