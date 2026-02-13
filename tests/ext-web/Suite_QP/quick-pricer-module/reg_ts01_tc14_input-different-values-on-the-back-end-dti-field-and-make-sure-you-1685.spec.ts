import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC14_Input different values on the Back-End DTI field and make sure you get the results', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error Popup is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").scrollIntoViewIfNeeded();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 2"]);
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").scrollIntoViewIfNeeded();
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").click();
      await page.locator("//label[@for=\"backendDTIQuickPricer\"]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Backend DTI Checkbox(Default UI) is unchecked */ {
        await expect(page.locator("//input[@id=\"backendDTIQuickPricer\"]")).toBeVisible();
        vars["BackendDTI"] = "unchecked";
      } else {
        await expect(page.locator("//input[@id=\"backendDTIQuickPricer\"]")).toBeVisible();
        vars["BackendDTI"] = "checked";
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    if (String(vars["BackendDTI"]) === String("checked")) {
      await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
      await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
      await expect(page.locator("//label[@for=\"dti\"]")).toBeVisible();
    } else if (String(vars["BackendDTI"]) === String("unchecked")) {
      await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
      await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
      await expect(page.locator("//label[@for=\"dti\"]")).toBeVisible();
    }
    if (String(vars["BackendDTI"]) === String("unchecked")) {
      if (true) /* Element Configuration Icon is visible */ {
        await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
        await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").scrollIntoViewIfNeeded();
        await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").click();
        await page.locator("//label[@for=\"backendDTIQuickPricer\"]").scrollIntoViewIfNeeded();
        if (true) /* Checkbox Backend DTI Checkbox(default ui) is checked */ {
          await expect(page.locator("//input[@id=\"backendDTIQuickPricer\"]")).toBeVisible();
        } else {
          await page.locator("//input[@id=\"backendDTIQuickPricer\"]").evaluate(el => (el as HTMLElement).click());
          await expect(page.locator("//input[@id=\"backendDTIQuickPricer\"]")).toBeVisible();
        }
        vars["BackendDTI"] = "checked";
        await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
      }
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await page.locator("//label[@for=\"dti\"]").scrollIntoViewIfNeeded();
    await expect(page.locator("//label[@for=\"dti\"]")).toBeVisible();
    await page.locator("//label[text()=\"Back-End DTI\"]/..//input[@id=\"backendDTI\"]").clear();
    vars["GeneratedValue"] = String(Math.floor(Math.random() * (99 - 1 + 1)) + 1);
    await page.locator("//label[text()=\"Back-End DTI\"]/..//input[@id=\"backendDTI\"]").fill(vars["GeneratedValue"]);
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
