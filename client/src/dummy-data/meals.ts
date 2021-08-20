import type { Meal } from '../types'

export const mealData: Meal[] = [{
  _id: "9",
  recipeIds: ['1', '7', '8'],
  cooks: 1,
  finishTime: "07:00:00 PM",
}];

export const getMealById = (id: string): Meal => {
  return mealData.filter((meal: Meal) => meal._id === id)[0]
}