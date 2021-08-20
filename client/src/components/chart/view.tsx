import React from 'react';
import styled from 'styled-components';

import type { Recipe, Step } from '../../types'
interface Props {
  recipes: Recipe[];
}
interface DisplayItem {
  step: Step;
  recipe: Recipe;
}

import { getStepsByIds } from '../../dummy-data'
import { ChartRow } from './chart-row';

const Container = styled.div`
  width: 70%;
  height: 100%;
`;

const loadSteps = (stepIds: string[]): Step[] => {
  return getStepsByIds(stepIds)
}

const recipesToRowData = (recipes: Recipe[]): DisplayItem[] => {
  const displayItems: DisplayItem[] = []
  recipes.forEach((recipe: Recipe) => {
    const steps = getStepsByIds(recipe.stepIds)
    steps.forEach((step: Step) => {
      displayItems.push({ step, recipe })
    })
  })

  return displayItems
};

export const View: React.FC<Props> = ({ recipes }) => {
  const displayItems = recipesToRowData(recipes)
  return (
    <Container>
      {displayItems.map(item => <ChartRow key={item.step._id} recipe={item.recipe} step={item.step} />)}
    </Container>
  );
};
