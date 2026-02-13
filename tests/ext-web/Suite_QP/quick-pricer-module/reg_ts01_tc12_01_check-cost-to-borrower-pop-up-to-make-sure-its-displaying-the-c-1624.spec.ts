import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC12_01_Check Cost to Borrower Pop Up to make sure it\\\'s displaying the correct info(DefaultUI)', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").scrollIntoViewIfNeeded();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 1"]);
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    if (true) /* Element Cost to Borrower(Quick Pricer) is visible */ {
      await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    } else if (true) /* Element Cost to Borrower(Quick Pricer) is not visible */ {
      if (true) /* Element Configuration Icon is visible */ {
        await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
        await page.locator("//input[@id=\"quickPricersCustomUI\"]").scrollIntoViewIfNeeded();
        await stepGroups.stepGroup_Custom_UI_CheckBox(page, vars);
        await page.locator("//label[@for=\"results-columnsQuickPricer\"]").scrollIntoViewIfNeeded();
        await page.locator("//label[@for=\"results-columnsQuickPricer\"]").click();
        if (true) /* Checkbox CostToBorrower Results Columns is unchecked */ {
          await page.locator("//label[@for=\"keyColQuickPricercostToBorrower\"]/..//input").evaluate(el => (el as HTMLElement).click());
          await expect(page.locator("//label[@for=\"keyColQuickPricercostToBorrower\"]/..//input")).toBeVisible();
        } else {
          await expect(page.locator("//label[@for=\"keyColQuickPricercostToBorrower\"]/..//input")).toBeVisible();
        }
        await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
        await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
        await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
        await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
        await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
        await expect(page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div[1]")).toBeVisible();
      }
    }
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    vars["CostToBorrowerValueTable"] = await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div[1]").getAttribute('title') || '';
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div[1]").click();
    await page.locator("//h5[text()[normalize-space() = \"Fees and Costs\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h5[text()[normalize-space() = \"Fees and Costs\"]]")).toBeVisible();
    vars["TotalFeeAmountValuePopup"] = await page.locator("//th[contains(text(),\"Total Fee Amount\")]/..//span").getAttribute('title') || '';
    await page.locator("//h5[contains(text(),\"Details -\")]/ancestor::div[@class=\"modal-content\"]//button[@class=\"btn modal-close\"]").click();
    expect(String(vars["CostToBorrowerValueTable"])).toBe(vars["TotalFeeAmountValuePopup"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
