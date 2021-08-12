import React, { FunctionComponent } from 'react';

import { Locales } from '../constants/locales';

export interface StepContext {
  _id: number;
  recipeId: number;
  name: string;
  locale: Enumerator<Locales>;
  ovenTemp?: number | null;
  active: boolean;
  attention: Enumerator<{
    full: 'full';
    moderate: 'moderate';
    slight: 'slight';
  }>;
  duration: number;
}

export const STEP_DEFAULT_VALUE = {
  _id: 0,
  recipeId: 0,
  name: 'New Step',
  locale: 'countertop',
  ovenTemp: null,
  active: false,
  attention: 'slight',
  duration: 0,
};

const StepContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_STEP':
      return { ...state, ...action.payload };
    default:
      return Error('Not a valid action');
  }
};

const StepContextProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, STEP_DEFAULT_VALUE);
  const value = { state, dispatch };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

const StepContextConsumer = StepContext.Consumer;

export { StepContext, StepContextProvider, StepContextConsumer };
