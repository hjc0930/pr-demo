import { it, expect } from "vitest";
import { add, subtract } from "./index";

it("should add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

it("should subtract two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});
