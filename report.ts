// report.ts
const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports',         // Directory containing JSON report
  reportPath: './reports/html', // Output directory for HTML report
  metadata: {
    browser: {
      name: 'chrome',
      version: '123',
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '10',
    },
  },
  customData: {
    title: 'Project Info',
    data: [
      { label: 'Project', value: 'Playwright + Cucumber BDD' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Date', value: new Date().toLocaleString() },
    ],
  },
});
