import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import ToolShelf from './ToolShelf';
import ChartRow from './ChartRow';

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const populateRows = () => {
  const test: number[] = [1, 2, 3];
  return test.map((item: number) => <ChartRow key={item} />);
};

const Chart: FunctionComponent = () => {
  return (
    <ChartContainer>
      <ToolShelf />
      {populateRows()}
    </ChartContainer>
  );
};

export default Chart;
