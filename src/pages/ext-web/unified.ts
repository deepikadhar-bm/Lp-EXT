import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Unified
 * Elements: 1
 */
export class UnifiedPage {
  constructor(private page: Page) {}

  get Login1(): Locator {
    return this.page.locator("Login");
  }

}