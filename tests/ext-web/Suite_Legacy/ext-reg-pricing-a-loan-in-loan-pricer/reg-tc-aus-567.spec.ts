import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: AUS', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await page.locator("//a[@aria-label=\"Config\"]//span").click();
    await page.locator("//a[.=\"Loan Pricer Configuration\"]").click();
    await page.locator("//input[@id=\"search-fieldsMain\"]/..//label[text()=\"Search Fields\"]/span").waitFor({ state: 'visible' });
    await page.locator("//input[@id=\"search-fieldsMain\"]/..//label[text()=\"Search Fields\"]/span").click();
    await page.locator("//input[@id=\"ausQuickPricer\"]/..//label[text()=\"AUS\"]").scrollIntoViewIfNeeded();
    if (true) /* Checkbox Non Conforming Check Box is checked */ {
      vars["Non Conforming"] = "Checked";
    } else {
      vars["Non Conforming"] = "Un Checked";
    }
    if (true) /* Checkbox Guaranteed Underwriting Service CheckBox is checked */ {
      vars["Guaranteed Underwriting Service"] = "Checked";
    } else {
      vars["Guaranteed Underwriting Service"] = "Un Checked";
    }
    if (true) /* Checkbox Manual Underwriting Check Box is checked */ {
      vars["Manual Underwriting"] = "Checked";
    } else {
      vars["Manual Underwriting"] = "Un Checked";
    }
    if (true) /* Checkbox LP Check Box is checked */ {
      vars["LP"] = "Checked";
    } else {
      vars["LP"] = "Un Checked";
    }
    if (true) /* Checkbox DU Check Box is checked */ {
      vars["DU"] = "Checked";
    } else {
      vars["DU"] = "Un Checked";
    }
    await page.locator("//a[@aria-label=\"Pipeline\"]//span").click();
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    await page.locator("//label[text()=\"AUS\"]/..//button").scrollIntoViewIfNeeded();
    await page.locator("//label[text()=\"AUS\"]/..//button").click();
    if (String(vars["Non Conforming"]) === String("Checked")) {
      await expect(page.locator("//span[@class='form-check-label' and .//i[contains(@class,'text-success')] and normalize-space(text())='Non Conforming']")).toBeVisible();
    } else {
      await expect(page.locator("//li[@class=\"item aus-non-conforming\"]")).toBeVisible();
    }
    if (String(vars["Guaranteed Underwriting Service"]) === String("Checked")) {
      await expect(page.locator("//span[@class='form-check-label' and .//i[contains(@class,'text-success')] and normalize-space(text())='Guaranteed Underwriting Service']")).toBeVisible();
    } else {
      await expect(page.locator("//li[@class=\"item aus-guaranteed-underwriting-service\"]")).toBeVisible();
    }
    if (String(vars["Manual Underwriting"]) === String("Checked")) {
      await expect(page.locator("//li[@class=\"item active aus-manual-underwriting\"]")).toBeVisible();
    } else {
      await expect(page.locator("//li[@class=\"item aus-manual-underwriting\"]")).toBeVisible();
    }
    if (String(vars["LP"]) === String("Checked")) {
      await expect(page.locator("//span[@class='form-check-label' and .//i[contains(@class,'text-success')] and normalize-space(text())='LP']")).toBeVisible();
    } else {
      await expect(page.locator("//li[@class=\"item aus-lp\"]")).toBeVisible();
    }
    if (String(vars["DU"]) === String("Checked")) {
      await expect(page.locator("//span[@class='form-check-label' and .//i[contains(@class,'text-success')] and normalize-space(text())='DU']")).toBeVisible();
    } else {
      await expect(page.locator("//li[@class=\"item aus-du\"]")).toBeVisible();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
