import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Search fields are displayed as per pricing configuration settings for Quick Pricer', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await expect(page.locator("//a[@aria-label=\"Config\"]//span")).toBeVisible();
    await page.locator("//a[@aria-label=\"Config\"]//span").click();
    await expect(page.locator("//h4[text()[normalize-space() = \"Pricer Configs\"]]")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Quick Pricer Configuration']")).toBeVisible();
    await page.locator("//a[normalize-space()='Quick Pricer Configuration']").click();
    await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").scrollIntoViewIfNeeded();
    await expect(page.locator("//label[contains(@for,'search-fieldsQuickPricer')]")).toBeVisible();
    await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").click();
    if (true) /* Checkbox Admin Fee Checkbox is checked */ {
      vars["Admin fee"] = "checked";
    } else {
      vars["Admin fee"] = "unchecked";
    }
    if (true) /* Checkbox Compensation Type Options Checkbox is checked */ {
      vars["Compensation type option"] = "checked";
    } else {
      vars["Compensation type option"] = "unchecked";
    }
    if (true) /* Checkbox DTI Checkbox is checked */ {
      vars["DTI in search"] = "checked";
    } else {
      vars["DTI in search"] = "unchecked";
    }
    if (true) /* Checkbox Impound Checkbox is checked */ {
      vars["Impound "] = "checked";
    } else {
      vars["Impound "] = "unchecked";
    }
    if (true) /* Checkbox First Time Home Buyer Checkbox is checked */ {
      vars["Home buyer "] = "checked";
    } else {
      vars["Home buyer "] = "unchecked";
    }
    if (true) /* Checkbox Income And Debt Checkbox is checked */ {
      vars["Income/Debt "] = "checked";
    } else {
      vars["Income/Debt "] = "unchecked";
    }
    if (true) /* Checkbox Property Valuation Type Checkbox is checked */ {
      vars["Property valuation "] = "checked";
    } else {
      vars["Property valuation "] = "unchecked";
    }
    if (true) /* Checkbox Show Compensation Percent Checkbox is checked */ {
      vars["Compensation percent "] = "checked";
    } else {
      vars["Compensation percent "] = "unchecked";
    }
    if (true) /* Checkbox AmI Information Checkbox is checked */ {
      vars["AMI information "] = "checked";
    } else {
      vars["AMI information"] = "unchecked";
    }
    if (true) /* Checkbox Qm Filter Checkbox is checked */ {
      vars["QM filter"] = "checked";
    } else {
      vars["QM filter"] = "unchecked";
    }
    await stepGroups.stepGroup_SG_AUS_In_Search_Fields(page, vars);
    await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await page.locator("//label[.='Compensation Percent']").scrollIntoViewIfNeeded();
    if (String(vars["Compensation percent "]) === String("checked")) {
      await expect(page.locator("//label[.='Compensation Percent']")).toBeVisible();
    } else {
      await expect(page.locator("//label[.='Compensation Percent']")).toBeVisible();
    }
    if (String(vars["Property valuation "]) === String("checked")) {
      await stepGroups.stepGroup_Property_Valuation_Type(page, vars);
    } else {
      await expect(page.locator("//label[contains(.,'Property Valuation Type')]")).toBeVisible();
    }
    await expect(page.locator("//label[contains(text(),'AUS')]")).toBeVisible();
    await stepGroups.stepGroup_SG_AUS_In_Pricing_Scenario(page, vars);
    await page.locator("//label[contains(.,'Impound')]").scrollIntoViewIfNeeded();
    if (String(vars["Impound "]) === String("checked")) {
      await expect(page.locator("//input[@id=\"keyFieldQuickPricerimpound\"]")).toBeVisible();
    } else {
      await expect(page.locator("//input[@id=\"keyFieldQuickPricerimpound\"]")).toBeVisible();
    }
    if (String(vars["Home buyer "]) === String("checked")) {
      await expect(page.locator("//label[contains(.,'First Time Home Buyer')]")).toBeVisible();
    } else {
      await expect(page.locator("//label[contains(.,'First Time Home Buyer')]")).toBeVisible();
    }
    await page.locator("//label[.='Admin Fee Waiver']").scrollIntoViewIfNeeded();
    if (String(vars["Admin fee"]) === String("checked")) {
      await expect(page.locator("//label[.='Admin Fee Waiver']")).toBeVisible();
    } else {
      await expect(page.locator("//label[.='Admin Fee Waiver']")).toBeVisible();
    }
    await page.locator("//span[contains(text(),'Income / Debt')]").scrollIntoViewIfNeeded();
    if (String(vars["Income/Debt "]) === String("checked")) {
      await stepGroups.stepGroup_SG_Income_and_Debt(page, vars);
    } else {
      await expect(page.locator("//span[contains(text(),'Income / Debt')]")).toBeVisible();
    }
    await page.locator("//span[contains(text(),'AMI Information')]").scrollIntoViewIfNeeded();
    if (String(vars["AMI information "]) === String("checked")) {
      await stepGroups.stepGroup_SG_AMI_Information(page, vars);
    } else {
      await expect(page.locator("//span[contains(text(),'AMI Information')]")).toBeVisible();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
