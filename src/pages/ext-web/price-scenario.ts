import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Price Scenario
 * Elements: 16
 */
export class PriceScenarioPage {
  constructor(private page: Page) {}

  get Zip_Under_Price_Scenario(): Locator {
    return this.page.locator("(//label[text()='Zip'])[1]");
  }

  get Fico_In_Price_Scenario(): Locator {
    return this.page.locator("//input[@id='fico']");
  }

  get Purchase_Price_Under_Price_Scenario(): Locator {
    return this.page.locator("//input[@id='purchasePrice']");
  }

  get Loan_Type_Label_In_Pricing_Scenario(): Locator {
    return this.page.locator("//div/span[normalize-space()='Pricing Scenario']/../following-sibling::div//*[normalize-space()='Loan Type']");
  }

  get Select_Loan_Type_In_Pricing_Scenario(): Locator {
    return this.page.locator("//label[normalize-space()='Loan Type']/following-sibling::lib-bs2-multi-select");
  }

  get FHA_From_Dropdown_Menu_In_Loan_Type(): Locator {
    return this.page.locator("//span[.=' FHA ']");
  }

  get Lock_Days_In_Pricing_Scenario(): Locator {
    return this.page.locator("//label[normalize-space()='Lock Days']/following-sibling::lib-bs2-multi-select");
  }

  get Lock_Days(): Locator {
    return this.page.locator("//select[@id='dayLocks' and @aria-label=\"Day Locks\"]");
  }

  get Input_Checkbox_Under_Rate(): Locator {
    return this.page.locator("//div[contains(@class, 'resultTemplate')]/DIV[1]/DIV[1]/DIV[2]/LIB-PRICING-RESULT-TABLE[1]/TABLE[1]/TBODY[1]/TR[3]/TD[2]/DIV[1]/INPUT[1]");
  }

  get Input_Checkbox_1_Under_Rate(): Locator {
    return this.page.locator("//div[contains(@class, 'resultTemplate')]/DIV[1]/DIV[1]/DIV[2]/LIB-PRICING-RESULT-TABLE[1]/TABLE[1]/TBODY[1]/TR[4]/TD[2]/DIV[1]/INPUT[1]");
  }

  get Send_Pdf_Button(): Locator {
    return this.page.locator("//div[contains(@class, 'action-btns')]/DIV[1]/DIV[2]/DIV[1]/BUTTON[1]");
  }

  get Send_Pricing_Comparison_To_Borrower(): Locator {
    return this.page.locator("//h5[normalize-space()='Send Pricing Comparison']");
  }

  get Not_Selected_In_Pricing_Comparison(): Locator {
    return this.page.locator("//label[contains(text(),\"Pricing Comparison PDF template\")]/following-sibling::div[contains(@class, 'input-group')]/SELECT[1]");
  }

  get Pricing_Comparison_PDF_Option_In_Price_Comparison(): Locator {
    return this.page.locator("//label[normalize-space()='Pricing Comparison PDF template']");
  }

  get Preview_PDF_Button(): Locator {
    return this.page.locator("//button[contains(text(),'Preview PDF')]");
  }

  get Download_Button_In_Pricing_Comparison_PDF(): Locator {
    return this.page.locator("//button/span[text()='Download']");
  }

}