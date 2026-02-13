import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Lender price
 * Elements: 1212
 */
export class LenderPricePage {
  constructor(private page: Page) {}

  get Set_Date_Button_in_Cal(): Locator {
    return this.page.locator("//button[@aria-label=\"Set Date\"]");
  }

  get Quick_Pricer_Navigation_Button(): Locator {
    return this.page.locator("//div[contains(@class, 'collapse') and contains(@class, 'navbar-collapse') and contains(@class, 'menu-items')]/UL[1]/LI[1]/A[1]/SPAN[1]");
  }

  get ResultFilterMaxProgramnav(): Locator {
    return this.page.locator("//NAV[@id='sidebar']");
  }

  get AMI_Information_Section(): Locator {
    return this.page.locator("//span[contains(text(),\"AMI Information\")]");
  }

  get AMIInformationdiv(): Locator {
    return this.page.locator("//DIV[1]/DIV[8]");
  }

  get Total_Monthly_Income_Label(): Locator {
    return this.page.locator("//label[contains(text(),\"Total Monthly Income\")]");
  }

  get Total_Monthly_Income_Icon(): Locator {
    return this.page.locator("//input[@placeholder=\"Total Monthly Income\"]/preceding-sibling::div[contains(@class, 'input-group-prepend')]/DIV[1]/I[1]");
  }

  get divTag(): Locator {
    return this.page.locator("//input[@placeholder=\"Total Monthly Income\"]/preceding-sibling::div[contains(@class, 'input-group-prepend')]/DIV[1]");
  }

  get Average_Median_Income_Label(): Locator {
    return this.page.locator("//label[contains(text(),\"Average Median Income\")]");
  }

  get Total_Monthly_Income_Text_Field(): Locator {
    return this.page.locator("//INPUT[@id='totalMonthlyIncome']");
  }

  get personaddlink(): Locator {
    return this.page.locator("//a[@href=\"#/admin/65c2b2c456339140c910051e/company/58c30a394cedfd0001cad410/nmlsPersonUserGet/newNmlsPersonUser58c30a394cedfd0001cad410\"]");
  }

  get Password_Input_Field(): Locator {
    return this.page.locator("//INPUT[@id='inputPassword']");
  }

  get password(): Locator {
    return this.page.locator("//input[@name=\"password\"]");
  }

  get Password_In_Lender_Price(): Locator {
    return this.page.locator("//label[contains(text(),'Password')]");
  }

  get Password(): Locator {
    return this.page.locator("//input[@name=\"password\"]");
  }

  get oninputCheckbox1(): Locator {
    return this.page.locator("//div[contains(@class, 'resultTemplate')]/DIV[1]/DIV[1]/DIV[2]/LIB-PRICING-RESULT-TABLE[1]/TABLE[1]/TBODY[1]/TR[2]/TD[2]/DIV[1]/INPUT[1]");
  }

  get oninputCheckbox(): Locator {
    return this.page.locator("//div[contains(@class, 'resultTemplate')]/DIV[1]/DIV[1]/DIV[2]/LIB-PRICING-RESULT-TABLE[1]/TABLE[1]/TBODY[1]/TR[1]/TD[2]/DIV[1]/INPUT[1]");
  }

  get OK_In_Alert_Message(): Locator {
    return this.page.locator("//span[.='OK' or @ng-reflect-ng-switch=\"ok\"]");
  }

  get menubutton(): Locator {
    return this.page.locator("//BUTTON[@id='companyMenuTrigger']");
  }

  get Menu(): Locator {
    return this.page.locator("//button[contains(@class, 'md-icon-button') and contains(@class, 'main-menu-icon') and contains(@class, 'md-button') and contains(@class, 'md-ink-ripple')]");
  }

  get Marketplacedivmdoption(): Locator {
    return this.page.locator("//MD-OPTION[7]/DIV[1]");
  }

  get SIGNOUTlink(): Locator {
    return this.page.locator("//a[contains(@class, 'md-warn') and contains(@class, 'md-raised') and contains(@class, 'md-button') and contains(@class, 'md-ink-ripple')]");
  }

  get ServerSettinglink(): Locator {
    return this.page.locator("//a[@href=\"#/admin/65c2b2c456339140c910051e/serverSetting\"]");
  }

  get UserGroupslink(): Locator {
    return this.page.locator("//a[@href=\"#/admin/65c2b2c456339140c910051e/company/58c30a394cedfd0001cad410/userGroupList\"]");
  }

  get savebutton(): Locator {
    return this.page.locator("//button[contains(@class, 'md-fab') and contains(@class, 'md-button') and contains(@class, 'md-ink-ripple') and contains(@class, 'md-accent')]");
  }

  get Login_In_Lender_price(): Locator {
    return this.page.locator("//span[contains(normalize-space(),'Login')]");
  }

  get LOGINdiv2(): Locator {
    return this.page.locator("//div[contains(text(),'Login')]");
  }

  get NMLS(): Locator {
    return this.page.locator("//div[contains(@class, 'userGetProfile') and contains(@class, 'edit_view') and contains(@class, 'section-edit')]/DIV[1]/DIV[1]/MD-INPUT-CONTAINER[3]/INPUTLY[1]/DIV[1]/INPUT[1]");
  }

  get NotselectedPricingCompselect(): Locator {
    return this.page.locator("//label[contains(text(),\"Pricing Comparison PDF template\")]/following-sibling::div[contains(@class, 'input-group')]/SELECT[1]");
  }

  get Ok_button1(): Locator {
    return this.page.locator("//button[contains(@class, 'btn-danger') and contains(@class, 'text-uppercase')]");
  }

  get restuserdownloadfileimage(): Locator {
    return this.page.locator("//img[contains(@class, 'avatar') and contains(@class, 'circle') and contains(@class, 'image') and contains(@class, 'my-account')]");
  }

  get SearchPipelineinputText(): Locator {
    return this.page.locator("//INPUT[@id='searchText']");
  }

  get PPE_Username_Input(): Locator {
    return this.page.locator("//input[@name=\"username\"]");
  }

  get UserName_In_Lender_Price(): Locator {
    return this.page.locator("//label[contains(text(),'Username')]");
  }

  get UserName_Input(): Locator {
    return this.page.locator("//input[@id='input_0']");
  }

  get Userslink(): Locator {
    return this.page.locator("//a[@href=\"#/admin/65c2b2c456339140c910051e/company/58c30a394cedfd0001cad410/userList\"]");
  }

  get Youhave7userswithoutlink(): Locator {
    return this.page.locator("//a[contains(text(),'You have 7 users without group.')]");
  }

  get Average_Income_Text_Field(): Locator {
    return this.page.locator("//INPUT[@id='areaMedianIncome']");
  }

  get Percentage_Of_AMI_Label(): Locator {
    return this.page.locator("//div[@class='expandable expandAmiInformation']//div[3]");
  }

  get Income_AMI_Text_Field(): Locator {
    return this.page.locator("//INPUT[@id='incomeAmiRatio']");
  }

  get Duty_To_Serve_Check_Box(): Locator {
    return this.page.locator("//label[text()=\"Duty to Serve\"]");
  }

  get QuickPricerlink(): Locator {
    return this.page.locator("//div[contains(@class, 'collapse') and contains(@class, 'navbar-collapse') and contains(@class, 'menu-items')]/UL[1]/LI[1]/A[1]");
  }

  get Show_Rates_125_In_Check_Box(): Locator {
    return this.page.locator("//label[contains(text(),\"Show Rates in .125\")]");
  }

  get Best_X_Pricing_Check_Box(): Locator {
    return this.page.locator("//label[contains(text(),\"Best X Pricing\")]");
  }

  get Show_Disqualified_By_QMR_Check_Box(): Locator {
    return this.page.locator("//label[contains(text(),\"Show Disqualified by QM Rules\")]");
  }

