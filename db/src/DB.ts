import mongoose, { Mongoose, Connection } from "mongoose";
import config from "./config";

type CollectionList = string[] | string;

class DB {
  static mongoose: Mongoose;

  static db;

  static async close() {
    return this.mongoose.connection.close();
  }

  static async connect(url?: string): Promise<Connection> {
    console.log(config.databaseUrl);
    this.mongoose = mongoose;
    await this.mongoose
      .connect(url || config.databaseUrl, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
      })
      .catch((err) => {
        console.error(`Database connection error: ${err.message}`);
      });

    this.db = this.mongoose.connection.db;

    return this.db;
  }

  static async dropCollection(...list: string[]) {
    // if (list && !Array.isArray(list)) return this.dropCollection([list]);
    // const list = Array.isArray(l) ? l : [l];

    const collections = (
      (await this.db?.listCollections().toArray()) ?? []
    ).map(({ name }) => name);
    if (!list) {
      return this.dropCollection(collections);
    }
    return Promise.all(
      list.map(async (l) => {
        if (collections.indexOf(l) !== -1) {
          return this.db.dropCollection(l);
        }
        return null;
      })
    );
  }
}

export default DB;
