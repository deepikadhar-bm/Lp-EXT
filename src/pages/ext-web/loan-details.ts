import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Loan Details
 * Elements: 2
 */
export class LoanDetailsPage {
  constructor(private page: Page) {}

  get Loan_Details(): Locator {
    return this.page.locator("//div[@class=\"loan-row loan-info-short\"]/div[2]");
  }

  get Test_sigma_locked_in_Log_Details(): Locator {
    return this.page.locator("//span[text()=\"test sigma\"]/..//span[text()=\"Locked\"]");
  }

}