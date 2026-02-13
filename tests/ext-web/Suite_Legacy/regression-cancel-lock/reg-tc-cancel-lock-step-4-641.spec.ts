import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Regression: Cancel Lock', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Cancel Lock Step 4', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    // [DISABLED] Store 240610224 in LOAN ID
    // vars["LOAN ID"] = "240610224";
    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.waitForLoadState('networkidle');
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    // [DISABLED] SG: Fetching Encrypted Loan Number from UI
    // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
    await page.waitForLoadState('networkidle');
    await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
    await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await page.locator("//button[.='  Lock ']").waitFor({ state: 'visible' });
    await expect(page.locator("//button[contains(text(),'Deny  Relock  Request')]")).toBeVisible();
    await expect(page.locator("//span[normalize-space()='Relock Requested (Higher-Of)']")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Worse Case Log')]")).toBeVisible();
    await page.locator("//button[contains(text(),'Worse Case Log')]").click();
    await expect(page.locator("//div[contains(text(),'Worse Case Log')]")).toBeVisible();
    await page.locator("//th[@data-th='Field'][normalize-space()='Price']").scrollIntoViewIfNeeded();
    await page.locator("//button[normalize-space()='Ok']").click();
    await expect(page.locator("//button[position()=2]")).toBeVisible();
    await page.locator("//button[position()=2]").click();
    await expect(page.locator("//div[contains(text(),'Price Change Log')]")).toBeVisible();
    await page.locator("//span[contains(@aria-label,'Close')]").click();
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[.='  Lock ']").scrollIntoViewIfNeeded();
    await page.locator("//button[.='  Lock ']").click();
    await expect(page.locator("//button[.='  Lock ']")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Deny  Relock  Request')]")).toBeVisible();
    await stepGroups.stepGroup_SG_Sell_Side_Summery_Popup_Handle(page, vars);
    while (!(await page.locator("@|Loan Status|").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("(//span[normalize-space()='Locked'])")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]")).toBeVisible();
    // [DISABLED] SG: Expiration Lock date Verification
    // await stepGroups.stepGroup_SG_Expiration_Lock_date_Verification(page, vars);
    await stepGroups.stepGroup_SG_Status_Verification(page, vars);
    await stepGroups.stepGroup_SG_Get_Status_from_Queue_data(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    // [DISABLED] Write value Passed to Regression Sheet Details [Loan Pricing] column Test Status
    // // Write to test data profile: "Test Status" = "Passed"
    // // TODO: Test data profile writes need custom implementation
    // [DISABLED] SG: Encompass API Verification
    // await stepGroups.stepGroup_SG_Encompass_API_Verification(page, vars);
  });
});
