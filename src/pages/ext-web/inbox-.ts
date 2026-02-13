import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Inbox 
 * Elements: 2
 */
export class InboxPage {
  constructor(private page: Page) {}

  get Mail_1_unread_message(): Locator {
    return this.page.locator("//div[@aria-label=\"Mail, 1 unread message\"]");
  }

  get Chat(): Locator {
    return this.page.locator("//div[contains(@class, 'bSyoAf')]");
  }

}