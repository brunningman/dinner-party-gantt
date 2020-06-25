import React, { Dispatch, SetStateAction, FunctionComponent } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: 60px;
  height: 40px;
`;

export interface AddStepModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

Modal.setAppElement('#app');

const AddStepModal: FunctionComponent<AddStepModalProps> = ({ modalIsOpen, setModalIsOpen }) => {
  const closeModal = () => setModalIsOpen(false);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add a Step">
      <StyledButton onClick={closeModal}>Close</StyledButton>
    </Modal>
  );
};

AddStepModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
};

export default AddStepModal;
