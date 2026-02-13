import { Page, Locator } from '@playwright/test';

/**
 * Page Object: -orangehrm
 * Elements: 4
 */
export class OrangehrmPage {
  constructor(private page: Page) {}

  get Please_type_your_username_without_any_spaces_i_e_jo(): Locator {
    return this.page.locator("Form_getForm_subdomain_Holder");
  }

  get Evaluate_OrangeHRM_without_any_financial_commitment(): Locator {
    return this.page.locator("//section[@aria-label=\"OHRM Platform Section\"]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[1]/p[1]");
  }

  get Experience_the_cuttingedge_features_and_seamless_fu(): Locator {
    return this.page.locator("//section[@aria-label=\"OHRM Platform Section\"]/div[2]/div[1]/div[1]/div[1]/p[1]");
  }

  get Price_Data_Column(): Locator {
    return this.page.locator("//a[normalize-space(text())='Price']//ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]//div[@data]\n");
  }

}