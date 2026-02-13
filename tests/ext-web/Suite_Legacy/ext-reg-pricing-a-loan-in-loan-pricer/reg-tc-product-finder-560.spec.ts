import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Product Finder', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    await page.locator("//a[text()=\"Product Finder\"]").waitFor({ state: 'visible' });
    await page.locator("//a[text()=\"Product Finder\"]").scrollIntoViewIfNeeded();
    await page.locator("//a[text()=\"Product Finder\"]").click();
    await expect(page.locator("//h5[contains(text(),\"Product Finder\")]")).toBeVisible();
    await page.locator("//div[contains(text(),\"1 Yr PPP\" )]").click();
    await page.locator("//div[contains(text(),\"2 Yr PPP\" )]").click();
    await page.locator("//div[contains(text(),\"3 Yr PPP\" )]").click();
    await page.locator("//button[contains(text(),\"OK\" )]").click();
    await page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"3 Yr PPP\" )]").scrollIntoViewIfNeeded();
    await expect(page.locator("//a[text()=\"Product Finder\"]/parent::*//button[contains(normalize-space(.), \"$|FirstRandomProduct|\")]\n\n")).toBeVisible();
    await expect(page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"2 Yr PPP\" )]")).toBeVisible();
    await expect(page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"3 Yr PPP\" )]")).toBeVisible();
    await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    await page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"1 Yr PPP\" )]/span").click();
    await page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"2 Yr PPP\" )]/span").click();
    await page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"3 Yr PPP\" )]/span").click();
    await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    await expect(page.locator("(//div[contains(@class,\"available-options-display\")])[$|GeneratedNumber1|]")).toBeVisible();
    await expect(page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"2 Yr PPP\" )]")).toBeVisible();
    await expect(page.locator("//a[text()=\"Product Finder\"]/..//button[contains(text(),\"3 Yr PPP\" )]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
