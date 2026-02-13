import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC16_01_LTV needs to be more than 80% for the MI field to display(Default UI)', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
      await page.locator("//input[@id=\"quickPricersCustomUI\"]").scrollIntoViewIfNeeded();
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").scrollIntoViewIfNeeded();
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").click();
      if (true) /* Checkbox Show MI Checkbox is checked */ {
        await expect(page.locator("//input[@id='keyColQuickPricermi']")).toBeVisible();
        await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
      } else {
        await page.locator("//input[@id='keyColQuickPricermi']").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id='keyColQuickPricermi']")).toBeVisible();
        await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
      }
      await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    } else {
      await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    }
    await expect(page.locator("//label[normalize-space(text())=\"LTV\"]")).toBeVisible();
    vars["LTVValueSearchField"] = await page.locator("//input[@placeholder=\"LTV\"]").inputValue() || '';
    if (String(vars["LTVValueSearchField"]) > String("80.000 %")) {
      await page.locator("//label[@for=\"PMIType\"]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[@for=\"PMIType\"]")).toBeVisible();
      await page.locator("//select[@id='PMIType']").click();
      await page.locator("//select[@id='PMIType']").selectOption({ index: parseInt("02") });
      await expect(page.locator("//label[contains(normalize-space(text()), \"Select MI Company\")] ")).toBeVisible();
      await page.locator("//select[@id='miCompany']").click();
      await page.locator("//select[@id='miCompany']").selectOption({ index: parseInt("01") });
      await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
      await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
      await expect(page.locator("(//table/thead//th[text()=\" MI \"])[1]")).toBeVisible();
    } else {
      expect(String(vars["LTVValueSearchField"])).toBe("80.000 %");
      await page.locator("//input[@placeholder=\"LTV\"]").clear();
      vars["NewLTV Value"] = String(Math.floor(Math.random() * (90 - 81 + 1)) + 81);
      await page.locator("//input[@placeholder=\"LTV\"]").fill(vars["NewLTV Value"]);
      await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
      await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
      await page.locator("//label[@for=\"PMIType\"]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[@for=\"PMIType\"]")).toBeVisible();
      await page.locator("//select[@id='PMIType']").click();
      await page.locator("//select[@id='PMIType']").selectOption({ index: parseInt("02") });
      await expect(page.locator("//label[contains(normalize-space(text()), \"Select MI Company\")] ")).toBeVisible();
      await page.locator("//select[@id='miCompany']").click();
      await page.locator("//select[@id='miCompany']").selectOption({ index: parseInt("01") });
      await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
      await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
      await expect(page.locator("(//table/thead//th[text()=\" MI \"])[1]")).toBeVisible();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
