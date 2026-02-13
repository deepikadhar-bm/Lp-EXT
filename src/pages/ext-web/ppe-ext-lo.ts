import { Page, Locator } from '@playwright/test';

/**
 * Page Object: PPE EXT LO
 * Elements: 53
 */
export class PpeExtLoPage {
  constructor(private page: Page) {}

  get OK_In_INFO(): Locator {
    return this.page.locator("//button[normalize-space()='Ok']");
  }

  get More_Details_In_Scenario_Pricing_Request(): Locator {
    return this.page.locator("//a[normalize-space()='More Details ...']");
  }

  get Price_In_Adjustment_Summary(): Locator {
    return this.page.locator("//th[normalize-space()='Price']");
  }

  get Historical_Pricing_Date_on_Reprice(): Locator {
    return this.page.locator("//div[contains(text(),\" Historical Pricing Date results valid as of\")]");
  }

  get Lock_Cancelled_in_LO(): Locator {
    return this.page.locator("//span[contains(text(),\"Lock Cancelled\")]");
  }

  get Extension_day_alert(): Locator {
    return this.page.locator("//span[contains(text(),'Extension day alert')]");
  }

  get Lock_Confirmation_PDF_template(): Locator {
    return this.page.locator("//label[.='Lock Confirmation PDF template']");
  }

  get Select_Lock_Confirm_PDF(): Locator {
    return this.page.locator("//label[.='Lock Confirmation PDF template']/following-sibling::div/select");
  }

  get Lock_Confirmation_PDF(): Locator {
    return this.page.locator("//label[.='Lock Confirmation PDF template']/following-sibling::div/select/option[.='Lock Confirmation PDF']");
  }

  get Comment_Section(): Locator {
    return this.page.locator("//textarea[@placeholder='Comment']");
  }

  get Date_In_Lock_Requested(): Locator {
    return this.page.locator("(//span[text()=\"Auto Ellie Loan Officer\"]/parent::div/child::span)[3]");
  }

  get Pricing_Scenario(): Locator {
    return this.page.locator("//span[normalize-space()='Pricing Scenario']");
  }

  get No_Result(): Locator {
    return this.page.locator("//td[contains(.,'No result')]");
  }

  get LockRequested(): Locator {
    return this.page.locator("//span[contains(.,'Lock Requested')]");
  }

  get Program(): Locator {
    return this.page.locator("//th[normalize-space()='Program']");
  }

  get Rate_Open_Button_GREEN_Color(): Locator {
    return this.page.locator("(//table/tbody/tr[1])[2]/td/div/div[@style=\"white-space: nowrap;\"]/a/span/span/span");
  }

  get Rate_Close_Button_BLUE_Color(): Locator {
    return this.page.locator("//table/tbody/tr/td/div/div/a/span/span[text()=\"Close\"]");
  }

  get Hidden_Rates(): Locator {
    return this.page.locator("(//span[text()='Close']/ancestor::tr//div[@class=\"hide-mob\"]//input[@type=\"checkbox\"])[3]");
  }

