import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';

import { Routes as RoutesConstants } from './constants';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Application = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={RoutesConstants.REGISTER} element={<Register />} />
        <Route path={RoutesConstants.LOGIN} element={<Login />} />
        <Route path={RoutesConstants.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Application;
