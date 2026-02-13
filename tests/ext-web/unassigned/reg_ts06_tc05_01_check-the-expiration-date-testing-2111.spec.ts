import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS06_TC05_01_Check the Expiration Date Testing', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_PricedManual_Policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_Priced_Statu(page, vars);
    await stepGroups.stepGroup_Verifying_and_Clicking_on_Lock_Request_with_Price_Concession(page, vars);
    await stepGroups.stepGroup_SG_Filling_Price_Concession_Popup_for_FEE_or_Price_or_Rate_D(page, vars);
    await page.waitForTimeout(30000);
    await page.waitForLoadState('networkidle');
    await page.locator("//h6[text()=\"Pricing Adjustment\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//h6[text()=\"Pricing Adjustment\"]")).toBeVisible();
    await page.locator("(//li/div[text()=\" Comment : \"]/..//div)[2]").scrollIntoViewIfNeeded();
    await expect(page.locator("(//li/div[text()=\" Comment : \"]/..//div)[2]")).toBeVisible();
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    await stepGroups.stepGroup_Verifying_Lock_Expiration_Days_and_Handling_Weekends(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
