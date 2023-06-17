import { Style, StyleSubCategory } from "./models";

describe("Style", () => {
  it("should be true", async () => {
    expect(!!Style).toBe(true);

    const subcat = await new StyleSubCategory({
      name: "subcat",
      identifier: "10",
    }).save();
    const style = await new Style({
      name: "Style",
      identifier: "10a",
      //subcategory: subcat,
      subcategoryId: subcat.identifier,
    }).save();
    style.populate("subcategory");
    expect(!!style).toBe(true);
    expect(style.subcategoryId).toBe(subcat.identifier);
    const sub = await StyleSubCategory.findOne({
      identifier: subcat.identifier,
    }).populate("styles");
    expect(sub?.styles.map(({ _id }) => _id.toString())).toContain(
      style._id.toString()
    );
  });
});
