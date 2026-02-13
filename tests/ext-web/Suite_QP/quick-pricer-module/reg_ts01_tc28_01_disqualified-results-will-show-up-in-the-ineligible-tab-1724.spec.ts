import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC28_01_Disqualified results will show up in the Ineligible tab.', async ({ page }) => {
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
      await page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Hide ineligible results tab Checkbox is unchecked */ {
        await expect(page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']")).toBeVisible();
      } else {
        await page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    if (await page.locator("//button[@aria-label=\"Search\"]").isVisible()) {
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await page.locator("//a[contains (text(), \"Ineligible\")]").click();
    await page.locator("(//a[normalize-space(text())=\"Price\"])[2]").waitFor({ state: 'visible' });
    await page.locator("(//th[text()[normalize-space() = \"Rate Adj.\"]])[2]").scrollIntoViewIfNeeded();
    await expect(page.locator("(//th[text()[normalize-space() = \"Rate Adj.\"]])[2]")).toBeVisible();
    for (let i = 0; i < await page.locator("(//th[normalize-space(text())='Price Adj'])[2]/ancestor::table//tbody//td[@data-label='COLUMN_NAME_ENUM.ADJ']//span[contains(@class,'text-danger')]").count(); i++) {
      await expect(page.locator("(//th[normalize-space(text())='Price Adj'])[2]/ancestor::table//tbody//td[@data-label='COLUMN_NAME_ENUM.ADJ']//span[contains(@class,'text-danger')]").nth(i)).toHaveText(String("Disq."));
    }
    for (let i = 0; i < await page.locator("(//th[normalize-space(text())='Rate Adj.'])[2]/ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.RATE_ADJUSTMENT\"]//span[contains(@class,'text-danger')]").count(); i++) {
      await expect(page.locator("(//th[normalize-space(text())='Rate Adj.'])[2]/ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.RATE_ADJUSTMENT\"]//span[contains(@class,'text-danger')]").nth(i)).toHaveText(String("Disq."));
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
