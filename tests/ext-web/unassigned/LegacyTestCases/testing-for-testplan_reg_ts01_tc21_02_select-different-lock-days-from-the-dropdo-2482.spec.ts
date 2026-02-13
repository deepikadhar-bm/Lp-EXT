import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Testing for Testplan_REG_TS01_TC21_02_Select different Lock Days from the dropdown and check the pricing results)', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await expect(page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]")).toBeVisible();
      // [DISABLED] Scroll down to the element Results Columns In Configuration (Automation donot touch) into view
      // await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").scrollIntoViewIfNeeded();
      await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").click();
      // [DISABLED] Verify that the element Show Lock Period Checkbox(Custom UI) Test is present and With Scrollable TRUE
      // await expect(page.locator("(//input[contains(@id,\"keyColQuickPricer\") and contains(@id,\"lockPeriod\")])[last()]")).toBeVisible();
      await page.locator("(//input[contains(@id,\"keyColQuickPricer\") and contains(@id,\"lockPeriod\")])[last()]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Show Lock Period Checkbox(Custom UI) Test is checke */ {
        await expect(page.locator("(//input[contains(@id,\"keyColQuickPricer\") and contains(@id,\"lockPeriod\")])[last()]")).toBeVisible();
      } else {
        await page.locator("(//input[contains(@id,\"keyColQuickPricer\") and contains(@id,\"lockPeriod\")])[last()]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("(//input[contains(@id,\"keyColQuickPricer\") and contains(@id,\"lockPeriod\")])[last()]")).toBeVisible();
      }
      await page.locator("(//label[contains(@for,\"QuickPricer\") and contains(@for,\"search-fields\")])[last()]").scrollIntoViewIfNeeded();
      // [DISABLED] Verify that the element Search Fields Custom UI(Test) is present and With Scrollable TRUE
      // await expect(page.locator("(//label[contains(@for,\"QuickPricer\") and contains(@for,\"search-fields\")])[last()]")).toBeVisible();
      await page.locator("(//label[contains(@for,\"QuickPricer\") and contains(@for,\"search-fields\")])[last()]").click();
      // [DISABLED] Verify that the element Lock Days in Search Field Custom UI(Test) is present and With Scrollable TRUE
      // await expect(page.locator("(//input[contains(@id,\"keyFieldQuickPricer\") and contains(@id, \"lockDays\")])[last()]")).toBeVisible();
      await page.locator("(//input[contains(@id,\"keyFieldQuickPricer\") and contains(@id, \"lockDays\")])[last()]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Lock Days in Search Field Custom UI(Test) is checke */ {
        await expect(page.locator("(//input[contains(@id,\"keyFieldQuickPricer\") and contains(@id, \"lockDays\")])[last()]")).toBeVisible();
      } else {
        await page.locator("(//input[contains(@id,\"keyFieldQuickPricer\") and contains(@id, \"lockDays\")])[last()]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("(//input[contains(@id,\"keyFieldQuickPricer\") and contains(@id, \"lockDays\")])[last()]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
      await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
      await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    } else {
      await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
      await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    }
    await stepGroups.stepGroup_Selecting_Automation_Dont_Touch_Without_Search(page, vars);
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_Selecting_Conventional_Loan_Type(page, vars);
    await page.locator("//label[contains(text(),\"Lock Days\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"item active lock-days-\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"item active lock-days-\")]").click();
    }
    await expect(page.locator("//*[contains(@class,\"item active lock-days-\")]")).toBeVisible();
    await page.locator("//li//span[contains(text(),\"45 days\")]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    for (let i = 0; i < await page.locator("//th[normalize-space(text())='Lock Period']/ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").count(); i++) {
      expect(await page.locator("//th[normalize-space(text())='Lock Period']/ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").nth(i).getAttribute("data-value")).toBe(String("45"));
    }
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await page.locator("//label[contains(text(),\"Lock Days\")]/..//button").waitFor({ state: 'visible' });
    await page.locator("//label[contains(text(),\"Lock Days\")]/..//button").click();
    await page.locator("//li//span[contains(text(),\"45 days\")]").scrollIntoViewIfNeeded();
    while (await page.locator("//*[contains(@class,\"item active lock-days-\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"item active lock-days-\")]").click();
    }
    await expect(page.locator("//*[contains(@class,\"item active lock-days-\")]")).toBeVisible();
    await page.locator("//span[text()=\" 15 days  \"]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    for (let i = 0; i < await page.locator("//th[normalize-space(text())='Lock Period']/ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").count(); i++) {
      expect(await page.locator("//th[normalize-space(text())='Lock Period']/ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").nth(i).getAttribute("data-value")).toBe(String("15"));
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
