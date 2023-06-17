import { beforeAll, afterAll } from "vitest";
//import("./schema/ingredients/models/Ingredient");
import DB from "./DB";

import config from "./config";

beforeAll(async () => {
  await DB.connect(config.testDatabaseUrl);
  await DB.dropCollection();
});
afterAll(() => {
  DB.close();
});
