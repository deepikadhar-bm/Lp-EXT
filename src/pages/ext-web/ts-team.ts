import { Page, Locator } from '@playwright/test';

/**
 * Page Object: ts team
 * Elements: 3
 */
export class TsTeamPage {
  constructor(private page: Page) {}

  get ForPreviousMonth(): Locator {
    return this.page.locator("//button[@class=\"previous\"]");
  }

  get ago_date(): Locator {
    return this.page.locator("(//span[text()='$|agodd|'])[last()]");
  }

  get ForSetdate(): Locator {
    return this.page.locator("//button[@class=\"btn btn-primary\" and text()='Set Date ']");
  }

}