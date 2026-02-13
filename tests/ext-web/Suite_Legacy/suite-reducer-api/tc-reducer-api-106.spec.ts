import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Suite: Reducer API', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Reducer API', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    // API: Generating token for Reducer API
    const _apiResponse_1432 = await page.request.get("*|protocol|*|domain|/encodeAES128/*|key|/*|userId|");
    const _apiBody_1432 = await _apiResponse_1432.json();
    // API: Invoke the reducer Post API and validate the response as per the API expected values
    const _apiResponse_1055 = await page.request.post("*|protocol|*|domain|/rest/pricing/multisearch/*|userId|", { headers: {}, data: {"id":14,"apiStepId":20,"type":"JSON","body":"@|Payload|","dynamicTestDataDetails":[]} });
    expect(_apiResponse_1055.status()).toBe(200);
    const _apiBody_1055 = await _apiResponse_1055.json();
    vars["Actual_PurchasePrice"] = (parseFloat(String(vars["Response_PurchasePrice "])) * parseFloat(String("1"))).toFixed(0);
    vars["Actual_LoanAmount"] = (parseFloat(String(vars["Response_LoanAmount"])) * parseFloat(String("1"))).toFixed(0);
    vars["Actual_fico"] = (parseFloat(String(vars["Response_fico"])) * parseFloat(String("1"))).toFixed(0);
    vars["Actual_LenderPaid"] = (parseFloat(String(vars["Response_LenderPaid"])) * parseFloat(String("1"))).toFixed(0);
    expect(String(vars["Actual_PurchasePrice"])).toBe(String(testData["Expected PurchasePrice"]));
    expect(String(vars["Actual_TermCriteria"])).toBe(String(testData["Expected  TermCriteria"]));
    expect(String(vars["Actual_MortageType"])).toBe(String(testData["Expected MortageType"]));
    expect(String(vars["Actual_LoanAmount"])).toBe(String(testData["Expected  LoanAmount"]));
    expect(String(vars["Actual_BaseRates"])).toBe(String(testData["Expected BaseRates"]));
    expect(String(vars["Actual_fico"])).toBe(String(testData["Expected  Fico"]));
    expect(String(vars["Actual_LenderPaid"])).toBe(String(testData["Expected  LenderPaid"]));
  });
});
