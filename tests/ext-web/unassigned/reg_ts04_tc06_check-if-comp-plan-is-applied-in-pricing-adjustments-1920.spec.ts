import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC06_Check If Comp Plan Is Applied in pricing Adjustments.', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoanPricer_Without_Save(page, vars);
      await page.locator("//label[@for=\"results-columnsMain\"]").scrollIntoViewIfNeeded();
      await page.locator("//label[@for=\"results-columnsMain\"]").click();
      if (true) /* Checkbox Show Comp Plan Checkbox(Loan Pricer) is checked */ {
        await expect(page.locator("//input[@id=\"keyColMaincompPlan\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"keyColMaincompPlan\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColMaincompPlan\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_Pricing_Adjustment_Checkbox(page, vars);
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
    await stepGroups.stepGroup_Selecting_Lock_days_for_15_Days(page, vars);
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Comp.Plan\"]]")).toBeVisible();
    vars["CompPlanValueActual"] = await page.locator("(//div[@class=\"percent-complan\"])[1]").getAttribute('title') || '';
    await expect(page.locator("(//td[@data-label='COLUMN_NAME_ENUM.ADJ']/div)[1]")).toBeVisible();
    await page.locator("(//td[@data-label='COLUMN_NAME_ENUM.ADJ']/div)[1]").click();
    await page.locator("//th[text()[normalize-space() = \"Comp. Plan\"]]").scrollIntoViewIfNeeded();
    vars["CompPlanValue(Expected)"] = await page.locator("//th[text()=\" Comp. Plan \"]/..//div").getAttribute('title') || '';
    expect(String(vars["CompPlanValueActual"])).toBe(vars["CompPlanValue(Expected)"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
