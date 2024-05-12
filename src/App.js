import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import NoteState from './Context/NoteState';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <div className='container my-3'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
