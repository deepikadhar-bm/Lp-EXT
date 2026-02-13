import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC13_Click on Product Finder and the window will pop up with SMOs. Select some SMOs and make sure they\\\'re shown under Product Finder', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await page.locator("//label[contains(@for,'pricer-optionsQuickPricer')]").click();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").scrollIntoViewIfNeeded();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 1"]);
      await page.locator("//label[@for=\"qmResultTypeQuickPricer\"]").click();
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").scrollIntoViewIfNeeded();
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").click();
      if (true) /* Checkbox Hide Product Finder(default ui) is checked */ {
        await page.locator("//label[@for='keyFieldQuickPricerhideProductFinder']/..//input").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//label[@for='keyFieldQuickPricerhideProductFinder']/..//input")).toBeVisible();
      } else {
        await expect(page.locator("//label[@for='keyFieldQuickPricerhideProductFinder']/..//input")).toBeVisible();
      }
      await page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Show Options in Dialog(default ui) is checked */ {
        await page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input")).toBeVisible();
      } else {
        await expect(page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await page.locator("//a[contains(text(),'Product Finder')]").scrollIntoViewIfNeeded();
    await expect(page.locator("//a[contains(text(),'Product Finder')]")).toBeVisible();
    await page.locator("//a[contains(text(),'Product Finder')]").click();
    await expect(page.locator("//h5[text()[normalize-space() = \"Product Finder\"]]")).toBeVisible();
    vars["GeneratedNumber1"] = String(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    await page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber1|]").click();
    vars["FirstRandomProduct"] = await page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber1|]").textContent() || '';
    vars["FirstRandomProduct"] = String(vars["FirstRandomProduct"]).substring(1, String(vars["FirstRandomProduct"]).length - 1);
    vars["GeneratedNumber2"] = String(Math.floor(Math.random() * (6 - 4 + 1)) + 4);
    await page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber2|]").click();
    vars["SecondRandomProduct"] = await page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber2|]").textContent() || '';
    vars["SecondRandomProduct"] = String(vars["SecondRandomProduct"]).substring(1, String(vars["SecondRandomProduct"]).length - 1);
    vars["GeneratedNumber3"] = String(Math.floor(Math.random() * (9 - 7 + 1)) + 7);
    await page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber3|]").click();
    vars["ThirdRandomProduct"] = await page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber3|]").textContent() || '';
    vars["ThirdRandomProduct"] = String(vars["ThirdRandomProduct"]).substring(1, String(vars["ThirdRandomProduct"]).length - 1);
    await page.locator("//button[text()[normalize-space() = \"OK\"]]").click();
    await page.locator("//a[contains(text(),'Product Finder')]").scrollIntoViewIfNeeded();
    await expect(page.locator("//a[text()=\"Product Finder\"]/parent::*//button[contains(normalize-space(.), \"$|FirstRandomProduct|\")]\n\n")).toBeVisible();
    await expect(page.locator("//a[text()=\"Product Finder\"]/parent::*//button[contains(normalize-space(.), \"$|SecondRandomProduct|\")]\n")).toBeVisible();
    await expect(page.locator("//a[text()=\"Product Finder\"]/parent::*//button[contains(normalize-space(.), \"$|ThirdRandomProduct|\")]\n")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
