import axios from "axios";
import { FermentableIngredient } from "@lnk/types";
import cheerio, { Element } from "cheerio";
import slugify from "slugify";

const mashFields = {
  Grain: "name",
  Color: { name: "color", parse: parseFloat },
  Origin: "country",
  Power: { name: "power", parse: parseFloat },
  Potential: { name: "potential", parse: parseFloat },
  Max: { name: "maxUsage", parse: parseFloat },

  Notes: "notes",
};
const path = "http://www.brewunited.com/grain_database.php";

const fetchGrainData = async () =>
  axios(path).then((res) => {
    const $ = cheerio.load(res.data);
    const headers = [
      "Grain",
      "Origin",
      "Mash?",
      "Color",
      "Power",
      "Potential",
      "Max",
      "Notes",
    ];
    const mashTable = $(
      "#content > div.post > table > tbody > tr:nth-child(n+1)"
    ).not(".headrow");
    const uniqueNames = new Map();
    mashTable.each((index, el) => {
      const data = $(el)
        .find("td")
        .map((i, c) => $(c).text())
        .toArray();
      const map = data.reduce<Omit<FermentableIngredient, "_id">>(
        (acc, d, i) => {
          const header = headers[i];
          if (mashFields[header]) {
            const field = mashFields[header];
            if (typeof field === "string") {
              if (field === "name" && !uniqueNames.has(d)) {
                uniqueNames.set(d, acc);
                // console.log(acc, d);
                // if (nameMap[d]) return acc;
                // nameMap[d] = true;
              }
              acc[field] = d; // .split("-").map((v) => parseFloat(v));
            } else {
              acc[field.name] = field.parse(d); // .split("-").map((v) => parseFloat(v));
            }
          }

          // acc[mashFields[headers[i]]] = d;
          return acc;
        },
        {
          //fermentabletype: "FermentableIngredient" as FermentableIngredient["type"],
        } as FermentableIngredient
      );
      // console.log(uniqueNames.entries());
      // createIngredient(map); //.then((d) => console.log(d));
      // return map;
    });
    return [...uniqueNames.values()].map((ing) => ({
      ...ing,
      slug: slugify(ing.name, { lower: true }),
    }));
  });
export default fetchGrainData;
