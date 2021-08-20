import type { Recipe } from '../types'

export const recipeData: Recipe[] = [
  {
    _id: "1",
    name: "Spaghetti",
    stepIds: ['2', '3'],
  },
  {
    _id: "7",
    name: "Meatballs",
    stepIds: ['4', '5'],
  },
  {
    _id: "8",
    name: "Sauce",
    stepIds: ['6'],
  }
];

const getRecipeById = (id: string): Recipe => {
  return recipeData.filter((recipe: Recipe) => recipe._id === id)[0]
}

export const getRecipesByIds = (ids: string[]): Recipe[] => {
  return ids.map((id: string) => getRecipeById(id))
}
