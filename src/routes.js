import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // módulo de roteamento

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    // BrowserRouter engloba todas as rotas. Switch controla para uma rota ser chamada por vez
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
  // Route é cada rota da aplicação
}
