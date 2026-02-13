import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Lock Request For EXT Loan Officer', async ({ page }) => {
    // Prerequisite: REG TC: Re-Pricing With Concession For EXT Loan Officer
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
    await stepGroups.stepGroup_SG_Verification_Of_Comment_and_Concession_Under_more_Details(page, vars);
    await expect(page.locator("//button[contains(text(),\"Lock\")]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Deny  Request\")]")).toBeVisible();
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    await page.locator("//button[normalize-space()='Lock']").click();
    while (!(await page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li/div/div/div/div)[1]/span[2][text()=\"Locked\"] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//span[contains(text(),\"Lock Requested\")]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li/div/div/div/div)[1]/span[2][text()=\"Locked\"] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//span[contains(text(),\"Lock Requested\")]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Events_and_Expiration_Date_With_Concession_For_EXT_Loan_O(page, vars);
  });
});
