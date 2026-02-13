import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Pricing
 * Elements: 2
 */
export class PricingPage {
  constructor(private page: Page) {}

  get Amount(): Locator {
    return this.page.locator("//td/span[@class='cc currency']");
  }

  get amount_values(): Locator {
    return this.page.locator("(//td/span[@class='cc currency'])[$|index|]");
  }

}