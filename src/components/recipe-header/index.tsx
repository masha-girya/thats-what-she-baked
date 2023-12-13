import Image from "next/image";
import { IngredientsList } from "@/components/ingredients-list";
import { RecipeSticker } from "@/components/recipe-sticker";
import styles from "./index.module.scss";
import { IIngredients } from "@/types/ingredients.type";

interface IProps {
  title: string;
  description: string[];
  mainImage: string;
  allIngredients: string[];
  ingredients: IIngredients;
}

export const RecipeHeader = (props: IProps) => {
  const { title, description, mainImage, allIngredients, ingredients } = props;

  console.log(allIngredients)

  return (
    <div className={styles.recipeHeader}>
      <div>
        <h1 className={styles.recipeHeader__title}>{title}</h1>
        <p className={styles.recipeHeader__descFirst}>{description[0]}</p>
        <Image
          src={mainImage || ""}
          alt={title || ""}
          width={600}
          height={600}
          layout="responsive"
          loading="lazy"
        />
        <div className={styles.recipeHeader__rightCol}>
          {description.slice(1).map((item: any) => (
            <p key={item.slice(0, 10)}>{item}</p>
          ))}
        </div>
      </div>
      <div className={styles.recipeHeader__ingredientsBox}>
        <RecipeSticker>
          <h2 className={styles.recipeHeader__ingredientsBox__title}>
            Всі інгредієнти
          </h2>
          <div>
            {/* <IngredientsList ingredients={allIngredients} /> */}
            {Object.values(ingredients).map((item, i) => (
              <IngredientsList key={i} ingredients={item} />
            ))}
          </div>
        </RecipeSticker>
      </div>
    </div>
  );
};