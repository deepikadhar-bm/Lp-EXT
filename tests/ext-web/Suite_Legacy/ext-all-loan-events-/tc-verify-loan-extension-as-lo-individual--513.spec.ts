import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT: All Loan Events ', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Loan Extension as LO [ Individual ]', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    // [DISABLED] Store 240509271 in LOAN ID
    // vars["LOAN ID"] = "240509271";
    if (String(testData["Execution Status"]) === String("N")) {
      await stepGroups.stepGroup_SG_Login_as_LO(page, vars);
      await stepGroups.stepGroup_Search_Loan_from_EXT_to_Get_LOAN_ID(page, vars);
      await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
      await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
      await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
      await expect(page.locator("//span[contains(text(),\"Locked\")]")).toBeVisible();
      await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
      await page.locator("//button[contains(text(),\"Extension  Request\")]").click();
      await page.locator("//SELECT[@id='l-e']").waitFor({ state: 'visible' });
      vars["Days"] = "5";
      await page.locator("//SELECT[@id='l-e']").selectOption({ index: parseInt(vars["Days"]) });
      await page.waitForLoadState('networkidle');
      await expect(page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1] | //div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV//BUTTON[text()=\" Confirm \"]")).toBeVisible();
      await page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1] | //div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV//BUTTON[text()=\" Confirm \"]").click();
      await stepGroups.stepGroup_SG_Status_Verification(page, vars);
      await expect(page.locator("//li[contains(text(),\"Requested Days\")]")).toContainText(vars["ExtensionDays"]);
      await page.locator("//a[contains(text(),\"More Details ...\")]").click();
      await expect(page.locator("//th[contains(text(),\"Extension\")]")).toContainText(vars["ExtensionDays"]);
      await page.locator("//h6[contains(text(),\"Pricing Adjustment\")]").scrollIntoViewIfNeeded();
      await page.screenshot({ fullPage: true });
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
      await stepGroups.stepGroup_SG_Logout(page, vars);
    }
    // [DISABLED] SG: Search for Loan
    // await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    // [DISABLED] Wait until the current page is loaded completely
    // await page.waitForLoadState('networkidle');
    // [DISABLED] Wait until the element Second Row is not visible
    // await page.locator("(//table/tbody/tr)[2]").waitFor({ state: 'hidden' });
    // [DISABLED] Click on Loan Number
    // await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    // [DISABLED] SG: Fetching Encrypted Loan Number from UI
    // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
      await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
      await expect(page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]")).toBeVisible();
      await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
      await expect(page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]")).toBeVisible();
      if (true) /* Element Extension day alert is visible */ {
        vars["Extension Error Model"] = await page.locator("//div[@class=\"modal-content\"]/app-dlg-message-box/div/div[2]/div/span").textContent() || '';
        await stepGroups.stepGroup_SG_Extension_Alert_Days_Seperation(page, vars);
        await page.locator("//button[@class='btn btn-danger text-uppercase']").click();
        vars["Lock Days and Point"] = await page.locator("//SELECT[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
      } else {
        vars["Lock Days and Point"] = await page.locator("//SELECT[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
      }
    while (true) /* While element Expected Lock Status is not visible on the pag */ {
      // [DISABLED] Wait for 30 seconds
      // await page.waitForTimeout(30000);
      while (!(await page.locator("//body/app-root/div[@class='main-background']/div[@class='theme-wrapper']/app-dlt-main-layout/div[@class='parent-main-layout']/div[@class='main-layout']/app-lp-company-layout/div[@class='container pt-3 pb-3']/app-lp-company-lock/div[@class='card']/div[@class='card-body']/div[@class='data-content']/app-lock-panel[@ng-reflect-price-quote='[object Object]']/div[@class='lock-history-status']/ul[@class='list-group']/div/div[1]/li[1]/div[1]/div[1]/div[1]/div[1]/span[2]").textContent() || '').includes(String(''))) {
        await page.waitForTimeout(30000);
      }
    }
    while (true) /* While element Lock Status Element is not display text Expect */ {
      // [DISABLED] Wait for 30 seconds
      // await page.waitForTimeout(30000);
    }
    // [DISABLED] Verify that the element Duplicate Extension is not displayed
    // await expect(page.locator("(//th[contains(text(),'Extension: ')])[2]")).toBeVisible();
    // [DISABLED] SG: Encompass API Verification
    // await stepGroups.stepGroup_SG_Encompass_API_Verification(page, vars);
  });
});
