import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Lock Information
 * Elements: 7
 */
export class LockInformationPage {
  constructor(private page: Page) {}

  get Status(): Locator {
    return this.page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li)[1]/div/div/div/div/span[2] | //h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li/div/div/div/div/span[2] | //h4[text()=\" Lock Information \"]/../../../following-sibling::div//ul/div/div[1]/li/div/div/div/div/span[2]");
  }

  get Date_with_Time(): Locator {
    return this.page.locator("//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li/div/div/div/div/span[3]|//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li//div[text()=\" Date \"]/span[3]|(//h4[text()=\" Lock Information \"]/../../div/app-lock-panel/div/ul/div/div)[1]/li//div[text()=\" Date \"]/span[3] | //h4[text()=\" Lock Information \"]/../../../following-sibling::div//ul/div/div[1]/li/div/div/div/div/span[3]|//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li//div[text()=\" Date \"]/span[3]");
  }

  get LO_Comment_Full_Line(): Locator {
    return this.page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul[1]//li)[1]//div[contains(text(),\"@|Comment|\")] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//div[contains(text(),\"@|Comment|\")] | //h4[text()=\" Lock Information \"]/../../../following-sibling::div//ul/div/div[1]/li//div[contains(text(),\"Request Lock: Testsigma Testing\")]");
  }

  get Deny_Request(): Locator {
    return this.page.locator("//button[contains(text(),\"Deny  Request\")]");
  }

  get Request_Denied_PreLock_Status(): Locator {
    return this.page.locator("//span[contains(text(),\"Request Denied (Pre-Lock)\")]");
  }

  get Lock_Requested_Status(): Locator {
    return this.page.locator("//span[contains(.,'Lock Requested')]");
  }

  get Lock_Request_Status(): Locator {
    return this.page.locator("//span[normalize-space()='Lock Requested']");
  }

}