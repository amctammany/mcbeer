import { describe, expect, test } from "vitest";
import { Converter, converters } from "../lib/Converter/Converter";
import { adjustUnit, convertUnitRaw } from "@/lib/Converter/adjustUnits";

describe("converterUnits", () => {
  test("Time conversion", () => {
    const input = 15;
    const res = convertUnitRaw(input, "hr");
    expect(res).toBe(0.25);
  });
  test("Mass conversion", () => {
    const input = 10;
    const res = adjustUnit(input, "Kg");
    expect(res).toBe(10000);
  });
});
