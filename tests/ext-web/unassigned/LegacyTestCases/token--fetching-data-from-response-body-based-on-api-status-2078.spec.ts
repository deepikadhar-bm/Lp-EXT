import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Token--Fetching data from response body based on api status', async ({ page }) => {
    // API: Generation Token Number to Create Loan API
    const _apiResponse_71010 = await page.request.post("https://api.elliemae.com/oauth2/v1/token");
    const _apiBody_71010 = await _apiResponse_71010.json();
    vars["GeneratedAccessToken"] = vars["Access_Token"];
    // Write to test data profile: "Access Token" = vars["GeneratedAccessToken"]
    // TODO: Test data profile writes need custom implementation
    // API: Store Status Code 
    const _apiResponse_71107 = await page.request.get("https://api.elliemae.com/encompass/v3/loans");
    const _apiBody_71107 = await _apiResponse_71107.json();
    vars["ExtractedStatus"] = vars["response_status_1"];
    if (String(vars["ExtractedStatus"]) === String("201")) {
      // API: Invoke Loan Creation After Token Key Generation
      const _apiResponse_71016 = await page.request.post("https://api.elliemae.com/encompass/v3/loans", { data: {"id":10609,"apiStepId":26265,"type":"JSON","body":"{\r\n    \"lenderCaseIdentifier\": \"Auto_loan\",\r\n    \"mortgageType\": \"Conventional\",\r\n    \"channel\": \"Correspondent\",\r\n    \"applications\": [\r\n        {\r\n            \"id\": \"_borrower1\",\r\n            \"borrower\": {\r\n                \"firstName\": \"Auto_TSabc\",\r\n                \"lastName\": \"_loan\",\r\n                \"experianCreditScore\": \"760\",\r\n                \"firstTimeHomebuyerIndicator\": true\r\n            },\r\n            \"propertyUsageType\": \"Primary\"\r\n        }\r\n    ],\r\n    \"borrowerRequestedLoanAmount\": 300000,\r\n    \"purchasePriceAmount\": 640000,\r\n    \"propertyAppraisedValueAmount\": 640000,\r\n    \"requestedInterestRatePercent\": 6.75,\r\n    \"loanAmortizationTermMonths\": 360,\r\n    \"loanAmortizationType\": \"Fixed\",\r\n    \"loanProductData\": {\r\n        \"balloonLoanMaturityTermMonthsCount\": 0,\r\n        \"qualifyingRatePercent\": 6.75,\r\n        \"gsePropertyType\": \"Detached\",\r\n        \"lienPriorityType\": \"FirstLien\"\r\n    },\r\n    \"property\": {\r\n        \"city\": \"Baton Rouge\",\r\n        \"loanPurposeType\": \"Purchase\",\r\n        \"postalCode\": \"70810\",\r\n        \"propertyUsageType\": \"Primary\",\r\n        \"state\": \"LA\",\r\n        \"streetAddress\": \"15062 Reveille Avenue\",\r\n        \"county\": \"EAST BATON ROUGE\",\r\n        \"financedNumberOfUnits\": 1\r\n    },\r\n    \"hmda\": {\r\n        \"censusTrack\": \"0040.26\",\r\n        \"msanumber\": \"12940\"\r\n    },\r\n    \"tpo\": {\r\n        \"companyName\": \"Freedom A4187\",\r\n        \"companyId\": \"8090576873\",\r\n        \"companyOrganizationId\": \"10\",\r\n        \"siteId\": \"7018039801\",\r\n        \"loName\": \"DonotDelete DonotDelete}\",\r\n        \"loId\": \"6363095128\",\r\n        \"loEmail\": \"samuel.lerner+FRE@chase.com\",\r\n        \"loStatus\": \"Enabled\",\r\n        \"loAddress\": \"881 Powder Mill Rd\",\r\n        \"loCity\": \"Wilmington\",\r\n        \"loState\": \"DE\",\r\n        \"loZip\": \"19803\",\r\n        \"loAeName\": \"Annie Executive\",\r\n        \"loAeUserName\": \"aeuser\",\r\n        \"lpName\": \"DonotDelete DonotDelete}\",\r\n        \"lpId\": \"6363095128\",\r\n        \"lpEmail\": \"samuel.lerner+FRE@chase.com\",\r\n        \"lpStatus\": \"Enabled\",\r\n        \"lpAddress\": \"881 Powder Mill Rd\",\r\n        \"lpCity\": \"Wilmington\",\r\n        \"lpState\": \"DE\",\r\n        \"lpZip\": \"19803\",\r\n        \"lpAeName\": \"Annie Executive\",\r\n        \"lpAeUserName\": \"aeuser\",\r\n        \"underwritingDelegated\": true\r\n    },\r\n    \"creditScoreToUse\": 760,\r\n    \"loanProgramName\": \"214_25/30 Yr Freddie Mac Fixed\",\r\n    \"tsum\": {\r\n        \"riskAssessmentType\": \"LP\"\r\n    },\r\n    \"rateLock\": {\r\n        \"impoundType\": \"Insurance only\",\r\n        \"planCode\": \"214\"\r\n    },\r\n    \"temporaryBuydown\": null,\r\n    \"uldd\": {\r\n        \"attachmentType\": \"Attached\"\r\n    }\r\n}","dynamicTestDataDetails":[]} });
      const _apiBody_71016 = await _apiResponse_71016.json();
      vars["GeneratedFirstName"] = vars["First_Name"];
      vars["GeneratedLastName"] = vars["Last_Name"];
      vars["GeneratedFullName"] = vars["Full_Name"];
      vars["SeqNumber"] = new Date().toLocaleDateString('en-US') /* format: HHmmss */;
      vars["FullNameWithSeq"] = vars["GeneratedFullName"] + "_" + vars["SeqNumber"];
      vars["GeneratedLoanNumber"] = vars["Loan_Number"];
      vars["GeneratedAccessToken"] = vars["Access_Token"];
    } else if (String(vars["ExtractedStatus"]) === String("401")) {
    } else if (String(vars["ExtractedStatus"]) === String("400")) {
    } else if (String(vars["ExtractedStatus"]) === String("409")) {
    } else {
      expect(String(vars["ExtractedStatus"])).toBe("403");
    }
  });
});
