import { composeMongoose } from "graphql-compose-mongoose";
import mongoose, { Document } from "mongoose";
import { SchemaComposer } from "graphql-compose";
//import { type Recipe as RecipeType } from "@mcbeer/types";
import {
  RecipeSchema,
  RecipeFermentableIngredientSchema,
  RecipeHopIngredientSchema,
  RecipeOtherIngredientSchema,
  RecipeYeastIngredientSchema,
  IRecipe,
} from "./models";
import {} from "./models/RecipeFermentableIngredient";
type RecipeType = any;
//type RecipeFermentableIngredientType = any;
//export const RecipeFermentableIngredient =
//mongoose.model<RecipeFermentableIngredientType>(
//"RecipeFermentableIngredient",
//RecipeFermentableIngredientSchema
//);
//export const RecipeFermentableIngredientTC = composeMongoose<
//Document<typeof RecipeFermentableIngredient>
//>(RecipeFermentableIngredient as any, {
//removeFields: ["ingredient"],
//});
//type RecipeHopIngredientType = any;
//export const RecipeHopIngredient = mongoose.model<RecipeHopIngredientType>(
//"RecipeFermentableIngredient",
//RecipeFermentableIngredientSchema
//);
//export const RecipeHopIngredientTC = composeMongoose<
//Document<typeof RecipeHopIngredient>
//>(RecipeHopIngredient as any, {
//removeFields: ["ingredient"],
//});
//type RecipeOtherIngredientType = any;
//export const RecipeOtherIngredient = mongoose.model<RecipeOtherIngredientType>(
//"RecipeOtherIngredient",
//RecipeOtherIngredientSchema
//);
//export const RecipeOtherIngredientTC = composeMongoose<
//Document<typeof RecipeOtherIngredient>
//>(RecipeOtherIngredient as any, {
//removeFields: ["ingredient"],
//});
//type RecipeYeastIngredientType = any;
//export const RecipeYeastIngredient = mongoose.model<RecipeYeastIngredientType>(
//"RecipeYeastIngredient",
//RecipeYeastIngredientSchema
//);
//export const RecipeYeastIngredientTC = composeMongoose<
//Document<typeof RecipeYeastIngredient>
//>(RecipeYeastIngredient as any, {
//removeFields: ["ingredient"],
//});

export const Recipe = mongoose.model<IRecipe>("Recipe", RecipeSchema);
export const RecipeTC = composeMongoose<Document<IRecipe>>(Recipe as any, {
  //removeFields: ["subcategory"],
});

export const RecipeComposer = (composer: SchemaComposer) => {
  //RecipeTC.addRelation("subcategory", {
  //resolver: () => RecipeSubCategoryTC.mongooseResolvers.findOne(),
  //prepareArgs: {
  //filter: (src: any) => ({
  //identifier: src.subcategoryId,
  //}),
  //},
  //projection: { subcategoryId: 1 },
  //});
  RecipeTC.addFields({
    urlString: {
      type: "String",
      description: "url",
    },
  });
  composer.Query.addFields({
    recipe: RecipeTC.mongooseResolvers.findOne(),
    recipes: RecipeTC.mongooseResolvers.findMany({
      limit: { defaultValue: 300 },
    }),
  });

  composer.Mutation.addFields({
    recipeCreateOne: RecipeTC.mongooseResolvers.createOne(),
    recipeUpdateOne: RecipeTC.mongooseResolvers.updateOne(),
  });
};
