import Link from "next/link";
import { IRecipeCard } from "@/types/recipe.type";
import { ArrowIcon } from "../icons/ArrowIcon";
import styles from "./index.module.scss";
import { ROUTES } from "@/constants";

interface IProps {
  recipe: IRecipeCard;
}

export const RecipeCard = ({ recipe }: IProps) => {
  const { title, slug, mainImage } = recipe;

  return (
    <Link href={`/${ROUTES.recipes}/${slug}`} className={styles.recipeCard}>
      <div className={styles.recipeCard__background}>
        <img
          className={styles.recipeCard__background__img}
          src={mainImage}
          alt={title}
        />
      </div>
      <div className={styles.button}>
        <p className={styles.button__text}>{title}</p>
        <ArrowIcon />
      </div>
    </Link>
  );
};
