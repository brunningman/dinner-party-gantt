import React from 'react';
import styled from 'styled-components';

import type { Recipe, Step } from '../../types'
interface Props {
  recipe: Recipe;
  step: Step;
}

const RowContainer = styled.div`
  height: 30px;
  width: 100%;
`;

export const ChartRow: React.FC<Props> = ({ recipe, step }) => {
  return <RowContainer>{`${recipe.name}: ${step.name}`}</RowContainer>;
};
