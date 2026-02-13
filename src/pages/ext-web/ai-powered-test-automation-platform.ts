import { Page, Locator } from '@playwright/test';

/**
 * Page Object: AI Powered Test Automation Platform
 * Elements: 14
 */
export class AiPoweredTestAutomationPlatformPage {
  constructor(private page: Page) {}

  get divTag4(): Locator {
    return this.page.locator("//a[@href=\"https://testsigma.com/request-demo\"]/ancestor::div[contains(@class, 'border-b') and contains(@class, 'sticky') and contains(@class, 'shadow-sm')]/following-sibling::div[contains(@class, 'overflow-auto')]//div[contains(@class, 'expand-trigger')]");
  }

  get Dashboard_Button(): Locator {
    return this.page.locator("(//div[contains(@class, 'basis-full') and contains(@class, 'flex') and contains(@class, 'items-center') and contains(@class, 'text') and contains(@class, 'rounded') and contains(@class, 'cursor-pointer') and contains(@class, 'font-normal') and contains(@class, 'transition') and contains(@class, 'ease-in') and contains(@class, 'relative')])[1]");
  }

  get Create_Tests_Button(): Locator {
    return this.page.locator("(//div[contains(@class, 'hover') and contains(@class, 'basis-full') and contains(@class, 'flex') and contains(@class, 'items-center') and contains(@class, 'text') and contains(@class, 'rounded') and contains(@class, 'cursor-pointer') and contains(@class, 'font-normal') and contains(@class, 'transition') and contains(@class, 'ease-in') and contains(@class, 'relative')])[1]");
  }

  get Test_Cases_Button(): Locator {
    return this.page.locator(" div.flex.flex-wrap.transition.ease-in div:nth-child(1)  span:nth-child(2)");
  }

  get divTag5(): Locator {
    return this.page.locator("//div[@id='app']//div[contains(@class, 'expand-trigger')]");
  }

  get Step_Groups_Button(): Locator {
    return this.page.locator(" div.flex.flex-wrap.transition.ease-in div:nth-child(2)  span:nth-child(2)");
  }

  get Test_Data_Button(): Locator {
    return this.page.locator("(//div[contains(@class, 'hover') and contains(@class, 'basis-full') and contains(@class, 'flex') and contains(@class, 'items-center') and contains(@class, 'text') and contains(@class, 'rounded') and contains(@class, 'cursor-pointer') and contains(@class, 'font-normal') and contains(@class, 'transition') and contains(@class, 'ease-in') and contains(@class, 'relative')])[5]");
  }

  get Test_Data_Profiles_Button(): Locator {
    return this.page.locator(" div.px-lg.flex.flex-col.basis-full.transition-all.ease-in.overflow-y-auto div:nth-child(3)  div:nth-child(2) div:nth-child(1) span:nth-child(2)");
  }

  get Test_Plans_Button(): Locator {
    return this.page.locator(" div.px-lg.flex.flex-col.basis-full.transition-all.ease-in.overflow-y-auto div:nth-child(5)  div:nth-child(1) span:nth-child(2)");
  }

  get Create_Tests_Button1(): Locator {
    return this.page.locator("(//div[contains(@class, 'hover') and contains(@class, 'basis-full') and contains(@class, 'flex') and contains(@class, 'items-center') and contains(@class, 'text') and contains(@class, 'rounded') and contains(@class, 'cursor-pointer') and contains(@class, 'font-normal') and contains(@class, 'transition') and contains(@class, 'ease-in') and contains(@class, 'relative')])[2]");
  }

  get Elements_Button(): Locator {
    return this.page.locator(" div.flex.flex-wrap.transition.ease-in div:nth-child(3)  span:nth-child(2)");
  }

  get grid(): Locator {
    return this.page.locator("//div[@role=\"grid\"]");
  }

  get Run_Results_Button(): Locator {
    return this.page.locator(" div.px-lg.flex.flex-col.basis-full.transition-all.ease-in.overflow-y-auto div:nth-child(6)  div:nth-child(1) span:nth-child(2)");
  }

  get Waiting_for_results(): Locator {
    return this.page.locator("//div[@id='app']/div[2]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]");
  }

}