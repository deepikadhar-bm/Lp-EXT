import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT: All Loan Events ', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Request relock the loan as  LO [ Individual ]', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    // [DISABLED] SG: Search for Loan
    // await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    // [DISABLED] Wait until the current page is loaded completely
    // await page.waitForLoadState('networkidle');
    // [DISABLED] Click on Loan Number
    // await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    if (String(testData["Execution Status"]) === String("N")) {
      await stepGroups.stepGroup_SG_Login_as_LO(page, vars);
      await stepGroups.stepGroup_Search_Loan_from_EXT_to_Get_LOAN_ID(page, vars);
      await page.waitForLoadState('networkidle');
      await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
      await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
      await expect(page.locator("//span[normalize-space()='Lock Cancelled']")).toBeVisible();
      await page.locator("//button[contains(text(),'Relock')]").waitFor({ state: 'visible' });
      await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
      await page.locator("//button[contains(text(),'Relock')]").click();
      await expect(page.locator("//button[contains(text(),'Relock')]")).toBeVisible();
      await page.locator("//div[normalize-space()='You will now be redirected to the pricing page']").waitFor({ state: 'visible' });
      await page.locator("(//button[@class='btn-sm btn-primary'][normalize-space()='Confirm'])[1] | //button[@class='btn btn-primary'][normalize-space()='Confirm']").click();
      await page.waitForLoadState('networkidle');
      await page.waitForLoadState('networkidle');
      await expect(page.locator("//a[normalize-space()='Search Result View']")).toBeVisible();
      await page.locator("(//td[12])[1]/div/a | (//td[7])[1]/div/a | (//table/tbody)[1]/tr/td[11]/div/a | (//table/tbody)[1]/tr/td[8]/div/a").waitFor({ state: 'visible' });
      vars["Program Name"] = await page.locator("(//td[12])[1]/div/a | (//td[7])[1]/div/a | (//table/tbody)[1]/tr/td[11]/div/a | (//table/tbody)[1]/tr/td[8]/div/a").textContent() || '';
      vars["Program Name"] = String(vars["Program Name"]).trim();
      await expect(page.locator("//th[normalize-space()='Price Adj']")).toBeVisible();
      await page.locator("(//a[@tooltip=\"Request Lock\"])[1]").click();
      await page.locator("//div[@ng-reflect-input-html='Lock request is successful']").waitFor({ state: 'visible' });
      await page.locator("(//button[@role=\"button\"])[2]").click();
      await page.waitForLoadState('networkidle');
      await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
      await page.locator("//button[contains(text(),'Worse Case Log')]").waitFor({ state: 'visible' });
      await page.waitForLoadState('networkidle');
      // [DISABLED] Verify that the element Worse Case Log is present
      // await expect(page.locator("//button[contains(text(),'Worse Case Log')]")).toBeVisible();
      await stepGroups.stepGroup_SG_Status_Verification(page, vars);
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
      await stepGroups.stepGroup_SG_Logout(page, vars);
      // [DISABLED] SG: Fetching Encrypted Loan Number from UI
      // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
      if (true) /* Element Lock Days Dropdown is visible */ {
        await page.locator("//label[@aria-label=\"Lock Days\"]").click();
        await page.locator("//ul/li/span[contains(.,\"30 days\")] | //select[@id=\"dayLocks\"]/option[text()=\"30 days \"]").click();
      }
      if (true) /* Element Search Button Under Search Fields is visible */ {
        await page.locator("//button[contains(.,\"Search\")][last()]").evaluate(el => (el as HTMLElement).click());
      }
      await page.locator("(//td[@data-label='COLUMN_NAME_ENUM.ADJ']/div)[1]").click();
      await page.locator("//h5[normalize-space()='Adjustments and Disqualifications']").waitFor({ state: 'visible' });
      await page.locator("//h5[text()=\"Adjustments and Disqualifications\"]/../../../../div[@class=\"modal-body\"]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("1000"));
      // [DISABLED] Verify that the element Extension Text is present
      // await expect(page.locator("//th[contains(text(),\"Extension\")]")).toBeVisible();
      // [DISABLED] Verify that the element Concession Text is present
      // await expect(page.locator("//th[contains(text(),\"Concession\")]")).toBeVisible();
      await page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]").click();
      await page.locator("//div[contains(text(),'Confirm Lock Request. You have a previous lock his')]").waitFor({ state: 'visible' });
      await expect(page.locator("//th[@data-th='New Pricing'][normalize-space()='$|Program Name|']")).toBeVisible();
      await page.locator("//button[normalize-space()='Request Lock']").click();
      // [DISABLED] Wait until the current page is loaded completely
      // await page.waitForLoadState('networkidle');
      // [DISABLED] Click on Worse Case Log
      // await page.locator("//button[contains(text(),'Worse Case Log')]").click();
      // [DISABLED] Wait until the element Worse Case log Pop up Header is visible
      // await page.locator("//h5[@class=\"header\"]/div[contains(text(),'Worse Case Log')]").waitFor({ state: 'visible' });
      // [DISABLED] Verify that the element Worse Case Under Fields is present
      // await expect(page.locator("//th[.='Worse Case']")).toBeVisible();
      // [DISABLED] Scroll down to the element Worse Price Table into view
      // await page.locator("//table[@class=\"mobile-friendly-table\"]").scrollIntoViewIfNeeded();
      // [DISABLED] Click on Ok Button In Worse Case Log
      // await page.locator("//button[normalize-space()='Ok']").click();
      await page.locator("//a[normalize-space()='More Details ...']").scrollIntoViewIfNeeded();
      await page.locator("//a[normalize-space()='More Details ...']").click();
      await expect(page.locator("//h6[normalize-space()='Adjustment Summary']")).toBeVisible();
      await expect(page.locator("//th[normalize-space()='Relock Fee']")).toBeVisible();
      await expect(page.locator("//th[normalize-space()='Price']")).toBeVisible();
    }
    // [DISABLED] SG: Encompass API Verification
    // await stepGroups.stepGroup_SG_Encompass_API_Verification(page, vars);
  });
});
