import { getAllRecipes } from "@/lib/recipes";
import { RecipeCard } from "../recipe-card";
import { Search } from "../search";
import styles from "./index.module.scss";
import { RecipesListClient } from "./recipe-list-client";

async function getRecipes() {
  try {
    const recipes = await getAllRecipes();
    return { res: recipes };
  } catch (error) {
    console.log(error);
    return { res: "Error in fetching data" };
  }
}

export const RecipesList = async () => {
  const { res } = await getRecipes();

  return (
    <div className={styles.recipesList}>
      {Array.isArray(res) && <RecipesListClient recipes={res} />}
    </div>
  );
};