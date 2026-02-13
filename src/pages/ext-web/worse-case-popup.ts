import { Page, Locator } from '@playwright/test';

/**
 * Page Object: worse case popup
 * Elements: 1
 */
export class WorseCasePopupPage {
  constructor(private page: Page) {}

  get Worse_Case_PopUp(): Locator {
    return this.page.locator("//div[text()='Worse Case Log']/ancestor::div[@class=\"modal-content\"]");
  }

}