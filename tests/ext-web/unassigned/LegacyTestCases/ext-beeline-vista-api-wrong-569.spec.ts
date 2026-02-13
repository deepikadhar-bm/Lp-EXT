import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('EXT: Beeline-Vista API [Wrong]', async ({ page }) => {
    // API: Get Auth
    const _apiResponse_10748 = await page.request.post("https://ppe-auth.cre8techuat.com/oauth/token", { headers: {} });
    const _apiBody_10748 = await _apiResponse_10748.json();
    // API: Get Pricing API
    const _apiResponse_10758 = await page.request.post("https://ppe-extapi.cre8techuat.com/rest/v1/lp-ppe-api/pricing/search", { data: {"id":3383,"apiStepId":8631,"type":"JSON","body":"{\n  \"companyId\": \"63c9b5fa24aa9a0001f0625b\",\n  \"name\": \"1113513\",\n  \"criteria\": {\n    \"purchasePrice\": 246000,\n    \"appraisedValue\": 246000,\n    \"loanAmount\": 184500,\n    \"pmiType\": \"None\",\n    \"mortgageTypes\": [\n      \"Conventional\"\n    ],\n    \"propertyUse\": \"Investment\",\n    \"fico\": 741,\n    \"firstTimeHomeBuyer\": false,\n    \"specialMortgageOptions\": [\n      {\n        \"id\": \"592868b74cedfd00015bdd64\",\n        \"name\": \"No PPP\",\n        \"description\": \"No PPP\"\n      }\n    ],\n    \"escrowWaiver\": false,\n    \"vaUsageType\": \"Subsequent_Use\",\n    \"lienPriorityType\": \"FirstLien\",\n    \"dscr\": 1.7,\n    \"subordinateLoanAmount\": 0,\n    \"compensationType\": \"BorrowerCompPlan\",\n    \"paymentInterestType\": \"FullPITI\",\n    \"interestOnly\": false\n  },\n  \"property\": {\n    \"address\": {\n      \"zip\": \"45217\",\n      \"state\": \"OH\",\n      \"zipExt\": \"2043\"\n    },\n    \"propertyType\": \"UnitDwelling_2_4\",\n    \"numberOfUnit\": 2,\n    \"attachmentType\": \"SemiDetached\"\n  },\n  \"termsCriteria\": [\n    10,\n    15,\n    20,\n    25,\n    30,\n    40\n  ],\n  \"loanPurposeCriteria\": [\n    \"Purchase\"\n  ],\n  \"loanTypeCriteria\": [\n    \"Fixed\",\n    \"Variable\"\n  ],\n  \"brokerCriteria\": {\n    \"dayLocks\": 45,\n    \"ausList\": [\n      \"None\"\n    ],\n    \"minimunCompensation\": -3,\n    \"maxCompensation\": 3\n  },\n  \"dynamicPropertiesMap\": {\n    \"Citizenship\": {\n      \"fieldId\": \"Citizenship\",\n      \"value\": \"US Citizen\"\n    },\n    \"FirstTimeHomeBuyer\": {\n      \"fieldId\": \"FirstTimeHomeBuyer\",\n      \"value\": false\n    },\n    \"BankruptcySeasoning\": {\n      \"fieldId\": \"BankruptcySeasoning\",\n      \"value\": \"Never\"\n    },\n    \"Global_PREPAYMENTPENALTY\": {\n      \"fieldId\": \"Global_PREPAYMENTPENALTY\",\n      \"value\": true\n    },\n    \"DSCRRATIO\": {\n      \"fieldId\": \"DSCRRATIO\",\n      \"value\": \"1.25\"\n    },\n    \"IncomeDocType\": {\n      \"fieldId\": \"IncomeDocType\",\n      \"value\": \"DSCR\"\n    }\n  },\n  \"accessCriteria\": {\n    \"marketPlaceSearch\": false\n  },\n  \"maxListingPerRate\": -1,\n  \"multi\": true,\n  \"showDisqualify\": true,\n  \"showDisqualifyRules\": true\n}","dynamicTestDataDetails":[]} });
    const _apiBody_10758 = await _apiResponse_10758.json();
  });
});
