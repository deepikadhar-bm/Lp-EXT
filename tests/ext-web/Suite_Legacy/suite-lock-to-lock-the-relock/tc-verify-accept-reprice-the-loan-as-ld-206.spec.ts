import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Lock To Lock The Relock', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Accept Reprice the loan as  LD', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.waitForLoadState('networkidle');
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    // [DISABLED] SG: Fetching Encrypted Loan Number from UI
    // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
    await page.locator("//a[normalize-space()='More Details ...']").click();
    await page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[3]/div[1] | //body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/app-scenario-panel/div/div[2]/div[4]/div/table/tbody/tr[2]/td[3]/div").scrollIntoViewIfNeeded();
    vars["Final Adj Price Under More Details"] = await page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[3]/div[1] | //body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/app-scenario-panel/div/div[2]/div[4]/div/table/tbody/tr[2]/td[3]/div").getAttribute('title') || '';
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await page.locator("//button[normalize-space()='Lock']").waitFor({ state: 'visible' });
    await expect(page.locator("//*[contains(text(),\"Reprice Requested\")]")).toBeVisible();
    await page.locator("(//button[contains(text(),\"Price Change Log\")])[1]").click();
    await page.locator("//APP-DLP-ELLIE-EXPORT-DIFFERENCES[1]/DIV[1]/DIV[2]/DIV[1]/TABLE[1]/TBODY[1]/TR[1]/TH[3]").waitFor({ state: 'visible' });
    await expect(page.locator("//th[text()=\"Price\"]/../th[3]")).toContainText(vars["Final Adj Price Under More Details"]);
    await page.locator("//h5[.='Price Change Log']/following-sibling::button/span[@aria-label=\"Close\"]").click();
    await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[normalize-space()='Lock']").click();
    // [DISABLED] Wait for 2 seconds
    // await page.waitForTimeout(2000);
    await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
    // [DISABLED] Wait for 5 seconds
    // await page.waitForTimeout(5000);
    await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
    if (true) /* Element Sell side summary Pop up is visible */ {
      await page.locator("(//button[normalize-space()='Confirm Lock'])[1]").click();
    }
    while (!(await page.locator("//body/app-root/div[@class='main-background']/div[@class='theme-wrapper']/app-dlt-main-layout/div[@class='parent-main-layout']/div[@class='main-layout']/app-lp-company-layout/div[@class='container pt-3 pb-3']/app-lp-company-lock/div[@class='card']/div[@class='card-body']/div[@class='data-content']/app-lock-panel[@ng-reflect-price-quote='[object Object]']/div[@class='lock-history-status']/ul[@class='list-group']/div/div[1]/li[1]/div[1]/div[1]/div[1]/div[1]/span[2]").textContent() || '').includes(String(''))) {
      await page.waitForTimeout(30000);
    }
    while (true) /* While element Expected Lock Status is not visible on the pag */ {
      // [DISABLED] Wait for 30 seconds
      // await page.waitForTimeout(30000);
    }
    await expect(page.locator("(//h4[text()=\" Lock Information \"]/../../following-sibling::div//ul//li)[1]//span[text()=\"Auto Ellie Lockdesk\"]/../span[text()=\"Locked\"]")).toBeVisible();
    if (String(vars["Encompass_URL_Environment"]) === String(testData["BreakFix_URL"])) {
      await page.waitForTimeout(30000);
    }
    await page.waitForLoadState('networkidle');
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await expect(page.locator("//button[.='  Cancel  Lock ']")).toBeVisible();
    await stepGroups.stepGroup_SG_Status_Verification(page, vars);
    await stepGroups.stepGroup_SG_Get_Status_from_Queue_data(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Encompass_API_Verification(page, vars);
    // Write to test data profile: "Execution Status" = "Y"
    // TODO: Test data profile writes need custom implementation
  });
});
