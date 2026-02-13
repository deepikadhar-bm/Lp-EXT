import { Page, Locator } from '@playwright/test';

/**
 * Page Object: IFB Renderer
 * Elements: 5
 */
export class IfbRendererPage {
  constructor(private page: Page) {}

  get Borrower_Information(): Locator {
    return this.page.locator("//p[text()[normalize-space() = \"Borrower Information\"]]");
  }

  get latestiframehtml_iFrame3(): Locator {
    return this.page.locator("//iframe[@id='pui-iframe-container-encompassweb']");
  }

  get renderer2540form_iFrame(): Locator {
    return this.page.locator("//iframe[starts-with(@src, \"/renderer/\")]");
  }

  get First_Name_Input_Encompass(): Locator {
    return this.page.locator("//input[@id='4000-TextBox5']");
  }

  get Last_Name_Input_Encompass(): Locator {
    return this.page.locator("//input[@data-testid=\"4002\"]");
  }

}