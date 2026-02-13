import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC09_01_Results Filter will be displayed on the pricing page as configured in the Results Settings(Default UI)', async ({ page }) => {
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
      await page.locator("//label[contains(@for,'result-settingsQuickPricer')]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[contains(@for,'result-settingsQuickPricer')]")).toBeVisible();
      if (true) /* Checkbox Show Results Filter Checkbox is checked */ {
        await expect(page.locator("//input[@id='ppQuickPricershowResultsFilter']")).toBeVisible();
        vars["ResultsFilterCheckBox"] = "checked";
      } else {
        await expect(page.locator("//input[@id='ppQuickPricershowResultsFilter']")).toBeVisible();
        vars["ResultsFilterCheckBox"] = "unchecked";
      }
      if (true) /* Checkbox Hide ineligible results tab Checkbox is checked */ {
        await expect(page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']")).toBeVisible();
        vars["HideIneligibleResultTab"] = "checked";
      } else {
        await expect(page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']")).toBeVisible();
        vars["HideIneligibleResultTab"] = "unchecked";
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    } else {
      await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
      if (String(vars["HideIneligibleResultTab"]) === String("checked")) {
        await expect(page.locator("//a[contains (text(), \"Ineligible\")]")).toBeVisible();
      } else if (String(vars["HideIneligibleResultTab"]) === String("unchecked")) {
        await expect(page.locator("//a[contains (text(), \"Ineligible\")]")).toBeVisible();
      }
    }
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    if (String(vars["ResultsFilterCheckBox"]) === String("checked")) {
      await expect(page.locator("//button[@id='result-filter-btn']")).toBeVisible();
    } else if (String(vars["ResultsFilterCheckBox"]) === String("unchecked")) {
      await expect(page.locator("//button[@id='result-filter-btn']")).toBeVisible();
      if (true) /* Element Configuration Icon is visible */ {
        await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
        await page.locator("//label[contains(@for,'result-settingsQuickPricer')]").scrollIntoViewIfNeeded();
        await expect(page.locator("//label[contains(@for,'result-settingsQuickPricer')]")).toBeVisible();
        await page.locator("//input[@id='ppQuickPricershowResultsFilter']").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id='ppQuickPricershowResultsFilter']")).toBeVisible();
        await expect(page.locator("//input[@id='ppQuickPricershowResultsFilter']")).toBeVisible();
        vars["ResultsFilterCheckBox"] = "checked";
        await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
        await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
        await expect(page.locator("//button[@id='result-filter-btn']")).toBeVisible();
      }
    }
    if (String(vars["HideIneligibleResultTab"]) === String("unchecked")) {
      if (true) /* Element Configuration Icon is visible */ {
        await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
        await page.locator("//label[contains(@for,'result-settingsQuickPricer')]").scrollIntoViewIfNeeded();
        await expect(page.locator("//label[contains(@for,'result-settingsQuickPricer')]")).toBeVisible();
        await page.locator("//label[@for='ppQuickPricerhideIneligibleResultsTab']").scrollIntoViewIfNeeded();
        await expect(page.locator("//label[@for='ppQuickPricerhideIneligibleResultsTab']")).toBeVisible();
        if (true) /* Checkbox Hide ineligible results tab Checkbox is unchecked */ {
          await page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']").evaluate(el => (el as HTMLElement).click());
          await expect(page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']")).toBeVisible();
          vars["HideIneligibleResultTab"] = "checked";
          await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
        }
      } else {
        await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
        await expect(page.locator("//label[@for='ppQuickPricerhideIneligibleResultsTab']")).toBeVisible();
      }
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
