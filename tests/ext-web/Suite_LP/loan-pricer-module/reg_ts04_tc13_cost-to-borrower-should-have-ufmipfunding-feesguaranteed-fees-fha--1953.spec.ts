import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC13_Cost to Borrower should have UFMIP/Funding fees/Guaranteed Fees (FHA, VA and USDA', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoanPricer_Without_Save(page, vars);
      await page.locator("//label[@for=\"results-columnsMain\"]").scrollIntoViewIfNeeded();
      await page.locator("//label[@for=\"results-columnsMain\"]").click();
      await stepGroups.stepGroup_Cost_To_Borrower_Checkbox_LoanPricer(page, vars);
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
    await expect(page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]")).toBeVisible();
    await stepGroups.stepGroup_Selecting_FHA_Loan_Type_from_Dropdown(page, vars);
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    vars["LoanAmountFHA"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
    vars["UFMIPFeeFHA"] = await page.locator("//label[text()=\"UFMIP Fee Amount\" or contains(text(),\"UFMIP Amount\")]/..//input").inputValue() || '';
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("(//table//th[normalize-space(.)=\"Cost to Borrower\"]//following::td[contains(@data-label,\"COLUMN_NAME_ENUM.COST_TO_BORROWER\")]/div)[1]").click();
    vars["LoanAmountPopupFHA"] = await page.locator("(//tr[@class=\"currency\"]//th)[1]").textContent() || '';
    vars["UFMIPFeePopupFHA"] = await page.locator("//th[contains(text(),\"UFMIP Fee\")]/..//span").getAttribute('title') || '';
    vars["UFMIPFeePopupFHA"] = String(vars["UFMIPFeePopupFHA"]).replace(/\$/g, '');
    vars["UFMIPFeePopupFHA"] = String(vars["UFMIPFeePopupFHA"]).replace(/\,/g, '');
    expect(String(vars["UFMIPFeePopupFHA"])).toBe(vars["UFMIPFeeFHA"]);
    expect(String(vars["LoanAmountPopupFHA"])).toBe(vars["LoanAmountFHA"]);
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li/span[text()=\" VA \"]").click();
    vars["LoanAmountVA"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
    vars["FundingFeeAmount"] = await page.locator("//label[contains(text(),\"Funding Fee Amount\")]/..//input").inputValue() || '';
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("(//table//th[normalize-space(.)=\"Cost to Borrower\"]//following::td[contains(@data-label,\"COLUMN_NAME_ENUM.COST_TO_BORROWER\")]/div)[1]").click();
    vars["LoanAmountPopupVA"] = await page.locator("(//tr[@class=\"currency\"]//th)[1]").textContent() || '';
    vars["FundingFeeAmountPopup"] = await page.locator("//th[contains(text(),\"Funding Fee\")]/..//span").getAttribute('title') || '';
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    vars["FundingFeeAmountPopup"] = String(vars["FundingFeeAmountPopup"]).replace(/\$/g, '');
    vars["FundingFeeAmountPopup"] = String(vars["FundingFeeAmountPopup"]).replace(/\,/g, '');
    expect(String(vars["LoanAmountPopupVA"])).toBe(vars["LoanAmountVA"]);
    expect(String(vars["FundingFeeAmount"])).toBe(vars["FundingFeeAmountPopup"]);
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//span[contains(text(),\"USDA\")]").click();
    vars["LoanAmountUSDA"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
    vars["GuaranteeFee"] = await page.locator("//label[contains(text(),\"Guarantee Fee Amount\") or text()=\" USDA Guarantee Fee \"]/..//input").inputValue() || '';
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("(//table//th[normalize-space(.)=\"Cost to Borrower\"]//following::td[contains(@data-label,\"COLUMN_NAME_ENUM.COST_TO_BORROWER\")]/div)[1]").click();
    vars["LoanAmountPopupUSDA"] = await page.locator("(//tr[@class=\"currency\"]//th)[1]").textContent() || '';
    vars["GuaranteeFeepopup"] = await page.locator("//th[contains(text(),\"Guarantee Fee\")]/..//span").getAttribute('title') || '';
    vars["GuaranteeFeepopup"] = String(vars["GuaranteeFeepopup"]).replace(/\$/g, '');
    vars["GuaranteeFeepopup"] = String(vars["GuaranteeFeepopup"]).replace(/\,/g, '');
    expect(String(vars["LoanAmountPopupUSDA"])).toBe(vars["LoanAmountUSDA"]);
    expect(String(vars["GuaranteeFeepopup"])).toBe(vars["GuaranteeFee"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
