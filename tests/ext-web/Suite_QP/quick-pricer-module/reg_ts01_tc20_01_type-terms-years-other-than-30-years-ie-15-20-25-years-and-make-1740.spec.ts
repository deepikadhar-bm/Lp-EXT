import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC20_01_Type terms years other than 30 years i.e. 15, 20, 25 years and make sure you get the results', async ({ page }) => {
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
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await page.locator("//label[text()=\"Term Years\"]").scrollIntoViewIfNeeded();
    await expect(page.locator("//label[text()=\"Term Years\"]/../input")).toBeVisible();
    await page.locator("//label[text()=\"Term Years\"]/../input").clear();
    await page.locator("//label[text()=\"Term Years\"]/../input").fill("15,20,30");
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"20\")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toBeVisible();
    await page.locator("//label[text()=\"Term Years\"]/../input").clear();
    await page.locator("//label[text()=\"Term Years\"]/../input").fill("15,20");
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"20\")]")).toBeVisible();
    await page.locator("//label[text()=\"Term Years\"]/../input").clear();
    await page.locator("//label[text()=\"Term Years\"]/../input").fill("15,30");
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toBeVisible();
    await page.locator("//label[text()=\"Term Years\"]/../input").clear();
    await page.locator("//label[text()=\"Term Years\"]/../input").fill("20,30");
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"20\")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toBeVisible();
    await page.locator("//label[text()=\"Term Years\"]/../input").clear();
    await page.locator("//label[text()=\"Term Years\"]/../input").fill("15");
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]")).toBeVisible();
    await page.locator("//label[text()=\"Term Years\"]/../input").clear();
    await page.locator("//label[text()=\"Term Years\"]/../input").fill("20");
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    // [DISABLED] Wait until the text Retrieving results, please wait. is absent on the current page
    // await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"20\")]")).toBeVisible();
    await page.locator("//label[text()=\"Term Years\"]/../input").clear();
    await page.locator("//label[text()=\"Term Years\"]/../input").fill("30");
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    // [DISABLED] Wait until the text Retrieving results, please wait. is absent on the current page
    // await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
