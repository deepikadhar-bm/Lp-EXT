import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Verify Pricing On Quick Pricer', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify able to expand rates when multiple are present', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await expect(page.locator("//span[normalize-space()='Pricing Scenario']")).toBeVisible();
    await page.locator("//div/span[normalize-space()='Pricing Scenario']/../following-sibling::div//*[normalize-space()='Loan Type']").scrollIntoViewIfNeeded();
    await page.locator("//label[normalize-space()='Loan Type']/following-sibling::lib-bs2-multi-select").click();
    await page.locator("//li/span[normalize-space()=\"Conventional\"]").click();
    await page.waitForLoadState('networkidle');
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await page.locator("(//lib-pricing-result-table/table/thead/tr/th[normalize-space()='Rate'])[1]").scrollIntoViewIfNeeded();
    await expect(page.locator("(//lib-pricing-result-table/table/thead/tr/th[normalize-space()='Rate'])[1]")).toBeVisible();
    await expect(page.locator("(//table/tbody/tr[1])[2]/td/div/div[@style=\"white-space: nowrap;\"]/a/span/span/span")).toHaveCSS('border', "rgba(40, 167, 69, 1)");
    await expect(page.locator("(//td[@data-label='COLUMN_NAME_ENUM.PRICE']/div[1])[1]")).toBeVisible();
    await page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/div[2]/a[1])[1]").click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator("(//span[text()='Close']/ancestor::tr//div[@class=\"hide-mob\"]//input[@type=\"checkbox\"])[3]")).toBeVisible();
    await expect(page.locator("//span[contains(text(),\"Close\")]")).toBeVisible();
    await expect(page.locator("//table/tbody/tr/td/div/div/a/span/span[text()=\"Close\"]")).toHaveCSS('border', "rgba(28, 138, 184, 1)");
    await page.locator("//span[contains(text(),\"Close\")]").click();
    await expect(page.locator("//span[contains(text(),\"Close\")]")).toBeVisible();
    await expect(page.locator("(//span[text()='Close']/ancestor::tr//div[@class=\"hide-mob\"]//input[@type=\"checkbox\"])[3]")).toBeVisible();
    await expect(page.locator("(//td[@data-label='COLUMN_NAME_ENUM.PRICE']/div[1])[1]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
