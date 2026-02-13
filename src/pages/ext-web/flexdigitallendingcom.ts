import { Page, Locator } from '@playwright/test';

/**
 * Page Object: flexdigitallendingcom
 * Elements: 10
 */
export class FlexdigitallendingcomPage {
  constructor(private page: Page) {}

  get Flex_Search_Fields_Title(): Locator {
    return this.page.locator("(//h5[normalize-space()='SEARCH FIELDS'])[1]");
  }

  get Flex_PurchasePrice_InputText(): Locator {
    return this.page.locator("//input[@placeholder=\"Purchase Price / Est. Value\"]");
  }

  get Mortgage_Type_Dropdown(): Locator {
    return this.page.locator("//div[@class='custom-select-wrap mortgage-type']//button[@class='d-flex btn-sm banner-multi-select']");
  }

  get ConventionalNonAgency(): Locator {
    return this.page.locator("//span[normalize-space()='Conventional/Non-Agency']");
  }

  get Flex_Lock_Days_Dropdown(): Locator {
    return this.page.locator("//div[@class='custom-select-wrap lock-days']//button[@class='d-flex btn-sm banner-multi-select']/span");
  }

  get Flex_Days_In_Lock_Dropdown(): Locator {
    return this.page.locator("//button/span[text()[normalize-space() = \"@|Lock days|\"]]");
  }

  get undefined_980628_Host1(): Locator {
    return this.page.locator('//*');
  }

  get Flex_DTI_Input_Field(): Locator {
    return this.page.locator("//input[@placeholder=\"DTI %\"]");
  }

  get Flex_Pricer_Program_Name(): Locator {
    return this.page.locator("//td[@data-label='COLUMN_NAME_ENUM.PROGRAM']/div/a");
  }

  get Flex_Rate_Data_in_First_column(): Locator {
    return this.page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[2]");
  }

}