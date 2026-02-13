import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC19_After you make changes in the Total Monthly Income and/or ZipCode fields, AMI% field is getting updated', async ({ page }) => {
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
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").scrollIntoViewIfNeeded();
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").click();
      if (true) /* Checkbox AmI Information Checkbox is checked */ {
        await expect(page.locator("//input[@id=\"keyFieldQuickPriceramiInformation\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"keyFieldQuickPriceramiInformation\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyFieldQuickPriceramiInformation\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await page.locator("//span[contains(text(),'AMI Information')]").scrollIntoViewIfNeeded();
    await page.locator("//span[contains(text(),'AMI Information')]").click();
    await expect(page.locator("//INPUT[@id='totalMonthlyIncome']")).toBeVisible();
    await expect(page.locator("//label[text()=\"% of AMI\"]/..//input")).toBeVisible();
    await page.locator("//label[text()=\"% of AMI\"]/..//input").scrollIntoViewIfNeeded();
    vars["TotalMonthlyIncomeTextUI"] = await page.locator("//INPUT[@id='totalMonthlyIncome']").inputValue() || '';
    vars["TotalMonthlyIncomeTextUI1"] = String(vars["TotalMonthlyIncomeTextUI"]).replace(/\$\,/g, '');
    vars["TotalMonthlyIncomeTextUI2"] = String(vars["TotalMonthlyIncomeTextUI1"]).trim();
    vars["TotalMonthlyIncomeExpected"] = (parseFloat(String("10000")) + parseFloat(String(vars["TotalMonthlyIncomeTextUI2"]))).toFixed(0);
    vars["AMIInputFieldUI"] = await page.locator("//label[text()=\"% of AMI\"]/..//input").inputValue() || '';
    await page.locator("//INPUT[@id='totalMonthlyIncome']").clear();
    await page.locator("//INPUT[@id='totalMonthlyIncome']").fill(vars["TotalMonthlyIncomeExpected"]);
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    vars["AMIInputFieldExpected"] = await page.locator("//label[text()=\"% of AMI\"]/..//input").inputValue() || '';
    expect(String(vars["AMIInputFieldUI"])).toBe(vars["AMIInputFieldExpected"]);
    await page.locator("(//label[text()='Zip'])[1]").scrollIntoViewIfNeeded();
    vars["ZipInputSearchField"] = await page.locator("//label[@for=\"zip\"]/..//input").inputValue() || '';
    if (String(vars["ZipInputSearchField"]).includes(String(testData["Zip code 1"]))) {
      await page.locator("//label[@for=\"zip\"]/..//input").clear();
      await page.locator("//label[@for=\"zip\"]/..//input").fill(testData["Zip code 2"]);
    } else {
      await page.locator("//label[@for=\"zip\"]/..//input").clear();
      await page.locator("//label[@for=\"zip\"]/..//input").fill(testData["Zip code 1"]);
    }
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await page.locator("//span[contains(text(),'AMI Information')]").scrollIntoViewIfNeeded();
    await page.locator("//span[contains(text(),'AMI Information')]").click();
    vars["AMIInputFieldAfterZipcodeChange"] = await page.locator("//label[text()=\"% of AMI\"]/..//input").inputValue() || '';
    expect(String(vars["AMIInputFieldExpected"])).toBe(vars["AMIInputFieldAfterZipcodeChange"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
