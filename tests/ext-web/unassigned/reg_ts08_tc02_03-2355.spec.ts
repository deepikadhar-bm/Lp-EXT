import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS08_TC02_03', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    vars["FirstCommentInput"] = "TestExtension";
    await page.locator("//textarea[@placeholder='Comment']").fill(vars["FirstCommentInput"]);
    await page.locator("//button[text()[normalize-space() = \"Extension Request\"]]").click();
    await expect(page.locator("//label[contains(text(),\"Lock Extension Request\")]")).toBeVisible();
    await page.locator("//select[@id='l-e']").click();
    await page.locator("//option[contains(text(),\" 1 Days\")]").click();
    vars["ExtensionRequestDaysandPoints"] = await page.locator("//select[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["RequestDays"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["1"] || '';
    vars["Points"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["2"] || '';
    await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await stepGroups.stepGroup_Verifying_Test_Manual_LD_Extension_Requested_After_Clicking_(page, vars);
    vars["RequestedDays"] = await page.locator("//ul[@class=\"lockEventExceptionInfo_list\"]/li[contains(text(), \" Requested Days:\")]").textContent() || '';
    vars["AddedRequestedDays"] = String(vars["RequestedDays"]).split(":")["2"] || '';
    vars["RequestedPoints"] = await page.locator("//ul[@class=\"lockEventExceptionInfo_list\"]/li[contains(text(), \" Requested Points:\")]").textContent() || '';
    vars["AddedRequestedPoints"] = String(vars["RequestedPoints"]).split(":")["2"] || '';
    expect(String(vars["AddedRequestedDays"]).toLowerCase()).toContain(String(vars["RequestDays"]).toLowerCase());
    expect(String(vars["AddedRequestedPoints"]).toLowerCase()).toContain(String(vars["Points"]).toLowerCase());
    await expect(page.locator("(//button[contains(text(),\"Price Change Log\")])[1]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), 'Rate Sheet Date:')]")).toContainText(vars["FirstCommentInput"]);
    await expect(page.locator("//textarea[contains(@class, 'form-row')]")).toHaveValue('');
    vars["SecondCommentInput"] = "Test Data";
    await page.locator("//textarea[contains(@class, 'form-row')]").fill(vars["SecondCommentInput"]);
    await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
    await page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]").click();
    await stepGroups.stepGroup_Verifying_Test_Manual_LD_Locked_PostLock_Request_Denied_Afte(page, vars);
    await expect(page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), 'Rate Sheet Date:')]")).toContainText(vars["SecondCommentInput"]);
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Post- Lock Price Concession\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]")).toBeVisible();
    await expect(page.locator("(//button[contains(text(),\"Price Change Log\")])[1]")).toBeVisible();
    await expect(page.locator("(//div[contains(@class,'text-grey') and contains(normalize-space(), 'Rate Sheet Date:')])[1]")).toContainText(vars["FirstCommentInput"]);
    vars["RequestedDays(Logs)"] = await page.locator("(//div[contains(@class,'text-grey')])[1]//following::li[starts-with(normalize-space(),'Requested Days:')][1]").textContent() || '';
    vars["AddedRequestedDays(Logs)"] = String(vars["RequestedDays(Logs)"]).split(":")["2"] || '';
    vars["RequestedPoints(Logs)"] = await page.locator("(//div[contains(@class,'text-grey')])[1]//following::li[starts-with(normalize-space(),'Requested Points:')][1]").textContent() || '';
    vars["AddedRequestedPoints(Logs)"] = String(vars["RequestedPoints(Logs)"]).split(":")["2"] || '';
    expect(String(vars["AddedRequestedDays(Logs)"]).toLowerCase()).toContain(String(vars["RequestDays"]).toLowerCase());
    expect(String(vars["AddedRequestedPoints(Logs)"]).toLowerCase()).toContain(String(vars["Points"]).toLowerCase());
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
