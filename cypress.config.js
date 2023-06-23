const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2b5571",
  reporter: "mochawesome",
  reporterOptions: {
    "reportfilename": "[name]-report",
    "overwrite": true,
    "html": true,
    "json": true
  },
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1440,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
