import { Page, Locator } from '@playwright/test';

/**
 * Page Object:  -google
 * Elements: 5
 */
export class Google2Page {
  constructor(private page: Page) {}

  get Shortcuts_Home_Mentions_star_Starred_Direct_messages(): Locator {
    return this.page.locator("//div[contains(@class, 'kFwPee')]/DIV[1]");
  }

  get Iframe_Chat(): Locator {
    return this.page.locator("//IFRAME[@id='gtn-roster-iframe-id']");
  }

  get Annapurna_Puvvada(): Locator {
    return this.page.locator("//c-wiz[contains(@class, 'bzJiD')]/DIV[3]");
  }

  get Iframe_Chat_content(): Locator {
    return this.page.locator("//iframe[@src='https://chat.google.com/u/0/frame?shell=6&origin=https%3A%2F%2Fmail.google.com&oi=1#cb=gtn-brain-iframe-id&id=spareFrame4']");
  }

  get first_name(): Locator {
    return this.page.locator("//input[@id=\"first_name\"]");
  }

}