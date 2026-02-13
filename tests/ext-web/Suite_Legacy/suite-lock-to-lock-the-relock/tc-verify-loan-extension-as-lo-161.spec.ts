import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Lock To Lock The Relock', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Loan Extension as LO', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LO(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.waitForLoadState('networkidle');
    await page.locator("(//table/tbody/tr)[2]").waitFor({ state: 'hidden' });
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    // [DISABLED] SG: Fetching Encrypted Loan Number from UI
    // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await expect(page.locator("//span[contains(text(),\"Locked\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]")).toBeVisible();
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[contains(text(),\"Extension  Request\")]").click();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]")).toBeVisible();
    await page.locator("//SELECT[@id='l-e']").waitFor({ state: 'visible' });
    vars["Days"] = "5";
    await page.locator("//SELECT[@id='l-e']").selectOption({ index: parseInt(vars["Days"]) });
    await page.waitForLoadState('networkidle');
    if (true) /* Element Extension day alert is visible */ {
      vars["Extension Error Model"] = await page.locator("//div[@class=\"modal-content\"]/app-dlg-message-box/div/div[2]/div/span").textContent() || '';
      await stepGroups.stepGroup_SG_Extension_Alert_Days_Seperation(page, vars);
      await page.locator("//button[@class='btn btn-danger text-uppercase']").click();
      vars["Lock Days and Point"] = await page.locator("//SELECT[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    } else {
      vars["Lock Days and Point"] = await page.locator("//SELECT[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
      vars["ExtensionDays"] = String(vars["Lock Days and Point"]).substring(0, String(vars["Lock Days and Point"]).length - 11);
    }
    await expect(page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1] | //div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV//BUTTON[text()=\" Confirm \"]")).toBeVisible();
    await page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1] | //div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV//BUTTON[text()=\" Confirm \"]").click();
    while (!(await page.locator("@|Loan Status|").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await stepGroups.stepGroup_SG_Status_Verification(page, vars);
    await page.waitForTimeout(30000);
    vars["TrimmedRequestedDate"] = await page.locator("//li[contains(text(),\"Requested Days\")]").textContent() || '';
    expect(String(vars["TrimmedRequestedDate"]).toLowerCase()).toContain(String(vars["ExtensionDays"]).toLowerCase());
    // [DISABLED] Verify that the element Requested Days Text displays text contains ExtensionDays
    // await expect(page.locator("//li[contains(text(),\"Requested Days\")]")).toContainText(vars["ExtensionDays"]);
    await page.locator("//a[contains(text(),\"More Details ...\")]").click();
    // [DISABLED] Store text from the element Extension Text into a variable StoredExtensionText
    // vars["vars[StoredExtensionText]"] = await page.locator("//th[contains(text(),\"Extension\")]").textContent() || '';
    vars["StoredExtensionText"] = await page.locator("//th[contains(text(),\"Extension\")]").inputValue() || '';
    expect(String(vars["StoredExtensionText"]).toLowerCase()).toContain(String(vars["ExtensionDays"]).toLowerCase());
    // [DISABLED] Verify that the element Extension Text displays text contains ExtensionDays
    // await expect(page.locator("//th[contains(text(),\"Extension\")]")).toContainText(vars["ExtensionDays"]);
    await page.locator("//h6[contains(text(),\"Pricing Adjustment\")]").scrollIntoViewIfNeeded();
    await expect(page.locator("(//th[contains(text(),'Extension: ')])[2]")).toBeVisible();
    await page.screenshot({ fullPage: true });
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Encompass_API_Verification(page, vars);
    // Write to test data profile: "Execution Status" = "Y"
    // TODO: Test data profile writes need custom implementation
  });
});
