import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Testing Step groups', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    // [DISABLED] SG : LP : Search in Pipeline For Created Loan
    // await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await page.locator("//a[@aria-label=\"Pipeline\"]//span").click();
    await page.locator("//div[contains(text(),'Lock Status')]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await page.locator("//a[@aria-label=\"Loan Number\"]").click();
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//table[contains(@class, 'pricing')]/tbody[1]/tr[1]/td[16]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1]").click();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await stepGroups.stepGroup_SG_LP_Verifying_Export_Pricing_Success_Message_and_Clicking_(page, vars);
    // [DISABLED] SG : LP : Storing Fico, LockPeriod, Rate, LoanProgram From Loan Scenario and Verifying with Export Pricing(New Pricing Result)
    // await stepGroups.stepGroup_SG_LP_Storing_Fico_LockPeriod_Rate_LoanProgram_From_Loan_Sce(page, vars);
    // [DISABLED] SG : LP : Verifying and Selecting Loan for Unlocked Floating Concession Requested Status
    // await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_Floating_Con(page, vars);
    // [DISABLED] SG : LP : Verifying Get Pricing or Price or Reprice in Loan Application
    // await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_or_Reprice_in_Loan_Appl(page, vars);
    // [DISABLED] Wait until the element Get Pricing Button is visible
    // await page.locator("(//button[@class=\"btn btn-primary font-weight-bold\"]/..//button[text()=\" Get Pricing \"])[1]").waitFor({ state: 'visible' });
    // [DISABLED] SG : LP : Verifying and Selecting Loan for Lock Cancelled Status
    // await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Lock_Cancelled_Status(page, vars);
    // [DISABLED] SG : LP : Verifying and Selecting Loan for Locked Locked Status(AL)
    // await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusA(page, vars);
    // [DISABLED] SG : LP : Verifying and Selecting Loan for Expired Lock Expired Status(Manual)
    // await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Expired_Lock_Expired_(page, vars);
    // [DISABLED] Scroll up to the element Lock Information into view
    // await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    // [DISABLED] SG : LP : Verifying Unlocked LOS LOCK STATUS and Clicking on Corresponding Loan Number
    // await stepGroups.stepGroup_SG_LP_Verifying_Unlocked_LOS_LOCK_STATUS_and_Clicking_on_Cor(page, vars);
    // [DISABLED] SG : LP : Verifying and Selecting Loan for Unlocked Priced Status(Manual LD)
    // await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_Priced_Statu(page, vars);
    // [DISABLED] Click on Loan Number For Locked Locked Priced Status
    // await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Locked\"]     and     td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Locked\"] ]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    // [DISABLED] Verify that the current page displays an element Request Extension Button and With Scrollable TRUE
    // await expect(page.locator("//button[text()[normalize-space() = \"Request Extension\"]]")).toBeVisible();
    // [DISABLED] Wait for 20 seconds
    // await page.waitForTimeout(20000);
    // [DISABLED] SG : LP : Input values in to Ad-hoc Adjustments popup(check priced)
    // await stepGroups.stepGroup_SG_LP_Input_values_in_to_Adhoc_Adjustments_popupcheck_priced(page, vars);
    // [DISABLED] SG : LP : Input values in to Ad-hoc Adjustments popup(uncheck priced)
    // await stepGroups.stepGroup_SG_LP_Input_values_in_to_Adhoc_Adjustments_popupuncheck_pric(page, vars);
    // [DISABLED] SG : LP : Cancel Lock
    // await stepGroups.stepGroup_SG_LP_Cancel_Lock(page, vars);
    // [DISABLED] SG : LP : Filling Price Concession Popup For Price Dropdown with Comment
    // await stepGroups.stepGroup_SG_LP_Filling_Price_Concession_Popup_For_Price_Dropdown_with(page, vars);
    // [DISABLED] SG : LP : Filling Request Price Concession Popup For Rate Dropdown with Comment
    // await stepGroups.stepGroup_SG_LP_Filling_Request_Price_Concession_Popup_For_Rate_Dropdo(page, vars);
    // [DISABLED] SG : LP : Verifying Reprice Loan Confirmation (Lock Information) in Loan Scenario Window
    // await stepGroups.stepGroup_SG_LP_Verifying_Reprice_Loan_Confirmation_Lock_Information_i(page, vars);
    // [DISABLED] SG : LP : Verifying Reprice Loan Cancel (Lock Information) in Loan Scenario Window
    // await stepGroups.stepGroup_SG_LP_Verifying_Reprice_Loan_Cancel_Lock_Information_in_Loan(page, vars);
    // [DISABLED] SG : LP : Verifying Reprice Loan Confirmation (Lock Information) in Loan Scenario Window
    // await stepGroups.stepGroup_SG_LP_Verifying_Reprice_Loan_Confirmation_Lock_Information_i(page, vars);
    // [DISABLED] SG : LP : Filling Price Concession Popup For Price Dropdown with Comment
    // await stepGroups.stepGroup_SG_LP_Filling_Price_Concession_Popup_For_Price_Dropdown_with(page, vars);
    // [DISABLED] SG : LP : Filling Request Price Concession Popup For Rate Dropdown with Comment
    // await stepGroups.stepGroup_SG_LP_Filling_Request_Price_Concession_Popup_For_Rate_Dropdo(page, vars);
    // [DISABLED] SG : LP : Request Extension 7 days
    // await stepGroups.stepGroup_SG_LP_Request_Extension_7_days(page, vars);
    // [DISABLED] SG : LP : Request Extension 15days
    // await stepGroups.stepGroup_SG_LP_Request_Extension_15days(page, vars);
    // [DISABLED] SG : LP : Request Extension 30 days
    // await stepGroups.stepGroup_SG_LP_Request_Extension_30_days(page, vars);
    // [DISABLED] SG : LP : Request Extension 45 days
    // await stepGroups.stepGroup_SG_LP_Request_Extension_45_days(page, vars);
    // [DISABLED] SG : LP : Request Extension 60 days
    // await stepGroups.stepGroup_SG_LP_Request_Extension_60_days(page, vars);
    // [DISABLED] SG : LP : Request 1 Day Extension
    // await stepGroups.stepGroup_SG_LP_Request_1_Day_Extension(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
