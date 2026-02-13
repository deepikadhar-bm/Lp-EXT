import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT: All Loan Events ', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Request Loan Concession as LO [ Individual ]', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    // [DISABLED] Store 240508874 in LOAN ID
    // vars["LOAN ID"] = "240508874";
    // [DISABLED] SG: Search for Loan
    // await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    // [DISABLED] Wait until the current page is loaded completely
    // await page.waitForLoadState('networkidle');
    // [DISABLED] Click on Loan Number
    // await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    if (String(testData["Execution Status"]) === String("N")) {
      await stepGroups.stepGroup_SG_Login_as_LO(page, vars);
      await stepGroups.stepGroup_Search_Loan_from_EXT_to_Get_LOAN_ID(page, vars);
      await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
      await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
      await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
      await expect(page.locator("//span[contains(text(),\"Locked\")]")).toBeVisible();
      await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
      await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").click();
      await page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1] | //div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV//BUTTON[text()=\" Confirm \"]").waitFor({ state: 'visible' });
      await page.locator("//INPUT[@id='feePoint'] | //INPUT[@name='Point']").fill(testData["Points"]);
      vars["Concession Fee"] = await page.locator("//INPUT[@id='feePoint'] | //INPUT[@name='Point']").textContent() || '';
      await page.locator("//SELECT[@id='reasons'] | //SELECT[@aria-label='Reasons']").selectOption({ label: testData["Concession Reason 1"] });
      vars["Concession Amount"] = await page.locator("//label[text()=\"Amount\"]/..//input").getAttribute('title') || '';
      await expect(page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1] | //div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV//BUTTON[text()=\" Confirm \"]")).toBeVisible();
      await page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1] | //div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV//BUTTON[text()=\" Confirm \"]").click();
      await page.locator("//span[contains(text(),\"Price Concession Requested (Post-Lock)\")]").waitFor({ state: 'visible' });
      await stepGroups.stepGroup_SG_Status_Verification(page, vars);
      await expect(page.locator("(//div[contains(text(),\"Reason\")])[1]/../div[2] | //span[contains(text(),\"Reason\")]")).toContainText(testData["Concession Reason 1"]);
      await expect(page.locator("(//ul[@class='lockEventExceptionInfo_list'])[1]")).toContainText(testData["Points"]);
      await expect(page.locator("//span[contains(text(),\"Price Concession Requested (Post-Lock)\")]/following-sibling::button[contains(@class, 'show-prices-btn') and contains(@class, 'text-primary')]")).toBeVisible();
      await page.locator("//span[contains(text(),\"Price Concession Requested (Post-Lock)\")]/following-sibling::button[contains(@class, 'show-prices-btn') and contains(@class, 'text-primary')]").click();
      await page.locator("//APP-DLP-ELLIE-EXPORT-DIFFERENCES[1]/DIV[1]/DIV[2]/DIV[1]/TABLE[1]/TBODY[1]/TR[1]/TH[2]").waitFor({ state: 'visible' });
      await expect(page.locator("//APP-DLP-ELLIE-EXPORT-DIFFERENCES[1]/DIV[1]/DIV[2]/DIV[1]/TABLE[1]/TBODY[1]/TR[1]/TH[2]")).toBeVisible();
      await expect(page.locator("//APP-DLP-ELLIE-EXPORT-DIFFERENCES[1]/DIV[1]/DIV[2]/DIV[1]/TABLE[1]/TBODY[1]/TR[1]/TH[3]")).toBeVisible();
      await page.locator("//span[@aria-label=\"Close\"]").click();
      await page.locator("//a[normalize-space()='More Details ...']").click();
      vars["Concession Reason 1"] = String('') + String('');
      await expect(page.locator("(//th[contains(text(),'Concession:')])[1]")).toContainText(vars["Concession Reason"]);
      await expect(page.locator("//th[contains(text(),\"Concession\")]/../td/div")).toHaveAttribute('aria-label', testData["Points"]);
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
      await stepGroups.stepGroup_SG_Logout(page, vars);
    }
    // [DISABLED] SG: Fetching Encrypted Loan Number from UI
    // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
      await expect(page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]")).toBeVisible();
      await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
      await expect(page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]")).toBeVisible();
      await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
      if (true) /* Element Concession Type is visible */ {
        // [DISABLED] Select option by text FEE in the Concession Type list
        // await page.locator("//select[@aria-label=\"Concession Type\"]").selectOption({ label: " FEE " });
        await page.locator("//select[@aria-label=\"Concession Type\"]").selectOption({ label: "0: FEE" });
        // [DISABLED] Select option by index 0 in the Concession Type list
        // await page.locator("//select[@aria-label=\"Concession Type\"]").selectOption({ index: parseInt("0") });
      }
    // [DISABLED] Select option by index 0 in the Reasons Dropdown list
    // await page.locator("//SELECT[@id='reasons'] | //SELECT[@aria-label='Reasons']").selectOption({ index: parseInt("0") });
    // [DISABLED] Store the value for the attribute ng-reflect-model of the element Reasons Drop Down into a variable Concession Reason
    // vars["Concession Reason"] = await page.locator("//SELECT[@id='reasons'] | //SELECT[@aria-label='Reasons']").getAttribute('title') || '';
      while (!(await page.locator("//body/app-root/div[@class='main-background']/div[@class='theme-wrapper']/app-dlt-main-layout/div[@class='parent-main-layout']/div[@class='main-layout']/app-lp-company-layout/div[@class='container pt-3 pb-3']/app-lp-company-lock/div[@class='card']/div[@class='card-body']/div[@class='data-content']/app-lock-panel[@ng-reflect-price-quote='[object Object]']/div[@class='lock-history-status']/ul[@class='list-group']/div/div[1]/li[1]/div[1]/div[1]/div[1]/div[1]/span[2]").textContent() || '').includes(String(''))) {
        await page.waitForTimeout(30000);
      }
    while (true) /* While element Expected Lock Status is not visible on the pag */ {
      // [DISABLED] Wait for 30 seconds
      // await page.waitForTimeout(30000);
    }
    // [DISABLED] Verify that the element Duplicate Concession not displayed
    // await expect(page.locator("(//th[contains(text(),'Concession:')])[2]")).not.toBeVisible();
    // [DISABLED] Verify that the current page displays text Concession: Points and Fees
    // await expect(page.getByText("Concession: Points and Fees")).toBeVisible();
    // [DISABLED] SG: Encompass API Verification
    // await stepGroups.stepGroup_SG_Encompass_API_Verification(page, vars);
  });
});
