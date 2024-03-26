import { Suspense } from 'react';
import {
  RecipeStep,
  RecipeSticker,
  RecipeHeader,
  RecipeTips,
  ServerErrorPlug,
  BackButton,
  LoadingPage,
  RecipesList,
  ShareSocials,
  TitleBox,
  InstagramPost,
} from '@/components';
import { ERROR_TEXT } from '@/constants';
import { getRecipeBySlug } from '@/lib';
import styles from './recipe-page.module.scss';

const RecipePage = async ({ params }: any) => {
  const { recipe } = await getRecipeBySlug(params.slug);

  if (!recipe) {
    return <ServerErrorPlug text={ERROR_TEXT.recipeInner} />;
  }

  const {
    recipeSteps,
    bakingTime,
    formSize,
    amount,
    tips,
    lastImage,
    instaPostLink,
  } = recipe;

  const stickerInfo = [
    {
      title: 'Час приготування: ',
      info: bakingTime,
    },
    {
      title: 'Кількість порцій: ',
      info: amount,
    },
    {
      title: 'Розмір форми: ',
      info: formSize,
    },
  ];

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className={styles.recipe}>
        <div className={styles.recipe__recipeBox}>
          <div className={styles.recipe__recipeBox__head}>
            <BackButton />
            <TitleBox slug={recipe.slug} totalFavs={recipe.totalFavs} />
          </div>

          <RecipeHeader recipe={recipe} />

          <RecipeTips tips={tips} />

          <RecipeSticker>
            {stickerInfo.map((info) => (
              <p key={info.title} className={styles.recipe__stickerInfo}>
                <span className={styles.recipe__stickerInfo__title}>
                  {info.title}
                </span>
                {info.info}
              </p>
            ))}
          </RecipeSticker>

          <RecipeStep recipeSteps={recipeSteps} lastImage={lastImage} />

          {instaPostLink && <InstagramPost postLink={instaPostLink} />}

          <RecipeSticker>
            <p className={styles.recipe__shareText}>
              А за кропітку роботу над рецептом ви завжди можете підримати мене
              донатом або поділитись цим рецептом через соцмережі 🌚🌝
            </p>
            <ShareSocials isInSticker />
          </RecipeSticker>
        </div>

        <RecipesList isBlock isSlider />
      </div>
    </Suspense>
  );
};

export default RecipePage;
