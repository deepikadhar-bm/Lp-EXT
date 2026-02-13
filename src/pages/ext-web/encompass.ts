import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Encompass
 * Elements: 20
 */
export class EncompassPage {
  constructor(private page: Page) {}

  get Instance_ID(): Locator {
    return this.page.locator("//input[@id='instance-id']");
  }

  get Next_Button(): Locator {
    return this.page.locator("//button[@id='btn-next']");
  }

  get Encompass_User_input_Field(): Locator {
    return this.page.locator("//input[@id='userId']");
  }

  get Encompass_User_password_Field(): Locator {
    return this.page.locator("//input[@id='password']");
  }

  get Encompass_Log_In_Button(): Locator {
    return this.page.locator("//button[@name=\"login\"]");
  }

  get Admin_Header(): Locator {
    return this.page.locator("//nav[@aria-label=\"breadcrumb\"]");
  }

  get Menubar_ButtonNine_Dots(): Locator {
    return this.page.locator("//button[@id='header-app-switcher']//*[local-name() = 'svg'][@data-testid=\"ds-icon-svg\"]");
  }

  get Pipeline_Menu_Button(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Pipeline\"]]");
  }

  get PipeLine_Header(): Locator {
    return this.page.locator("//nav[@aria-label=\"breadcrumb\"]");
  }

  get Import_To(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Import To:\"]]");
  }

  get latestiframehtml_iFrame2(): Locator {
    return this.page.locator("//iframe[@id='pui-iframe-container-pipelineui']");
  }

  get Public_Loan_Templates(): Locator {
    return this.page.locator("//div[@role=\"dialog\"]//span[text()[normalize-space() = \"Public Loan Templates\"]]");
  }

  get Companywide(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Companywide\"]]");
  }

  get Conventional_Loan(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Conventional\"]]");
  }

  get Apply_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Apply\"]]");
  }

  get Encompass_Admin_User(): Locator {
    return this.page.locator("//button[@id='header-profile-menu']//*[local-name() = 'svg'][@data-testid=\"ds-icon-svg\"]");
  }

  get Encompass_Logout_Button(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Logout\"]]");
  }

  get Dropdown_Form2_pipeline(): Locator {
    return this.page.locator("//div[@data-testid=\"popper-container\"]");
  }

  get Pipeline1_Header(): Locator {
    return this.page.locator("//span[text()=\"pipeline\"]");
  }

  get pipeline_in_Encompass(): Locator {
    return this.page.locator("//ul[@data-testid=\"ds-global-header-breadcrumb-list\"]/li[1]/a[1]");
  }

}