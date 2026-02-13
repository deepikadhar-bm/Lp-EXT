import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Quickpricer
 * Elements: 1
 */
export class QuickpricerPage {
  constructor(private page: Page) {}

  get Data_inside_table(): Locator {
    return this.page.locator("((//table/tbody)[2]/tr/td[2]/div/input)");
  }

}