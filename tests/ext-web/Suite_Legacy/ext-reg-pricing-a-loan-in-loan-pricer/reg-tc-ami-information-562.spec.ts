import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: AMI Information', async ({ page }) => {
    // Prerequisite: Pre-cond: Config - Standard UI [Loan Pricer]
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    await page.locator("//span[contains(text(),\"AMI Information\")]").scrollIntoViewIfNeeded();
    await page.locator("//span[contains(text(),\"AMI Information\")]").click();
    await page.locator("//label[text()=\"% of AMI\"]/..//input").scrollIntoViewIfNeeded();
    await expect(page.locator("//label[text()=\"Total Monthly Income\"]/..//input")).toBeVisible();
    await expect(page.locator("//label[text()=\"Average Median Income\"]/..//input")).toBeVisible();
    await expect(page.locator("//label[text()=\"% of AMI\"]/..//input")).toBeVisible();
    vars["Old AMI Percentage"] = await page.locator("//label[text()=\"% of AMI\"]/..//input").inputValue() || '';
    await page.locator("//label[text()=\"Total Monthly Income\"]/..//input").clear();
    await page.locator("//label[text()=\"Total Monthly Income\"]/..//input").fill(String(Math.floor(Math.random() * (15000 - 2000 + 1)) + 2000));
    await page.locator("//label[contains(text(),\"Total Monthly Income\")]").click();
    await page.locator("//a[contains(text(),\"Eligible\") and @class=\"nav-link\"]").waitFor({ state: 'visible' });
    vars["New AMI Percentage"] = await page.locator("//label[text()=\"% of AMI\"]/..//input").inputValue() || '';
    expect(String(vars["Old AMI Percentage"])).toBe(String(vars["New AMI Percentage"]));
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
