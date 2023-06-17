import mongoose from "mongoose";
import { AmountSchema, TimeSchema } from "../schema/common";

const TesterSchema = new mongoose.Schema({
  amount: AmountSchema,
  time: TimeSchema,
});

describe("SchemaTypes", () => {
  it("should have amount field", async () => {
    const Tester = mongoose.model("Tester", TesterSchema);
    const obj = new Tester({
      amount: { quantity: 12, unit: "lb" },
      time: { duration: 10, unit: "sec" },
    });
    await obj.save();
    console.log(obj);
    expect(!!obj).toBe(true);
  });
});
