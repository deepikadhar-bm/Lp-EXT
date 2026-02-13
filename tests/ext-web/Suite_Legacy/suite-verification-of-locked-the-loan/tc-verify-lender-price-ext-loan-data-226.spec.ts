import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Suite: Verification of locked the loan', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Lender Price EXT Loan Data', async ({ page }) => {
    await stepGroups.stepGroup_SG_Comparing_values_between_PPE_EXT_and_Encompass_for_loan_d(page, vars);
  });
});
