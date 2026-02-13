import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Events and Expiration Date With Request Lock For EXT Loan Officer', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").scrollIntoViewIfNeeded();
    await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").waitFor({ state: 'visible' });
    vars["ExpectedExpirationDate"] = (() => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = { timeZone: "America/New_York" };
      const fmt = "MM/dd/yy";
      // Map Java date format to Intl parts
      const parts = new Intl.DateTimeFormat('en-US', { ...opts, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).formatToParts(d);
      const p = Object.fromEntries(parts.map(({type, value}) => [type, value]));
      return fmt.replace('yyyy', p.year || '').replace('yy', (p.year||'').slice(-2)).replace('MM', p.month || '').replace('dd', p.day || '').replace('HH', String(d.getHours()).padStart(2,'0')).replace('hh', p.hour || '').replace('mm', p.minute || '').replace('ss', p.second || '').replace('a', p.dayPeriod || '').replace(/M(?!M)/g, String(parseInt(p.month||'0'))).replace(/d(?!d)/g, String(parseInt(p.day||'0'))).replace(/h(?!h)/g, String(parseInt(p.hour||'0')));
    })();
    vars["Expected Expiration Date"] = (() => { const d = new Date(String(vars["ExpectedExpirationDate"])); d.setDate(d.getDate() + parseInt(String("30"))); return d.toLocaleDateString('en-US'); /* format: MM/dd/yyyy */ })();
    await stepGroups.stepGroup_SG_Request_Lockand_Concession_Events_Verification(page, vars);
    vars["Expected Expiration Date"] = /* DateFunctions :: dateAfterToday */ '';
    await expect(page.locator("//div[text()=\"Lock Expiration Date\"]/../div[2]")).toContainText(vars["Expected Expiration Date"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
