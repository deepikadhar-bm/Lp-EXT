import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS07_TC03_02_If LD approves lock, Below Events will be seen(AL)', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_PricedAuto_lock_Policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_Priced_Statu(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    vars["NoteRateBeforeLock"] = await page.locator("(//span[text()=\"Note Rate\"]/following::div)[1]").textContent() || '';
    vars["PriceValueBeforeLock"] = await page.locator("//div[text()=\"Price\"]/..//div[2]").textContent() || '';
    vars["ExpirationDateBeforeLock"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    await page.locator("//h6[text()[normalize-space() = \"Pricing Adjustment\"]]").scrollIntoViewIfNeeded();
    vars["RateValueAdjustmentSummaryBeforeLock"] = await page.locator("((//table)[1]//th[text()=\"Rate\"]//following-sibling::td//div)[last()]").textContent() || '';
    vars["PriceValueAdjustmentSummaryBeforeLock"] = await page.locator("((//table)[1]//th[text()=\"Price\"]//following-sibling::td//div)[last()]").textContent() || '';
    vars["PricingAdjustmentFinalValueBeforeLock"] = await page.locator("//table[@id='pricing-table']/tfoot/tr/td[last()]/div").textContent() || '';
    await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]")).toBeVisible();
    vars["LockRequestComment"] = "Requesting Lock";
    await page.locator("//div[@id='lock-information']/div[1]/div[2]/div[1]/div[1]/app-lock-panel[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/textarea[1]").fill(vars["LockRequestComment"]);
    await expect(page.locator("//button[text()[normalize-space() = \"Request Lock\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Request Lock\"]]").click();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.locator("//button[text()[normalize-space() = \"Request Extension\"]]").waitFor({ state: 'visible' });
    await page.locator("//span[text()[normalize-space() = \"Locked\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//span[text()[normalize-space() = \"Locked\"]]")).toBeVisible();
    vars["LoanStatusUnderLockInformation"] = await page.locator("//span[text()[normalize-space() = \"Locked\"]]").textContent() || '';
    await expect(page.locator("//span[text()[normalize-space() = \"Locked\"]]")).toContainText("Locked");
    vars["LockedDate"] = await page.locator("//div[contains(text(),\" Date \")]//span").textContent() || '';
    vars["CurrentDate"] = (() => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = { timeZone: "Asia/Kolkata" };
      const fmt = "MM/dd/yyyy";
      // Map Java date format to Intl parts
      const parts = new Intl.DateTimeFormat('en-US', { ...opts, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).formatToParts(d);
      const p = Object.fromEntries(parts.map(({type, value}) => [type, value]));
      return fmt.replace('yyyy', p.year || '').replace('yy', (p.year||'').slice(-2)).replace('MM', p.month || '').replace('dd', p.day || '').replace('HH', String(d.getHours()).padStart(2,'0')).replace('hh', p.hour || '').replace('mm', p.minute || '').replace('ss', p.second || '').replace('a', p.dayPeriod || '').replace(/M(?!M)/g, String(parseInt(p.month||'0'))).replace(/d(?!d)/g, String(parseInt(p.day||'0'))).replace(/h(?!h)/g, String(parseInt(p.hour||'0')));
    })();
    expect(String(vars["LockedDate"])).toBe(vars["CurrentDate"]);
    await expect(page.locator("//button[text()[normalize-space() = \"Request 1 Day Extension\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Extension\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Floating Concession\"]]")).toBeVisible();
    await expect(page.getByText(vars["LockRequestComment"])).toBeVisible();
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    vars["NoteRateAfterLock"] = await page.locator("(//span[text()=\"Note Rate\"]/following::div)[1]").textContent() || '';
    vars["PriceValueAfterLock"] = await page.locator("//div[text()=\"Price\"]/..//div[2]").textContent() || '';
    vars["ExpirationDateAfterLock"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    await page.locator("//h6[text()[normalize-space() = \"Pricing Adjustment\"]]").scrollIntoViewIfNeeded();
    vars["RateValueAdjustmentSummaryAfterLock"] = await page.locator("((//table)[1]//th[text()=\"Rate\"]//following-sibling::td//div)[last()]").textContent() || '';
    vars["PriceValueAdjustmentSummaryAfterLock"] = await page.locator("((//table)[1]//th[text()=\"Price\"]//following-sibling::td//div)[last()]").textContent() || '';
    vars["PricingAdjustmentFinalValueAfterLock"] = await page.locator("//table[@id='pricing-table']/tfoot/tr/td[last()]/div").textContent() || '';
    expect(String(vars["NoteRateBeforeLock"])).toBe(vars["NoteRateAfterLock"]);
    expect(String(vars["PriceValueBeforeLock"])).toBe(vars["PriceValueAfterLock"]);
    expect(String(vars["ExpirationDateBeforeLock"])).toBe(vars["ExpirationDateAfterLock"]);
    expect(String(vars["RateValueAdjustmentSummaryBeforeLock"])).toBe(vars["RateValueAdjustmentSummaryAfterLock"]);
    expect(String(vars["PriceValueAdjustmentSummaryBeforeLock"])).toBe(vars["PriceValueAdjustmentSummaryAfterLock"]);
    expect(String(vars["PricingAdjustmentFinalValueBeforeLock"])).toBe(vars["PricingAdjustmentFinalValueAfterLock"]);
    await page.locator("//a[@aria-label=\"Pipeline\"]//span").click();
    await page.locator("//input[@id='searchText']").fill(vars["LoanNumber"]);
    await page.waitForTimeout(30000);
    vars["LoanStatusInPipeline"] = await page.locator("//td[@data-title=\"LP Lock Status\"]").textContent() || '';
    await expect(page.locator("//td[@data-title=\"LP Lock Status\"]")).toContainText("Locked");
    expect(String(vars["LoanStatusUnderLockInformation"])).toBe(vars["LoanStatusInPipeline"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
