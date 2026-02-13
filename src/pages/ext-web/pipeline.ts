import { Page, Locator } from '@playwright/test';

/**
 * Page Object: pipeline
 * Elements: 31
 */
export class PipelinePage {
  constructor(private page: Page) {}

  get LOS_Lock_Status_Unlocked_LP_Lock_Status_PricedManualPolicy_LD(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Priced\"]");
  }

  get Loan_Number_for_unlocked_and_pricedpipeline(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]]/..//td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Priced\"]/../..//td[@data-title=\"Loan Number\"]");
  }

  get Options_Menu_ButtonThree_Dots(): Locator {
    return this.page.locator("//button[@aria-label=\"Options Menu\"]");
  }

  get latestiframehtml_iFrame1(): Locator {
    return this.page.locator("//iframe[@id='pui-iframe-container-pipelineui']");
  }

  get Import_ULAD(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Import ULAD (MISMO 3.4)\"]]");
  }

  get Folder_Name(): Locator {
    return this.page.locator("//div[@data-testid=\"import-loan-folder-form\"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]");
  }

  get Pipeline_Option_From_Folder_Dropdown(): Locator {
    return this.page.locator("(//div[contains(@class,'combobox')])[1]");
  }

  get Search_In_Loan_Template_Button(): Locator {
    return this.page.locator("//button[@aria-label=\"search-template\"]");
  }

  get Assign_the_following_Loan_Officer(): Locator {
    return this.page.locator("//div[@data-testid=\"ds-radiogroup\"]/div[2]/label[1]/span[1]/*[local-name() = 'svg'][1]");
  }

  get DropdownIndicator_Dropdown(): Locator {
    return this.page.locator("(//div[contains(@class,'combobox__control')])[2]");
  }

  get German_LO(): Locator {
    return this.page.locator("//label[.=\"Assign the following Loan Officer:\"]/..//*[text()=\"German LO\"]");
  }

  get LOCAL_DRIVE_Button(): Locator {
    return this.page.locator("//input[@type=\"file\"]");
  }

  get Import_Button(): Locator {
    return this.page.locator("//button[@data-testid=\"import-btn\"]");
  }

  get Dropdown_scroll_for_german_lo(): Locator {
    return this.page.locator("(//div[@data-testid=\"combobox\"])[2]");
  }

  get German_LO2(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"German LO\"]]");
  }

  get React_select_input(): Locator {
    return this.page.locator("//*[@id='react-select-3-input']");
  }

  get First_Loan_Number_CreatedEncompass(): Locator {
    return this.page.locator("//span[text()=\"Loan #\"]/ancestor::div[@data-testid=\"ds-datatable-head-wrapper\"]/following-sibling::div[1]//div[@data-testid=\"data-table-cell\"][4]  ");
  }

  get First_Loan_Officer_NameEncompass(): Locator {
    return this.page.locator("(//span[text()=\"Loan Officer Name\"]/ancestor::div[@data-testid=\"ds-datatable-head-wrapper\"] /following-sibling::div[1]//span)[7]");
  }

  get Borrower_Name(): Locator {
    return this.page.locator("//span[text()=\"Borrower Name\"]/ancestor::div[@data-testid=\"ds-datatable-head-wrapper\"]/following-sibling::div[1]//div[@data-testid=\"data-table-cell\"][5]  ");
  }

  get Loan_Folder_Dropdown(): Locator {
    return this.page.locator("//button[@aria-label=\"Loan Folder\"]//*[local-name() = 'svg'][@data-testid=\"ds-icon-svg\"]");
  }

  get Pipeline_Option_in_Loan_Folder(): Locator {
    return this.page.locator("//span[@data-testid=\"ds-menu-item-menu-item-label\" and text()[normalize-space() = \"Pipeline\"]]");
  }

  get Loan(): Locator {
    return this.page.locator("//span[text()[normalize-space() = \"Loan #\"]]");
  }

  get LOS_Lock_Status_Expired_LP_Lock_Status_Lock_Expired(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Expired\"]]/..//td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Lock Expired\"]");
  }

  get Loan_Number_For_Expired_Lock_Expired(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Expired\"]     and     td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Lock Expired\"] ]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get LOS_Lock_Status_Locked_LP_Lock_Status_Locked(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Locked\"]]/..//td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Locked\"]");
  }

  get Loan_Number_For_Locked_Locked_Priced_Status(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Locked\"]     and     td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Locked\"] ]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get LOS_LP_Lock_Status_Lock_Cancelled(): Locator {
    return this.page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Lock Cancelled\"]]/..//td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Lock Cancelled\"]");
  }

  get Loan_Number_For_Lock_Cancelled_Status(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Lock Cancelled\"]     and     td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Lock Cancelled\"] ]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Loan_Number_For_Unlocked_Floating_Concession_Requested_Status(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and     td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Floating Concession Requested\"] ]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]");
  }

  get Request_Lock_Popup(): Locator {
    return this.page.locator("//div[text()[normalize-space() = \"Are you sure you want to submit a lock request?\"]]");
  }

  get LP_Lock_Status_Lock_RequestedPipeline(): Locator {
    return this.page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Lock Requested\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Lock Requested\"]");
  }

}