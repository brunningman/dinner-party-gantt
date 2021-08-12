import React, { useState, FunctionComponent, MouseEvent } from 'react';
import styled from 'styled-components';

import AddStepModal from './AddStepModal';

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

const ToolShelf: FunctionComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  return (
    <ToolShelfContainer>
      <AddButton onClick={handleClick}>+ Add Step</AddButton>
      <AddStepModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </ToolShelfContainer>
  );
};

export default ToolShelf;
