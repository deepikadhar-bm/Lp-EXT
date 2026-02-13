import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Relock - Verification of Expired Loans (Override) [ Standard UI UAT ]', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Relock - Verification of Expired Loans (Override)', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await page.waitForLoadState('networkidle');
    if (true) /* Element Status of Loan Number has Expired */ {
      await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
    }
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await expect(page.locator("//span[normalize-space()='Lock Expired']")).toBeVisible();
    await page.locator("//button[contains(text(),'Relock')]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[contains(text(),'Relock')]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Current  Market  Pricing  Allowed')]")).toBeVisible();
    await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
    vars["Lock Expire date and time"] = await page.locator("//span[normalize-space()='Lock Expired']/following-sibling::span").textContent() || '';
    await page.locator("//button[contains(text(),'Relock')]").click();
    await page.locator("//div[normalize-space()='You will now be redirected to the pricing page']").waitFor({ state: 'visible' });
    await page.locator("(//button[@class='btn-sm btn-primary'][normalize-space()='Confirm'])[1] | //button[@class='btn btn-primary'][normalize-space()='Confirm']").click();
    await page.waitForLoadState('networkidle');
    if (true) /* Element Lock Days Dropdown is enabled */ {
      await page.locator("//label[@aria-label=\"Lock Days\"]").click();
      await page.locator("//ul/li/span[contains(.,\"30 days\")] | //select[@id=\"dayLocks\"]/option[text()=\"30 days \"]").click();
      await page.locator("//button[contains(.,\"Search\")][last()]").waitFor({ state: 'visible' });
      await page.locator("//button[contains(.,\"Search\")][last()]").click();
    }
    await stepGroups.stepGroup_SG_Store_Program_Name_for_Relock(page, vars);
    await stepGroups.stepGroup_SG_Adjustments_and_Disqualifications(page, vars);
    await page.locator("(//a[@tooltip=\"Request Lock\"])[1]").click();
    await stepGroups.stepGroup_SG_Relock_Confirmation_Pop_up(page, vars);
    await page.locator("//div[@ng-reflect-input-html='Lock request is successful']").waitFor({ state: 'visible' });
    await page.locator("(//button[@role=\"button\"])[2]").click();
    await page.waitForLoadState('networkidle');
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await page.locator("//button[normalize-space()='Lock']").waitFor({ state: 'visible' });
    await expect(page.locator("//span[normalize-space()='Relock Requested (Higher-Of)']")).toBeVisible();
    await stepGroups.stepGroup_SG_Worse_Case_Verification(page, vars);
    await page.waitForLoadState('networkidle');
    await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
    await page.locator("//button[normalize-space()='Lock']").click();
    while (!(await page.locator("(//span[normalize-space()='Locked'])").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
