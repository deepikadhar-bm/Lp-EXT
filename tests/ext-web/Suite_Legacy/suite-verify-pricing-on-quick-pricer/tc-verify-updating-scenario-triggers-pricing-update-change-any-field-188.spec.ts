import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Verify Pricing On Quick Pricer', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify updating scenario triggers pricing update (change any field)', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await expect(page.locator("//nav[@id='sidebar']//span[text()[normalize-space() = \"Pricing Scenario\"]]")).toBeVisible();
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await page.locator("//div/span[normalize-space()='Pricing Scenario']/../following-sibling::div//*[normalize-space()='Loan Type']").scrollIntoViewIfNeeded();
    await page.locator("//label[contains(text(),\"Loan Types\")]/..//button").click();
    await page.locator("//div/span[normalize-space()='Pricing Scenario']/../following-sibling::div//*[normalize-space()='Loan Type']/following-sibling::lib-bs2-multi-select/div/ul/li/span[contains(normalize-space(),'FHA')]\n").scrollIntoViewIfNeeded();
    await page.locator("//div/span[normalize-space()='Pricing Scenario']/../following-sibling::div//*[normalize-space()='Loan Type']/following-sibling::lib-bs2-multi-select/div/ul/li/span[contains(normalize-space(),'FHA')]\n").click();
    await expect(page.locator("//lib-bs2-multi-select[@ng-reflect-value=\"FHA\"]")).toBeVisible();
    await page.waitForLoadState('networkidle');
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await expect(page.locator("(//div[normalize-space()='30 Years Fixed FHA Purchase'])[1]")).toBeVisible();
    if (true) /* Element FHA 30 Yr Fixed_Program name is visible */ {
    } else if (true) /* Element FHA 30Yr Fixed In Program is visible */ {
    } else if (true) /* Element FHA 30 YR FIXED Program is visible */ {
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
