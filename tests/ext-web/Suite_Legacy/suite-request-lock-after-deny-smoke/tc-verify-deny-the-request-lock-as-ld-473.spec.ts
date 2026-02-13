import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Request lock After Deny [Smoke]', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Deny the Request lock as LD', async ({ page }) => {
    // Prerequisite: TC: Verify Request Lock as LO [Smoke]
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    // [DISABLED] Store LoanID in LOAN ID
    // vars["LOAN ID"] = vars["LoanID"];
    await page.locator("//input[@id='searchText']").click();
    await page.locator("//input[@id='searchText']").fill(vars["LOAN ID"]);
    await page.waitForLoadState('networkidle');
    await expect(page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]")).toBeVisible();
    // [DISABLED] Click on Loan Number
    // await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
    await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await page.locator("//button[contains(text(),\"Lock\")]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[contains(text(),\"Lock\")]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Deny  Request\")]")).toBeVisible();
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[contains(text(),\"Deny  Request\")]").click();
    await expect(page.locator("//button[contains(text(),\"Lock\")]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Deny  Request\")]")).toBeVisible();
    while (!(await page.locator("@|Loan Status|").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("@|Loan Status|")).toBeVisible();
    await stepGroups.stepGroup_SG_Status_Verification(page, vars);
    await stepGroups.stepGroup_SG_Get_Status_from_Queue_data(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
