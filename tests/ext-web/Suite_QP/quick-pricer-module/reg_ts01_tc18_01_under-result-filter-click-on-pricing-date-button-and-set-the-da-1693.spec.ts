import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC18_01_Under Result Filter click on Pricing Date button and set the date. Make sure historical pricing for set date produce the results', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").scrollIntoViewIfNeeded();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 1"]);
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//span[.='Result Filter']")).toBeVisible();
    await page.locator("//span[.='Result Filter']").click();
    await expect(page.locator("//span[.='Pricing Date']")).toBeVisible();
    await page.locator("//span[.='Pricing Date']").click();
    await page.locator("//button[@aria-label=\"Set Date\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[@aria-label=\"Set Date\"]")).toBeVisible();
    vars["CurrentDate"] = (() => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = { timeZone: "Asia/Kolkata" };
      const fmt = "MM/dd/yyyy";
      // Map Java date format to Intl parts
      const parts = new Intl.DateTimeFormat('en-US', { ...opts, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).formatToParts(d);
      const p = Object.fromEntries(parts.map(({type, value}) => [type, value]));
      return fmt.replace('yyyy', p.year || '').replace('yy', (p.year||'').slice(-2)).replace('MM', p.month || '').replace('dd', p.day || '').replace('HH', String(d.getHours()).padStart(2,'0')).replace('hh', p.hour || '').replace('mm', p.minute || '').replace('ss', p.second || '').replace('a', p.dayPeriod || '').replace(/M(?!M)/g, String(parseInt(p.month||'0'))).replace(/d(?!d)/g, String(parseInt(p.day||'0'))).replace(/h(?!h)/g, String(parseInt(p.hour||'0')));
    })();
    vars[""] = new Date(String("CurrentDay")).toLocaleDateString('en-US', { weekday: 'long' });
    if (String(vars["CurrentDay"]) === String("Sunday")) {
      vars["PastDate"] = /* DateFunctions :: Date Before Today */ '';
    } else if (String(vars["CurrentDay"]) === String("Monday")) {
      vars["PastDate"] = /* DateFunctions :: Date Before Today */ '';
    } else {
      vars["PastDate"] = /* DateFunctions :: Date Before Today */ '';
    }
    await page.locator("//td[@role=\"gridcell\"]/span[text()=\"$|PastDate|\" and not(contains(@class,\"is-other-month\"))]").click();
    await page.locator("//input[@placeholder=\"HH\"]").clear();
    await page.locator("//input[@placeholder=\"HH\"]").fill("02");
    await page.locator("//input[@placeholder=\"MM\"]").clear();
    await page.locator("//input[@placeholder=\"MM\"]").fill("00");
    if (true) /* Element AM Button Calendar is visible */ {
      await page.locator("//button[text()[normalize-space() = \"AM\"]]").click();
    }
    await expect(page.locator("//button[text()[normalize-space() = \"PM\"]]")).toBeVisible();
    await page.locator("//button[normalize-space(text())=\"Set Date\"]").click();
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
