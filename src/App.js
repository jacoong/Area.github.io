import React from 'react';

import './App.css';
import Home from './components/pages/Home';
import Main from './components/pages/Main';
import MainRoutes from './components/pages/mainPages/MainRoutes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar'
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    {/* <Navbar/> */}
      <Router>
        <MainRoutes />
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/main'  element={<Main />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

