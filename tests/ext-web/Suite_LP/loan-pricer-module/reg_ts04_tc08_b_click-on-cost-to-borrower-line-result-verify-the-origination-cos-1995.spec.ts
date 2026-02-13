import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC08_B_Click on Cost to Borrower line result. Verify the origination cost - For Conventional, FHA, VA Loan Types', async ({ page }) => {
    // Prerequisite: REG_TS04_TC08_A_Click on Cost to Borrower line result. Verify the origination cost - For Conventiona
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await expect(page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]")).toBeVisible();
    await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    await page.waitForTimeout(30000);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await stepGroups.stepGroup_Selecting_Conventional_Loan_Type(page, vars);
    await page.locator("//input[@placeholder=\"Loan Amount\"]").scrollIntoViewIfNeeded();
    vars["LoanAmountConventional"] = await page.locator("//input[@placeholder=\"Loan Amount\"]").inputValue() || '';
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    if (true) /* Element Price Toggle -Green Color is visible */ {
      await page.locator("//i[@class='fal fa-retweet-alt ml-1 text-success']").click();
    }
    vars["PriceBaseValue"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]//div[@data])[1]").getAttribute('title') || '';
    vars["FeeAmount(Actual)"] = (parseFloat(String(vars["LoanAmountConventional"])) * parseFloat(String(vars["PriceBaseValue"]))).toFixed(0);
    vars["FeeAmount(Actual)"] = (parseFloat(String(vars["FeeAmount(Actual)"])) / parseFloat(String("100"))).toFixed(0);
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div[1]").click();
    vars["FeeAmount(Expected)"] = await page.locator("//th[text()=\"Total Fee Amount\"]/..//span").getAttribute('title') || '';
    vars["FeeAmount(Expected)"] = String(vars["FeeAmount(Expected)"]).replace(/\$/g, '');
    vars["FeeAmount(Expected)"] = String(vars["FeeAmount(Expected)"]).replace(/\,/g, '');
    expect(String(vars["FeeAmount(Actual)"])).toBe(vars["FeeAmount(Expected)"]);
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").click();
    await page.locator("//label[@aria-label=\"Loan Type\"]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li//span[text()[normalize-space() = \"FHA\"]]").click();
    await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").scrollIntoViewIfNeeded();
    await page.locator("//label[contains(text(), \"UFMIP Financed\")]/..//div/select[@aria-label=\"UFMIP Financed?\"]").click();
    vars["UFMIPValue"] = await page.locator("//label[contains(text(), \"UFMIP Financed\")]/..//div/select[@aria-label=\"UFMIP Financed?\"]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["UFMIPAmount"] = await page.locator("//label[text()=\"UFMIP Fee Amount\" or contains(text(),\"UFMIP Amount\")]/..//input").inputValue() || '';
    vars["LoanAmountFHA"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    if (true) /* Element Price Toggle -Green Color is visible */ {
      await page.locator("//i[@class='fal fa-retweet-alt ml-1 text-success']").click();
    }
    vars["PriceBaseValue"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]//div[@data])[1]").getAttribute('title') || '';
    vars["FeeAmountFHA(Actual)"] = (parseFloat(String(vars["LoanAmountFHA"])) * parseFloat(String(vars["PriceBaseValue"]))).toFixed(0);
    vars["FeeAmountFHA(Actual)"] = (parseFloat(String(vars["FeeAmountFHA(Actual)"])) / parseFloat(String("100"))).toFixed(0);
    // [DISABLED] Split FeeAmountFHA(Actual) 0 range of characters from and 4 and store extracted text in FeeAmountFHA(Actual)
    // vars["FeeAmountFHA(Actual)"] = String(vars["FeeAmountFHA(Actual)"]).substring(0, 4);
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div[1]").click();
    vars["FeeAmountFHA(Expected)"] = await page.locator("//th[text()=\"Total Fee Amount\"]/..//span").getAttribute('title') || '';
    vars["FeeAmountFHA(Expected)"] = String(vars["FeeAmountFHA(Expected)"]).replace(/\$/g, '');
    vars["FeeAmountFHA(Expected)"] = String(vars["FeeAmountFHA(Expected)"]).replace(/\,/g, '');
    if (String(vars["UFMIPValue"]) === String("Not Financed")) {
      vars["FeeAmountFHA(Actual)"] = (parseFloat(String(vars["UFMIPAmount"])) + parseFloat(String(vars["FeeAmountFHA(Actual)"]))).toFixed(0);
    }
    expect(String(vars["FeeAmountFHA(Actual)"])).toBe(vars["FeeAmountFHA(Expected)"]);
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").click();
    await page.locator("//label[@aria-label=\"Loan Type\"]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li/span[text()=\" VA \"]").click();
    await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").scrollIntoViewIfNeeded();
    vars["LoanAmountVA"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
    vars["FundingFeeAmount"] = await page.locator("//input[@placeholder=\"Funding Fee Amount\"]").inputValue() || '';
    await page.locator("//select[@aria-label=\"Financed or Exempt?\"]").click();
    vars["FinancedorExemptValue"] = await page.locator("//select[@aria-label=\"Financed or Exempt?\"]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    if (true) /* Element Price Toggle -Green Color is visible */ {
      await page.locator("//i[@class='fal fa-retweet-alt ml-1 text-success']").click();
    }
    vars["PriceBaseValue"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]//div[@data])[1]").getAttribute('title') || '';
    vars["FeeAmountVA(Actual)"] = (parseFloat(String(vars["LoanAmountVA"])) * parseFloat(String(vars["PriceBaseValue"]))).toFixed(0);
    vars["FeeAmountVA(Actual)"] = (parseFloat(String(vars["FeeAmountVA(Actual)"])) / parseFloat(String("100"))).toFixed(0);
    // [DISABLED] Split FeeAmountVA(Actual) 0 range of characters from and 4 and store extracted text in FeeAmountVA(Actual)
    // vars["FeeAmountVA(Actual)"] = String(vars["FeeAmountVA(Actual)"]).substring(0, 4);
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div[1]").click();
    vars["FeeAmountVA(Expected)"] = await page.locator("//th[text()=\"Total Fee Amount\"]/..//span").getAttribute('title') || '';
    vars["FeeAmountVA(Expected)"] = String(vars["FeeAmountVA(Expected)"]).replace(/\$/g, '');
    vars["FeeAmountVA(Expected)"] = String(vars["FeeAmountVA(Expected)"]).replace(/\,/g, '');
    if (String(vars["FinancedorExemptValue"]) === String("Not financed")) {
      vars["FeeAmountVA(Actual)"] = (parseFloat(String(vars["FeeAmountVA(Actual)"])) + parseFloat(String(vars["FundingFeeAmount"]))).toFixed(0);
    }
    expect(String(vars["FeeAmountVA(Actual)"])).toBe(vars["FeeAmountVA(Expected)"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
