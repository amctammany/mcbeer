import mongoose, { Document, Schema } from "mongoose";
import slugify from "slugify";
import autopopulate from "mongoose-autopopulate";

//import { type Style as StyleType2 } from "@mcbeer/types";
//type StyleType = any;
const Vital = { flexible: Boolean, low: Number, high: Number };
export const StyleSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, enum: ["beer", "mead", "cider"] },
    subcategoryId: { type: String, unique: true, index: true, required: true },
    // subcategory: {
    // type: Schema.Types.ObjectId,
    // ref: "StyleSubCategory",
    // foreignField: "subcategoryId",
    // },
    identifier: String,
    description: String,
    slug: String,
    aroma: String,
    appearance: String,
    flavor: String,
    mouthfeel: String,
    comments: String,
    history: String,
    ingredients: String,
    comparison: String,
    examples: String,
    vitals: {
      ibu: Vital,
      og: Vital,
      fg: Vital,
      srm: Vital,
      abv: Vital,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
StyleSchema.virtual("subcategory", {
  ref: "StyleSubCategory",
  localField: "subcategoryId",
  foreignField: "identifier",
  autopopulate: true,
  justOne: true,
});

StyleSchema.plugin(autopopulate);

StyleSchema.pre("save", function preSave(next) {
  this.slug = slugify(this.name, { lower: true });

  next();
});
StyleSchema.virtual("urlString").get(function getUrlString() {
  return `/styles/${this.identifier}`;
});

export const Style = mongoose.model("Style", StyleSchema);

export default Style;
