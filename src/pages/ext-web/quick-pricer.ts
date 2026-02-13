import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Quick Pricer
 * Elements: 98
 */
export class QuickPricerPage {
  constructor(private page: Page) {}

  get Quick_Pricer_Tab(): Locator {
    return this.page.locator("//app-quick-pricer");
  }

  get Rate_Column(): Locator {
    return this.page.locator("//tr/td[1]/div/div[not(@style=\"white-space: nowrap;\")]");
  }

  get Min_Rate_Value(): Locator {
    return this.page.locator("((//table/tbody)[2]/tr/td[1]/div/div)[1]");
  }

  get Min_Rate_Filter(): Locator {
    return this.page.locator("//label[text()=\"Rate\"]/../div/div/div/div/input[@placeholder=\"Min\"]");
  }

  get Max_Rate_Filter(): Locator {
    return this.page.locator("//label[text()=\"Rate\"]/../div/div/div/div/input[@placeholder=\"Max\"]");
  }

  get Pricing_Results_Inside_a_Table(): Locator {
    return this.page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[1]");
  }

  get Last_Row_TextRate_in_staging(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[1]/div[last()]");
  }

  get Outside_of_Min_Filter_Box(): Locator {
    return this.page.locator("//label[text()=\"Rate\"]");
  }

  get Filtered_Min_Rate_Element(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[1]/div[\"$|Min Rate with percent|\"]");
  }

  get Price_Column(): Locator {
    return this.page.locator("(//table/tbody)[2]/tr/td[3]/div");
  }

  get _1_to_5_random_Column_TextPrice(): Locator {
    return this.page.locator("((//table/tbody)[2]/tr/td[3]/div)[$|1 to 5 Random Number|]");
  }

  get Min_Price_Filter(): Locator {
    return this.page.locator("//label[text()=\"Price\"]/../div/div/div/div/input[@placeholder=\"Min\"]");
  }

  get Max_Price_Filter(): Locator {
    return this.page.locator("//label[text()=\"Price\"]/../div/div/div/div/input[@placeholder=\"Max\"]");
  }

  get Filtered_Min_Price_Column_Element(): Locator {
    return this.page.locator("((//table/tbody)[2]/tr/td[3])[1]/div[@data=\"$|Min Price|\"]");
  }

  get Last_Row_Price_Text(): Locator {
    return this.page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[last()]/td[3]/div[1]");
  }

  get Rate_Table_Header(): Locator {
    return this.page.locator("//th[text()=\" Rate \"]");
  }

  get Error_Message(): Locator {
    return this.page.locator("//div[@class=\"result-panel\"]/app-public-pricing-result//lib-pricing-result-desktop-view/div/div/div/div | //div[@class='text-center text-grey bg-white pb-4 pt-4 ng-star-inserted']");
  }

  get Show_Rates_in_125_check_box(): Locator {
    return this.page.locator("//label[text()=\"Show Rates in .125\"]/../input[@type=\"checkbox\"]");
  }

  get Rate_Data(): Locator {
    return this.page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[$|Number|]");
  }

  get Lock_Request_with_Price_Concession_Button(): Locator {
    return this.page.locator("//button[contains(text(),\"Lock  Request with  Price  Concession\")]");
  }

  get Price_Button(): Locator {
    return this.page.locator("//button[text()=\"  Price \"]");
  }

