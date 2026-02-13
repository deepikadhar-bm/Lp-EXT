import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('API Loan Creation', async ({ page }) => {
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
  });
});
