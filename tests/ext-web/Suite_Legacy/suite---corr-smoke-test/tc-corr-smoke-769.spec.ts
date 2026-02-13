import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Suite - CORR Smoke Test', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: CORR Smoke', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_in_CORR_QA(page, vars);
    await stepGroups.stepGroup_SG_CORR_Upload_Bid_Request(page, vars);
  });
});
