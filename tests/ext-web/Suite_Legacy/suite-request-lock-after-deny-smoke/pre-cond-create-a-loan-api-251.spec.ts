import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Request lock After Deny [Smoke]', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Pre-cond: Create a loan API', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    if (String(vars["URL"]) === String(testData["UAT_URL"])) {
      await stepGroups.stepGroup_SG_Creating_Loan_for_Staging(page, vars);
      await stepGroups.stepGroup_SG_Update_Loan_ID_in_TestSigma_Staging_Environment(page, vars);
      // [DISABLED] SG: Creating Loan UAT
      // await stepGroups.stepGroup_SG_Creating_Loan_UAT(page, vars);
      // [DISABLED] SG: Update Loan ID in TestSigma UAT Environment
      // await stepGroups.stepGroup_SG_Update_Loan_ID_in_TestSigma_UAT_Environment(page, vars);
    } else if (String(vars["Encompass_URL_Environment"]) === String(testData["BreakFix_URL"])) {
      await stepGroups.stepGroup_SG_Creating_Loan_UAT(page, vars);
      await stepGroups.stepGroup_SG_Update_Loan_ID_in_TestSigma_UAT_Environment(page, vars);
    } else if (String(vars["Encompass_URL_Environment"]) === String(testData["Stage2 URL"])) {
      await stepGroups.stepGroup_SG_Creating_Loan_UAT(page, vars);
      await stepGroups.stepGroup_SG_Update_Loan_ID_in_TestSigma_UAT_Environment(page, vars);
    } else {
      await stepGroups.stepGroup_SG_Creating_Loan_for_Staging(page, vars);
      await stepGroups.stepGroup_SG_Update_Loan_ID_in_TestSigma_Staging_Environment(page, vars);
    }
  });
});
