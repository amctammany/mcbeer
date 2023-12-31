import { MongoClient } from "mongodb";
import fetchHopData from "./hopslist";
import fetchGrainData from "./brewunited";
import parseStyles from "./bjcp";
import bjcp2021 from "./bjcp2021";

const dbName = "mcbeer";
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url, {});
async function main() {
  // Use connect method to connect to the server
  console.log("foo");
  await client.connect();
  //console.log("Connected successfully to server");
  const db = client.db(dbName);
  //const styleSubCategories = await parseStyles();

  const stylesCollection = db.collection("styles");
  await stylesCollection.drop();
  const styles = bjcp2021();
  await stylesCollection.insertMany(styles);

  //const styleSubCategoriesCollection = db.collection("stylesubcategories");
  //await styleSubCategoriesCollection.drop();
  //await styleSubCategoriesCollection.insertMany(styleSubCategories);
  //const styles = styleSubCategories
  //.map(({ styles, category, identifier }) =>
  //styles.map((style) => ({ ...style, category, subcategoryId: identifier }))
  //)
  //.flat();
  //console.log(styles);

  const hopcollection = db.collection("hopingredients");
  const fermcollection = db.collection("fermentableingredients");
  if (hopcollection) await hopcollection.drop();
  if (fermcollection) await fermcollection.drop();
  const hopData = await fetchHopData();
  const grainData = await fetchGrainData();
  //console.log(hopData);

  await hopcollection.insertMany(hopData);
  await fermcollection.insertMany(grainData);
  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
