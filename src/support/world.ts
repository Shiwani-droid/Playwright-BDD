import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { IWorldOptions, setWorldConstructor, World, setDefaultTimeout } from '@cucumber/cucumber';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
     // Launch the browser with `--start-maximized`
    this.browser = await chromium.launch({
      headless: false, // must be false for maximize to work
      args: ['--start-maximized'], // this flag opens browser maximized
    });

    // Create a context without viewport to allow full screen
    this.context = await this.browser.newContext({
      viewport: null, // disables the default 1280x720 viewport
    });

    this.page = await this.context.newPage();
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
