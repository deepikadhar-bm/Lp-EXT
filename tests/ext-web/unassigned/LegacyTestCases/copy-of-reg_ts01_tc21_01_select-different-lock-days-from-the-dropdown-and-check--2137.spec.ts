import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Copy of (REG_TS01_TC21_01_Select different Lock Days from the dropdown and check the pricing results)', async ({ page }) => {
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
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").scrollIntoViewIfNeeded();
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").click();
      await page.locator("//input[@id=\"keyColQuickPricerlockPeriod\"]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Show Lock Period Checkbox is checked */ {
        await expect(page.locator("//input[@id='keyColQuickPricerlockPeriod']")).toBeVisible();
      } else {
        await page.locator("//input[@id='keyColQuickPricerlockPeriod']").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id='keyColQuickPricerlockPeriod']")).toBeVisible();
      }
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").scrollIntoViewIfNeeded();
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").click();
      await page.locator("//input[@id=\"keyFieldQuickPricerlockDays\"]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Lock Days is checked */ {
        await expect(page.locator("//input[@id=\"keyFieldQuickPricerlockDays\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"keyFieldQuickPricerlockDays\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyFieldQuickPricerlockDays\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await page.locator("//label[contains(text(),\"Lock Days\")]").scrollIntoViewIfNeeded();
    await page.locator("//select[@id='dayLocks']").click();
    await page.locator("//option[text()=\"45 days \"]").scrollIntoViewIfNeeded();
    await page.locator("//option[text()=\"45 days \"]").click();
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Lock Period\"]]")).toBeVisible();
    for (let i = 0; i < await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").count(); i++) {
      expect(await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").nth(i).getAttribute("data-value")).toBe(String("45"));
    }
    await page.locator("//label[contains(text(),\"Lock Days\")]").scrollIntoViewIfNeeded();
    await page.locator("//select[@id='dayLocks']").click();
    await page.locator("//option[text()=\"15 days \"]").scrollIntoViewIfNeeded();
    await page.locator("//option[text()=\"15 days \"]").click();
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Lock Period\"]]")).toBeVisible();
    for (let i = 0; i < await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").count(); i++) {
      expect(await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").nth(i).getAttribute("data-value")).toBe(String("15"));
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
