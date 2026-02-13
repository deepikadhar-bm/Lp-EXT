import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Days Lock ', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    if (true) /* Element SEARCH FIELDS Under Pricing is not visible */ {
      vars["Days"] = "0";
      await page.locator("//select[@id='dayLocks' and @aria-label=\"Day Locks\"]").scrollIntoViewIfNeeded();
      vars["DaysCount"] = String(await page.locator("//select[@id='dayLocks' and @aria-label=\"Day Locks\"]").locator('option').count());
      while (parseFloat(String(vars["Days"])) < parseFloat(String(vars["DaysCount"]))) {
        await page.locator("//select[@id='dayLocks' and @aria-label=\"Day Locks\"]").selectOption({ index: parseInt(vars["Days"]) });
        await page.locator("//label[text()=\"Term Years\"]/../input").click();
        await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
        vars["Days"] = (parseFloat(String(vars["Days"])) + parseFloat(String("1"))).toFixed(0);
      }
    } else {
      await page.locator("//select[@aria-label=\"Day Locks\" and @ng-reflect-model=\"30\"] | //label[contains(text(),\"Lock Days\")]/..//button").click();
      vars["DaysOptions"] = "1";
      while (await page.locator("(//label[text()=\" Lock Days\"]/..//ul/li/span)[$|DaysOptions|]").isVisible()) {
        await page.locator("(//label[text()=\" Lock Days\"]/..//ul/li/span)[$|DaysOptions|]").evaluate(el => (el as HTMLElement).click());
        await page.locator("//button[contains(.,\"Search\")][last()]").click();
        await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
        vars["DaysOptions"] = (parseFloat(String(vars["DaysOptions"])) + parseFloat(String("1"))).toFixed(0);
        await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      }
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
