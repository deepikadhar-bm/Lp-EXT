import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS06_TC05_02_Check the Expiration Date(AL)Testing', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_Priced_Statu(page, vars);
    await stepGroups.stepGroup_Verifying_and_Clicking_on_Lock_Request_with_Price_Concession(page, vars);
    await stepGroups.stepGroup_SG_Filling_Price_Concession_Popup_for_FEE_or_Price_or_Rate_D(page, vars);
    await page.waitForLoadState('networkidle');
    await page.locator("//button[text()[normalize-space() = \"Request 1 Day Extension\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("(//button[contains(text(),\"Price Change Log\")])[1]")).toBeVisible();
    await expect(page.locator("(//li/div[text()=\" Comment : \"]/..//div)[2]")).toBeVisible();
    await page.locator("(//li/div[text()=\" Comment : \"]/..//div)[2]").scrollIntoViewIfNeeded();
    vars["ActualComment"] = await page.locator("(//li/div[text()=\" Comment : \"]/..//div)[2]").textContent() || '';
    expect(String(vars["ActualComment"])).toBe(vars["ExpectedComment"]);
    await expect(page.locator("//h6[text()=\"Pricing Adjustment\"]")).toBeVisible();
    await expect(page.getByText(vars["PriceValueInPopup"])).toBeVisible();
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    await stepGroups.stepGroup_Verifying_Lock_Expiration_Days_and_Handling_Weekends(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
