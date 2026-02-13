import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Lock Request With Price Concession AS LO', async ({ page }) => {
    // Prerequisite: Pre-cond: Create a loan API
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    while (!(await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").isVisible())) {
      await page.reload();
      await page.locator("//input[@id='searchText']").waitFor({ state: 'visible' });
    }
    // Write to test data profile: "Loan Number" = vars["LOAN ID"]
    // TODO: Test data profile writes need custom implementation
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    if (true) /* Element SEARCH FIELDS Under Pricing is enabled */ {
      await page.locator("(//div[contains(normalize-space(),\"Lock Days* None selected\")])[17]//button[text()[normalize-space() = \"None selected\"]]").click();
      await page.locator("//span[text()[normalize-space() = \"30 days\"]]").click();
      await page.locator("//button[contains(.,\"Search\")][last()]").click();
    }
    await page.locator("//table/tbody/tr[1]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Export_Pricing(page, vars);
    await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlg-message-box[1]/div[1]/div[3]/button[1]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await page.locator("//button[text()[normalize-space() = \"Lock Request with Price Concession\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Request_Lock_Button_Verification(page, vars);
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[text()[normalize-space() = \"Lock Request with Price Concession\"]]").click();
    await stepGroups.stepGroup_SG_Filling_Price_Concession_Pop_Up_For_FEE(page, vars);
    while (!(await page.locator("(//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div//li)[1]//span[text()=\"Test Sigma Lock\" or text()=\"Test Sigma Loan\"]/../span[text()=\"Lock Request with Price Concession\"]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("(//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div//li)[1]//span[text()=\"Test Sigma Lock\" or text()=\"Test Sigma Loan\"]/../span[text()=\"Lock Request with Price Concession\"]")).toBeVisible();
    await stepGroups.stepGroup_SG_Verification_Of_Comment_and_Concession_Under_more_Details(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
