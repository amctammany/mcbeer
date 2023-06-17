import { schemaComposer } from "graphql-compose";
import { StyleComposer } from "./styles/schema";

StyleComposer(schemaComposer);
export const schema = schemaComposer.buildSchema();
export default schema;
