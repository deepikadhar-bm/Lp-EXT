import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS08_TC02_02_B_LD has an ability to Deny Post-Lock Request.', async ({ page }) => {
    // Prerequisite: REG_TS08_TC02_02_A_LD has an ability to Deny Post-Lock Request.
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_Verifying_Cancel_in_Extension_Request_Button(page, vars);
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Extension Request\"]]").click();
    await page.locator("//label[contains(text(),\"Lock Extension Request\")]").waitFor({ state: 'visible' });
    await page.locator("//select[@id='l-e']").click();
    await page.locator("//option[contains(text(),\" 7 Days\")]").click();
    vars["ExtensionRequestDaysandPoints"] = await page.locator("//select[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["ExtensionRequestDays"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["1"] || '';
    vars["ExtensionRequestPoints"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["2"] || '';
    vars["ExtensionRequestPoints"] = String('').split("")["0"] || '';
    await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.waitForLoadState('networkidle');
    await stepGroups.stepGroup_Verifying_Test_Sigma_Extension_Requested_After_Clicking_on_E(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_New_Lock_Reque(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information_(page, vars);
    await stepGroups.stepGroup_Verifying_Test_Sigma_Extension_Requested_After_Clicking_on_E(page, vars);
    await expect(page.locator("//button[contains(text(),\"Locked\")] | //button[text()=\"  Lock \"]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
    await page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]").click();
    await page.waitForLoadState('networkidle');
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_LockedPostLock(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information_(page, vars);
    await stepGroups.stepGroup_Verifying_Test_Manual_LD_Locked_PostLock_Request_Denied_Afte(page, vars);
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    vars["LockExpirationAfterDenyPost"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    vars["PriceAfterDenyPost"] = await page.locator("(//span[text()=\"Price\"]/following::div)[1]").textContent() || '';
    expect(String(vars["LockExpirationAfterDenyPost"])).toBe(vars["LockExpirationDate"]);
    expect(String(vars["PriceAfterDenyPost"])).toBe(vars["Price(LoanScenario)"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
