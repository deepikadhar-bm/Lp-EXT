import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS14_TC05_01_Deny Floating concession', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Verifying_and_Clicking_In_Pipeline(page, vars);
    await stepGroups.stepGroup_Verifying_Locked_Status_Loan_or_Creating_a_New_Loan_and_maki(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_Request_Floating_Concession_and_Filling_Requ(page, vars);
    await page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Lock\"]/../span[text()=\"Floating Concession Requested\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Lock\"]/../span[text()=\"Floating Concession Requested\"]")).toBeVisible();
    await stepGroups.stepGroup_Storing_and_Verifying_Added_Data_in_Request_Floating_Concess(page, vars);
    await expect(page.locator("//button[contains(@class,'show-prices-btn') and normalize-space()='Deny']")).toBeVisible();
    await page.locator("//button[contains(@class,'show-prices-btn') and normalize-space()='Deny']").click();
    await page.getByRole('button', { name: "Denied" }).waitFor({ state: 'visible' });
    await expect(page.locator("//button[normalize-space()='Denied' and @disabled]")).toBeVisible();
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    vars["LockExpirationDateAfterDenyFloatingConcession"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    expect(String(vars["LockExpirationDateAfterDenyFloatingConcession"])).toBe(vars["LockExpirationDateBeforeDenyFloatingConcession"]);
    await page.locator("//a[@aria-label=\"Pipeline\"]//span").click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator("(//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Locked\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Floating Concession Requested\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"Officer User\"]])[1]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
