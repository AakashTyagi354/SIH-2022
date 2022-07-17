import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Analytics from './charts/Analysics';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home2'

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/chart' element={<Analytics />} />
          <Route exact path='/home' element={<Home />} />
          


        </Routes>

      </Router>

    </div>
   
  )
}

export default App