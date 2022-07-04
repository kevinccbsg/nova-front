import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 414,
  viewportHeight: 896,
  video: false,
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
