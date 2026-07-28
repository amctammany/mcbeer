import { describe, expect, test } from "vitest";
import { Converter, converters } from "../lib/Converter/Converter";

describe("Converter", () => {
  test("Time conversion", () => {
    const input = 1;
    const hrTo = converters?.time?.hr?.to(input);
    const hrFrom = converters?.time?.hr?.from(input);
    expect(hrTo).toBe(1 / 60);
    expect(hrFrom).toBe(60);
  });
  test("Mass conversion", () => {
    const input = 1;
    const to = converters?.mass?.Kg?.to(input);
    const from = converters?.mass?.Kg?.from(input);
    expect(from).toBe(1000);
    expect(to).toBe(0.001);
  });
  test("Volume conversion", () => {
    const input = 1;
    const to = converters?.volume?.gal?.to(input);
    const from = converters?.volume?.gal?.from(input);
    expect(from).toBeCloseTo(3.7854);
    expect(to).toBeCloseTo(0.26417);
  });
});
describe("Converter", () => {
  test("Percent conversion", () => {
    const input = 0.4;
    const res = Converter(input, "percent", "number");
    expect(res).toBe(40);
  });
  test("Volume Conversion", () => {
    const input = 10;
    const res = Converter(input, "gal", "L");
    expect(res).toBeCloseTo(37.854);
  });
  test("Temperature conversion", () => {
    const input = 4;
    const res = Converter(input, "C", "F");
    expect(res).toBe(39.2);
  });
  test("Mass conversion", () => {
    const input = 4;
    const kgres = Converter(input, "Kg", "g");
    expect(kgres).toBe(4000);
    const lbres = Converter(input, "Lb", "g");
    expect(lbres).toBeCloseTo(8800);
    const ozres = Converter(input, "Oz", "g");
    expect(ozres).toBeCloseTo(4 * 28);
  });
});
