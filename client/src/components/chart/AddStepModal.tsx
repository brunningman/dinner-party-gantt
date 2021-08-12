import React, {
  Dispatch,
  SetStateAction,
  FunctionComponent,
  FormEvent,
  ChangeEvent,
  useState,
  ReactElement,
  MouseEvent,
} from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { LOCALES } from '../../constants/locales';
import Step from '../../model/Step';

const StyledButton = styled.button`
  width: 60px;
  height: 40px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export interface AddStepModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

Modal.setAppElement('#app');

const AddStepModal: FunctionComponent<AddStepModalProps> = ({ modalIsOpen, setModalIsOpen }): ReactElement => {
  const [name, setName] = useState('');
  const [stepLocale, setStepLocale] = useState('empty');
  const [ovenTemp, setOvenTemp] = useState(100);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
    closeModal();
  };

  const cancelSubmit = (event: MouseEvent): void => {
    event.preventDefault();
    setName('');
    setStepLocale('empty');
    closeModal();
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    switch (event.target.id) {
      case 'name-input':
        setName(event.target.value);
        break;
      case 'temp-input':
        setOvenTemp(parseInt(event.target.value, 10));
        break;
      case 'hours-input':
        setHours(parseInt(event.target.value, 10));
        break;
      case 'minutes-input':
        setMinutes(parseInt(event.target.value, 10));
        break;
      default:
        console.log('not found');
    }
  };

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    event.preventDefault();
    setStepLocale(event.target.value);
  };

  const convertWordToTitleCase = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const setupStepLocales = (): ReactElement[] => {
    const stepLocales = Object.values(LOCALES);
    return stepLocales.map((locale: string) => <option value={locale}>{convertWordToTitleCase(locale)}</option>);
  };

  const ovenTempInput = (): ReactElement => {
    return (
      <div>
        Temperature
        <input id="temp-input" type="number" min={100} value={ovenTemp} onChange={handleTextChange} />
      </div>
    );
  };

  const modalStyles = {
    content: {
      width: '400px',
      height: '700px',
    },
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add a Step" style={modalStyles}>
      <StyledForm onSubmit={handleSubmit}>
        Step Name
        <input id="name-input" value={name} type="text" onChange={handleTextChange} />
        Where
        <select id="locale-selector" value={stepLocale} onChange={handleOptionChange}>
          <option value="empty">- Pick a Location -</option>
          {setupStepLocales()}
        </select>
        {stepLocale === 'oven' && ovenTempInput()}
        Duration (hours/minutes)
        <div>
          <input id="hours-input" type="number" min={0} value={hours} onChange={handleTextChange} />
          <input id="minutes-input" type="number" min={0} max={60} value={minutes} onChange={handleTextChange} />
        </div>
        Active?
        <select id="active-selector" value={isActive} onChnage={handleOptionChange}>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <StyledButton type="submit">Add Step</StyledButton>
      </StyledForm>
      <StyledButton onClick={cancelSubmit}>Cancel</StyledButton>
    </Modal>
  );
};

AddStepModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
};

export default AddStepModal;
