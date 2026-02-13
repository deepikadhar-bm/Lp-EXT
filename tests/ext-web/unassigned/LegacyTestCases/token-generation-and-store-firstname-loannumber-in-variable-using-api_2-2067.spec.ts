import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Token generation and store firstName, loanNumber in variable using API_2', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    vars["count"] = "1";
    vars["TotalLoanNeededCount"] = "2";
    while (parseFloat(String(vars["count"])) <= parseFloat(String(vars["TotalLoanNeededCount"]))) {
      // API: Generation Token Number to Create Loan API
      const _apiResponse_70813 = await page.request.post("https://api.elliemae.com/oauth2/v1/token");
      const _apiBody_70813 = await _apiResponse_70813.json();
      // API: Invoke Loan Creation After Token Key Generation
      const _apiResponse_70819 = await page.request.post("https://api.elliemae.com/encompass/v3/loans", { data: {"id":10576,"apiStepId":26198,"type":"JSON","body":"{\r\n    \"lenderCaseIdentifier\": \"Auto_loan\",\r\n    \"mortgageType\": \"Conventional\",\r\n    \"channel\": \"Correspondent\",\r\n    \"applications\": [\r\n        {\r\n            \"id\": \"_borrower1\",\r\n            \"borrower\": {\r\n                \"firstName\": \"Auto_TS\",\r\n                \"lastName\": \"_loan\",\r\n                \"experianCreditScore\": \"760\",\r\n                \"firstTimeHomebuyerIndicator\": true\r\n            },\r\n            \"propertyUsageType\": \"Primary\"\r\n        }\r\n    ],\r\n    \"borrowerRequestedLoanAmount\": 300000,\r\n    \"purchasePriceAmount\": 640000,\r\n    \"propertyAppraisedValueAmount\": 640000,\r\n    \"requestedInterestRatePercent\": 6.75,\r\n    \"loanAmortizationTermMonths\": 360,\r\n    \"loanAmortizationType\": \"Fixed\",\r\n    \"loanProductData\": {\r\n        \"balloonLoanMaturityTermMonthsCount\": 0,\r\n        \"qualifyingRatePercent\": 6.75,\r\n        \"gsePropertyType\": \"Detached\",\r\n        \"lienPriorityType\": \"FirstLien\"\r\n    },\r\n    \"property\": {\r\n        \"city\": \"Baton Rouge\",\r\n        \"loanPurposeType\": \"Purchase\",\r\n        \"postalCode\": \"70810\",\r\n        \"propertyUsageType\": \"Primary\",\r\n        \"state\": \"LA\",\r\n        \"streetAddress\": \"15062 Reveille Avenue\",\r\n        \"county\": \"EAST BATON ROUGE\",\r\n        \"financedNumberOfUnits\": 1\r\n    },\r\n    \"hmda\": {\r\n        \"censusTrack\": \"0040.26\",\r\n        \"msanumber\": \"12940\"\r\n    },\r\n    \"tpo\": {\r\n        \"companyName\": \"Freedom A4187\",\r\n        \"companyId\": \"8090576873\",\r\n        \"companyOrganizationId\": \"10\",\r\n        \"siteId\": \"7018039801\",\r\n        \"loName\": \"DonotDelete DonotDelete}\",\r\n        \"loId\": \"6363095128\",\r\n        \"loEmail\": \"samuel.lerner+FRE@chase.com\",\r\n        \"loStatus\": \"Enabled\",\r\n        \"loAddress\": \"881 Powder Mill Rd\",\r\n        \"loCity\": \"Wilmington\",\r\n        \"loState\": \"DE\",\r\n        \"loZip\": \"19803\",\r\n        \"loAeName\": \"Annie Executive\",\r\n        \"loAeUserName\": \"aeuser\",\r\n        \"lpName\": \"DonotDelete DonotDelete}\",\r\n        \"lpId\": \"6363095128\",\r\n        \"lpEmail\": \"samuel.lerner+FRE@chase.com\",\r\n        \"lpStatus\": \"Enabled\",\r\n        \"lpAddress\": \"881 Powder Mill Rd\",\r\n        \"lpCity\": \"Wilmington\",\r\n        \"lpState\": \"DE\",\r\n        \"lpZip\": \"19803\",\r\n        \"lpAeName\": \"Annie Executive\",\r\n        \"lpAeUserName\": \"aeuser\",\r\n        \"underwritingDelegated\": true\r\n    },\r\n    \"creditScoreToUse\": 760,\r\n    \"loanProgramName\": \"214_25/30 Yr Freddie Mac Fixed\",\r\n    \"tsum\": {\r\n        \"riskAssessmentType\": \"LP\"\r\n    },\r\n    \"rateLock\": {\r\n        \"impoundType\": \"Insurance only\",\r\n        \"planCode\": \"214\"\r\n    },\r\n    \"temporaryBuydown\": null,\r\n    \"uldd\": {\r\n        \"attachmentType\": \"Attached\"\r\n    }\r\n}","dynamicTestDataDetails":[]} });
      const _apiBody_70819 = await _apiResponse_70819.json();
      vars["GeneratedFirstName"] = vars["First_Name"];
      vars["GeneratedLastName"] = vars["Last_Name"];
      vars["GeneratedFullName"] = vars["Full_Name"];
      vars["SeqNumber"] = new Date().toLocaleDateString('en-US') /* format: HHmmss */;
      vars["FullNameWithSeq"] = vars["GeneratedFullName"] + "_" + vars["SeqNumber"];
      vars["GeneratedLoanNumber"] = vars["Loan_Number"];
      vars["GeneratedAccessToken"] = vars["Access_Token"];
      for (let dataIdx = parseInt(vars["count"]); dataIdx <= parseInt(vars["count"]); dataIdx++) {
        // Write to test data profile: "First Name" = vars["GeneratedFirstName"]
        // TODO: Test data profile writes need custom implementation
        // Write to test data profile: "Last Name" = vars["GeneratedLastName"]
        // TODO: Test data profile writes need custom implementation
        // Write to test data profile: "Full Name" = vars["GeneratedFullName"]
        // TODO: Test data profile writes need custom implementation
        // Write to test data profile: "Updated Full Name" = vars["FullNameWithSeq"]
        // TODO: Test data profile writes need custom implementation
        // Write to test data profile: "Loan Number" = vars["GeneratedLoanNumber"]
        // TODO: Test data profile writes need custom implementation
        // Write to test data profile: "Access Token" = vars["GeneratedAccessToken"]
        // TODO: Test data profile writes need custom implementation
      }
      vars["count"] = (parseFloat(String("1")) + parseFloat(String(vars["count"]))).toFixed(0);
    }
    // [DISABLED] Store 1 in count1
    // vars["count1"] = "1";
    // [DISABLED] Store 2 in TotalRowCountInTDP
    // vars["TotalRowCountInTDP"] = "2";
    while (true) /* Verify if count1 <= TotalRowCountInTDP */ {
      for (let i = 0; i < 1; i++) /* Loop over data set in test data profile from index count1 to */ {
        // [DISABLED] Store TestDataFromProfile :: Get TestData By SetName in LN1
        // vars["LN1"] = testData["Loan Number"] /* set: set1 */;
        // [DISABLED] Store TestDataFromProfile :: Get TestData By SetName in LN2
        // vars["LN2"] = testData["Loan Number"] /* set: set2 */;
      }
      // [DISABLED] Perform addition on 1 and count1 and store the result inside a count1 considering 0 decimal places
      // vars["count1"] = (parseFloat(String("1")) + parseFloat(String(vars["count1"]))).toFixed(0);
    }
  });
});
