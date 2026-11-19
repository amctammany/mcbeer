import axios from "axios";
import * as cheerio from "cheerio";
import type { Element, AnyNode } from "domhandler";
import { arrayParser, rangeParser } from "@/lib/parsers";
import slugify from "@/lib/slugify";
const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
};
const brandWords = ["YQH", "HBC", "YCR"];
const parseNameString = (nameString: string) => {
  const regex = new RegExp(`\\b(${brandWords.join("|")})\\b`, "i");
  const brandIndex = nameString.search(regex);
  const brandID = brandIndex >= 0 ? nameString.slice(brandIndex) : null;
  const name =
    brandIndex >= 0 ? nameString.slice(0, brandIndex).trim() : nameString;
  return { brandID, name };
};
const fieldNames: Record<
  string,
  { name: string; parse: (v: string) => unknown } | string
> = { "Alpha Acid": { name: "alphaRange", parse: rangeParser } };
const crosbyUrl = "https://www.crosbyhops.com/hops/varieties/";
const fetchHopData = async (path: string) =>
  axios(path, { headers })
    .then((res) => {
      const $ = cheerio.load(res.data);
      const nameString = $("h1").text();
      const r = parseNameString(nameString);
      const aromaTag = $("div.dnd-row span");
      const brewingValues = $("vf-tabs-panel span");
      const spans = $("span");
      const values = new Map<string, unknown>();
      const vs = new Map<
        number,
        { name: string; parse?: (s: string) => unknown } | string
      >();
      spans.each((index, el) => {
        const text = $(el).text();
        Object.entries(fieldNames).forEach(([key, field]) => {
          if (text.includes(key)) {
            vs.set(index + 1, field);
          }
        });
        if (vs.has(index)) {
          const v = vs.get(index)!;
          if (typeof v === "string") {
            values.set(v, text);
          } else {
            values.set(v.name, v.parse ? v.parse(text) : text);
          }
        }

        if (text.includes("Alpha cid")) {
          //   values.add(index + 1);
          vs.set(index + 1, { name: "alhaRange", parser: rangeParser });
        }
      });
      const hopData: Record<string, unknown> = {
        type: "HopIngredient",
        slug: slugify(r.name),
        ...Object.fromEntries(values.entries()),
        ...r,
      };
      return hopData;
    })
    .catch((e) => console.error(e));
export const getCrosbyLinks = async () =>
  axios(crosbyUrl, { headers }).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const hopLinks = $(".product-tout  .action-buttons > a:last-child");
    const links: string[] = [];
    hopLinks.each((index, value) => {
      const href = $(value).attr("href");
      if (href) links.push(href);
    });
    return links.slice(1);
  });

const scrapeHops = async () => {
  const links = await getCrosbyLinks();
  const data = await Promise.all(
    links
      .slice(0, 3)
      .map((link) => fetchHopData(link).catch((e) => console.error(e))),
  );
  //   const data = await Promise.all(
  // links.map((link) => fetchHopData(link).catch((e) => console.log(e))),
  //   );
  // console.log(data);
  return data.filter((d) => !!d);
};

// scrapeHops();
export default scrapeHops;
