import { Page, Locator } from '@playwright/test';

/**
 * Page Object: CORR QA
 * Elements: 15
 */
export class CorrQaPage {
  constructor(private page: Page) {}

  get CORR_QA_Username_Input(): Locator {
    return this.page.locator("//input[@type='text']");
  }

  get CORR_QA_Password_Input(): Locator {
    return this.page.locator("//input[@type='password']");
  }

  get CORR_QA_Login_Button(): Locator {
    return this.page.locator("//span[@class='me-3']");
  }

  get CORR_Bid_Requests_NavLink(): Locator {
    return this.page.locator("//span[@class='hide-text'][normalize-space()='Bid Requests']");
  }

  get CORR_Upload_New_Bid_Request_Button(): Locator {
    return this.page.locator("//button[normalize-space()='Upload New Bid Request']");
  }

  get CORR_Select_Company_Dropdown(): Locator {
    return this.page.locator("//div[@class='flex-grow-1 text-start text-truncate'][normalize-space()='Select']");
  }

  get CORR_Company_Option(): Locator {
    return this.page.locator("//span[@title='Freedom A4187']");
  }

  get CORR_Term_Days_Dropdown(): Locator {
    return this.page.locator("//div[@class='d-flex align-items-center mb-3']//select[@id='id']");
  }

  get CORR_Next_Business_Day_Radio_Button(): Locator {
    return this.page.locator("(//input[@name='bidRequestDate'])[2]");
  }

  get CORR_Pricing_Return_Time_Dropdown(): Locator {
    return this.page.locator("(//select[@id='id'])[3]");
  }

  get CORR_Pricing_Return_Time_Options(): Locator {
    return this.page.locator("//option[6]");
  }

  get CORR_Bid_Request_Upload_Container(): Locator {
    return this.page.locator("//input[@type='file']");
  }

  get CORR_Bid_Mapping_ID_Dropdown(): Locator {
    return this.page.locator("//div[contains(text(),'Select Mapping')]");
  }

  get CORR_Freedom_Map_Mapping_ID(): Locator {
    return this.page.locator("//span[@title='Freedom Map']");
  }

  get CORR_Upload_Bid_Button(): Locator {
    return this.page.locator("//span[normalize-space()='Upload Bid']");
  }

}