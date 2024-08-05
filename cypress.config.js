// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");


async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  
  on("file:preprocessor", createBundler({
    plugins: [createEsbuildPlugin.default(config)],
  }));
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: ["**/*.{spec.js,feature}", "**/*.cy.{js,jsx,ts,tsx}"],
    setupNodeEvents
    // zephyrTestCycleKey: {
    //   // use projectKey as attribute name, example BA: "BA-R14"
    //   BAAT: 'BAAT-R12'
    // }
  },
  chromeWebSecurity: false
});