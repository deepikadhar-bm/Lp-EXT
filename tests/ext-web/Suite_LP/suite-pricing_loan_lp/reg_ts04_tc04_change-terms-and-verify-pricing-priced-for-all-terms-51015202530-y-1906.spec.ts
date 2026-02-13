import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Pricing_Loan_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC04_Change Terms and verify pricing (priced for all terms, 5+10+15+20+25+30 Years)', async ({ page }) => {
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
    await expect(page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]")).toBeVisible();
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await stepGroups.stepGroup_Selecting_30_days_Lock_Days_From_Dropdown(page, vars);
    await expect(page.locator("//label[@aria-label=\"Term (Years)\"]")).toBeVisible();
    await page.locator("//label[text()=\" Term (Years) \"]/..//button").click();
    await page.locator("//span[text()[normalize-space() = \"15 Years\"]]").click();
    await expect(page.locator("//label[text()=\" Term (Years) \"]/..//button")).toContainText("15");
    await expect(page.locator("//button[@aria-label=\"Search\"]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]")).toBeVisible();
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await page.locator("//label[text()=\" Term (Years) \"]/..//button").click();
    await page.locator("//span[text()[normalize-space() = \"20 Years\"]]").click();
    await expect(page.locator("//label[text()=\" Term (Years) \"]/..//button")).toContainText("20");
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"20\")]")).toBeVisible();
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await page.locator("//label[text()=\" Term (Years) \"]/..//button").click();
    await page.locator("//span[text()[normalize-space() = \"30 Years\"]]").click();
    await expect(page.locator("//label[text()=\" Term (Years) \"]/..//button")).toContainText("30");
    await expect(page.locator("//button[@aria-label=\"Search\"]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]")).toBeVisible();
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await page.locator("//label[text()=\" Term (Years) \"]/..//button").click();
    await page.locator("//span[text()[normalize-space() = \"45 Years\"]]").click();
    await expect(page.locator("//label[text()=\" Term (Years) \"]/..//button")).toContainText("45");
    await expect(page.locator("//button[@aria-label=\"Search\"]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"45\")]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
