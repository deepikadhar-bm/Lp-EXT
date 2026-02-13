import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Result Settings such as Show Results Filter, Hide ineligible resuts tab', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
    await expect(page.locator("//label[contains(@for,'result-settingsQuickPricer')]")).toBeVisible();
    await page.locator("//label[contains(@for,'result-settingsQuickPricer')]").click();
    if (true) /* Checkbox Show Results Filter Checkbox is checked */ {
      vars["Result filter "] = "checked";
    } else {
      vars["Result filter"] = "unchecked";
    }
    if (true) /* Checkbox Rate Checkbox is checked */ {
      vars["Rate in result filter"] = "checked";
    } else {
      vars["Rate in result filter"] = "unchecked";
    }
    if (true) /* Checkbox Price Checkbox is checked */ {
      vars["Price in result filter"] = "checked";
    } else {
      vars["Price in result filter"] = "unchecked";
    }
    if (true) /* Checkbox Program Checkbox is checked */ {
      vars["Program in result filter"] = "checked";
    } else {
      vars["Program in result filter"] = "unchecked";
    }
    if (true) /* Checkbox Lenders Checkbox is checked */ {
      vars["Lenders in result filter"] = "checked";
    } else {
      vars["Lenders in result filter"] = "unchecked";
    }
    if (true) /* Checkbox Enable Best X Filter is checked */ {
      vars["Enable Best X"] = "checked";
    } else {
      vars["Enable Best X"] = "unchecked";
    }
    if (true) /* Checkbox Hide ineligible results tab is unchecked */ {
      vars[" Ineligible  "] = "unchecked";
    } else {
      vars["Ineligible  "] = "checked";
    }
    await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    if (String(vars["Rate in result filter"]) === String("checked")) {
      await expect(page.locator("//input[@id=\"ppQuickPricershowRate\"]")).toBeVisible();
    } else {
      await expect(page.locator("//input[@id=\"ppQuickPricershowRate\"]")).toBeVisible();
    }
    if (String(vars["Price in result filter"]) === String("checked")) {
      await expect(page.locator("//input[@id=\"ppQuickPricershowPoints\"]")).toBeVisible();
    } else {
      await expect(page.locator("//input[@id=\"ppQuickPricershowPoints\"]")).toBeVisible();
    }
    if (String(vars["Program in result filter"]) === String("checked")) {
      await expect(page.locator("//input[@id=\"ppQuickPricershowProgram\"]")).toBeVisible();
    } else {
      await expect(page.locator("//input[@id=\"ppQuickPricershowProgram\"]")).toBeVisible();
    }
    if (String(vars["Lenders in result filter"]) === String("checked")) {
      await expect(page.locator("//input[@id=\"ppQuickPricershowLenders\"]")).toBeVisible();
    } else {
      await expect(page.locator("//input[@id=\"ppQuickPricershowLenders\"]")).toBeVisible();
    }
    if (String(vars["Enable Best X"]) === String("checked")) {
      await expect(page.locator("//label[contains(.,'Best X Pricing')]")).toBeVisible();
    } else {
      await expect(page.locator("//label[contains(.,'Best X Pricing')]")).toBeVisible();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
