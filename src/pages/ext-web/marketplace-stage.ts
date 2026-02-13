import { Page, Locator } from '@playwright/test';

/**
 * Page Object: MARKETPLACE STAGE
 * Elements: 8
 */
export class MarketplaceStagePage {
  constructor(private page: Page) {}

  get passwordinputPassword(): Locator {
    return this.page.locator("//INPUT[@id='password']");
  }

  get SUBMITdiv(): Locator {
    return this.page.locator("//div[contains(@class, 'btn-submit-container')]");
  }

  get Submitdiv1(): Locator {
    return this.page.locator("//div[@aria-label=\"Forgot Password Section\"]/following-sibling::div[contains(@class, 'form-group')]");
  }

  get SUBMITbutton(): Locator {
    return this.page.locator("//button[contains(@class, 'btn-primary') and contains(@class, 'text-white') and contains(@class, 'btn-sm') and contains(@class, 'd-flex') and contains(@class, 'align-items-center')]");
  }

  get Searchbutton1(): Locator {
    return this.page.locator("//button[contains(text(),'Search')]");
  }

  get LOGINbutton(): Locator {
    return this.page.locator("//button[contains(@class, 'btn-primary') and contains(@class, 'text-white') and contains(@class, 'btn-sm') and contains(@class, 'd-flex') and contains(@class, 'align-items-center')]");
  }

  get LOGINdiv(): Locator {
    return this.page.locator("//div[contains(text(),'Login')]");
  }

  get usernameinputText(): Locator {
    return this.page.locator("//INPUT[@id='username']");
  }

}