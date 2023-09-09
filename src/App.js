import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Beans from './Components/Beans';
import BeanDetails from './Components/BeanDetails';
import Sacks from './Components/Sacks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Beans" element={<Beans />} />
        <Route path="Beans/:id" element={<BeanDetails />} />
        <Route path="Sacks" element={<Sacks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
