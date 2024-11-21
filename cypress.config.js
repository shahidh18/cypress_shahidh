const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    test: {
      url:"https://www.saucedemo.com/v1/",
      username:"standard_user",
      password:"secret_sauce",
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