  get Lock_Request_With_Price_Concession_Button(): Locator {
    return this.page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]");
  }

  get Alert_Message_Extension_value_adjusted_to_next_Business_day(): Locator {
    return this.page.locator("//div[@class=\"modal-content\"]/app-dlg-message-box/div/div[2]/div/span");
  }

  get Locked_Button(): Locator {
    return this.page.locator("//button[contains(text(),\"Locked\")] | //button[text()=\"  Lock \"]");
  }

  get Deny_Relock_Request_Button(): Locator {
    return this.page.locator("//button[contains(text(),'Deny  Relock  Request')]");
  }

  get LD_Comment_Full_Line(): Locator {
    return this.page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul[1]//li)[1]//div[contains(text(),\"@|Comment|\")] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//div[contains(text(),\"@|Comment|\")] | ((//h4[text()=\" Lock Information \"]/../../../div[2]//ul[1]//li)[1]/div/div/div/div[4]/div/div[2][contains(text(),\"@|Comment|\")]) | //h4[text()=\" Lock Information \"]/../../../following-sibling::div//ul[1]//li[1]/div/div/div/div[4]/div/div[2][contains(text(),\"@|Comment|\")]");
  }

  get New_Pricing_Text_Under_Price_Change_Log(): Locator {
    return this.page.locator("//th[text()=\"Price\"]/../th[3]");
  }

  get Pricing_Adjustment(): Locator {
    return this.page.locator("//h6[text()=\"Pricing Adjustment\"]");
  }

  get Extension_Text(): Locator {
    return this.page.locator("//th[contains(text(),\"Extension\")]");
  }

  get Amount_Field(): Locator {
    return this.page.locator("//label[text()=\"Amount\"]/..//input");
  }

  get Concession_Reason(): Locator {
    return this.page.locator("(//div[contains(text(),\"Reason\")])[1]/../div[2] | //span[contains(text(),\"Reason\")]");
  }

  get Reasons_Drop_Down(): Locator {
    return this.page.locator("//SELECT[@id='reasons'] | //SELECT[@aria-label='Reasons']");
  }

  get Concession_Fee(): Locator {
    return this.page.locator("(//ul[@class='lockEventExceptionInfo_list'])[1]");
  }

  get Concession_Text(): Locator {
    return this.page.locator("//th[contains(text(),\"Concession\")]");
  }

  get Concession_Value_Under_More_Details(): Locator {
    return this.page.locator("//th[contains(text(),\"Concession\")]/../td/div");
  }

  get Reprice_Confirmation_Text(): Locator {
    return this.page.locator("//div[text()=\" You will be directed to pricing results valid as of \"]/div");
  }

  get WholeTable(): Locator {
    return this.page.locator("//table/tbody/tr");
  }

  get Program_Name(): Locator {
    return this.page.locator("(//td[12])[1]/div/a | (//td[7])[1]/div/a | (//table/tbody)[1]/tr/td[11]/div/a | (//table/tbody)[1]/tr/td[8]/div/a");
  }

  get New_Pricing_Program_Name(): Locator {
    return this.page.locator("(//th[@data-th=\"New Pricing\"])[3]");
  }

  get Extension_Days(): Locator {
    return this.page.locator("(//li[contains(text(),\"Requested Days\")])[1]");
  }

  get Extension_day_alert_Text(): Locator {
    return this.page.locator("//span[text()=\"Extension day alert\"]/../../../../div[2]/div/span");
  }

  get Requested_Days_Text(): Locator {
    return this.page.locator("//li[contains(text(),\"Requested Days\")]");
  }

  get Confirm_Relock_Request_Popup(): Locator {
    return this.page.locator("//div[contains(text(),'Confirm Lock Request. You have a previous lock his')]");
  }

  get Loan_Program_Under_Relock_Confirmation(): Locator {
    return this.page.locator("//th[@data-th='New Pricing'][normalize-space()='$|Program Name|']");
  }

  get Request_Lock_Under_Relock_Confirmation_Pop_up(): Locator {
    return this.page.locator("//button[normalize-space()='Request Lock']");
  }

  get Lock_request_is_successful(): Locator {
    return this.page.locator("//div[@ng-reflect-input-html='Lock request is successful']");
  }

  get Relock_Fee_Under_Adj(): Locator {
    return this.page.locator("//th[normalize-space()='Relock Fee']");
  }

  get Lock_Request_Status_in_Information_Section(): Locator {
    return this.page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li/div/div/div/div)[1]/span[2][text()=\"Locked\"] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//span[contains(text(),\"Lock Requested\")]");
  }

  get Relock_Confirmation_Pop_Up(): Locator {
    return this.page.locator("//div[normalize-space()='You will now be redirected to the pricing page']");
  }

  get Relock_Confirmation_Button(): Locator {
    return this.page.locator("(//button[@class='btn-sm btn-primary'][normalize-space()='Confirm'])[1] | //button[@class='btn btn-primary'][normalize-space()='Confirm']");
  }

  get Worse_Case_log_Pop_up_Header(): Locator {
    return this.page.locator("//h5[@class=\"header\"]/div[contains(text(),'Worse Case Log')]");
  }

  get Deny_Post_Lock_Request_Button(): Locator {
    return this.page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]");
  }

  get Concession_Type(): Locator {
    return this.page.locator("//select[@aria-label=\"Concession Type\"]");
  }

  get Buttons_Under_Lock_Information(): Locator {
    return this.page.locator("//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li/div[2]/div//button");
  }

  get Search_Button_in_Quick_pricercustom_ui(): Locator {
    return this.page.locator("//button[@aria-label=\"Search\"]");
  }

  get Valid_Period(): Locator {
    return this.page.locator("//th[text()='Valid Period']/../th[2]");
  }

  get Loan_Details_Iteration(): Locator {
    return this.page.locator("@|xpaths|");
  }

  get Eligible_Error_Message(): Locator {
    return this.page.locator("(//div[@class=\"result\"]/div/div/div)[1]");
  }

  get Occupancy_Dropdown(): Locator {
    return this.page.locator("//select[@id='side-property-use' or @aria-label=\"Occupancy\"]");
  }

  get First_Row_Rate_Data_in_eligible_Tabdefault(): Locator {
    return this.page.locator("(//th/a[normalize-space()=\"Rate\"]/ancestor::table//td//div/div)[1]\n");
  }

  get Locked_Status_Request_in_Information_Section(): Locator {
    return this.page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li/div/div/div/div)[1]/span[2][text()=\"Locked\"] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//span[contains(text(),\"Locked\")]");
  }

  get Rate_in_first_columnquick_pricer(): Locator {
    return this.page.locator("((//table[contains(@class, \"pricing\")]//td)[1]/div)[1]");
  }

  get First_Cost_To_BorrowerQuickPricerTable(): Locator {
    return this.page.locator("(//table//th[normalize-space(.)=\"Cost to Borrower\"]//following::td[contains(@data-label,\"COLUMN_NAME_ENUM.COST_TO_BORROWER\")]/div)[1]");
  }

  get RateRateCardPopupScreen(): Locator {
    return this.page.locator("//div[@class=\"rate-card\"]//div[normalize-space(text())=\"Rate\"]/../hr/following-sibling::div");
  }

  get PointsRateCardPopupScreen(): Locator {
    return this.page.locator("//div[@class=\"rate-card\"]//div[normalize-space(text())=\"Points\"]/../hr/following-sibling::div");
  }

  get CostToBorrowerRateCardPopupScreen(): Locator {
    return this.page.locator("//div[@class=\"rate-card\"]//div[normalize-space(text())=\"Cost to borrower\"]/../hr/following-sibling::div");
  }

  get PaymentRateCardPopupScreen(): Locator {
    return this.page.locator("//div[@class=\"rate-card\"]//div[normalize-space(text())=\"Payment\"]/../hr/following-sibling::div");
  }

  get Pricing_Comparison_Pdf_Element(): Locator {
    return this.page.locator("//div[@class=\"modal-header\"]/h5[normalize-space(text())=\"PRICING-COMPARISON.PDF\"]");
  }

  get Success_Popup_For_Send_Email(): Locator {
    return this.page.locator("//div[@class=\"modal-header\"]//span[text()=\"Success\"]");
  }

  get Sucess_Message_In_Popup_For_Send_Email(): Locator {
    return this.page.locator("//div[@class=\"modal-body\"]//div[text()=\"Pricing Comparison email has been sent\"]");
  }

  get Price_Adj_ColumnQuick_Pricer(): Locator {
    return this.page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Price Adj\"]");
  }

  get Rate_Adj_ColumnQuick_Pricer(): Locator {
    return this.page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Rate Adj.\"]");
  }

  get Failed_to_respond_error_popup(): Locator {
    return this.page.locator("//div[@class=\"modal-body\"]/div/span[contains(text() ,\"failed to respond\")]");
  }

  get Ok_Button_in_error(): Locator {
    return this.page.locator("//div[@class=\"modal-body\"]/div/span[contains(text() ,\"failed to respond\")]/../../..//div[@class=\"modal-footer\"]/button[@role=\"button\"]");
  }

  get BackEnd_DTI_Label_In_Pricing_Scenario(): Locator {
    return this.page.locator("//label[@for=\"dti\"]");
  }

  get Backend_DTI_Input_text_Field_in_pricing_scenario(): Locator {
    return this.page.locator("//label[text()=\"Back-End DTI\"]/..//input[@id=\"backendDTI\"]");
  }

  get Spinner_Circle(): Locator {
    return this.page.locator("//div[@class=\"spinnerCircle\"]");
  }

  get AUS_textbox_under_pricing_scenario(): Locator {
    return this.page.locator("//label[text()=\"AUS\"]/..//div[contains(@class, \"aus\")]");
  }

  get Non_Confirming_under_aus_dropdownlist(): Locator {
    return this.page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"Non Conforming\"]");
  }

  get Guaranteed_Underwriting_under_aus_dropdownlist(): Locator {
    return this.page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"Guaranteed Underwriting Service\"]");
  }

  get Manual_Underwriting_under_aus_dropdownlist(): Locator {
    return this.page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"Manual Underwriting\"]");
  }

  get LP_under_aus_dropdownlist(): Locator {
    return this.page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"LP\"]");
  }

  get DU_under_aus_dropdownlist(): Locator {
    return this.page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"DU\"]");
  }

  get Ratetable(): Locator {
    return this.page.locator("(//table//th/a[normalize-space(.)=\"Rate\"]//following::td/div/div)[1]");
  }

  get First_Row_Rate_Data_In_EligibleCustom_UI(): Locator {
    return this.page.locator("(//table//th/a[normalize-space(.)=\"Rate\"]//following::td/div/div)[1]");
  }

  get Send_Pricing_Comparison_Elementpopup_custom_ui(): Locator {
    return this.page.locator("//div[@class=\"modal-header\"]/h5[normalize-space(text())=\"Send Pricing Comparison\"]");
  }

  get Cancel_Button_Pricing_Comparisoncustom_ui(): Locator {
    return this.page.locator("(//button[contains(@aria-label,\"Cancel\")])[2]");
  }

  get PMI_TypeCustom_UI(): Locator {
    return this.page.locator("//label[normalize-space(text())=\"PMI Type\"]");
  }

  get MI_Company_Custom_UI(): Locator {
    return this.page.locator("//label[normalize-space(text())=\"MI Company\"]");
  }

  get LTV_ValueCustom_UI(): Locator {
    return this.page.locator("//label[@aria-label=\"LTV\"]/..//input[@placeholder=\"LTV\"]");
  }

  get Arm_Margin_or_Margin_in_column(): Locator {
    return this.page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Margin\"]]");
  }

  get Schedule_under_payment_schedule_popup(): Locator {
    return this.page.locator("//div[text()=\"Schedule\"]");
  }

  get CompPlan_all(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COMP_PLAN\"]");
  }

  get ComPlan_all_cell_data_with_dollar_and_count(): Locator {
    return this.page.locator("(//div[@class=\"percent-complan\" and not(contains(@data, \"null\"))])[$|count|]");
  }

  get CompPlan_common_row(): Locator {
    return this.page.locator("//div[@class=\"percent-complan\"]");
  }

  get ComPplan_common_row_with_count(): Locator {
    return this.page.locator("(//div[@class=\"percent-complan\"])[$|count|]");
  }

  get CompPlan_all_cell_data_with_dollar(): Locator {
    return this.page.locator("//div[@class=\"percent-complan\" and not(contains(@data, \"null / null\"))]");
  }

  get Date_Picker_popup(): Locator {
    return this.page.locator("//div[contains(@class,\"datepicker-head\")]");
  }

}