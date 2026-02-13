import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Copy of (REG_TS01_TC27_01)', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await page.locator("//label[@for=\"qmResultTypeQuickPricer\"]").click();
      await page.locator("//label[contains(@for,'pricer-optionsQuickPricer')]").click();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").scrollIntoViewIfNeeded();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 1"]);
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[contains(@for,'search-fieldsQuickPricer')]")).toBeVisible();
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").click();
      await page.locator("//input[contains(@id ,\"ausQuickPricer\")]/..//label[text()=\"AUS\"]").scrollIntoViewIfNeeded();
      await stepGroups.stepGroup_Enabling_AUS_Checkbox_in_Search_FieldsConfig(page, vars);
      await stepGroups.stepGroup_AUS_in_Search_Fields_under_Quick_Pricer_in_Config(page, vars);
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await page.locator("//label[contains(text(),'AUS')]").scrollIntoViewIfNeeded();
    await expect(page.locator("//label[contains(text(),'AUS')]")).toBeVisible();
    await page.locator("//label[text()=\"AUS\"]/..//div[contains(@class, \"aus\")]").click();
    if (String(vars["NonConforming"]) === String("checked")) {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"Non Conforming\"]")).toBeVisible();
    } else {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"Non Conforming\"]")).toBeVisible();
    }
    if (String(vars["GuaranteedUnderwritingService"]) === String("checked")) {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"Guaranteed Underwriting Service\"]")).toBeVisible();
    } else {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"Guaranteed Underwriting Service\"]")).toBeVisible();
    }
    if (String(vars["ManualUnderWriting"]) === String("checked")) {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"Manual Underwriting\"]")).toBeVisible();
    } else {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"Manual Underwriting\"]")).toBeVisible();
    }
    if (String(vars["LP"]) === String("checked")) {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"LP\"]")).toBeVisible();
    } else {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"LP\"]")).toBeVisible();
    }
    if (String(vars["DU"]) === String("checked")) {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"DU\"]")).toBeVisible();
    } else {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[normalize-space(text())=\"DU\"]")).toBeVisible();
    }
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
