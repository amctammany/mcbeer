import { schemaComposer } from "graphql-compose";
import { convertSchemaToGraphQL } from "graphql-compose-mongoose";
import { AmountSchema, TimeSchema } from "./common";

convertSchemaToGraphQL(AmountSchema, "AmountField", schemaComposer);
convertSchemaToGraphQL(TimeSchema, "TimeField", schemaComposer);
import { IngredientComposer } from "./ingredients";
import { RecipeComposer } from "./recipes";
import { StyleComposer } from "./styles/schema";
StyleComposer(schemaComposer);
IngredientComposer(schemaComposer);
RecipeComposer(schemaComposer);
export const schema = schemaComposer.buildSchema();
export default schema;
