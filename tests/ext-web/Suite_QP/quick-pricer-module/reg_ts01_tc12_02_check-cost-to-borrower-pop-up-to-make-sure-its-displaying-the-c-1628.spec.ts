import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC12_02_Check Cost to Borrower Pop Up to make sure it\\\'s displaying the correct info(CustomUI)', async ({ page }) => {
    // Prerequisite: REG_TS01_TC12_01_Check Cost to Borrower Pop Up to make sure it's displaying the correct info(Default
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    if (true) /* Element Cost to Borrower(Quick Pricer) is visible */ {
      await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    } else if (true) /* Element Cost to Borrower(Quick Pricer) is not visible */ {
      if (true) /* Element Configuration Icon is visible */ {
        await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
        await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
        await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
        await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").scrollIntoViewIfNeeded();
        await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").click();
        await page.locator("//input[@id=\"keyColQuickPricer59costToBorrower\"]").scrollIntoViewIfNeeded();
        await stepGroups.stepGroup_Cost_Borrowerautomation_donot_touch(page, vars);
        await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
        await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
        await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
        await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
        await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
        await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
      }
    }
    vars["CostToBorrowerValueTable"] = await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div[1]").getAttribute('title') || '';
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div[1]").click();
    await page.locator("//h5[text()[normalize-space() = \"Fees and Costs\"]]").waitFor({ state: 'visible' });
    vars["TotalFeeAmountPopup"] = await page.locator("//th[contains(text(),\"Total Fee Amount\")]/..//span").getAttribute('title') || '';
    expect(String(vars["CostToBorrowerValueTable"])).toBe(vars["TotalFeeAmountPopup"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
