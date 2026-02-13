import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Result Filter
 * Elements: 12
 */
export class ResultFilterPage {
  constructor(private page: Page) {}

  get Result_Filter_In_Quick_Price(): Locator {
    return this.page.locator("//span[.='Result Filter']");
  }

  get Max_Program_per_rate_Under_Result_Filter(): Locator {
    return this.page.locator("//label[text()='Max Program per rate']");
  }

  get max_Listing_Per_Rate_Textbox(): Locator {
    return this.page.locator("//select[@id='maxListingPerRate']");
  }

  get Option_In_Max_Listing_Per_Rate(): Locator {
    return this.page.locator("//select[@id='maxListingPerRate']/option[text()='5 Programs/Rates ']  ");
  }

  get QM_Fail_Filter(): Locator {
    return this.page.locator("//label[normalize-space()='QM Fail Filter']");
  }

  get QM_Fail_Filter_Textbox(): Locator {
    return this.page.locator("//select[@id='qmFailFilter']");
  }

  get Option_In_QM_Fail_Filter(): Locator {
    return this.page.locator("//select[@id='qmFailFilter']/option[text()='2 QM Errors ']");
  }

  get Pricing_Date_Under_Result_Filter(): Locator {
    return this.page.locator("//span[.='Pricing Date']");
  }

  get Cancel_Button(): Locator {
    return this.page.locator("//div/button[normalize-space()='Set Date']/following-sibling::button[normalize-space()='Cancel']");
  }

  get Date_In_Calendar(): Locator {
    return this.page.locator("//table[@class='days weeks']/tbody/tr/td/span[text()=\"$|Date|\" and not(contains(@class,\"is-other-month\")) and not(contains(@class,\"disabled\"))]");
  }

  get Cancel_Button_In_Calendar(): Locator {
    return this.page.locator("//button[contains(.,'Cancel')]");
  }

  get Delete_Icon_inside_table_data(): Locator {
    return this.page.locator("//table[@class=\"table\"]//td/a/i[contains(@class, \"text-danger\")]");
  }

}