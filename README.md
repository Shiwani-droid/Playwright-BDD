
# 🧪 Playwright + Cucumber BDD + TypeScript Automation Framework

This project is a test automation framework built using:

- [Playwright](https://playwright.dev/) for browser automation
- [Cucumber](https://cucumber.io/) for Behavior-Driven Development (BDD)
- [Gherkin](https://cucumber.io/docs/gherkin/) for writing human-readable test scenarios
- [TypeScript](https://www.typescriptlang.org/) for type safety and cleaner code

---

## 📁 Project Structure

```
project-root/
├── features/
│   └── example.feature     # Gherkin feature files
├── src/
│   ├── step-definitions/   # Cucumber step definitions
│   ├── hooks/              # Cucumber hooks (Before/After)
│   ├── support/            # Custom World and shared context
│
├── playwright.config.ts    # Playwright config
├── cucumber.js             # Cucumber config
├── tsconfig.json           # TypeScript config
├── package.json            # NPM scripts and dependencies
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/playwright-cucumber-ts.git
cd playwright-cucumber-ts
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npx cucumber-js --require-module ts-node/register --require src/**/*.ts
```

> Add `--tags @yourtag` to filter tests by tag.

---

## 🛠 How It Works

- **Browser Launch**: The Playwright browser is launched in a `Before` hook using `chromium.launch()`. You can modify this for Firefox or WebKit.
- **Page Access**: The browser/page context is passed via a custom Cucumber `World` object and accessed in step definitions as `this.page`.
- **Test Scenarios**: Scenarios are written in Gherkin syntax under `.feature` files and bound to TypeScript step definitions.

---

## 🧩 Example Feature

```gherkin
Feature: Application Launch

  Scenario: Open the homepage
    Given I open the application
    Then I should see the title "Example Domain"
```

## ⚙️ Configuration

- **Playwright settings**: `playwright.config.ts`
- **Cucumber options**: `cucumber.js`
- **TypeScript settings**: `tsconfig.json`