import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Verify Pricing On Quick Pricer', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify favorites (applying favorite changes pricing scenario and able to save new scenario)', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await page.locator("//input[@placeholder=\"Zip Code\"]").evaluate(el => { (el as HTMLInputElement).value = ''; el.dispatchEvent(new Event('input')); });
    await page.locator("//input[@placeholder=\"Zip Code\"]").fill(testData["Zip Code"]);
    vars["Zip Code In FHA"] = testData["Zip Code"];
    await page.locator("//INPUT[@id='fico']").evaluate(el => { (el as HTMLInputElement).value = ''; el.dispatchEvent(new Event('input')); });
    await page.locator("//INPUT[@id='fico']").fill(testData["FICO"]);
    vars["Fico In FHA"] = testData["FICO"];
    await page.locator("//div/span[normalize-space()='Pricing Scenario']/../following-sibling::div//*[normalize-space()='Loan Type']").scrollIntoViewIfNeeded();
    await page.locator("//label[normalize-space()='Loan Type']/following-sibling::lib-bs2-multi-select").click();
    await page.locator("//li/span[normalize-space()=\"FHA\"]").click();
    await expect(page.locator("//i[@class='fas fa-star yellow']")).toBeVisible();
    await page.locator("//i[@class='fas fa-star yellow']").click();
    await page.locator("//input[@id='favorite']").fill(testData["Loan Type"]);
    await page.locator("//i[@class='fas fa-plus']").click();
    await expect(page.locator("//a[normalize-space()='FHA']")).toBeVisible();
    if (true) /* Element Default Check in Favorites is not visible */ {
      await page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]/../..//i[contains(@class, \"text-grey\")]\n").click();
    } else {
      await expect(page.locator("//tbody//tr//td//a//i[@class='fas fa-check-circle text-success']")).toBeVisible();
    }
    await page.locator("//a[normalize-space()='FHA']").click();
    await page.waitForLoadState('networkidle');
    expect(String(vars["Zip Code In FHA"])).toBe(String(testData["Zip Code"]));
    expect(String(vars["Fico In FHA"])).toBe(String(testData["FICO"]));
    await page.locator("//div/span[normalize-space()='Pricing Scenario']/../following-sibling::div//*[normalize-space()='Loan Type']").scrollIntoViewIfNeeded();
    await expect(page.locator("//button[normalize-space()='FHA']")).toBeVisible();
    await page.locator("//i[@class='fas fa-star yellow']").click();
    await expect(page.locator("//a[normalize-space()='FHA']")).toBeVisible();
    await page.locator("//div[@class='modal-dialog modal-dialog-centered modal-lg']//button[@class='btn modal-close']").click();
    await page.locator("//input[@placeholder=\"Zip Code\"]").evaluate(el => { (el as HTMLInputElement).value = ''; el.dispatchEvent(new Event('input')); });
    await page.locator("//input[@placeholder=\"Zip Code\"]").fill(testData["Zip Code 1"]);
    vars["Zip Code In Conventional"] = testData["Zip Code 1"];
    await page.locator("//INPUT[@id='fico']").evaluate(el => { (el as HTMLInputElement).value = ''; el.dispatchEvent(new Event('input')); });
    await page.locator("//INPUT[@id='fico']").fill(testData["FICO 1"]);
    vars["FICO In Conventional"] = testData["FICO 1"];
    await page.locator("//div/span[normalize-space()='Pricing Scenario']/../following-sibling::div//*[normalize-space()='Loan Type']").scrollIntoViewIfNeeded();
    await page.locator("//label[normalize-space()='Loan Type']/following-sibling::lib-bs2-multi-select").click();
    await page.locator("//li/span[normalize-space()=\"Conventional\"]").click();
    await page.locator("//i[@class='fas fa-star yellow']").click();
    await page.locator("//input[@id='favorite']").fill(testData["LoanType"]);
    await page.locator("//i[@class='fas fa-plus']").click();
    await expect(page.locator("//a[normalize-space()='Conventional']")).toBeVisible();
    await page.locator("//a[normalize-space()='Conventional']").click();
    await page.waitForLoadState('networkidle');
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    expect(String(vars["Zip Code In Conventional"])).toBe(String(testData["Zip Code 1"]));
    expect(String(vars["FICO In Conventional"])).toBe(String(testData["FICO 1"]));
    await page.locator("//div/span[normalize-space()='Pricing Scenario']/../following-sibling::div//*[normalize-space()='Loan Type']").scrollIntoViewIfNeeded();
    await expect(page.locator("//li/span[text()=\" Conventional \"]")).toBeVisible();
    await page.locator("//i[@class='fas fa-star yellow']").click();
    await expect(page.locator("//a[normalize-space()='Conventional']")).toBeVisible();
    await page.locator("//div[@class='modal-dialog modal-dialog-centered modal-lg']//button[@class='btn modal-close']").click();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
