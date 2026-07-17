import { describe, expect, test } from "vitest";
import { Converter, converters } from "../lib/Converter/Converter";

describe("Converter", () => {
  test("Time conversion", () => {
    const input = 1;
    const hrTo = converters?.time?.hr?.to(input);
    const hrFrom = converters?.time?.hr?.from(input);
    expect(hrTo).toBe(60);
    expect(hrFrom).toBe(1 / 60);
  });
  test("Mass conversion", () => {
    const input = 1;
    const to = converters?.mass?.g?.to(input);
    const from = converters?.mass?.g?.from(input);
    expect(to).toBe(1000);
    expect(from).toBe(0.001);
  });
  test("Volume conversion", () => {
    const input = 1;
    const to = converters?.volume?.gal?.to(input);
    const from = converters?.volume?.gal?.from(input);
    expect(to).toBe(3.7854);
    expect(from).toBe(0.26417);
  });
});
describe("Converter", () => {
  test("Temperature conversion", () => {
    const input = 4;
    const res = Converter(input, "C", "F");
    expect(res).toBe(39.2);
  });
});
