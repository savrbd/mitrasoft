import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import AboutMe from './layout/aboutMe';
import Main from './layout/main';
import NavBar from './component/navBar';
import ImagePage from './component/imagePage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/photos/:photoId" element={<ImagePage/>}/>
        <Route path="/aboutMe" element={<AboutMe/>} />
        <Route path="/" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;
