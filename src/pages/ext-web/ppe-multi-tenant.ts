import { Page, Locator } from '@playwright/test';

/**
 * Page Object: PPE Multi Tenant
 * Elements: 7
 */
export class PpeMultiTenantPage {
  constructor(private page: Page) {}

  get PPE_Multi_Tentant_Test_Element(): Locator {
    return this.page.locator("//*[@test='test']");
  }

  get Total_Adjustment_Value(): Locator {
    return this.page.locator("(//td[contains(@class, 'currency')])[2]");
  }

  get PPE_Multi_LTV_Input(): Locator {
    return this.page.locator("//input[@id='ltvId']");
  }

  get PPE_Multi_MI(): Locator {
    return this.page.locator("//td[@name='MI']");
  }

  get PPE_Pricing_Information(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Pricing Information\"] and contains(@class, 'title')]");
  }

  get PPE_Pricing_Results(): Locator {
    return this.page.locator("//tbody[@ng-repeat='result in subGroup | orderBy:orderByTerms | filter:getFilter(listTerms)']");
  }

  get PPE_Date_Input(): Locator {
    return this.page.locator("//*[@name='dateInput']");
  }

}