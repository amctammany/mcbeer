import {
  calculateGravity,
  calculateSRM,
} from "@/lib/calculators/gravityCalculator";
import { describe, expect, test } from "vitest";
import { recipeData, baseData } from "./recipeData";
describe("Calculators", () => {
  test("Gravity", () => {
    const gravity = calculateGravity(recipeData);
    expect(gravity).toBe(1.04);
  });
  test("Color", () => {
    const color = calculateSRM(baseData);
    expect(color).toBe(4);
  });
});
