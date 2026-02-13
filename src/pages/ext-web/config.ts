import { Page, Locator } from '@playwright/test';

/**
 * Page Object: Config
 * Elements: 37
 */
export class ConfigPage {
  constructor(private page: Page) {}

  get General_Pricer_Settingssrini_test_custom_config_setting(): Locator {
    return this.page.locator("(//label[contains(@for,'general-pricer-settingsQuickPricer')])[2]");
  }

  get Pricing_Enabled_Checkboxautomation_donot_touch(): Locator {
    return this.page.locator("//input[contains(@id,\"qpEnabled\" )and @type=\"checkbox\"]");
  }

  get Result_settingsrini_test_config(): Locator {
    return this.page.locator("(//label[contains(@for,'result-settingsQuickPricer')])[2]");
  }

  get Results_Columns_In_Configuration_Automation_donot_touch(): Locator {
    return this.page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]");
  }

  get Show_rate_adjustment_element(): Locator {
    return this.page.locator("//div[contains(@class, \"custom-checkbox\")]/label[@for=\"keyColQuickPricerrateAdjustment\"]/..");
  }

  get All_custom_UI_Element(): Locator {
    return this.page.locator("//div[@class=\"col-sm-12\"]/a");
  }

  get All_custom_UI_Element_with_count(): Locator {
    return this.page.locator("(//div[@class=\"col-sm-12\"]/a)[$|count|]");
  }

  get Pricing_Enabled_Option(): Locator {
    return this.page.locator("//div[contains(@class, \"row\")]/label[text()=\"Pricing enabled\" and contains(@for, \"qpEnabled\")]");
  }

  get Enabled_Option_Checkbox(): Locator {
    return this.page.locator("(//input[@type=\"checkbox\" and contains(@id, \"qpEnabled\")])[$|count|]");
  }

  get Result_Type_QMcommon_for_all_custom_ui(): Locator {
    return this.page.locator("(//label[text() =\"Result Type\"]/../div//label[text()=\"QM\"])[$|count|]");
  }

  get Show_Pricing_Adjustment_elementcustom_ui(): Locator {
    return this.page.locator("//div[contains(@class, \"custom-checkbox\")]/label[@for=\"keyColQuickPricer1adjustment\"]/..");
  }

  get Show_rate_adjustment_elementcustom_ui(): Locator {
    return this.page.locator("//div[contains(@class, \"custom-checkbox\")]/label[@for=\"keyColQuickPricer1rateAdjustment\"]/..");
  }

  get Backend_DTI_In_Search_FieldDefault_UI(): Locator {
    return this.page.locator("//label[@for=\"backendDTIQuickPricer\"]");
  }

  get Backend_DTI_CheckboxDefault_UI(): Locator {
    return this.page.locator("//input[@id=\"backendDTIQuickPricer\"]");
  }

  get Backend_DTI_Elementdefault_ui(): Locator {
    return this.page.locator("//div[contains(@class, \"custom-checkbox\")]/label[@for=\"backendDTIQuickPricer\"]");
  }

  get AUS_Under_Quick_Pricer_Configuration(): Locator {
    return this.page.locator("//input[contains(@id ,\"ausQuickPricer\")]/..//label[text()=\"AUS\"]");
  }

  get Guaranteed_Underwriting_Service_checkboxconfig(): Locator {
    return this.page.locator("//input[@id=\"ausGUSQuickPricer\"]");
  }

  get Non_Confirming_checkboxquick_pricer_default_config(): Locator {
    return this.page.locator("//input[@id=\"ausNoneQuickPricer\"]");
  }

  get Manual_underwritingquick_pricer_default_config(): Locator {
    return this.page.locator("//input[@id=\"ausMUWQuickPricer\"]");
  }

  get LP_quick_pricer_default_config(): Locator {
    return this.page.locator("//input[@id=\"ausLPQuickPricer\"]");
  }

  get DUquick_pricer_default_config(): Locator {
    return this.page.locator("//input[@id=\"ausDUQuickPricer\"]");
  }

  get Search_field_in_pricer_config_for_custom_ui(): Locator {
    return this.page.locator("(//label[contains(@for,'search-fieldsQuickPricer')])[position()>1][$|count|]\n");
  }

  get AUS_Under_Quick_pricer_config_custom_ui(): Locator {
    return this.page.locator("(//input[contains(@id,\"ausQuickPricer\")]/..//label[text()=\"AUS\"])[$|count|]\n");
  }

  get AUS_Checkbox_Under_Custom_UI(): Locator {
    return this.page.locator("(//input[contains(@id ,\"ausQuickPricer\")]/..//label[text()=\"AUS\"])[last()]");
  }

  get Non_Confirming_CheckboxCustom_UI(): Locator {
    return this.page.locator("//input[@id=\"ausNoneQuickPricer59\"]");
  }

  get Guaranteed_Underwriting_Servicecustom_ui(): Locator {
    return this.page.locator("//input[@id=\"ausGUSQuickPricer59\"]");
  }

  get Manual_UnderwritingCustom_UI(): Locator {
    return this.page.locator("//input[@id=\"ausMUWQuickPricer59\"]");
  }

  get LPCustom_UI(): Locator {
    return this.page.locator("//input[@id=\"ausLPQuickPricer59\"]");
  }

  get DUCustom_UI(): Locator {
    return this.page.locator("//input[@id=\"ausDUQuickPricer59\"]");
  }

  get Lock_Period_Data_Column(): Locator {
    return this.page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div");
  }

  get Default_Zipcode_In_Automation_Donot_Touch(): Locator {
    return this.page.locator("(//label[contains(@for,'pricer-optionsQuickPricer')])[position()>1]/following::label[contains(@for,'ppQuickPricer') and contains(@for,'defaultZipCode')][1]/following::input[contains(@id,'ppQuickPricer') and contains(@id,'defaultZipCode')][1]");
  }

  get Hide_Ineligible_CheckboxAutomation_Donot_touch(): Locator {
    return this.page.locator("//input[@id=\"ppQuickPricer59hideIneligibleResultsTab\"]");
  }

  get Document_generation_setting_in_custom_uiautomation_donot_touch(): Locator {
    return this.page.locator("(//label[contains(@for,'pricer-optionsQuickPricer')])[position()>1]/..//label[contains(@for,'document-generation-settings')]");
  }

  get Allow_Pricing_ComparisonAutomation_Donot_touch(): Locator {
    return this.page.locator("(//label[contains(@for,'pricer-optionsQuickPricer')])[position()>1]/..//label[contains(@for,'document-generation-settings')]/following::input[contains(@id,'allowPricingComparison')][1]");
  }

  get Final_Price_ValuePopup_Price_Custom_UI(): Locator {
    return this.page.locator("\n(//th[contains(text(),\"Price\")]/..//td/div)[3]");
  }

  get Error_Popup(): Locator {
    return this.page.locator("//span[contains(text(), \"No content to map due to end-of-input\")]");
  }

  get Ok_Button_In_Popup(): Locator {
    return this.page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]");
  }

}