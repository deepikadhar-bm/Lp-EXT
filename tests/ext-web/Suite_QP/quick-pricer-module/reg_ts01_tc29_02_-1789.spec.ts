import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC29_02_', async ({ page }) => {
    // Prerequisite: REG_TS01_TC29_01_Base 0 and Base 100
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await page.locator("(//label[contains(@for, \"pricer-optionsQuickPricer\")])[last()]").click();
      await page.locator("(//label[text()=\"Result Settings\" and contains(@for,\"QuickPricer\")])[last()]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Base 100 Custom UI is checked */ {
        await page.locator("//input[@id=\"ppQuickPricer59Base100\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"ppQuickPricer59Base100\"]")).toBeVisible();
      } else {
        await expect(page.locator("//input[@id=\"ppQuickPricer59Base100\"]")).toBeVisible();
      }
      await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").scrollIntoViewIfNeeded();
      await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").click();
      await page.locator("//input[@id=\"keyColQuickPricer59priceInDollars\"]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Show Price in Dollars(CustomUI) is checked */ {
        await page.locator("//input[@id=\"keyColQuickPricer59priceInDollars\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColQuickPricer59priceInDollars\"]")).toBeVisible();
      } else {
        await expect(page.locator("//input[@id=\"keyColQuickPricer59priceInDollars\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Price\"]]")).toBeVisible();
    vars["PriceValueCustomUI(Actual)"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]//div[@data])[1]").getAttribute('title') || '';
    vars["PriceValue(Actual)"] = (parseFloat(String("100")) - parseFloat(String(vars["PriceValueCustomUI(Actual)"]))).toFixed(3);
    if (true) /* Element Price Toggle -Green Color is not visible */ {
      await page.locator("//i[@class='far fa-retweet-alt ml-1 text-primary']").click();
    } else {
      await page.locator("//i[@class='fal fa-retweet-alt ml-1 text-success']").click();
    }
    vars["PriceValueCustomUI(Expected)"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]//div[@data])[1]").getAttribute('title') || '';
    expect(String(vars["PriceValue(Actual)"])).toBe(vars["PriceValueCustomUI(Expected)"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
