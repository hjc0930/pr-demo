import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["src/**/*.spec.js"],
    coverage: {
      include: ["src/**/*.js"],
      exclude: ["src/**/*.spec.js"],
      provider: "v8",
      reporter: ["text", "json-summary", "json"],
      thresholds: {
        statements: 80,
        branches: 70,
        functions: 80,
        lines: 80,
      },
    },
  },
});
