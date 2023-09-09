import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Beans from './Components/Beans';
import BeanDetails from './Components/BeanDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Beans" element={<Beans />} />
        <Route path="Beans/:id" element={<BeanDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
