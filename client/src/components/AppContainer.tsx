import React from 'react';
import styled from 'styled-components';

import type { Meal } from '../types'

import { Chart } from './chart';
import { StepsSidebar } from './steps-sidebar'

import { getMealById } from '../dummy-data'

const Container = styled.div`
  background: lightgray;
  display: flex;
  padding: 5vh 5vw;
  flex-direction: row;
`;

const loadMealData = (mealId: string): Meal => {
  return getMealById(mealId)
}

const AppContainer: React.FC =  () => {
  const mealData = loadMealData('9')
  return (
    <Container>
      <Chart meal={mealData} />
      <StepsSidebar meal={mealData} />
    </Container>
  );
};

export default AppContainer;
