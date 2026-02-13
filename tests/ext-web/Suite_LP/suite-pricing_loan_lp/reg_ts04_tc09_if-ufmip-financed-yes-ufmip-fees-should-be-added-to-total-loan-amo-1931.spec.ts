import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Pricing_Loan_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC09_If UFMIP Financed : Yes UFMIP Fees should be added to Total Loan Amount and verify cost to borrower if UFMIP Financed : No UFMIP Fees should  NOT be added to Total Loan Amount and verify', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoanPricer_Without_Save(page, vars);
      await page.locator("//label[@for=\"results-columnsMain\"]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[@for=\"results-columnsMain\"]")).toBeVisible();
      await page.locator("//label[@for=\"results-columnsMain\"]").click();
      await stepGroups.stepGroup_Enabling_Cost_to_Borrower_Checkbox_in_Configurationloan_pric(page, vars);
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await expect(page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]")).toBeVisible();
    await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    await page.waitForTimeout(30000);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await stepGroups.stepGroup_Selecting_30_days_Lock_Days_From_Dropdown(page, vars);
    await stepGroups.stepGroup_Selecting_FHA_Loan_Type_from_Dropdown(page, vars);
    await expect(page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]")).toBeVisible();
    vars["LoanAmount"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
    await page.locator("//label[text()=\"UFMIP Fee Amount\" or contains(text(),\"UFMIP Amount\")]/..//input").scrollIntoViewIfNeeded();
    await expect(page.locator("//label[text()=\"UFMIP Fee Amount\" or contains(text(),\"UFMIP Amount\")]/..//input")).toBeVisible();
    vars["UFMIPCollectedAmount"] = await page.locator("//label[text()=\"UFMIP Fee Amount\" or contains(text(),\"UFMIP Amount\")]/..//input").inputValue() || '';
    await stepGroups.stepGroup_Selecting_Financed_in_UFMIP_Financed_Field_Dropdown(page, vars);
    vars["UFMIPFinancedSelectedText"] = await page.locator("(//select[contains(@aria-label,\"Financed\")])[last()]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    if (String(vars["UFMIPFinancedSelectedText"]).includes(String("Financed"))) {
      vars["TotalLoanAmount(search field)"] = (parseFloat(String(vars["LoanAmount"])) + parseFloat(String(vars["UFMIPCollectedAmount"]))).toFixed(2);
      await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("(//table//th[normalize-space(.)=\"Cost to Borrower\"]//following::td[contains(@data-label,\"COLUMN_NAME_ENUM.COST_TO_BORROWER\")]/div)[1]").click();
    await stepGroups.stepGroup_Storing_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    await stepGroups.stepGroup_Verifying_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    vars["LoanAmountInPopup"] = await page.locator("(//tr[@class=\"currency\"]/th)[1]").textContent() || '';
    vars["LoanAmountInPopup"] = String(vars["LoanAmountInPopup"]).replace(/\$/g, '');
    vars["LoanAmountInPopup"] = String(vars["LoanAmountInPopup"]).replace(/\,/g, '');
    expect(String(vars["LoanAmountInPopup"])).toBe(vars["TotalLoanAmount(search field)"]);
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await stepGroups.stepGroup_Selecting_Non_Financed_in_UFMIP_Financed_Field_Dropdown(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("(//table//th[normalize-space(.)=\"Cost to Borrower\"]//following::td[contains(@data-label,\"COLUMN_NAME_ENUM.COST_TO_BORROWER\")]/div)[1]").click();
    await stepGroups.stepGroup_Storing_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    await stepGroups.stepGroup_Verifying_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    vars["LoanAmountInPopup"] = await page.locator("(//tr[@class=\"currency\"]/th)[1]").textContent() || '';
    expect(String(vars["LoanAmountInPopup"])).toBe(vars["LoanAmount"]);
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
