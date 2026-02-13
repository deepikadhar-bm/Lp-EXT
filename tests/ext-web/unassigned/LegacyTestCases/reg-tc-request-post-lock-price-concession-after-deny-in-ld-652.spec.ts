import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC:  Request Post Lock Price Concession After Deny In LD', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").click();
    await stepGroups.stepGroup_SG_Filling_Price_Concession_Pop_Up_For_FEE(page, vars);
    while (!(await page.locator("//span[contains(text(),\"Price Concession Requested (Post-Lock)\")]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("//span[contains(text(),\"Price Concession Requested (Post-Lock)\")]")).toBeVisible();
    await stepGroups.stepGroup_SG_Verification_Of_Comment_and_Concession_Under_more_Details(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
