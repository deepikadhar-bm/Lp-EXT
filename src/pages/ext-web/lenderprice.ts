import { Page, Locator } from '@playwright/test';

/**
 * Page Object: lenderprice
 * Elements: 2
 */
export class LenderpricePage {
  constructor(private page: Page) {}

  get Program_name_under_Pricing_Data(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.PROGRAM\"]/div/a");
  }

  get Impound_Types_Dropdown(): Locator {
    return this.page.locator("//label[contains(text(),\"Impound Types\")]/../../../lib-pricing-dyna-field-item-view/div/div/select");
  }

}