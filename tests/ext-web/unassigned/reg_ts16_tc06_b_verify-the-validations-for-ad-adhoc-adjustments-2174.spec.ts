import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS16_TC06_B_Verify the validations for Ad Adhoc Adjustments', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Add_Adhoc_Adjustm(page, vars);
    await stepGroups.stepGroup_Verifying_Apply_to_Priced_Rate_Checkbox_is_Unchecked_by_Defa(page, vars);
    await stepGroups.stepGroup_Verifying_Amount_Data_based_on_Total_Loan_Amount_and_also_Co(page, vars);
    await stepGroups.stepGroup_Verifying_Automatically_Update_of_Price_Value_by_Updating_Am(page, vars);
    await stepGroups.stepGroup_Verifying_Add_Adjustment_Plus_button(page, vars);
    await stepGroups.stepGroup_Verifying_Cancel_Button_in_Add_Adhoc_Popup(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
