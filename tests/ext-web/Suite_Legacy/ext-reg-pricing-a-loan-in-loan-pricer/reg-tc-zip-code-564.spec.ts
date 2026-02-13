import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Zip Code', async ({ page }) => {
    // Prerequisite: Pre-cond: Config - Standard UI [Loan Pricer]
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    for (let dataIdx = 1; dataIdx <= -1; dataIdx++) {
      if (true) /* Element SEARCH FIELDS Under Pricing is not visible */ {
        await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").scrollIntoViewIfNeeded();
        await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").clear();
        await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").fill(testData["Zip Code"]);
        await page.keyboard.press('Enter');
        vars["ZipCode Text"] = await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").getAttribute('title') || '';
        vars["CityName In ZipCode"] = String(vars["ZipCode Text"]).split(",")["2"] || '';
        vars["CityName In ZipCode"] = String(vars["CityName In ZipCode"]).trim();
        await page.locator("//span[normalize-space()='Property Details']").scrollIntoViewIfNeeded();
        if (true) /* Element expanded PropertyDetails is not visible */ {
          await page.locator("//span[normalize-space()='Property Details']").click();
          await expect(page.locator("//div[@class=\"expandable expandPropertyDetails\"]")).toBeVisible();
        }
        await page.locator("//span[normalize-space()='Property Details']").click();
        await page.locator("//label[contains(text(),\"City\")]/..//input").scrollIntoViewIfNeeded();
        await expect(page.locator("//label[contains(text(),\"City\")]/..//input")).toHaveAttribute('title', vars["CityName In ZipCode"]);
        await expect(page.locator("//label[contains(text(),\"County\")]/..//select")).toHaveAttribute('title', testData["Country"]);
        await expect(page.locator("//select[@aria-label=\"State\"]")).toHaveAttribute('title', testData["State"]);
      } else {
        await page.locator("//label[contains(text(),\"Lock Days\")]/..//button").click();
        await page.locator("//span[text()[normalize-space() = \"30 days\"]]").click();
        await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").clear();
        await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").fill(testData["Zip Code"]);
        await page.locator("(//div//label[text()=\"Zip\" or text()=\" Zip Code \"])[1]").click();
        vars["Country"] = await page.locator("//label[contains(text(),\"County\")]/..//select").inputValue() || '';
        expect(String(vars["Country"]).toLowerCase()).toBe(String(testData["Country"]).toLowerCase());
        await page.locator("//span[text()=\"More Property Attributes\"]").click();
        await expect(page.locator("//h5[text()=\" More Property and Address Details \"]")).toBeVisible();
        await expect(page.locator("//label[contains(text(),\"City\")]/..//input")).toHaveValue(testData["City"]);
        await expect(page.locator("//label[contains(text(),\"State\")]/..//input")).toHaveValue(testData["State"]);
        await page.locator("//span[@aria-label=\"Close\"]").click();
        await page.locator("//button[contains(.,\"Search\")][last()]").click();
        await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
        await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      }
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
