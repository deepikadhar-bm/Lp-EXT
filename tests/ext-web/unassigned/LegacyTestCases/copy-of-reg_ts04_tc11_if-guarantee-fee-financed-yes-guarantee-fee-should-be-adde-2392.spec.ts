import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Copy of (REG_TS04_TC11_if Guarantee Fee Financed : Yes Guarantee Fee should be added to Total Loan Amount and verify cost to borrower if Guarantee Fee Financed : No Guarantee Fee should NOT be added t', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await expect(page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]")).toBeVisible();
    await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    await page.waitForTimeout(30000);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await stepGroups.stepGroup_Selecting_USDC_Loan_Type(page, vars);
    await stepGroups.stepGroup_Selecting_Lock_days_for_15_Days(page, vars);
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    vars["LoanAmount"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
    await stepGroups.stepGroup_Selecting_Financed_in_Guarantee_Fee_Financed_Field_Dropdown(page, vars);
    vars["UFMIPFinancedSelectedText"] = await page.locator("//select[@aria-label=\"Guarantee Fee Financed?\"]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["USDAGuaranteeFeeValue"] = await page.locator("//input[@placeholder=\"USDA Guarantee Fee\"]").inputValue() || '';
    if (String(vars["UFMIPFinancedSelectedText"]).includes(String("Financed"))) {
      vars["LoanValue(Financed)"] = (parseFloat(String(vars["LoanAmount"])) + parseFloat(String(vars["USDAGuaranteeFeeValue"]))).toFixed(0);
      await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("(//table//th[normalize-space(.)=\"Cost to Borrower\"]//following::td[contains(@data-label,\"COLUMN_NAME_ENUM.COST_TO_BORROWER\")]/div)[1]").click();
    await stepGroups.stepGroup_Storing_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    vars["TotalLoanAmountPopupUSDA(Financed)"] = await page.locator("//th[normalize-space(.)='Total Fee Amount']/ancestor::tr//th/span").getAttribute('title') || '';
    vars["TotalLoanAmountPopupUSDA(Financed)"] = String(vars["TotalLoanAmountPopupUSDA(Financed)"]).replace(/\$/g, '');
    vars["ActualTotalLoanAmountPopupUSDA(Financed)"] = String(vars["TotalLoanAmountPopupUSDA(Financed)"]).replace(/\,/g, '');
    if (String(vars["ActualTotalLoanAmountPopupUSDA(Financed)"]) === String(vars["ExpectedTotalValue"])) {
    } else {
      expect(String(vars["ActualTotalLoanAmountPopupUSDA(Financed)"])).toBe(vars["ExpectedTotalValue"]);
    }
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    vars["LoanAmount(NonFinanced)USDA"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
    await stepGroups.stepGroup_Selecting_Not_Financed_in_Guarantee_Fee_Financed_Field_Dropd(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("(//table//th[normalize-space(.)=\"Cost to Borrower\"]//following::td[contains(@data-label,\"COLUMN_NAME_ENUM.COST_TO_BORROWER\")]/div)[1]").click();
    await stepGroups.stepGroup_Storing_actual_and_expected_Loan_in_CostToBorrower_Popup(page, vars);
    vars["TotalLoanAmountinPopupUSDA(NonFinanced)"] = await page.locator("(//tr[@class=\"currency\"]//th)[1]").textContent() || '';
    expect(String(vars["TotalLoanAmountinPopupUSDA(NonFinanced)"])).toBe(vars["LoanAmount(NonFinanced)USDA"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
