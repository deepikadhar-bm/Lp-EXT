import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Extensions For EXT Loan Officer ', async ({ page }) => {
    // Prerequisite: REG TC: Accept Request Lock For EXT Loan Officer
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.waitForLoadState('networkidle');
    await page.locator("(//table/tbody/tr)[2]").waitFor({ state: 'hidden' });
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await page.locator("(//h4[text()=\" Lock Information \"]/../../following-sibling::div//ul//li)[1]//span[text()=\"Auto Ellie Lockdesk\"]/../span[text()=\"Locked\"]").waitFor({ state: 'visible' });
    await page.locator("//button[text()[normalize-space() = \"Extension Request\"]]").waitFor({ state: 'visible' });
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
    }
    await expect(page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1] | //div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV//BUTTON[text()=\" Confirm \"]")).toBeVisible();
    await page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV[1]/DIV[1]/DIV[1]/DIV[2]/BUTTON[1] | //div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]/DIV[1]/DIV//BUTTON[text()=\" Confirm \"]").click();
    while (!(await page.locator("//span[normalize-space()='Extension Requested']").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await page.locator("//span[contains(text(),\"Extension Requested\")]").waitFor({ state: 'visible' });
    await expect(page.locator("//li[contains(text(),\"Requested Days\")]")).toContainText(vars["ExtensionDays"]);
    await page.locator("//a[contains(text(),\"More Details ...\")]").click();
    await expect(page.locator("//th[contains(text(),\"Extension\")]")).toContainText(vars["ExtensionDays"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
