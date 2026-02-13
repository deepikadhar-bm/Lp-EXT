import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Verify Comp Plan', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    if (true) /* Element SEARCH FIELDS Under Pricing is not visible */ {
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    } else {
      await page.locator("//select[@aria-label=\"Day Locks\" and @ng-reflect-model=\"30\"] | //label[contains(text(),\"Lock Days\")]/..//button").click();
      await page.locator("//ul/li/span[contains(.,\"30 days\")] | //select[@id=\"dayLocks\"]/option[text()=\"30 days \"]").evaluate(el => (el as HTMLElement).click());
      await page.locator("//button[contains(.,\"Search\")][last()]").click();
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
