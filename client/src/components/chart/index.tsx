import React from 'react'

import type { Meal, Recipe } from '../../types'
interface Props {
  meal: Meal
}

import { View } from './view'
import { getRecipesByIds } from '../../dummy-data'

const loadRecipes = (recipeIds: string[]): Recipe[] => {
  return getRecipesByIds(recipeIds)
}

export const Chart: React.FC<Props> = ({ meal }) => {
  const recipes = loadRecipes(meal.recipeIds)

  return <View recipes={recipes} />
}