  get All_Prices_In_Rate(): Locator {
    return this.page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[3])[1]");
  }

  get FHA_30_Yr_Fixed_Program_name(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[11]/div[1]/a[1]");
  }

  get FHLMC_Under_Program(): Locator {
    return this.page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[11]/div[1]/a[1])[1]");
  }

  get Favorite_Text_Box(): Locator {
    return this.page.locator("//input[@id='favorite']");
  }

  get Search_Box_In_Pricing_Scenario(): Locator {
    return this.page.locator("//button[contains(.,\"Search\") and @disabled]");
  }

  get Eligible(): Locator {
    return this.page.locator("//a[contains(text(),'Eligible')]");
  }

  get Close_Button_In_Favorites(): Locator {
    return this.page.locator("//div[@class='modal-dialog modal-dialog-centered modal-lg']//button[@class='btn modal-close']");
  }

  get Pipeline_Button(): Locator {
    return this.page.locator("//a[@aria-label='Pipeline']");
  }

  get Conventional_In_Loan_Type(): Locator {
    return this.page.locator("//li/span[text()=\" Conventional \"]");
  }

  get Loan_Number_In_Loan_Details_Page(): Locator {
    return this.page.locator("//div[contains(text(),'Loan Number')]/following-sibling::div");
  }

  get Loan_Purpose_In_Loan_Details_Page(): Locator {
    return this.page.locator("//div[text()='Purchase ']");
  }

  get Property_Type_In_Loan_Details_Page(): Locator {
    return this.page.locator("//div[contains(text(),'Single Family')]");
  }

  get Fields_In_Export_Pricing(): Locator {
    return this.page.locator("//th[contains(text(),'Fields')]");
  }

  get New_Pricing_Results_In_Export_Pricing(): Locator {
    return this.page.locator("//th[contains(text(),'New Pricing Results')]");
  }

  get Second_Row(): Locator {
    return this.page.locator("(//table/tbody/tr)[2]");
  }

  get Search_Field(): Locator {
    return this.page.locator("//input[@id='searchText']");
  }

  get Search_Fields(): Locator {
    return this.page.locator("//h5[contains(text(),'SEARCH FIELDS')]");
  }

  get Loan_Information_In_Search_Fields(): Locator {
    return this.page.locator("//h5[contains(.,'Loan Information')]");
  }

  get Purchase_Price_Under_Loan_Information(): Locator {
    return this.page.locator("//label[.=' Purchase Price ']");
  }

  get Purchase_Price_Textbox(): Locator {
    return this.page.locator("//input[@placeholder='Purchase Price']");
  }

  get Product_Characteristics_In_Search_Fields(): Locator {
    return this.page.locator("//h5[contains(text(),'Product Characteristics')]");
  }

  get None_selected_In_Lock_Days_Dropdown(): Locator {
    return this.page.locator("//button[contains(.,'None selected')]");
  }

  get Plus_button_in_favorites(): Locator {
    return this.page.locator("//i[@class='fas fa-plus text-grey']");
  }

  get Zip_code_under_favorites_table(): Locator {
    return this.page.locator("//table[1]/tbody[1]/tr[1]");
  }

  get Zip_code_1_under_favorites_table(): Locator {
    return this.page.locator("//table[1]/tbody[1]/tr[2]");
  }

  get Check_mark_under_default(): Locator {
    return this.page.locator("//tbody//tr//td//a//i[@class='fas fa-check-circle text-success']");
  }

  get Default_zipcode(): Locator {
    return this.page.locator("//a[contains(text(),'91106')]");
  }

  get Monthly_Income_label_under_income_and_debt(): Locator {
    return this.page.locator("//label[text()='Monthly Income']");
  }

  get Monthly_Income_textbox_under_income_and_debt(): Locator {
    return this.page.locator("//input[@id='monthlyIncome']");
  }

  get Monthly_Debt_label_under_income_and_debt(): Locator {
    return this.page.locator("//label[contains(text(),'Monthly Debt')]");
  }

  get Price_Concession_Requested_PostLock_In_LO(): Locator {
    return this.page.locator("//span[contains(text(),'Price Concession Requested (Post-Lock)')]");
  }

  get Quick_Pricer_Icon(): Locator {
    return this.page.locator("//a[contains(@aria-label,'Quick Pricer')]");
  }

  get Ok_Buttonmissing_zip_code_popup(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"ok\"]]");
  }

  get Default_Search_Resultloan_officer(): Locator {
    return this.page.locator("//div[@class=\"result-panel\"]\n");
  }

  get Price_Adj_Column_Data_LO(): Locator {
    return this.page.locator("(//th[normalize-space(text())='Price Adj'])/ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]//div[@class=\"currency adjustment-points\"]");
  }

}