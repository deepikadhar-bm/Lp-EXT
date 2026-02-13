import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Export_Pricing_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS05_TC01_01', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await expect(page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]")).toBeVisible();
    await stepGroups.stepGroup_Storing_Loan_Based_on_Users(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_in_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    vars["EnteredFicoValue"] = await page.locator("//input[@placeholder=\"FICO\"]").inputValue() || '';
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    vars["RateValue(table)"] = await page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[1]").textContent() || '';
    vars["LockPeriodValue(table)"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div)[1]").getAttribute('title') || '';
    await expect(page.locator("//th[text()[normalize-space() = \"Actions\"]]")).toBeVisible();
    await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"]").hover();
    await expect(page.getByText("Export Pricing")).toBeVisible();
    await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"]").click();
    await stepGroups.stepGroup_SG_LP_Storing_Rate_Fico_and_Lock_Period_from_New_Pricing_Res(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_Export_Pricing_Success_Message_and_Clicking_(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
