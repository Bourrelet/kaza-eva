import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/layout/Layout';

import Home from '../pages/Home';
import APropos from '../pages/APropos';
import FicheLogement from '../pages/FicheLogement';
import Error404 from '../pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/error" element={<Error404 />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="/*" element={<Error404 />} />          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
