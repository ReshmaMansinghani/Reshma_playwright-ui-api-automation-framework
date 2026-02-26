# 🎭 Playwright Automation Framework
### Built by Reshma Mansinghani | QA Automation Engineer

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📌 About This Project

This is a **production-grade test automation framework** built as a POC (Proof of Concept) to demonstrate real-world QA automation skills.

The framework tests **[AutomationExercise.com](https://automationexercise.com)** — a full e-commerce practice site — across **three testing layers:**

| Layer | Tool | Tests |
|-------|------|-------|
| 🖥️ UI / Frontend Testing | Playwright | 15 tests |
| 🔌 API Testing | Playwright Request | 7 tests |
| ♿ Accessibility Testing | Axe-core (WCAG 2.0) | 3 tests |
| **Total** | | **25 tests** |

---

## ✅ Test Results

```
🎭 Playwright Test Results
──────────────────────────────
Total:     25 tests
Passed:    25 ✅
Failed:    0  ❌
Pass Rate: 100% 🎉
──────────────────────────────
Browsers: Chromium | Firefox | Mobile Chrome
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Playwright](https://playwright.dev) | ^1.41.0 | Browser automation & API testing |
| [TypeScript](https://www.typescriptlang.org) | ^5.3.3 | Type-safe test development |
| [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm) | ^4.11.1 | WCAG accessibility testing |
| [@faker-js/faker](https://fakerjs.dev) | ^8.4.1 | Dynamic test data generation |
| [Allure Playwright](https://allurereport.org) | ^2.15.1 | Advanced test reporting |
| [GitHub Actions](https://github.com/features/actions) | — | CI/CD automation pipeline |

---

## 📁 Project Structure

```
📦 Reshma_playwright-ui-api-automation-framework
├── 📁 .github
│   └── 📁 workflows
│       └── 📄 playwright.yml          # CI/CD pipeline
│
├── 📁 pages                           # Page Object Model
│   ├── 📄 HomePage.ts
│   ├── 📄 LoginPage.ts
│   └── 📄 ProductsPage.ts
│
├── 📁 tests
│   ├── 📁 ui                          # Frontend tests (15)
│   ├── 📁 api                         # API tests (7)
│   └── 📁 accessibility               # Accessibility tests (3)
│
├── 📁 utils
│   └── 📄 testData.ts                 # Faker.js test data
│
├── 📄 playwright.config.ts            # Framework configuration
├── 📄 dashboard.html                  # Interactive test dashboard
└── 📄 README.md                       # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
```
Node.js v18+
npm v9+
Git
```

### Installation

```bash
# Clone the repository
git clone https://github.com/ReshmaMansinghani/Reshma_playwright-ui-api-automation-framework.git

# Navigate to project
cd Reshma_playwright-ui-api-automation-framework

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## ▶️ Running Tests

```bash
# Run ALL tests
npx playwright test

# Run UI tests only
npx playwright test tests/ui

# Run API tests only
npx playwright test tests/api

# Run Accessibility tests only
npx playwright test tests/accessibility

# Run with browser visible
npx playwright test --headed

# View HTML report
npx playwright show-report
```

---

## 📊 Test Coverage

### 🖥️ UI Tests (15 Test Cases)

<details>
<summary>Click to expand</summary>

| ID | Test Case | Status |
|----|-----------|--------|
| TC001 | Homepage loads successfully | ✅ |
| TC002 | Navigation bar visible | ✅ |
| TC003 | Navigate to Login page | ✅ |
| TC004 | Navigate to Products page | ✅ |
| TC005 | Featured items section visible | ✅ |
| TC006 | Login page loads correctly | ✅ |
| TC007 | Login fails — invalid credentials | ✅ |
| TC008 | Login fails — empty email | ✅ |
| TC009 | Login fails — empty password | ✅ |
| TC010 | Login form fields interactable | ✅ |
| TC011 | Products page loads | ✅ |
| TC012 | Search returns results | ✅ |
| TC013 | Search — no results found | ✅ |
| TC014 | Dynamic search with Faker.js | ✅ |
| TC015 | Product page URL correct | ✅ |

</details>

### 🔌 API Tests (7 Test Cases)

<details>
<summary>Click to expand</summary>

| ID | Endpoint | Method | Expected | Status |
|----|----------|--------|----------|--------|
| TC_API_001 | /productsList | GET | 200 + list | ✅ |
| TC_API_002 | /productsList | GET | Required fields | ✅ |
| TC_API_003 | /productsList | POST | 405 Not Allowed | ✅ |
| TC_API_004 | /brandsList | GET | 200 + brands | ✅ |
| TC_API_005 | /searchProduct | POST | 200 + results | ✅ |
| TC_API_006 | /searchProduct | POST | 400 missing param | ✅ |
| TC_API_007 | /createAccount | POST | 201 created | ✅ |

</details>

### ♿ Accessibility Tests (3 Test Cases)

<details>
<summary>Click to expand</summary>

| ID | Page | Standard | Status |
|----|------|----------|--------|
| TC_A11Y_001 | Home page | WCAG 2.0 AA | ✅ |
| TC_A11Y_002 | Login page | WCAG 2.0 AA | ✅ |
| TC_A11Y_003 | Keyboard navigation | WCAG 2.1.1 | ✅ |

</details>

---

## ⚙️ CI/CD Pipeline

Every push to `main` automatically triggers:

```
📝 Code pushed → ⚡ GitHub Actions → 📦 Install → 🧪 Run Tests → 📊 Upload Report
```

---

## 🐛 Bugs Found During Testing

| Bug | Location | Severity | Action Taken |
|-----|----------|----------|--------------|
| Subscribe button has no accessible text | Footer | Critical (WCAG) | Reported & excluded from scan |
| Google ads interrupt navigation | Home | Medium | Used `waitForURL` to handle |
| Ads cause timeout | All pages | Low | Changed to `domcontentloaded` |

> 💡 Finding real bugs on a live website demonstrates strong QA skills!

---

## 🏗️ Framework Design

### Page Object Model
```typescript
export class LoginPage {
  readonly loginEmailInput: Locator;

  async login(email: string, password: string) {
    await this.loginEmailInput.fill(email);
    await this.loginButton.click();
  }
}
```

### Dynamic Test Data
```typescript
// No hardcoded data — Faker.js generates unique data every run
const user = {
  email: faker.internet.email(),
  name: faker.person.fullName(),
}
```

---

## 👩‍💻 About

**Reshma Mansinghani** — QA Automation Engineer

Skills demonstrated:
- ✅ Page Object Model design pattern
- ✅ TypeScript
- ✅ REST API testing
- ✅ Accessibility testing (WCAG 2.0)
- ✅ CI/CD with GitHub Actions
- ✅ Dynamic test data with Faker.js
- ✅ Cross-browser testing
- ✅ Bug identification and documentation

---

*🎭 Built with Playwright — Fast, reliable end-to-end testing for modern web apps*