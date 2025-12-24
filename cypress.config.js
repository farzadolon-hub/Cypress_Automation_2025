const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000, // ⏱️ set default command timeout to certain value
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  video: true, // 🎥 enable video recording
  reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Cypress HTML Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      html: true,      // ✅ generate HTML report
      json: false,      // ⛔ do not generate JSON report
      overwrite: true,  // ♻️ overwrite existing report files
    }
});
