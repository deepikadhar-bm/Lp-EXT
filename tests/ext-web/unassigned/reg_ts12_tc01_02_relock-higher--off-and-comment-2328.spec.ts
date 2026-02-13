import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS12_TC01_02_Relock (Higher- Off)  and Comment', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_auto_lock_polic(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_Verifying_Cancel_in_Cancel_Lock_Button(page, vars);
    await stepGroups.stepGroup_Verifying_Confirm_in_Cancel_Lock_Button_Popup(page, vars);
    await page.locator("//span[text()=\"Test Sigma Lock\"]/..//span[text()=\"Lock Cancelled\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//span[text()=\"Test Sigma Lock\"]/..//span[text()=\"Lock Cancelled\"]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Allow Current Market Pricing\"]]")).toBeVisible();
    await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Relock ( Worst Case)\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Floating Concession\"]]")).toBeVisible();
    await stepGroups.stepGroup_Verifying_Cancel_Button_in_RelockWorst_Case_Popup(page, vars);
    await stepGroups.stepGroup_Verifying_Confirm_in_RelockWorst_Case_Button_Popup(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_Verifying_Impersonate_User_and_Impersonating_to_Self(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await page.locator("(//td[@data-label='COLUMN_NAME_ENUM.ADJ']/div)[1]").click();
    await expect(page.locator("//h5[normalize-space()='Adjustments and Disqualifications']")).toBeVisible();
    await expect(page.locator("//h6[normalize-space()='Pricing Adjustment'] /ancestor::div //th[normalize-space()='Relock Fee'] /following-sibling::td")).toBeVisible();
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    await page.locator("(//a[@tooltip=\"Request Lock\"])[1]").click();
    await page.locator("//div[text()[normalize-space() = \"Confirm Lock Request. You have a previous lock history, which last status is Lock Cancelled\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Enter_Text_in_Comment_Section_before_the_Lock_Request(page, vars);
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    // [DISABLED] Scroll up to the element Add Ad-hoc Adjustments Button into view
    // await page.locator("//button[text()[normalize-space() = \"Add Ad-hoc Adjustments\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//th[normalize-space()='Relock Fee']/ancestor::tr//div")).toBeVisible();
    vars["TotalAddedRelockFee"] = String(await page.locator("//th[normalize-space()='Relock Fee']/ancestor::tr//div").count());
    expect(String(vars["TotalAddedRelockFee"])).toBe("1");
    await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    await page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Lock\"]/../span[text()=\"Locked\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Lock\"]/../span[text()=\"Locked\"]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), '$|CommentInput|')]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
