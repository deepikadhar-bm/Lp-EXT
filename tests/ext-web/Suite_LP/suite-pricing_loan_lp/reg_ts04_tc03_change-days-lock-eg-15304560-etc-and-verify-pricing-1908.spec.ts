import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Pricing_Loan_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC03_Change days lock (eg. 15/30/45/60 etc)  and verify pricing', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    // [DISABLED] Verifying and Clicking on Los Lock Status Unlocked(Manual LD)
    // await stepGroups.stepGroup_Verifying_and_Clicking_on_Los_Lock_Status_UnlockedManual_LD(page, vars);
    await expect(page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]")).toBeVisible();
    await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    await page.waitForTimeout(30000);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await expect(page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]")).toBeVisible();
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await expect(page.locator("//label[@aria-label=\"Lock Days\"]")).toBeVisible();
    await page.locator("//div[@id='main-div']/div[1]/div[2]/div[1]/fieldset[1]/div[2]/div[4]/div[1]/div[3]/div[1]/lib-pricing-field-item-view[1]/div[1]/div[1]/lib-bs2-multi-select[1]/div[1]/div[1]/button[1]").click();
    await page.locator("//li[contains(@class,\"item active\")]").click();
    await page.locator("//li[contains(@class,'lock-days-15-days') and contains(normalize-space(.),'15 days')]").click();
    await expect(page.locator("//button[@aria-label=\"Search\"]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'hidden' });
    await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Lock Period\"]]")).toBeVisible();
    for (let i = 0; i < await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").count(); i++) {
      expect(await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").nth(i).getAttribute("data-value")).toContain(String("15"));
    }
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[@aria-label=\"Lock Days\"]")).toBeVisible();
    await page.locator("//div[@id='main-div']/div[1]/div[2]/div[1]/fieldset[1]/div[2]/div[4]/div[1]/div[3]/div[1]/lib-pricing-field-item-view[1]/div[1]/div[1]/lib-bs2-multi-select[1]/div[1]/div[1]/button[1]").click();
    await page.locator("//li[contains(@class,\"item active\")]").click();
    await page.locator("//li[contains(@class,'lock-days-30-days') and contains(normalize-space(.),'30 days')]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Lock Period\"]]")).toBeVisible();
    for (let i = 0; i < await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").count(); i++) {
      expect(await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").nth(i).getAttribute("data-value")).toContain(String("30"));
    }
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[@aria-label=\"Lock Days\"]")).toBeVisible();
    await page.locator("//div[@id='main-div']/div[1]/div[2]/div[1]/fieldset[1]/div[2]/div[4]/div[1]/div[3]/div[1]/lib-pricing-field-item-view[1]/div[1]/div[1]/lib-bs2-multi-select[1]/div[1]/div[1]/button[1]").click();
    await page.locator("//li[contains(@class,\"item active\")]").click();
    await page.locator("//li[contains(@class,'lock-days-45-days') and contains(normalize-space(.),'45 days')]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Lock Period\"]]")).toBeVisible();
    for (let i = 0; i < await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").count(); i++) {
      expect(await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").nth(i).getAttribute("data-value")).toContain(String("45"));
    }
    // [DISABLED] Click on SEARCH FIELDS
    // await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    // [DISABLED] Verify that the element Lock Days Dropdown is present and With Scrollable FALSE
    // await expect(page.locator("//label[@aria-label=\"Lock Days\"]")).toBeVisible();
    // [DISABLED] Click on Lock Days Dropdown
    // await page.locator("//label[@aria-label=\"Lock Days\"]").click();
    // [DISABLED] Click on Select 60 days from dropdown
    // await page.locator("//li[contains(@class,'lock-days-60-days') and contains(normalize-space(.),'60 days')]").click();
    // [DISABLED] Click on Search Button
    // await page.locator("//button[@aria-label=\"Search\"]").click();
    // [DISABLED] Wait until the element Eligible QuickPricer is visible
    // await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    // [DISABLED] Verify that the element Lock Period in results columns is present and With Scrollable FALSE
    // await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Lock Period\"]]")).toBeVisible();
    // [DISABLED] Verify multiple elements Lock Period Data Column attribute data value for same xpath have the partial text 60
    // for (let i = 0; i < await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").count(); i++) {
    //   expect(await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div").nth(i).getAttribute("data-value")).toContain(String("60"));
    // }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
