import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomeComponent } from './pages/home';
import { CvPage } from './pages/cv';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const history = createBrowserHistory();
ReactDOM.render(
  <div>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/resume" element={<Navigate to="/cv" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  </div>,
  document.getElementById('root')
);
