import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Verify Price (Points)', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    if (true) /* Element SEARCH FIELDS Under Pricing is not visible */ {
      await page.locator("//a[contains(text(),'Eligible')]").waitFor({ state: 'visible' });
      if (true) /* Element Active Eligible Tab is enabled */ {
        await expect(page.locator("//table/tbody/tr[1]")).toBeVisible();
        vars["Price On Pricing"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]/div)[1]").getAttribute('title') || '';
        vars["Price On Pricing"] = String(vars["Price On Pricing"]).split("/")["1"] || '';
        vars["Price On Pricing"] = String(vars["Price On Pricing"]).trim();
        await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]/div").click();
        await expect(page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]")).toHaveAttribute('title', vars["Price On Pricing"]);
      } else {
        await page.locator("//a[contains(text(),'Eligible')]").click();
        vars["Error Message in Eligible Tab"] = await page.locator("//div[@class=\"result-panel\"]/app-public-pricing-result//lib-pricing-result-desktop-view/div/div/div/div | //div[@class='text-center text-grey bg-white pb-4 pt-4 ng-star-inserted']").textContent() || '';
      }
    } else {
      await page.locator("//select[@aria-label=\"Day Locks\" and @ng-reflect-model=\"30\"] | //label[contains(text(),\"Lock Days\")]/..//button").click();
      await page.locator("//ul/li/span[contains(.,\"30 days\")] | //select[@id=\"dayLocks\"]/option[text()=\"30 days \"]").evaluate(el => (el as HTMLElement).click());
      await page.locator("//button[contains(.,\"Search\")][last()]").click();
      await page.locator("//a[contains(text(),'Eligible')]").waitFor({ state: 'visible' });
      if (true) /* Element Active Eligible Tab is enabled */ {
        await expect(page.locator("//table/tbody/tr[1]")).toBeVisible();
        vars["Price On Pricing"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]/div)[1]").getAttribute('title') || '';
        await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]/div").click();
        await expect(page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]")).toHaveAttribute('title', vars["Price On Pricing"]);
      } else {
        await page.locator("//a[contains(text(),'Eligible')]").click();
        vars["Error Message in Eligible Tab"] = await page.locator("//div[@class=\"result-panel\"]/app-public-pricing-result//lib-pricing-result-desktop-view/div/div/div/div | //div[@class='text-center text-grey bg-white pb-4 pt-4 ng-star-inserted']").textContent() || '';
      }
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
