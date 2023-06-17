import { HopIngredient } from "../schema/ingredients/models";

describe("Ingredients", () => {
  it("should do stuff", async () => {
    expect(!!HopIngredient).toBe(true);
    const hop = await new HopIngredient({ name: "Hop" }).save();

    expect(!!hop).toBe(true);
    console.log(hop);
  });
});
