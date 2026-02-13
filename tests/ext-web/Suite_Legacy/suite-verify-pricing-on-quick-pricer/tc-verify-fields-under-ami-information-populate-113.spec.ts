import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Verify Pricing On Quick Pricer', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify fields under \\\'AMI Information\\\' populate', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await expect(page.locator("//span[contains(text(),\"AMI Information\")]")).toBeVisible();
    await page.locator("//span[contains(text(),\"AMI Information\")]").scrollIntoViewIfNeeded();
    await page.locator("//span[contains(text(),\"AMI Information\")]").click();
    await page.locator("//label[contains(text(),\"Total Monthly Income\")]").scrollIntoViewIfNeeded();
    await expect(page.locator("//label[contains(text(),\"Total Monthly Income\")]")).toContainText("Total Monthly Income");
    await expect(page.locator("//INPUT[@id='totalMonthlyIncome']")).toBeVisible();
    await expect(page.locator("//input[@placeholder=\"Total Monthly Income\"]/preceding-sibling::div[contains(@class, 'input-group-prepend')]/DIV[1]/I[1]")).toBeVisible();
    await expect(page.locator("//label[contains(text(),\"Average Median Income\")]")).toContainText("Average Median Income");
    await expect(page.locator("//INPUT[@id='areaMedianIncome']")).toBeVisible();
    await expect(page.locator("//div[@class='expandable expandAmiInformation']//div[3]")).toContainText("% of AMI");
    await expect(page.locator("//INPUT[@id='incomeAmiRatio']")).toBeVisible();
    await page.locator("//label[text()=\"Duty to Serve\"]").check();
    await expect(page.locator("//label[text()=\"Duty to Serve\"]")).toBeVisible();
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
