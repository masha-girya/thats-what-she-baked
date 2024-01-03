"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import { Search } from "@/components/search";
import { RecipeCard } from "@/components/recipe-card";
import styles from "./index.module.scss";

interface IProps {
  recipes: {
    mainImage: string;
    title: string;
    slug: string;
  }[];
  isFavRecipes?: boolean;
}

export const RecipesListClient = (props: IProps) => {
  const { recipes, isFavRecipes } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [recipesOnShow, setRecipesOnShow] = useState(recipes);

  useEffect(() => {
    const newRecipes = recipes.filter((recipe) =>
      recipe.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    setRecipesOnShow(newRecipes);
  }, [searchQuery]);

  return (
    <>
      <div
        className={classNames(styles.recipeListClient__search, {
          [styles.recipeListClient__search_favs]: isFavRecipes,
        })}
      >
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className={styles.recipeListClient__box}>
        {recipesOnShow.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </>
  );
};
