import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT: All Loan Events ', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Request Lock as LO [ Individual ]', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    while (true) /* While element Loan Number is not visible on the page */ {
      // [DISABLED] Click on the Refresh button in the browser
      // await page.reload();
      // [DISABLED] Wait until the element Search Pipeline is enabled
      // await page.locator("//input[@id='searchText']").waitFor({ state: 'visible' });
    }
    // [DISABLED] Verify that the element PipeLine is present
    // await expect(page.locator("//div[@class='page-heading']//span[@class='dlp-icon fal fa-list-alt']")).toBeVisible();
    // [DISABLED] Enter LOAN ID in the Search Pipeline field
    // await page.locator("//input[@id='searchText']").fill(vars["LOAN ID"]);
    // [DISABLED] Wait until the element Second Row is not visible
    // await page.locator("(//table/tbody/tr)[2]").waitFor({ state: 'hidden' });
    if (String(testData["Execution Status"]) === String("N")) {
      await stepGroups.stepGroup_SG_Login_as_LO(page, vars);
      await stepGroups.stepGroup_Search_Loan_from_EXT_to_Get_LOAN_ID(page, vars);
      await stepGroups.stepGroup_SG_Get_Pricing_Verifications(page, vars);
      await page.waitForLoadState('networkidle');
      await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
      await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
      await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
      await page.locator("//button[contains(text(),\"Request  Lock\")]").waitFor({ state: 'visible' });
      await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
      await page.locator("//button[contains(text(),\"Request  Lock\")]").click();
      while (!(await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").isVisible())) {
        await page.waitForTimeout(20000);
      }
      await stepGroups.stepGroup_SG_Status_Verification(page, vars);
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
      await page.screenshot({ fullPage: true });
      await stepGroups.stepGroup_SG_Logout(page, vars);
      // [DISABLED] SG: Fetching Encrypted Loan Number from UI
      // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
    }
    // [DISABLED] Click on Loan Number
    // await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    if (true) /* Element Get Pricing Under Loan is enabled */ {
    }
    // [DISABLED] SG: Enter Data In Search Fields
    // await stepGroups.stepGroup_SG_Enter_Data_In_Search_Fields(page, vars);
      await page.locator("//a[normalize-space()='More Details ...']").click();
      await page.locator("//a[normalize-space()='More Details ...']").scrollIntoViewIfNeeded();
      // [DISABLED] Verify that the element Price Adjustments on Loan View has value Actual Adj Price Value for data
      // await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[2]/div[1]")).toHaveAttribute('title', vars["Actual Adj Price Value"]);
      // [DISABLED] Verify that the element Rate Adjustments on Loan View has value Actual Final Rate Value for data
      // await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[1]/td[3]/div[1]")).toHaveAttribute('title', vars["Actual Final Rate Value"]);
      // [DISABLED] Verify that the element Price Base Adjustments on Loan View has value Actual Base Price Value for data
      // await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[1]/div[1]")).toHaveAttribute('title', vars["Actual Base Price Value"]);
      // [DISABLED] Verify that the element Price Final Adjustments on Loan View has value Actual Final Price Value for data
      // await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[3]/div[1] | //body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/app-scenario-panel/div/div[2]/div[4]/div/table/tbody/tr[2]/td[3]/div")).toHaveAttribute('title', vars["Actual Final Price Value"]);
      vars["Request Lock Date"] = await page.locator("(//span[text()=\"Auto Ellie Loan Officer\"]/parent::div/child::span)[3]").textContent() || '';
      await expect(page.locator("(//span[text()=\"Auto Ellie Loan Officer\"]/parent::div/child::span)[3]")).toBeVisible();
      vars["Date Before Comment Session"] = String(vars["Request Lock Date"]).substring(0, String(vars["Request Lock Date"]).length - 12);
      await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Lock  Request with  Price  Concession\")]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Request  Lock\")]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Lock  Request with  Price  Concession\")]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Request  Lock\")]")).toBeVisible();
      await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
      await stepGroups.stepGroup_SG_Refresh_Page_if_Popup_Not_Present(page, vars);
      await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").waitFor({ state: 'visible' });
      if (true) /* Element Confirm For Request Lock is not visible */ {
        await stepGroups.stepGroup_SG_Get_Queue_data_for_LO(page, vars);
      }
    if (true) /* Element Alert Message is visible */ {
      await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").click();
      // [DISABLED] Click on OK In Alert Message
      // await page.locator("//span[.='OK' or @ng-reflect-ng-switch=\"ok\"]").click();
      while (!(await page.locator("@|Loan Status|").isVisible())) {
        await page.waitForTimeout(30000);
      }
    }
    // [DISABLED] SG: Encompass API Verification with Storing Values
    // await stepGroups.stepGroup_SG_Encompass_API_Verification_with_Storing_Values(page, vars);
    // [DISABLED] SG: Comparing values between PPE EXT and API for loan data
    // await stepGroups.stepGroup_SG_Comparing_values_between_PPE_EXT_and_API_for_loan_data(page, vars);
  });
});
