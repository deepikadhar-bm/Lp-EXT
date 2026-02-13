import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT: All Loan Events ', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Accept Loan Concession as LD [ Individual ]', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    // [DISABLED] SG: Search for Loan
    // await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    // [DISABLED] Wait until the element Second Row is not visible
    // await page.locator("(//table/tbody/tr)[2]").waitFor({ state: 'hidden' });
    // [DISABLED] Wait until the current page is loaded completely
    // await page.waitForLoadState('networkidle');
    // [DISABLED] Click on Loan Number
    // await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    if (String(testData["Execution Status"]) === String("N")) {
      await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
      await stepGroups.stepGroup_Search_Loan_from_EXT_to_Get_LOAN_ID(page, vars);
      await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
      await page.locator("//a[contains(text(),'More Details ..')]").click();
      await page.locator("//h6[normalize-space()='Pricing Adjustment']").scrollIntoViewIfNeeded();
      vars["Final Price Under More Details"] = await page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[3]/div[1] | //body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/app-scenario-panel/div/div[2]/div[4]/div/table/tbody/tr[2]/td[3]/div").getAttribute('title') || '';
      await expect(page.locator("//th[contains(text(),\"Concession\")]")).toBeVisible();
      await expect(page.locator("//th[contains(text(),\"Concession\")]/../td/div")).toHaveAttribute('aria-label', testData["Points"]);
      await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
      await expect(page.locator("//span[contains(text(),\"Price Concession Requested (Post-Lock)\")]")).toBeVisible();
      await page.locator("//span[contains(text(),\"Price Concession Requested (Post-Lock)\")]/following-sibling::button[contains(@class, 'show-prices-btn') and contains(@class, 'text-primary')]").scrollIntoViewIfNeeded();
      await page.locator("//span[contains(text(),\"Price Concession Requested (Post-Lock)\")]/following-sibling::button[contains(@class, 'show-prices-btn') and contains(@class, 'text-primary')]").click();
      await expect(page.locator("//th[text()=\"Price\"]/../th[3]")).toContainText(vars["Final Price Under More Details"]);
      await page.locator("//h5[.='Price Change Log']/following-sibling::button/span[@aria-label=\"Close\"]").click();
      await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
      await page.locator("//button[normalize-space()='Lock']").click();
      await expect(page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li/div/div/div/div)[1]/span[2][text()=\"Locked\"] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//span[contains(text(),\"Lock Requested\")]")).toBeVisible();
      await stepGroups.stepGroup_SG_Status_Verification(page, vars);
      await stepGroups.stepGroup_SG_Get_Status_from_Queue_data(page, vars);
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
      await stepGroups.stepGroup_SG_Logout(page, vars);
      // [DISABLED] SG: Fetching Encrypted Loan Number from UI
      // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
      await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
      await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
      await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
      await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
      while (!(await page.locator("//body/app-root/div[@class='main-background']/div[@class='theme-wrapper']/app-dlt-main-layout/div[@class='parent-main-layout']/div[@class='main-layout']/app-lp-company-layout/div[@class='container pt-3 pb-3']/app-lp-company-lock/div[@class='card']/div[@class='card-body']/div[@class='data-content']/app-lock-panel[@ng-reflect-price-quote='[object Object]']/div[@class='lock-history-status']/ul[@class='list-group']/div/div[1]/li[1]/div[1]/div[1]/div[1]/div[1]/span[2]").textContent() || '').includes(String(''))) {
        await page.waitForTimeout(30000);
      }
    }
    while (true) /* While element Expected Lock Status is not visible on the pag */ {
      // [DISABLED] Wait for 30 seconds
      // await page.waitForTimeout(30000);
      await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
      await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
      await expect(page.locator("//button[.='  Cancel  Lock ']")).toBeVisible();
    }
    // [DISABLED] SG: Encompass API Verification
    // await stepGroups.stepGroup_SG_Encompass_API_Verification(page, vars);
  });
});
