import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Check SMOs from Product Finder and make sure you\\\'re able to select and save the SMOs', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await expect(page.locator("//a[@aria-label=\"Config\"]//span")).toBeVisible();
    await page.locator("//a[@aria-label=\"Config\"]//span").click();
    await expect(page.locator("//h4[text()[normalize-space() = \"Pricer Configs\"]]")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Quick Pricer Configuration']")).toBeVisible();
    await page.locator("//a[normalize-space()='Quick Pricer Configuration']").click();
    await expect(page.locator("//b[contains(.,'Default Configuration')]")).toBeVisible();
    await expect(page.locator("//label[contains(@for,'search-fieldsQuickPricer')]")).toBeVisible();
    await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").click();
    if (true) /* Checkbox Hide Product Finder is checked */ {
      await page.locator("//label[@for='keyFieldQuickPricerhideProductFinder']/..//input").uncheck();
    } else {
      await expect(page.locator("//label[@for='keyFieldQuickPricerhideProductFinder']/..//input")).toBeVisible();
    }
    if (true) /* Checkbox Show Options in Dialog is checked */ {
      await page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input").uncheck();
    } else {
      await expect(page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input")).toBeVisible();
    }
    await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await page.locator("//a[contains(text(),'Product Finder')]").scrollIntoViewIfNeeded();
    await expect(page.locator("//a[contains(text(),'Product Finder')]")).toBeVisible();
    await page.locator("//a[contains(text(),'Product Finder')]").click();
    await expect(page.locator("//h5[text()[normalize-space() = \"Product Finder\"]]")).toBeVisible();
    await page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber1|]").click();
    await page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber2|]").click();
    await page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber3|]").click();
    await page.locator("//button[text()[normalize-space() = \"OK\"]]").click();
    await page.locator("//a[contains(text(),'Product Finder')]").scrollIntoViewIfNeeded();
    await expect(page.locator("//a[text()=\"Product Finder\"]/parent::*//button[contains(normalize-space(.), \"$|FirstRandomProduct|\")]\n\n")).toBeVisible();
    await expect(page.locator("//a[text()=\"Product Finder\"]/parent::*//button[contains(normalize-space(.), \"$|SecondRandomProduct|\")]\n")).toBeVisible();
    await expect(page.locator("//a[text()=\"Product Finder\"]/parent::*//button[contains(normalize-space(.), \"$|ThirdRandomProduct|\")]\n")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
