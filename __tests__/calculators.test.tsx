import { calculateGravity } from "@/lib/calculators/gravityCalculator";
import { describe, expect, test } from "vitest";
import recipeData from "./recipeData";
describe("Calculators", () => {
  test("Gravity", () => {
    const gravity = calculateGravity(recipeData);
    expect(gravity).toBe(1.04);
  });
});
