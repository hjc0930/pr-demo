import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["src/**/*.spec.js"],
    coverage: {
      include: ["src/**/*.js"],
      exclude: ["src/**/*.spec.js"],
      provider: "v8",
      reporter: ["text", "html"],
      thresholds: {
        statements: 80,
      },
    },
  },
});
