import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Lender Price Mail
 * Elements: 1
 */
export class LenderPriceMailPage {
  constructor(private page: Page) {}

  get New_chat(): Locator {
    return this.page.locator("//div[contains(text(),\"New chat\")]");
  }

}