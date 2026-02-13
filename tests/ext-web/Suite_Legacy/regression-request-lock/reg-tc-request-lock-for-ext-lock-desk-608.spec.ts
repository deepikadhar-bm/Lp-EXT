import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Regression: Request Lock', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Request Lock For EXT Lock Desk', async ({ page }) => {
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
    await page.locator("//button[contains(text(),\"Request  Lock\")]").click();
    await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").waitFor({ state: 'visible' });
    await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").click();
    while (!(await page.locator("//span[contains(.,'Lock Requested')]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("//span[contains(.,'Lock Requested')]")).toBeVisible();
    if (true) /* Element Lock Button is enabled */ {
      await page.locator("//button[normalize-space()='Lock']").waitFor({ state: 'visible' });
      await page.locator("//button[normalize-space()='Lock']").click();
      await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").waitFor({ state: 'visible' });
      await expect(page.locator("(//h4[text()=\" Lock Information \"]/../../following-sibling::div//ul//li)[1]//span[text()=\"Auto Ellie Lockdesk\"]/../span[text()=\"Locked\"]")).toBeVisible();
    }
    while (!(await page.locator("(//h4[text()=\" Lock Information \"]/../../following-sibling::div//ul//li)[1]//span[text()=\"Auto Ellie Lockdesk\"]/../span[text()=\"Locked\"]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await stepGroups.stepGroup_SG_Verify_Expiration_Date(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
