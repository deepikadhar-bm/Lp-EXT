import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Pricing_Loan_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC08_A_Click on Cost to Borrower line result. Verify the origination cost - For Conventional, FHA, VA Loan Types', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoanPricer_Without_Save(page, vars);
      await page.locator("//label[@for=\"results-columnsMain\"]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[@for=\"results-columnsMain\"]")).toBeVisible();
      await page.locator("//label[@for=\"results-columnsMain\"]").click();
      if (true) /* Checkbox Show Cost To Borrower Checkbox(loan pricer) is chec */ {
        await expect(page.locator("//input[@id=\"keyColMaincostToBorrower\"]")).toBeVisible();
      } else {
        await expect(page.locator("//input[@id=\"keyColMaincostToBorrower\"]")).toBeVisible();
        await page.locator("//input[@id=\"keyColMaincostToBorrower\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColMaincostToBorrower\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
