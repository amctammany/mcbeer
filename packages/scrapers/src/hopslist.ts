import axios from "axios";
import slugify from "slugify";
import cheerio, { Element } from "cheerio";

import { arrayParser, rangeParser } from "parsers";

const fieldNames = {
  "Alpha Acid Composition": { name: "alphaRange", parse: rangeParser },
  "Beta Acid Composition": { name: "betaRange", parse: rangeParser },
  "Co-Humulone Composition": { name: "cohumuloneRange", parse: rangeParser },
  Country: "country",
  Characteristics: "description",
  "Total Oil Composition": { name: "totalOilRange", parse: rangeParser },
  "Myrcene Oil Composition": { name: "myrceneRange", parse: rangeParser },
  "Humulene Oil Composition": { name: "humuleneRange", parse: rangeParser },
  "Caryophyllene Oil": { name: "caryophylleneRange", parse: rangeParser },
  "Farnesene Oil": { name: "farneseneRange", parse: rangeParser },
  Substitutes: { name: "substitutesString", parse: arrayParser },
  "Style Guide": { name: "styles", parse: arrayParser },
  Purpose: "purpose",
};
const fetchHopData = async (path: string) =>
  axios(path)
    .then((res) => {
      const $ = cheerio.load(res.data);
      const name = $(".entry-title").text();
      let hopTable = $(
        "div.entry-wrap > div > table:nth-child(4) > tbody > tr "
      );
      let i = 4;
      if (hopTable.length < 10) {
        while (hopTable.length < 15 && i < 10) {
          hopTable = $<Element, any>(
            `div.entry-wrap > div > table:nth-child(${i}) > tbody > tr `
          );
          i += 1;
        }
      }
      const hopData = {
        name,
        type: "HopIngredient",
        slug: slugify(name, { lower: true }),
      };
      hopTable.each((index, el) => {
        const key = $(el).find("td:nth-child(1)").text();
        const value = $(el).find("td:nth-child(2)").text().replace("<", "0-");
        if (fieldNames[key]) {
          const field = fieldNames[key];
          if (typeof field === "string") {
            hopData[field] = value; // .split("-").map((v) => parseFloat(v));
          } else {
            hopData[field.name] = field.parse(value); // .split("-").map((v) => parseFloat(v));
          }
        }
        // console.log(key, value, fieldNames[key]);
      });
      return hopData;
      // console.log(name, hopData);
      // createIngredient(hopData); // .then((d) => console.log(d));
    })
    .catch((e) => {
      console.log(e);
    });
const hopsIndexUrl = "http://www.hopslist.com/hops/";
const getHopLinks = async () =>
  axios(hopsIndexUrl).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const hopLinks = $(".listing-item > a");
    const links: string[] = [];
    hopLinks.each((index, value) => {
      const href = $(value).attr("href");
      if (href) links.push(href);
    });
    return links;
  });

const scrapeHops = async () => {
  const links = await getHopLinks();
  const data = await Promise.all(
    links.map((link) => fetchHopData(link).catch((e) => console.log(e)))
  );
  console.log(data);
  return data.filter((d) => !!d);
};

// scrapeHops();
export default scrapeHops;
