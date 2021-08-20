import { LOCALES } from "../constants/locales";

import type { Step } from '../types'

export const stepData: Step[] = [
  {
    _id: "2",
    name: "Boil Water",
    description: "Bring a pot of water to boil",
    locale: LOCALES.stovetop,
    duration: 5,
    attention: 0,
  },
  {
    _id: "3",
    name: "Cook Pasta",
    description: "Cook spaghetti according to package directions",
    locale: LOCALES.stovetop,
    duration: 10,
    attention: 0.2,
    precedingStepIds: ['2'],
  },
  {
    _id: "4",
    name: "Preheat Oven",
    description: "Preheat oven to 350F",
    locale: LOCALES.oven,
    duration: 10,
    attention: 0,
  },
  {
    _id: "5",
    name: "Bake Meatballs",
    description: "Bake meatballs for 25 minutes at 350 F",
    locale: LOCALES.oven,
    duration: 25,
    attention: 0.2,
    level: 350,
    precedingStepIds: ['4'],
  },
  {
    _id: "6",
    name: "Heat Sauce",
    description: "Heat canned sauce in saucepan over low heat",
    locale: LOCALES.stovetop,
    duration: 15,
    attention: 0.5,
  }
];

const getStepById = ((id: string): Step => {
  return stepData.filter((step: Step) => step._id === id)[0]
})

export const getStepsByIds = ((ids: string[]): Step[] => {
  return ids.map((id: string) => getStepById(id))
})
