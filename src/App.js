import React from 'react';
import About from './About';// import Welcome from './Welcome';
import SmallGroups from './SmallGroups';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Team from './Team';
import Welcome from './Welcome';
import Update from './Update';
import Splash2 from './Splash2';
import Give from './Give';


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
          <Route path='update' element={<Update />} />
          <Route path='splash2' element={<Splash2 />} />
          <Route path='give' element={<Give />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
