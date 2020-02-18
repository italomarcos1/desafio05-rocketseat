import React from 'react';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    // simplesmente importa as rotas para poder utilizar
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
