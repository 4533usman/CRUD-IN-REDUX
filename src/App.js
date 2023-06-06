import React from 'react'
import Adduser from './components/Adduser'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar'
import Update from './components/Update';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/adduser' element={<Adduser/>} />
        <Route exact path='/edit/:id' element={<Update/>} />
      </Routes>
    </Router>
  )
}

export default App