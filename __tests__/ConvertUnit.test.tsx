import { describe, expect, test } from "vitest";
import { Converter, converters } from "../lib/Converter/Converter";
import { convertUnit2 } from "@/lib/Converter/adjustUnits";

describe("converterUnits", () => {
  test("Time conversion", () => {
    const input = 15;
    const res = convertUnit2(input, "hr");
    expect(res).toBe(0.25);
  });
});
