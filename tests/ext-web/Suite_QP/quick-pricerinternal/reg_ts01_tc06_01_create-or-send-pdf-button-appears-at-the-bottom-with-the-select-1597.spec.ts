import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer(internal)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC06_01_Create or Send PDF Button appears at the bottom with the selected Programs and a user is able to download the pricing comparison document---', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await expect(page.locator("//a[@aria-label=\"Config\"]//span")).toBeVisible();
      await page.locator("//a[@aria-label=\"Config\"]//span").click();
      await expect(page.locator("//h4[text()[normalize-space() = \"Pricer Configs\"]]")).toBeVisible();
      await expect(page.locator("//a[normalize-space()='Quick Pricer Configuration']")).toBeVisible();
      await page.locator("//a[normalize-space()='Quick Pricer Configuration']").click();
      await expect(page.locator("//label[contains(@for,'pricer-optionsQuickPricer')]")).toBeVisible();
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").scrollIntoViewIfNeeded();
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").click();
      await page.locator("//input[@id='keyColQuickPricerprice']").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Show Price Checkbox is checked */ {
        await expect(page.locator("//input[@id='keyColQuickPricerprice']")).toBeVisible();
        if (true) /* Checkbox Show Price in Dollars Checkbox in Default is checke */ {
          await expect(page.locator("//input[@id=\"keyColQuickPricerpriceInDollars\"]")).toBeVisible();
        } else {
          await page.locator("//input[@id=\"keyColQuickPricerpriceInDollars\"]").evaluate(el => (el as HTMLElement).click());
        }
      } else {
        await expect(page.locator("//input[@id='keyColQuickPricerprice']")).toBeVisible();
        await page.locator("//input[@id='keyColQuickPricerprice']").evaluate(el => (el as HTMLElement).click());
        if (true) /* Checkbox Show Price in Dollars Checkbox in Default is checke */ {
          await expect(page.locator("//input[@id=\"keyColQuickPricerpriceInDollars\"]")).toBeVisible();
        } else {
          await page.locator("//input[@id=\"keyColQuickPricerpriceInDollars\"]").evaluate(el => (el as HTMLElement).click());
        }
      }
      await page.locator("//label[contains(@for,'pricer-optionsQuickPricer')]").scrollIntoViewIfNeeded();
      await page.locator("//label[contains(@for,'pricer-optionsQuickPricer')]").click();
      await expect(page.locator("//label[@for=\"general-pricer-settingsQuickPricer\"]")).toBeVisible();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").scrollIntoViewIfNeeded();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 2"]);
      await page.locator("//label[contains(@for,'document-generation-settingsQuickPricer')]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[contains(@for,'document-generation-settingsQuickPricer')]")).toBeVisible();
      await expect(page.locator("//*[text()=\"Document Generation Settings\"]/..//label[@for=\"ppQuickPricerallowPricingComparison\"]/..//input[@type=\"checkbox\"]")).toBeVisible();
      if (true) /* Checkbox Allow Pricing Comparison Checkbox is checked */ {
        await expect(page.locator("//*[text()=\"Document Generation Settings\"]/..//label[@for=\"ppQuickPricerallowPricingComparison\"]/..//input[@type=\"checkbox\"]")).toBeVisible();
        vars["Allow Pricing"] = "checked";
        await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
      } else {
        await expect(page.locator("//*[text()=\"Document Generation Settings\"]/..//label[@for=\"ppQuickPricerallowPricingComparison\"]/..//input[@type=\"checkbox\"]")).toBeVisible();
        vars["Allow Pricing"] = "unchecked";
        await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
      }
    }
    if (String(vars["Allow Pricing"]) === String("checked")) {
      await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
      await expect(page.locator("(//input[@type='checkbox' and @tooltip='View Details'])[1]")).toBeVisible();
    } else if (String(vars["Allow Pricing"]) === String("unchecked")) {
      await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
      await expect(page.locator("(//input[@type='checkbox' and @tooltip='View Details'])[1]")).toBeVisible();
      if (true) /* Element Configuration Icon is visible */ {
        await stepGroups.stepGroup_Verifying_document_Generation_Settings_in_Pricing_Configurat(page, vars);
        await page.locator("//label[contains(@for,'document-generation-settingsQuickPricer')]").click();
        await page.locator("//*[text()=\"Document Generation Settings\"]/..//label[@for=\"ppQuickPricerallowPricingComparison\"]/..//input[@type=\"checkbox\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//*[text()=\"Document Generation Settings\"]/..//label[@for=\"ppQuickPricerallowPricingComparison\"]/..//input[@type=\"checkbox\"]")).toBeVisible();
        vars["Allow Pricing"] = "checked";
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
