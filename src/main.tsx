import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { HashRouter } from 'react-router-dom';
import { HomeComponent } from './pages/home';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const history = createBrowserHistory();
ReactDOM.render(
  <div>
    <HashRouter>
       <HomeComponent />
    </HashRouter>
  </div>,
  document.getElementById('root')
);
