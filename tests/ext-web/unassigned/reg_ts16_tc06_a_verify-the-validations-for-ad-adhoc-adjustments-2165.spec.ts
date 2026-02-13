import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS16_TC06_A_Verify the validations for Ad Adhoc Adjustments', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_UncheckedLoan_Pricer(page, vars);
      await stepGroups.stepGroup_Verifying_Advance_Pricing_Setting_Loan_Pricer(page, vars);
      await page.locator("//app-tab-component[@title=\"Loan Pricer\"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[21]/div[1]/label[1]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Ad-hoc CPA Checkbox is checked */ {
        vars["CPA"] = "checked";
      } else {
        vars["CPA"] = "unchecked";
      }
      if (true) /* Checkbox Ad-hoc Relock Fee CheckBoxx is checked */ {
        vars["RelockFee"] = "checked";
      } else {
        vars["RelockFee"] = "unchecked";
      }
      if (true) /* Checkbox Ad-hoc Renegotiation Fee Checkbox is checked */ {
        vars["RenegotiationFee"] = "checked";
      } else {
        vars["RenegotiationFee"] = "unchecked";
      }
      if (true) /* Checkbox Ad-hoc holdback Checkbox is checked */ {
        vars["HoldBack"] = "checked";
      } else {
        vars["HoldBack"] = "unchecked";
      }
      if (true) /* Checkbox Ad-hoc Rate Adj Checkbox is checked */ {
        vars["RateAdj"] = "checked";
      } else {
        vars["RateAdj"] = "unchecked";
      }
      if (true) /* Checkbox Ad-hoc Rate Margin Adj Checkbox is checked */ {
        vars["RateMarginAdj"] = "checked";
      } else {
        vars["RateMarginAdj"] = "unchecked";
      }
      if (true) /* Checkbox Ad-hoc LLPA Checkbox is checked */ {
        vars["LLPA"] = "checked";
      } else {
        vars["LLPA"] = "unchecked";
      }
      if (true) /* Checkbox Ad-hoc MSR (SRP) Checkbox is checked */ {
        vars["MSR"] = "checked";
      } else {
        vars["MSR"] = "unchecked";
      }
      // [DISABLED] SG : Save In Success Alert
      // await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Add_Adhoc_Adjustm(page, vars);
    await page.locator("//button[text()[normalize-space() = \"Add Ad-hoc Adjustments\"]]").click();
    await page.locator("//div[text()[normalize-space() = \"Add Ad-hoc adjustments\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()[normalize-space() = \"Add Ad-hoc adjustments\"]]")).toBeVisible();
    await expect(page.locator("//select[@aria-label=\"Ad-hoc Exception Type\"]")).toBeVisible();
    await page.locator("//select[@aria-label=\"Ad-hoc Exception Type\"]").click();
    if (String(vars["CPA"]) === String("unchecked")) {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc CPA\"]")).toBeVisible();
    } else {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc CPA\"]")).toBeVisible();
    }
    if (String(vars["RelockFee"]) === String("unchecked")) {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc Exception Type\"]\n")).toBeVisible();
    } else {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc Exception Type\"]\n")).toBeVisible();
    }
    if (String(vars["RenegotiationFee"]) === String("unchecked")) {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc Renegotiation Fee\"]")).toBeVisible();
    } else {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc Renegotiation Fee\"]")).toBeVisible();
    }
    if (String(vars["HoldBack"]) === String("unchecked")) {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc holdback\"]\n")).toBeVisible();
    } else {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc holdback\"]\n")).toBeVisible();
    }
    if (String(vars["RateAdj"]) === String("unchecked")) {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc Rate Adj\"]")).toBeVisible();
    } else {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc Rate Adj\"]")).toBeVisible();
    }
    if (String(vars["RateMarginAdj"]) === String("unchecked")) {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc Rate Margin Adj\"]")).toBeVisible();
    } else {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc Rate Margin Adj\"]")).toBeVisible();
    }
    if (String(vars["LLPA"]) === String("unchecked")) {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc LLPA\"]")).toBeVisible();
    } else {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc LLPA\"]")).toBeVisible();
    }
    if (String(vars["MSR"]) === String("unchecked")) {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc MSR (SRP)\"]")).toBeVisible();
    } else {
      await expect(page.locator("//option[normalize-space(.)=\"Ad-hoc MSR (SRP)\"]")).toBeVisible();
    }
    await expect(page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]")).toBeVisible();
    await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    if (true) /* Element Configuration In LD is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_checkedLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
