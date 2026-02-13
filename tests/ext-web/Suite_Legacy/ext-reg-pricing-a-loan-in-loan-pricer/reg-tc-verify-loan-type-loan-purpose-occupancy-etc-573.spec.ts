import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Verify Loan Type, Loan purpose, Occupancy etc', async ({ page }) => {
    // Prerequisite: Pre-cond: Create a loan API
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    while (!(await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").isVisible())) {
      await page.reload();
      await page.locator("//input[@id='searchText']").waitFor({ state: 'visible' });
    }
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
      await page.locator("(//div[contains(normalize-space(),\"Lock Days* None selected\")])[17]//button[text()[normalize-space() = \"None selected\"]]").click();
      await page.locator("//span[text()[normalize-space() = \"30 days\"]]").click();
    }
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").scrollIntoViewIfNeeded();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    await page.locator("//li[contains(@class,\"active loan-types-fha\")]/span[text()=\" FHA \"]").click();
    if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
      await page.locator("//button[contains(.,\"Search\")][last()]").click();
    } else {
      await page.locator("//span[normalize-space()='Property Details']").scrollIntoViewIfNeeded();
      await page.locator("//span[normalize-space()='Property Details']").click();
    }
    await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
      await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
    }
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//div/ul/li/span[contains(text(),\"Conventional\")]").click();
    vars["Number"] = String(Math.floor(Math.random() * (2 - 0 + 1)) + 0);
    await page.locator("//select[@id='loanPurpose' or @aria-label=\"Loan Purpose\"]").click();
    await page.locator("//select[@id='loanPurpose' or @aria-label=\"Loan Purpose\"]").selectOption({ index: parseInt(vars["Number"]) });
    await page.locator("//select[@id='side-property-use' or @aria-label=\"Occupancy\"]").click();
    await page.locator("//select[@id='side-property-use' or @aria-label=\"Occupancy\"]").selectOption({ index: parseInt(vars["Number"]) });
    if (true) /* Element SEARCH FIELDS Under Pricing is enabled */ {
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
