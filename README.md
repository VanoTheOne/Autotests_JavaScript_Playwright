# Vigbo Autotests

Automation test suite for IMDB web application using Playwright framework with Page Object Model (POM) architecture.

## Project Structure

```
├── projects/
│   └── imdb/
│       ├── tests/                    # Test files (.spec.js)
│       │   ├── accountMenu/
│       │   ├── header/
│       │   ├── userProfile/
│       │   └── watchlist/
│       ├── page-obj/                 # Page Object Model classes
│       │   ├── base.js               # Base page class with common methods
│       │   ├── loginPage.js          # Login page object
│       │   ├── search.js             # Search page object
│       │   ├── header/               # Header component page objects
│       │   ├── profile/              # Profile page objects
│       │   │   └── editProfilePage.js
│       │   └── watchlist/            # Watchlist page objects
│       ├── helpers/                  # Helper utilities
│       │   └── env.js                # Environment configuration
│       └── test-data/                # Test data files
├── allure-results/                   # Allure test results (generated)
├── allure-report/                    # Allure HTML report (generated)
├── playwright-report/                # Playwright HTML report (generated)
├── test-results/                     # Test result artifacts (generated)
├── playwright.config.js              # Playwright configuration
├── package.json                      # Project dependencies and scripts
├── eslint.config.js                  # ESLint configuration
├── jsconfig.json                     # JavaScript configuration
└── LoginAuth.json                    # Login credentials (for testing)
```

## Prerequisites

- **Node.js** v16 or higher
- **npm** v7 or higher
- **Git**

## Installation

1. Clone the repository:
   ```powershell
   git clone https://github.com/VanoTheOne/Vigbo_Autotests.git
   cd JS
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Install Playwright browsers:
   ```powershell
   npx playwright install
   ```

## Configuration

### Environment Setup

Update `LoginAuth.json` with your test credentials:
```json
{
  "username": "your_username",
  "password": "your_password"
}
```

Configure environment variables in `projects/imdb/helpers/env.js` if needed.

## Running Tests

### Run All Tests
```powershell
npm test
```
This command will:
- Clean previous test results
- Run tests on Chromium browser
- Generate Allure report and open it

### Run Tests Only (without report)
```powershell
npm run playwright
```

### Generate and Open Allure Report
```powershell
npm run report
```

### Run Specific Test Suite
```powershell
npx playwright test --project=chromium projects/imdb/tests/accountMenu
```

### Run Tests in Debug Mode
```powershell
npx playwright test --debug
```

### Run Tests in Headed Mode (with UI visible)
```powershell
npx playwright test --headed
```

## Linting & Code Formatting

### Check Code Quality
```powershell
npm run lint
```

### Fix Linting Issues and Format Code
```powershell
npm run lint:write
```

## Project Components

### Page Object Model (POM)
Located in `projects/imdb/page-obj/`, contains:
- **base.js** - Base page class with common locators and methods
- **loginPage.js** - Login functionality page object
- **search.js** - Search page object
- **header/** - Navigation header components
- **profile/** - User profile-related page objects
- **watchlist/** - Watchlist functionality page objects

### Test Cases
Located in `projects/imdb/tests/`, organized by feature:
- **accountMenu/** - Account menu tests
- **header/** - Header functionality tests
- **userProfile/** - User profile tests
- **watchlist/** - Watchlist feature tests

### Helpers
- **env.js** - Environment variables and configuration constants

## Technologies Used

- **Playwright** - End-to-end testing framework
- **Allure** - Test reporting and analytics
- **ESLint** - Code quality and linting
- **Prettier** - Code formatting
- **Axios** - HTTP client for API testing
- **Dotenv** - Environment variable management

## Test Results

### Allure Report
After running tests, view the detailed Allure report:
```powershell
npm run report
```
The report includes:
- Test execution timeline
- Test history and trends
- Pass/fail statistics
- Failure details and screenshots

### Playwright Report
View Playwright's built-in HTML report:
```
playwright-report/index.html
```

## Troubleshooting

### Tests timing out
Adjust the `timeout` value in `playwright.config.js` (default: 30000ms)

### Browser issues
Ensure Playwright browsers are installed:
```powershell
npx playwright install
```

### Clear test data
```powershell
npm run clean
```

## Best Practices

1. **Use Page Object Model** - Maintain locators and methods in page objects
2. **Descriptive Test Names** - Use clear, descriptive test case names
3. **Data Isolation** - Use unique test data for each test run
4. **Wait Strategies** - Use Playwright's built-in waiting mechanisms
5. **Screenshots & Videos** - Leverage failure artifacts for debugging
6. **Code Standards** - Follow ESLint rules and Prettier formatting

## CI/CD Integration

The project supports CI/CD environments:
- Tests run with retries on CI (2 retries)
- Sequential execution on CI (1 worker)
- Parallel execution locally
- All artifacts are generated in respective directories

## Repository

- **Repository**: [Vigbo_Autotests](https://github.com/VanoTheOne/Vigbo_Autotests)
- **License**: ISC
- **Author**: Vano

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint:write` to ensure code quality
4. Commit and push your changes
5. Create a pull request

---

For more information on Playwright, visit [Playwright Documentation](https://playwright.dev/)
