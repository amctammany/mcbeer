import { HopIngredient } from "src/schema/ingredients";
import { Recipe } from "src/schema/recipes";

describe("Recipe", () => {
  it("should be true", () => {
    expect(!!Recipe).toBe(true);
  });
  it("should create recipe", async () => {
    const hop1 = await new HopIngredient({ name: "Hop1" }).save();
    const recipeData = {
      name: "foo",
      foo: "far",
      hopIngredients: [{ HopIngredient: hop1 }],
    };
    const recipe = new Recipe(recipeData);
    await recipe.save();
    console.log(recipe);
    expect(!!recipe).toBe(true);
  });
});
