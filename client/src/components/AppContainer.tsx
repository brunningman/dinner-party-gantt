import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Chart from './chart/Chart';

const Container = styled.div`
  background: lightgray;
  display: flex;
  padding: 15px;
`;

const AppContainer: FunctionComponent = () => {
  return (
    <Container>
      <Chart />
    </Container>
  );
};

export default AppContainer;
