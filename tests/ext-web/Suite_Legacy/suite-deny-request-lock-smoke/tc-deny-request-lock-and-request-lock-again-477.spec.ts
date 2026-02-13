import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Deny Request lock [Smoke]', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Deny Request Lock and Request Lock Again', async ({ page }) => {
    // Prerequisite: Pre-cond: Create a loan API
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    while (!(await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").isVisible())) {
      await page.reload();
    }
    await page.locator("//input[@id='searchText']").click();
    await page.locator("//input[@id='searchText']").fill(vars["LOAN ID"]);
    await page.locator("(//table/tbody/tr)[2]").waitFor({ state: 'hidden' });
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.locator("//span[normalize-space()='LOAN DETAILS']").waitFor({ state: 'visible' });
    await page.locator("(//div[contains(@class, 'hide-mob')])[1]//button[text()[normalize-space() = \"Get Pricing\"]]").click();
    await page.locator("//button[@class='btn btn-danger text-uppercase']").click();
    await page.locator("//table/tbody/tr[1]").waitFor({ state: 'visible' });
    await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"]").click();
    await page.locator("//button[text()=\" Confirm \"]").click();
    await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlg-message-box[1]/div[1]/div[3]/button[1]").click();
    await page.waitForLoadState('networkidle');
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await page.locator("//button[contains(text(),\"Request  Lock\")]").scrollIntoViewIfNeeded();
    await page.locator("//button[contains(text(),\"Request  Lock\")]").waitFor({ state: 'visible' });
    await page.locator("//button[contains(text(),\"Request  Lock\")]").click();
    // [DISABLED] Wait until the element Confirm For Request Lock is visible
    // await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").waitFor({ state: 'visible' });
    while (!(await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").click();
    while (!(await page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li/div/div/div/div)[1]/span[2][text()=\"Locked\"] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//span[contains(text(),\"Lock Requested\")]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li/div/div/div/div)[1]/span[2][text()=\"Locked\"] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//span[contains(text(),\"Lock Requested\")]")).toBeVisible();
    await page.locator("//button[normalize-space()='Lock']").waitFor({ state: 'visible' });
    await page.locator("//button[normalize-space()='Lock']").click();
    while (!(await page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li/div/div/div/div)[1]/span[2][text()=\"Locked\"] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//span[contains(text(),\"Locked\")]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li/div/div/div/div)[1]/span[2][text()=\"Locked\"] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//span[contains(text(),\"Locked\")]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]").waitFor({ state: 'visible' });
    await page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]").click();
    if (await page.locator("//div[@class=\"modal-body\"]//button[text()=\" Confirm \"]").isVisible()) {
      await page.locator("//div[@class=\"modal-body\"]//button[text()=\" Confirm \"]").click();
    }
    while (!(await page.locator("//span[normalize-space()='Lock Cancelled']").isVisible())) {
      await page.waitForTimeout(10000);
    }
    await expect(page.locator("//span[normalize-space()='Lock Cancelled']")).toBeVisible();
    await page.locator("//button[text()=\"  Allow  Current  Market  Pricing \"] | //button[contains(text(),'Current  Market  Pricing')]").waitFor({ state: 'visible' });
    await page.locator("//button[text()=\"  Allow  Current  Market  Pricing \"] | //button[contains(text(),'Current  Market  Pricing')]").click();
    await page.locator("//span[text()=\"Current Market Pricing Allowed\"] | //span[text()=\"Allow Current Market Pricing\"]").waitFor({ state: 'visible' });
    await page.locator("//button[text()=\"  Price \"]").waitFor({ state: 'visible' });
    await page.locator("//button[text()=\"  Price \"]").click();
    while (!(await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"]").isVisible())) {
      await page.waitForTimeout(10000);
    }
    await expect(page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"]")).toBeVisible();
    await page.locator("//button[@class='btn btn-danger text-uppercase']").click();
    await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"]").click();
    await page.locator("//button[contains(text(),\"Confirm\")]").click();
    await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlg-message-box[1]/div[1]/div[3]/button[1]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await page.locator("//body/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/div[3]/div[2]/app-lock-panel[1]/div[1]/ul[1]/div[1]/div[1]/li[1]/div[2]/div[3]/app-lock-special-action[1]/button[1] | //button[contains(text(),'  Request  Lock')]").waitFor({ state: 'visible' });
    await page.locator("//body/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/div[3]/div[2]/app-lock-panel[1]/div[1]/ul[1]/div[1]/div[1]/li[1]/div[2]/div[3]/app-lock-special-action[1]/button[1] | //button[contains(text(),'  Request  Lock')]").click();
    if (true) /* Element Alert Popup is visible */ {
      vars["Alert Message In Request Lock"] = await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlg-message-box[1]/div[1]/div[2]/div[1]/span[1]").textContent() || '';
      await page.locator("//span[text()[normalize-space() = \"OK\"]]").click();
      await page.locator("//button[text()[normalize-space() = \"Lock Request with Price Concession\"]]").click();
      if (true) /* Element Alert Message is visible */ {
        vars["Alert message In Lock Request With Price Concession"] = await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlg-message-box[1]/div[1]/div[2]/div[1]/span[1]").textContent() || '';
        await page.locator("//span[text()[normalize-space() = \"OK\"]]").click();
      }
    }
    // [DISABLED] Wait until the element Confirm For Request Lock is visible
    // await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").waitFor({ state: 'visible' });
    while (!(await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").click();
    while (!(await page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li/div/div/div/div)[1]/span[2][text()=\"Locked\"] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//span[contains(text(),\"Lock Requested\")]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("(//h4[text()=\" Lock Information \"]/../../div[2]//ul//li/div/div/div/div)[1]/span[2][text()=\"Locked\"] | (//h4[text()=\" Lock Information \"]/../../../div[2]//ul/div/div[1]/li)//span[contains(text(),\"Lock Requested\")]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Deny Request\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
