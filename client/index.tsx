import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

const App = () => {
  return (
    <h1>React is working</h1>
  )
}

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('app')
);