import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Lock To Lock The Relock', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Cancel the loan as  LD', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.waitForLoadState('networkidle');
    // [DISABLED] SG: Fetching Encrypted Loan Number from UI
    // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await expect(page.locator("(//h4[text()=\" Lock Information \"]/../../following-sibling::div//ul//li)[1]//span[text()=\"Auto Ellie Lockdesk\"]/../span[text()=\"Locked\"]")).toBeVisible();
    await page.locator("//button[.='  Cancel  Lock ']").waitFor({ state: 'visible' });
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[.='  Cancel  Lock ']").click();
    await page.locator("//div[normalize-space()='Are you sure you want to submit a lock cancellation?']/following-sibling::div/div/button[normalize-space()=\"Confirm\"]").waitFor({ state: 'visible' });
    await page.locator("//div[normalize-space()='Are you sure you want to submit a lock cancellation?']/following-sibling::div/div/button[normalize-space()=\"Confirm\"]").click();
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    while (!(await page.locator("@|Loan Status|").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("//span[normalize-space()='Lock Cancelled']")).toBeVisible();
    await page.locator("//button[contains(text(),'Relock')]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[contains(text(),'Relock')]")).toBeVisible();
    await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Current  Market  Pricing  Allowed')]")).toBeVisible();
    await stepGroups.stepGroup_SG_Status_Verification(page, vars);
    await stepGroups.stepGroup_SG_Get_Status_from_Queue_data(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Encompass_API_Verification(page, vars);
    // Write to test data profile: "Execution Status" = "Y"
    // TODO: Test data profile writes need custom implementation
  });
});
