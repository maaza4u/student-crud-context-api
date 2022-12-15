import React from 'react';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GlobalContext } from './contexts/GlobalState';

const App = () => {
  return (
    <div
      style={{
        maxWidth: '30rem',
        margin: '4rem auto',
      }}
    >
      <GlobalContext>
        <Routes />
      </GlobalContext>
    </div>
  );
};

export default App;
