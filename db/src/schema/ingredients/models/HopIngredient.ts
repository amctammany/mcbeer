import mongoose, { Schema } from "mongoose";
import { NumberType, RangeType } from "src/schema/common";
//import {
//HopSensoryPanel as HopSensoryPanelType,
//HopIngredient,
//HopVariant,
//} from "@lnk/types";
type HopSensoryPanelType = any;
type HopIngredientType = any;
type HopVariant = any;
const HopSensoryPanel = new Schema<HopSensoryPanelType>({
  sweetAromatic: Number,
  berry: Number,
  stoneFruit: Number,
  pomme: Number,
  melon: Number,
  tropical: Number,
  citrus: Number,
  floral: Number,
  herbal: Number,
  vegetal: Number,
  grassy: Number,
  earthy: Number,
  woody: Number,
  spicy: Number,
  year: Number,
  author: String,
  notes: String,
});

export const HopVariantSchema = new Schema<HopVariant>({
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "HopIngredient" },
  alpha: NumberType(50),
  beta: NumberType(50),
  caryophyllene: NumberType(50),
  cohumulone: NumberType(50),
  farnesene: NumberType(50),
  humulene: NumberType(50),
  myrcene: NumberType(50),
  totalOil: NumberType(50),
  origin: String,
  year: Number,
  manufacturer: String,
});

export const HopIngredientSchema = new Schema<HopIngredientType>({
  name: { type: String, required: true },
  country: String,
  description: String,
  slug: String,
  alphaRange: RangeType(50),
  betaRange: RangeType(30),
  caryophylleneRange: RangeType(40),
  cohumuloneRange: RangeType(50),
  farneseneRange: RangeType(50),
  humuleneRange: RangeType(50),
  myrceneRange: RangeType(100),
  totalOilRange: RangeType(1, 10),
  alpha: NumberType(50),
  beta: NumberType(50),
  caryophyllene: NumberType(50),
  cohumulone: NumberType(50),
  farnesene: NumberType(50),
  humulene: NumberType(50),
  myrcene: NumberType(50),
  totalOil: NumberType(50),
  styles: [String],
  purpose: String,
  flavor: String,
  notes: String,
  sensoryPanels: [HopSensoryPanel],
  // variants: [HopVariantSchema],
  variants: [{ type: mongoose.Schema.Types.ObjectId, ref: "HopVariant" }],
  substitutes: [{ type: mongoose.Schema.Types.ObjectId, ref: "HopIngredient" }],
  // substitutesString: [String],
});
HopIngredientSchema.method("getVariants", async function getVariants() {
  const res = await mongoose.model("HopVariant").find({ parent: this._id });
  // console.log(res);
  return res;
});
//HopIngredientSchema.pre("save", (next) =>
//// console.log("presave");
//next()
//);

export default HopIngredientSchema;
