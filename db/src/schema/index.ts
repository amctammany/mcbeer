import { schemaComposer } from "graphql-compose";
import { IngredientComposer } from "./ingredients";
import { StyleComposer } from "./styles/schema";

StyleComposer(schemaComposer);
IngredientComposer(schemaComposer);
export const schema = schemaComposer.buildSchema();
export default schema;
