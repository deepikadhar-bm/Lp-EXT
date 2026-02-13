import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC10_if Funding Fee Financed : Yes Funding Fees should be added to Total Loan Amount and verify cost to borrower if Funding Fee Financed : No Funding Fees should  NOT be added to Total Loan A', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_Verifying_and_Clicking_on_Los_Lock_Status_UnlockedManual_LD(page, vars);
    await page.locator("//span[normalize-space()='LOAN DETAILS']").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_in_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await stepGroups.stepGroup_Selecting_VA_Loan_Type_from_Dropdown(page, vars);
    await stepGroups.stepGroup_Selecting_Lock_days_for_15_Days(page, vars);
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    vars["LoanAmount"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
    await stepGroups.stepGroup_Selecting_Financed_in_UFMIP_Financed_Field_Dropdown(page, vars);
    vars["UFMIPFinancedSelectedText"] = await page.locator("(//select[contains(@aria-label,\"Financed\")])[last()]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["FundingFeeAmount"] = await page.locator("//label[contains(text(),\"Funding Fee Amount\")]/..//input").inputValue() || '';
    if (String(vars["UFMIPFinancedSelectedText"]).includes(String("Financed"))) {
      vars["FundingFeeAmount(Financed)VA"] = (parseFloat(String(vars["LoanAmount"])) + parseFloat(String(vars["FundingFeeAmount"]))).toFixed(2);
      await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("(//table//th[normalize-space(.)=\"Cost to Borrower\"]//following::td[contains(@data-label,\"COLUMN_NAME_ENUM.COST_TO_BORROWER\")]/div)[1]").click();
    await stepGroups.stepGroup_Storing_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    await stepGroups.stepGroup_Verifying_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    await stepGroups.stepGroup_Verifying_Funding_Fee_in_Cost_To_Borrower_Popup(page, vars);
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    vars["LoanAmountNonFinanced"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
    await stepGroups.stepGroup_Selecting_Non_Financed_in_UFMIP_Financed_Field_Dropdown(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("(//table//th[normalize-space(.)=\"Cost to Borrower\"]//following::td[contains(@data-label,\"COLUMN_NAME_ENUM.COST_TO_BORROWER\")]/div)[1]").click();
    await stepGroups.stepGroup_Storing_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    await stepGroups.stepGroup_Verifying_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    vars["TotalLoanAmountinPopupNonFinancedVA"] = await page.locator("(//tr[@class=\"currency\"]//th)[1]").textContent() || '';
    expect(String(vars["TotalLoanAmountinPopupNonFinancedVA"])).toBe(vars["LoanAmountNonFinanced"]);
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    vars["LoanAmount(Exempt)"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
    await stepGroups.stepGroup_Selecting_EXEMPT_in_UFMIP_Financed_Field_Dropdown(page, vars);
    vars["FundingFeeAmount"] = await page.locator("//label[contains(text(),\"Funding Fee Amount\")]/..//input").inputValue() || '';
    expect(String(vars["FundingFeeAmount"])).toBe("0");
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("(//table//th[normalize-space(.)=\"Cost to Borrower\"]//following::td[contains(@data-label,\"COLUMN_NAME_ENUM.COST_TO_BORROWER\")]/div)[1]").click();
    await stepGroups.stepGroup_Storing_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    await stepGroups.stepGroup_Verifying_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    vars["TotalLoanAmountinPopup(Exempt)"] = await page.locator("(//tr[@class=\"currency\"]//th)[1]").textContent() || '';
    expect(String(vars["TotalLoanAmountinPopup(Exempt)"])).toBe(vars["LoanAmount(Exempt)"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
