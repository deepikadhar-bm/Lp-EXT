import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Home
 * Elements: 7
 */
export class HomePage {
  constructor(private page: Page) {}

  get PasswordinputPassword1(): Locator {
    return this.page.locator("//INPUT[@id='password']");
  }

  get OK_In_Date_Picker(): Locator {
    return this.page.locator("//span[contains(normalize-space(),'OK')]");
  }

  get Today(): Locator {
    return this.page.locator("//span[.=' Today']");
  }

  get SEND_PDF(): Locator {
    return this.page.locator("//*[text()=\"SEND PDF\"]/..");
  }

  get Pricing_Date(): Locator {
    return this.page.locator("//span[@item-container='datePicker']");
  }

  get Result_Filter_In_Pricing(): Locator {
    return this.page.locator("//span[contains(text(),'Result Filter')]");
  }

  get Login_button_2(): Locator {
    return this.page.locator("//span[contains(text(),'Login')]/..");
  }

}