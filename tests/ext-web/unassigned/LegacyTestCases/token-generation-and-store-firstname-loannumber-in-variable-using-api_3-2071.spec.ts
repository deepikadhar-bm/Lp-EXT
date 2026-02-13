import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Token generation and store firstName, loanNumber in variable using API_3', async ({ page }) => {
    // Prerequisite: Token generation and store firstName, loanNumber in variable using API_2
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    vars["count1"] = "1";
    vars["TotalRowCountInTDP"] = "2";
    while (parseFloat(String(vars["count1"])) <= parseFloat(String(vars["TotalRowCountInTDP"]))) {
      for (let dataIdx = parseInt(vars["count1"]); dataIdx <= parseInt(vars["count1"]); dataIdx++) {
        vars["LNumber"] = testData["Loan Number"];
      }
      vars["count1"] = (parseFloat(String("1")) + parseFloat(String(vars["count1"]))).toFixed(0);
    }
  });
});
