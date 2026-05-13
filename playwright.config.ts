import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv'

const testEnv = process.env.TEST_ENV || 'dev'

dotenv.config({
  path: `.env.${testEnv}`,
})

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    headless : false,
    baseURL: process.env.BASE_URL,
  },

  projects: [      
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    },
  ],
});
