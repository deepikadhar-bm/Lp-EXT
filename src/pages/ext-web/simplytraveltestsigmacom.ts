import { Page, Locator } from '@playwright/test';

/**
 * Page Object: simplytraveltestsigmacom
 * Elements: 6
 */
export class SimplytraveltestsigmacomPage {
  constructor(private page: Page) {}

  get Login_or_Sign_Up_Button(): Locator {
    return this.page.locator("//BUTTON[@id='login-signup']");
  }

  get Signup_Button(): Locator {
    return this.page.locator("//BUTTON[@id='signUp-popUp']");
  }

  get First_Name_Input(): Locator {
    return this.page.locator("//INPUT[@id='first-name-signup']");
  }

  get Last_Name_Input(): Locator {
    return this.page.locator("//INPUT[@id='last-name-signup']");
  }

  get Email_address_Input(): Locator {
    return this.page.locator("//INPUT[@id='email-address-signup']");
  }

  get password_field(): Locator {
    return this.page.locator("//input[@name=\"password\"]");
  }

}