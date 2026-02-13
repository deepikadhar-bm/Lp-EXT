import { Page, Locator } from '@playwright/test';

/**
 * Page Object: PPE EXT LD
 * Elements: 363
 */
export class PpeExtLdPage {
  constructor(private page: Page) {}

  get Pricing_Scenario_In_Quick_Pricer(): Locator {
    return this.page.locator("//nav[@id='sidebar']//span[text()[normalize-space() = \"Pricing Scenario\"]]");
  }

  get Pricing_Comparison_PDF_template(): Locator {
    return this.page.locator("//label[normalize-space()='Pricing Comparison PDF template']/following-sibling::div/select/option[2]");
  }

  get Username_Input_Field(): Locator {
    return this.page.locator("//input[@id='inputEmail']");
  }

  get Price_In_Result_Columns(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Price\"]]");
  }

  get Quick_Pricer_In_Header(): Locator {
    return this.page.locator("//a[@aria-label=\"Quick Pricer\"]");
  }

  get Pricer_Configs(): Locator {
    return this.page.locator("//h4[text()[normalize-space() = \"Pricer Configs\"]]");
  }

  get Loan_Pricer_Configuration_in_Config(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Loan Pricer Configuration\"]]");
  }

  get Enable_Custom_UI(): Locator {
    return this.page.locator("//label[@for=\"customUIMain\"]");
  }

  get Enable_Custom_UI_checkbox(): Locator {
    return this.page.locator("//input[@id=\"customUIMain\"]");
  }

  get Custom_UI_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"quickPricersCustomUI\"]");
  }

  get Save_Button_In_Loan_UI(): Locator {
    return this.page.locator("//button[normalize-space()='Save']");
  }

  get Success_In_Save_Alert(): Locator {
    return this.page.locator("//span[contains(text(),'Success')]");
  }

  get OK_In_Success_Textbox(): Locator {
    return this.page.locator("//button[normalize-space()='Ok']");
  }

  get Checkbox_3_In_Rate(): Locator {
    return this.page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[3]/td[2]/div[1]/input)[1]");
  }

  get Create_PDF_In_LD(): Locator {
    return this.page.locator("(//span[normalize-space()='CREATE PDF'])[1]");
  }

  get Impersonate_In_Quickpricer(): Locator {
    return this.page.locator("//label[normalize-space()='Impersonate']");
  }

  get Impersonate_Textbox(): Locator {
    return this.page.locator("//input[@id='impersonateText']");
  }

  get Search_Button(): Locator {
    return this.page.locator("//button[@aria-label=\"Search\"]");
  }

  get Close_Button_In_Adjustments_and_Disqualifications(): Locator {
    return this.page.locator("//lib-dlg-cost-to-borrower//button[@class='btn modal-close']");
  }

  get More_Details_Under_Scenario_Pricing_Request(): Locator {
    return this.page.locator("//a[contains(text(),'More Details ..')]");
  }

  get Extention(): Locator {
    return this.page.locator("//th[contains(.,'Extension: (5 days)')]");
  }

  get Extension_Requested_Under_Lock_Information(): Locator {
    return this.page.locator("//span[normalize-space()='Extension Requested']");
  }

  get Price_Change_Log(): Locator {
    return this.page.locator("//button[normalize-space()='Price Change Log']");
  }

  get Close_Button_In_Price_Change_Log(): Locator {
    return this.page.locator("//h5[.='Price Change Log']/following-sibling::button/span[@aria-label=\"Close\"]");
  }

  get Lock_Button(): Locator {
    return this.page.locator("//button[normalize-space()='Lock']");
  }

  get Close_the_Lenders_Dropdown(): Locator {
    return this.page.locator("(//div[@id='result-filter']/div[@class='pricing-banner']//label[@for='lender-list'][normalize-space()='Lenders'])[1]");
  }

  get All_Option_in_Lenders_Dropdown(): Locator {
    return this.page.locator("(//app-bs-multi-select[@id='lender-list'])[1]");
  }

  get Second_Option_In_Lenders_Dropdown(): Locator {
    return this.page.locator("//bs-dropdown-container/div/ul/li[2]");
  }

  get All_In_lenders(): Locator {
    return this.page.locator("//li[@class='item active lenders-all']");
  }

  get Expanded_Prime_30_Yr_Fixed_Full_Doc_In_Programs(): Locator {
    return this.page.locator("//span[normalize-space()='Expanded Prime 30 Yr Fixed - Full Doc (24 Mo)']");
  }

  get Uncheck_All_Option_In_Programs_Dropdown(): Locator {
    return this.page.locator("//bs-dropdown-container/div/ul/li[1]");
  }

  get Min_In_Price(): Locator {
    return this.page.locator("//input[@class='form-control ng-pristine ng-valid ng-touched']");
  }

  get Max_In_Price(): Locator {
    return this.page.locator("//input[@class='form-control ng-valid ng-dirty ng-touched']");
  }

  get Price_Value_In_Adjustments_and_Disqualifications(): Locator {
    return this.page.locator("//lib-dlg-cost-to-borrower[1]//table[@class='adj-dlg']/tbody[1]/tr[1]/td[3]/div");
  }

  get Queue_Table(): Locator {
    return this.page.locator("//*[@class='table-responsive']/table");
  }

  get RateCardDialog(): Locator {
    return this.page.locator("(//div[@class='rate-card-wrapper']/div[1])[1]");
  }

  get Queue_Error_Status(): Locator {
    return this.page.locator("//*[@title='Error: Error']");
  }

  get FHA_In_Favorites(): Locator {
    return this.page.locator("//a[normalize-space()='FHA']");
  }

  get Conventional_In_Favorites(): Locator {
    return this.page.locator("//a[normalize-space()='Conventional']");
  }

  get Drop_Down_in_Pricing_Comparision(): Locator {
    return this.page.locator("//label[normalize-space()='Pricing Comparison PDF template']/following-sibling::div/select");
  }

  get Close_Button_In_Pricing_Comparison_PDF(): Locator {
    return this.page.locator("//h5[normalize-space()='PRICING-COMPARISON.PDF']/following-sibling::button/span");
  }

  get Program_in_Quick_Pricer(): Locator {
    return this.page.locator("(//div[@id='result-filter']/div[@class='pricing-banner']//label[@for='program-list'][normalize-space()='Program'])[1]");
  }

  get Program_Dropdown(): Locator {
    return this.page.locator("(//app-bs-multi-select[@id='program-list'])[1]");
  }

  get Second_ProgramOption_under_Program_Dropdown(): Locator {
    return this.page.locator("//bs-dropdown-container/div/ul/li[2]");
  }

  get Select_Program_Element_2(): Locator {
    return this.page.locator("//bs-dropdown-container/div/ul/li[3]");
  }

  get Show_Rates_In_125_Checkbox(): Locator {
    return this.page.locator("//label[text()='Show Rates in .125']/..//input[@type=\"checkbox\"]");
  }

  get Rate_Under_Search_Result_View(): Locator {
    return this.page.locator("(//label[contains(text(),'Rate')])[1]");
  }

  get Locked_Status(): Locator {
    return this.page.locator("(//h4[text()=\" Lock Information \"]/../../following-sibling::div//ul//li)[1]//span[text()=\"Auto Ellie Lockdesk\"]/../span[text()=\"Locked\"]");
  }

  get Cancel_Lock_In_Lock_Information(): Locator {
    return this.page.locator("//button[.='  Cancel  Lock ']");
  }

  get Confirm_In_lock_cancellation(): Locator {
    return this.page.locator("//div[normalize-space()='Are you sure you want to submit a lock cancellation?']/following-sibling::div/div/button[normalize-space()=\"Confirm\"]");
  }

  get Lock_Cancelled(): Locator {
    return this.page.locator("//span[normalize-space()='Lock Cancelled']");
  }

  get Relock_Requested_In_Lock_Information(): Locator {
    return this.page.locator("//span[normalize-space()='Relock Requested (Higher-Of)']");
  }

  get Price_In_Worse_Case_Log(): Locator {
    return this.page.locator("//th[@data-th='Field'][normalize-space()='Price']");
  }

  get Price_Change_Log_In_Lock_Information(): Locator {
    return this.page.locator("//button[position()=2]");
  }

  get Price_Change_Log_Popup(): Locator {
    return this.page.locator("//div[contains(text(),'Price Change Log')]");
  }

  get Close_Button_In_Price_Change(): Locator {
    return this.page.locator("//span[contains(@aria-label,'Close')]");
  }

  get Lock_In_Relock_Requested(): Locator {
    return this.page.locator("//button[.='  Lock ']");
  }

  get LockedStatus(): Locator {
    return this.page.locator("(//span[normalize-space()='Locked'])");
  }

  get Create_PDF_in_Rate_Card(): Locator {
    return this.page.locator("(//lib-rate-card//span[normalize-space()='CREATE PDF'])[1]");
  }

  get Send_PDF_in_Rate_Card(): Locator {
    return this.page.locator("//button[contains(@class,'btn btn-primary mr-2 mt-2')]");
  }

  get Pipeline_in_Header(): Locator {
    return this.page.locator("//a[@aria-label=\"Pipeline\"]//span");
  }

  get VA_In_Loan_Type(): Locator {
    return this.page.locator("//button[normalize-space()='VA']");
  }

  get _10_to_15_Random_column_textRate_in_Staging(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[1]/div[$|10 to 15 Random Number|]");
  }

  get Price_Toggle_Blue_color(): Locator {
    return this.page.locator("//i[@class='far fa-retweet-alt ml-1 text-primary']");
  }

  get Data_under_Table(): Locator {
    return this.page.locator("(//table//tbody)[last()]");
  }

  get FHA_Option_Visible_on_Loan_TypeDropdown(): Locator {
    return this.page.locator("//lib-bs2-multi-select[@ng-reflect-value=\"FHA\"]");
  }

  get Rate_Value_Under_Table(): Locator {
    return this.page.locator("//div[@class=\"font-weight-bold\"]");
  }

  get Table_under_Fees_and_Costs(): Locator {
    return this.page.locator("//table[@class=\"adj-dlg\"]");
  }

  get Rate_Under_Fees_and_Costs_Page(): Locator {
    return this.page.locator("(//th[text()='Rate']/..//td//div[@class=\"percent\"])[last()]");
  }

  get Lender_Column_under_Table(): Locator {
    return this.page.locator("//th[text()=' Lender ']");
  }

  get Extension_Request_Button_Lock(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Extension Request\"]]");
  }

  get Lender_Name_under_Lender_Column(): Locator {
    return this.page.locator("//th[normalize-space()='Lender']/ancestor::table//tr[1]/td[@data-label=\"COLUMN_NAME_ENUM.LENDER\"]/div[1]");
  }

  get Program_Column(): Locator {
    return this.page.locator("//th[text()=' Program ']");
  }

  get Program_Name_under_Program_Column(): Locator {
    return this.page.locator("//th[text()=' Program ']/../../..//div[@container=\"body\"]");
  }

  get Lenders_Dropdown_Collapse(): Locator {
    return this.page.locator("//li[@class='item active lenders-all']");
  }

  get Price_Data(): Locator {
    return this.page.locator("//div[@class=\"percent\" and @ng-reflect-klass=\"percent\"]");
  }

  get Cancel_Lock_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]");
  }

  get FHA_30Yr_Fixed_In_Program(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[10]/div[1]/a[1]");
  }

  get FHA_30_YR_FIXED_Program(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/a[1]");
  }

  get Config_Icon(): Locator {
    return this.page.locator("//a[@aria-label=\"Config\"]//span");
  }

  get Pricing_Results_Inside_a_table_in_staging(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[1]/div[1]");
  }

  get Last_Row_Price_text_in_Staging(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[3]/div[last()]");
  }

  get Second_Row_Rate_in_Staging(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[2]/td[1]/div[1]");
  }

  get _10_to_15_Random_Rate_text(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[$|10 to 15 Random Number|]/td[1]/div[1]");
  }

  get Last_Row_text_Rate(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[last()]/td[1]/div[1]/div[1]");
  }

  get Checkbox_2(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[2]/div[2]/input[1]");
  }

  get Checkbox_3(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[2]/div[3]/input[1]");
  }

  get Custom_UI_In_Config(): Locator {
    return this.page.locator("//b[contains(text(),'Custom UI')]");
  }

  get Custom_UI_Checkbox_In_Loan_Pricer(): Locator {
    return this.page.locator("//input[@id=\"customUIMain\"]");
  }

  get Search_Fields_Hide_Layout(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]");
  }

  get Deny_Request_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Deny Request\"]]");
  }

  get Financed_or_Exempt_Dropdown(): Locator {
    return this.page.locator("//select[@aria-label=\"Financed or Exempt?\"]");
  }

  get General_Pricer_Settings_In_Config(): Locator {
    return this.page.locator("//label[@for=\"general-pricer-settingsQuickPricer\"]");
  }

  get Save_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Save\"]]");
  }

  get Success(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Success\"]]");
  }

  get Ok_Button_In_Success_Alert(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Ok\"]]");
  }

  get Results_Columns(): Locator {
    return this.page.locator("//label[@for=\"results-columnsQuickPricer\"]");
  }

  get ActionsResults_Columns(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"Actions\"]]");
  }

  get Price_Edit_Checkboxview_details_search_result_view(): Locator {
    return this.page.locator("(//input[@type='checkbox' and @tooltip='View Details'])[1]");
  }

  get Pricer_Options_In_Automation_Dont_Touch(): Locator {
    return this.page.locator("//app-tab-component[@title=\"Quick Pricer\"]/div[1]/div[1]/div[4]/div[16]/div[2]/div[3]/div[1]/div[1]/label[1]");
  }

  get Missing_ZipCode_Popup(): Locator {
    return this.page.locator("//div[@class=\"modal-content\"]//span[text()[normalize-space() = \"Missing zip code, please provide a zip code to have results\"]]");
  }

  get Favorite_Yellow_Star_Iconquick_pricer_screen(): Locator {
    return this.page.locator("//div[@class=\"stFavorite\"]//i[contains(@class, \"yellow\")]");
  }

  get Favourite_Table_ListQuick_Pricer(): Locator {
    return this.page.locator("//table[@class=\"table\"]");
  }

  get Favourite_List_countquick_pricer(): Locator {
    return this.page.locator("//table[@class=\"table\"]//td/a/i[contains(@class, \"text-danger\")]");
  }

  get Favourite_List_count_deletequick_pricer(): Locator {
    return this.page.locator("//table[@class=\"table\"]//td/a/i[contains(@class, \"text-danger\")]");
  }

  get Close_ButtonFavourite_List_Close(): Locator {
    return this.page.locator("(//button[contains(@class,\"modal-close\")]/span[@aria-label=\"Close\"])[4]");
  }

  get Default_Search_Result_Viewlock_desk(): Locator {
    return this.page.locator("//div[@class=\"result-panel\"]\n");
  }

  get Zip_Inputempty_default_zip_input(): Locator {
    return this.page.locator("//div[@class=\"row form-group\"]/label/..//input[@id=\"zip\" and @type=\"text\"]");
  }

  get Input_Field_For_Favorite_NameInside_favorite_icon(): Locator {
    return this.page.locator("//div/input[@placeholder=\"Favorite name\"]");
  }

  get Plus_IconInside_Favorite_Icon(): Locator {
    return this.page.locator("//div[contains(@class, 'input-group-append')]//i[contains(@class, 'fa-plus')]");
  }

  get Close_Signcross_option_inside_favourite_icon(): Locator {
    return this.page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]//span[@aria-label=\"Close\"]");
  }

  get Zip_Code_Label_Under_Property_Section(): Locator {
    return this.page.locator("//h5[contains(text(), \" Property \")]/..//div[@class=\"form-group\"]/label[@aria-label=\"Zip Code\"]");
  }

  get Property_Section(): Locator {
    return this.page.locator("//h5[contains(text(), \" Property \")]");
  }

  get Zip_Code_Input_Field_Under_Property_Section(): Locator {
    return this.page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]");
  }

  get Success_Message_In_Save_Alert(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Your settings have been saved.\"]]");
  }

  get Rows_In_Favorites_Table(): Locator {
    return this.page.locator("(//table[@class=\"table\"]//tr)[position()>=2]");
  }

  get Favourite_Default_Uncheck_Icon_in_Tablegreen(): Locator {
    return this.page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]/../..//i[contains(@class, \"text-success\")]");
  }

  get ResultsColumnCheckboxText(): Locator {
    return this.page.locator("(//label[contains(text(),\"Results Columns\")]//following::div[@class=\"inner-group\"]//input[contains(@id,\"keyColQuick\") and @type=\"checkbox\"]//following::label[contains(@for,\"keyColQuick\")])[$|count|]");
  }

  get VerifyResultColumnCheckbox(): Locator {
    return this.page.locator("//label[text()=\"$|ResultColumnData|\"]//parent::div//input[contains(@id,\"keyColQuick\") and @type=\"checkbox\"]");
  }

  get Eligible_QM(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Eligible QM (3511)\"]]");
  }

  get Favourite_Name_For_Favourite_Default_Uncheckgreen(): Locator {
    return this.page.locator("//table[@class=\"table\"]//tr/td/../..//i[contains(@class, \"text-success\")]/../../../td/a[contains(normalize-space(text()), \"$|test|\")]");
  }

  get First_Name_Input_Send_Pricing(): Locator {
    return this.page.locator("//div[@role=\"document\"]/div[1]/app-dlt-send-pricing-comparison[1]/div[1]/div[2]/div[1]/div[1]/input[1]");
  }

  get Middle_Name_Send_Pricing(): Locator {
    return this.page.locator("//div[@role=\"document\"]/div[1]/app-dlt-send-pricing-comparison[1]/div[1]/div[2]/div[1]/div[2]/input[1]");
  }

  get Last_Name_Send_Pricing(): Locator {
    return this.page.locator("//div[@role=\"document\"]/div[1]/app-dlt-send-pricing-comparison[1]/div[1]/div[2]/div[1]/div[3]/input[1]");
  }

  get Email_Input_Send_Pricing(): Locator {
    return this.page.locator("//input[@id='email-borr']");
  }

  get phone_Input_Send_Pricing(): Locator {
    return this.page.locator("//input[@id='phone-borr']");
  }

  get Pricing_Comparison_PDF_Dropdown(): Locator {
    return this.page.locator("//div[@role=\"document\"]//select");
  }

  get Preview_PDF_Button_Pricing_Comparison(): Locator {
    return this.page.locator("//button[@aria-label=\"Preview PDF\"]");
  }

  get Download_Button_Pricing_Comparison(): Locator {
    return this.page.locator("//span[contains(text(),\"Download\")]");
  }

  get PDF_FileName_UI(): Locator {
    return this.page.locator("//h5[@class=\"modal-title sticky-top\"]");
  }

  get Close_Button_Pricing_Comparison(): Locator {
    return this.page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]");
  }

  get Rate_ValueQuickPricer(): Locator {
    return this.page.locator("(//input[@type='checkbox' and @tooltip='View Details']/../../../..//a/../../../../..//a[text()=\" Rate \"]/../../../..//td//div[@class=\"font-weight-bold\"])[1]");
  }

  get First_Row_Price_Data_In_Eligible_Tab(): Locator {
    return this.page.locator("(//table//th/a[normalize-space(.)=\"Rate\"]//following::td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]/div)[1]");
  }

  get Points_Value_Details(): Locator {
    return this.page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[2]/div[2]/lib-rate-card[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]");
  }

  get Comp_Plan_ValueQuickPricer(): Locator {
    return this.page.locator("(//a[contains(text(),\" Comp.Plan \")]/../../../..//div[contains(@class,\"percent-complan\")])[1]");
  }

  get Comp_Plan_Details(): Locator {
    return this.page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[2]/div[2]/lib-rate-card[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[2]");
  }

  get Payment_ValueQuickPricer(): Locator {
    return this.page.locator("(//th[contains(text(),\"Payment\")]/../../../..//div[contains(@class,\"currency\")])[1]");
  }

  get Payment_details(): Locator {
    return this.page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[2]/div[2]/lib-rate-card[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/div[2]");
  }

  get Send_Button_pricing_Comparison(): Locator {
    return this.page.locator("//button[contains(@aria-label,\"Save \")]");
  }

  get Ok_Button(): Locator {
    return this.page.locator("//button[@class=\"btn btn-primary text-uppercase\"]");
  }

  get AUTOMATION_DONT_TOUCH(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"AUTOMATION DONT TOUCH\"]]");
  }

  get Pricing_Comparison_Option(): Locator {
    return this.page.locator("//option[text()=\"Pricing Comparison PDF\"]");
  }

  get Cancel_Button_Pricing_Comparison(): Locator {
    return this.page.locator("//button[contains(@aria-label,\"Cancel\")]");
  }

  get Close_Button_Details(): Locator {
    return this.page.locator("//i[contains(@class,\"fa fa-times\")]");
  }

  get Admin_Fee_Search_Field(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPriceradminFee\"]");
  }

  get Compensation_Type_Options_Search_Field(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricercompensationTypeOptions\"]");
  }

  get Construction_Perm_As_Purchase_Search_Field(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerconstructionPermAsPurchase\"]");
  }

  get Dti_search_Field(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerdti\"]");
  }

  get AUS_Pricing(): Locator {
    return this.page.locator("//div[@class=\"custom-select-wrap aus\"]");
  }

  get Show_Options_in_Dialog_Search_Fielddefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerspecialMortgageOptionCategoryDialog\"]");
  }

  get PMI_default(): Locator {
    return this.page.locator("//label[@for=\"pmiQuickPricer\"]");
  }

  get Show_Customized_Smo_Categoriesdefault(): Locator {
    return this.page.locator("//input[@id=\"smoQuickPricer\"]");
  }

  get Lock_Days1(): Locator {
    return this.page.locator("//label[contains(text(),\"Lock Days\")]");
  }

  get Compensation_Type(): Locator {
    return this.page.locator("//label[contains(text(),\"Compensation Type\")]");
  }

  get Rate_Result_Settings(): Locator {
    return this.page.locator("//input[@id='ppQuickPricershowResultsFilter']");
  }

  get Loan_Type_Result_Settings(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricershowLoanType\"]");
  }

  get Loan_Term_Result_Settings(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricershowLoanTerm\"]");
  }

  get Retain_Applied_Filters_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricerretainAppliedFilters\"]");
  }

  get Rate_Quick_Pricer(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Rate\"]]");
  }

  get Price_Quick_Pricer(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Price\"]]");
  }

  get Program_Quick_Pricer(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Program\"]]");
  }

  get Lender_Quick_Pricer(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"Lender\"]]");
  }

  get Result_Filter_Button_Quick_Pricer(): Locator {
    return this.page.locator("//button[@id='result-filter-btn']");
  }

  get Result_SettingsAutomation_Donot_Touch(): Locator {
    return this.page.locator("(//label[text()=\"Result Settings\" and contains(@for,\"QuickPricer\")])[last()]");
  }

  get Results_Filter_CheckboxAutomation_Donot_touch(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59showResultsFilter\"]");
  }

  get Eligible_QuickPricer(): Locator {
    return this.page.locator("//a[contains(text(), \"Eligible \")]");
  }

  get Impersonate_Quick_Pricer(): Locator {
    return this.page.locator("//label[contains(text(),\"Impersonate\")]");
  }

  get German_Centeno(): Locator {
    return this.page.locator("//li[contains(text(),\" German Centeno \")]");
  }

  get Search_Button_Quick_Pricer(): Locator {
    return this.page.locator("//button[contains(text(),\" Search \")]");
  }

  get Clear_UserImpersonation_Search_Button(): Locator {
    return this.page.locator("//button[@aria-label=\"Clear User-Impersonation Search\"]");
  }

  get Advanced_Settings_Custom_UI(): Locator {
    return this.page.locator("//label[@for=\"advanced-pricing-settingsQuickPricer1\"]");
  }

  get Impersonation_ExternalID(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer1useExternalID\"]");
  }

  get Vertical_Layout_Icon(): Locator {
    return this.page.locator("//div[@ng-reflect-klass=\"vertical-icon\"]");
  }

  get Rate_Adj_Quick_Pricer(): Locator {
    return this.page.locator("(//th[text()[normalize-space() = \"Rate Adj.\"]])[2]");
  }

  get Price_Adj_Value1(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]/div[1]");
  }

  get Final_Price_Valuepopup_price(): Locator {
    return this.page.locator("((//th[contains(text(),\"Price\")])[2]/../../..//div[@class=\"percent\"])[3]");
  }

  get Final_Rate_ValuePopup_Rate(): Locator {
    return this.page.locator("(//th[contains(text(),\"Rate\")]/..//div[@class=\"percent\"])[3]");
  }

  get Close_Button_Popup(): Locator {
    return this.page.locator("//h5[contains(text(),\"Details -\")]/ancestor::div[@class=\"modal-content\"]//button[@class=\"btn modal-close\"]");
  }

  get Rate_Value(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.RATE\"]/div[1]");
  }

  get Price_Value(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]/div[1]");
  }

  get Rate_Adjustment_Value1(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.RATE_ADJUSTMENT\"]/div[1]");
  }

  get Close_Button_Rate_Adj(): Locator {
    return this.page.locator("//h5[contains(text(),\"Details -\")]/ancestor::div[@class=\"modal-content\"]//button[@class=\"btn modal-close\"]");
  }

  get Rate_Quick_Pricer_Header(): Locator {
    return this.page.locator("(//a[contains(text(),\" Rate \")])[2]");
  }

  get Rate_Value_CustomUi(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.RATE\"]/div[1]");
  }

  get Rate_Value_CustomUI(): Locator {
    return this.page.locator("(//div[@class=\"font-weight-bold\"])[1]");
  }

  get Cost_To_BorrowerQuick_Pricer(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]");
  }

  get Cost_To_Borrower_Value(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div[1]");
  }

  get TotalFee_Amount_Value(): Locator {
    return this.page.locator("//th[contains(text(),\"Total Fee Amount\")]/..//span");
  }

  get Fees_and_Costs(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"Fees and Costs\"]]");
  }

  get Cost_To_Borrower_Results_Columns(): Locator {
    return this.page.locator("//label[@for=\"keyColQuickPricercostToBorrower\"]/..//input");
  }

  get Total_Fee_Amount_Popup(): Locator {
    return this.page.locator("//th[contains(text(),\"Total Fee Amount\")]/..//span");
  }

  get Result_Type_QM(): Locator {
    return this.page.locator("//app-tab-component[@title=\"Quick Pricer\"]/div[1]/div[1]/div[4]/div[16]/div[2]/div[3]/ul[1]/li[2]/div[1]/div[1]/div[1]/div[1]/label[1]");
  }

  get Result_Type_QMDefault_UI(): Locator {
    return this.page.locator("//label[@for=\"qmResultTypeQuickPricer\"]");
  }

  get Result_Filter_Button_CustomUI(): Locator {
    return this.page.locator("(//button[@id='result-filter-btn'])[1]");
  }

  get Compensation_Percent_Element(): Locator {
    return this.page.locator("//label[contains(text(),\"Compensation Percent\")]");
  }

  get Show_Cost_To_Borrower_CheckboxDefaultUI(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricercostToBorrower\"]");
  }

  get LTVSearch_Fields_QP(): Locator {
    return this.page.locator("//label[normalize-space(text())=\"LTV\"]");
  }

  get LTV_Value(): Locator {
    return this.page.locator("//input[@placeholder=\"LTV\"]");
  }

  get Default_To_AutoSearch_Element(): Locator {
    return this.page.locator("//label[@for=\"ppQuickPricerdefaultToAutoSearch\"]");
  }

  get Default_To_AutoSearch(): Locator {
    return this.page.locator("//label[@for=\"ppQuickPricerdefaultToAutoSearch\"]/..//input");
  }

  get Auto_Search_On_Change_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"autoSearch\"]");
  }

  get Pricer_Options_Default_UI(): Locator {
    return this.page.locator("//label[@for=\"pricer-optionsQuickPricer\"]//span");
  }

  get Zip_Input_Search_Field(): Locator {
    return this.page.locator("//label[@for=\"zip\"]/..//input");
  }

  get More_Options(): Locator {
    return this.page.locator("//nav[@id='sidebar']//span[text()[normalize-space() = \"More Options\"]]");
  }

  get Dynamic_Fields(): Locator {
    return this.page.locator("//button[contains(text(),\"Dynamic Fields \")]");
  }

  get Dynamic_Fields_Popup(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"Dynamic Fields\"]]");
  }

  get Compensation_Type_Options(): Locator {
    return this.page.locator("//label[@for=\"keyFieldQuickPricercompensationTypeOptions\"]");
  }

  get Price_In_Result_Filter(): Locator {
    return this.page.locator("//label[text()[normalize-space() = \"Rate\"]]/../..//label[contains(text(),\" Price (Base\")]");
  }

  get Loan_Type_In_Result_Filter(): Locator {
    return this.page.locator("//label[@for=\"loan-type\" and text()[normalize-space() = \"Loan Type\"]]");
  }

  get Loan_Term_In_Result_Filter(): Locator {
    return this.page.locator("//label[text()[normalize-space() = \"Loan Term\"]]");
  }

  get Program_In_Results_Filter(): Locator {
    return this.page.locator("//label[@for=\"program-list\"]");
  }

  get Lenders_In_Result_Filter(): Locator {
    return this.page.locator("//label[@for=\"lender-list\"]");
  }

  get All_option_in_Lenders(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]/li[1]");
  }

  get Option_In_Program(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]/li[2]");
  }

  get Clear_Button_Result_Filter(): Locator {
    return this.page.locator("//small[text()[normalize-space() = \"Clear\"]]");
  }

  get Close_Button_Result_Filter(): Locator {
    return this.page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[1]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[1]/div[1]/lib-result-filter-popover[1]/div[1]/div[1]/div[1]/i[1]");
  }

  get Lender_In_results(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LENDER\"]/div[1]");
  }

  get Rate_In_Result_Filter(): Locator {
    return this.page.locator("//label[text()[normalize-space() = \"Rate\"]]");
  }

  get No_Eligible_Results_Found(): Locator {
    return this.page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[1]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]");
  }

  get Click_Here(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"here\"]]");
  }

  get FHA_LoanType(): Locator {
    return this.page.locator("//li//span[text()[normalize-space() = \"FHA\"]]");
  }

  get UFMIP_Fee_Popup(): Locator {
    return this.page.locator("//th[contains(text(),\"UFMIP Fee\")]/..//span");
  }

  get Success_Load_Type(): Locator {
    return this.page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]");
  }

  get Funding_Fee_Amount_Popup(): Locator {
    return this.page.locator("//th[contains(text(),\"Funding Fee\")]/..//span");
  }

  get Loan_Amount_Popup(): Locator {
    return this.page.locator("//th[contains(text(),\" (Loan Amount)\")]");
  }

  get Guarantee_Fee_Popup(): Locator {
    return this.page.locator("//th[contains(text(),\"Guarantee Fee\")]/..//span");
  }

  get Hide_Ineligible_Results_Tab_Custom_UI(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59hideIneligibleResultsTab\"]");
  }

  get Price_Adj_Column_Data(): Locator {
    return this.page.locator("(//th[normalize-space(text())='Price Adj'])[2]/ancestor::table//tbody//td[@data-label='COLUMN_NAME_ENUM.ADJ']//span[contains(@class,'text-danger')]");
  }

  get Rate_Adj_Column_Data(): Locator {
    return this.page.locator("(//th[normalize-space(text())='Rate Adj.'])[2]/ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.RATE_ADJUSTMENT\"]//span[contains(@class,'text-danger')]");
  }

  get PriceScreen(): Locator {
    return this.page.locator("(//a[normalize-space(text())=\"Price\"])[2]");
  }

  get Select_45_Days(): Locator {
    return this.page.locator("//option[text()=\"45 days \"]");
  }

  get Lock_Period_Data(): Locator {
    return this.page.locator("//th[normalize-space(text())='Lock Period']/ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div");
  }

  get Select_15_Days(): Locator {
    return this.page.locator("//option[text()=\"15 days \"]");
  }

  get Search_Fields_Custom_UI(): Locator {
    return this.page.locator("//label[contains(@for,\"search-fieldsQuickPricer59\")]");
  }

  get Lock_Days_Custom_UI(): Locator {
    return this.page.locator("//input[contains(@id,\"keyFieldQuickPricer59lockDays\")]");
  }

  get Select_45_Days_Custom_UI(): Locator {
    return this.page.locator("//li//span[contains(text(),\"45 days\")]");
  }

  get Select_15Days_CustomUI(): Locator {
    return this.page.locator("//span[text()=\" 15 days  \"]");
  }

  get Show_Results_Filter_CheckBox_Custom_UI(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59showResultsFilter\"]");
  }

  get Rate_Result_Settings_CustomUI(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59showRate\"]");
  }

  get Price_CustomUI(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59showPoints\"]");
  }

  get Loan_Type_Custom_UI(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59showLoanType\"]");
  }

  get Loan_Term_Custom_UI(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59showLoanTerm\"]");
  }

  get Program_Custom_UI(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59showProgram\"]");
  }

  get Lenders_CustomUI(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59showLenders\"]");
  }

  get Options_in_Lenders(): Locator {
    return this.page.locator("//label[text()=\" Lenders \"]/..//span");
  }

  get Table_Ext(): Locator {
    return this.page.locator("//table[contains(@class,\"pricing shadow-sm table-hover table\")]");
  }

  get Lock_Button2(): Locator {
    return this.page.locator("//i[@class=\"fal fa-lock-alt text-info\"]");
  }

  get Actions_In_Result_ColumnsIneligibleTab(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[2]//th[text()[normalize-space() = \"Actions\"]]");
  }

  get Close_Button_Result_Filter_CustomUI(): Locator {
    return this.page.locator("//i[@class=\" fa fas fa-times-circle\"]");
  }

  get Results_Columns_CustomUI(): Locator {
    return this.page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]");
  }

  get Fixed_in_Amortization_Type_Dropdown(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]/li[1]");
  }

  get ARM_In_Amortization_Type(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]/li[2]");
  }

  get _30_Years_Variable_Conventional_Purchase(): Locator {
    return this.page.locator("//div[contains(normalize-space(.),'30 Years Variable')]//i[contains(@class,'fa-chevron-down')]/parent::div");
  }

  get _30_Years_Fixed_Conventional_Purchase_CustomUI(): Locator {
    return this.page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]");
  }

  get Options_In_Amortization_Type(): Locator {
    return this.page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]");
  }

  get Variable_In_Amortization_Type(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]/li[2]");
  }

  get Lenders_Dropdown1(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]/li[1]");
  }

  get Options_in_Lenders_Result_Filter(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]//li");
  }

  get Days_In_Lock_Days_Dropdown(): Locator {
    return this.page.locator("//*[contains(@class,\"item active lock-days-\")]");
  }

  get Options_selected_in_LockDays(): Locator {
    return this.page.locator("//i[@class=\"fal fa-check mr-2 text-success\"]/..");
  }

  get Program_Options_In_Result_Filter(): Locator {
    return this.page.locator("//label[text()=\" Program \"]/..//span");
  }

  get All_Options_In_Program(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]/li[1]");
  }

  get First_Program_DataTable(): Locator {
    return this.page.locator("//div/a[@placement=\"top\"]");
  }

  get Result_Settings_Config(): Locator {
    return this.page.locator("//label[@for=\"result-settingsQuickPricer\"]");
  }

  get Price_Column_Data(): Locator {
    return this.page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]//div[@data])[1]");
  }

  get Base_100_Custom_UI(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59Base100\"]");
  }

  get Past_Dates_in_Calendar(): Locator {
    return this.page.locator("//td[@role=\"gridcell\"]/span[text()=\"$|PastDate|\" and not(contains(@class,\"is-other-month\"))]");
  }

  get HH_Input_Calendar(): Locator {
    return this.page.locator("//input[@placeholder=\"HH\"]");
  }

  get MM_Input_Calendar(): Locator {
    return this.page.locator("//input[@placeholder=\"MM\"]");
  }

  get AM_Button_Calendar(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"AM\"]]");
  }

  get PM_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"PM\"]]");
  }

  get Historical_Pricing_Button(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Historical Pricing\"]]");
  }

  get Past_Dates_in_CalenderCustomUI(): Locator {
    return this.page.locator("//td[@role=\"gridcell\"]/span[text()=\"$|PastDateCustomUI|\" and not(contains(@class,\"is-other-month\"))]");
  }

  get Interest_Onlydefaultui(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerinterestOnly\"]");
  }

  get My_Lenders_And_Comp(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricermyLendersAndComp\"]");
  }

  get My_Lenders_and_Compensation(): Locator {
    return this.page.locator("//input[@id=\"mlcQuickPricer\"]");
  }

  get Special_Mortgage_Options(): Locator {
    return this.page.locator("(//div[@class=\"input-group\"]//ancestor::div//label[text()=\" Special Mortgage Options \"])[1]/..//div[@class=\"input-group\"]");
  }

  get BackEnd_DTI(): Locator {
    return this.page.locator("//label[text()=\"Back-End DTI\"]");
  }

  get Interest_Only(): Locator {
    return this.page.locator("//label[text()=\"Interest Only\"]");
  }

  get My_Lenders_and_Compensation_Search_Fields(): Locator {
    return this.page.locator("//span[text()=\"My Lenders & Compensation\"]");
  }

  get Result_FilterSearchFields(): Locator {
    return this.page.locator("//span[text()=\"Result Filter\"]");
  }

  get QM_FilterSearchFields(): Locator {
    return this.page.locator("//label[text()=\"QM Fail Filter\"]");
  }

  get More_OptionsSearch_Fields(): Locator {
    return this.page.locator("//span[text()=\"More Options\"]");
  }

  get PMI_TypeSearch_Fields(): Locator {
    return this.page.locator("//label[text()=\"PMI Type\"]");
  }

  get Show_Price_In_DollarsCustomUI(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer59priceInDollars\"]");
  }

  get _30_Years_Variable_Conventional_Refinance(): Locator {
    return this.page.locator("//div[contains(text(),\" 30 Years Variable Conventional Refinance\")]");
  }

  get _30_Years_Fixed_FHA_Purchase1(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"30 Years Fixed FHA Purchase\"]]");
  }

  get _30_Years_Fixed_VA_Purchase(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"30 Years Fixed VA Purchase\"]]");
  }

  get _30_Years_Variable_VA_Refinance(): Locator {
    return this.page.locator("//div[contains(text(),\" 30 Years Variable VA Refinance \")]");
  }

  get Success_load_type1(): Locator {
    return this.page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]");
  }

  get Variable_Dropdown_CustomUI(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Variable\"]]");
  }

  get Amortization_Type_Dropdown_CustomUI(): Locator {
    return this.page.locator("//label[text()=\" Amortization Type \"]/..//button[contains(@class,\"dropdown-toggle pp-search\")]");
  }

  get _30_Years_Variable_FHA_Refinance(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"30 Years Variable FHA Refinance\"]]");
  }

  get Loan_Amount_CustomUI(): Locator {
    return this.page.locator("//label[@aria-label=\"Loan Amount\"]");
  }

  get Loan_Amount_Input_CustomUI(): Locator {
    return this.page.locator("//input[@placeholder=\"Loan Amount\"]");
  }

  get Financed_In_UFMIP(): Locator {
    return this.page.locator("//option[text()=\" Financed \"]");
  }

  get Show_Comp_Plan_CheckboxLoan_Pricer(): Locator {
    return this.page.locator("//input[@id=\"keyColMaincompPlan\"]");
  }

  get Comp_Plan_Loan_Pricer(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Comp.Plan\"]]");
  }

  get Comp_Plan_Results_Columns(): Locator {
    return this.page.locator("(//div[@class=\"percent-complan\"])[1]");
  }

  get Comp_Plan_Value_Popup(): Locator {
    return this.page.locator("//th[text()=\" Comp. Plan \"]/..//div");
  }

  get USDA_Guarantee_Fee_Value(): Locator {
    return this.page.locator("//input[@placeholder=\"USDA Guarantee Fee\"]");
  }

  get FICO_Error_Popup(): Locator {
    return this.page.locator("//span[text()=\"Pricing search parameters missing, i.e. FICO, Property Type, etc. Please review and update to get qualified results.\"]");
  }

  get LoanAmount_In_Popup(): Locator {
    return this.page.locator("(//tr[@class=\"currency\"]//th)[1]");
  }

  get Guarantee_Fee_Financed(): Locator {
    return this.page.locator("//select[@aria-label=\"Guarantee Fee Financed?\"]");
  }

  get Financed_or_Non_Financed(): Locator {
    return this.page.locator("//select[@aria-label=\"Financed or Exempt?\"]");
  }

  get Not_Financed_Guarantee_Fee(): Locator {
    return this.page.locator("//option[text()=\" Not Financed \"]");
  }

  get _30_Years_variable_FHA_Purchase(): Locator {
    return this.page.locator("//div[contains(text(),\"30 Years Variable FHA Purchase \")]");
  }

  get _30_Years_Variable_VA_Purchase(): Locator {
    return this.page.locator("//div[contains(text(),\"30 Years Variable VA Purchase \")]");
  }

  get Default_ZipCode1(): Locator {
    return this.page.locator("//app-tab-component[@title=\"Quick Pricer\"]/div[1]/div[1]/div[4]/div[16]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[11]/label[1]");
  }

  get Price_Blue_Toggle(): Locator {
    return this.page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/thead[1]/tr[1]/th[3]/a[2]/i[1]");
  }

  get General_Pricer_Settings(): Locator {
    return this.page.locator("//label[@for=\"general-pricer-settingsQuickPricer\"]");
  }

  get Default_ZipCode_Input(): Locator {
    return this.page.locator("//input[@id='ppQuickPricerdefaultZipCode']");
  }

  get LTV_Value_In_Pipeline(): Locator {
    return this.page.locator("//span[text()=\"LTV\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]");
  }

  get Loan_Type_Pipeline(): Locator {
    return this.page.locator("//span[text()=\"Loan Type\"]/../..//div[contains(@class,\"text-right\")]");
  }

  get Total_Loan_Amount_Pipeline(): Locator {
    return this.page.locator("//span[text()=\"Total Loan Amount\"]/../..//div[contains(@class,\"text-right\")]");
  }

  get Lock_Days_Pipeline(): Locator {
    return this.page.locator("//span[text()=\"Lock Period\"]/../..//div[contains(@class,\"text-right\")]");
  }

  get Price_Button_Pipeline(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Price\"]]");
  }

  get Fico_Error_Popup_SearchField(): Locator {
    return this.page.locator("//div[@role=\"document\"]/div[1]/app-dlg-message-box[1]/div[1]/div[2]/div[1]/span[1]");
  }

  get Ok_Button_In_Fico_Popup(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"ok\"]]");
  }

  get Loan_Type_Search_Field(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Conventional\"]]");
  }

  get Loan_Amount_SearchField(): Locator {
    return this.page.locator("//input[@placeholder=\"Loan Amount\"]");
  }

  get Lockdays_Dropdown_SearchField(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"30 days\"]]");
  }

  get Lock_Days_Dropdown_Default_UI(): Locator {
    return this.page.locator("//select[@id='dayLocks']");
  }

  get Conventional_loanType(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Conventional\"]]");
  }

  get Total_Fee_Amount(): Locator {
    return this.page.locator("//th[text()=\"Total Fee Amount\"]/..//span");
  }

  get Loan_Purpose_Pipeline(): Locator {
    return this.page.locator("//span[contains(text(),\"Loan Purpose\")]/../..//div");
  }

  get Funding_Fee_Amount_Input(): Locator {
    return this.page.locator("//input[@placeholder=\"Funding Fee Amount\"]");
  }

  get Locked_Loan_Number(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]]/..//td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Locked\"]/../..//td[@data-title=\"Loan Number\"]//a");
  }

  get Comment_Input_Pipeline(): Locator {
    return this.page.locator("//div[@id='lock-information']/div[1]/div[2]/div[1]/div[1]/app-lock-panel[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/textarea[1]");
  }

  get Request_Lock_Extension(): Locator {
    return this.page.locator("//div[@role=\"document\"]/div[1]/app-dlg-lock-special-action[1]/div[1]/div[1]/app-lock-extension[1]/div[1]");
  }

  get Lock_Extension_Dropdown(): Locator {
    return this.page.locator("//select[@id='l-e']");
  }

  get Select_7days_in_Lock_Extension_Request(): Locator {
    return this.page.locator("//option[contains(text(),\" 7 Days\")]");
  }

  get Price_Change_Log_Button_Extension(): Locator {
    return this.page.locator("//div[@id='lock-information']/div[1]/div[2]/div[1]/app-lock-panel[1]/div[1]/div[1]/div[1]/li[1]/div[1]/div[1]/div[1]/div[1]/button[1]");
  }

  get Requested_Days_After_Extension(): Locator {
    return this.page.locator("//li[text()[normalize-space() = \"Requested Days: 7 days\"]]");
  }

  get Requested_Points_After_Extension(): Locator {
    return this.page.locator("//li[text()[normalize-space() = \"Requested Points: 0.075 pts\"]]");
  }

  get RateSheet_Date_And_Comment_AfterExtension(): Locator {
    return this.page.locator("//div[@id='lock-information']/div[1]/div[2]/div[1]/app-lock-panel[1]/div[1]/div[1]/div[1]/li[1]/div[1]/div[1]/div[1]/div[3]");
  }

  get Price_Value_in_Price_Change_Popup(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"99.031\"]]");
  }

  get APR_Value_In_Price_Change_Log(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"1.068%\"]]");
  }

  get Loan_Purpose_Value(): Locator {
    return this.page.locator("//div[@role=\"document\"]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[4]/th[3]");
  }

  get Valid_Period_Price_Popup(): Locator {
    return this.page.locator("//div[@role=\"document\"]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[5]/th[3]");
  }

  get Price_Value_Loan_Scenario(): Locator {
    return this.page.locator("//div[text()=\"Price\"]/..//div[2]");
  }

  get Rate_Sheet_Date_Time_and_Place(): Locator {
    return this.page.locator("//div[@id='loan-scenario']/div[1]/div[2]/div[1]/div[2]");
  }

  get Actions_Export_Pricing(): Locator {
    return this.page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[16]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1]");
  }

  get Reprice_Button1(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Reprice\"]]");
  }

  get Request_Post_Lock_Price_Concession_Button1(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request Post- Lock Price Concession\"]]");
  }

  get Danger_Text_in_Reprice_Popup(): Locator {
    return this.page.locator("//div[contains(text(),\" You will be directed to pricing results valid as of \")]//div");
  }

  get Export_pricing_Button_In_Actions(): Locator {
    return this.page.locator("//table[contains(@class, 'pricing')]/tbody[1]/tr[1]/td[16]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1]");
  }

  get Export_Pricing_Button_for_Pricing(): Locator {
    return this.page.locator("//table[contains(@class, 'pricing')]/tbody[1]/tr[4]/td[16]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1]");
  }

  get Confirm_Button_Export_Pricing(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Priced(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Priced\"]]");
  }

  get Locked_Status_under_Lock_Information(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Locked\"]]");
  }

  get Lock_Cancelled1(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Lock Cancelled\"]]");
  }

  get Lock_Request_with_Price_Concession(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Lock Request with Price Concession\"]]");
  }

  get Danger_Text_Reprice_Popup(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"You will be directed to pricing results valid as of\"]]");
  }

  get Locked_or_Priced(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Locked\"]]");
  }

  get Request_Floating_Concession_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request Floating Concession\"]]");
  }

  get Rate_Value_In_Adjustment_Summary(): Locator {
    return this.page.locator("((//table)[1]//th[text()=\"Rate\"]//following-sibling::td//div)[last()]");
  }

  get Price_Value_In_Adjustment_Summary(): Locator {
    return this.page.locator("((//table)[1]//th[text()=\"Price\"]//following-sibling::td//div)[last()]");
  }

  get Pricing_Adjustment_Final_Value(): Locator {
    return this.page.locator("//td[@data-label=\"Total\"]//span");
  }

  get Price_Value_Loan_scenario1(): Locator {
    return this.page.locator("//div[@id='loan-scenario']/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]//div[2]");
  }

  get Locked_Date(): Locator {
    return this.page.locator("//div[contains(text(),\" Date \")]//span");
  }

  get Loan_Number_For_Unlocked_Priced_Officer_User_StatusAL(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Priced\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"Officer User\"]]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Pricers(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]");
  }

}