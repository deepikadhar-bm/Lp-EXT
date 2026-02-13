import { Page, Locator } from '@playwright/test';

/**
 * Page Object: PPE-EXT-LD
 * Elements: 86
 */
export class PpeextldPage {
  constructor(private page: Page) {}

  get Search_Pipe_Line(): Locator {
    return this.page.locator("//input[@id='searchText']");
  }

  get ScenarioPricingRequest(): Locator {
    return this.page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]");
  }

  get LockInformationSection(): Locator {
    return this.page.locator("//h4[contains(text(),\"Lock Information\")]");
  }

  get LockStatusAfterLock(): Locator {
    return this.page.locator("//span[contains(text(),\"Locked\")]");
  }

  get Property_In_Quick_Pricer(): Locator {
    return this.page.locator("//h5[normalize-space()='Property']");
  }

  get Zip_Code_Label_Under_Pricing_Scenario(): Locator {
    return this.page.locator("(//div//label[text()=\"Zip\" or text()=\" Zip Code \"])[1]");
  }

  get Extension_Requested(): Locator {
    return this.page.locator("//span[normalize-space()='Extension Requested']");
  }

  get Requested_For_5_Days(): Locator {
    return this.page.locator("//li[normalize-space()='Requested Days: 5 days']");
  }

  get Comment_Textbox_In_Lock_Information(): Locator {
    return this.page.locator("//textarea[@placeholder='Comment']");
  }

  get Lock_For_Extension(): Locator {
    return this.page.locator("//button[contains(text(),\"Locked\")]");
  }

  get Configuration_In_LD(): Locator {
    return this.page.locator("//a[@aria-label='Config']//span[@class='dlp-icon fal fa-cogs']");
  }

  get Quick_Pricer_Configuration_In_Pricer_Configs(): Locator {
    return this.page.locator("//a[normalize-space()='Quick Pricer Configuration']");
  }

  get Profile_Image(): Locator {
    return this.page.locator("//img[contains(@src, 'profile.png')]");
  }

  get Logout_from_LD(): Locator {
    return this.page.locator("//a[contains(text(),'Logout')]");
  }

  get Disabling_the_Custom_UI_if_it_is_checked(): Locator {
    return this.page.locator("//b[normalize-space()='Custom UI']");
  }

  get Save_In_Custom_UI(): Locator {
    return this.page.locator("//button[contains(text(),'Save')]");
  }

  get Success_In_Save_Alert_Quick_Pricer(): Locator {
    return this.page.locator("//span[contains(text(),'Success')]");
  }

  get Ok_In_Quick_Pricer_Success_Textbox(): Locator {
    return this.page.locator("//button[.='Ok ']");
  }

  get Input_Checkbox_2_Under_Rate(): Locator {
    return this.page.locator("//div[contains(@class, 'resultTemplate')]/DIV[1]/DIV[1]/DIV[2]/LIB-PRICING-RESULT-TABLE[1]/TABLE[1]/TBODY[1]/TR[5]/TD[2]/DIV[1]/INPUT[1]");
  }

  get Search_Result_View_In_Quick_Pricer(): Locator {
    return this.page.locator("//a[normalize-space()='Search Result View']");
  }

  get Checkbox_1_In_Rate(): Locator {
    return this.page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/input)[1]");
  }

  get Checkbox_2_In_Rate(): Locator {
    return this.page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[2]/td[2]/div[1]/input)[1]");
  }

  get FHA_Option_In_Loan_TypeDropdown(): Locator {
    return this.page.locator("//div/span[normalize-space()='Pricing Scenario']/../following-sibling::div//*[normalize-space()='Loan Type']/following-sibling::lib-bs2-multi-select/div/ul/li/span[contains(normalize-space(),'FHA')]\n");
  }

  get Loan_TypeDropdown(): Locator {
    return this.page.locator("//label[contains(text(),\"Loan Types\")]/..//button");
  }

  get Pricing_Adjustment_In_More_Details(): Locator {
    return this.page.locator("//h6[normalize-space()='Pricing Adjustment']");
  }

  get Min_Rate(): Locator {
    return this.page.locator("(//div/input[@id='min-rate'])[1]");
  }

  get Max_Rate(): Locator {
    return this.page.locator("(//div/input[@id='max-rate'])[1]");
  }

  get Min_Price(): Locator {
    return this.page.locator("(//div/input[@id='min-rate'])[2]");
  }

  get Max_Price(): Locator {
    return this.page.locator("(//div/input[@id='max-rate'])[2]");
  }

  get Price_Toggle_Icon(): Locator {
    return this.page.locator("(//lib-pricing-result-table/table/thead/tr/th[3]/a)[1]");
  }

  get Reprice_Requested(): Locator {
    return this.page.locator("//*[contains(text(),\"Reprice Requested\")]");
  }

  get Worse_Case_Log_Popup(): Locator {
    return this.page.locator("//div[contains(text(),'Worse Case Log')]");
  }

  get Ok_Button_In_Worse_Case_Log(): Locator {
    return this.page.locator("//button[normalize-space()='Ok']");
  }

  get Extension_For_Request(): Locator {
    return this.page.locator("//th[normalize-space()='Extension: (5 days)']");
  }

  get Search_Box(): Locator {
    return this.page.locator("//div[@class='mt-2 searchBox']");
  }

  get FHA_In_LoanType(): Locator {
    return this.page.locator("//button[normalize-space()='FHA']");
  }

  get _30_Years_Fixed_FHA_Purchase(): Locator {
    return this.page.locator("(//div[normalize-space()='30 Years Fixed FHA Purchase'])[1]");
  }

  get VA_In_Favorites(): Locator {
    return this.page.locator("//a[normalize-space()='VA']");
  }

  get Select_Conventional_in_Loan_Type(): Locator {
    return this.page.locator("//li/span[normalize-space()=\"Conventional\"]");
  }

  get Select_VA_in_Loan_Type(): Locator {
    return this.page.locator("//li/span[normalize-space()=\"VA\"]");
  }

  get Select_FHA_In_Loan_Type(): Locator {
    return this.page.locator("//li/span[normalize-space()=\"FHA\"]");
  }

  get Lenders_Dropdown(): Locator {
    return this.page.locator("//label[normalize-space()=\"Lenders\"]/following-sibling::div/app-bs-multi-select");
  }

  get Property_Details(): Locator {
    return this.page.locator("//span[normalize-space()='Property Details']");
  }

  get Zip_Text_in_Property_Details(): Locator {
    return this.page.locator("//label[@for='side-zip'][text()='Zip']");
  }

  get Zip_Code_in_Property_Details(): Locator {
    return this.page.locator("//label[@for='side-zip'][text()='Zip']/following-sibling::div/input");
  }

  get Default_Check_in_Favorites(): Locator {
    return this.page.locator("//tbody//tr//td//a//i[@class='fas fa-check-circle text-success']");
  }

  get Favourite_Default_Uncheck_Icon_In_Table(): Locator {
    return this.page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]/../..//i[contains(@class, \"text-grey\")]\n");
  }

  get Rate_Card_Rate_1(): Locator {
    return this.page.locator("(//div[@class='rate-card-wrapper']/div[@class='rate-card'][1]/div[2]/div/div[2])[1]");
  }

  get Rate_Card_Rate2(): Locator {
    return this.page.locator("(//div[@class='rate-card-wrapper']/div[@class='rate-card'][2]/div[2]/div/div[2])[1]");
  }

  get Rate_Card_Rate_3(): Locator {
    return this.page.locator("(//div[@class='rate-card-wrapper']/div[@class='rate-card'][3]/div[2]/div/div[2])[1]");
  }

  get _10_to_15_Random_Column_Text_Price(): Locator {
    return this.page.locator("((//table)[2]/tbody//tr/td[3])[$|10 to 15 Random Number|]/div");
  }

  get _1st_row_Price_Text(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]");
  }

  get previous_Button_Calendar(): Locator {
    return this.page.locator("//button[@class=\"previous\"]/span");
  }

  get Price_Toggle_Green_Color(): Locator {
    return this.page.locator("//i[@class='fal fa-retweet-alt ml-1 text-success']");
  }

  get Close_the_Program_Dropdown(): Locator {
    return this.page.locator("(//div[@id='result-filter']/div[@class='pricing-banner']//label[@for='program-list'][normalize-space()='Program'])[1]");
  }

  get Uncheck_All_Programs_under_Lender_Dropdown(): Locator {
    return this.page.locator("//bs-dropdown-container/div/ul/li[1]");
  }

  get Price_Data_After_Clicked_on_Price_Toggle(): Locator {
    return this.page.locator("//div[@class=\"percent\" and @ng-reflect-klass=\"percent\"]");
  }

  get Second_Row_Quick_Price_Data(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[2]/td[3]/div[1]");
  }

  get Checkbox(): Locator {
    return this.page.locator("//td[@data-label='COLUMN_NAME_ENUM.SELECTION']//div[6]");
  }

  get _10_to_15_Random_Price_in_Staging(): Locator {
    return this.page.locator("((//table)[2]/tbody//tr/td[3])[$|10 to 15 Random Number|]/div");
  }

  get Default_Configuration_in_Pricer_Configurations(): Locator {
    return this.page.locator("//b[contains(.,'Default Configuration')]");
  }

  get Pricer_Options_In_Default_Configuration(): Locator {
    return this.page.locator("//label[contains(@for,'pricer-optionsQuickPricer')]");
  }

  get Default_ZipCode(): Locator {
    return this.page.locator("//label[contains(@for,'ppQuickPricerdefaultZipCode')]");
  }

  get Default_ZipCode_Textbox(): Locator {
    return this.page.locator("//input[@id='ppQuickPricerdefaultZipCode']");
  }

  get Document_Generation_Settings_In_Quick_pricer(): Locator {
    return this.page.locator("//label[contains(@for,'document-generation-settingsQuickPricer')]");
  }

  get Search_Fields_In_Pricer_Configurations(): Locator {
    return this.page.locator("//label[contains(@for,'search-fieldsQuickPricer')]");
  }

  get Income_and_Debt_in_Search_Fields(): Locator {
    return this.page.locator("//span[contains(text(),'Income / Debt')]");
  }

  get Request_Lock_Exception_popup(): Locator {
    return this.page.locator("//label[.=' Request Lock Exception ']");
  }

  get Concession_Type_textbox(): Locator {
    return this.page.locator("//select[@aria-label='Concession Type']");
  }

  get Locked_PostLock_Request_Denied(): Locator {
    return this.page.locator("//span[contains(text(),'Locked (Post-Lock Request Denied)')]");
  }

  get Extension_Button(): Locator {
    return this.page.locator("//button[contains(text(),'Extension')]");
  }

  get CancelButton(): Locator {
    return this.page.locator("//button[@class='btn btn-sm mr-2'][contains(text(),'Cancel')]");
  }

  get Concession_Reason_In_More_Details(): Locator {
    return this.page.locator("//tbody/tr[8]/th[1]");
  }

  get Concession_Adjustment_Value_In_More_Details(): Locator {
    return this.page.locator("//tbody/tr[8]/td[1]/div[1]");
  }

  get Price_Concession_Requested_PostLock(): Locator {
    return this.page.locator("(//span[@ng-reflect-ng-style='[object Object]'][normalize-space()='Price Concession Requested (Post-Lock)'])[1]");
  }

  get Lock_Expiration_Date(): Locator {
    return this.page.locator("//div[@class='rounded data-content']//div[2]//div[1]//div[7]");
  }

  get Deny_Post_Lock_Request_Button_In_LD(): Locator {
    return this.page.locator("//button[contains(text(),'Deny')]");
  }

  get Locked_PostLock_Request_Denied_2(): Locator {
    return this.page.locator("//span[.='Locked (Post-Lock Request Denied)']");
  }

  get Locked_Under_Lock_Information(): Locator {
    return this.page.locator("(//span[@ng-reflect-ng-style='[object Object]'][text()='Locked'])[1]");
  }

  get Hide_Product_Finderdefault_ui(): Locator {
    return this.page.locator("//label[@for='keyFieldQuickPricerhideProductFinder']/..//input");
  }

  get Show_Options_in_DialogDefault_UI(): Locator {
    return this.page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input");
  }

  get Show_Lock_Period(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerlockPeriod\"]");
  }

  get Hide_Action_Column(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricerhideActionColumn']");
  }

  get Favourite_Name_In_Table_ListInside_Favourite_icon(): Locator {
    return this.page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]");
  }

  get Result_Columns_Checkbox(): Locator {
    return this.page.locator("//label[contains(text(),\"Results Columns\")]//following::div[@class=\"inner-group\"]//input[contains(@id,\"keyColQuick\") and @type=\"checkbox\"]//following::label[contains(@for,\"keyColQuick\")]");
  }

  get Quick_Pricer_Header_Columns(): Locator {
    return this.page.locator("(//thead)[2]//th");
  }

}