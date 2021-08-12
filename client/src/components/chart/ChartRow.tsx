import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const RowContainer = styled.div`
  height: 30px;
  width: 100%;
`;

const ChartRow: FunctionComponent = () => {
  return <RowContainer>I AM A ROW</RowContainer>;
};

export default ChartRow;
