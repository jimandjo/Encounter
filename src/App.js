import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';
import About from './About';
import SmallGroups from './SmallGroups';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Welcome />}/>
          <Route path="about" element={<About />} />
          <Route path='smallgroups' element={<SmallGroups />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
