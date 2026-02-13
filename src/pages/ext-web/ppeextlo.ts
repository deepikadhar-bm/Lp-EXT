import { Page, Locator } from '@playwright/test';

/**
 * Page Object: PPE-EXT_LO
 * Elements: 122
 */
export class PpeextloPage {
  constructor(private page: Page) {}

  get Login_Page(): Locator {
    return this.page.locator("//div[contains(@aria-label,'Login Section')]");
  }

  get Login_Input(): Locator {
    return this.page.locator("//input[@id='inputEmail']");
  }

  get Password_Input(): Locator {
    return this.page.locator("//input[@id='inputPassword']");
  }

  get Login_Button(): Locator {
    return this.page.locator("//button[@type=\"submit\"]");
  }

  get PipeLine(): Locator {
    return this.page.locator("//div[@class='page-heading']//span[@class='dlp-icon fal fa-list-alt']");
  }

  get Quick_Pricer(): Locator {
    return this.page.locator("//a[contains(@aria-label,'Quick Pricer')]");
  }

  get Amortization_Type_Dropdown(): Locator {
    return this.page.locator("//*[@class='custom-select-wrap amortization-type']");
  }

  get Request_Lock(): Locator {
    return this.page.locator("//button[contains(text(),\"Request  Lock\")]");
  }

  get Search_Pipeline(): Locator {
    return this.page.locator("//input[@id='searchText']");
  }

  get Loan_Number_In_Pipeline(): Locator {
    return this.page.locator("//div[contains(text(),'Loan Number')]");
  }

