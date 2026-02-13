import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC29_01_Base 0 and Base 100', async ({ page }) => {
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
      await page.locator("//label[@for=\"result-settingsQuickPricer\"]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Base 100 Checkbox is checked */ {
        await page.locator("(//input[@type=\"checkbox\" and contains(@class, 'custom-control-input')])[25]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("(//input[@type=\"checkbox\" and contains(@class, 'custom-control-input')])[25]")).toBeVisible();
      } else {
        await expect(page.locator("(//input[@type=\"checkbox\" and contains(@class, 'custom-control-input')])[25]")).toBeVisible();
      }
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").scrollIntoViewIfNeeded();
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").click();
      if (true) /* Checkbox Show Price in Dollars Checkbox is unchecked */ {
        await expect(page.locator("//input[@id=\"keyColQuickPricerpriceInDollars\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"keyColQuickPricerpriceInDollars\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColQuickPricerpriceInDollars\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    vars["PriceColumnDataValue"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]//div[@data])[1]").getAttribute('title') || '';
    vars["PriceColumnDataAfterSubtraction"] = (parseFloat(String("100")) - parseFloat(String(vars["PriceColumnDataValue"]))).toFixed(3);
    await expect(page.locator("//a[text()[normalize-space() = \"Price\"]]")).toBeVisible();
    if (true) /* Element Price Toggle -Green Color is not visible */ {
      await page.locator("//i[@class='far fa-retweet-alt ml-1 text-primary']").click();
    } else {
      await page.locator("//i[@class='fal fa-retweet-alt ml-1 text-success']").click();
    }
    vars["PriceColumnDataExpected"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]//div[@data])[1]").getAttribute('title') || '';
    expect(String(vars["PriceColumnDataAfterSubtraction"])).toBe(vars["PriceColumnDataExpected"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
