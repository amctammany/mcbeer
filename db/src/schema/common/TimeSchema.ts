import mongoose from "mongoose";

enum EnumTimeUnits {
  min = "min",
  hour = "hour",
  day = "day",
  sec = "sec",
}
export const TimeSchema = new mongoose.Schema<{
  duration: number;
  unit: EnumTimeUnits;
}>(
  {
    duration: { type: Number, min: [0, "Must be greater than 0"] },
    unit: {
      type: String,
      enum: ["min", "hour", "day", "sec"],
    },
  },
  {
    _id: false,
  }
);
