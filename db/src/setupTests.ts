import { beforeAll, afterAll } from "vitest";
//import("./schema/ingredients/models/Ingredient");
import DB from "./DB";

import config from "./config";

beforeAll(() => {
  DB.connect(config.testDatabaseUrl);
});
afterAll(() => {
  DB.close();
});
