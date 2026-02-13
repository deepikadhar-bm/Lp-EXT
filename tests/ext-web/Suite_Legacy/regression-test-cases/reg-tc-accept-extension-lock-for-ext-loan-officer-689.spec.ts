import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Regression Test Cases', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Accept Extension Lock For EXT Loan Officer', async ({ page }) => {
    // Prerequisite: REG TC: Extensions For EXT Loan Officer 
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    // [DISABLED] Store LoanID in LOAN ID
    // vars["LOAN ID"] = vars["LoanID"];
    await page.locator("//input[@id='searchText']").click();
    await page.locator("//input[@id='searchText']").fill(vars["LOAN ID"]);
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await page.locator("//button[text()[normalize-space() = \"Deny Request\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[contains(text(),\"Locked\")] | //button[text()=\"  Lock \"]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    await page.locator("//button[contains(text(),\"Locked\")] | //button[text()=\"  Lock \"]").click();
    while (!(await page.locator("(//h4[text()=\" Lock Information \"]/../../following-sibling::div//ul//li)[1]//span[text()=\"Auto Ellie Lockdesk\"]/../span[text()=\"Locked\"]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("(//h4[text()=\" Lock Information \"]/../../following-sibling::div//ul//li)[1]//span[text()=\"Auto Ellie Lockdesk\"]/../span[text()=\"Locked\"]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Events_and_Expiration_Date_With_Concession_For_EXT_Loan_O(page, vars);
    await stepGroups.stepGroup_SG_Extension_Events_Verification(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
