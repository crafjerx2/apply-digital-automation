const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y } = require("@cypress-audit/pa11y");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      require('cypress-mochawesome-reporter/plugin')(on);

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });

    },
    env: {
      viewportName: 'Desktop',
      viewportWidth: 1366,
      viewportHeight: 768
    },
  },
});
