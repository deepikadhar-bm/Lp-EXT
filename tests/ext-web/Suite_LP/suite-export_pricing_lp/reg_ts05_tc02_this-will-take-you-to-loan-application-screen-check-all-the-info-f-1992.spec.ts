import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Export_Pricing_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS05_TC02_This will take you to Loan Application screen, check all the info. for the Note Rate selected is correct under \\\'Scenario Pricing Request\\\', Ajustment Summery and Lock Information Los Lo', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await expect(page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]")).toBeVisible();
    await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    if (true) /* Element First LOS Lock Status is visible */ {
      // [DISABLED] Click on First Loan Number For Unlocked Status
      // await page.locator("//tr[ td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]  and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    } else {
      // [DISABLED] Verify that the element First LOS Lock Status is not present and With Scrollable FALSE
      // await expect(page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]")).toBeVisible();
    }
    await page.locator("(//div[contains(@class, \"loan-action\")]/button[text()=\" Get Pricing \"])[2]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
    await expect(page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]")).toBeVisible();
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    vars["EnteredFicoValue"] = await page.locator("//input[@placeholder=\"FICO\"]").inputValue() || '';
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    // [DISABLED] Store text from the element Rate Data in First column into a variable RateValue(table)
    // vars["RateValue(table)"] = await page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[1]").textContent() || '';
    // [DISABLED] Store the value for the attribute data of the element First Lock Period Data(Table) into a variable LockPeriodValue(table)
    // vars["LockPeriodValue(table)"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div)[1]").getAttribute('title') || '';
    await expect(page.locator("//th[text()[normalize-space() = \"Actions\"]]")).toBeVisible();
    await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"]").hover();
    await expect(page.getByText("Export Pricing")).toBeVisible();
    await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"]").click();
    await page.locator("//th[contains(text(),'New Pricing Results')]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()[normalize-space() = \"Export Pricing\"]]")).toBeVisible();
    vars["LoanProgram(NewPricingResult)"] = await page.locator("//th[normalize-space(.)=\"Loan Program\"]/following-sibling::th[@data-th=\"New Pricing Results\"]").textContent() || '';
    vars["CreditScore(NewPricingResult)"] = await page.locator("//th[normalize-space(.)=\"Credit Score\"]/following-sibling::th[@data-th=\"New Pricing Results\"]").textContent() || '';
    vars["Rate(NewPricingResult)"] = await page.locator("//th[normalize-space(.)=\"Rate\"]/following-sibling::th[@data-th=\"New Pricing Results\"]").textContent() || '';
    vars["DaysLock(NewPricingResult)"] = await page.locator("//th[normalize-space(.)=\"Days Lock\"]/following-sibling::th[@data-th=\"New Pricing Results\"]").textContent() || '';
    await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.locator("//div[text()[normalize-space() = \"Export pricing is successful\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()[normalize-space() = \"Export pricing is successful\"]]")).toBeVisible();
    vars["ExportPricingSuccessMessage(Actual)"] = await page.locator("//div[text()[normalize-space() = \"Export pricing is successful\"]]").textContent() || '';
    vars["ExportPricingSuccessMessage(Expected)"] = "Export pricing is successful";
    expect(String(vars["ExportPricingSuccessMessage(Actual)"])).toBe(vars["ExportPricingSuccessMessage(Expected)"]);
    await expect(page.locator("//button[text()[normalize-space() = \"Ok\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Ok\"]]").click();
    await stepGroups.stepGroup_SG_LP_Storing_Fico_LockPeriod_Rate_LoanProgram_From_Loan_Sce(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
