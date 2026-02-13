import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Digital Lending Pro
 * Elements: 32
 */
export class DigitalLendingProPage {
  constructor(private page: Page) {}

  get Price_adjust_link(): Locator {
    return this.page.locator("(//tr)[3]/lib-virtual-scroll-row/td/i");
  }

  get Price_2(): Locator {
    return this.page.locator("(//tr)[3]/lib-virtual-scroll-row/td/div[contains(@class,\"currency adjustment\")]");
  }

  get Price(): Locator {
    return this.page.locator("//*[@id=\"resultTemplate\"]/div/lib-pricing-result/lib-pricing-result-desktop-view/div/div[3]/lib-virtual-scroll-tree/cdk-virtual-scroll-viewport/div[1]/table/tbody/tr[2]/lib-virtual-scroll-row/td[10]/i");
  }

  get Preview_pricing(): Locator {
    return this.page.locator("/html/body/modal-container/div/div/app-dlt-send-pricing-comparison/div/div[2]/div[3]/div[2]/button");
  }

  get Payment_validation(): Locator {
    return this.page.locator("//*[@data=\"Payment\"]");
  }

  get Payment(): Locator {
    return this.page.locator("//TR[2]/LIB-VIRTUAL-SCROLL-ROW[1]/TD[3]/DIV[1]");
  }

  get passwordinputPassword2(): Locator {
    return this.page.locator("//INPUT[@id='password']");
  }

  get NAMB(): Locator {
    return this.page.locator("//*[@id=\"main-container\"]/div/div/md-table-container/table/tbody/tr[2]/td[2]/a/img");
  }

  get Term(): Locator {
    return this.page.locator("//*[text()=\" Term (Years) \"]/../app-bs-multi-select/div/div/button");
  }

  get purpose2(): Locator {
    return this.page.locator("//*[text()=\" Purpose \"]/../div/select");
  }

  get Price_validation(): Locator {
    return this.page.locator("//*[@data=\"$|Price|\"]");
  }

  get Price_validation_2(): Locator {
    return this.page.locator("//*[contains(@data,\"$|Price|\")]");
  }

  get Price1(): Locator {
    return this.page.locator("//TBODY[1]/TR[2]/LIB-VIRTUAL-SCROLL-ROW[1]/TD[2]/DIV[1]/DIV[1]");
  }

  get PriceAdjust(): Locator {
    return this.page.locator("//TR[2]/LIB-VIRTUAL-SCROLL-ROW[1]/TD[6]/DIV[1]");
  }

  get Property_Type(): Locator {
    return this.page.locator("//*[text()=\" Property Type \"]/../div/select");
  }

  get Property_Type_label(): Locator {
    return this.page.locator("//*[text()=\" Property Type \"]");
  }

  get PurchasePriceValueinputText(): Locator {
    return this.page.locator("//input[@placeholder=\"Purchase Price / Value\"]");
  }

  get Purpose_label(): Locator {
    return this.page.locator("//*[text()=\" Purpose \"]");
  }

  get Searchbutton(): Locator {
    return this.page.locator("//button[contains(text(),'Search')]");
  }

  get SEARCHFIELDSh5(): Locator {
    return this.page.locator("//h5[contains(@class, 'title')]");
  }

  get Login_button(): Locator {
    return this.page.locator("//*[@type=\"submit\"]");
  }

  get LOGINdiv1(): Locator {
    return this.page.locator("//button[@type=\"submit\"]");
  }

  get Marketplace(): Locator {
    return this.page.locator("(//div[text()=\"Marketplace\"] )[2]");
  }

  get Next(): Locator {
    return this.page.locator("//*[text()=\"Next\"]");
  }

  get Occupancy(): Locator {
    return this.page.locator("//*[text()=\" Occupancy \"]/../div/select");
  }

  get Occupancy_label(): Locator {
    return this.page.locator("//*[text()=\" Occupancy \"]");
  }

  get ok(): Locator {
    return this.page.locator("//button[@class=\"btn btn-primary text-uppercase\"]");
  }

  get Ok_button_2(): Locator {
    return this.page.locator("//span[text()=\"Ok\"]/..");
  }

  get ok_button(): Locator {
    return this.page.locator("//span[text()=\"Ok\"]");
  }

  get Rate_validation(): Locator {
    return this.page.locator("//*[contains(text(),\"$|Rate|\")]");
  }

  get usernameinputText1(): Locator {
    return this.page.locator("//INPUT[@id='username']");
  }

  get Yes(): Locator {
    return this.page.locator("//*[contains(text(),\"Yes\")]");
  }

}