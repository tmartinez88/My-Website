import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component }  from 'react';
import useCollapse from 'react-collapsed';
import Navbar from "./components/nav"
import Home from "./pages/home"
import Music from "./pages/music"
import Webwork from "./pages/webwork"
import Software from "./pages/software"
import Imsys from "./pages/imsys"
import Veil from "./pages/veil"
import RTLEARNER from "./pages/rtlearner"
import Devlog from "./pages/devlog"
import Tripleperc from "./pages/tripleperc"
import Timelayer from "./pages/timelayer"
import Organizing from "./pages/organizing"
import Systems from "./pages/systems"
import Logo from "./components/logo"
function App() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <>
    
      <Router>  
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home/>} />
            <Route path='/music' exact element={<Music/>} />
            <Route path='/webwork' element={<Webwork/>} />
            <Route path='/veil' element={<Veil/>} />
            <Route path='/imsys' element={<Imsys/>} />
            <Route path='/tripleperc' element={<Tripleperc/>} />
            <Route path='/rtlearner' element={<RTLEARNER/>} />
            <Route path='/timelayer' element={<Timelayer/>} />
            <Route path='/software' element={<Software/>} />
            <Route path='/organizing' element={<Organizing/>} />
            <Route path='/systems' element={<Systems/>} />
            <Route path='/devlog' element={<Devlog/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