  get Eligible_And_Ineligible_UI_TAB(): Locator {
    return this.page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]");
  }

  get Quick_Pricer_Data_Table(): Locator {
    return this.page.locator("//table[@class='pricing shadow-sm table-hover table mb-0']");
  }

  get ScenarioPricingRequesth4(): Locator {
    return this.page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]");
  }

  get LockButtonLD(): Locator {
    return this.page.locator("//button[contains(text(),\"Lock\")]");
  }

  get Lockedspan(): Locator {
    return this.page.locator("//span[contains(text(),\"Test Sigma Lock\")]/following-sibling::span[contains(text(),\"Locked\")]");
  }

  get ConfirmButton(): Locator {
    return this.page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1] | //div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV//BUTTON[text()=\" Confirm \"]");
  }

  get MoreDetailsButton(): Locator {
    return this.page.locator("//a[contains(text(),\"More Details ...\")]");
  }

  get PricingAdjustmentDescridiv(): Locator {
    return this.page.locator("//div[contains(@class, 'adj-group')]");
  }

  get Extension5daysth(): Locator {
    return this.page.locator("//TR[3]/TH[1]");
  }

  get Zip_Code_Input(): Locator {
    return this.page.locator("//input[@placeholder=\"Zip Code\"]");
  }

  get Profile_pictureimage(): Locator {
    return this.page.locator("//APP-DLT-IMAGE[1]/IMG[2]");
  }

  get ExtensionRequestedspan(): Locator {
    return this.page.locator("//span[contains(text(),\"Extension Requested\")]");
  }

  get Price_Change_Log_Button(): Locator {
    return this.page.locator("(//button[contains(text(),\"Price Change Log\")])[1]");
  }

  get OldPricing(): Locator {
    return this.page.locator("//APP-DLP-ELLIE-EXPORT-DIFFERENCES[1]/DIV[1]/DIV[2]/DIV[1]/TABLE[1]/TBODY[1]/TR[1]/TH[2]");
  }

  get NewPricing(): Locator {
    return this.page.locator("//APP-DLP-ELLIE-EXPORT-DIFFERENCES[1]/DIV[1]/DIV[2]/DIV[1]/TABLE[1]/TBODY[1]/TR[1]/TH[3]");
  }

  get CloseOnPriceChange(): Locator {
    return this.page.locator("//span[@aria-label=\"Close\"]");
  }

  get Search_Pipeline_Input(): Locator {
    return this.page.locator("//input[@id='searchText']");
  }

  get Loan_Number1(): Locator {
    return this.page.locator("//a[contains(text(),\"240310897\")]");
  }

  get Get_Pricing_Button(): Locator {
    return this.page.locator("(//button[@class=\"btn btn-primary font-weight-bold\"]/..//button[text()=\" Get Pricing \"])[1]");
  }

  get Fico_Input(): Locator {
    return this.page.locator("//INPUT[@id='fico']");
  }

  get Custom_Loan_Pricer_Powered_By_Result_Filter_Max_Prog(): Locator {
    return this.page.locator("//NAV[@id='sidebar']");
  }

  get selectedItems_Dropdown(): Locator {
    return this.page.locator("//button[contains(text(),\"Fixed\")]");
  }

  get selectedItems_Dropdown1(): Locator {
    return this.page.locator("//li[contains(@class, 'item') and contains(@class, 'amortization-type-fixed')]");
  }

  get selectedItems_Dropdown2(): Locator {
    return this.page.locator("//span[contains(text(),\"Fixed\")]");
  }

  get Pipeline(): Locator {
    return this.page.locator("//div[contains(@class, 'collapse') and contains(@class, 'navbar-collapse') and contains(@class, 'menu-items')]/UL[1]/LI[3]/A[1]/SPAN[1]");
  }

  get Loan_Number2(): Locator {
    return this.page.locator("//a[contains(text(),\"240310902\")]");
  }

  get Loan_Purpose_Dropdown(): Locator {
    return this.page.locator("//select[@id='loanPurpose' or @aria-label=\"Loan Purpose\"]");
  }

  get selectedItems_Dropdown3(): Locator {
    return this.page.locator("//div[contains(@class, 'custom-select-wrap') and contains(@class, 'amortization-type')]/BUTTON[1]");
  }

  get divTag1(): Locator {
    return this.page.locator("//div[contains(@class, 'resultTemplate')]/DIV[1]/DIV[1]/DIV[2]/LIB-PRICING-RESULT-TABLE[1]/TABLE[1]/TBODY[1]/TR[1]/TD[11]/DIV[1]/DIV[1]/DIV[1]/DIV[1]");
  }

  get Confirm_Button(): Locator {
    return this.page.locator("//button[contains(text(),\"Confirm\")]");
  }

  get Ok_Button_on_Request_lock_alert(): Locator {
    return this.page.locator("//button[contains(text(),\"Ok\")]");
  }

  get Comment_Input(): Locator {
    return this.page.locator("//textarea[contains(@class, 'form-row')]");
  }

  get Request_Lock_Button(): Locator {
    return this.page.locator("//button[contains(text(),\"Request  Lock\")]");
  }

  get Confirm_Button1(): Locator {
    return this.page.locator("//div[contains(text(),\"Are you sure you want to submit a lock request?\")]/following-sibling::div[contains(@class, 'd-flex') and contains(@class, 'justify-content-end')]/DIV[2]/BUTTON[1]");
  }

  get Heading_Lock_Requested(): Locator {
    return this.page.locator("//span[contains(text(),\"Lock Requested\")]");
  }

  get username_Input1(): Locator {
    return this.page.locator("//INPUT[@id='inputEmail']");
  }

  get password_Input1(): Locator {
    return this.page.locator("//INPUT[@id='inputPassword']");
  }

  get Profile_Menu_Dropdown_Icon(): Locator {
    return this.page.locator("//a[contains(@class, 'extra-menu-dropdown') and contains(@class, 'dropdown-toggle')]");
  }

  get Queue_Dropdown(): Locator {
    return this.page.locator("//a[contains(text(),\"Queue\")]");
  }

  get Refresh_Button_in_Queue(): Locator {
    return this.page.locator("//button[@class='btn btn-refresh']/span");
  }

  get LoanNumber_input_on_Queue_Data(): Locator {
    return this.page.locator("//span[contains(text(),\"Loan Number\")]/preceding-sibling::input[contains(@class, 'filter-input')]");
  }

  get Show_error_Button(): Locator {
    return this.page.locator("//TBODY[1]/TR[1]/TD[8]/BUTTON[2]");
  }

  get Close_Button(): Locator {
    return this.page.locator("//div[contains(text(),\"Error On this Item:This price is no longer valid and or has become stale. You must re-run pricing before submitting a lock request.\")]/following-sibling::div[contains(@class, 'modal-footer')]/DIV[1]/DIV[1]/BUTTON[1]");
  }

  get Status_Drowpdown_on_Queue_Data(): Locator {
    return this.page.locator("//select[contains(@class, 'filter-select')]");
  }

  get Profile_Menu_Icon(): Locator {
    return this.page.locator("//a[contains(@class, 'extra-menu-dropdown') and contains(@class, 'dropdown-toggle')]");
  }

  get Logout_Dropdown(): Locator {
    return this.page.locator("//a[contains(text(),\"Logout\")]");
  }

  get Request_Post_Lock_Price_Concession_Button(): Locator {
    return this.page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]");
  }

  get Price_Input(): Locator {
    return this.page.locator("//INPUT[@id='feePoint'] | //INPUT[@name='Point']");
  }

  get Reasons_Dropdown(): Locator {
    return this.page.locator("//SELECT[@id='reasons'] | //SELECT[@aria-label='Reasons']");
  }

  get Confirm_Button_On_Concession_Page(): Locator {
    return this.page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1] | //div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV//BUTTON[text()=\" Confirm \"]");
  }

  get Price_Concession_Requested_PostLock_Status(): Locator {
    return this.page.locator("//span[contains(text(),\"Price Concession Requested (Post-Lock)\")]");
  }

  get Price_Change_Log_Button_on_Concession(): Locator {
    return this.page.locator("//span[contains(text(),\"Price Concession Requested (Post-Lock)\")]/following-sibling::button[contains(@class, 'show-prices-btn') and contains(@class, 'text-primary')]");
  }

  get Generate_Lock_Confirmation_Button(): Locator {
    return this.page.locator("//button[contains(text(),\"Generate Lock Confirmation\")]");
  }

  get Dropdown_Not_selected_Lock_Confirmation_PDF_Lock_Conf(): Locator {
    return this.page.locator("//label[contains(text(),\"Lock Confirmation PDF template\")]/following-sibling::div[contains(@class, 'input-group')]/SELECT[1]");
  }

  get Preview_PDF_Button_on_Lock_Confirmation(): Locator {
    return this.page.locator("//button[contains(text(),\"Preview PDF\")]");
  }

  get LOCKCONFIRMATION_PDF(): Locator {
    return this.page.locator("//h5[contains(@class, 'modal-title') and contains(@class, 'sticky-top')]");
  }

  get Lock_Confirmation_Download_Button(): Locator {
    return this.page.locator("//span[contains(text(),\"Download\")]");
  }

  get Close_Button_on_Lock_Confirmation(): Locator {
    return this.page.locator("//span[@aria-label=\"Close\"]");
  }

  get Next_Button_to_preview_pdf(): Locator {
    return this.page.locator("//span[contains(@class, 'dlp-icon') and contains(@class, 'fa-chevron-right')]");
  }

  get Reprice_Button(): Locator {
    return this.page.locator("//button[contains(text(),\"Reprice\")]");
  }

  get Confirm_Button_on_Reprice(): Locator {
    return this.page.locator("//div[contains(@class, 'modal-title-override') and contains(@class, 'sticky-top') and contains(@class, 'text-grey') and contains(@class, 'bold')]/following-sibling::div[contains(@class, 'd-flex') and contains(@class, 'justify-content-end')]/DIV[2]/BUTTON[1]|(//div[@class=\"modal-content\"]/div[2]/div[2]/button[text()=\" Confirm \"])[1]");
  }

  get Price_Adj_on_Quick_Pricer(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]/div");
  }

  get Details_0_990_30_Yr_DU_Fixed_346_Y50_AA9(): Locator {
    return this.page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[2]");
  }

  get Pricing_Adjustment_in_Popup(): Locator {
    return this.page.locator("//h6[contains(text(),\"Pricing Adjustment\")]");
  }

  get Heading_Rate_Adjustment(): Locator {
    return this.page.locator("//h6[contains(text(),\"Rate Adjustment\")]");
  }

  get Close_button_for_price_adj_popup(): Locator {
    return this.page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]");
  }

  get Request_lock_button_on_Quick_Pricer(): Locator {
    return this.page.locator("//div[contains(@class, 'resultTemplate')]/DIV[1]/DIV[1]/DIV[2]/LIB-PRICING-RESULT-TABLE[1]/TABLE[1]/TBODY[1]/TR[1]/TD[16]/DIV[1]/DIV[1]/DIV[1]/A[1] | //div[contains(@class, 'resultTemplate')]/DIV[1]/DIV[1]/DIV[2]/LIB-PRICING-RESULT-TABLE[1]/table[1]/tbody[1]/tr[1]/td[11]/div[1]/div[1]/div[1]/a[1] | //a[@tooltip=\"Request Lock\"]");
  }

  get Previous_Lock(): Locator {
    return this.page.locator("//table[contains(@class, 'mobile-friendly-table')]/THEAD[1]/TR[1]/TH[2]");
  }

  get New_Pricing(): Locator {
    return this.page.locator("//table[contains(@class, 'mobile-friendly-table')]/THEAD[1]/TR[1]/TH[3]");
  }

  get Request_Lock_Button_to_Reprice(): Locator {
    return this.page.locator("//button[contains(text(),\"Request Lock\")]");
  }

  get Reprice_Requested_Status_After_Reprice(): Locator {
    return this.page.locator("//span[contains(text(),\"Reprice Requested\")]");
  }

  get Relock_Higher_Of_Button(): Locator {
    return this.page.locator("//button[contains(text(),'Relock')]");
  }

  get Confirm_Button2(): Locator {
    return this.page.locator("//div[contains(text(),\"You will now be redirected to the pricing page\")]/following-sibling::div[contains(@class, 'd-flex') and contains(@class, 'justify-content-end')]/DIV[2]/BUTTON[1]");
  }

  get Heading_Pricing_Adjustment(): Locator {
    return this.page.locator("//h6[contains(text(),\"Pricing Adjustment\")]");
  }

  get _0_990(): Locator {
    return this.page.locator("//div[contains(text(),\"0.990 %\")]");
  }

  get _30_Yr_DU_Fixed_346_Y50_AA9_472_H2(): Locator {
    return this.page.locator('//*');
  }

  get Loan_Amount_On_Loan_Application(): Locator {
    return this.page.locator("//div[text()=\" Base Loan Amount \"]/../div[2]");
  }

  get Heading_0_990(): Locator {
    return this.page.locator("//div[contains(text(),\"0.990 %\")]");
  }

  get Note_Rate_on_Loan_Application(): Locator {
    return this.page.locator("//div[text()=\"Note Rate\"]/../div[2]");
  }

  get Loan_Program_on_Loan_Application(): Locator {
    return this.page.locator("//div[text()=\"Loan Program\"]/../div[2]");
  }

  get FICO_On_Loan_Application(): Locator {
    return this.page.locator("//div[text()=\"FICO Score\"]/../div[2]");
  }

  get Appraised_Value_on_Loan_Application(): Locator {
    return this.page.locator("//div[text()=\"Appraised Value\"]/../div[2]");
  }

  get Purchase_Price_on_Loan_Application(): Locator {
    return this.page.locator("//div[text()=\" Purchase Price \"]/../div[2]");
  }

  get Lock_Status_In_Pipeline(): Locator {
    return this.page.locator("//div[contains(text(),'Lock Status')]");
  }

  get Comment_Displayed_in_Lock_Information(): Locator {
    return this.page.locator("//div[contains(text(),\"Request Lock: Testsigma Testing\")]");
  }

  get Lock_Requested(): Locator {
    return this.page.locator("//td[@data-title='Lock Status']");
  }

  get Loan_Application_Page(): Locator {
    return this.page.locator("//span[normalize-space()='Loan Application'] | ");
  }

  get Request_Lock_Comment(): Locator {
    return this.page.locator("//div[contains(text(), \"Testsigma Testing\")]");
  }

  get Rate_Sheet_Date_on_Loan_View(): Locator {
    return this.page.locator("(//div[@class='text-primary'])[1]");
  }

  get Priced_date_info_on_loan_view(): Locator {
    return this.page.locator("//div[@class='data-content mb-2 text-grey']/DIV[1]");
  }

  get Priced_Date_in_Information_Section(): Locator {
    return this.page.locator("//span[@class='text-grey']");
  }

  get Rate_On_Pricing(): Locator {
    return this.page.locator("//table/tbody/tr/td[1]/div");
  }

  get Current_Market_Pricing_Allowed_Button(): Locator {
    return this.page.locator("//button[contains(text(),'Current  Market  Pricing  Allowed')]");
  }

  get on_inputCheckbox(): Locator {
    return this.page.locator("//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')]/TBODY[1]/TR[1]/TD[2]/DIV[1]/INPUT[1]");
  }

  get on_inputCheckbox1(): Locator {
    return this.page.locator("//DIV[5]/INPUT[1]");
  }

  get Search_Result_View_Day_Lock_View_Impersonate_Show_Ra(): Locator {
    return this.page.locator("//DIV[@id='content']");
  }

  get on_inputCheckbox2(): Locator {
    return this.page.locator("//DIV[7]/INPUT[1]");
  }

  get username_Input2(): Locator {
    return this.page.locator("//INPUT[@id='inputEmail']");
  }

  get password_Input2(): Locator {
    return this.page.locator("//INPUT[@id='inputPassword']");
  }

  get Login_Button1(): Locator {
    return this.page.locator("//span[contains(@class, 'flex-fill')]");
  }

  get Loan_Number3(): Locator {
    return this.page.locator("//a[contains(text(),\"240408173\")]");
  }

  get username_Input3(): Locator {
    return this.page.locator("//INPUT[@id='inputEmail']");
  }

  get Profile_picture_image(): Locator {
    return this.page.locator("//a[contains(@class, 'extra-menu-dropdown') and contains(@class, 'dropdown-toggle')]/APP-DLT-IMAGE[1]/IMG[2]");
  }

  get password_Input3(): Locator {
    return this.page.locator("//INPUT[@id='inputPassword']");
  }

  get username_Input4(): Locator {
    return this.page.locator("//INPUT[@id='inputEmail']");
  }

  get Login_Button2(): Locator {
    return this.page.locator("//span[contains(@class, 'flex-fill')]");
  }

  get Loan_Number4(): Locator {
    return this.page.locator("//a[contains(text(),\"240408179\")]");
  }

  get Pipeline1(): Locator {
    return this.page.locator("//div[contains(@class, 'collapse') and contains(@class, 'navbar-collapse') and contains(@class, 'menu-items')]/UL[1]/LI[2]/A[1]/SPAN[1]");
  }

  get Pipeline2(): Locator {
    return this.page.locator("//div[contains(@class, 'collapse') and contains(@class, 'navbar-collapse') and contains(@class, 'menu-items')]/UL[1]/LI[2]/A[1]");
  }

  get Quick_Pricer(): Locator {
    return this.page.locator("//div[contains(@class, 'collapse') and contains(@class, 'navbar-collapse') and contains(@class, 'menu-items')]/UL[1]/LI[1]/A[1]/SPAN[1]");
  }

  get Close_Button1(): Locator {
    return this.page.locator("//span[contains(text(),\"×\")]");
  }

  get Pipeline3(): Locator {
    return this.page.locator("//div[contains(@class, 'collapse') and contains(@class, 'navbar-collapse') and contains(@class, 'menu-items')]/UL[1]/LI[2]/A[1]/SPAN[1]");
  }

  get username_Input5(): Locator {
    return this.page.locator("//INPUT[@id='inputEmail']");
  }

  get password_Input4(): Locator {
    return this.page.locator("//INPUT[@id='inputPassword']");
  }

  get Login_Button3(): Locator {
    return this.page.locator("//span[contains(@class, 'flex-fill')]");
  }

  get password_Input5(): Locator {
    return this.page.locator("//INPUT[@id='inputPassword']");
  }

  get Login_Button4(): Locator {
    return this.page.locator("//span[contains(@class, 'flex-fill')]");
  }

  get username_Input6(): Locator {
    return this.page.locator("//INPUT[@id='inputEmail']");
  }

  get password_Input6(): Locator {
    return this.page.locator("//INPUT[@id='inputPassword']");
  }

  get Login_Button5(): Locator {
    return this.page.locator("//span[contains(@class, 'flex-fill')]");
  }

  get Loan_Number5(): Locator {
    return this.page.locator("//a[contains(text(),\"240408144\")]");
  }

  get FICO_Input_Field(): Locator {
    return this.page.locator("//input[@placeholder=\"FICO\"]");
  }

  get Purchase_Price_Input_Field(): Locator {
    return this.page.locator("//label/../div/input[@id=\"purchasePrice\" or @placeholder =\"Purchase Price\"]");
  }

  get Appraised_Value_Input_Field(): Locator {
    return this.page.locator("//label/../div/input[@id=\"appraisedPrice\" or @placeholder =\"Appraised Value\"]");
  }

  get Loan_Amount_Input_Field(): Locator {
    return this.page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]");
  }

  get Lock_Days(): Locator {
    return this.page.locator("//label[@aria-label=\"Lock Days\"]");
  }

  get _30_Days_Under_Lock_Days(): Locator {
    return this.page.locator("//ul/li/span[contains(.,\"30 days\")] | //select[@id=\"dayLocks\"]/option[text()=\"30 days \"]");
  }

  get Search_Button_Under_Search_Fields(): Locator {
    return this.page.locator("//button[contains(.,\"Search\")][last()]");
  }

  get First_Row_Of_Rate_Data(): Locator {
    return this.page.locator("//table/tbody/tr[1]");
  }

  get Export_Pricing_Button(): Locator {
    return this.page.locator("//a[@tooltip=\"Export Pricing\"]");
  }

  get Credit_Score_Value(): Locator {
    return this.page.locator("//th[contains(text(),\"Credit Score\")]/../th[3]");
  }

  get Loan_Amount_Value(): Locator {
    return this.page.locator("//th[contains(text(),\"Loan Amount\")]/../th[3]");
  }

  get Purchase_Price_Value(): Locator {
    return this.page.locator("//th[contains(text(),\"Purchase Price\")]/../th[3]");
  }

  get Appraised_Value(): Locator {
    return this.page.locator("//th[contains(text(),\"Appraised Value\")]/../th[3]");
  }

  get Loan_Pricer_Configuration(): Locator {
    return this.page.locator("//a[.=\"Loan Pricer Configuration\"]");
  }

  get Enable_Custom_UI_Under_Loan_Pricing(): Locator {
    return this.page.locator("//label[text()=\" Enable Custom UI \"]/../input");
  }

  get username_Input7(): Locator {
    return this.page.locator("//input[@id='inputEmail']");
  }

  get Login(): Locator {
    return this.page.locator("//label[@for=\"username\"]/..");
  }

  get password_Input7(): Locator {
    return this.page.locator("//input[@id='inputPassword']");
  }

  get Login_Button_In_Login_Page(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Login\"]]");
  }

  get password_Input8(): Locator {
    return this.page.locator("//input[@id='inputPassword']");
  }

  get username_Input8(): Locator {
    return this.page.locator("//input[@id='inputEmail']");
  }

  get password_Input9(): Locator {
    return this.page.locator("//input[@id='inputPassword']");
  }

  get password_Input10(): Locator {
    return this.page.locator("//input[@id='inputPassword']");
  }

  get Login_Button7(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Login\"]]");
  }

  get Loan_Number_1(): Locator {
    return this.page.locator("//a[@aria-label=\"Loan Number\"]");
  }

  get Get_Pricing_Button_in_Loan_Details_Page(): Locator {
    return this.page.locator("(//div[contains(@class, 'hide-mob')])[1]//button[text()[normalize-space() = \"Get Pricing\"]]");
  }

  get Result_Filter_Max_Program_per_rate_No_limit_1_Progra(): Locator {
    return this.page.locator("//nav[@id='sidebar']");
  }

  get username_Input9(): Locator {
    return this.page.locator("//input[@id='inputEmail']");
  }

  get Login_Button8(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Login\"]]");
  }

  get password_Input11(): Locator {
    return this.page.locator("//input[@id='inputPassword']");
  }

  get Lock_Expiration_Date_on_Loan_view(): Locator {
    return this.page.locator("//div[text()=\"Lock Expiration Date\"]/../div[2]");
  }

  get Login_Button9(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Login\"]]");
  }

  get Loan_Number7(): Locator {
    return this.page.locator("//a[@aria-label=\"Loan Number\"]");
  }

  get Get_Pricing_Button2(): Locator {
    return this.page.locator("(//div[contains(@class, 'hide-mob')])[1]//button[text()[normalize-space() = \"Get Pricing\"]]");
  }

  get ok_Button3(): Locator {
    return this.page.locator("//button[@role=\"button\" and contains(@class, 'btn-danger') and contains(@class, 'text-uppercase')]//span[text()[normalize-space() = \"ok\"]]");
  }

  get Purchase_Price_Input(): Locator {
    return this.page.locator("//input[@id='purchasePrice']");
  }

  get Appraised_Value_Input(): Locator {
    return this.page.locator("//input[@id='appraisedPrice']");
  }

  get Loan_Amount_Input(): Locator {
    return this.page.locator("//input[@id='loanAmount']");
  }

  get Search_Button_In_Pricing_Fields(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Search\"]]");
  }

  get divTag2(): Locator {
    return this.page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]");
  }

  get Export_Pricing_On_Pricing_Data(): Locator {
    return this.page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"]");
  }

  get Confirm(): Locator {
    return this.page.locator("//button[text()=\" Confirm \"]");
  }

  get Okay(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlg-message-box[1]/div[1]/div[3]/button[1]");
  }

  get _052324(): Locator {
    return this.page.locator("//body/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/app-scenario-panel[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[7]/div[2]");
  }

  get Comment_Input1(): Locator {
    return this.page.locator("//body/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/div[2]/div[2]/app-lock-panel[1]/div[1]/ul[1]/div[1]/div[1]/li[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/textarea[1]");
  }

  get Request_Lock_Button1(): Locator {
    return this.page.locator("//body/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/div[2]/div[2]/app-lock-panel[1]/div[1]/ul[1]/div[1]/div[1]/li[1]/div[2]/div[3]/app-lock-special-action[1]/button[1]");
  }

  get Confirm_Button4(): Locator {
    return this.page.locator("//div[text()=\" Are you sure you want to submit a lock request? \"]/../..//button[text()=\" Confirm \"]");
  }

  get Heading_Lock_Requested1(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Lock Requested\"]]");
  }

  get _4242024_113328_AM(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"4/24/2024, 11:33:28 AM\"] and contains(@class, 'text-grey')]");
  }

  get _4242024_113328_AM1(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"4/24/2024, 11:33:28 AM\"]]");
  }

  get Status_DateAuto_Healing(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"4/24/2024, 11:33:28 AM\"]]");
  }

  get Lock_Tag_Auto_Healing(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Request Lock: Testsigma Lock. [Rate Sheet Date: 3/27/2024, 3:48:40 AM Asia/Calcutta]\"]]");
  }

  get Min_Price_Value(): Locator {
    return this.page.locator("((//table)[2]/tbody//tr/td[3])[1]/div");
  }

  get Max_Price_Value(): Locator {
    return this.page.locator("((//table)[2]/tbody//tr/td[3])[last()]/div");
  }

  get Max_Rate_Value(): Locator {
    return this.page.locator("((//table/tbody)[2]/tr/td[1]/div/div)[last()-1]");
  }

  get Loan_Purpose_Dropdown_In_Search_Fileds(): Locator {
    return this.page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select");
  }

  get Loan_purpose_Text(): Locator {
    return this.page.locator("//label[text()=\"Loan Purpose\"]/../div/select/option[contains(text(),\"@|Loan Purpose|\")]");
  }

  get Amortization_Type_Drop_down(): Locator {
    return this.page.locator("//label[contains(text(),\"Amortization Type\")]");
  }

  get Amortization_Type_Text(): Locator {
    return this.page.locator("//label[text()=\"Amortization Type\"]/..//div/ul/li/span[contains(text(),\"@|Amort Type|\")]");
  }

  get Loan_Type_Drop_down(): Locator {
    return this.page.locator("//label[text()=\"Loan Type\"]/..//div/ul/li/span[contains(text(),\"@|Loan Type|\")]");
  }

  get Loan_Type_Drop_Down_In_Search_Fields(): Locator {
    return this.page.locator("//label[contains(text(),\"Loan Type\")]/..//button");
  }

  get ARM_Amort_Type(): Locator {
    return this.page.locator("//button[contains(text(),\"ARM\")]");
  }

  get ARM_Options_drop_down(): Locator {
    return this.page.locator("//label[text()=\"ARM Options\"]");
  }

  get MI_In_Result_Column(): Locator {
    return this.page.locator("(//table/thead//th[text()=\" MI \"])[1]");
  }

  get Cancel_Button_In_Popup(): Locator {
    return this.page.locator("(//*[contains(text(),\"Cancel\")])[last()]");
  }

  get Conventional_Loan_type(): Locator {
    return this.page.locator("//label[contains(text(),\"Loan Type\")]/..//div/ul/li/span[contains(text(),\"Conventional\")]");
  }

  get FHA_Loan_Type_Success(): Locator {
    return this.page.locator("//li[contains(@class,\"active loan-types-fha\")]/span[text()=\" FHA \"]");
  }

  get VA_Loan_Type(): Locator {
    return this.page.locator("//li/span[text()=\" VA \"]");
  }

  get HELOC_Loan_Type(): Locator {
    return this.page.locator("//li/span[text()=\" HELOC \"]");
  }

  get Details_Button(): Locator {
    return this.page.locator("//td[text()[normalize-space() = \"$|LOAN ID|\"]]/following-sibling::td[contains(normalize-space(),\"DetailsShow error\")]//button[text()[normalize-space() = \"Details\"]]");
  }

  get Close_Button_on_Details_Pop_up(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"Job Details\"]]/ancestor::div[contains(@class, 'modal-header')]/following-sibling::div[contains(@class, 'modal-footer')]//button[text()[normalize-space() = \"Close\"]]");
  }

  get Show_error_Button1(): Locator {
    return this.page.locator("//td[text()[normalize-space() = \"240408454\"]]/following-sibling::td[contains(normalize-space(),\"DetailsShow error\")]//button[text()[normalize-space() = \"Show error\"]]");
  }

  get Close_Button3(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Error On this Item:Response is 500\"]]/following-sibling::div[contains(@class, 'modal-footer')]//button[text()[normalize-space() = \"Close\"]]");
  }

  get Error_Details_on_Error_Message(): Locator {
    return this.page.locator("div[class='modal fade in show'] div[class='modal-body']");
  }

  get Error_Message_Object(): Locator {
    return this.page.locator("//span[normalize-space()='errorMessage']");
  }

  get Profile_Dropdown(): Locator {
    return this.page.locator("//a[@role=\"button\"]");
  }

  get Event_Data_Dropdown(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Event Data\"]]");
  }

  get loading(): Locator {
    return this.page.locator("//div[@role=\"alert\"]");
  }

  get Search_input_div(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Search\"]]/preceding-sibling::input[@type=\"text\"]");
  }

  get ALL_SUCCESS_FAIL_Dropdown(): Locator {
    return this.page.locator("//option[@value=\"0: ALL\"]/..");
  }

  get SEE_PAYLOAD(): Locator {
    return this.page.locator("(//td[contains(normalize-space(),\"SEE PAYLOAD\")])[2]//a[text()[normalize-space() = \"SEE PAYLOAD\"]]");
  }

  get Heading_response_Payload(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"response Payload\"]]");
  }

  get View_Data_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"View Data\"]]");
  }

  get Close_Button_on_Response_Payload(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Close\"]]");
  }

  get Even_Data_Status(): Locator {
    return this.page.locator("(//td[@data-title='Status'])[1]");
  }

  get USDA_Loan_Type(): Locator {
    return this.page.locator("//span[contains(text(),\"USDA\")]");
  }

  get LTV_Text_Box(): Locator {
    return this.page.locator("//input[@placeholder=\"LTV\" or @id=\"ltv\"]");
  }

  get Loan_number_On_Pricing_Data(): Locator {
    return this.page.locator("//span[contains(text(),\"Loan Number: $|LOAN ID| \")]");
  }

  get Rate_Sheet_Date(): Locator {
    return this.page.locator("//div[@class='text-primary']//br");
  }

  get SEARCH_FIELDS_Under_Pricing(): Locator {
    return this.page.locator("//h5[text()=\" SEARCH FIELDS \"]");
  }

  get Alert_Message(): Locator {
    return this.page.locator("//span[text()=\"Alert\"]");
  }

  get Active_conventional(): Locator {
    return this.page.locator("//li[@class=\"item active loan-type-conventional\"]");
  }

  get Active_FHA_Loan_Type(): Locator {
    return this.page.locator("//li[@class=\"item active loan-type-fha\"]");
  }

  get Active_VA_Loan_Type(): Locator {
    return this.page.locator("//li[@class=\"item active loan-type-va\"]");
  }

  get Active_USDA_Loan_Type(): Locator {
    return this.page.locator("//li[@class=\"item active loan-type-usda\"]");
  }

  get Purchase_Loan_purpose_Type(): Locator {
    return this.page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select/option[contains(text(),\"Purchase\")]");
  }

  get Get_Pricing_Button_on_Loan_Details(): Locator {
    return this.page.locator("(//div[contains(@class, 'hide-mob')])[1]//button[text()[normalize-space() = \"Get Pricing\"]]");
  }

  get ok_Button_on_alert(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"OK\"]]");
  }

  get Result_Filter(): Locator {
    return this.page.locator("//label[@for=\"dti\"]/ancestor::div[contains(@class, 'form-group')]/preceding-sibling::div[contains(normalize-space(),\"Result Filter\")]");
  }

  get Pricing_Date_Button(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Pricing Date\"]]");
  }

  get Previous_Month_Button(): Locator {
    return this.page.locator("//nav[@id='sidebar']/app-public-pricing-search[1]/app-pricing-search[1]/div[5]/div[1]/div[1]/bs-datepicker-inline[1]/bs-datepicker-inline-container[1]/div[1]/div[1]/div[1]/div[1]/bs-days-calendar-view[1]/bs-calendar-layout[1]/div[1]/bs-datepicker-navigation-view[1]/button[1]/span[1]");
  }

  get Previous_Month_Date(): Locator {
    return this.page.locator("//nav[@id='sidebar']/app-public-pricing-search[1]/app-pricing-search[1]/div[5]/div[1]/div[1]/bs-datepicker-inline[1]/bs-datepicker-inline-container[1]/div[1]/div[1]/div[1]/div[1]/bs-days-calendar-view[1]/bs-calendar-layout[1]/div[2]/table[1]/tbody[1]/tr[2]/td[5]/span[1]");
  }

  get Set_Date_Button(): Locator {
    return this.page.locator("//nav[@id='sidebar']/app-public-pricing-search[1]/app-pricing-search[1]/div[5]/div[1]/div[2]/button[1]");
  }

  get Override_Settings_Button(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Override Settings\"]]");
  }

  get Override_Extensions_Chekbox(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]");
  }

  get Override_Concessions_Checkbox(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]");
  }

  get Override_Relock_Fee_Checkbox(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]");
  }

  get Override_Extensions_Value_input(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]");
  }

  get Override_Concessions_Value_Input(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]");
  }

  get Override_Relock_Fee_Value_input(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/input[1]");
  }

  get OK_Button_in_Override_Setting(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[3]/div[1]/button[2]");
  }

  get Price_Adj_In_Loan_Pricer(): Locator {
    return this.page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[13]/div[1]");
  }

  get Details_5_750_FNMA_Conforming_30Yr_Fixed_Fees(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]");
  }

  get Override_Extension_in_Price_Adjustment(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[5]/td[1]/div[1]");
  }

  get Override_Concessions_in_Price_Adj(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[6]/td[1]/div[1]");
  }

  get Override_Relock_Fee_in_Price_Adj(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[7]/td[1]/div[1]");
  }

  get Close(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"Details - 5.750 % - FNMA Conforming 30Yr Fixed\"]]/ancestor::div[contains(@class, 'modal-body')]/preceding-sibling::div//span");
  }

  get Export_Pricing_Button_On_Loan_Pricer(): Locator {
    return this.page.locator("(//div[contains(@class, 'hide-mob')])[4]//i[contains(@class, 'fa-file-export') and contains(@class, 'text-primary')]");
  }

  get Fields_Old_Pricing_Results_New_Pricing_Results_Rate(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]");
  }

  get Override_Setting_Checkbox(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/input[1]");
  }

  get Expiration_Date_Checkbox(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]");
  }

  get Expiration_Date_Value_input(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]");
  }

  get Confirm_Button_In_Export_Pricing(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Ok_Button7(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlg-message-box[1]/div[1]/div[3]/button[1]");
  }

  get Lock_Expiration_Date_on_Loan_View1(): Locator {
    return this.page.locator("//div[@class='rounded data-content']//div[2]//div[1]//div[7]/div[2]");
  }

  get Historical_priced_date_in_information_section(): Locator {
    return this.page.locator("(//div[contains(text(),\"Priced using historical rates as of\")])[2]");
  }

  get Request_Lock_Button_on_Loan_View(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request Lock\"]]");
  }

  get Confirm_Button_for_Relock(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Are you sure you want to submit a lock request?\"]]/following-sibling::div[contains(@class, 'd-flex') and contains(@class, 'justify-content-end')]//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get More_Details(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"More Details ...\"]]");
  }

  get Override_Extension_in_Adjustment_Summery(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"Override - Extensions\"]]/following-sibling::td//div[contains(@class, 'percent')]");
  }

  get Override_Concessions_in_Adjustment_Summery(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"Override - Concessions\"]]/following-sibling::td//div[contains(@class, 'percent')]");
  }

  get Override_Relock_Fee_in_Adjustment_Summery(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"Override - Relock Fee\"]]/following-sibling::td//div[contains(@class, 'percent')]");
  }

  get Pipeline_Navigation_Button(): Locator {
    return this.page.locator("//a[@aria-label=\"Pipeline\"]//span[contains(@class, 'dlp-icon') and contains(@class, 'fa-list-alt')]");
  }

  get _05062024(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"05/06/2024\"]]");
  }

  get Previous_Month_Date_from_Loan_Pricer(): Locator {
    return this.page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-pricing[1]/div[2]/div[1]/nav[1]/app-public-pricing-search[1]/app-pricing-search[1]/div[1]/div[1]/div[2]/div[2]/div[1]/button[1]/span");
  }

  get Expiration_Date_Value_Data(): Locator {
    return this.page.locator("//input[@id='overrideExpirationDateValue']");
  }

  get Lock_Expiration_on_Pipeline_page(): Locator {
    return this.page.locator("(//td[@data-title='Lock Expiration'])[1]");
  }

  get Lock_Expired_Status_Under_Information_Section(): Locator {
    return this.page.locator("//span[normalize-space()='Lock Expired']");
  }

  get Lock_Expire_date_and_time_from_Information_section(): Locator {
    return this.page.locator("//span[normalize-space()='Lock Expired']/following-sibling::span");
  }

  get Quick_Pricer1(): Locator {
    return this.page.locator("//a[@aria-label=\"Quick Pricer\"]");
  }

  get FICO_inputNumber(): Locator {
    return this.page.locator("//input[@placeholder=\"FICO\"]");
  }

  get Borrower_Type_Dropdown(): Locator {
    return this.page.locator("//select[@aria-label=\"Borrower Type\"]");
  }

  get First_Time_Homebuyer_Check_box(): Locator {
    return this.page.locator("//label[text()[normalize-space() = \"First Time Homebuyer\"]]/preceding-sibling::input[@type=\"checkbox\"]");
  }

  get Loan_Types_Dropdown(): Locator {
    return this.page.locator("//select[@aria-label=\"Loan Types\"]");
  }

  get ZipCode_InputText_box(): Locator {
    return this.page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]");
  }

  get Zip_Code(): Locator {
    return this.page.locator("(//div[contains(normalize-space(),\"Zip Code *\")])[15]");
  }

  get AppraisedValue_inputText(): Locator {
    return this.page.locator("//input[@placeholder=\"Appraised Value\"]");
  }

  get Income_Doc_Type_Dropdown(): Locator {
    return this.page.locator("//select[@aria-label=\"Income Doc Type\"]");
  }

  get PurchasePrice_inputText(): Locator {
    return this.page.locator("//input[@placeholder=\"Purchase Price\"]");
  }

  get LTV_inputText(): Locator {
    return this.page.locator("//div[@id='main-div']/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[5]/div[2]/lib-pricing-field-item-view[1]/div[1]/div[1]/div[1]/input[1]");
  }

  get Reserves_Dropdown(): Locator {
    return this.page.locator("//select[@aria-label=\"Reserves\"]");
  }

  get None_selected_Dropdown(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"30 days\"]]");
  }

  get _30_days_45_days_60_days_Dropdown(): Locator {
    return this.page.locator("//div[@id='main-div']/div[1]/div[2]/div[1]/div[2]/div[5]/div[1]/div[1]/div[1]/lib-pricing-field-item-view[1]/div[1]/div[1]/lib-bs2-multi-select[1]/div[1]/ul[1]/li[2]");
  }

  get None_selected_Dropdown1(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"45 days\"]]");
  }

  get _30_days_45_days_60_days_Dropdown1(): Locator {
    return this.page.locator("//div[@id='main-div']/div[1]/div[2]/div[1]/div[2]/div[5]/div[1]/div[1]/div[1]/lib-pricing-field-item-view[1]/div[1]/div[1]/lib-bs2-multi-select[1]/div[1]/ul[1]/li[1]/span[1]");
  }

  get DTI_Dropdown(): Locator {
    return this.page.locator("//select[@aria-label=\"DTI\"]");
  }

  get _30_days_45_days_60_days_Dropdown2(): Locator {
    return this.page.locator("//div[@id='main-div']/div[1]/div[2]/div[1]/div[2]/div[5]/div[1]/div[1]/div[1]/lib-pricing-field-item-view[1]/div[1]/div[1]/lib-bs2-multi-select[1]/div[1]/ul[1]/li[1]/span[1]/i[1]");
  }

  get _30_days_45_days_60_days_Dropdown3(): Locator {
    return this.page.locator("//div[@id='main-div']/div[1]/div[2]/div[1]/div[2]/div[5]/div[1]/div[1]/div[1]/lib-pricing-field-item-view[1]/div[1]/div[1]/lib-bs2-multi-select[1]/div[1]/ul[1]/li[2]/span[1]");
  }

  get Days_In_Lock_Dropdown(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"@|Lock days|\"]]");
  }

  get Eligible_Tab(): Locator {
    return this.page.locator("//a[contains(text(),\"Eligible\") and @class=\"nav-link\"]");
  }

  get Lender(): Locator {
    return this.page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[9]/div[1]");
  }

  get Quick_Pricer_Program_Name(): Locator {
    return this.page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[10]/div[1]/div[1]");
  }

  get Base_Price(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[1]/div[1]");
  }

  get Adjustments_Price(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[2]/div[1]");
  }

  get Final_Price(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]");
  }

  get Program_Adjustment_Values_in_Pricing_adjustments(): Locator {
    return this.page.locator("//h6[text()=\"Pricing Adjustment\"]/..//td/div");
  }

  get Active_Eligible_Tab(): Locator {
    return this.page.locator("//a[@class=\"nav-link active\" and contains(text(),\"Eligible\")]");
  }

  get divTag3(): Locator {
    return this.page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[12]/div[1]");
  }

  get Best_X_Pricing_Checkbox(): Locator {
    return this.page.locator("//label[text()=\"Best X Pricing\"]/../input");
  }

  get Price_Adj_Table(): Locator {
    return this.page.locator("//div[@class=\"modal-body\"]");
  }

  get Non_Prime_or_Expanded_Prime_or_DSCR_Program(): Locator {
    return this.page.locator("//div[contains(text(),\"Non Prime\") or contains(text(),\"Expanded Prime\") or contains(text(),\"DSCR\")]");
  }

  get DSCR_Ratio(): Locator {
    return this.page.locator("//input[@placeholder=\"DSCR Ratio\"]");
  }

  get Income_Doc_Type_Value(): Locator {
    return this.page.locator("//select[@aria-label=\"Income Doc Type\"]/option[contains(text(),\"@|D:IncomeDocType|\")]");
  }

  get Expected_Lock_Status(): Locator {
    return this.page.locator("@|Loan Status|");
  }

  get Pricing_Options_Dropdown(): Locator {
    return this.page.locator("//label[@for='pricer-optionsQuickPricer']");
  }

  get Concession_in_Adj_Summery(): Locator {
    return this.page.locator("(//th[contains(text(),'Concession:')])[1]");
  }

  get Concession_value_in_Adj_Summery(): Locator {
    return this.page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div[1]/table[1]/tbody[1]/tr[6]/td[1]/div[1]");
  }

  get Duplicate_Concession(): Locator {
    return this.page.locator("(//th[contains(text(),'Concession:')])[2]");
  }

  get Duplicate_Extension(): Locator {
    return this.page.locator("(//th[contains(text(),'Extension: ')])[2]");
  }

  get Add_New_Concession_Button(): Locator {
    return this.page.locator("(//a[normalize-space()='Add New'])[1]");
  }

  get Concession_Type_2(): Locator {
    return this.page.locator("(//select[@aria-label=\"Concession Type\"])[2]");
  }

  get Price_Input_2(): Locator {
    return this.page.locator("(//INPUT[@id='feePoint'] | //INPUT[@name='Point'])[2]");
  }

  get Reason_Dropdown(): Locator {
    return this.page.locator("(//SELECT[@id='reasons'] | //SELECT[@aria-label='Reasons'])[2]");
  }

  get All_Option(): Locator {
    return this.page.locator("//li/span[contains(text(),\"All\")]");
  }

  get Program_Filter_Dropdown(): Locator {
    return this.page.locator("//label[text()=\"Program\"]/..//button");
  }

  get Program_Name_In_Filter(): Locator {
    return this.page.locator("//li/span[contains(text(),\"@|Program Name|\")]");
  }

  get Rate_Data_In_First_column(): Locator {
    return this.page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[1]");
  }

  get Details_Text_In_Price_Adjustment(): Locator {
    return this.page.locator("//div[@class=\"modal-body\"]/h5");
  }

  get Disqualified_Price_Adjustment(): Locator {
    return this.page.locator("//span[contains(text(),\"Disq.\")]");
  }

  get Program_Name_Inside_Price_Adj_Popup(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[$|Count|]/th");
  }

  get Program_Adj_value_In_Price_Adj(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[$|Count|]/td/div");
  }

  get Pricing_Disqualification_Reasons(): Locator {
    return this.page.locator("(//h6[text()=\"Pricing Disqualification\"]/../table[@class=\"adj-dlg\"]/tbody/tr/td)[$|ReasonsCount|]");
  }

  get Rate_Disqualification_Reason(): Locator {
    return this.page.locator("(//h6[text()=\"Rate Disqualification\"]/../table[@class=\"adj-dlg\"]/tbody/tr/td)[$|ReasonsCount|]");
  }

  get Pricing_Disqualification_Table(): Locator {
    return this.page.locator("//h6[text()=\"Pricing Disqualification\"]/../table[@class=\"adj-dlg\"]/tbody");
  }

  get Pricing_Adjustment_Programs(): Locator {
    return this.page.locator("//h6[text()=\"Pricing Adjustment\"]/..//tbody/tr/th");
  }

  get Rate_Disqualification_Table(): Locator {
    return this.page.locator("//h6[text()=\"Rate Disqualification\"]/../table[@class=\"adj-dlg\"]/tbody");
  }

  get Confirm_Button_2(): Locator {
    return this.page.locator("//div[contains(text(),\"Are you sure you want to submit a lock request?\")]/../..//button[contains(text(),\"Confirm\")]");
  }

  get Login_Button10(): Locator {
    return this.page.locator("//button[@role=\"button\"]/span[1]");
  }

  get Loan_Number8(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"240508962\"]]");
  }

  get ok_Button8(): Locator {
    return this.page.locator("(//span[contains(normalize-space(),\"ok\")])[2]//span");
  }

  get Purchase_Price(): Locator {
    return this.page.locator("//label[@for=\"purchasePrice\"]/..");
  }

  get Profile_picture_image1(): Locator {
    return this.page.locator("//img[@src=\"../../../../../../../assets/images/profile.png\"]");
  }

  get Logout_Dropdown1(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Logout\"]]");
  }

  get Loan_Number9(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"240508963\"]]");
  }

  get Request_Lock_Button_in_Lock_Information(): Locator {
    return this.page.locator("//body/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/div[3]/div[2]/app-lock-panel[1]/div[1]/ul[1]/div[1]/div[1]/li[1]/div[2]/div[3]/app-lock-special-action[1]/button[1] | //button[contains(text(),'  Request  Lock')]");
  }

  get Confirm_Button5(): Locator {
    return this.page.locator("//body/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/div[3]/div[2]/app-lock-panel[1]/div[1]/ul[1]/div[1]/div[1]/li[1]/div[2]/div[3]/app-lock-special-action[1]/div[1]/div[1]/div[1]/div[2]/div[2]/button[1]");
  }

  get Price_Button1(): Locator {
    return this.page.locator("//button[contains(text(),\"Price\")]");
  }

  get Confirm_Button6(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[4]/button[2]");
  }

  get Request_Lock_Alert_Message(): Locator {
    return this.page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlg-message-box[1]/div[1]/div[2]/div[1]/span[1]");
  }

  get Lock_Request_with_Price_Concession_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Lock Request with Price Concession\"]]");
  }

  get Previous_lock_event_has_not_yet_been_saved_and_or_up1(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Previous lock event has not yet been saved and or updated in the loan file in LOS. Please close the loan file and allow the loan to update status\"]]");
  }

  get Confirm_In_Popup(): Locator {
    return this.page.locator("//div[@class=\"modal-body\"]//button[text()=\" Confirm \"]");
  }

  get Allow_Current_Market_Pricing_Button(): Locator {
    return this.page.locator("//button[text()=\"  Allow  Current  Market  Pricing \"] | //button[contains(text(),'Current  Market  Pricing')]");
  }

  get Current_Market_Pricing_Allowed_Status(): Locator {
    return this.page.locator("//span[text()=\"Current Market Pricing Allowed\"] | //span[text()=\"Allow Current Market Pricing\"]");
  }

  get Pipeline4(): Locator {
    return this.page.locator("//a[@aria-label=\"Pipeline\"]");
  }

  get Filter_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Filter\"]]");
  }

  get lockStatus_Dropdown(): Locator {
    return this.page.locator("//select[@id='status']");
  }

  get Loan_Number10(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"$|LOAN ID|\"]]");
  }

  get Worse_Price_Table(): Locator {
    return this.page.locator("//table[@class=\"mobile-friendly-table\"]");
  }

  get Price_Adj_Table_In_Relock(): Locator {
    return this.page.locator("//h5[text()=\"Adjustments and Disqualifications\"]/../../../../div[@class=\"modal-body\"]");
  }

  get Rate_Sheet_Date_In_Stage2(): Locator {
    return this.page.locator("//div[@class=\"data-content d-flex justify-content-between\"]/div[@class=\"text-primary\"][2]");
  }

  get Confirm_Lock_Button(): Locator {
    return this.page.locator("//button[text()=\" Confirm Lock \"]");
  }

  get Table_rows(): Locator {
    return this.page.locator("//table/tbody/tr");
  }

  get Lock_Days_Option(): Locator {
    return this.page.locator("//select[@id=\"dayLocks\"]/option[text()=\"$|DayCount| \"]");
  }

  get Lock_Days_DropDown_under_Search_Fields(): Locator {
    return this.page.locator("//label[contains(text(),\"Lock Days\")]/..//button");
  }

  get Lock_Days_under_Search_Fields(): Locator {
    return this.page.locator("//li/span[text()=\" $|DayCount| days \"]");
  }

  get Lock_Days_list_Box(): Locator {
    return this.page.locator("//select[@aria-label=\"Day Locks\" and @ng-reflect-model=\"30\"] | //label[contains(text(),\"Lock Days\")]/..//button");
  }

  get Term_Years_Input_Field(): Locator {
    return this.page.locator("//label[text()=\"Term Years\"]/../input");
  }

  get Loan_number_Link(): Locator {
    return this.page.locator("//table/tbody//td[@data-title=\"Loan Number\"]/a");
  }

  get Sell_side_summary_Pop_up(): Locator {
    return this.page.locator("(//div[contains(text(),'Sell side summary')])[1]");
  }

  get Sell_side_summary_Confirm_Button(): Locator {
    return this.page.locator("(//button[normalize-space()='Confirm Lock'])[1]");
  }

  get Pricing_Disqualification_Reasons_in_pricing_adj(): Locator {
    return this.page.locator("//h6[text()=\"Pricing Disqualification\"]/../table/tbody/tr/td");
  }

  get Rate_Disqualification_Reasons(): Locator {
    return this.page.locator("//h6[text()=\"Rate Disqualification\"]/../table/tbody/tr/td");
  }

  get Terms_In_Pricing_fields(): Locator {
    return this.page.locator("//label[text()=\"Term Years\"]");
  }

  get Lock_Days_Options(): Locator {
    return this.page.locator("(//label[text()=\" Lock Days\"]/..//ul/li/span)[$|DaysOptions|]");
  }

  get Term_Options(): Locator {
    return this.page.locator("(//label[text()=\" Term (Years) \"]/..//ul/li/span)[$|TermOptions|]");
  }

  get Terms_Dropdown(): Locator {
    return this.page.locator("//label[text()=\" Term (Years) \"]/..//button");
  }

  get _30_Days_In_Lock_Days(): Locator {
    return this.page.locator("//label[text()=\" Lock Days\"]/..//ul/li/span[text()=\" 30 days \"]");
  }

  get Subordinate_Check_Box(): Locator {
    return this.page.locator("//label[contains(text(),\"Subordinate\")]/../input");
  }

  get Subordinate_Loanmortgage_Input_Field(): Locator {
    return this.page.locator("//label[text()=\" Subordinate Mortgage \" or text()=\"Subordinate Loan Amount\"]/..//input");
  }

  get CLTV_Input_Field(): Locator {
    return this.page.locator("//label[contains(text(),\"CLTV\")]/..//input");
  }

  get Loan_Number11(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"240509222\"]]/..");
  }

  get Loan_Number12(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"240509217\"]]");
  }

  get Get_Pricing(): Locator {
    return this.page.locator("(//button[text()[normalize-space() = \"Get Pricing\"]])[2]");
  }

  get Lock_Days_None_selected(): Locator {
    return this.page.locator("(//div[contains(normalize-space(),\"Lock Days* None selected\")])[15]");
  }

  get None_selected_Dropdown2(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"None selected\"]]");
  }

  get Dropdown_30_days(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"30 days\"]]");
  }

  get Search_Result_View_Show_Rates_in_125_Best_X_Pricing(): Locator {
    return this.page.locator("//div[@id='results-scroll']");
  }

  get Heading_Cost_to_Borrower(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"30 Yr LP Fixed- 346, Y50, AA9, 472 - PCO2\"]]/ancestor::tbody/preceding-sibling::thead[contains(normalize-space(),\"Rate Price Payment Cost to Borrower Lender Paid Comp.Plan Lender Fee Lock Period Lender Program Rules Price AdjRate Adj.Actions\")]//th[text()[normalize-space() = \"Cost to Borrower\"]]");
  }

  get Loan_number_on_loan_details(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"240509225\"]]");
  }

  get Subordinate_LoanMortgage_Field(): Locator {
    return this.page.locator("//label[text()=\" Subordinate Mortgage \" or text()=\"Subordinate Loan Amount\"]");
  }

  get Comp_Plan_In_Eligible_Tab(): Locator {
    return this.page.locator("(//th[contains(text(),\"Comp.Plan\")])[1]");
  }

  get Comp_Plan_In_Ineligible_Tab(): Locator {
    return this.page.locator("(//th[contains(text(),\"Comp.Plan\")])[2]");
  }

  get Price_On_Pricing(): Locator {
    return this.page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]/div)[1]");
  }

  get UFMIP_Financed_Field(): Locator {
    return this.page.locator("(//label[contains(text(), \"Financed\")]/..//div)[last()]");
  }

  get UFMIP_Fee_Amount(): Locator {
    return this.page.locator("//label[text()=\"UFMIP Fee Amount\" or contains(text(),\"UFMIP Amount\")]/..//input");
  }

  get Total_Loan_Amount_Field(): Locator {
    return this.page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input");
  }

  get Financed_Yes_Option(): Locator {
    return this.page.locator("//label[contains(text(),\"Financed\")]/../div/select/option[text()=\" Yes \" or @ng-reflect-ng-value=\"YES\"]");
  }

  get NonFinanced(): Locator {
    return this.page.locator("//option[normalize-space()=\"Not Financed\"]");
  }

  get Version_7747_Quick_Pricer_Pipeline_Monitoring_Confi(): Locator {
    return this.page.locator("//div[@id='navbars-menu']/ancestor::app-lp-company-layout[contains(normalize-space(),\"Version: 7747 Quick Pricer Pipeline Monitoring Config testsigmalock Event Data Queue Reports Contact Us Logout Quick Pricer Pipeline Monitoring Config Event Data Queue Reports Contact Us Logout Pipeli\")]");
  }

  get Loan_Number_on_pipeline(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"@|Loan Number|\"]]");
  }

  get Heading_Scenario_Pricing_Request(): Locator {
    return this.page.locator("//div[@id='navbars-menu']/ancestor::app-lp-company-toolbar/following-sibling::div[contains(@class, 'container')]//h4[contains(normalize-space(),\"Scenario Pricing Request v3\")]");
  }

  get Fico_alert_ok_Button(): Locator {
    return this.page.locator("//button[@role=\"button\" and contains(@class, 'btn-danger') and contains(@class, 'text-uppercase')]");
  }

  get Cost_To_Borrower_Column(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div");
  }

  get Description_in_cost_to_borrower(): Locator {
    return this.page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]");
  }

  get Close_Cost_To_Borrower(): Locator {
    return this.page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]");
  }

  get divTag7(): Locator {
    return this.page.locator("//div[@id='results-scroll']/search-tab-view-component[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[5]/div[1]");
  }

  get Origination_3_424_Points_x_240000_00_Loan_Amo(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"Origination : 3.424 (Points) x $240,000.00 (Loan Amount)\"]]");
  }

  get Conventional_Use_for_FNMAFHLMCJumboNonQM_Dropdown(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Conventional (Use for FNMA/FHLMC/Jumbo/Non-QM)\"]]");
  }

  get Dropdown_Conventional_Use_for_FNMAFHLMCJumboNonQ(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]//li[contains(normalize-space(),\"VA\")]");
  }

  get Borrower_FICO_Reserves_None_3_Months_6_Months_12_M(): Locator {
    return this.page.locator("//div[@id='results-scroll']/preceding-sibling::div[contains(@class, 'search-wrapper')]//div[contains(@class, 'card-body') and contains(@class, 'search-fields-wrapper')]");
  }

  get Funding_Fee_Financed_or_Exempt(): Locator {
    return this.page.locator("//select[@aria-label=\"Financed or Exempt?\"] | //select[@aria-label=\"Funding Fee Financed Type\"]");
  }

  get FundingFeeAmount_inputNumber(): Locator {
    return this.page.locator("//input[@placeholder=\"Funding Fee Amount\"]");
  }

  get TotalLoanAmount_inputText(): Locator {
    return this.page.locator("//input[@placeholder=\"Total Loan Amount\"]");
  }

  get Cost_to_borrower(): Locator {
    return this.page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[5]/div[1]");
  }

  get SEARCH_FIELDS1(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]");
  }

  get Origination_3_424_Points_x_243000_00_Loan_Amo(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"Origination : $|Points| (Points) x $|Added Fee and Loan Amount| (Loan Amount)\"]]");
  }

  get Dropdown_10_days_30_days_45_days_60_days_75_days_90_d1(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]//li[contains(normalize-space(),\"30 days\")]");
  }

  get _30_Years_Dropdown(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"30 Years\"]]");
  }

  get Dropdown_40_Years_30_Years_29_Years_28_Years_27_Years(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]//li[contains(normalize-space(),\"30 Years\")]");
  }

  get Dropdown_40_Years_30_Years_29_Years_28_Years_27_Years1(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"30 Years\"]]");
  }

  get Dropdown_40_Years_30_Years_29_Years_28_Years_27_Years2(): Locator {
    return this.page.locator("//ul[@role=\"menu\" and contains(@class, 'dropdown-menu') and contains(@class, 'pp-dropdownClasses') and contains(@class, 'show')]//li[contains(normalize-space(),\"29 Years\")]");
  }

  get Dropdown_40_Years_30_Years_29_Years_28_Years_27_Years3(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"30 Years\"]]");
  }

  get Dropdown_40_Years_30_Years_29_Years_28_Years_27_Years4(): Locator {
    return this.page.locator("//ul[@role=\"menu\" and contains(@class, 'dropdown-menu') and contains(@class, 'pp-dropdownClasses') and contains(@class, 'show')]//li[contains(normalize-space(),\"30 Years\")]");
  }

  get Lock_Days_30_days(): Locator {
    return this.page.locator("//div[@id='main-div']/div[1]/div[2]/div[1]/div[2]/div[4]/div[1]/div[2]/div[1]");
  }

  get Lock_days_Dropdown3(): Locator {
    return this.page.locator("(//div[contains(normalize-space(),\"Lock Days* None selected\")])[17]//button[text()[normalize-space() = \"None selected\"]]");
  }

  get Cost_to_Borrower_Col(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div");
  }

  get Price_Adjustments_Tab(): Locator {
    return this.page.locator("//body/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-pricing[1]/div[2]/lib-public-non-qm-pricing[1]/div[1]/lib-pricing-ui-view[1]/lib-pricing-h-ui-view[1]/div[1]/div[2]/search-tab-view-component[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[13]/div[1]");
  }

  get divTag8(): Locator {
    return this.page.locator("//div[@id='results-scroll']/search-tab-view-component[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[13]/div[1]");
  }

  get Details_0_990_30_Yr_DU_Fixed_346_Y50_AA91(): Locator {
    return this.page.locator("//span[@aria-label=\"Close\"]/ancestor::div[contains(@class, 'modal-header')]/following-sibling::div[contains(@class, 'modal-body')]");
  }

  get divTag9(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"LTV/FICO Features > 15 years - 720-739 / LTV 70.01 % - 75.0 %\"]]/following-sibling::td//div[contains(@class, 'percent')]");
  }

  get _2nd_adj_value(): Locator {
    return this.page.locator("(//h6[text()=\"Pricing Adjustment\"]/..//td/div)[2]");
  }

  get Lock_Status_Element(): Locator {
    return this.page.locator("//body/app-root/div[@class='main-background']/div[@class='theme-wrapper']/app-dlt-main-layout/div[@class='parent-main-layout']/div[@class='main-layout']/app-lp-company-layout/div[@class='container pt-3 pb-3']/app-lp-company-lock/div[@class='card']/div[@class='card-body']/div[@class='data-content']/app-lock-panel[@ng-reflect-price-quote='[object Object]']/div[@class='lock-history-status']/ul[@class='list-group']/div/div[1]/li[1]/div[1]/div[1]/div[1]/div[1]/span[2]");
  }

  get Loan_Number13(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"240509287\"]]/..");
  }

  get Loan_Number_from_Second_Row(): Locator {
    return this.page.locator("(//td[@data-title='Loan Number'])[2]");
  }

  get Loan_Number_from_First_Row(): Locator {
    return this.page.locator("(//td[@data-title='Loan Number'])[1]");
  }

  get Origination_1_500_Points_x_240000_00_Loan_Amo(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"Origination : 1.500 (Points) x $240,000.00 (Loan Amount)\"]]");
  }

  get FNMA_Conforming_30Yr_Fixed(): Locator {
    return this.page.locator("(//td[contains(normalize-space(),\"FNMA Conforming 30Yr Fixed\")])[1]//a[text()[normalize-space() = \"FNMA Conforming 30Yr Fixed\"]]");
  }

  get divTag10(): Locator {
    return this.page.locator("(//td[contains(@class, 'text-grey')])[3]//div[contains(@class, 'currency')]");
  }

  get Price_adj_Adjustment_Values(): Locator {
    return this.page.locator("(//h6[text()=\"Pricing Adjustment\"]/..//td/div)[$|count|]");
  }

  get color_finding(): Locator {
    return this.page.locator("div.percent[data=\"$|Adj Value|\"]::after {color}");
  }

  get Funding_Fee_Amount(): Locator {
    return this.page.locator("//label[contains(text(),\"Funding Fee Amount\")]/..//input");
  }

  get EXEMPT_Option(): Locator {
    return this.page.locator("//label[contains(text(),\"Financed\")]/../div/select/option[text()=\" EXEMPT \" or @ng-reflect-ng-value=\"EXEMPT\"]");
  }

  get Funding_Fee_Financed_input_field(): Locator {
    return this.page.locator("//label[contains(text(),\"Funding Fee Financed\")]/../div/select");
  }

  get Guarantee_Fee_Financed_DropDown(): Locator {
    return this.page.locator("//label[contains(text(),\"Guarantee Fee Financed\")]/../div/select");
  }

  get Guarantee_Fee_Amount_Input_Field(): Locator {
    return this.page.locator("//label[contains(text(),\"Guarantee Fee Amount\") or text()=\" USDA Guarantee Fee \"]/..//input");
  }

  get Conventional_Loan_Type_Success(): Locator {
    return this.page.locator("//li[contains(@class, \"active loan-types-conventional\")]");
  }

  get Impersonate_User_Input(): Locator {
    return this.page.locator("//input[@id='impersonateText']");
  }

  get buttonTag(): Locator {
    return this.page.locator("//input[@id='impersonateText']/following-sibling::div//button[contains(@class, 'remove-button') and contains(@class, 'btn-transparent') and contains(@class, 'fa-undo')]");
  }

  get Test_Create2_Test_Create1_Test_Sigma_Lock_Test_Sigma(): Locator {
    return this.page.locator("//li[text()[normalize-space() = \"Test Create2\"]]/..");
  }

  get Test_Sigma_Lock(): Locator {
    return this.page.locator("//li[text()[normalize-space() = \"Test Sigma Lock\"]]");
  }

  get Impersonated_As_Text(): Locator {
    return this.page.locator("//label[contains(text(),\"Impersonated as:\")]");
  }

  get Test_Sigma_Loan(): Locator {
    return this.page.locator("//li[text()[normalize-space() = \"Test Sigma Loan\"]]");
  }

  get Old_Pricing_Results_column(): Locator {
    return this.page.locator("//th[text()=\"Old Pricing Results\"]");
  }

  get New_Pricing_Results_Column(): Locator {
    return this.page.locator("//th[text()=\"New Pricing Results\"]");
  }

  get Export_Pricing_Table(): Locator {
    return this.page.locator("//th[contains(text(),'Fields')]/../../../../table");
  }

  get Price_On_Loan_Application(): Locator {
    return this.page.locator("//div[text()=\" Price \"]/../div[2]");
  }

  get LTV_On_loan_Application(): Locator {
    return this.page.locator("//div[text()=\"LTV\"]/../div[2]");
  }

  get Loan_ID_On_Loan_Application(): Locator {
    return this.page.locator("//span[contains(text(),\"Loan ID:\")]");
  }

  get Price_Change_Button_Fron_Price_to_Points(): Locator {
    return this.page.locator("(//table//th[3])[1]/a/i");
  }

  get Product_Finder(): Locator {
    return this.page.locator("//a[text()=\"Product Finder\"]");
  }

  get Product_Finder_popup(): Locator {
    return this.page.locator("//h5[contains(text(),\"Product Finder\")]");
  }

  get _3_Yr_PPP_Option(): Locator {
    return this.page.locator("//div[contains(text(),\"3 Yr PPP\" )]");
  }

  get _1_Yr_PPP_Option(): Locator {
    return this.page.locator("//div[contains(text(),\"1 Yr PPP\" )]");
  }

  get _2_Yr_PPP_Option(): Locator {
    return this.page.locator("//div[contains(text(),\"2 Yr PPP\" )]");
  }

  get Ok_Button_On_Product_Finder(): Locator {
    return this.page.locator("//button[contains(text(),\"OK\" )]");
  }

  get Random_Product1(): Locator {
    return this.page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber1|]");
  }

  get _2_Yr_PPP_Button(): Locator {
    return this.page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"2 Yr PPP\" )]");
  }

  get _3_Yr_PPP_Button(): Locator {
    return this.page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"3 Yr PPP\" )]");
  }

  get _2Yr_PPP_Cancel_Button(): Locator {
    return this.page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"2 Yr PPP\" )]/span");
  }

  get _1_Yr_PPP_Cancel_Button(): Locator {
    return this.page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"1 Yr PPP\" )]/span");
  }

  get _3_Yr_PPP_Cancel_Button(): Locator {
    return this.page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"3 Yr PPP\" )]/span");
  }

  get Total_Monthly_Income_input(): Locator {
    return this.page.locator("//label[text()=\"Total Monthly Income\"]/..//input");
  }

  get Average_Median_Income_Input(): Locator {
    return this.page.locator("//label[text()=\"Average Median Income\"]/..//input");
  }

  get of_AMI_Input_Field(): Locator {
    return this.page.locator("//label[text()=\"% of AMI\"]/..//input");
  }

  get City_Input_Field(): Locator {
    return this.page.locator("//label[contains(text(),\"City\")]/..//input");
  }

  get County_dropdown(): Locator {
    return this.page.locator("//label[contains(text(),\"County\")]/..//select");
  }

  get State_Dropdown(): Locator {
    return this.page.locator("//select[@aria-label=\"State\"]");
  }

  get expanded_PropertyDetails(): Locator {
    return this.page.locator("//div[@class=\"expandable expandPropertyDetails\"]");
  }

  get Search_Fields_Under_Loan_Pricer_Configurations(): Locator {
    return this.page.locator("//input[@id=\"search-fieldsMain\"]/..//label[text()=\"Search Fields\"]/span");
  }

  get AUS_Under_Quick_Pricer_Configurationsdefault(): Locator {
    return this.page.locator("//input[@id=\"ausQuickPricer\"]/..//label[text()=\"AUS\"]");
  }

  get Non_Conforming_Checkbox_quick_pricerdefault(): Locator {
    return this.page.locator("//input[@id=\"ausNoneQuickPricer\"]");
  }

  get Guaranteed_Underwriting_Service_CheckBox_quick_pricerdefault(): Locator {
    return this.page.locator("//input[@id=\"ausGUSQuickPricer\"]");
  }

  get Manual_Underwriting_Check_Box_quick_pricerdefault(): Locator {
    return this.page.locator("//input[@id=\"ausMUWQuickPricer\"]");
  }

  get LP_Check_Box_quick_pricerdefault(): Locator {
    return this.page.locator("//input[@id=\"ausLPQuickPricer\"]");
  }

  get DU_Check_Box_quick_pricerdefault(): Locator {
    return this.page.locator("//input[@id=\"ausDUQuickPricer\"]");
  }

  get Back_Button(): Locator {
    return this.page.locator("//a[text()=\"Back\"]");
  }

  get AUS_Under_Search_Fields(): Locator {
    return this.page.locator("//label[text()=\"AUS\"]/..//button");
  }

  get Active_AUSNonConformingsearch_field_ui(): Locator {
    return this.page.locator("//span[@class='form-check-label' and .//i[contains(@class,'text-success')] and normalize-space(text())='Non Conforming']");
  }

  get AUSNonConforming(): Locator {
    return this.page.locator("//li[@class=\"item aus-non-conforming\"]");
  }

  get Active_AUSGuaranteedUnderwritingServiceserach_field_ui(): Locator {
    return this.page.locator("//span[@class='form-check-label' and .//i[contains(@class,'text-success')] and normalize-space(text())='Guaranteed Underwriting Service']");
  }

  get AUSGuaranteedUnderwritingService(): Locator {
    return this.page.locator("//li[@class=\"item aus-guaranteed-underwriting-service\"]");
  }

  get Active_AUSManualUnderwriting(): Locator {
    return this.page.locator("//li[@class=\"item active aus-manual-underwriting\"]");
  }

  get AUSManualUnderwriting(): Locator {
    return this.page.locator("//li[@class=\"item aus-manual-underwriting\"]");
  }

  get Active_AUSLPserach_filed_ui(): Locator {
    return this.page.locator("//span[@class='form-check-label' and .//i[contains(@class,'text-success')] and normalize-space(text())='LP']");
  }

  get AUSLP(): Locator {
    return this.page.locator("//li[@class=\"item aus-lp\"]");
  }

  get Active_AUSDUsearch_field_ui(): Locator {
    return this.page.locator("//span[@class='form-check-label' and .//i[contains(@class,'text-success')] and normalize-space(text())='DU']");
  }

  get AUSDU(): Locator {
    return this.page.locator("//li[@class=\"item aus-du\"]");
  }

  get FICO(): Locator {
    return this.page.locator("//label[text()=\"Fico\" or text()=\" FICO \"]");
  }

  get More_Property_Attributes(): Locator {
    return this.page.locator("//span[text()=\"More Property Attributes\"]");
  }

  get More_Property_and_Address_Details_Text(): Locator {
    return this.page.locator("//h5[text()=\" More Property and Address Details \"]");
  }

  get Close_More_property_and_address_details(): Locator {
    return this.page.locator("//span[@aria-label=\"Close\"]");
  }

  get State_in_More_Property_details(): Locator {
    return this.page.locator("//label[contains(text(),\"State\")]/..//input");
  }

  get Lock_Request_with_Price_Concession_Status(): Locator {
    return this.page.locator("(//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div//li)[1]//span[text()=\"Test Sigma Lock\" or text()=\"Test Sigma Loan\"]/../span[text()=\"Lock Request with Price Concession\"]");
  }

  get Concession_Reason_Under_More_Details(): Locator {
    return this.page.locator("//table/tbody/tr/th[text()=\" Concession: $|ConcessionReason| \"] | //table/tbody/tr/th[contains(text(),\"Concession: $|ConcessionReason|\")]");
  }

  get Concession_Reason_Adjustment(): Locator {
    return this.page.locator("//table[@class=\"adj-dlg tb-responsive\"]/tbody/tr/th[text()=\" Concession: $|ConcessionReason| \"]/../td/div | //table[@class=\"adj-dlg tb-responsive\"]/tbody/tr/th[contains(text(),\"Concession: $|ConcessionReason|\")]/../td/div");
  }

  get Allow_Pricing_Comparison_Checkbox(): Locator {
    return this.page.locator("//*[text()=\"Document Generation Settings\"]/..//label[@for=\"ppQuickPricerallowPricingComparison\"]/..//input[@type=\"checkbox\"]");
  }

  get Standard_option_in_allow_pricing_comparison(): Locator {
    return this.page.locator("//label[@for=\"ppQuickPricerstandardPricingComparisonType\"]");
  }

  get Concession_Type_Dropdown(): Locator {
    return this.page.locator("//select[@aria-label=\"Concession Type\"]");
  }

  get Concession_value_Input(): Locator {
    return this.page.locator("//input[@placeholder=\"Concession in points\"]");
  }

  get Reasons_Dropdown_menu(): Locator {
    return this.page.locator("//select[@aria-label=\"Reasons\"]");
  }

  get Results_Columns_Checkbox(): Locator {
    return this.page.locator("//input[@id='results-columnsQuickPricer']");
  }

  get Show_Rate_Adjustment_Checkbox(): Locator {
    return this.page.locator("//label[@for=\"keyColQuickPricerrateAdjustment\"]/..//input[@type=\"checkbox\"]");
  }

  get Show_Pricing_Adjustment_element(): Locator {
    return this.page.locator("//div[contains(@class, \"custom-checkbox\")]/label[@for=\"keyColQuickPriceradjustment\"]/..");
  }

  get Show_Pricing_Adjustment_Checkbox(): Locator {
    return this.page.locator("//label[@for=\"keyColQuickPriceradjustment\"]/..//input[@type=\"checkbox\"]\n");
  }

  get Show_Adjustment_Details(): Locator {
    return this.page.locator("//label[@for=\"keyColQuickPriceradjustmentDetails\"]");
  }

  get Show_Adjustment_Details_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPriceradjustmentDetails\"]");
  }

  get Show_Apr(): Locator {
    return this.page.locator("//label[@for=\"keyColQuickPricerapr\"]");
  }

  get Show_Apr_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerapr\"]");
  }

  get Show_Cost_To_Borrower(): Locator {
    return this.page.locator("//label[@for=\"keyColQuickPricercostToBorrower\"]");
  }

  get Show_Cost_To_Borrower_CheckboxAutomation_donot_touch(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer59costToBorrower\"]");
  }

  get Show_Dti_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1dti\"]");
  }

  get Show_Dti(): Locator {
    return this.page.locator("//label[@for=\"keyColQuickPricerdti\"]");
  }

  get Show_Comp_Plan_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricercompPlan']");
  }

  get Show_Lender_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricerlender']");
  }

  get Show_Lender_Borrower_Paid_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricerlenderBorrowerPaid']");
  }

  get Show_MI_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricermi']");
  }

  get Show_Payment_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricerpayment']");
  }

  get Show_Payment_Schedule_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricerpaymentSchedule']");
  }

  get Show_Price_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricerprice']");
  }

  get Show_Program_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricerprogram']");
  }

  get Show_Rate_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricerrate']");
  }

  get Show_Rate(): Locator {
    return this.page.locator("//label[@for=\"keyColQuickPricerrate\"]");
  }

  get Show_Rules_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricerrules']");
  }

  get Show_Lender_Fee_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricerlenderFee' and @type=\"checkbox\" ]");
  }

  get Show_Lock_Period_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyColQuickPricerlockPeriod']");
  }

  get Rate_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th/a[text()[normalize-space() = \"Rate\"]]");
  }

  get Price_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th/a[text()[normalize-space() = \"Price\"]]");
  }

  get Payment_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Payment\"]]");
  }

  get APR_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"APR\"]]");
  }

  get DTI_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"DTI\"]]");
  }

  get Cost_to_Borrower_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th/a[text()[normalize-space() = \"Cost to Borrower\"]]");
  }

  get Lender_Paid_in_results_columns(): Locator {
    return this.page.locator("//th[contains(text(),\" Paid \")]");
  }

  get Comp_Plan_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th/a[text()[normalize-space() = \"Comp.Plan\"]]");
  }

  get Lender_Fee_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Lender Fee\"]]");
  }

  get Lock_Period_In_Results_Columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Lock Period\"]]");
  }

  get Lender_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Lender\"]]");
  }

  get Program_In_Results_Columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th/a[text()[normalize-space() = \"Program\"]]");
  }

  get Rules_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Rules\"]]");
  }

  get Price_Adj_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Price Adj\"]]");
  }

  get Rate_Adj_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Rate Adj.\"]]");
  }

  get Rate_Price_Payment_APR_DTI_Cost_to_Borrower_Lender_P(): Locator {
    return this.page.locator("html[1]/body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-quick-pricer[1]/div[1]/div[1]/div[1]/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]");
  }

  get Admin_Fee_Checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPriceradminFee\"]\n");
  }

  get Compensation_Type_Options_Checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricercompensationTypeOptions\"]");
  }

  get DTI_Checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerdti\"]");
  }

  get Impound_In_Searchdefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerimpound\"]");
  }

  get First_Time_Home_Buyer_Checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerfirstTimeHomeBuyer\"]");
  }

  get First_Time_Home_Buyer(): Locator {
    return this.page.locator("//label[@for=\"keyFieldQuickPricerfirstTimeHomeBuyer\"]");
  }

  get Income_And_Debt_Checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerincomeAndDebt\"]");
  }

  get Income_And_Debt(): Locator {
    return this.page.locator("//label[@for=\"keyFieldQuickPricerincomeAndDebt\"]");
  }

  get Property_Valuation_Type_Checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerpropertyValuationType\"]");
  }

  get Property_Valuation_Type(): Locator {
    return this.page.locator("//label[@for=\"keyFieldQuickPricerpropertyValuationType\"]");
  }

  get Show_Compensation_Percent(): Locator {
    return this.page.locator("//label[@for=\"keyFieldQuickPricershowCompensationPercent\"]");
  }

  get Show_Compensation_Percent_Checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricershowCompensationPercent\"]");
  }

  get Default_Lock_Daydefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerdefaultLockDay\"]");
  }

  get Default_Lock_Day_Checkbox(): Locator {
    return this.page.locator("//input[@id='keyFieldQuickPricerdefaultLockDay']");
  }

  get Ami_Information(): Locator {
    return this.page.locator("//label[@for=\"keyFieldQuickPriceramiInformation\"]");
  }

  get AmI_Information_Checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPriceramiInformation\"]");
  }

  get Qm_Filter(): Locator {
    return this.page.locator("//label[@for=\"keyFieldQuickPricerqmFilter\"]");
  }

  get Qm_Filter_Checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerqmFilter\"]");
  }

  get of_AMI_label(): Locator {
    return this.page.locator("//label[text()=\"% of AMI\"]");
  }

  get Fee_Option(): Locator {
    return this.page.locator("//option[contains(text(),\"FEE\")]");
  }

  get Config(): Locator {
    return this.page.locator("//a[@aria-label=\"Config\"]");
  }

  get Quick_Pricer_Configuration(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Quick Pricer Configuration\"]]");
  }

  get Pricer_Options_Checkbox(): Locator {
    return this.page.locator("//input[@id='pricer-optionsQuickPricer']");
  }

  get Result_Settings_In_quick_pricer(): Locator {
    return this.page.locator("//label[contains(@for,'result-settingsQuickPricer')]");
  }

  get Apply_PPE_Closing_Costs_Checkbox(): Locator {
    return this.page.locator("//input[@id='ppQuickPriceruseCompanyDefaultClosingCost']");
  }

  get Show_Results_Filter_Checkbox(): Locator {
    return this.page.locator("//input[@id='ppQuickPricershowResultsFilter']");
  }

  get Rate_Checkbox(): Locator {
    return this.page.locator("//input[@id='ppQuickPricershowRate']");
  }

  get Program_Checkbox(): Locator {
    return this.page.locator("//input[@id='ppQuickPricershowProgram']");
  }

  get Lenders_Checkbox(): Locator {
    return this.page.locator("//input[@id='ppQuickPricershowLenders']");
  }

  get Enable_Best_X_Filter_Checkbox(): Locator {
    return this.page.locator("//input[@id='ppQuickPricerbest-price']");
  }

  get Base_100_Checkbox(): Locator {
    return this.page.locator("(//input[@type=\"checkbox\" and contains(@class, 'custom-control-input')])[25]");
  }

  get Hide_Ineligible_Results_Tab_Checkbox(): Locator {
    return this.page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']");
  }

  get Reprice_Show_all_Lenders_Checkbox(): Locator {
    return this.page.locator("//input[@id='ppQuickPricershowAllLenders']");
  }

  get Show_Multi_Day_Lock_Checkbox(): Locator {
    return this.page.locator("//input[@id='ppQuickPricershowDayLock']");
  }

  get Rate_In_Result_Settings(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricershowRate\"]");
  }

  get Price_In_Result_Settings(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricershowPoints\"]");
  }

  get Program_In_Result_Settings(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricershowProgram\"]");
  }

  get All_in_program_dropdown(): Locator {
    return this.page.locator("(//app-bs-multi-select[contains(normalize-space(),\"All\")])[1]//button[contains(normalize-space(),\"All\")]");
  }

  get VA_One_Score_30_Yr_Fixed_VA_30_Yr_Fixed(): Locator {
    return this.page.locator("//span[contains(.,'VA One Score 30 Yr Fixed')]");
  }

  get Lenders_in_Result_Settings(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricershowLenders\"]");
  }

  get All_in_lenders_dropdown(): Locator {
    return this.page.locator("(//button[contains(normalize-space(),\"All\")])[2]//span[text()[normalize-space() = \"All\"]]");
  }

  get EPM_in_lender_dropdown(): Locator {
    return this.page.locator("//li[@class='item active lenders-epm']");
  }

  get Day_Lock_View(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Day Lock View\"]]");
  }

  get Eligible_under_day_lock_view(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Eligible\"]]");
  }

  get EPM_under_Eligible(): Locator {
    return this.page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[3]/div[1]/lib-pricing-result-multi-day-lock[1]/div[1]/div[2]/div[1]/div[1]");
  }

  get VA_One_Score_30_Yr_Fixed(): Locator {
    return this.page.locator("(//div[contains(normalize-space(),\"VA One Score 30 Yr Fixed\")])[49]//div[contains(@class, 'acc-header') and contains(@class, 'd-flex') and contains(@class, 'align-items-center') and contains(@class, 'font-weight-bold')]");
  }

  get Rate_15_Days_Expires_061924_30_Days_Expires_0704(): Locator {
    return this.page.locator("(//div[contains(normalize-space(),\"VA One Score 30 Yr Fixed Rate15 DaysExpires 06/19/2430 DaysExpires 07/04/2445 DaysExpires 07/19/2460 DaysExpires 08/03/2490 DaysExpires 09/02/245.25% 1.961 2.061 2.361 2.661 -5.375% 1.841 1.941 2.241 \")])[15]//div[contains(@class, 'acc-content') and contains(@class, 'overflow-auto')]");
  }

  get Show_price_in_base100(): Locator {
    return this.page.locator("//label[text()[normalize-space() = \"Show price in base100\"]]");
  }

  get Best_X_Pricing_In_Result_Setting(): Locator {
    return this.page.locator("//label[contains(.,'Best X Pricing')]");
  }

  get Login2(): Locator {
    return this.page.locator("//button[@role=\"button\"]/..");
  }

  get Quick_Pricer2(): Locator {
    return this.page.locator("//a[@aria-label=\"Quick Pricer\"]//span[contains(@class, 'dlp-icon') and contains(@class, 'fa-calculator-alt')]");
  }

  get Impersonate(): Locator {
    return this.page.locator("//label[@for=\"impersonate\"]");
  }

  get Confirm_Button_in_Request_Lock_Exception(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request Post- Lock Price Concession\"]]/following-sibling::div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Deny_Post_Lock_Request_Button1(): Locator {
    return this.page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]");
  }

  get Loan_Number14(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"240609601\"]]");
  }

  get Origination_2_618_Points_x_240000_00_Loan_Amo(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"Origination : 2.618 (Points) x $240,000.00 (Loan Amount)\"]]");
  }

  get FEE_And_Reason_Under_Price_Concession_Requested_PostLock(): Locator {
    return this.page.locator("//div[@id='lock-status-select']/preceding-sibling::div//li[contains(normalize-space(),\"FEE: 0.125 PointsReason : Points and Fees\")]");
  }

  get Concession_Reason(): Locator {
    return this.page.locator("//div[@id='lock-status-select']/preceding-sibling::div//span[text()[normalize-space() = \"Reason : Points and Fees\"]]");
  }

  get Product_Finder_Under_Pricing_Scenario(): Locator {
    return this.page.locator("//a[contains(text(),'Product Finder')]");
  }

  get Product_Finder_Popup_Menu(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"Product Finder\"]]");
  }

  get _1_Yr_PPP_Button1(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"1 Yr PPP\"]]");
  }

  get Random_Product2(): Locator {
    return this.page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber2|]");
  }

  get Random_Product3(): Locator {
    return this.page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber3|]");
  }

  get OK_Button_In_Product_Finder_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"OK\"]]");
  }

  get Product_Finder1(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Product Finder\"]]");
  }

  get Random_Product1_Display(): Locator {
    return this.page.locator("//a[text()=\"Product Finder\"]/parent::*//button[contains(normalize-space(.), \"$|FirstRandomProduct|\")]\n\n");
  }

  get Random_Product2_Display(): Locator {
    return this.page.locator("//a[text()=\"Product Finder\"]/parent::*//button[contains(normalize-space(.), \"$|SecondRandomProduct|\")]\n");
  }

  get Random_Product3_Display(): Locator {
    return this.page.locator("//a[text()=\"Product Finder\"]/parent::*//button[contains(normalize-space(.), \"$|ThirdRandomProduct|\")]\n");
  }

  get Default_To_AutoSearch_Checkbox(): Locator {
    return this.page.locator("//app-tab-component[@title='Loan Pricer']//div[@class='d-flex flex-column flex-md-row flex-wrap']//div[4]//div[1]\n");
  }

  get Search_has_changed(): Locator {
    return this.page.locator("//h1[normalize-space()='Search has changed']\n");
  }

  get Please_click_on_search(): Locator {
    return this.page.locator("//h3[normalize-space()='Please click on search']");
  }

  get Default_To_AutoSearch_Checkbox1(): Locator {
    return this.page.locator("//input[@id='ppMaindefaultToAutoSearch']");
  }

  get Login_Login_Password_Login_By_logging_in_to_your_acc(): Locator {
    return this.page.locator("//body//div[contains(@class, 'loginForm') and contains(@class, 'bg-login-color')]");
  }

  get Zip_Input(): Locator {
    return this.page.locator("//input[@id='zip']");
  }

  get Zip(): Locator {
    return this.page.locator("//label[@for=\"zip\"]/..");
  }

  get Conforming_2024_Zip_Fico_Purchase_Price_Appraised_Va(): Locator {
    return this.page.locator("//label[@for=\"zip\"]/ancestor::div[contains(@class, 'expandable') and contains(@class, 'expandPricingScenario')]");
  }

  get LTV_Input(): Locator {
    return this.page.locator("//input[@placeholder=\"LTV\"]");
  }

  get divTag11(): Locator {
    return this.page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[7]/div[1]");
  }

  get _30_Years_Fixed_Conventional_Purchase(): Locator {
    return this.page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]");
  }

  get Loan_Amount(): Locator {
    return this.page.locator("//label[@for=\"loanAmount\"]/..");
  }

  get Select_MI_CompanyDefault(): Locator {
    return this.page.locator("//label[contains(normalize-space(text()), \"Select MI Company\")] ");
  }

  get Show_Rules(): Locator {
    return this.page.locator("//label[@for=\"keyColQuickPricerrules\"]");
  }

  get Enable_Best_X_Filter(): Locator {
    return this.page.locator("//label[@for='ppQuickPricerbest-price']");
  }

  get Hide_Ineligible_Results_Tab(): Locator {
    return this.page.locator("//label[@for='ppQuickPricerhideIneligibleResultsTab']");
  }

  get Admin_Fee_In_Search_Fields(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPriceradminFee\"]");
  }

  get Admin_Fee_In_Pricing_Scenario(): Locator {
    return this.page.locator("//label[.='Admin Fee Waiver']");
  }

  get AUS_In_Pricing_Scenario(): Locator {
    return this.page.locator("//label[contains(text(),'AUS')]");
  }

  get AMI_Information_In_Pricing_Scenario(): Locator {
    return this.page.locator("//span[contains(text(),'AMI Information')]");
  }

  get Relock_Higher_Of_Button1(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Relock ( Higher- Of)\"]] | //button[contains(text(), \"Relock \")]");
  }

  get Relock_Button(): Locator {
    return this.page.locator("//button[contains(text(),'Relock')]");
  }

  get Lock_Period_In_Loan_Application(): Locator {
    return this.page.locator("//div[text()=\"Lock Period\"]/../div[2]");
  }

  get Loan_Number15(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"240509216\"]]");
  }

  get divTag12(): Locator {
    return this.page.locator("//body/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-pricing[1]/div[2]/lib-public-non-qm-pricing[1]/div[1]/lib-pricing-ui-view[1]/lib-pricing-h-ui-view[1]/div[1]/div[2]/search-tab-view-component[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[5]/div[1]");
  }

  get Details_1_990_30_Yr_DU_Fixed_346_Y50_AA9(): Locator {
    return this.page.locator("//div[@role=\"document\"]//div[contains(@class, 'modal-body')]");
  }

  get iTag(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"30 Yr DU Fixed - 346, Y50, AA9, 472 -H2\"]]/ancestor::td[contains(normalize-space(),\"30 Yr DU Fixed - 346, Y50, AA9, 472 -H2\")]/following-sibling::td[contains(normalize-space(),\"Export Pricing\")]//i[contains(@class, 'fa-file-export') and contains(@class, 'text-primary')]");
  }

  get New_Pricing_Results(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"30 Yr DU Fixed - 346, Y50, AA9, 472 -H2\"]]");
  }

  get _30_Yr_DU_Fixed_346_Y50_AA9_472_H21(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"30 Yr DU Fixed - 346, Y50, AA9, 472 -H2\"]]");
  }

  get Fields_Old_Pricing_Results_New_Pricing_Results_Rate1(): Locator {
    return this.page.locator("//label[text()[normalize-space() = \"Override Setting\"]]/ancestor::div[contains(@class, 'modal-body')]");
  }

  get Note_Rate(): Locator {
    return this.page.locator("//div[contains(text(),\"Note Rate\")]/..//div[2]");
  }

  get _97_382_points(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"97.382 points\"]]");
  }

  get Purchase_Price_on_scenario_Pricing(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"$340,000\"]]");
  }

  get Comment_Input2(): Locator {
    return this.page.locator("//div[@id='lock-status-select']/preceding-sibling::div//textarea[contains(@class, 'form-row')]");
  }

  get Confirm_Button7(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request Lock\"]]/following-sibling::div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Lock_Button1(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Lock\"]]");
  }

  get Heading_Locked(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Locked\"]]");
  }

  get Extension_Request_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Extension Request\"]]");
  }

  get selectedItems_Dropdown4(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Conventional\"]]");
  }

  get Funding_Fee_Financed_Type_Dropdown(): Locator {
    return this.page.locator("//select[@id='fundingFeeFinancedType']");
  }

  get totalLoanAmount_input(): Locator {
    return this.page.locator("//input[@id='totalLoanAmount']");
  }

  get Lock_Days_Dropdown4(): Locator {
    return this.page.locator("//select[@id='dayLocks']");
  }

  get divTag13(): Locator {
    return this.page.locator("//body/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-pricing[1]/div[2]/div[1]/div[1]/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[13]/div[1]");
  }

  get divTag14(): Locator {
    return this.page.locator("html[1]/body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-pricing[1]/div[2]/div[1]/div[1]/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[5]/div[1]");
  }

  get Loan_Number16(): Locator {
    return this.page.locator("//a[starts-with(@href, \"#/app/company/\") and contains(@href, \"ecd\") and contains(@href, \"a\") and contains(@href, \"aa\") and contains(@href, \"a\") and contains(@href, \"e\") and contains(@href, \"/ellieLoan/f\") and contains(@href, \"c\") and contains(@href, \"b-a\") and contains(@href, \"-\") and contains(@href, \"c\") and contains(@href, \"-\") and contains(@href, \"-\") and contains(@href, \"f\") and contains(@href, \"f\") and @aria-label=\"Loan Number\"]");
  }

  get Get_Pricing_Button3(): Locator {
    return this.page.locator("(//button[contains(@class, 'btn-primary')])[3]");
  }

  get ok_Button9(): Locator {
    return this.page.locator("//button[@role=\"button\" and contains(@class, 'btn-danger')]");
  }

  get divTag15(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]//div[contains(@class, 'currency') and contains(@class, 'hover-result')]");
  }

  get Origination_2_971_Points_x_240000_00_Loan_Amo(): Locator {
    return this.page.locator("//div[@role=\"document\"]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/th[1]");
  }

  get Loan_Number17(): Locator {
    return this.page.locator("(//td[@data-title=\"Loan Number\"])[1]//a[@aria-label=\"Loan Number\"]");
  }

  get Get_Pricing_Button4(): Locator {
    return this.page.locator("(//button[contains(@class, 'btn-primary') and contains(@class, 'font-weight-bold')])[3]");
  }

  get Heading_Total_Fee_Amount(): Locator {
    return this.page.locator("//div[@role=\"document\"]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/th[1]");
  }

  get Loan_File_is_locked_until_the_loan_is_updated(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Loan File is locked until the loan is updated\"]]");
  }

  get PPE_Password_Input(): Locator {
    return this.page.locator("//input[@type=\"password\"]");
  }

  get OVERRIDE_AND_CONTINUE_Button_In_Alert(): Locator {
    return this.page.locator("//button[normalize-space()=\"OVERRIDE & CONTINUE\"]");
  }

  get Lock_Extension_Request_Popup(): Locator {
    return this.page.locator("//label[contains(text(),\"Lock Extension Request\")]");
  }

  get COST_TO_BORROWER(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div");
  }

  get Requested_Days_5_days(): Locator {
    return this.page.locator("//li[text()[normalize-space() = \"Requested Days: 5 days\"]]");
  }

  get Username_Password_Login_B(): Locator {
    return this.page.locator("//a[@href=\"#/login/forgot\"]/ancestor::md-card-actions/preceding-sibling::md-card-content");
  }

  get Private_Pricing_AUT_Y7PC7L(): Locator {
    return this.page.locator("//span[@id='top-logo-lender-price']");
  }

  get Pricing_Information_Pricing_Scenario(): Locator {
    return this.page.locator("//div[@id='pricingMenuProperty']/ancestor::md-content[contains(@class, 'md-privatePricing-theme') and contains(@class, 'flex')]/preceding-sibling::md-sidenav[contains(@class, 'md-sidenav-left') and contains(@class, 'md-closed') and contains(@class, 'md-privatePricing-theme') and contains(@class, 'md-locked-open')]");
  }

  get Loan_Type_Dropdown(): Locator {
    return this.page.locator("//md-select[@aria-label=\"Loan Type: \n\t         \t\t\t\t Conventional loans\n\t          \t \t\t\"]//span[contains(@class, 'md-select-icon')]");
  }

  get USDA_Rural_FHA_loans_VA_loans_Conventional_loans_Bus(): Locator {
    return this.page.locator("//div[@id='menu']/following-sibling::div[contains(@class, 'md-select-menu-container')]//md-content[contains(@class, 'md-privatePricing-theme')]");
  }

  get VA_loans(): Locator {
    return this.page.locator("(//md-option[contains(@class, 'md-checkbox-enabled') and contains(@class, 'md-ink-ripple')])[39]//div[contains(@class, 'md-container')]");
  }

  get FHA_loans(): Locator {
    return this.page.locator("(//md-option[contains(@class, 'md-checkbox-enabled') and contains(@class, 'md-ink-ripple')])[38]");
  }

  get Conventional_loans(): Locator {
    return this.page.locator("(//md-option[contains(@class, 'md-checkbox-enabled') and contains(@class, 'md-ink-ripple')])[40]//div[contains(@class, 'md-container')]");
  }

  get FHA_loans1(): Locator {
    return this.page.locator("(//md-option[contains(@class, 'md-checkbox-enabled') and contains(@class, 'md-ink-ripple')])[38]//div[contains(@class, 'md-container')]");
  }

  get PPE_Rates(): Locator {
    return this.page.locator("//td[@name='RATE']");
  }

  get Ineligible_Tab(): Locator {
    return this.page.locator("//a[contains (text(), \"Ineligible\")]");
  }

  get Loan_Amount_in_Loan_Information(): Locator {
    return this.page.locator("//input[@placeholder=\"Loan Amount\"]");
  }

  get Active_Ineligible_Tab(): Locator {
    return this.page.locator("//a[@class=\"nav-link active\" and contains(text(),\"Ineligible\")]");
  }

  get aTag(): Locator {
    return this.page.locator("(//a[contains(@class, 'currency') and contains(@class, 'md-privatePricing-theme')])[1]");
  }

  get LTVFICOTerms15Years_td_tr(): Locator {
    return this.page.locator("//md-dialog[@role=\"dialog\"]/md-dialog-content[1]/md-tabs[1]/md-tabs-content-wrapper[1]/md-tab-content[2]/div[1]/table[1]/tbody[1]/tr[1]/td[2]");
  }

  get LPMIAdjustmentsLTV8_td_tr(): Locator {
    return this.page.locator("//md-dialog[@role=\"dialog\"]/md-dialog-content[1]/md-tabs[1]/md-tabs-content-wrapper[1]/md-tab-content[2]/div[1]/table[1]/tbody[1]/tr[2]/td[2]");
  }

  get FNMARatioLTVLTVFNMA_td_tr(): Locator {
    return this.page.locator("//md-dialog[@role=\"dialog\"]/md-dialog-content[1]/md-tabs[1]/md-tabs-content-wrapper[1]/md-tab-content[2]/div[1]/table[1]/tbody[2]/tr[1]/td[2]");
  }

  get FNMARatioLTV740L_td_tr(): Locator {
    return this.page.locator("//md-dialog[@role=\"dialog\"]/md-dialog-content[1]/md-tabs[1]/md-tabs-content-wrapper[1]/md-tab-content[2]/div[1]/table[1]/tbody[2]/tr[2]/td[2]");
  }

  get CompPlan_all_cell_data_with_null(): Locator {
    return this.page.locator("//div[@class=\"percent-complan\" and @data=\"null / null\"]");
  }

  get pointadjdetail_dialog(): Locator {
    return this.page.locator("//table[contains(normalize-space(),\"Type Base Price Total Adjustments Final Price Price Rate\")]/..");
  }

  get Price_td_tr(): Locator {
    return this.page.locator("(//td[contains(@class, 'currency')])[2]");
  }

  get No_Impounds_Under_Impound_Types(): Locator {
    return this.page.locator("//select/option[contains(.,\"No Impounds\")] ");
  }

  get Username_Password_Invalid_password(): Locator {
    return this.page.locator("//div[contains(@class, 'layout-padding')]/..");
  }

  get Copy_XPath_Button(): Locator {
    return this.page.locator("//body/ts-inspect[1]/div[1]/div[1]/span[2]/span[1]/*[local-name() = 'svg'][1]");
  }

  get _30_days_Dropdown(): Locator {
    return this.page.locator("//button[normalize-space()='30 days']");
  }

  get Pricing_Information(): Locator {
    return this.page.locator("//div[contains(@class, 'md-ripple-container')]/preceding-sibling::i[contains(@class, 'icon') and contains(@class, 'caret') and contains(@class, 'right') and contains(@class, 'lright')]");
  }

  get dateInput(): Locator {
    return this.page.locator("//input[@placeholder=\"Pricing Date\"]");
  }

  get July_2024_S_M_T_W_T_F_S_1_2_3_4_5_6_7_8_9_10_1(): Locator {
    return this.page.locator("//md-virtual-repeat-container[contains(@class, 'months') and contains(@class, 'md-virtual-repeat-container') and contains(@class, 'md-orient-vertical')]//div[contains(@class, 'md-virtual-repeat-scroller')]");
  }

  get spanTag(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"▲\"]]");
  }

  get spanTag1(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"▼\"]]");
  }

  get Link(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"September 2024\"]]/following-sibling::table[contains(normalize-space(),\"SMTWTFS 123456789101112131415161718192021222324252627282930\")]//a[text()[normalize-space() = \"3\"] and contains(@class, 'dtp-select-day') and contains(@class, 'md-privatePricing-theme')]");
  }

  get Relock_button_matt(): Locator {
    return this.page.locator("//button[contains(text(),\"Relock ( Higher- Of)\")]");
  }

  get Custom_UI_Enabled_CheckboxConfig_Setting(): Locator {
    return this.page.locator("//label[@for=\"quickPricersCustomUI\"]/..//div/input[@type=\"checkbox\"]");
  }

  get Custom_UIplains_va_config_setting(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"plains-va\"]]");
  }

  get Pricing_Enabled_Checkboxplainsva_config_setting(): Locator {
    return this.page.locator("//label[text()=\"Pricing enabled\"]/..//div/input[@type=\"checkbox\"]");
  }

  get Custom_ZipCode(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer44defaultZipCode\"]");
  }

  get Custom_ZipCode_textbox(): Locator {
    return this.page.locator("//label[@for=\"ppQuickPricer59defaultZipCode\"]/..//input");
  }

  get Allow_Pricing_Comparison_Checkbox1(): Locator {
    return this.page.locator("(//div[@class=\"inner-toggle\"])[4]//div[@class=\"inner-group\"]//div[contains(@class, \"custom-checkbox\")]/label[@for=\"ppQuickPricerallowPricingComparison\"]");
  }

  get Show_Compensation_Typedefault(): Locator {
    return this.page.locator("//input[@id=\"showCompensationTypeQuickPricer\"]");
  }

  get Lock_Daysdefault(): Locator {
    return this.page.locator("//input[@id=\"keyFieldQuickPricerlockDays\"]");
  }

  get Show_Rate_Adjustment_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1rateAdjustment\"]");
  }

  get Show_Pricing_Adjustment_Checkboxcustom_ui(): Locator {
    return this.page.locator("//label[@for=\"keyColQuickPricer1adjustment\"]/..//input[@type=\"checkbox\"]");
  }

  get Show_Adjustment_Details_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1adjustmentDetails\"]");
  }

  get Show_Apr_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1apr\"]");
  }

  get Show_Comp_Plan_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1compPlan\"]");
  }

  get Show_Lender_Borrower_Paid_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1lenderBorrowerPaid\"]");
  }

  get Show_lender_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1lender\"]");
  }

  get Show_MI_CheckboxCustom_UI(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer59mi\"]");
  }

  get Show_Payment_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1payment\"]");
  }

  get Show_Payment_Schedule_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1paymentSchedule\"]");
  }

  get Show_Price_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1price\"]");
  }

  get Show_Program_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1program\"]");
  }

  get Show_Rate_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1rate\"]");
  }

  get Show_Rules_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1rules\"]");
  }

  get Show_Lender_Fee_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer1lenderFee\"]");
  }

  get Show_Lock_Period_CheckboxCustom_UI(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer59lockPeriod\"]");
  }

  get Hide_action_column_checkboxcustom_ui(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricer59hideActionColumn\"]");
  }

  get Default_To_AutoSearch1(): Locator {
    return this.page.locator("(//label[normalize-space()='Default To Auto-Search'])[1]");
  }

  get Default_To_AutoSearch2(): Locator {
    return this.page.locator("(//label[normalize-space(text())='Default To Auto-Search']/preceding-sibling::input[@type='checkbox'])[1]\n");
  }

  get By_logging_in_to_your_account_you_agree_to_our_term(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"By logging in to your account, you agree to our\"]]");
  }

  get Pricer_Options(): Locator {
    return this.page.locator("//label[@for=\"pricer-optionsQuickPricer\"]");
  }

  get AUS_checkbox_Under_search_for_Quick_pricer_default_config(): Locator {
    return this.page.locator("//input[contains(@id,\"ausQuickPricer\")]\n");
  }

  get Selected_Pricer_DropdownSearch_Fields(): Locator {
    return this.page.locator("//div//select[@id=\"selectredPricer\"]");
  }

  get Selected_Pricer_Dropdown_OptionSearch_fields(): Locator {
    return this.page.locator("//div//select[@placeholder=\"Select Pricer\"]/option[normalize-space(text())=\"AUTOMATION DONT TOUCH\"]\n");
  }

  get _15_Years_Fixed_Conventional_Purchase(): Locator {
    return this.page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]");
  }

  get _20_Years_Fixed_Conventional_Purchase(): Locator {
    return this.page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"20\")]");
  }

  get Term_Years_For_Custom_UI(): Locator {
    return this.page.locator("//label[@aria-label=\"Term (Years)\"]");
  }

  get Term_year_input_Field_for_custom_ui(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"30 Years\"]]");
  }

  get Term_Year_Dropdown_for_custom_ui(): Locator {
    return this.page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button");
  }

  get _30_Years_In_Term_Years_Dropdown(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"30 Years\"]]/i[contains(@class, \"text-success\")]");
  }

  get _20_Years_in_term_years_Dropdown(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"20 Years\"]]/i[contains(@class, \"text-success\")]");
  }

  get _15_Years_In_Term_Years_Dropdown(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"15 Years\"]]/i[contains(@class, \"text-success\")]");
  }

  get _20_years(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"20 Years\"]]");
  }

  get _15_years(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"15 Years\"]]");
  }

  get _30_years(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"30 Years\"]]");
  }

  get Set_Date_Button1(): Locator {
    return this.page.locator("//button[normalize-space(text())=\"Set Date\"]");
  }

  get Guaranteed_Underwriting_Service_Checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"ausGUSQuickPricer\"]\n");
  }

  get Manual_Underwriting_checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"ausMUWQuickPricer\"]");
  }

  get LP_checkbox_default(): Locator {
    return this.page.locator("//input[@id=\"ausLPQuickPricer\"]");
  }

  get DU_checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"ausDUQuickPricer\"]");
  }

  get Show_Floor_Rate_checkbox(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerfloorRate\"]");
  }

  get Show_Index_checkbox(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerindex\"");
  }

  get Show_Arm_Margin_checkbox(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerarmMargin\"]");
  }

  get Show_Points_Financed_checkbox(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerpointsFinanced\"]");
  }

  get Show_Impound_checkbox(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerimpound\"]");
  }

  get Show_Ysp_checkbox(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerysp\"]");
  }

  get Show_Index_checkbox1(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerindex\"]");
  }

  get Hide_action_column_checkbox1(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerhideActionColumn\"]");
  }

  get Show_Dti_checkbox1(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerdti\"]");
  }

  get Floors_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Floor\"]]");
  }

  get Index_in_results_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Index\"]]");
  }

  get Margin_in_result_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Margin\"]]");
  }

  get Points_Financed_in_result_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Points Financed\"]]");
  }

  get Impounds_in_result_columns(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Impounds\"]]");
  }

  get PMI_Type_Input_FieldDefault(): Locator {
    return this.page.locator("//select[@id='PMIType']");
  }

  get Select_MI_Company_Input_FieldDefault(): Locator {
    return this.page.locator("//select[@id='miCompany']");
  }

  get PMI_Type_Input_FieldCustom_UI(): Locator {
    return this.page.locator("//select[@aria-label=\"PMI Type\"]");
  }

  get MI_Company_Input_FieldCustom_UI(): Locator {
    return this.page.locator("//select[@aria-label=\"MI Company\"]");
  }

  get Show_Comp_Plan_in_Dollars_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricercompPlanInDollars\"]");
  }

  get Show_Price_In_Dollars_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerpriceInDollars\"]");
  }

  get First_Row_Payment_Data_in_eligible_tab(): Locator {
    return this.page.locator("(//table//th/a[normalize-space(.)=\"Rate\"]//following::td[@data-label=\"COLUMN_NAME_ENUM.MONTHLY_PAYMENT\"]/div)[1]");
  }

  get Payment_Schedule_popup_in_Payment(): Locator {
    return this.page.locator("//div[@class=\"modal-body\"]/h5[contains(text(), \"Payment Schedule\")]");
  }

  get Amortization_Type_in_serach_field(): Locator {
    return this.page.locator("//label[text()[normalize-space() = \"Amortization Type\"]]");
  }

  get ARM_dropdown_option_in_amortization_type(): Locator {
    return this.page.locator("//li[contains(@class,\"amortization-type-arm\")]//*[contains(text(),\"ARM\")]");
  }

  get Close_in_Payment_Schedule_popup(): Locator {
    return this.page.locator("(//button[contains(@class, \"modal-close\")]//span[@aria-label=\"Close\" and @data-dismiss=\"modal\"])[5]");
  }

  get No_MI_checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"NoneQuickPricer\"]");
  }

  get Lender_Paid_MI_Checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"LPMIQuickPricer\"]");
  }

  get Borrower_Paid_MI_checkboxdefault(): Locator {
    return this.page.locator("//input[@id=\"BPMIQuickPricer\"]");
  }

  get No_MI_Dropdown_optionquick_pricer(): Locator {
    return this.page.locator("//select[@id=\"PMIType\"]/option[normalize-space(text())=\"No MI\"]");
  }

  get Lender_Paid_MI_optionquick_pricer(): Locator {
    return this.page.locator("//select[@id=\"PMIType\"]/option[normalize-space(text())=\"Lender Paid MI\"]");
  }

  get Borrower_Paid_MI_optionquick_pricer(): Locator {
    return this.page.locator("//select[@id=\"PMIType\"]/option[normalize-space(text())=\"Borrower Paid MI\"]");
  }

  get Show_Compensation_Type_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"showCompensationTypeQuickPricer\"]");
  }

  get Hide_Action_Column1(): Locator {
    return this.page.locator("//label[@for=\"keyColQuickPricerhideActionColumn\"]");
  }

  get PMI_Type_DefaultQuick_Pricer(): Locator {
    return this.page.locator("//label[@for=\"PMIType\"]");
  }

  get Loan_Type_Label_Default_UI(): Locator {
    return this.page.locator("//label[@aria-label=\"Loan Type\"]");
  }

  get Heading_Pipeline(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Pipeline\"]]");
  }

  get Back_to_loan_view(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"Back to loan view\"]]");
  }

  get Lock_Information(): Locator {
    return this.page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]");
  }

  get Price_Button2(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Price\"]]");
  }

  get Get_Pricing_Button_For_Loan(): Locator {
    return this.page.locator("(//div[contains(@class, \"loan-action\")]/button[text()=\" Get Pricing \"])[2]");
  }

  get Subordinate_Financingpipeline_custom_ui(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"Subordinate Financing\"]]");
  }

  get _1st_Lien_with_Subordinate_2nd_Checkboxpipeline_custom_ui(): Locator {
    return this.page.locator("//input[contains(@aria-label,\"1st Lien with Subordinate 2nd\") and @type=\"checkbox\"]");
  }

  get Subordinate_Mortgage_Input(): Locator {
    return this.page.locator("//input[contains(@placeholder,\"Subordinate\")]");
  }

  get Loan_Amount_Input1(): Locator {
    return this.page.locator("//input[@placeholder=\"Loan Amount\"]");
  }

  get Purchase_Price_Input1(): Locator {
    return this.page.locator("//input[@placeholder=\"Purchase Price\"]");
  }

  get CLTV_input_Field1(): Locator {
    return this.page.locator("//input[@placeholder=\"CLTV\"]");
  }

  get Refinance_In_LoanPurpose(): Locator {
    return this.page.locator("//option[text()=\" Refinance \"]");
  }

  get _30_Years_Fixed_Conventional_Refinance(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"30 Years Fixed Conventional Refinance\"]]");
  }

  get AUS_Type_In_Custom_UI(): Locator {
    return this.page.locator("//label[@aria-label=\"AUS Type\"]");
  }

  get AUS_Type_Textbox_In_Custom_UI(): Locator {
    return this.page.locator("(//button[contains(@class, \"bsMulti\")])[5]");
  }

  get NonConforming_Dropdown_Active_Custom_ui(): Locator {
    return this.page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"Non-Conforming\")]");
  }

  get GUS_Dropdown_ActiveCustom_UI(): Locator {
    return this.page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"GUS\")]");
  }

  get Manual_Dropdown_ActiveCustom_UI(): Locator {
    return this.page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"Manual\")]");
  }

  get LP_Dropdown_ActiveCustom_UI(): Locator {
    return this.page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"LP\")]");
  }

  get DU_Dropdown_ActiveCustom_UI(): Locator {
    return this.page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"DU\")]");
  }

  get Select_15_Days_In_Dropdown(): Locator {
    return this.page.locator("//li[contains(@class,'lock-days-15-days') and contains(normalize-space(.),'15 days')]");
  }

  get Select_30_days_in_dropdown(): Locator {
    return this.page.locator("//li[contains(@class,'active') and contains(@class,'lock-days') and contains(normalize-space(.),'30 days')]");
  }

  get Select_45_days_in_dropdown(): Locator {
    return this.page.locator("//li[contains(@class,'active') and contains(@class,'lock-days') and contains(normalize-space(.),'45 days')]");
  }

  get Select_60_days_in_dropdown(): Locator {
    return this.page.locator("//li[contains(@class,'active') and contains(@class,'lock-days') and contains(normalize-space(.),'60 days')]");
  }

  get Select_30_days_From_Dropdown(): Locator {
    return this.page.locator("//li[contains(@class,'lock-days-30-days') and contains(normalize-space(.),'30 days')]");
  }

  get Select_45_Days_From_Dropdown(): Locator {
    return this.page.locator("//li[contains(@class,'lock-days-45-days') and contains(normalize-space(.),'45 days')]");
  }

  get Select_60_days_from_dropdown(): Locator {
    return this.page.locator("//li[contains(@class,'lock-days-60-days') and contains(normalize-space(.),'60 days')]");
  }

  get Fixed_Dropdown_CustomUI(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Fixed\"]]");
  }

  get Results_row_for_Term_years(): Locator {
    return this.page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"Years Fixed Conventional Purchase\")]");
  }

  get _10_years(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"10 Years\"]]");
  }

  get _25_years(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"25 Years\"]]");
  }

  get _10_years_Fixed_Conventional_Purchase(): Locator {
    return this.page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"10\")]");
  }

  get _25_Years_Fixed_Conventional_Purchase(): Locator {
    return this.page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"25\")]");
  }

  get Price_Button_In_Lock_Information(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Price\"]]");
  }

  get _45_years(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"45 Years\"]]");
  }

  get _45_Years_in_term_years_Dropdown(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"45 Years\"]]/i[contains(@class, \"text-success\")]");
  }

  get _45_Years_Fixed_Conventional_Purchase(): Locator {
    return this.page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"45\")]");
  }

  get Results_Columns_In_Configuration_for_loan_pricer(): Locator {
    return this.page.locator("//label[@for=\"results-columnsMain\"]");
  }

  get Show_Rate_Adjustment_Checkboxloan_pricer(): Locator {
    return this.page.locator("//input[@id=\"keyColMainrateAdjustment\"]");
  }

  get Show_Pricing_Adjustment_Checkboxloan_pricer(): Locator {
    return this.page.locator("//input[@id=\"keyColMainadjustment\"]");
  }

  get Loan_Types_Label_in_Loan_Informationloan_pricer(): Locator {
    return this.page.locator("//label[@aria-label=\"Loan Type\"]");
  }

  get Show_Cost_To_Borrower_Checkboxloan_pricer(): Locator {
    return this.page.locator("//input[@id=\"keyColMaincostToBorrower\"]");
  }

  get Origination_In_Cost_To_Borrower_Popup(): Locator {
    return this.page.locator("(//tr[@class=\"currency\"]/th)[1]");
  }

  get Comp_Plan_Popup(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"Comp. Plan\"]]");
  }

  get Show_MI_CheckboxLoan_Pricer(): Locator {
    return this.page.locator("//input[@id=\"keyColMainmi\"]");
  }

  get CURRENT_LOCK_Section_in_loan_Application(): Locator {
    return this.page.locator("//h6[text()[normalize-space() = \"CURRENT LOCK\"]]");
  }

  get Reprice_Button_in_Lock_information(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Reprice\"]]");
  }

  get Cost_to_Borrower_columnloan_pricer(): Locator {
    return this.page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]");
  }

  get Fees_and_Costscost_to_borrower_popup_screen(): Locator {
    return this.page.locator("//h5[text()[normalize-space() = \"Fees and Costs\"]]");
  }

  get UFMIP_Financed_Dropdown(): Locator {
    return this.page.locator("//label[contains(text(), \"UFMIP Financed\")]/..//div/select[@aria-label=\"UFMIP Financed?\"]");
  }

  get Best_X_Pricing_In_Result_Filter(): Locator {
    return this.page.locator("//label[@for=\"best-price\"]");
  }

  get Default_ZipCode_Input_Automation_Dont_touch(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer14defaultZipCode\"]");
  }

  get Min_Input_Field_In_Result_filter(): Locator {
    return this.page.locator("//input[@id='min-rate']");
  }

  get Max_Input_Field_in_result_filter(): Locator {
    return this.page.locator("//input[@id='max-rate']");
  }

  get Fixed_Dropdown(): Locator {
    return this.page.locator("//ul[@role=\"menu\"]/li[1]");
  }

  get First_username_from_user_list(): Locator {
    return this.page.locator("(//ul[@class=\"user-list\"]/li)[1]");
  }

  get First_Loan_OfficerEXTPipeline(): Locator {
    return this.page.locator("(//div[text()=\"Loan Officer\"]/ancestor::th/following::td[@data-title=\"Loan Officer\"]/div)[1]");
  }

  get All_Loan_OfficersEXTPipeline(): Locator {
    return this.page.locator("//div[text()=\"Loan Officer\"]/ancestor::th/following::td[@data-title=\"Loan Officer\"]/div");
  }

  get Zip_Code_Input_Field(): Locator {
    return this.page.locator("//input[@placeholder=\"Zip Code\"]");
  }

  get Lock_days_Dropdown(): Locator {
    return this.page.locator("//div[@id='main-div']/div[1]/div[2]/div[1]/fieldset[1]/div[2]/div[4]/div[1]/div[3]/div[1]/lib-pricing-field-item-view[1]/div[1]/div[1]/lib-bs2-multi-select[1]/div[1]/div[1]/button[1]");
  }

  get Default_Configuration(): Locator {
    return this.page.locator("//b[text()[normalize-space() = \"Default Configuration\"]]");
  }

  get Custom_UI(): Locator {
    return this.page.locator("//b[text()[normalize-space() = \"Custom UI\"]]");
  }

  get Price_Green_Toggle(): Locator {
    return this.page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/thead[1]/tr[1]/th[3]/a[2]/i[1]");
  }

  get LOS_Lock_StatusEXTPipeline_with_count(): Locator {
    return this.page.locator("(//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ])[$|count|]");
  }

  get Loan_Number_for_Unlocked_Lock_Status_with_count(): Locator {
    return this.page.locator("(//tr[ td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]  and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"])[$|count|]\n");
  }

  get LOS_Lock_Status_UnlockedManual_LD(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]");
  }

  get First_Loan_Number_For_Unlocked_Status(): Locator {
    return this.page.locator("//tr[ td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]  and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Export_Pricing_Popup_Window(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Export Pricing\"]]");
  }

  get Loan_Program_In_Export_Pricing(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Loan Program\"]/following-sibling::th[@data-th=\"New Pricing Results\"]");
  }

  get Rate_In_Export_Pricing(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Rate\"]/following-sibling::th[@data-th=\"New Pricing Results\"]");
  }

  get Impound_In_Export_Pricing(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Impound\"]/following-sibling::th[@data-th=\"New Pricing Results\"]");
  }

  get Days_Lock_In_Export_Pricing(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Days Lock\"]/following-sibling::th[@data-th=\"New Pricing Results\"]");
  }

  get Admin_Fee_Waiver_In_Export_Pricing(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Admin Fee Waiver\"]/following-sibling::th[@data-th=\"New Pricing Results\"]");
  }

  get Renovation_Cost_In_Export_Pricing(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Renovation Cost\"]/following-sibling::th[@data-th=\"New Pricing Results\"]");
  }

  get Export_Pricing_Success_Popup(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Export pricing is successful\"]]");
  }

  get Ok_Button_In_Success_Pricing_Popup_Window(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Ok\"]]");
  }

  get First_Lock_Period_DataTable(): Locator {
    return this.page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div)[1]");
  }

  get Loan_Scenario_Window(): Locator {
    return this.page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]");
  }

  get Note_Rate_In_Loan_Scenario(): Locator {
    return this.page.locator("(//span[text()=\"Note Rate\"]/following::div)[1]");
  }

  get Loan_Type_In_Loan_Scenario(): Locator {
    return this.page.locator("(//span[text()=\"Loan Type\"]/following::div)[1]");
  }

  get Fico_Score_In_Loan_Scenario(): Locator {
    return this.page.locator("(//span[text()=\"FICO Score\"]/following::div)[1]");
  }

  get City_State_And_Zipcode_In_Loan_Scenario(): Locator {
    return this.page.locator("(//span[text()=\"City, State and Zip\"]/following::div)[1]");
  }

  get Lock_Period_In_Loan_Scenario(): Locator {
    return this.page.locator("(//span[text()=\"Lock Period\"]/following::div)[1]");
  }

  get Export_Pricing_On_Pricing_Data2(): Locator {
    return this.page.locator("(//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"])[2]");
  }

  get second_Lock_Period_DataTable(): Locator {
    return this.page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div)[2]");
  }

  get Rate_Data_In_Second_Row(): Locator {
    return this.page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[2]");
  }

  get Mortgage_Type_In_Export_Pricing(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Mortgage Type\"]/following-sibling::th[@data-th=\"New Pricing Results\"]");
  }

  get Credit_Score_In_Export_PricingOld_Pricing_Results(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Credit Score\"]/following-sibling::th[@data-th=\"Old Pricing Results\"]");
  }

  get Rate_In_Export_PricingOld_pricing_Results(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Rate\"]/following-sibling::th[@data-th=\"Old Pricing Results\"]");
  }

  get Days_Lock_In_PricingOld_Pricing_Results(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Days Lock\"]/following-sibling::th[@data-th=\"Old Pricing Results\"]");
  }

  get Mortgage_Type_In_PricingOld_Pricing_Results(): Locator {
    return this.page.locator("//th[normalize-space(.)=\"Mortgage Type\"]/following-sibling::th[@data-th=\"Old Pricing Results\"]");
  }

  get Loan_Program_in_Loan_scenario(): Locator {
    return this.page.locator("(//span[text()=\"Loan Program\"]/following::div)[1]");
  }

  get LoanType_Dropdown(): Locator {
    return this.page.locator("//label[@aria-label=\"Loan Type\"]/..//button");
  }

  get Only_LO_LoanOfficer2EXT_Pipeline(): Locator {
    return this.page.locator("//tr //td[@data-title=\"Loan Officer\"] /div[normalize-space()=\"@|Loan Officer User|\"]");
  }

  get Loan_Number_For_Unlocked_Priced_Status_ML(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Priced\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"LoanOfficer2 TestSigma\"]]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Fico_score_In_Priced(): Locator {
    return this.page.locator("(//span[text()=\"FICO Score\"]/ancestor::div[2]//div)[2]");
  }

  get Lock_Expiration_DateScenario(): Locator {
    return this.page.locator("(//div[text()[normalize-space() = \"Lock Expiration Date\"]]/..//div)[2]");
  }

  get Price_in_Concession_Type(): Locator {
    return this.page.locator("//input[@placeholder=\"Concession in points\"]");
  }

  get Type_your_Comment_Input_in_Request_Loan_Popup(): Locator {
    return this.page.locator("//div[@role=\"document\"]/div[1]/app-dlg-lock-special-action[1]/div[1]/div[1]/app-lock-price-exception[1]/div[3]/div[2]/div[1]/div[1]/div[1]/textarea[1]");
  }

  get Confirm_Button_on_Concession_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Comment_displayed_on_Requesting_For_Concession_on_Price(): Locator {
    return this.page.locator("(//li/div[text()=\" Comment : \"]/..//div)[2]");
  }

  get Included_in_Price_Cap(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Included in Price Cap\"]]");
  }

  get UserNameAfterCreatingExtension(): Locator {
    return this.page.locator("//div[@id='lock-information']/div[1]/div[2]/div[1]/app-lock-panel[1]/div[1]/div[1]/div[1]/li[1]/div[1]/div[1]/div[1]/div[1]");
  }

  get APR_Value_In_Loan_Scenario(): Locator {
    return this.page.locator("//span[text()=\"APR\"]/../..//div");
  }

  get Show_Price_in_Dollars_Checkbox_in_Default(): Locator {
    return this.page.locator("//input[@id=\"keyColQuickPricerpriceInDollars\"]");
  }

  get Enable_Best_X_Filter_Custom_UI(): Locator {
    return this.page.locator("//input[@id='ppQuickPricer59best-price']");
  }

  get Retain_Applied_Filters_Custom_UI(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59retainAppliedFilters\"]");
  }

  get Close_in_result_filtercustom_ui(): Locator {
    return this.page.locator("//div/i[contains(@class,\"times-circle\")]");
  }

  get Ok_Button_Pricing(): Locator {
    return this.page.locator("//span[contains(@class, 'dlp-icon') and contains(@class, 'fa-check')]");
  }

  get Request_Price_Concession_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request Price Concession\"]]");
  }

  get Add_Adhoc_Adjustments_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Add Ad-hoc Adjustments\"]]");
  }

  get Adhoc_Adjustment_Type_Dropdown(): Locator {
    return this.page.locator("//select[@aria-label=\"Ad-hoc Exception Type\"]");
  }

  get Price_value_Adhoc(): Locator {
    return this.page.locator("//input[@placeholder=\"Price\"]");
  }

  get Description_Input_Adhoc(): Locator {
    return this.page.locator("//input[@placeholder=\"Type your description...\"]");
  }

  get Apply_to_Priced_Rate_Checkbox(): Locator {
    return this.page.locator("//div[@role=\"document\"]//input[@type=\"checkbox\"]");
  }

  get Save_Button_Adhoc(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Save\"]]");
  }

  get Adhoc_Relock_Fee_Option(): Locator {
    return this.page.locator("//option[contains(text(),\" Ad-hoc Relock Fee \")]");
  }

  get Loan_Status(): Locator {
    return this.page.locator("//td[@data-title=\"LP Lock Status\"]");
  }

  get Test_Sigma_Lock_Requested_Logs(): Locator {
    return this.page.locator("//span[text()=\"test sigma\"]/..//span[text()=\"Lock Requested\"]");
  }

  get Lock_Request_Comment_Logs(): Locator {
    return this.page.locator("//div[contains(text(), \"Rate Sheet Date\")]");
  }

  get Pricing_Adjustment_Loan_Pricing(): Locator {
    return this.page.locator("//h6[text()[normalize-space() = \"Pricing Adjustment\"]]");
  }

  get Loan_Number_For_Lock_RequestedPipeline(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Unlocked\"]     and     td[@data-title=\"LP Lock Status\"]/div[normalize-space(.)=\"Priced\"]     and     td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Test_Sigma_Request_DeniedPreLock(): Locator {
    return this.page.locator("//span[text()=\"test sigma\"]/..//span[text()=\"Request Denied (Pre-Lock)\"]");
  }

  get Loan_Number_For_Lock_RequestedPipeline_Manual_LD(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Lock Requested\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Lock Requested\"] /ancestor::tr //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get LP_Lock_Status_Request_Denied_PreLock(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Unlocked\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Request Denied (Pre-Lock)\"]");
  }

  get LOS_Lock_Status_Unlocked_Priced_StatusAL(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Priced\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"Officer User\"]]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get LOS_Lock_status_Expired_Lock_ExpiredAL(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Expired\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"Officer User\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Lock Expired\"]");
  }

  get Loan_Number_For_Expired_Lock_ExpiredAL(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Expired\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Lock Expired\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"Officer User\"]]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get LOS_Lock_Status_Locked_Locked_AL(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"Officer User\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked\"]\n");
  }

  get Loan_Number_for_Locked_Locked_StatusAL(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Locked\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Locked\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"Officer User\"]]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get LOS_LP_Lock_Status_Lock_CancelledAL(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Lock Cancelled\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"Officer User\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Lock Cancelled\"]");
  }

  get Loan_Number_For_Lock_Cancelled_StatusAL(): Locator {
    return this.page.locator(" //tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Lock Cancelled\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Lock Cancelled\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"Officer User\"]]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Lock_Expiration_Date2Scenario(): Locator {
    return this.page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div");
  }

  get LOS_LP_Lock_Status_LockedPipeline(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked\"]");
  }

  get Loan_Number_For_Unlocked_LOS_StatusManual_LD(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get LOS_Lock_Status_Locked_LockedManual_LD(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked\"]");
  }

  get Loan_Number_For_Locked_LockedML(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked\"] /ancestor::tr //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Add_Adhoc_adjustments_Popup(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Add Ad-hoc adjustments\"]]");
  }

  get Save_Button_in_Adhoc_Adjustment(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Save\"]]");
  }

  get Description_Input_ad_hoc(): Locator {
    return this.page.locator("//input[@placeholder=\"Type your description...\"]");
  }

  get Description_in_pricing_adjustment_table(): Locator {
    return this.page.locator("//div[.//th[normalize-space()=\"Description\"]]   //table[@id=\"pricing-table\"]/tbody/tr   /th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]   /../td/div[number(normalize-space())=\"$|EnteredPriceValue|\"]");
  }

  get Adjustments_in_pricing_adjustment_table(): Locator {
    return this.page.locator("//tr[th[contains(normalize-space(),'$|AddedDescriptionInPricingAdjustmentTable|')]]//td/div[contains(., '$|EnteredPriceValue|')]\n");
  }

  get Base_PriceAdjustment_Summary(): Locator {
    return this.page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Base']/preceding-sibling::th)]");
  }

  get Adj_PriceAdjustment_Summary(): Locator {
    return this.page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Adj.']/preceding-sibling::th)]");
  }

  get Final_PriceAdjustment_Summary(): Locator {
    return this.page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Final']/preceding-sibling::th)]");
  }

  get Net_PriceAdjustment_Summary(): Locator {
    return this.page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Net']/preceding-sibling::th)]");
  }

  get Price_in_Loan_Scenario_Page(): Locator {
    return this.page.locator("(//span[text()=\"Price\"]/following::div)[1]");
  }

  get Locked_Rate_Price_Value(): Locator {
    return this.page.locator("//a[normalize-space(.)=\"Price\"]/following::div[contains(@class,'locked-rate') and contains(@data,\"$|NewNetPrice|\")]");
  }

  get Total_in_Pricing_Adjustment(): Locator {
    return this.page.locator("//table[@id='pricing-table']/tfoot/tr/td[last()]/div");
  }

  get _8_000(): Locator {
    return this.page.locator("//div[@id='main-div']/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/app-lock-info-text-view[1]/div[1]/div[1]");
  }

  get Rate_Column_data_Similar_to_Note_Rate(): Locator {
    return this.page.locator("//div[contains(text(), \"$|NoteRate|\")]\n");
  }

  get See_More_Rows_in_Price_Column(): Locator {
    return this.page.locator("//div[contains(text(), \"$|NoteRate|\")]/..//div[contains(@class,\"see-more-row\")]\n");
  }

  get Previously_Locked_Price(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]//div[contains(@class,\"locked-rate\") and @data=\"$|NewNetPrice|\"]");
  }

  get Price_Adj_For_Locked_Rate(): Locator {
    return this.page.locator("(\n  //a[normalize-space()=\"Rate\"]\n    /ancestor::table[1]\n  //tr[.//div[contains(@class,\"locked-rate\") and @data=\"$|NewNetPrice|\"]] \n  //td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]\n  //div[normalize-space(@data)=\"$|TotalPricingAdjustmentValue|\"] \n)[1]");
  }

  get Description_in_Adjustments_Popup(): Locator {
    return this.page.locator("//h6[.=\"Pricing Adjustment\"]/following::table[1]//th[normalize-space(.)=\"$|AddedDescriptionData\n|\"]");
  }

  get Adjustments_in_Adjustment_Popup(): Locator {
    return this.page.locator("//h6[.=\"Pricing Adjustment\"]/following::table[1]//th[normalize-space(.)=\"$|AddedDescriptionData\n|\"]/../td/div[@class=\"percent\" and @data=\"$|EnteredPriceValue|\"]");
  }

  get Description_In_Pricing_adjustment_table1(): Locator {
    return this.page.locator("//div[.//th[normalize-space()=\"Description\"]]   //table[@id=\"pricing-table\"]/tbody/tr   /th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]");
  }

  get Price_In_Loan_Scenario(): Locator {
    return this.page.locator("(//span[text()=\"Price\"]/following::div)[1]");
  }

  get NextNote_Rate_After_Given_NoteRate(): Locator {
    return this.page.locator("(   //a[normalize-space()=\"Rate\"]/ancestor::table[1]   //tr[.//div[contains(@class,\"locked-rate\") and @data=\"$|NoteRate|\"]]/following-sibling::tr   //td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]//div )[1] | (   //a[normalize-space()=\"Rate\"]/ancestor::table[1]   //tr[1]//td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]//div )[1]");
  }

  get See_More_in_Price_Column_for_Another_Noterate(): Locator {
    return this.page.locator("//div[contains(text(), \"$|NoteRate|\")]   /ancestor::tr   /following-sibling::tr[1]   //div[contains(@class,'see-more-row')] | (//div[contains(@class,'see-more-row')])[1]   [not(//div[contains(text(), \"$|NoteRate|\")]/ancestor::tr/following-sibling::tr)]");
  }

  get Advanced_Pricing_Settings_in_Loan_Pricer(): Locator {
    return this.page.locator("//label[@for=\"advanced-pricing-settingsMain\"]");
  }

  get Hide_Adhoc_Adjustments_in_Loan_Pricer(): Locator {
    return this.page.locator("//app-tab-component[@title=\"Loan Pricer\"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[21]/div[1]/label[1]");
  }

  get Adhoc_CPA_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"pp0ADHOCCPA\"]");
  }

  get Adhoc_Relock_Fee_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"pp1ADHOCRelockFee\"]");
  }

  get Adhoc_Renegotiation_Fee_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"pp2ADHOCRenegotiationFee\"]");
  }

  get Adhoc_holdback_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"pp3ADHOCHoldback\"]");
  }

  get Adhoc_Rate_Adj_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"pp4ADHOCRateAdj\"]");
  }

  get Adhoc_Rate_Margin_Adj_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"pp5ADHOCRateMarginAdj\"]");
  }

  get Adhoc_LLPA_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"pp6ADHOCLLPA\"]");
  }

  get Adhoc_MSR_SRP_Checkbox(): Locator {
    return this.page.locator("//input[@id=\"pp7ADHOCSRP\"]");
  }

  get Adhoc_CPA_in_Dropdown(): Locator {
    return this.page.locator("//option[normalize-space(.)=\"Ad-hoc CPA\"]");
  }

  get Adhoc_Exception_Type_in_Dropdown(): Locator {
    return this.page.locator("//option[normalize-space(.)=\"Ad-hoc Exception Type\"]\n");
  }

  get Renegotiation_Fee_Type_in_Dropdown(): Locator {
    return this.page.locator("//option[normalize-space(.)=\"Ad-hoc Renegotiation Fee\"]");
  }

  get Hold_Back_Type_in_Dropdown(): Locator {
    return this.page.locator("//option[normalize-space(.)=\"Ad-hoc holdback\"]\n");
  }

  get Rate_Adj_Type_in_Dropdown(): Locator {
    return this.page.locator("//option[normalize-space(.)=\"Ad-hoc Rate Adj\"]");
  }

  get Rate_Margin_Type_in_Dropdown(): Locator {
    return this.page.locator("//option[normalize-space(.)=\"Ad-hoc Rate Margin Adj\"]");
  }

  get LLPA_Type_in_Dropdown(): Locator {
    return this.page.locator("//option[normalize-space(.)=\"Ad-hoc LLPA\"]");
  }

  get MSR_Type_in_Dropdown(): Locator {
    return this.page.locator("//option[normalize-space(.)=\"Ad-hoc MSR (SRP)\"]");
  }

  get All_Different_Loan_Officer_NamesEXT_Pipeline(): Locator {
    return this.page.locator("//tr//td[@data-title=\"Loan Officer\"]/div[     contains(normalize-space(), \"LoanOfficer2\") or contains(normalize-space(), \"cfam\") or contains(normalize-space(), \"German LO\") ]");
  }

  get Total_Row_Count(): Locator {
    return this.page.locator("//tbody/tr");
  }

  get Adhoc_Relock_Fee_CheckBoxx(): Locator {
    return this.page.locator("//input[@id=\"pp1ADHOCRelockFee\"]");
  }

  get Edit_Button_For_Adhoc_Adjustment(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Edit\"]]");
  }

  get Delete_Button_In_Adhoc_Adjustment(): Locator {
    return this.page.locator("//table[@id='pricing-table']//button[contains(@class,'text-danger')]");
  }

  get Input_For_Edit_In_Add_Adhoc_Adjustment(): Locator {
    return this.page.locator("//table[@id='pricing-table']//button[contains(@class,'text-danger')]/..//input");
  }

  get Apply_Button_in_Edit_Adhoc_Adjustment(): Locator {
    return this.page.locator("//div[@id='loan-pricing']//button[text()[normalize-space() = \"Apply\"]]");
  }

  get Successfully_Edited_Popup(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Successfully Edited!\"]]");
  }

  get Ok_Button_In_Edit_Add_Adhoc_Adjustment(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Ok\"]]");
  }

  get Undo_Button_After_Delete_In_Add_Adhoc(): Locator {
    return this.page.locator("//button[contains(@class,'undo')]");
  }

  get Amount_Input(): Locator {
    return this.page.locator("//input[@placeholder=\"Concession in amount\"]");
  }

  get Add_Adjustments_Button_in_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Add Adjustments\"]]");
  }

  get Multiple_Row_For_Add_Adhoc_Adjustment(): Locator {
    return this.page.locator("//div[text()=\"Add Ad-hoc adjustments\"]/ancestor::div[contains(@class,\"modal\")]//div[@class=\"row\"]");
  }

  get Delete_Trash_in_Adhoc_Adjustment_Popup(): Locator {
    return this.page.locator("//span[contains(@class, \"trash\")]");
  }

  get Selected_Option(): Locator {
    return this.page.locator("//li[contains(@class,\"item active\")]");
  }

  get FHA_Loan_Type_In_Dropdown(): Locator {
    return this.page.locator("//li//span[text()[normalize-space() = \"FHA\"]]");
  }

  get FHA_selected_success(): Locator {
    return this.page.locator("//li//span[text()[normalize-space() = \"FHA\"]]/i[contains(@class, \"text-success\")]");
  }

  get test_sigma_Lock_Request_with_Price_Concession_in_logs(): Locator {
    return this.page.locator("(//span[text()=\"test sigma\"])[2]/..//span[text()=\"Lock Request with Price Concession\"]");
  }

  get test_sigma_Impersonate_user(): Locator {
    return this.page.locator("//li[text()[normalize-space() = \"test sigma\"]]");
  }

  get Test_Manual_LD_LockedLogs(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Locked\"]");
  }

  get Popup_in_cancel_lock_button(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Are you sure you want to submit a lock cancellation?\"]]");
  }

  get Cancel_Option_in_cancel_lock_popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Cancel\"]]");
  }

  get Confirm_Button_in_Cancel_Lock_popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Test_Manual_LD_Lock_Cancelled(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Lock Cancelled\"]");
  }

  get Lock_Cancelled_CommentLogs(): Locator {
    return this.page.locator("//div[contains(text(), \"Rate Sheet Date\")]");
  }

  get LOS_Lock_Status_UnlockedAuto_lock_policy(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"Officer User\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]");
  }

  get Loan_Number_For_Unlocked_LOS_StatusAuto_lock_policy(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"Officer User\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Relock_Worst_Case_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Relock ( Worst Case)\"]]");
  }

  get Allow_Current_Market_Pricing_Button_2(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Allow Current Market Pricing\"]]");
  }

  get Test_Sigma_Lock_Lock_Cancelled(): Locator {
    return this.page.locator("//span[text()=\"Test Sigma Lock\"]/..//span[text()=\"Lock Cancelled\"]");
  }

  get Close_Cross_sign_in_Add_Adhoc_Popup(): Locator {
    return this.page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]");
  }

  get Total_Loan_Amount_in_Loan_Scenario_Page(): Locator {
    return this.page.locator("(//span[text()=\"Total Loan Amount\"]/following::div)[1]");
  }

  get Cancel_Button_in_Add_Adhoc_Adjustment(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Cancel\"]]");
  }

  get Request_Renegotiation_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request Renegotiation\"]]");
  }

  get Renegotiation_Confirm_Button_in_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Renegotiation_Cancel_Button_in_popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Cancel\"]]");
  }

  get Confirm_Lock_Request_in_Request_Lock_Popup(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Confirm Lock Request. You have a previous lock history, which last status is Locked\"]]");
  }

  get Comment_Input_in_Request_Lock_Popup(): Locator {
    return this.page.locator("//div[@role=\"document\"]//textarea");
  }

  get Request_Lock_Button_in_Request_Lock_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request Lock\"]]");
  }

  get Lock_request_Success_Popup(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Lock request is successful\"]]");
  }

  get Deny_Renegotiation_Request_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Deny Renegotiation Request\"]]");
  }

  get Renegotiation_Fee_in_Pricing_Adjustment(): Locator {
    return this.page.locator("//th[normalize-space()='Renegotiation Fee']/parent::tr/td//div");
  }

  get Request_1_Day_Extension_Button1(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request 1 Day Extension\"]]");
  }

  get Override_File_Date_Registration_Only_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Override File Date ( Registration Only)\"]]");
  }

  get Test_Sigma_Lock_Renegotiation_Requested_in_Detailslogs(): Locator {
    return this.page.locator("(//span[text()=\"Test Sigma Lock\"])[2]/..//span[text()=\"Renegotiation Requested\"]");
  }

  get Test_Sigma_Lock_Locked_Renegotiation_Request_Denied(): Locator {
    return this.page.locator("//span[text()=\"Test Sigma Lock\"]/..//span[text()=\"Locked (Renegotiation Request Denied)\"]");
  }

  get Rate_Adjustment_Field(): Locator {
    return this.page.locator("//input[@placeholder=\"Rate Adjustment\"]");
  }

  get Description_and_Adjustment_in_Rate_Adjustment_table(): Locator {
    return this.page.locator("//h6[normalize-space()='Rate Adjustment']/../..//tbody/tr[     th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"] ]//td/div[normalize-space()=\"$|EnteredRateValue|\"]");
  }

  get Description_Value_in_Rate_Adjustment_Table(): Locator {
    return this.page.locator("//h6[normalize-space()='Rate Adjustment']/../..//thead/tr/th[normalize-space()='Description']/ancestor::table//tbody/tr/th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]");
  }

  get Total_In_Rate_Adjustment(): Locator {
    return this.page.locator("//h6[normalize-space()='Rate Adjustment']/ancestor::*[2]//table[@class='pricing-details-table']//tfoot/tr[th[normalize-space()='Total']]//td/div");
  }

  get Base_RateAdjustment_Summary(): Locator {
    return this.page.locator("//table//tr[th[normalize-space()='Rate']]/td[count(//table//th[normalize-space()='Base']/preceding-sibling::th)]");
  }

  get Adj_RateAdjustment_Summary(): Locator {
    return this.page.locator("//table//tr[th[normalize-space()='Rate']]/td[count(//table//th[normalize-space()='Adj.']/preceding-sibling::th)]");
  }

  get Net_RateAdjustment_Summary(): Locator {
    return this.page.locator("//table//tr[th[normalize-space()='Rate']]/td[count(//table//th[normalize-space()='Net']/preceding-sibling::th)]");
  }

  get Final_RateAdjustment_Summary(): Locator {
    return this.page.locator("//table//tr[th[normalize-space()='Rate']]/td[count(//table//th[normalize-space()='Final']/preceding-sibling::th)]");
  }

  get Description_Adjustment_in_Rate_Adjustment_Table(): Locator {
    return this.page.locator("//h6[normalize-space()='Rate Adjustment']/../..//tbody/tr[     th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"] ]//td/div[normalize-space()=\"$|EnteredRateValue|\"]");
  }

  get Description_and_Adjustment_in_Rate_adj_Table(): Locator {
    return this.page.locator("//h6[normalize-space()='Rate Adjustment']/../..//tbody/tr[     th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"] ]//td/div[normalize-space()=\"$|EnteredRateValue|\"]");
  }

  get Test_Sigma_Lock_lockedAL_logs(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Lock\"]/../span[text()=\"Locked\"]");
  }

  get Lock_Days_in_Previous_Lock(): Locator {
    return this.page.locator("//th[@data-th=\"Field\" and text()=\"Lock Days\"]/..//th[@data-th=\"Previous Lock\"]");
  }

  get Lock_Days_in_New_Pricing(): Locator {
    return this.page.locator("//th[@data-th=\"Field\" and text()=\"Lock Days\"]/..//th[@data-th=\"New Pricing\"]");
  }

  get Results_Columns_in_automation_donot_touch_testing(): Locator {
    return this.page.locator("(//div[@class=\"outer-accordian\"]/label[contains(@for,\"results-columnsQuickPricer\")])[last()]");
  }

  get Search_Fields_in_automation_donot_touch(): Locator {
    return this.page.locator("(//div[@class=\"outer-accordian\"]/label[contains(@for,\"search-fieldsQuickPricer\")])[last()]");
  }

  get AUS_Element_testing(): Locator {
    return this.page.locator("(//div[contains(@class, \"custom-checkbox\")]/label[contains(@for, \"ausQuickPricer\")])[last()]");
  }

  get Non_Conforming_CheckboxAutomation_donot_touch_testing(): Locator {
    return this.page.locator("(//div[contains(@class,\"custom-checkbox\")]/input[contains(@id,\"ausNoneQuickPricer\")])[last()]");
  }

  get Guaranteed_Underwriting_Service_CheckboxAutomation_donot_touch(): Locator {
    return this.page.locator("(//div[contains(@class,\"custom-checkbox\")]/input[contains(@id,\"ausGUSQuickPricer\")])[last()]");
  }

  get Manual_Underwriting_CheckboxAutomation_donot_touch(): Locator {
    return this.page.locator("(//div[contains(@class,\"custom-checkbox\")]/input[contains(@id,\"ausMUWQuickPricer\")])[last()]");
  }

  get LP_CheckboxAutomation_donot_touch(): Locator {
    return this.page.locator("(//div[contains(@class,\"custom-checkbox\")]/input[contains(@id,\"ausLPQuickPricer\")])[last()]");
  }

  get DU_CheckboxAutomation_donot_touch(): Locator {
    return this.page.locator("(//div[contains(@class,\"custom-checkbox\")]/input[contains(@id,\"ausDUQuickPricer\")])[last()]");
  }

  get AUS_CheckboxAutomation_donot_touch(): Locator {
    return this.page.locator("(//div[contains(@class, \"custom-checkbox\")]/input[contains(@id, \"ausQuickPricer\")])[last()]");
  }

  get Request_Lock_Exception_in_Floating_Concession_button(): Locator {
    return this.page.locator("//label[@for=\"priceExceptionRequested\"]");
  }

  get Type_your_Comment_Input(): Locator {
    return this.page.locator("//textarea[@placeholder=\"Type your Comment...\"]");
  }

  get Confirm_Button_in_Request_Floating_Concession_Popup(): Locator {
    return this.page.locator("//button[normalize-space(text())='Confirm']");
  }

  get Test_Sigma_Lock_Floating_Concession_Requestedlogs(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Lock\"]/../span[text()=\"Floating Concession Requested\"]");
  }

  get Added_Concession_Type1(): Locator {
    return this.page.locator("(//li/div[normalize-space()='$|ConcessionType(first)|:']/following-sibling::div[1])[1]");
  }

  get Added_Reason_For_Request_Floating_Concession(): Locator {
    return this.page.locator("(//li/div[normalize-space()='Reason :']/following-sibling::div[1])[1]");
  }

  get CUSTOM_For_Request_Floating_Concession(): Locator {
    return this.page.locator("(//li/div[normalize-space()='Exception Price Type :']/following-sibling::div[1])[1]");
  }

  get Added_Comment_For_Request_Floating_Concession(): Locator {
    return this.page.locator("(//li/div[normalize-space()='Comment :']/following-sibling::div[1])[1]");
  }

  get Approve_Button_in_Request_Floating_Concession(): Locator {
    return this.page.locator("//button[contains(@class,'show-prices-btn') and normalize-space()='Approve']");
  }

  get Approved_Disabled_Button_in_Floating_Concession(): Locator {
    return this.page.locator("//button[normalize-space()='Approved' and @disabled]");
  }

  get Amount_Input_Field_in_Floating_Concession(): Locator {
    return this.page.locator("//input[@placeholder=\"Concession in amount\"]");
  }

  get Price_Concession_As_in_Floating_Concession(): Locator {
    return this.page.locator("//select[@aria-label=\"Concession Price Type\"]");
  }

  get Deny_Button_in_Request_Floating_Concession(): Locator {
    return this.page.locator("//button[contains(@class,'show-prices-btn') and normalize-space()='Deny']");
  }

  get Denied_Disabled_Button_in_Floating_Concession(): Locator {
    return this.page.locator("//button[normalize-space()='Denied' and @disabled]");
  }

  get Floating_Concession_Requested_Status_for_1st_Row_in_Pipeline(): Locator {
    return this.page.locator("(//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Locked\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Floating Concession Requested\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"Officer User\"]])[1]");
  }

  get Test_Sigma_Loan_Floating_Concession_Request(): Locator {
    return this.page.locator("(//span[normalize-space()='Test Sigma Loan']/parent::*/descendant::span[normalize-space()='Floating Concession Requested'])[1]");
  }

  get LOS_Lock_Status_Locked_Floating_Concession_RequestedAL(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"Officer User\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Floating Concession Requested\"]");
  }

  get Loan_Number_For_Locked_Floating_Concession_Requested_StatusAL(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Locked\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Floating Concession Requested\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"Officer User\"]]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Test_Sigma_Loan_LockedAL_logs(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Loan\"]/../span[text()=\"Locked\"]");
  }

  get Test_Sigma_Loan_lockedLogs(): Locator {
    return this.page.locator("//span[text()=\"Test Sigma Loan\"]/..//span[text()=\"Locked\"]");
  }

  get Added_New_Row_in_Request_Floating_Concession_Popup(): Locator {
    return this.page.locator("//div[contains(@class,\"items-start\")]");
  }

  get Concession_Type_Dropdown2(): Locator {
    return this.page.locator("(//select[@aria-label=\"Concession Type\"])[2]");
  }

  get Price_in_Concession_Type_Dropdown2(): Locator {
    return this.page.locator("(//div[contains(@class,'items-start')])[count]/div/label[normalize-space()='Price']/..//input[@aria-label='Concession value']");
  }

  get Reasons_Dropdown_menu2(): Locator {
    return this.page.locator("(//div[contains(@class,'items-start')])[2]//select[@aria-label='Reasons']");
  }

  get AUS_Checkbox_in_Automation_Donot_Touch(): Locator {
    return this.page.locator("(//input[contains(@id,\"ausQuickPricer\")])[last()]");
  }

  get Concession_Type_Dropdown_Count(): Locator {
    return this.page.locator("(//select[@aria-label=\"Concession Type\"])[$|count|]");
  }

  get Concession_value_Input_Count(): Locator {
    return this.page.locator("(//input[@placeholder=\"Concession in points\"])[$|count|]");
  }

  get Reasons_Dropdown_Count(): Locator {
    return this.page.locator("(//SELECT[@id='reasons'] | //SELECT[@aria-label='Reasons'])[$|count|]");
  }

  get Trash_Button_Red_Danger_For_Second_Row(): Locator {
    return this.page.locator("(//span[contains(@class, \"trash\")])[2]");
  }

  get Apply_Floating_Concessions_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Apply Floating Concessions\"]]");
  }

  get Approved_Concessions_Popup_In_Apply_Floating_Concessions_Button(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Approved Concessions\"]]");
  }

  get Price_0_778_Reason_DCompetitveMarketing_Offer_E(): Locator {
    return this.page.locator("//li[text()[normalize-space() = \"Price: 0.778\"]]");
  }

  get ReasonPopup(): Locator {
    return this.page.locator("//span[contains(normalize-space(.), 'Reason')]");
  }

  get Exception_Price_TypePopup(): Locator {
    return this.page.locator("//span[contains(normalize-space(.), 'Exception Price Type')]");
  }

  get CommentPopup(): Locator {
    return this.page.locator("//span[contains(normalize-space(.), 'Comment')]");
  }

  get PricePopup(): Locator {
    return this.page.locator("//li[@class='exception-info']/text()[contains(., 'Price')]");
  }

  get All_Data(): Locator {
    return this.page.locator("//li[contains(@class,'exception-info') and contains(normalize-space(.), 'Price')]");
  }

  get Added_in_Pricnig_Table(): Locator {
    return this.page.locator("(//table[@id=\"pricing-table\"]/tbody/tr/td/div[contains(normalize-space(), \"$|PriceValue|\") ])[last()]");
  }

  get Cancel_Button_in_Apply_Floating_Concession_Button(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Cancel\"]]");
  }

  get Confirm_Button_in_Apply_Floating_Concession_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Price_in_Loan_Scenario_Page2(): Locator {
    return this.page.locator("(//div[text()=\"Price\"]/following::div)[1]");
  }

  get Added_Pricing_in_table2(): Locator {
    return this.page.locator("(//td[@data-label=\"Adjustments\"]/div)[last()]");
  }

  get RelockWorst_Case_Popup(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"You will now be redirected to the pricing page\"]]");
  }

  get Confirm_Button_in_RelockWorst_Case_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Relock_Fee_in_Pricing_Adjustment(): Locator {
    return this.page.locator("//h6[normalize-space()='Pricing Adjustment'] /ancestor::div //th[normalize-space()='Relock Fee'] /following-sibling::td");
  }

  get First_Request_Lock_Actions_Column(): Locator {
    return this.page.locator("(//a[@tooltip=\"Request Lock\"])[1]");
  }

  get Confirm_Lock_Request_Popup(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Confirm Lock Request. You have a previous lock history, which last status is Lock Cancelled\"]]");
  }

  get Lock_is_successful(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Lock is successful\"]]");
  }

  get Ok_Button_in_Lock_is_Successful(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Ok\"]]//span");
  }

  get Relock_Fee_in_Pricing_AdjustmentLoan_Scenario(): Locator {
    return this.page.locator("//th[normalize-space()='Relock Fee']/ancestor::tr//div");
  }

  get Cancel_Button_in_Price_Adj_Popup(): Locator {
    return this.page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]");
  }

  get Added_Comment_in_Current_Lock(): Locator {
    return this.page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), '$|CommentInput|')]");
  }

  get RelockHigher_Of_Popup(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"You will now be redirected to the pricing page\"]]");
  }

  get Confirm_Button_in_RelockHigher_Of_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Confirm\"]]");
  }

  get Test_Sigma_Loan_Floating_Concession_Requested(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Loan\"]/../span[text()=\"Floating Concession Requested\"]");
  }

  get LOS_Lock_Status_Locked_Requested_LockedAL(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Lock Requested\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"Officer User\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked\"]\n");
  }

  get Loan_Number_for_Locked_Requested_Locked_StatusAL(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Lock Requested\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Locked\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"Officer User\"]]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get LOS_Lock_Status_Lock_Requested_Lock_RequestedStatusAL(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Lock Requested\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"Officer User\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Lock Requested\"]");
  }

  get Loan_Number_For_Lock_Requested_Lock_RequestedAL(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Lock Requested\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Lock Requested\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"Officer User\"]]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Test_Manual_LD_Relock_Requested_HigherOf(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Relock Requested (Higher-Of)\"]");
  }

  get UFMIP_Financed_Dropdown_2(): Locator {
    return this.page.locator("(//select[contains(@aria-label,\"Financed\")])[last()]");
  }

  get Lock_Extension_Request(): Locator {
    return this.page.locator("//label[text()[normalize-space() = \"Lock Extension Request\"]]");
  }

  get Cancel_Button_in_Request_Extension_Popup(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Cancel\"]]");
  }

  get Select_1_day_in_Lock_Extension_Request(): Locator {
    return this.page.locator("//option[contains(text(),\" 1 Days\")]");
  }

  get Test_Manual_LD_Extension_Requested(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Extension Requested\"]");
  }

  get Financed_Fees_in_Fees_and_Costs_Popup(): Locator {
    return this.page.locator("//th[text()[normalize-space() = \"Financed Fees\"]]/..");
  }

  get Added_Requested_DaysCurrent_Lock(): Locator {
    return this.page.locator("//ul[@class=\"lockEventExceptionInfo_list\"]/li[contains(text(), \" Requested Days:\")]");
  }

  get Added_Requested_PointsCurrent_Lock(): Locator {
    return this.page.locator("//ul[@class=\"lockEventExceptionInfo_list\"]/li[contains(text(), \" Requested Points:\")]");
  }

  get Rate_Sheet_Date_12172025_111216_PM_TestExt(): Locator {
    return this.page.locator("//div[@id='lock-information']/div[1]/div[2]/div[1]/div[1]/app-lock-panel[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]");
  }

  get Added_Comment_in_Rate_SheetCurrent_Lock(): Locator {
    return this.page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), 'Rate Sheet Date:')]");
  }

  get test_Manual_LD_Locked_PostLock_Request_Denied(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Locked (Post-Lock Request Denied)\"]");
  }

  get Request_Post_Lock_Price_Concession_Button2(): Locator {
    return this.page.locator("//button[text()[normalize-space() = \"Request Post- Lock Price Concession\"]]");
  }

  get Added_Comment_in_Rate_SheetLogs(): Locator {
    return this.page.locator("(//div[contains(@class,'text-grey') and contains(normalize-space(), 'Rate Sheet Date:')])[1]");
  }

  get Added_Requested_DaysLogs(): Locator {
    return this.page.locator("(//div[contains(@class,'text-grey')])[1]//following::li[starts-with(normalize-space(),'Requested Days:')][1]");
  }

  get Added_Requested_PointsLogs(): Locator {
    return this.page.locator("(//div[contains(@class,'text-grey')])[1]//following::li[starts-with(normalize-space(),'Requested Points:')][1]");
  }

  get Extension_in_Pricing_Adjustment(): Locator {
    return this.page.locator("//th[contains(text(), \"Extension:\")]/..");
  }

  get Extension_Point_in_Pricing_Adjustment(): Locator {
    return this.page.locator("//th[contains(text(), \"Extension:\")]/..//td");
  }

  get Test_Sigma_Lock_Extension_Requestedcurrent_Lock(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Lock\"]/../span[text()=\"Extension Requested\"]");
  }

  get Test_Manual_LD_Lock_RequestedCurrent_Lock(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Lock Requested\"]");
  }

  get Test_Sigma_Extension_RequestedCurrent_Lock(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"test sigma\"]/../span[text()=\"Extension Requested\"]");
  }

  get LOS_Lock_Status_Locked_LockedPostLock_Request_Denied_ML(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked (Post-Lock Request Denied)\"]");
  }

  get Loan_Number_For_Locked_LockedPostLock_Request_Denied_ML(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked (Post-Lock Request Denied)\"] /ancestor::tr //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get LOS_Lock_Status_LockedNew_Lock_Requested_Extension_Requested_ML(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked, New Lock Requested\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Extension Requested\"]");
  }

  get Loan_Number_For_Locked_New_Lock_Requested_Extension_Requested_ML(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked, New Lock Requested\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Extension Requested\"] /ancestor::tr //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Added_Comment_in_Rate_SheetCurrent_Lock1(): Locator {
    return this.page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), 'Rate Sheet Date:') and contains(text(), \"$|CommentInput|\")]");
  }

  get Added_Value_in_Pricing_Adjustment(): Locator {
    return this.page.locator("(//th[contains(text(), \"Custom Concession: $|AddedReason|\")]/..//td)[last()]");
  }

  get Financed_Fees_Data(): Locator {
    return this.page.locator("//th[normalize-space(text())='Financed Fees']/ancestor::tr//th/span");
  }

  get Funding_Fee_Data(): Locator {
    return this.page.locator("//th[normalize-space(text())='Funding Fee']/ancestor::tr//th/span");
  }

  get Origination_Data(): Locator {
    return this.page.locator("//th[contains(normalize-space(.),'Origination')]/ancestor::tr//th/span");
  }

  get Total_Fee_Amount_On_Popup(): Locator {
    return this.page.locator("//th[normalize-space(.)='Total Fee Amount']/ancestor::tr//th/span");
  }

  get _30_Years_Variable_Conventional_Purchase2(): Locator {
    return this.page.locator("//div[contains(normalize-space(.),'30 Years Variable Conventional Purchase')]//i[contains(@class,'fa-chevron-down')]/parent::div");
  }

  get Added_Concession_Type_For_Request_Post_Lock_Price_Concession_Button(): Locator {
    return this.page.locator("(//li/div[normalize-space()='$|ConcessionType|:']/following-sibling::div[1])[1]");
  }

  get Added_Reasons_For_Request_Postlock_Price_Concession_Button(): Locator {
    return this.page.locator("(//li/div[normalize-space()='Reason :']/following-sibling::div[1])[1]");
  }

  get Added_Exception_Price_Type_For_Request_Post_Lock(): Locator {
    return this.page.locator("(//li/div[normalize-space()='Exception Price Type :']/following-sibling::div[1])[1]");
  }

  get Concession_Price_Type_Dropdown(): Locator {
    return this.page.locator("//select[@aria-label=\"Concession Price Type\"]");
  }

  get Custom_Concession_in_Pricing_Adjustment(): Locator {
    return this.page.locator("//th[contains(text(), \"Custom Concession:\")]/..");
  }

  get Test_Manual_LD_Price_Concession_Requested_PostLock(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Price Concession Requested (Post-Lock)\"]");
  }

  get Each_Row_in_Table(): Locator {
    return this.page.locator("//table[contains(@class,'adj-dlg')]//tbody/tr[not(position()=last())]//th/span");
  }

  get Each_Row_in_Table_with_Count(): Locator {
    return this.page.locator("(//table[contains(@class,'adj-dlg')]//tbody/tr[not(position()=last())]//th/span)[$|count|]");
  }

  get Concession_Input_For_second_row(): Locator {
    return this.page.locator("(//input[@placeholder=\"Concession in points\"])[2]");
  }

  get Concession_value_Input_For_Enterred_data(): Locator {
    return this.page.locator("(//input[@placeholder=\"Concession in points\" and @ng-reflect-model=\"0.234\"])");
  }

  get Concession_value_Input_For_entered_data(): Locator {
    return this.page.locator("(//input[@placeholder=\"Concession in points\" and @ng-reflect-model=\"$|SecondConcessionInputToDelete|\"])");
  }

  get Appraised_Value_In_Loan_Scenario_Page(): Locator {
    return this.page.locator("//span[text()=\"Appraised Value\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]");
  }

  get Purchase_Price_In_Loan_Scenario_Page(): Locator {
    return this.page.locator("//span[text()=\"Purchase Price\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]");
  }

  get Amortization_Type_In_Loan_Scenario(): Locator {
    return this.page.locator("//span[text()=\"Amortization Type\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]");
  }

  get Lock_days_in_search_Field(): Locator {
    return this.page.locator("//div[contains(@class,'lock-days')]//button");
  }

  get Purchase_As_In_Loan_Scenario_Page(): Locator {
    return this.page.locator("//span[text()=\"Purchase as\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]");
  }

  get Term_year_dropdown_in_search_fields(): Locator {
    return this.page.locator("//div[contains(@class,'term-years')]");
  }

  get Term_Year_in_loan_scenario(): Locator {
    return this.page.locator("//span[text()=\"Term Year\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]");
  }

  get Terms_In_Loan_Scenario(): Locator {
    return this.page.locator("//span[text()=\"Terms\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]");
  }

  get Added_Row_in_Post_Lock_price_concession_popup(): Locator {
    return this.page.locator("(//div[contains(@class,\"items-start\") and contains(@class, \"row\")])[$|count|]");
  }

  get Trash_Delete_Button(): Locator {
    return this.page.locator("//span[contains(@class, \"trash\")]");
  }

  get Reasons_Dropdown_Option_Selection(): Locator {
    return this.page.locator("((//SELECT[@id='reasons'] | //SELECT[@aria-label='Reasons'])[$|count|]/option)[$|count|]");
  }

  get Added_CommentPost_Lock_Concession_count1(): Locator {
    return this.page.locator("(//li/div[normalize-space()='Comment :']/following-sibling::div[1])[1]");
  }

  get Added_Exception_TypePost_lock_price_concession_count1(): Locator {
    return this.page.locator("(//li/div[normalize-space()='Exception Price Type :']/following-sibling::div[1])[1]");
  }

  get Added_ReasonPost_lock_price_concession_count1(): Locator {
    return this.page.locator("(//li/div[normalize-space()='Reason :']/following-sibling::div[1])[1]");
  }

  get Added_Concession_Type(): Locator {
    return this.page.locator("//li/div[normalize-space()='Price:']/following-sibling::div[1]");
  }

  get Added_Concessions_Type2(): Locator {
    return this.page.locator("(//li/div[normalize-space()='$|ConcessionType(second)|:']/following-sibling::div[1])[2]");
  }

  get Added_ReasonPost_lock_price_concession_count2(): Locator {
    return this.page.locator("(//li/div[normalize-space()='Reason :']/following-sibling::div[1])[2]");
  }

  get Added_Exception_TypePost_lock_price_concession_count2(): Locator {
    return this.page.locator("(//li/div[normalize-space()='Exception Price Type :']/following-sibling::div[1])[2]");
  }

  get Added_CommentPost_Lock_Concession_count2(): Locator {
    return this.page.locator("(//li/div[normalize-space()='Comment :']/following-sibling::div[1])[2]");
  }

  get LOS_Lock_Status_Unlocked_Request_Denied_PreLock_Status(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Request Denied (Pre-Lock)\"]");
  }

  get Loan_Number_For_Unlocked_Request_Denied_PreLock_Status(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Request Denied (Pre-Lock)\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"LoanOfficer2 TestSigma\"]]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get LOS_Lock_Status_Locked_Renegotiation_Request_DeniedAL(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"Officer User\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked (Renegotiation Request Denied)\"]");
  }

  get Added_single_row_in_Post_Lock_Price_concession_popup(): Locator {
    return this.page.locator("//div[contains(@class,\"items-start\") and contains(@class, \"row\")]");
  }

  get Alert_POPUP_Page(): Locator {
    return this.page.locator("//h4[text()[normalize-space() = \"Alert\"]]");
  }

  get Custom_Concession_in_Pricing_Adjustment1(): Locator {
    return this.page.locator("//th[contains(text(), \"Custom Concession:\")]/..//td/div[contains(text(), \"$|AddedPriceValue(first)|\")]");
  }

  get Custom_Concession_in_Pricing_Adjustment2(): Locator {
    return this.page.locator("//th[contains(text(), \"Custom Concession:\")]/..//td/div[contains(text(), \"$|AddedPriceValue(second)|\")]");
  }

  get test_sigma_Price_Concession_Requested_PostLock(): Locator {
    return this.page.locator("//div[text()=\" Date \"]/../span[text()=\"test sigma\"]/../span[text()=\"Price Concession Requested (Post-Lock)\"]");
  }

  get Price_Change_Log_Popup1(): Locator {
    return this.page.locator("//div[text()=\"Price Change Log\"]");
  }

  get Price_Under_Old_Pricingprice_change_log(): Locator {
    return this.page.locator("//th[contains(normalize-space(),'Old Pricing')]/ancestor::table//th[normalize-space()='Price']/following-sibling::th[1]");
  }

  get Price_Under_New_Pricingprice_change_log(): Locator {
    return this.page.locator("//th[contains(normalize-space(),'New Pricing')]/ancestor::table//th[normalize-space()='Price']/following-sibling::th[2]");
  }

  get Are_you_sure_you_want_to_submit_a_lock_request(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Are you sure you want to submit a lock request?\"]]");
  }

  get Description_in_Rate_Adjustment_Table(): Locator {
    return this.page.locator("//h6[text()=\"Rate Adjustment\"]/../..//table/tbody/tr   /th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]   /../td/div[number(normalize-space())=\"$|EnteredPriceValue|\"]");
  }

  get Color_For_Added_Rate_Adjustment_Data(): Locator {
    return this.page.locator("//h6[text()=\"Rate Adjustment\"]/../..//table/tbody/tr   /th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]   /../td");
  }

  get Show_Lock_Period_CheckboxCustom_UI_Test(): Locator {
    return this.page.locator("(//input[contains(@id,\"keyColQuickPricer\") and contains(@id,\"lockPeriod\")])[last()]");
  }

  get Search_Fields_Custom_UITest(): Locator {
    return this.page.locator("(//label[contains(@for,\"QuickPricer\") and contains(@for,\"search-fields\")])[last()]");
  }

  get Lock_Days_in_Search_Field_Custom_UITest(): Locator {
    return this.page.locator("(//input[contains(@id,\"keyFieldQuickPricer\") and contains(@id, \"lockDays\")])[last()]");
  }

  get Result_SettingsAutomation_donot_touch1(): Locator {
    return this.page.locator("(//label[text()=\"Result Settings\" and contains(@for,\"QuickPricer\")])[last()]");
  }

  get Pricer_Options_in_Custom_UI(): Locator {
    return this.page.locator("(//label[contains(@for, \"pricer-optionsQuickPricer\")])[last()]");
  }

  get Note_Rate_Under_New_Pricingprice_change_log(): Locator {
    return this.page.locator("//th[contains(normalize-space(),'New Pricing')]/ancestor::table//th[normalize-space()='Note Rate']/following-sibling::th[2]");
  }

  get LTV_In_Loan_Scenario(): Locator {
    return this.page.locator("(//span[text()=\"LTV\"]/following::div)[1]");
  }

  get Loan_Purpose_In_Loan_Details_Page1(): Locator {
    return this.page.locator("//span[text()=\"Loan Purpose\"]/../..//div");
  }

  get Loan_Purpose_Under_New_Pricingprice_change_log(): Locator {
    return this.page.locator("//th[contains(normalize-space(),'New Pricing')]/ancestor::table//th[normalize-space()='Loan Purpose']/following-sibling::th[2]");
  }

  get APR_Under_New_Pricingprice_change_log(): Locator {
    return this.page.locator("//th[contains(normalize-space(),'New Pricing')]/ancestor::table//th[normalize-space()='APR']/following-sibling::th[2]");
  }

  get Description_and_Added_RateAdjustment_Table(): Locator {
    return this.page.locator("//h6[text()=\"Rate Adjustment\"]/../..//table/tbody/tr   /th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]   /../td/div[number(normalize-space())=\"$|EnteredPriceDataValue|\"]");
  }

  get Adjusted_Rate_Dataserach_result(): Locator {
    return this.page.locator("//div[@ng-reflect-tooltip=\"Previously Exported Rate\"]   /ancestor::div   //div[contains(@class,\"currency\")         and contains(@class,\"adjustment-points\")        and contains(@data,\"$|TotalRateAdjustmentValue|\")]");
  }

}