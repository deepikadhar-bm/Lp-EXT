import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT: All Loan Events ', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify lock the relock loan as LD [ Individual ]', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    // [DISABLED] SG: Search for Loan
    // await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    // [DISABLED] Wait until the current page is loaded completely
    // await page.waitForLoadState('networkidle');
    // [DISABLED] Click on Loan Number
    // await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    if (String(testData["Execution Status"]) === String("N")) {
      await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
      await stepGroups.stepGroup_Search_Loan_from_EXT_to_Get_LOAN_ID(page, vars);
      await page.waitForLoadState('networkidle');
      await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
      await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
      await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
      await page.locator("//button[.='  Lock ']").waitFor({ state: 'visible' });
      await expect(page.locator("//button[contains(text(),'Deny  Relock  Request')]")).toBeVisible();
      await expect(page.locator("//span[normalize-space()='Relock Requested (Higher-Of)']")).toBeVisible();
      await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
      await page.locator("//button[.='  Lock ']").scrollIntoViewIfNeeded();
      await page.locator("//button[.='  Lock ']").click();
      await stepGroups.stepGroup_SG_Sell_Side_Summery_Popup_Handle(page, vars);
      await expect(page.locator("(//span[normalize-space()='Locked'])")).toBeVisible();
      await stepGroups.stepGroup_SG_Status_Verification(page, vars);
      await stepGroups.stepGroup_SG_Get_Status_from_Queue_data(page, vars);
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
      await stepGroups.stepGroup_SG_Logout(page, vars);
      // [DISABLED] SG: Fetching Encrypted Loan Number from UI
      // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
      await expect(page.locator("//button[contains(text(),'Worse Case Log')]")).toBeVisible();
      await page.locator("//button[contains(text(),'Worse Case Log')]").click();
      await expect(page.locator("//div[contains(text(),'Worse Case Log')]")).toBeVisible();
      await page.locator("//th[@data-th='Field'][normalize-space()='Price']").scrollIntoViewIfNeeded();
      await page.locator("//button[normalize-space()='Ok']").click();
      await expect(page.locator("//button[position()=2]")).toBeVisible();
      await page.locator("//button[position()=2]").click();
      await expect(page.locator("//div[contains(text(),'Price Change Log')]")).toBeVisible();
      await page.locator("//span[contains(@aria-label,'Close')]").click();
      await expect(page.locator("//button[.='  Lock ']")).toBeVisible();
      await expect(page.locator("//button[contains(text(),'Deny  Relock  Request')]")).toBeVisible();
      while (!(await page.locator("//body/app-root/div[@class='main-background']/div[@class='theme-wrapper']/app-dlt-main-layout/div[@class='parent-main-layout']/div[@class='main-layout']/app-lp-company-layout/div[@class='container pt-3 pb-3']/app-lp-company-lock/div[@class='card']/div[@class='card-body']/div[@class='data-content']/app-lock-panel[@ng-reflect-price-quote='[object Object]']/div[@class='lock-history-status']/ul[@class='list-group']/div/div[1]/li[1]/div[1]/div[1]/div[1]/div[1]/span[2]").textContent() || '').includes(String(''))) {
        await page.waitForTimeout(30000);
      }
    }
    while (true) /* While element Expected Lock Status is not visible on the pag */ {
      // [DISABLED] Wait for 30 seconds
      // await page.waitForTimeout(30000);
      await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
      await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
      await expect(page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]")).toBeVisible();
      await expect(page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]")).toBeVisible();
    }
    // [DISABLED] SG: Encompass API Verification
    // await stepGroups.stepGroup_SG_Encompass_API_Verification(page, vars);
    // [DISABLED] SG: Comparing values between PPE EXT and API for loan data
    // await stepGroups.stepGroup_SG_Comparing_values_between_PPE_EXT_and_API_for_loan_data(page, vars);
  });
});
