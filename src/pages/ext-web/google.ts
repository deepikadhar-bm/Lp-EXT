import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Google
 * Elements: 9
 */
export class GooglePage {
  constructor(private page: Page) {}

  get Ok_button2(): Locator {
    return this.page.locator("(//button[@role=\"button\"])[2]");
  }

  get top_rate(): Locator {
    return this.page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.RATE\"])[$|counter1|]");
  }

  get Price_adjust_validation(): Locator {
    return this.page.locator("//*[@data=\"$|PriceAdjust|\"]");
  }

  get LoanID(): Locator {
    return this.page.locator("//div[contains(text(),\"$|LoanID|\")]");
  }

  get GetPricingbutton(): Locator {
    return this.page.locator("//app-dlt-borrower-loan-right-side[contains(@class, 'loan-component-rigth-cards') and contains(@class, 'hide-mob')]/DIV[1]/DIV[1]/BUTTON[1]");
  }

  get CreditScoreinputNumber(): Locator {
    return this.page.locator("//INPUT[@id='fico']");
  }

  get AdjustmentsandDisqualifadiv(): Locator {
    return this.page.locator("//LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[2]/DIV[2]/DIV[1]/A[1]");
  }

  get Closespan(): Locator {
    return this.page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]");
  }

  get Confirm_Lock(): Locator {
    return this.page.locator("//*[text()=\" Are you sure you want to submit a lock request? \"]/../div/div/button[text()=\" Confirm \"]");
  }

}