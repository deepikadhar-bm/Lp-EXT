import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC16_02_LTV needs to be more than 80% for the MI field to display(Custom UI)', async ({ page }) => {
    // Prerequisite: REG_TS01_TC16_01_LTV needs to be more than 80% for the MI field to display(Default UI)
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await expect(page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]")).toBeVisible();
      // [DISABLED] Scroll down to the element Results columns in configuration (srini test) into view
      // await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").scrollIntoViewIfNeeded();
      await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").click();
      if (true) /* Checkbox Show MI Checkbox(Custom UI) is checked */ {
        await expect(page.locator("//input[@id=\"keyColQuickPricer59mi\"]")).toBeVisible();
        await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
      } else {
        await page.locator("//input[@id=\"keyColQuickPricer59mi\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColQuickPricer59mi\"]")).toBeVisible();
        await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
      }
      await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
      await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").waitFor({ state: 'visible' });
      await stepGroups.stepGroup_Selecting_Automation_Dont_Touch_Without_Search(page, vars);
    } else {
      await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
      await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
      await stepGroups.stepGroup_Selecting_Automation_Dont_Touch_Without_Search(page, vars);
    }
    await expect(page.locator("//label[normalize-space(text())=\"LTV\"]")).toBeVisible();
    vars["LTVValueCustomUI"] = await page.locator("//label[@aria-label=\"LTV\"]/..//input[@placeholder=\"LTV\"]").inputValue() || '';
    if (String(vars["LTVValueCustomUI"]) > String("80.000 %")) {
      await page.locator("//label[normalize-space(text())=\"PMI Type\"]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[normalize-space(text())=\"PMI Type\"]")).toBeVisible();
      await page.locator("//select[@aria-label=\"PMI Type\"]").click();
      await page.locator("//select[@aria-label=\"PMI Type\"]").selectOption({ label: "Borrower Paid MI" });
      await expect(page.locator("//label[normalize-space(text())=\"MI Company\"]")).toBeVisible();
      await page.locator("//select[@aria-label=\"MI Company\"]").click();
      await page.locator("//select[@aria-label=\"MI Company\"]").selectOption({ label: "Enact" });
      await expect(page.locator("//button[@aria-label=\"Search\"]")).toBeVisible();
      await page.locator("//button[@aria-label=\"Search\"]").click();
      await page.getByText("Retrieving results, please wait.\r").waitFor({ state: 'hidden' });
      await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
      await page.locator("(//table/thead//th[text()=\" MI \"])[1]").waitFor({ state: 'visible' });
    } else {
      expect(String(vars["LTVValueCustomUI"])).toBe("80.000 %");
      await page.locator("//input[@placeholder=\"LTV\"]").clear();
      vars["NewLTVValue"] = String(Math.floor(Math.random() * (90 - 81 + 1)) + 81);
      await page.locator("//input[@placeholder=\"LTV\"]").fill(vars["NewLTVValue"]);
      await page.keyboard.press('Enter');
      await page.locator("//label[normalize-space(text())=\"PMI Type\"]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[normalize-space(text())=\"PMI Type\"]")).toBeVisible();
      await page.locator("//select[@aria-label=\"PMI Type\"]").click();
      await page.locator("//select[@aria-label=\"PMI Type\"]").selectOption({ label: "Borrower Paid MI" });
      await expect(page.locator("//label[normalize-space(text())=\"MI Company\"]")).toBeVisible();
      await page.locator("//select[@aria-label=\"MI Company\"]").click();
      await page.locator("//select[@aria-label=\"MI Company\"]").selectOption({ label: "Enact" });
      await expect(page.locator("//button[@aria-label=\"Search\"]")).toBeVisible();
      await page.locator("//button[@aria-label=\"Search\"]").click();
      await page.getByText("Retrieving results, please wait.\r").waitFor({ state: 'hidden' });
      await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
      await page.locator("(//table/thead//th[text()=\" MI \"])[1]").waitFor({ state: 'visible' });
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
