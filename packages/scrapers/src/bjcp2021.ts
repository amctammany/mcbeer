import { EnumStyleCategory, Style } from "@lnk/types";
import bjcp from "../styles2021.json";

const styles = bjcp.map((s) => {
  const style: Omit<Style, "category" | "_id"> & { category: string } = {
    name: s.name,
    category: "beer",
    subcategoryId: s.categorynumber,
    identifier: s.number,
    appearance: s.appearance,
    aroma: s.aroma,
    flavor: s.flavor,
    mouthfeel: s.mouthfeel,
    comments: s.comments,
    ingredients: s.characteristicingredients,
    comparison: s.stylecomparison,
    examples: s.commercialexamples,
    history: s.history,
    vitals: {
      ibu: s.ibumin
        ? { low: parseInt(s.ibumin), high: parseInt(s.ibumax) }
        : { flexible: true },
      og: s.ogmin
        ? { low: parseInt(s.ogmin), high: parseInt(s.ogmax) }
        : { flexible: true },
      fg: s.fgmin
        ? { low: parseInt(s.fgmin), high: parseInt(s.fgmax) }
        : { flexible: true },
      srm: s.srmmin
        ? { low: parseInt(s.srmmin), high: parseInt(s.srmmax) }
        : { flexible: true },
      abv: s.abvmin
        ? { low: parseInt(s.abvmin), high: parseInt(s.abvmax) }
        : { flexible: true },
    },
    //tags: s.tags,
  };
  return style;
});
export default () => styles;
