import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Beans from './Components/Beans';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Beans" element={<Beans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
