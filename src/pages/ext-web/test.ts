import { Page, Locator } from '@playwright/test';

/**
 * Page Object: TEST
 * Elements: 1
 */
export class TestPage {
  constructor(private page: Page) {}

  get TEST(): Locator {
    return this.page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"240711007\")]");
  }

}