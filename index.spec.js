import { it, expect } from "vitest";
import { add, subtract, multiply, divide } from "./index";

it("should add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

it("should subtract two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});

it("should multiply two numbers", () => {
  expect(multiply(4, 6)).toBe(24);
});

it("should divide two numbers", () => {
  expect(divide(10, 2)).toBe(5);
});
