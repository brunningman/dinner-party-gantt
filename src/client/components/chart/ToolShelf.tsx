import React, { FunctionComponent, MouseEvent } from 'react';
import styled from 'styled-components';

const ToolShelfContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddButton = styled.button`
  height: 35px;
  width: 100px;
`;

const handleClick = (e: MouseEvent) => {
  e.preventDefault();
  console.log('click');
};

const ToolShelf: FunctionComponent = () => {
  return (
    <ToolShelfContainer>
      <AddButton onClick={handleClick}>+ Add Step</AddButton>
    </ToolShelfContainer>
  );
};

export default ToolShelf;
