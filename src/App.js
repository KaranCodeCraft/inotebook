import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import NoteState from './Context/NoteState';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
// import { useState } from 'react';
import Alert from './Components/Alert';
import AlertState from './Context/AlertState';

function App() {
  return (
    <NoteState>
      <AlertState>
        <Router>
          <Navbar />
          <Alert/>
          <div className='container my-3'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<SignUp/>} />
            </Routes>
          </div>
        </Router>
      </AlertState>
    </NoteState>
  );
}

export default App;
