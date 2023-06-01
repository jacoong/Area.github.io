import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../mainPages/About';
import Contact from '../mainPages/Contact';
import MusicPage from '../mainPages/MusicPage';
import Visuals from '../mainPages/Visuals';
import Creaters from '../mainPages/Creaters';

export default function MainRoutes() {
    return (
      <Routes>
        <Route path="/main/about" element={<About />} />
        <Route path="/main/contact" element={<Contact />} />
        <Route path="/main/musicPage" element={<MusicPage />} />
        <Route path="/main/visuals" element={<Visuals />} />
        <Route path="/main/creaters" element={<Creaters />} />
      </Routes>
    );
  }
