import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Terms ', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    if (true) /* Element SEARCH FIELDS Under Pricing is not visible */ {
      vars["Terms"] = "5";
      await page.locator("//label[text()=\"Term Years\"]/../input").scrollIntoViewIfNeeded();
      while (parseFloat(String(vars["Terms"])) <= parseFloat(String(testData["Max Term"]))) {
        await page.locator("//label[text()=\"Term Years\"]/../input").clear();
        await page.locator("//label[text()=\"Term Years\"]/../input").fill(vars["Terms"]);
        await page.locator("//label[text()=\"Term Years\"]").click();
        await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
        vars["Terms"] = (parseFloat(String(vars["Terms"])) + parseFloat(String("5"))).toFixed(0);
      }
    } else {
      vars["TermOptions"] = "1";
      await page.locator("//select[@aria-label=\"Day Locks\" and @ng-reflect-model=\"30\"] | //label[contains(text(),\"Lock Days\")]/..//button").click();
      await page.locator("//label[text()=\" Lock Days\"]/..//ul/li/span[text()=\" 30 days \"]").evaluate(el => (el as HTMLElement).click());
      await page.locator("//label[text()=\" Term (Years) \"]/..//button").click();
      while (await page.locator("(//label[text()=\" Term (Years) \"]/..//ul/li/span)[$|TermOptions|]").isVisible()) {
        await page.locator("(//label[text()=\" Term (Years) \"]/..//ul/li/span)[$|TermOptions|]").evaluate(el => (el as HTMLElement).click());
        await page.locator("//button[contains(.,\"Search\")][last()]").click();
        await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
        vars["TermOptions"] = (parseFloat(String(vars["TermOptions"])) + parseFloat(String("1"))).toFixed(0);
        await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      }
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
