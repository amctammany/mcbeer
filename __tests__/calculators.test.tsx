import {
  calculateOG,
  calculateFG,
  calculateSRM,
} from "@/lib/calculators/gravityCalculator";
import { describe, expect, test } from "vitest";
import { recipeData, baseData } from "./recipeData";
describe("Calculators", () => {
  test("Final Gravity", () => {
    const og = calculateOG(recipeData);
    const gravity = calculateFG(recipeData, og);
    expect(gravity).toBe(1.009);
  });

  test("Original Gravity", () => {
    const gravity = calculateOG(recipeData);
    expect(gravity).toBe(1.04);
  });
  test("Color", () => {
    const color = calculateSRM(baseData);
    expect(color).toBe(4);
  });
});
