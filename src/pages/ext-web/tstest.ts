import { Page, Locator } from '@playwright/test';

/**
 * Page Object: TS-Test
 * Elements: 1
 */
export class TstestPage {
  constructor(private page: Page) {}

  get TSCheckbox(): Locator {
    return this.page.locator("(//input[@type=\"checkbox\"])[11]");
  }

}