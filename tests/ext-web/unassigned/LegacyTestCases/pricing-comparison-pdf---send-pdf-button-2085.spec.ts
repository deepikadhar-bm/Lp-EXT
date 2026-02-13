import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Pricing Comparison PDF - Send PDF Button', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoanPricer_Without_Save(page, vars);
      await expect(page.locator("//label[@for=\"pricer-optionsMain\"]")).toBeVisible();
      await page.locator("//label[@for=\"pricer-optionsMain\"]").click();
      await page.locator("//label[@for=\"document-generation-settingsMain\"]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[@for=\"document-generation-settingsMain\"]")).toBeVisible();
      await stepGroups.stepGroup_Checking_Allow_Pricing_Comparison_Checkbox_in_Loan_Pricer(page, vars);
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_Unlocked_LOS_LOCK_STATUS_and_Clicking_on_Cor(page, vars);
    await page.waitForTimeout(30000);
    // [DISABLED] SG: Get Pricing Verifications
    // await stepGroups.stepGroup_SG_Get_Pricing_Verifications(page, vars);
    await expect(page.locator("(//div[contains(@class, 'hide-mob')])[1]//button[text()[normalize-space() = \"Get Pricing\"]]")).toBeVisible();
    await page.locator("(//div[contains(@class, 'hide-mob')])[1]//button[text()[normalize-space() = \"Get Pricing\"]]").click();
    await page.locator("//div[@role=\"document\"]/div[1]/app-dlg-message-box[1]/div[1]/div[2]/div[1]/span[1]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await page.locator("//button[@aria-label=\"Clear User-Impersonation Search\"]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Pricing_Comparison_PDF_generation(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