  get Loan_Number(): Locator {
    return this.page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]");
  }

  get Rate_In_Quick_Pricer(): Locator {
    return this.page.locator("(//lib-pricing-result-table/table/thead/tr/th[normalize-space()='Rate'])[1]");
  }

  get Rate_Dropdown_Button(): Locator {
    return this.page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/div[2]/a[1])[1]");
  }

  get Close_Button_In_Dropdown(): Locator {
    return this.page.locator("//span[contains(text(),\"Close\")]");
  }

  get Price_Adjustment(): Locator {
    return this.page.locator("(//lib-pricing-result-table/table/thead/tr/th[contains(normalize-space(),'Price Adj')])[1]");
  }

  get Price_Adj_Value(): Locator {
    return this.page.locator("(//td[@data-label='COLUMN_NAME_ENUM.ADJ']/div)[1]");
  }

  get Fees_and_Costs_Under_Details(): Locator {
    return this.page.locator("//h5[normalize-space()='Fees and Costs']");
  }

  get Plus_Icon_In_Fees_and_Costs(): Locator {
    return this.page.locator("//i[@class='fas fa-plus-square mr-3']");
  }

  get Minus_Icon_In_Fees_and_Costs(): Locator {
    return this.page.locator("//i[@class='fas fa-minus-square mr-3']");
  }

  get Adjustments_and_Disqualificationspopup(): Locator {
    return this.page.locator("//h5[normalize-space()='Adjustments and Disqualifications']");
  }

  get Plus_Icon_In_Adjustments_and_Disqualifications(): Locator {
    return this.page.locator("//div[@class='modal-body']//div[2]//div[1]//a[1]//i[1]");
  }

  get Pricing_Adjustment_Under_Adjustments_and_Disqualifications(): Locator {
    return this.page.locator("//h6[normalize-space()='Pricing Adjustment']");
  }

  get Favorite_Icon(): Locator {
    return this.page.locator("//i[@class='fas fa-star yellow']");
  }

  get Favorite_Textbox(): Locator {
    return this.page.locator("//input[@id='favorite']");
  }

  get Plus_Icon_In_Favorites(): Locator {
    return this.page.locator("//i[@class='fas fa-plus']");
  }

  get Action_In_Favorites(): Locator {
    return this.page.locator("//th[normalize-space()='Action']");
  }

  get purchase_In_Favorites(): Locator {
    return this.page.locator("//a[normalize-space()='purchase']");
  }

  get price_In_Favorites(): Locator {
    return this.page.locator("//a[normalize-space()='price']");
  }

  get Price_Value_In_Adjustments(): Locator {
    return this.page.locator("//lib-dlg-cost-to-borrower[1]//table[1]/tbody[1]/tr[1]/td[3]/div");
  }

  get Price_In_Adjustment(): Locator {
    return this.page.locator("//lib-dlg-cost-to-borrower[1]//table[1]/tbody[1]/tr[1]/td[3]/div[1]");
  }

  get Price_In_Search_Results(): Locator {
    return this.page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[3]/div)[1]");
  }

  get Loan_Purpose_In_Pricing_Scenario(): Locator {
    return this.page.locator("//SELECT[@id='loanPurpose' or @aria-label=\"Loan Purpose\"]");
  }

  get Amortization_Type_Dropdown_SearchField(): Locator {
    return this.page.locator("//*[text()=\" Fixed \"]");
  }

  get Cost_To_Borrow(): Locator {
    return this.page.locator("//*[@data=\"$2,393\"]");
  }

  get Export_Pricing(): Locator {
    return this.page.locator("//*[@ng-reflect-tooltip=\"Export Pricing\"]");
  }

  get Credit_Score_In_Export_Pricing(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Credit Score\"]/following-sibling::th[@data-th=\"New Pricing Results\"]");
  }

  get Confirm_In_Export_Pricing(): Locator {
    return this.page.locator("//button[contains(text(),\"Confirm\")]");
  }

  get Loan_Details_In_Loan_Page(): Locator {
    return this.page.locator("//span[normalize-space()='LOAN DETAILS']");
  }

  get Get_Pricing_Under_Loan(): Locator {
    return this.page.locator("//app-dlt-borrower-loan-right-side[contains(@class, 'loan-component-rigth-cards') and contains(@class, 'hide-mob')]/DIV[1]/DIV[1]/BUTTON[1]");
  }

  get Ok_Button_In_Alert_Popup(): Locator {
    return this.page.locator("//button[@class='btn btn-danger text-uppercase']");
  }

  get Credit_score_Input_Number_In_Fico(): Locator {
    return this.page.locator("//INPUT[@id='fico']");
  }

  get Cost_To_Borrow_Under_Fixed_Conventional_Purchase(): Locator {
    return this.page.locator("//*[@data=\"$1,440\"]");
  }

  get Adjustments_and_Disqualifications_In_Popup(): Locator {
    return this.page.locator("//*[@class='currency adjustment-points']");
  }

  get Close_Button_In_Adjustments_and_Disqualifications(): Locator {
    return this.page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]");
  }

  get Ok_Button_In_INFO(): Locator {
    return this.page.locator("(//button[@role=\"button\"])[2]");
  }

  get Scenario_Pricing_Request_In_Loan_Application(): Locator {
    return this.page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]");
  }

  get Lock_Information_In_Loan_Application(): Locator {
    return this.page.locator("//h4[normalize-space()='Lock Information']");
  }

  get Confirm_For_Request_Lock(): Locator {
    return this.page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n");
  }

  get Lock_In_Lock_Information(): Locator {
    return this.page.locator("//button[normalize-space()='Lock']");
  }

  get ExtensionRequestButton(): Locator {
    return this.page.locator("//button[contains(text(),\"Extension  Request\")]");
  }

  get LockExtentionRequestDropdown(): Locator {
    return this.page.locator("//SELECT[@id='l-e']");
  }

  get ExtensionRequestedStatus(): Locator {
    return this.page.locator("//span[contains(text(),\"Extension Requested\")]");
  }

  get RequestedDaysForExtention(): Locator {
    return this.page.locator("//li[contains(text(),\"Requested Days: \")]");
  }

  get RequestedPointsForExtention(): Locator {
    return this.page.locator("//li[contains(text(),\"Requested Points: \")]");
  }

  get PricingAdjustmentDetails(): Locator {
    return this.page.locator("//div[contains(@class, 'adj-group')]");
  }

  get More_Details_In_Scenario_Pricing(): Locator {
    return this.page.locator("//a[normalize-space()='More Details ...']");
  }

  get Ok_In_Alert_Popup(): Locator {
    return this.page.locator("//button[normalize-space()='Ok']");
  }

  get Lock_Requested_In_LO(): Locator {
    return this.page.locator("//span[contains(text(),\"Lock Requested\")]");
  }

  get Show_Disqualified_Checkbox(): Locator {
    return this.page.locator("//input[@id='show-disqualified']");
  }

  get Lock(): Locator {
    return this.page.locator("//button[normalize-space()='Lock']");
  }

  get Alert_Popup(): Locator {
    return this.page.locator("//span[contains(text(),'Alert')]");
  }

  get OKButton(): Locator {
    return this.page.locator("//span[contains(text(),'ok')]");
  }

  get Locked_Status_on_Concession(): Locator {
    return this.page.locator("//span[contains(text(),\"Locked\")]");
  }

  get Relock_In_Lock_Information(): Locator {
    return this.page.locator("//button[normalize-space()='Relock ( Higher- Of)']");
  }

  get Confirm_In_Redirected_to_the_pricing_page(): Locator {
    return this.page.locator("//button[contains(text(),\"Confirm\")][1]");
  }

  get Price_Adj(): Locator {
    return this.page.locator("//th[normalize-space()='Price Adj']");
  }

  get Price_Adjustment_Value(): Locator {
    return this.page.locator("(//td[@data-label='COLUMN_NAME_ENUM.ADJ']/div)[1]");
  }

  get Request_Lock_2(): Locator {
    return this.page.locator("(//a[@tooltip=\"Request Lock\"])[1]");
  }

  get Worse_Case_Under_Fields(): Locator {
    return this.page.locator("//th[.='Worse Case']");
  }

  get Price_In_Worse_Case(): Locator {
    return this.page.locator("(//th[normalize-space()='Price']");
  }

  get Price_Value_In_Worse_Case(): Locator {
    return this.page.locator("(//th[normalize-space()='Price']/following-sibling::th[2])[2]");
  }

  get Request_Lock_In_Confirm_Lock_Request(): Locator {
    return this.page.locator("//button[normalize-space()='Request Lock']");
  }

  get Adjustment_Summary(): Locator {
    return this.page.locator("//h6[normalize-space()='Adjustment Summary']");
  }

  get Worse_Case_Log(): Locator {
    return this.page.locator("//button[contains(text(),'Worse Case Log')]");
  }

  get TopRate(): Locator {
    return this.page.locator("(//td[@data-label='COLUMN_NAME_ENUM.PRICE']/div[1])[1]");
  }

  get FNMA_Under_Program(): Locator {
    return this.page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[11]/div[1]/a[1])[1]");
  }

  get _30Yr_Fixed(): Locator {
    return this.page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[11]/div[1]/a[1])[1]");
  }

  get Ineligible(): Locator {
    return this.page.locator("//a[contains(text(),'Ineligible')]");
  }

  get Old_Pricing_Results_In_Export_Pricing(): Locator {
    return this.page.locator("//th[contains(text(),'Old Pricing Results')]");
  }

  get Final_Rate(): Locator {
    return this.page.locator("//body[1]/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/div[1]");
  }

  get Price_Base_Adj_on_Pricer(): Locator {
    return this.page.locator(" //a[text()=\" Price \"]/..//i[contains(@class,\"text-succes\")]");
  }

  get Price_Adjustment_on_Pricer(): Locator {
    return this.page.locator("//body[1]/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[2]/div");
  }

  get Price_Final_Adjustment_on_Pricer(): Locator {
    return this.page.locator("//body[1]/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div");
  }

  get Rate_Adjustments_on_Loan_View(): Locator {
    return this.page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[1]/td[3]/div[1]");
  }

  get Price_Base_Adjustments_on_Loan_View(): Locator {
    return this.page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[1]/div[1]");
  }

  get Price_Adjustments_on_Loan_View(): Locator {
    return this.page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[2]/div[1]");
  }

  get Price_Final_Adjustments_on_Loan_View(): Locator {
    return this.page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[3]/div[1] | //body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/app-scenario-panel/div/div[2]/div[4]/div/table/tbody/tr[2]/td[3]/div");
  }

  get Verify_error_modal_appearsFico_alert(): Locator {
    return this.page.locator("//span[contains(text(),\"Pricing search parameters missing\")]");
  }

  get Price_Adj_and_Rate_Adj(): Locator {
    return this.page.locator("(//div[@ng-reflect-klass='currency adjustment-points'])[1]");
  }

  get Loan_Purpose_on_Loan_Details(): Locator {
    return this.page.locator("//body/app-root/div[@class='main-background']/div[@class='theme-wrapper']/app-dlt-main-layout/div[@class='parent-main-layout']/div[@class='main-layout']/app-lp-company-layout/div[@class='container pt-3 pb-3']/app-dlt-borrower-loan/div[@class='loan-dashboard infocus-viewport']/div[@class='d-flex loan-component-main-wrap']/main[@class='loan-component-middle-cards']/div[@class='row']/div[@class='main-widget-wrapper']/div[@class='loan-content']/div[@class='loan-cards flex-fill']/div[@class='force-overflow']/app-dlt-borrower-loan-application[@id='loan-details']/app-tabs-component[@class='primary-tabs']/app-tab-component[@icon='fa-file-alt']/div/div[@class='loan-details-summary']/app-dlt-loan-summary[@ng-reflect-loan-application='[object Object]']/div[@class='card loan-card']/div[@class='card-body p-0']/div[@class='loan-row loan-info-short']/div[@class='row m-0 py-3']/div[2]/div[2]/div[2]");
  }

  get Loan_Amount_on_Loan_Details(): Locator {
    return this.page.locator("//div[@class='row m-0 py-3']//div[2]//div[3]//div[2]");
  }

  get Loan_Number_on_Pipeline_Page(): Locator {
    return this.page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]");
  }

  get Status_of_Loan_Number(): Locator {
    return this.page.locator("(//div[@class=\"money\"]/../..//td)[last()-1] | (//td[@data-title='Lock Status'])[1]");
  }

  get Credit_Score_Value_In_Fico_Input(): Locator {
    return this.page.locator("//input[contains(@placeholder,'FICO')]");
  }

  get Borrower_In_Search_Fields(): Locator {
    return this.page.locator("//h5[.=' Borrower ']");
  }

  get LTV_Textbox_In_Loan_Information(): Locator {
    return this.page.locator("//input[@placeholder='LTV']");
  }

  get Option_3_In_Lock_Days_Dropdown(): Locator {
    return this.page.locator("//span[contains(text(),'30 days')]");
  }

  get Favorites_Popup_Window(): Locator {
    return this.page.locator("//h5[contains(text(),'Favorites')]");
  }

  get Name_Label_in_favorites_popup_Window(): Locator {
    return this.page.locator("//label[.=' Name ']");
  }

  get Name_In_favorites_table(): Locator {
    return this.page.locator("//th[contains(text(),'Name')]");
  }

  get Default_In_favorites_table(): Locator {
    return this.page.locator("//th[contains(text(),'Default')]");
  }

  get Action_In_favorites_table(): Locator {
    return this.page.locator("//th[text()='Action']");
  }

  get Favorites_name_under_table(): Locator {
    return this.page.locator("//a[contains(text(),'Purchase')]");
  }

  get Favorite_Delete_Button_In_Table(): Locator {
    return this.page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]/../..//i[contains(@class,\"text-danger\")]");
  }

  get Saved_Favorites(): Locator {
    return this.page.locator("//table[1]/tbody[1]/tr[last()]/td[1]");
  }

  get zip_code_checkbox_in_default_favorites(): Locator {
    return this.page.locator("//tbody/tr[3]/td[2]/a[1]/i[1]");
  }

  get Monthly_Debt_textbox_under_income_and_debt(): Locator {
    return this.page.locator("//input[@id='monthlyDebt']");
  }

  get DTI_label_in_search_fields(): Locator {
    return this.page.locator("//label[contains(text(),'DTI')]");
  }

  get DTI_textbox_in_search_fields(): Locator {
    return this.page.locator("//input[@id='dti']");
  }

  get Impound_in_search_fields(): Locator {
    return this.page.locator("//label[contains(.,'Impound')]");
  }

  get First_Time_Home_Buyer_in_search_fields(): Locator {
    return this.page.locator("//label[contains(.,'First Time Home Buyer')]");
  }

  get Property_Valuation_Type_label_in_search_fields(): Locator {
    return this.page.locator("//label[contains(.,'Property Valuation Type')]");
  }

  get Property_Valuation_Type_dropdown(): Locator {
    return this.page.locator("//select[@id='propertyValuationType']");
  }

  get PIW_option_in_property_valuation_type_dropdown(): Locator {
    return this.page.locator("//select[@id='propertyValuationType']/option[1]");
  }

  get HVE_option_in_property_valuation_type_dropdown(): Locator {
    return this.page.locator("//select[@id='propertyValuationType']/option[2]");
  }

  get ACE_option_in_property_valuation_type_drop_down(): Locator {
    return this.page.locator("//select[@id='propertyValuationType']/option[3]");
  }

  get FMP_option_in_property_valuation_type_dropdown(): Locator {
    return this.page.locator("//select[@id='propertyValuationType']/option[4]");
  }

  get Streamline_option_in_property_valuation_type_dropdown(): Locator {
    return this.page.locator("//select[@id='propertyValuationType']/option[5]");
  }

  get P1004_option_in_property_valuation_type_dropdown(): Locator {
    return this.page.locator("//select[@id='propertyValuationType']/option[6]");
  }

  get Inspection_option_in_property_valuation_type_dropdown(): Locator {
    return this.page.locator("//select[@id='propertyValuationType']/option[7]");
  }

  get Compensation_Percent_in_search_fields(): Locator {
    return this.page.locator("//label[.='Compensation Percent']");
  }

  get Compensation_Percent_textbox_in_search_fields(): Locator {
    return this.page.locator("//input[@id='comp-percent']");
  }

}