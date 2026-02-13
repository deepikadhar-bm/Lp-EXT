import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC15_Dynamic Fields Pop Up opens', async ({ page }) => {
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
      await page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Show Options in Dialog(Default UI) is checked */ {
        await expect(page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input")).toBeVisible();
      } else {
        await expect(page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input")).toBeVisible();
        await page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
      await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    } else {
      await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await page.locator("//nav[@id='sidebar']//span[text()[normalize-space() = \"More Options\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//nav[@id='sidebar']//span[text()[normalize-space() = \"More Options\"]]")).toBeVisible();
    await page.locator("//nav[@id='sidebar']//span[text()[normalize-space() = \"More Options\"]]").click();
    await expect(page.locator("//button[contains(text(),\"Dynamic Fields \")]")).toBeVisible();
    await page.locator("//button[contains(text(),\"Dynamic Fields \")]").click();
    await expect(page.locator("//h5[text()[normalize-space() = \"Dynamic Fields\"]]")).toBeVisible();
    vars["DynamicFieldsPopup(Actual)"] = await page.locator("//h5[text()[normalize-space() = \"Dynamic Fields\"]]").textContent() || '';
    vars["DynamicFieldsPopup(Expected)"] = "Dynamic Fields";
    expect(String(vars["DynamicFieldsPopup(Actual)"])).toBe(vars["DynamicFieldsPopup(Expected)"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
