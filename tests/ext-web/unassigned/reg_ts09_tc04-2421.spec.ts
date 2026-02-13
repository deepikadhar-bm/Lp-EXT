import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS09_TC04', async ({ page }) => {
    // Prerequisite: REG_TS09_TC04_Prerequisite
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    if (String(testData["UserName"]) === String(testData["lockdeskuser"])) {
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    } else {
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information_(page, vars);
    await page.waitForLoadState('networkidle');
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").click();
    await stepGroups.stepGroup_Verifying_Alert_and_Clicking_on_Override_and_Continue(page, vars);
    await stepGroups.stepGroup_SG_Filling_Request_Post_Lock_Price_Concession_Popup_for_FEE_(page, vars);
    await expect(page.locator("//div[contains(@class,\"items-start\") and contains(@class, \"row\")]")).toBeVisible();
    await expect(page.locator("//span[contains(@class, \"trash\")]")).toBeVisible();
    await page.locator("//span[contains(@class, \"trash\")]").click();
    await expect(page.locator("//div[contains(@class,\"items-start\") and contains(@class, \"row\")]")).toBeVisible();
    await expect(page.locator("(//*[contains(text(),\"Cancel\")])[last()]")).toBeVisible();
    await page.locator("(//*[contains(text(),\"Cancel\")])[last()]").click();
    await expect(page.locator("//label[.=' Request Lock Exception ']")).toBeVisible();
    if (String(testData["UserName"]) === String(testData["lockdeskuser"])) {
      await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
      await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
      await expect(page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]")).toBeVisible();
    } else {
      await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
      await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
