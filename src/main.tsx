import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router';
import { HomeComponent } from './components/pages/home';

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
