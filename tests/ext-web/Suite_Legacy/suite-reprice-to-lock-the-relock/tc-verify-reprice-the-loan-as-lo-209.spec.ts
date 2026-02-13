import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Reprice To Lock The Relock', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Reprice the loan as  LO', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LO(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.waitForLoadState('networkidle');
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    // [DISABLED] SG: Fetching Encrypted Loan Number from UI
    // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
    await page.waitForTimeout(120000);
    await page.waitForLoadState('networkidle');
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await page.locator("//button[contains(text(),\"Reprice\")]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]")).toBeVisible();
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[contains(text(),\"Reprice\")]").click();
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]")).toBeVisible();
    await page.locator("//div[contains(@class, 'modal-title-override') and contains(@class, 'sticky-top') and contains(@class, 'text-grey') and contains(@class, 'bold')]/following-sibling::div[contains(@class, 'd-flex') and contains(@class, 'justify-content-end')]/DIV[2]/BUTTON[1]|(//div[@class=\"modal-content\"]/div[2]/div[2]/button[text()=\" Confirm \"])[1]").waitFor({ state: 'visible' });
    vars["Confirmation Date"] = await page.locator("//div[text()=\" You will be directed to pricing results valid as of \"]/div").textContent() || '';
    vars["Confirmation Date"] = String(vars["Confirmation Date"]).split(",")["1"] || '';
    await page.locator("//div[contains(@class, 'modal-title-override') and contains(@class, 'sticky-top') and contains(@class, 'text-grey') and contains(@class, 'bold')]/following-sibling::div[contains(@class, 'd-flex') and contains(@class, 'justify-content-end')]/DIV[2]/BUTTON[1]|(//div[@class=\"modal-content\"]/div[2]/div[2]/button[text()=\" Confirm \"])[1]").click();
    await page.waitForLoadState('networkidle');
    if (true) /* Verify that the element Impound Types Dropdown displays text */ {
      await page.locator("//label[contains(text(),\"Impound Types\")]/../../../lib-pricing-dyna-field-item-view/div/div/select").click();
      await page.locator("//select/option[contains(.,\"No Impounds\")] ").click();
    }
    if (true) /* Element Lock Days Dropdown is visible */ {
      if (true) /* Element 30 days Dropdown is not visible */ {
        await page.locator("//label[@aria-label=\"Lock Days\"]").click();
        await page.locator("//ul/li/span[contains(.,\"30 days\")] | //select[@id=\"dayLocks\"]/option[text()=\"30 days \"]").click();
      }
    }
    if (true) /* Element Search Button Under Search Fields is visible */ {
      await page.locator("//button[contains(.,\"Search\")][last()]").evaluate(el => (el as HTMLElement).click());
    }
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(60000);
    await page.locator("//div[contains(text(),\" Historical Pricing Date results valid as of\")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(text(),\" Historical Pricing Date results valid as of\")]")).toBeVisible();
    vars["Historical price with Time"] = await page.locator("//div[contains(text(),\" Historical Pricing Date results valid as of\")]").textContent() || '';
    vars["Historical date and time"] = String(vars["Historical price with Time"]).substring(45, String(vars["Historical price with Time"]).length - 1);
    vars["Historical date and time"] = String(vars["Historical date and time"]).trim();
    vars[""] = String('').replace(/./g, '');
    await expect(page.locator("//div[contains(text(),\" Historical Pricing Date results valid as of\")]")).toContainText(vars["Confirmation Date"]);
    await page.locator("//table/tbody/tr").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("1000"));
    // [DISABLED] Verify that the element Adjustments and Disqualifications is displayed
    // await expect(page.locator("//h5[normalize-space()='Adjustments and Disqualifications']")).toBeVisible();
    if (await page.locator("//label[contains(text(),\"Best X Pricing\")]").isVisible()) {
      await page.locator("//label[contains(text(),\"Best X Pricing\")]").click();
    }
    await page.locator("//label[contains(text(),\"Best X Pricing\")]").click();
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]/div").click();
    await page.locator("//h5[normalize-space()='Adjustments and Disqualifications']").waitFor({ state: 'visible' });
    await page.locator("//div[@class=\"modal-body\"]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("1000"));
    await expect(page.locator("//th[contains(text(),\"Extension\")]")).toBeVisible();
    await expect(page.locator("//th[contains(text(),\"Concession\")]")).toBeVisible();
    // [DISABLED] Scroll down to the element Heading: Rate Adjustment into view
    // await page.locator("//h6[contains(text(),\"Rate Adjustment\")]").scrollIntoViewIfNeeded();
    await page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]").click();
    await page.locator("(//td[12])[1]/div/a | (//td[7])[1]/div/a | (//table/tbody)[1]/tr/td[11]/div/a | (//table/tbody)[1]/tr/td[8]/div/a").waitFor({ state: 'visible' });
    vars["Program Name"] = await page.locator("(//td[12])[1]/div/a | (//td[7])[1]/div/a | (//table/tbody)[1]/tr/td[11]/div/a | (//table/tbody)[1]/tr/td[8]/div/a").textContent() || '';
    await page.locator("//div[contains(@class, 'resultTemplate')]/DIV[1]/DIV[1]/DIV[2]/LIB-PRICING-RESULT-TABLE[1]/TABLE[1]/TBODY[1]/TR[1]/TD[16]/DIV[1]/DIV[1]/DIV[1]/A[1] | //div[contains(@class, 'resultTemplate')]/DIV[1]/DIV[1]/DIV[2]/LIB-PRICING-RESULT-TABLE[1]/table[1]/tbody[1]/tr[1]/td[11]/div[1]/div[1]/div[1]/a[1] | //a[@tooltip=\"Request Lock\"]").click();
    await expect(page.locator("//table[contains(@class, 'mobile-friendly-table')]/THEAD[1]/TR[1]/TH[2]")).toBeVisible();
    await expect(page.locator("//table[contains(@class, 'mobile-friendly-table')]/THEAD[1]/TR[1]/TH[3]")).toBeVisible();
    await expect(page.locator("(//th[@data-th=\"New Pricing\"])[3]")).toContainText(vars["Program Name"]);
    vars["Historical price with Time in popup"] = await page.locator("//th[text()='Valid Period']/../th[2]").textContent() || '';
    vars["Trimmed Historical price with Time in popup"] = String(vars["Historical price with Time in popup"]).trim();
    vars["Formatted Historical price with Time in popup"] = (() => {
      const d = new Date(String(vars["Trimmed Historical price with Time in popup"]));
      const _p = { yyyy: String(d.getFullYear()), yy: String(d.getFullYear()).slice(-2), MM: String(d.getMonth()+1).padStart(2,'0'), M: String(d.getMonth()+1), dd: String(d.getDate()).padStart(2,'0'), d: String(d.getDate()), HH: String(d.getHours()).padStart(2,'0'), hh: String(d.getHours()%12||12).toString().padStart(2,'0'), h: String(d.getHours()%12||12), mm: String(d.getMinutes()).padStart(2,'0'), ss: String(d.getSeconds()).padStart(2,'0'), a: d.getHours() >= 12 ? 'PM' : 'AM' };
      return "M/d/yyyy, h:mm:ss a".replace('yyyy',_p.yyyy).replace('yy',_p.yy).replace('MM',_p.MM).replace('dd',_p.dd).replace('HH',_p.HH).replace('hh',_p.hh).replace('mm',_p.mm).replace('ss',_p.ss).replace(/a/g,_p.a).replace(/M(?!M)/g,_p.M).replace(/d(?!d)/g,_p.d).replace(/h(?!h)/g,_p.h);
    })();
    expect(String(vars["Rate Sheet Date"]).toLowerCase()).toContain(String(vars["Formatted Historical price with Time in popup"]).toLowerCase());
    await page.locator("//button[contains(text(),\"Request Lock\")]").click();
    await page.locator("//button[contains(text(),\"Ok\")]").waitFor({ state: 'visible' });
    await page.locator("//button[contains(text(),\"Ok\")]").click();
    await page.waitForLoadState('networkidle');
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await page.locator("@|Loan Status|").waitFor({ state: 'visible' });
    await expect(page.locator("@|Loan Status|")).toBeVisible();
    await stepGroups.stepGroup_SG_Status_Verification(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Encompass_API_Verification(page, vars);
    await stepGroups.stepGroup_SG_Comparing_values_between_PPE_EXT_and_API_for_loan_data(page, vars);
    // Write to test data profile: "Execution Status" = "Y"
    // TODO: Test data profile writes need custom implementation
  });
});
