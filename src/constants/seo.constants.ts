const mainKeywords = [
  'рецепти',
  'рецепт',
  'рецепт чізкейку',
  'чізкейк рецепт',
  'випічка рецепти',
  'кекс рецепти',
  'рецепти українською',
]

export const SEO = {
  blog: {
    desc: 'Блог про їжу, щоб надихнутись досвідом',
    keywords: [
      ...mainKeywords,
      'блог про їжу',
    ],
  },
  recipes: {
    desc: 'Детальні рецепти, щоб надихнутись своїм творінням!',
    keywords: mainKeywords,
  },
  tips: {
    desc: 'Замітки про їжу, щоб відчувати більше',
    keywords: [
      ...mainKeywords,
      'що таке мафіни',
      'мафіни це',
      'що таке пахта',
      'про випічку',
    ],
  },
}