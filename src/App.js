import React from 'react';
import About from './About';// import Welcome from './Welcome';
import SmallGroups from './SmallGroups';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Team from './Team';
import Welcome from './Welcome';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Welcome />}/>
          <Route index element={<Welcome />}/>
          <Route path="about" element={<About />} />
          <Route path='smallgroups' element={<SmallGroups />} />
          <Route path='team' element={<Team />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
