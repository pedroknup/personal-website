import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { HashRouter, Route, Link } from 'react-router-dom';

import { HomeComponent } from './pages/home';

export const history = createBrowserHistory();
ReactDOM.render(
  <div>
    <HashRouter>
       <HomeComponent />
    </HashRouter>
  </div>,
  document.getElementById('root')
);
