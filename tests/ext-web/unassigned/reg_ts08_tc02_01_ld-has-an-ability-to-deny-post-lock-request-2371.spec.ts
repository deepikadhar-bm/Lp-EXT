import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS08_TC02_01_LD has an ability to Deny Post-Lock Request.', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_Verifying_Cancel_in_Extension_Request_Button(page, vars);
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    vars["CommentInput"] = "TestExtension";
    await page.locator("//textarea[@placeholder='Comment']").fill(vars["CommentInput"]);
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
    await stepGroups.stepGroup_Verifying_Test_Manual_LD_Extension_Requested_After_Clicking_(page, vars);
    await page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), '$|CommentInput|')]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), 'Rate Sheet Date:')]")).toContainText(vars["CommentInput"]);
    await page.locator("//h6[text()=\"Pricing Adjustment\"]").scrollIntoViewIfNeeded();
    await expect(page.locator("//th[contains(text(), \"Extension:\")]/..")).toBeVisible();
    vars["AddedExtensionPoints"] = await page.locator("//th[contains(text(), \"Extension:\")]/..//td").textContent() || '';
    expect(String(vars["AddedExtensionPoints"])).toBe(vars["ExtensionRequestPoints"]);
    await expect(page.locator("//button[contains(text(),\"Locked\")] | //button[text()=\"  Lock \"]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
    await page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]").click();
    await page.waitForLoadState('networkidle');
    await stepGroups.stepGroup_Verifying_Test_Manual_LD_Locked_PostLock_Request_Denied_Afte(page, vars);
    await stepGroups.stepGroup_Verifying_Buttons_After_Clicking_on_Deny_Post_Lock_Request_B(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    vars["LockExpirationAfterDenyPost"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    vars["PriceAfterDenyPost"] = await page.locator("(//span[text()=\"Price\"]/following::div)[1]").textContent() || '';
    expect(String(vars["LockExpirationAfterDenyPost"])).toBe(vars["LockExpirationDate"]);
    expect(String(vars["PriceAfterDenyPost"])).toBe(vars["Price(LoanScenario)"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
