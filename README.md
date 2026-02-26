# Reshma_playwright-ui-api-automation-framework
🎭 Playwright Automation POC Framework

Reshma Mansinghani | QA Automation Engineer
Built with TypeScript · Playwright · Axe-core · Faker.js · GitHub Actions


📌 Project Overview
This is a production-grade Playwright automation framework built as a POC (Proof of Concept) to demonstrate end-to-end QA automation skills across three testing layers:

🖥️ Frontend / UI Testing — Page Object Model with Playwright
🔌 API Testing — REST API validation using Playwright's request context
♿ Accessibility Testing — WCAG 2.0 AA compliance using Axe-core

Target Application: AutomationExercise.com
A full-featured e-commerce practice site with both UI and a public REST API.

🛠️ Tech Stack
ToolPurposePlaywrightBrowser automation & API testingTypeScriptType-safe test code@axe-core/playwrightAccessibility testing (WCAG 2.0)@faker-js/fakerDynamic test data generationAllure PlaywrightBeautiful test reportingGitHub ActionsCI/CD pipeline

📁 Project Structure
playwright-automation-poc/
│
├── .github/
│   └── workflows/
│       └── playwright.yml        ← CI/CD pipeline
│
├── pages/                        ← Page Object Model classes
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   └── ProductsPage.ts
│
├── tests/
│   ├── ui/                       ← Frontend / E2E tests
│   │   ├── home.spec.ts
│   │   ├── login.spec.ts
│   │   └── products.spec.ts
│   │
│   ├── api/                      ← API tests
│   │   └── products.api.spec.ts
│   │
│   └── accessibility/            ← Accessibility tests
│       └── accessibility.spec.ts
│
├── utils/
│   └── testData.ts               ← Faker.js test data helpers
│
├── playwright.config.ts          ← Playwright configuration
├── package.json                  ← Project dependencies
└── README.md                     ← Project documentation

🚀 Getting Started
Prerequisites

Node.js v18 or higher
npm v9+
Git

Installation
bash# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/playwright-automation-poc.git
cd playwright-automation-poc

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

▶️ Running Tests
bash# Run all tests
npx playwright test

# Run only UI tests
npx playwright test tests/ui

# Run only API tests
npx playwright test tests/api

# Run only Accessibility tests
npx playwright test tests/accessibility

# Run tests and see browser (headed mode)
npx playwright test --headed

# Run tests in interactive UI mode
npx playwright test --ui

# View HTML report after running
npx playwright show-report

📊 Test Coverage
✅ UI Tests — 15 Test Cases
Test IDDescriptionStatusTC001Homepage loads successfully✅ PassTC002Navigation bar visible with all links✅ PassTC003Navigate to Login page✅ PassTC004Navigate to Products page✅ PassTC005Featured items section visible✅ PassTC006Login page loads correctly✅ PassTC007Login fails with invalid credentials✅ PassTC008Login fails with empty email✅ PassTC009Login fails with empty password✅ PassTC010Login form fields are interactable✅ PassTC011Products page loads with product list✅ PassTC012Search for a product returns results✅ PassTC013Search non-existent product shows no results✅ PassTC014Dynamic search with Faker.js data✅ PassTC015Product page URL is correct✅ Pass

✅ API Tests — 7 Test Cases
Test IDEndpointMethodScenarioStatusTC_API_001/productsListGETReturns 200 + product list✅ PassTC_API_002/productsListGETProducts contain required fields✅ PassTC_API_003/productsListPOSTReturns 405 Method Not Allowed✅ PassTC_API_004/brandsListGETReturns 200 + brands list✅ PassTC_API_005/searchProductPOSTValid search returns results✅ PassTC_API_006/searchProductPOSTMissing param returns 400✅ PassTC_API_007/createAccountPOSTValid data returns 201✅ Pass

✅ Accessibility Tests — 3 Test Cases
Test IDDescriptionWCAG CriteriaStatusTC_A11Y_001Home page — no critical violationsWCAG 2.0 AA✅ PassTC_A11Y_002Login page — no critical violationsWCAG 2.0 AA✅ PassTC_A11Y_003Keyboard navigation works2.1.1 Keyboard✅ Pass


