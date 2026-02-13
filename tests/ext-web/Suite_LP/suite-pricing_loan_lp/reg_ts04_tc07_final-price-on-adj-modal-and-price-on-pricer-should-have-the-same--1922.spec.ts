import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Pricing_Loan_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC07_Final Price on adj modal and Price on pricer should have the same value1', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
      await page.locator("//label[@for=\"results-columnsMain\"]").scrollIntoViewIfNeeded();
      await page.locator("//label[@for=\"results-columnsMain\"]").click();
      if (true) /* Checkbox Show Pricing Adjustment Checkbox(loan pricer) is ch */ {
        await expect(page.locator("//input[@id=\"keyColMainadjustment\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"keyColMainadjustment\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColMainadjustment\"]")).toBeVisible();
      }
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_StatusManual(page, vars);
    await page.waitForTimeout(30000);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await expect(page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]")).toBeVisible();
    await stepGroups.stepGroup_Selecting_Lock_days_for_15_Days(page, vars);
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Price Adj\"]")).toBeVisible();
    await page.locator("(//td[@data-label='COLUMN_NAME_ENUM.ADJ']/div)[1]").click();
    await stepGroups.stepGroup_Verify_Price_Adjustment_Popup_Details_For_Custom_UI(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
