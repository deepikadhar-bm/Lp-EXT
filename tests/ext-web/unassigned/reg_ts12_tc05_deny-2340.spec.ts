import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS12_TC05_Deny', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_Verifying_Cancel_in_Cancel_Lock_Button(page, vars);
    await stepGroups.stepGroup_Verifying_Confirm_in_Cancel_Lock_Button_Popup(page, vars);
    await page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Lock Cancelled\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Lock Cancelled\"]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Relock')]")).toBeVisible();
    await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Current  Market  Pricing  Allowed')]")).toBeVisible();
    await stepGroups.stepGroup_Verifying_Cancel_Button_in_RelockHigher_Of_Popup(page, vars);
    await stepGroups.stepGroup_Verifying_Confirm_in_RelockHigher_Of_Button_Popup(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Test_Sigma_to_Self(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await page.locator("(//td[@data-label='COLUMN_NAME_ENUM.ADJ']/div)[1]").click();
    await expect(page.locator("//h5[normalize-space()='Adjustments and Disqualifications']")).toBeVisible();
    await expect(page.locator("//h6[normalize-space()='Pricing Adjustment'] /ancestor::div //th[normalize-space()='Relock Fee'] /following-sibling::td")).toBeVisible();
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    await page.locator("(//a[@tooltip=\"Request Lock\"])[1]").click();
    await page.locator("//div[text()[normalize-space() = \"Confirm Lock Request. You have a previous lock history, which last status is Lock Cancelled\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Enter_Text_in_Comment_Section_before_the_Lock_Request(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Deny  Relock  Request')]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), '$|CommentInput|')]")).toBeVisible();
    await expect(page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Relock Requested (Higher-Of)\"]")).toBeVisible();
    await stepGroups.stepGroup_Verifying_Test_Manual_LD_Lock_Cancelled_After_Clicking_on_De(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
