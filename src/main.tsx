import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router';
// import { HomeComponent } from './components/pages/home';
import { HomeComponent } from './components/pages/home';
import { createGlobalStyle } from 'styled-components';

import operatorRegular from './assets/fonts/OperatorMono/OperatorMonoBookRegular.otf';

createGlobalStyle`
    @font-face {
        font-family: 'Operator Mono';
        src: url(${operatorRegular}) format('opentype');
        font-weight: normal;
        font-style: normal;
    }
`;

export const history = createBrowserHistory();
ReactDOM.render(
  <div>
    <Router history={history}>
      <Switch>
        <Route path="/" component={HomeComponent} />
        <Route path="/lol" component={HomeComponent} />
        <Route exact path="/" component={HomeComponent} />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);
