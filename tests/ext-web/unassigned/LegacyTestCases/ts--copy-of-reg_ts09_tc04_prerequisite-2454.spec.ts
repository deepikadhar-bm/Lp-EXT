import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TS--Copy of (REG_TS09_TC04_Prerequisite)', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    vars["count"] = "1";
    vars["TotalLoanNeeded"] = "2";
    while (parseFloat(String(vars["count"])) <= parseFloat(String(vars["TotalLoanNeeded"]))) {
      await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
      if (String(vars["count"]) === String("1")) {
        vars["FirstLoan"] = vars["CreatedLoanNumber"];
      } else if (String(vars["count"]) === String(vars["TotalLoanNeeded"])) {
        vars["SecondLoan"] = vars["CreatedLoanNumber"];
      }
      vars["count"] = (parseFloat(String(vars["count"])) + parseFloat(String("1"))).toFixed(0);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
