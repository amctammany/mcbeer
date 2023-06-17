import mongoose from "mongoose";

enum EnumAmountUnits {
  oz = "oz",
  lb = "lb",
  g = "g",
  kg = "kg",
}

export const AmountSchema = new mongoose.Schema<{
  quantity: number;
  unit: EnumAmountUnits;
}>(
  {
    quantity: { type: Number, min: [0, "Must be greater than 0"] },
    unit: {
      type: String,
      enum: ["oz", "lb", "g", "kg"],
    },
  },
  {
    _id: false,
  }
);
