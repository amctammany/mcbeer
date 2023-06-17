import mongoose, { Document, Schema } from "mongoose";
import { StyleSubCategory as StyleSubCategoryType } from "@mcbeer/types";
import slugify from "slugify";
import autopopulate from "mongoose-autopopulate";

export const StyleSubCategorySchema = new Schema<StyleSubCategoryType>(
  {
    name: { type: String, required: true },
    identifier: String,
    slug: String,
    category: { type: String, enum: ["beer", "mead", "cider"] },
    // styles: [{ type: Schema.Types.ObjectId, ref: "Style" }],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
StyleSubCategorySchema.virtual("styles", {
  ref: "Style",
  localField: "identifier",
  foreignField: "subcategoryId",
  autopopulate: false,
});
StyleSubCategorySchema.plugin(autopopulate);

StyleSubCategorySchema.pre("save", async function preSave(next) {
  this.slug = slugify(this.name || "", { lower: true });
  // const Style = mongoose.model("Style");
  // const styles = await Promise.all(
  // this.styles.map(async (style) => {
  // const s = style._id
  // ? await Style.findOneAndUpdate({ _id: style._id }, style)
  // : new Style(style);

  // return s?.save();
  // })
  // );
  // this.styles = styles;

  next();
});

//export const StyleSubCategory = mongoose.model(
//"StyleSubCategory",
//StyleSubCategorySchema
//);

export default StyleSubCategorySchema;
