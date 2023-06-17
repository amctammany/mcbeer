import { composeMongoose } from "graphql-compose-mongoose";
import mongoose, { Document } from "mongoose";
import { SchemaComposer } from "graphql-compose";
import {
  type Style as StyleType,
  type StyleSubCategory as StyleSubCategoryType,
} from "@mcbeer/types";
import { StyleSchema, StyleSubCategorySchema } from "./models";

export const Style = mongoose.model<StyleType>("Style", StyleSchema);
export const StyleSubCategory = mongoose.model<StyleSubCategoryType>(
  "StyleSubCategory",
  StyleSubCategorySchema
);

export const StyleTC = composeMongoose<Document<StyleType & any>>(
  Style as any,
  {
    //removeFields: ["subcategory"],
  }
);
export const StyleSubCategoryTC = composeMongoose<
  Document<StyleSubCategoryType>
>(StyleSubCategory as any, {
  //removeFields: ["styles"],
  inputType: {
    name: "StyleSubCategoryInput",
  },
});

export const StyleComposer = (composer: SchemaComposer) => {
  StyleTC.addRelation("subcategory", {
    resolver: () => StyleSubCategoryTC.mongooseResolvers.findOne(),
    prepareArgs: {
      filter: (src: any) => ({
        identifier: src.subcategoryId,
      }),
    },
    projection: { subcategoryId: 1 },
  });
  StyleTC.addFields({
    urlString: {
      type: "String",
      description: "url",
    },
  });
  StyleSubCategoryTC.addFields({
    urlString: {
      type: "String",
      description: "url",
    },
  });
  StyleSubCategoryTC.addRelation("styles", {
    resolver: () => StyleTC.mongooseResolvers.findMany(),
    prepareArgs: {
      filter: (src: any) => ({
        subcategoryId: src.identifier,
      }),
    },
    projection: {
      identifier: 1,
    },
  });
  composer.Query.addFields({
    style: StyleTC.mongooseResolvers.findOne(),
    styles: StyleTC.mongooseResolvers.findMany({
      limit: { defaultValue: 300 },
    }),

    stylesubcategory: StyleSubCategoryTC.mongooseResolvers.findOne(),
    stylesubcategories: StyleSubCategoryTC.mongooseResolvers.findMany(),
  });

  composer.Mutation.addFields({
    styleCreateOne: StyleTC.mongooseResolvers.createOne(),
    styleUpdateOne: StyleTC.mongooseResolvers.updateOne(),
    styleSubCategoryCreateOne: StyleSubCategoryTC.mongooseResolvers.createOne(),
    styleSubCategoryUpdateOne: StyleSubCategoryTC.mongooseResolvers.updateOne(),
  });
};
