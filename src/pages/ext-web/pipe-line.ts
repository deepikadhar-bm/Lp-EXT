import { Page, Locator } from '@playwright/test';

/**
 * Page Object: pipe line
 * Elements: 4
 */
export class PipeLinePage {
  constructor(private page: Page) {}

  get Lock_RequestedStatus(): Locator {
    return this.page.locator("//td[@data-title=\"Lock Status\"]");
  }

  get Lock_Requested_Status(): Locator {
    return this.page.locator("(//div[@class=\"money\"]/../..//td)[last()-1]");
  }

  get LockStatus(): Locator {
    return this.page.locator("//td[@data-title=\"Lock Status\"]");
  }

  get Lock_Status(): Locator {
    return this.page.locator("(//div[@class=\"money\"]/../..//td)[last()-1]");
  }

}