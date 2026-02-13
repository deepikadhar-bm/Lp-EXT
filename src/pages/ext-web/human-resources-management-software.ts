import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Human Resources Management Software
 * Elements: 13
 */
export class HumanResourcesManagementSoftwarePage {
  constructor(private page: Page) {}

  get Heading_Why_OrangeHRM(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Why OrangeHRM\"] and contains(@class, 'nav-link-hed')]");
  }

  get Peace_of_mind_is_just_a_few_clicks_away_Supercharg(): Locator {
    return this.page.locator("(//div[contains(@class, 'homepage-slider-content')])[2]");
  }

  get Heading_Company(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Company\"] and contains(@class, 'nav-link-hed')]");
  }

  get Heading_Solutions(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Solutions\"] and contains(@class, 'nav-link-hed')]");
  }

  get Heading_Resources(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Resources\"] and contains(@class, 'nav-link-hed')]");
  }

  get Link(): Locator {
    return this.page.locator("//img[@src=\"/_resources/themes/orangehrm/dist/images/OrangeHRM_Logo.svg\"]");
  }

  get divTag16(): Locator {
    return this.page.locator("(//div[contains(@class, 'item')])[20]//div[contains(@class, 'card-img')]");
  }

  get Image_Sandals(): Locator {
    return this.page.locator("(//img[@alt=\"Sandals\"])[1]");
  }

  get Heading_We_have_5_million_active_users_worldwide(): Locator {
    return this.page.locator("//h3[text()[normalize-space() = \"We have 5 million + active users worldwide\"]]");
  }

  get OrangeHRM_provides_a_worldclass_HRIS_experience_and(): Locator {
    return this.page.locator("//img[@src=\"/assets/Uploads/OrangeHRM_Logo.svg\"]/following-sibling::p[contains(@class, 'about-details')]");
  }

  get Heading_HR_for_All(): Locator {
    return this.page.locator("//h3[text()[normalize-space() = \"HR for All\"]]");
  }

  get Image_OrangeHRM_Logo(): Locator {
    return this.page.locator("//img[@src=\"/assets/Uploads/OrangeHRM_Logo.svg\"]");
  }

  get _30Day_Free_Trial_Button(): Locator {
    return this.page.locator("[name=\"action_request\"]");
  }

}