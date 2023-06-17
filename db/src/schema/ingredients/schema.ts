import { composeMongoose } from "graphql-compose-mongoose";
import { Document } from "mongoose";
import { SchemaComposer } from "graphql-compose";
import {
  HopIngredient,
  FermentableIngredient,
  OtherIngredient,
  YeastIngredient,
} from "./models";

export const HopIngredientTC = composeMongoose<Document<typeof HopIngredient>>(
  HopIngredient as any,
  {}
);
export const FermentableIngredientTC = composeMongoose<
  Document<typeof FermentableIngredient>
>(FermentableIngredient as any, {});
export const OtherIngredientTC = composeMongoose<
  Document<typeof OtherIngredient>
>(OtherIngredient as any, {});
export const YeastIngredientTC = composeMongoose<
  Document<typeof YeastIngredient>
>(YeastIngredient as any, {});

export const IngredientComposer = (composer: SchemaComposer) => {
  HopIngredientTC.addFields({
    urlString: {
      type: "String",
      description: "URL",
    },
  });

  OtherIngredientTC.addFields({
    urlString: {
      type: "String",
      description: "URL",
    },
  });

  FermentableIngredientTC.addFields({
    urlString: {
      type: "String",
      description: "URL",
    },
  });
  YeastIngredientTC.addFields({
    urlString: {
      type: "String",
      description: "URL",
    },
  });

  composer.Query.addFields({
    hops: HopIngredientTC.mongooseResolvers.findMany({
      limit: { defaultValue: 300 },
    }),
    hop: HopIngredientTC.mongooseResolvers.findOne(),
    fermentables: FermentableIngredientTC.mongooseResolvers.findMany({
      limit: { defaultValue: 300 },
    }),
    fermentable: FermentableIngredientTC.mongooseResolvers.findOne(),
    others: OtherIngredientTC.mongooseResolvers.findMany({
      limit: { defaultValue: 300 },
    }),
    other: OtherIngredientTC.mongooseResolvers.findOne(),
    yeasts: YeastIngredientTC.mongooseResolvers.findMany({
      limit: { defaultValue: 300 },
    }),
    yeast: YeastIngredientTC.mongooseResolvers.findOne(),
  });

  composer.Mutation.addFields({
    hopCreateOne: HopIngredientTC.mongooseResolvers.createOne(),
    hopUpdateOne: HopIngredientTC.mongooseResolvers.updateOne(),

    fermentableCreateOne: FermentableIngredientTC.mongooseResolvers.createOne(),
    fermentableUpdateOne: FermentableIngredientTC.mongooseResolvers.updateOne(),
    yeastCreateOne: YeastIngredientTC.mongooseResolvers.createOne(),
    yeastUpdateOne: YeastIngredientTC.mongooseResolvers.updateOne(),
    otherCreateOne: OtherIngredientTC.mongooseResolvers.createOne(),
    otherUpdateOne: OtherIngredientTC.mongooseResolvers.updateOne(),
  });
};
