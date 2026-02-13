import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Suite: Relock - Adding Expired Loans (Override)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Relock - Adding Expired Loans (Override)', async ({ page }) => {
    // Prerequisite: Pre-cond: Create a loan API
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    // Write to test data profile: "Loan Number" = vars["LOAN ID"]
    // TODO: Test data profile writes need custom implementation
    await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
    await stepGroups.stepGroup_SG_Loan_Details_Page_Verification(page, vars);
    await page.locator("(//div[contains(@class, 'hide-mob')])[1]//button[text()[normalize-space() = \"Get Pricing\"]]").click();
    await expect(page.locator("//span[contains(text(),\"Pricing search parameters missing\")]")).toBeVisible();
    await page.locator("//span[text()[normalize-space() = \"OK\"]]").click();
    await page.waitForLoadState('networkidle');
    if (true) /* Checkbox Show Disqualified Checkbox is checked */ {
      await page.locator("//input[@id='show-disqualified']").uncheck();
    }
    await page.locator("//label[@for=\"dti\"]/ancestor::div[contains(@class, 'form-group')]/preceding-sibling::div[contains(normalize-space(),\"Result Filter\")]").click();
    await page.locator("//span[text()[normalize-space() = \"Pricing Date\"]]").click();
    await page.locator("//nav[@id='sidebar']/app-public-pricing-search[1]/app-pricing-search[1]/div[5]/div[1]/div[1]/bs-datepicker-inline[1]/bs-datepicker-inline-container[1]/div[1]/div[1]/div[1]/div[1]/bs-days-calendar-view[1]/bs-calendar-layout[1]/div[1]/bs-datepicker-navigation-view[1]/button[1]/span[1]").click();
    await page.locator("//nav[@id='sidebar']/app-public-pricing-search[1]/app-pricing-search[1]/div[5]/div[1]/div[1]/bs-datepicker-inline[1]/bs-datepicker-inline-container[1]/div[1]/div[1]/div[1]/div[1]/bs-days-calendar-view[1]/bs-calendar-layout[1]/div[2]/table[1]/tbody[1]/tr[2]/td[5]/span[1]").click();
    await page.locator("//nav[@id='sidebar']/app-public-pricing-search[1]/app-pricing-search[1]/div[5]/div[1]/div[2]/button[1]").click();
    vars["Previous Month Date from Loan Pricer"] = await page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-pricing[1]/div[2]/div[1]/nav[1]/app-public-pricing-search[1]/app-pricing-search[1]/div[1]/div[1]/div[2]/div[2]/div[1]/button[1]/span").textContent() || '';
    await page.locator("//span[text()[normalize-space() = \"Override Settings\"]]").click();
    await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]").check();
    await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]").check();
    await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/input[1]").check();
    await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]").fill("0.125");
    await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]").fill("0.115");
    await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/input[1]").fill("0.25");
    await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-override-fees-settings[1]/div[1]/div[3]/div[1]/button[2]").click();
    await stepGroups.stepGroup_SG_Enter_Data_In_Search_Fields(page, vars);
    await page.waitForLoadState('networkidle');
    await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[13]/div[1]").click();
    await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]").click();
    await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("365"));
    await expect(page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[5]/td[1]/div[1]")).toHaveAttribute('title', "0.125");
    await expect(page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[6]/td[1]/div[1]")).toHaveAttribute('aria-label', "0.115");
    // [DISABLED] Verify that the element Override - Concessions in Price Adj has value 0.115 for data
    // await expect(page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[6]/td[1]/div[1]")).toHaveAttribute('title', "0.115");
    await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("265"));
    await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("365"));
    await expect(page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr[7]/td[1]/div[1]")).toHaveAttribute('title', "0.250");
    await page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]").click();
    await page.locator("//*[@ng-reflect-tooltip=\"Export Pricing\"]").click();
    // [DISABLED] Click on Fields Old Pricing Results New Pricing Results Rate
    // await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]").click();
    // [DISABLED] Scroll the element Fields Old Pricing Results New Pricing Results Rate to 116 offset vertically
    // await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("116"));
    await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/input[1]").check();
    await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("240"));
    await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]").check();
    await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]").click();
    await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlp-ellie-export-differences[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]").fill(/* DateFunctions :: dateAfterToday */ '');
    vars["Expiration Date Value Data"] = await page.locator("//input[@id='overrideExpirationDateValue']").getAttribute('title') || '';
    // Write to test data profile: "Loan Expiration Date" = vars["Expiration Date Value Data"]
    // TODO: Test data profile writes need custom implementation
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.waitForTimeout(20000);
    await page.getByText("Export pricing is successful").waitFor({ state: 'visible' });
    await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlg-message-box[1]/div[1]/div[3]/button[1]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    vars["Lock Expiration Date from Loan View"] = await page.locator("//div[@class='rounded data-content']//div[2]//div[1]//div[7]/div[2]").textContent() || '';
    vars["Lock Expiration Date from Loan View"] = String(vars["Lock Expiration Date from Loan View"]).trim();
    expect(String(vars["Lock Expiration Date from Loan View"])).toBe(String(/* DateFunctions :: dateAfterToday */ ''));
    vars["Formatted Previous Month Date"] = (() => {
      const d = new Date(String(vars["Previous Month Date from Loan Pricer"]));
      const _p = { yyyy: String(d.getFullYear()), yy: String(d.getFullYear()).slice(-2), MM: String(d.getMonth()+1).padStart(2,'0'), M: String(d.getMonth()+1), dd: String(d.getDate()).padStart(2,'0'), d: String(d.getDate()), HH: String(d.getHours()).padStart(2,'0'), hh: String(d.getHours()%12||12).toString().padStart(2,'0'), h: String(d.getHours()%12||12), mm: String(d.getMinutes()).padStart(2,'0'), ss: String(d.getSeconds()).padStart(2,'0'), a: d.getHours() >= 12 ? 'PM' : 'AM' };
      return "M/d/yyyy, hh:mm:ss a".replace('yyyy',_p.yyyy).replace('yy',_p.yy).replace('MM',_p.MM).replace('dd',_p.dd).replace('HH',_p.HH).replace('hh',_p.hh).replace('mm',_p.mm).replace('ss',_p.ss).replace(/a/g,_p.a).replace(/M(?!M)/g,_p.M).replace(/d(?!d)/g,_p.d).replace(/h(?!h)/g,_p.h);
    })();
    await expect(page.locator("(//div[contains(text(),\"Priced using historical rates as of\")])[2]")).toContainText(vars["Formatted Previous Month Date"]);
    await page.locator("//button[text()[normalize-space() = \"Request Lock\"]]").waitFor({ state: 'visible' });
    await page.locator("//button[text()[normalize-space() = \"Request Lock\"]]").click();
    await page.locator("//div[contains(text(),\"Are you sure you want to submit a lock request?\")]/../..//button[contains(text(),\"Confirm\")]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Refresh_Page_if_Popup_Not_Present(page, vars);
    await page.locator("//div[contains(text(),\"Are you sure you want to submit a lock request?\")]/../..//button[contains(text(),\"Confirm\")]").click();
    while (true) /* While element LockRequested is visible on the page */ {
      // [DISABLED] Wait for 30 seconds
      // await page.waitForTimeout(30000);
    }
    if (true) /* Element Lock Button is enabled */ {
      await page.locator("//button[normalize-space()='Lock']").click();
    }
    while (await page.locator("//span[contains(text(),\"Locked\")]").isVisible()) {
      await page.waitForTimeout(30000);
    }
    await page.locator("//a[text()[normalize-space() = \"More Details ...\"]]").click();
    await expect(page.locator("//th[text()[normalize-space() = \"Override - Extensions\"]]/following-sibling::td//div[contains(@class, 'percent')]")).toHaveAttribute('title', "0.125");
    await expect(page.locator("//th[text()[normalize-space() = \"Override - Concessions\"]]/following-sibling::td//div[contains(@class, 'percent')]")).toHaveAttribute('aria-label', "0.115");
    await expect(page.locator("//th[text()[normalize-space() = \"Override - Relock Fee\"]]/following-sibling::td//div[contains(@class, 'percent')]")).toHaveAttribute('aria-label', "0.250");
    // [DISABLED] Click on Pipeline Navigation Button
    // await page.locator("//a[@aria-label=\"Pipeline\"]//span[contains(@class, 'dlp-icon') and contains(@class, 'fa-list-alt')]").click();
    // [DISABLED] Scroll the window to 0 offset vertically
    // await page.evaluate((y) => window.scrollTo(0, y), parseInt("0"));
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    vars["Expected Loan Expiration Date"] = (() => {
      const d = new Date(String(vars["Lock Expiration Date from Loan View"]));
      const _p = { yyyy: String(d.getFullYear()), yy: String(d.getFullYear()).slice(-2), MM: String(d.getMonth()+1).padStart(2,'0'), M: String(d.getMonth()+1), dd: String(d.getDate()).padStart(2,'0'), d: String(d.getDate()), HH: String(d.getHours()).padStart(2,'0'), hh: String(d.getHours()%12||12).toString().padStart(2,'0'), h: String(d.getHours()%12||12), mm: String(d.getMinutes()).padStart(2,'0'), ss: String(d.getSeconds()).padStart(2,'0'), a: d.getHours() >= 12 ? 'PM' : 'AM' };
      return "MM/dd/yyyy".replace('yyyy',_p.yyyy).replace('yy',_p.yy).replace('MM',_p.MM).replace('dd',_p.dd).replace('HH',_p.HH).replace('hh',_p.hh).replace('mm',_p.mm).replace('ss',_p.ss).replace(/a/g,_p.a).replace(/M(?!M)/g,_p.M).replace(/d(?!d)/g,_p.d).replace(/h(?!h)/g,_p.h);
    })();
    await expect(page.locator("(//td[@data-title='Lock Expiration'])[1]")).toContainText(vars["Expected Loan Expiration Date"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
