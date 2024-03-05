import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://blogdoagi.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
