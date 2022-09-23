import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './scss/index.scss';
import Application from './Application';
import Register from './Register';
import Currency from './Currency';

createRoot(document.querySelector('.root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Application />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/currency'} element={<Currency />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
