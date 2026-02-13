import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Loan pricer
 * Elements: 3
 */
export class LoanPricerPage {
  constructor(private page: Page) {}

  get Pricer_Options_in_Loan_Pricer(): Locator {
    return this.page.locator("//label[@for=\"pricer-optionsMain\"]");
  }

  get Document_Generation_Settings_in_Loan_Pricer(): Locator {
    return this.page.locator("//label[@for=\"document-generation-settingsMain\"]");
  }

  get Allow_Pricing_Comparison_CheckboxLoan_Pricer(): Locator {
    return this.page.locator("//input[@id=\"ppMainallowPricingComparison\"]");
  }

}