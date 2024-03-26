import { Category } from './category.type';
import { IIngredients } from './ingredients.type';

export interface IRecipe {
  slug: string;
  mainImage: string;
  title: string;
  description: string[];
  optionalDesc?: string;
  category: Category;
  bakingTime: string;
  formSize: string;
  amount: string;
  recipeSteps: IRecipeStep[];
  totalIngredients: string[];
  lastImage: string;
  tips: ITipsRecipe[];
  totalFavs: number;
  instaPostLink?: string;
}

export interface IRecipeStep {
  title: string;
  ingredients: string[];
  steps: string[];
}

export interface IRecipeCard
  extends Pick<IRecipe, 'title' | 'slug' | 'mainImage'> {}


export interface ITipsRecipe {
  title: string;
  text: string;
}

export interface IContent {}

export interface ISteps {
  [key: keyof IIngredients]: any[];
}
