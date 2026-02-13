import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';
import * as fileHelper from '../../../../src/helpers/file-helpers';

test.describe('Suite: EXT: End To End Loan Pricing Flow', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Generate Lock Confirmation Documents', async ({ page }) => {
    // Set up download handler
    page.on('download', async (download) => {
      const filePath = path.join('test-results', 'downloads', download.suggestedFilename());
      await download.saveAs(filePath);
      vars['_lastDownloadPath'] = filePath;
    });

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.waitForLoadState('networkidle');
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.waitForTimeout(30000);
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await expect(page.locator("//button[contains(text(),\"Generate Lock Confirmation\")]")).toBeVisible();
    await page.locator("//button[contains(text(),\"Generate Lock Confirmation\")]").click();
    await page.locator("//label[contains(text(),\"Lock Confirmation PDF template\")]/following-sibling::div[contains(@class, 'input-group')]/SELECT[1]").waitFor({ state: 'visible' });
    await page.locator("//label[contains(text(),\"Lock Confirmation PDF template\")]/following-sibling::div[contains(@class, 'input-group')]/SELECT[1]").selectOption({ index: parseInt("1") });
    await page.locator("//button[contains(text(),\"Preview PDF\")]").click();
    await page.locator("//span[contains(text(),\"Download\")]").waitFor({ state: 'visible' });
    await page.locator("//span[contains(@class, 'dlp-icon') and contains(@class, 'fa-chevron-right')]").click();
    await page.locator("//span[contains(@class, 'dlp-icon') and contains(@class, 'fa-chevron-right')]").click();
    await page.locator("//span[contains(text(),\"Download\")]").click();
    await page.waitForTimeout(5000);
    vars[""] = fileHelper.extractPdfText(vars['_lastDownloadPath'] || '');
    expect(String(vars["PDF Data"])).toContain(String(vars["Loan Amount from PPE EXT"]));
    expect(String(vars["PDF Data"])).toContain(String(vars["FICO from PPE EXT"]));
    expect(String(vars["PDF Data"])).toContain(String(vars["Appraised Value from PPE EXT"]));
    expect(String(vars["PDF Data"])).toContain(String(vars["Purchase Price from PPE EXT"]));
    await page.locator("//span[@aria-label=\"Close\"]").click();
    await stepGroups.stepGroup_SG_Logout(page, vars);
    // [DISABLED] SG: Get Status from Queue data
    // await stepGroups.stepGroup_SG_Get_Status_from_Queue_data(page, vars);
  });
});
