import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC05_If Default Favorites is Saved, once you launch a Quick Pricer it will default to the default zip code', async ({ page }) => {
    // Prerequisite: REG_TS01_TC02_01_No Default Favourites are saved
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await expect(page.locator("(//div//label[text()=\"Zip\" or text()=\" Zip Code \"])[1]")).toBeVisible();
    await expect(page.locator("//label[@for=\"zip\"]/..//input")).toBeVisible();
    vars["DefaultZipcodeInQuickPricer"] = await page.locator("//label[@for=\"zip\"]/..//input").inputValue() || '';
    expect(String(vars["DefaultZipcodeInQuickPricer"])).toBe(vars["DefaultZipcodeInConfig"]);
    await page.locator("//label[@for=\"zip\"]/..//input").clear();
    await page.locator("//label[@for=\"zip\"]/..//input").fill(testData["Zip code 2"]);
    vars["NewZipcodeInPricingScenario(before result)"] = await page.locator("//label[@for=\"zip\"]/..//input").inputValue() || '';
    vars["NewZipcodeInPricingScenario(before result)"] = String(vars["NewZipcodeInPricingScenario(before result)"]).split(",")["1"] || '';
    vars["NewZipcodeInPricingScenario(before result)"] = String(vars["NewZipcodeInPricingScenario(before result)"]).trim();
    if (true) /* Checkbox Auto Search On Change Checkbox is unchecked */ {
      await page.locator("//button[text()[normalize-space() = \"Search\"]]").click();
    }
    await page.getByText("Retriving results,please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    await expect(page.locator("//div[@class=\"stFavorite\"]//i[contains(@class, \"yellow\")]")).toBeVisible();
    await page.locator("//div[@class=\"stFavorite\"]//i[contains(@class, \"yellow\")]").click();
    await page.locator("//h5[contains(text(),'Favorites')]").waitFor({ state: 'visible' });
    vars["test"] = Array.from({length: 6}, () => "abcde".charAt(Math.floor(Math.random() * 5))).join('');
    await page.locator("//div/input[@placeholder=\"Favorite name\"]").fill(vars["test"]);
    await stepGroups.stepGroup_Adding_and_Verifying_Favourite_name_inside_Favourite_List(page, vars);
    await expect(page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]/../..//i[contains(@class, \"text-grey\")]\n")).toHaveCSS('border', "rgba(127, 127, 127, 1)");
    await page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]/../..//i[contains(@class, \"text-grey\")]\n").click();
    await expect(page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]/../..//i[contains(@class, \"text-success\")]")).toHaveCSS('border', "rgba(40, 167, 69, 1)");
    await page.locator("(//button[contains(@class,\"modal-close\")]/span[@aria-label=\"Close\"])[4]").click();
    await page.locator("//a[@aria-label=\"Pipeline\"]//span").click();
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await expect(page.locator("(//div//label[text()=\"Zip\" or text()=\" Zip Code \"])[1]")).toBeVisible();
    await expect(page.locator("//label[@for=\"zip\"]/..//input")).toBeVisible();
    vars["NewZipcodeInPricingScenario(after result)"] = await page.locator("//label[@for=\"zip\"]/..//input").inputValue() || '';
    vars["NewZipcodeInPricingScenario(after result)"] = String(vars["NewZipcodeInPricingScenario(after result)"]).split(",")["1"] || '';
    vars["NewZipcodeInPricingScenario(after result)"] = String(vars["NewZipcodeInPricingScenario(after result)"]).trim();
    expect(String(vars["NewZipcodeInPricingScenario(before result)"])).toBe(vars["NewZipcodeInPricingScenario(after result)"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
