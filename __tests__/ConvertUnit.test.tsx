import { describe, expect, test } from "vitest";
import { Converter, converters } from "../lib/Converter/Converter";
import {
  adjustUnits,
  adjustUnit,
  convertUnitRaw,
  reduceUnits,
} from "@/lib/Converter/adjustUnits";
import { BASE_UNITS } from "@/lib/Converter/UnitDict";

describe("converterUnits", () => {
  test("Reduce Units", () => {
    const input = {
      size: { value: 10, unit: "gal" },
      time: { value: 40, unit: "hr" },
      amount: { value: 25, unit: "Kg" },
    };
    const res = reduceUnits(input, 4);
    console.log(res);
  });
  test("Adjust Units", () => {
    const mask = { size: "volume", time: "time", amount: "mass" };
    const input = {
      size: { value: 10, unit: "bbl" },
      time: { value: 40, unit: "hr" },
      amount: { value: 25, unit: "Kg" },
    };
    const res = adjustUnits({
      src: { size: 1, time: 2, amount: 3 },
      mask,
      prefs: { volume: "bbl", time: "hr", mass: "Kg" },
      inline: false,
      dir: true,
      precision: 4,
    });
    console.log(res);
  });
  test("Time conversion", () => {
    const input = 15;
    const res = convertUnitRaw(input, "min", "hr");
    expect(res).toBe(0.25);
  });
  test("Mass conversion", () => {
    const input = 10;
    const res = adjustUnit({ value: input, unit: "Kg" });
    expect(res.value).toBe(10000);
  });
});
