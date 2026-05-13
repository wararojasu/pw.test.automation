# Playwright QA Portfolio Project
This is a basic automation framework using Microsoft Playwright.
## Tech Used
- Playwright
- TypeScript
## Prepare .env.dev file
Before running the tests locally, you need to configure your environment variables.
```bash
cp .env.example .env.dev
```
Open the newly created .env.dev file and update the required values.
Set the BASE_URL to the application under test:
```bash
BASE_URL=https://demoqa.com/
```
Provide valid user credentials (required for test execution):
```bash
USERNAME=your_username
PASSWORD=your_password
```
⚠️ Notes
- Do not commit .env.dev to version control. It should remain local to each developer.
- The .env.example file is used as a template and should contain only placeholder values.
- Make sure the BASE_URL is reachable before executing tests.
- If environment variables are missing or incorrect, tests may fail or point to the wrong environment.
## Run Tests
```bash
npm install
npx playwright test
```
## View Report
```bash
npx playwright show-report
```
## Project Structure
```bash
├── config/
├── tests/
├── pages/
├── utils/
├── playwright.config.ts
```
## Future Enhancements
- Add coverage reporting  
- Integrate with the external API  
- Expand test data configuration