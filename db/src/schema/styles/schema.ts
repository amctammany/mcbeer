import { composeMongoose } from "graphql-compose-mongoose";
import { Document } from "mongoose";
//import Style from "./models/Style";

//export default StyleTC;
import { SchemaComposer } from "graphql-compose";
import { Style, StyleSubCategory } from "./models";
export const StyleTC = composeMongoose<Document<typeof Style>>(Style as any);
export const StyleSubCategoryTC = composeMongoose<
  Document<typeof StyleSubCategory>
>(StyleSubCategory as any, {
  inputType: {
    name: "StyleSubCategoryInput",
  },
});

export const StyleComposer = (composer: SchemaComposer) => {
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
  composer.Query.addFields({
    //style: {
    //type: StyleTC,
    //args: { id: "String!" },
    //resolve: async (source, args, context, info) => {
    //return Style.findOne({ identifier: args.id });
    //},
    //},
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
