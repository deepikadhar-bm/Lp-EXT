import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC17_Able to toggle Auto Search On/Off', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
      await page.locator("//label[@for=\"ppQuickPricerdefaultToAutoSearch\"]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Default To Auto-Search is unchecked */ {
        await page.locator("(//label[normalize-space()='Default To Auto-Search'])[1]").click();
        await expect(page.locator("//label[@for=\"ppQuickPricerdefaultToAutoSearch\"]/..//input")).toBeVisible();
      } else {
        await expect(page.locator("//label[@for=\"ppQuickPricerdefaultToAutoSearch\"]/..//input")).toBeVisible();
      }
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").scrollIntoViewIfNeeded();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 2"]);
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
      await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
      await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
      await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
      await expect(page.locator("//input[@id=\"autoSearch\"]")).toBeVisible();
      await page.locator("//label[@for=\"zip\"]/..//input").clear();
      await page.locator("//label[@for=\"zip\"]/..//input").fill(testData["Zip code 1"]);
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
      await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
      await page.locator("//label[@for=\"ppQuickPricerdefaultToAutoSearch\"]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Default To Auto-Search is checked */ {
        await page.locator("(//label[normalize-space()='Default To Auto-Search'])[1]").click();
        await expect(page.locator("//label[@for=\"ppQuickPricerdefaultToAutoSearch\"]/..//input")).toBeVisible();
      } else {
        await expect(page.locator("//label[@for=\"ppQuickPricerdefaultToAutoSearch\"]/..//input")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
      await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
      await expect(page.locator("//input[@id=\"autoSearch\"]")).toBeVisible();
      await page.locator("//label[@for=\"zip\"]/..//input").clear();
      await page.locator("//label[@for=\"zip\"]/..//input").fill(testData["Zip code 2"]);
      await expect(page.getByText("Search has changed")).toBeVisible();
    } else {
      await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    }
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//input[@id=\"autoSearch\"]").check();
      await expect(page.locator("//input[@id=\"autoSearch\"]")).toBeVisible();
    } else {
      await expect(page.locator("//input[@id=\"autoSearch\"]")).toBeVisible();
    }
    await page.locator("//label[@for=\"zip\"]/..//input").clear();
    await page.locator("//label[@for=\"zip\"]/..//input").fill(testData["Zip code 1"]);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    // [DISABLED] Verify that the current page displays text Retrieving results, please wait.
    // await expect(page.getByText("Retrieving results, please wait.")).toBeVisible();
    if (true) /* Checkbox Auto search on change Checkbox is checked */ {
      await page.locator("//input[@id=\"autoSearch\"]").click();
      await expect(page.locator("//input[@id=\"autoSearch\"]")).toBeVisible();
    } else {
      await expect(page.locator("//input[@id=\"autoSearch\"]")).toBeVisible();
    }
    await page.locator("//label[@for=\"zip\"]/..//input").clear();
    await page.locator("//label[@for=\"zip\"]/..//input").fill(testData["Zip code 2"]);
    await expect(page.getByText("Search has changed")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
