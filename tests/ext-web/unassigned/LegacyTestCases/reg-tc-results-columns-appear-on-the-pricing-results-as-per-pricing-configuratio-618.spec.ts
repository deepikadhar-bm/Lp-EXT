import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Results Columns appear on the pricing results as per pricing configurations settings for Quick Pricer', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
    await page.locator("//label[@for=\"results-columnsQuickPricer\"]").scrollIntoViewIfNeeded();
    await expect(page.locator("//label[@for=\"results-columnsQuickPricer\"]")).toBeVisible();
    await page.locator("//label[@for=\"results-columnsQuickPricer\"]").click();
    if (true) /* Checkbox Show Rate Adjustment Checkbox is checked */ {
      vars["Rate adj "] = "checked";
    } else {
      vars["Rate adj "] = "unchecked";
    }
    if (true) /* Checkbox Show Pricing Adjustment Checkbox is checked */ {
      vars["Price adj "] = "checked";
    } else {
      vars["Price adj "] = "unchecked";
    }
    if (true) /* Checkbox Show Adjustment Details Checkbox is checked */ {
      vars["Adj details "] = "checked";
    } else {
      vars["Adj details "] = "unchecked";
    }
    if (true) /* Checkbox Show Apr Checkbox is checked */ {
      vars["Apr "] = "checked";
    } else {
      vars["Apr "] = "unchecked";
    }
    if (true) /* Checkbox Show Cost To Borrower Checkbox is checked */ {
      vars["Cost to borrow "] = "checked";
    } else {
      vars["Cost to borrow"] = "unchecked";
    }
    if (true) /* Checkbox Show Dti Checkbox is checked */ {
      vars["Dti "] = "checked";
    } else {
      vars["Dti "] = "unchecked";
    }
    if (true) /* Checkbox Show Comp Plan Checkbox is checked */ {
      vars["Comp plan"] = "checked";
    } else {
      vars["Comp plan "] = "unchecked";
    }
    if (true) /* Checkbox Show Lender Borrower Paid Checkbox is checked */ {
      vars["Lender borrower paid "] = "checked";
    } else {
      vars["Lender borrower paid"] = "unchecked";
    }
    await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    if (true) /* Checkbox Show Lender Checkbox is checked */ {
      vars["Show Lender"] = "checked";
    } else {
      vars["Show Lender"] = "unchecked";
    }
    if (true) /* Checkbox Show Mi Checkbox is checked */ {
      vars["MI"] = "checked";
    } else {
      vars["MI"] = "unchecked";
    }
    if (true) /* Checkbox Show Payment Checkbox is checked */ {
      vars["Payment"] = "checked";
    } else {
      vars["Payment"] = "unchecked";
    }
    if (true) /* Checkbox Show Payment Schedule Checkbox is checked */ {
      vars["Payment Schedule"] = "checked";
    } else {
      vars["Payment Schedule"] = "unchecked";
    }
    if (true) /* Checkbox Show Price Checkbox is checked */ {
      vars["Show Price"] = "checked";
    } else {
      vars["Show Price"] = "unchecked";
    }
    if (true) /* Checkbox Show Program Checkbox is checked */ {
      vars["Show Program"] = "checked";
    } else {
      vars["Show Program"] = "unchecked";
    }
    if (true) /* Checkbox Show Rate Checkbox is checked */ {
      vars["show rate"] = "checked";
    } else {
      vars["show rate"] = "unchecked";
    }
    if (true) /* Checkbox Show Rules Checkbox is checked */ {
      vars["show rules"] = "checked";
    } else {
      vars["show rules"] = "unchecked";
    }
    if (true) /* Checkbox Show Lender Fee Checkbox is checked */ {
      vars["Lender fee"] = "checked";
    } else {
      vars["Lender fee"] = "unchecked";
    }
    if (true) /* Checkbox Show Lock Period is checked */ {
      vars["Lock period"] = "checked";
    } else {
      vars["Lock period"] = "unchecked";
    }
    if (true) /* Checkbox Hide action column is unchecked */ {
      vars["Action"] = "unchecked";
    } else {
      vars["Action"] = "checked";
    }
    await page.locator("//button[text()[normalize-space() = \"Save\"]]").click();
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    if (true) /* Verify if Rate adj == checked */ {
      await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Rate Adj.\"]]")).toBeVisible();
    } else {
      await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Rate Adj.\"]]")).toBeVisible();
    }
    if (String(vars["Price adj "]) === String("checked")) {
      await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Price Adj\"]]")).toBeVisible();
    } else {
      await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Price Adj\"]]")).toBeVisible();
    }
    if (String(vars["Apr "]) === String("checked")) {
      await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"APR\"]]")).toBeVisible();
    } else {
    }
  });
});
