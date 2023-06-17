import xml2js from "xml2js";
// import axios from "axios";
import fs from "fs";
import path from "path";

const parseStyles = async (xml) => {
  // const res = convert.xml2json(xml, { spaces: 4 });
  const res = await xml2js.parseStringPromise(xml);

  return res;
};
// const parseStyles =
// const url =
// "https://raw.githubusercontent.com/meanphil/bjcp-guidelines-2015/master/styleguide.xml";
export default async () => {
  // const text = await axios(url);
  const t = fs.readFileSync(path.join(__dirname, "../bjcpstyles.xml"), "utf8");
  const js = await parseStyles(t);
  const styleGroups = js.styleguide.class.map((c) =>
    c.category.map((styleGroup) => {
      const subs = styleGroup.subcategory.map(({ $, stats, ...style }) => {
        const newStats = Object.keys(stats[0]).reduce(
          (acc, stat) => {
            if (stat !== "$")
              acc[stat] = Object.entries(stats[0][stat]?.[0]).reduce(
                (ac, [s1, v]: [string, any]) => {
                  if (s1 !== "$" && s1 !== "flexible")
                    ac[s1] = parseFloat(v[0]);
                  return ac;
                },
                { flexible: stats[0][stat][0].$.flexible === "true" }
              );

            return acc;
          },
          // {}
          { ...stats[0].$ }
        );
        const styleData = Object.keys(style)
          .filter(
            (k) => ["$", "entry_instructions", "specialty"].indexOf(k) < 0
          )
          .reduce(
            (acc, k) => {
              acc[k] = style[k][0];
              return acc;
            },
            { identifier: $.id, vitals: newStats }
          );
        console.log(style, styleData);
        return styleData;
      });
      return {
        category: c.$.type,
        // id: styleGroup.$.id,
        // name: styleGroup.$.name,
        revision: styleGroup.revision._,
        styles: subs,
        ...Object.keys(styleGroup).reduce(
          (acc, s) => {
            if (["$", "subcategory", "revision"].indexOf(s) === -1)
              acc[s] = styleGroup[s][0];
            return acc;
          },
          { identifier: styleGroup.$.id }
        ),
      };
    })
  );
  console.log(styleGroups.flat(1));
  // console.log(JSON.stringify(styleGroups[0], null, 4));
  return styleGroups.flat(1);
};
