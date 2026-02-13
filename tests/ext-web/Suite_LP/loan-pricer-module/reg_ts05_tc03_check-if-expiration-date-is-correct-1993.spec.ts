import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS05_TC03_Check if Expiration Date is correct', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_PricedManual_Policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await expect(page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Priced\"]")).toBeVisible();
    await page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Priced\"] and td[@data-title=\"Loan Officer\"]/div[normalize-space(text())=\"LoanOfficer2 TestSigma\"]]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    await page.waitForTimeout(30000);
    await stepGroups.stepGroup_Verifying_and_Clicking_on_Price_Button_in_Loan_Scenario_Page(page, vars);
    await expect(page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]")).toBeVisible();
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    vars["LockPeriodValue(table)"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.LOCK_PERIOD\"]//div)[1]").getAttribute('title') || '';
    await expect(page.locator("//th[text()[normalize-space() = \"Actions\"]]")).toBeVisible();
    await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"]").hover();
    await expect(page.getByText("Export Pricing")).toBeVisible();
    await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"]").click();
    await page.locator("//th[contains(text(),'New Pricing Results')]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()[normalize-space() = \"Export Pricing\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.locator("//div[text()[normalize-space() = \"Export pricing is successful\"]]").waitFor({ state: 'visible' });
    await page.locator("//button[text()[normalize-space() = \"Ok\"]]").click();
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    await stepGroups.stepGroup_Verifying_Lock_Expiration_Days_and_Handling_Weekends(page, vars);
    // [DISABLED] Store text from the element Lock Expiration Date2(Scenario) into a variable ActualLockExpirationDate
    // vars["ActualLockExpirationDate"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    // [DISABLED] Pick the current date MM/dd/yy by location UTC-05:00 and store into a variable CurrentDate
    // vars["CurrentDate"] = (() => {
    //   const d = new Date();
    //   const opts: Intl.DateTimeFormatOptions = { timeZone: "UTC-05:00" };
    //   const fmt = "MM/dd/yy";
    //   // Map Java date format to Intl parts
    //   const parts = new Intl.DateTimeFormat('en-US', { ...opts, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).formatToParts(d);
    //   const p = Object.fromEntries(parts.map(({type, value}) => [type, value]));
    //   return fmt.replace('yyyy', p.year || '').replace('yy', (p.year||'').slice(-2)).replace('MM', p.month || '').replace('dd', p.day || '').replace('HH', String(d.getHours()).padStart(2,'0')).replace('hh', p.hour || '').replace('mm', p.minute || '').replace('ss', p.second || '').replace('a', p.dayPeriod || '').replace(/M(?!M)/g, String(parseInt(p.month||'0'))).replace(/d(?!d)/g, String(parseInt(p.day||'0'))).replace(/h(?!h)/g, String(parseInt(p.hour||'0')));
    // })();
    // [DISABLED] Store DateFunctions :: Days After Given Date in ExpLockExpirationDate
    // vars["ExpLockExpirationDate"] = (() => { const d = new Date(String(vars["CurrentDate"])); d.setDate(d.getDate() + parseInt(String(vars["LockPeriodValue(table)"]))); return d.toLocaleDateString('en-US'); /* format: MM/dd/yy */ })();
    // [DISABLED] Get day from date ExpLockExpirationDate and format MM/dd/yy and store into ExpectedLockExpirationDay
    // vars[""] = new Date(String("ExpectedLockExpirationDay")).toLocaleDateString('en-US', { weekday: 'long' });
    if (true) /* Verify if ExpectedLockExpirationDay == Saturday */ {
      // [DISABLED] Get date after adding 2 to date CurrentDate with input format MM/dd/yy and output format MM/dd/yy and store into ActualLockExpirationDate
      // vars["ActualLockExpirationDate"] = (() => {
      //   const d = new Date(String(vars["CurrentDate"]));
      //   d.setDate(d.getDate() + parseInt(String("2")));
      //   const _p = { yyyy: String(d.getFullYear()), yy: String(d.getFullYear()).slice(-2), MM: String(d.getMonth()+1).padStart(2,'0'), M: String(d.getMonth()+1), dd: String(d.getDate()).padStart(2,'0'), d: String(d.getDate()), HH: String(d.getHours()).padStart(2,'0'), hh: String(d.getHours()%12||12).toString().padStart(2,'0'), h: String(d.getHours()%12||12), mm: String(d.getMinutes()).padStart(2,'0'), ss: String(d.getSeconds()).padStart(2,'0'), a: d.getHours() >= 12 ? 'PM' : 'AM' };
      //   return "MM/dd/yy".replace('yyyy',_p.yyyy).replace('yy',_p.yy).replace('MM',_p.MM).replace('dd',_p.dd).replace('HH',_p.HH).replace('hh',_p.hh).replace('mm',_p.mm).replace('ss',_p.ss).replace(/a/g,_p.a).replace(/M(?!M)/g,_p.M).replace(/d(?!d)/g,_p.d).replace(/h(?!h)/g,_p.h);
      // })();
    } else if (true) /* Verify if ExpectedLockExpirationDay == Sunday */ {
      // [DISABLED] Get date after adding 1 to date CurrentDate with input format MM/dd/yy and output format MM/dd/yy and store into ActualLockExpirationDate
      // vars["ActualLockExpirationDate"] = (() => {
      //   const d = new Date(String(vars["CurrentDate"]));
      //   d.setDate(d.getDate() + parseInt(String("1")));
      //   const _p = { yyyy: String(d.getFullYear()), yy: String(d.getFullYear()).slice(-2), MM: String(d.getMonth()+1).padStart(2,'0'), M: String(d.getMonth()+1), dd: String(d.getDate()).padStart(2,'0'), d: String(d.getDate()), HH: String(d.getHours()).padStart(2,'0'), hh: String(d.getHours()%12||12).toString().padStart(2,'0'), h: String(d.getHours()%12||12), mm: String(d.getMinutes()).padStart(2,'0'), ss: String(d.getSeconds()).padStart(2,'0'), a: d.getHours() >= 12 ? 'PM' : 'AM' };
      //   return "MM/dd/yy".replace('yyyy',_p.yyyy).replace('yy',_p.yy).replace('MM',_p.MM).replace('dd',_p.dd).replace('HH',_p.HH).replace('hh',_p.hh).replace('mm',_p.mm).replace('ss',_p.ss).replace(/a/g,_p.a).replace(/M(?!M)/g,_p.M).replace(/d(?!d)/g,_p.d).replace(/h(?!h)/g,_p.h);
      // })();
    } else {
      // [DISABLED] Get date after adding LockPeriodValue(table) to date CurrentDate with input format MM/dd/yy and output format MM/dd/yy and store into ActualLockExpirationDate
      // vars["ActualLockExpirationDate"] = (() => {
      //   const d = new Date(String(vars["CurrentDate"]));
      //   d.setDate(d.getDate() + parseInt(String(vars["LockPeriodValue(table)"])));
      //   const _p = { yyyy: String(d.getFullYear()), yy: String(d.getFullYear()).slice(-2), MM: String(d.getMonth()+1).padStart(2,'0'), M: String(d.getMonth()+1), dd: String(d.getDate()).padStart(2,'0'), d: String(d.getDate()), HH: String(d.getHours()).padStart(2,'0'), hh: String(d.getHours()%12||12).toString().padStart(2,'0'), h: String(d.getHours()%12||12), mm: String(d.getMinutes()).padStart(2,'0'), ss: String(d.getSeconds()).padStart(2,'0'), a: d.getHours() >= 12 ? 'PM' : 'AM' };
      //   return "MM/dd/yy".replace('yyyy',_p.yyyy).replace('yy',_p.yy).replace('MM',_p.MM).replace('dd',_p.dd).replace('HH',_p.HH).replace('hh',_p.hh).replace('mm',_p.mm).replace('ss',_p.ss).replace(/a/g,_p.a).replace(/M(?!M)/g,_p.M).replace(/d(?!d)/g,_p.d).replace(/h(?!h)/g,_p.h);
      // })();
    }
    // [DISABLED] Verify if ActualLockExpirationDate == ExpectedLockExpirationDate
    // expect(String(vars["ActualLockExpirationDate"])).toBe(vars["ExpectedLockExpirationDate"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
