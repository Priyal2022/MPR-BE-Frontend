import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Signup2 from './components/Signup2';
import Home from './components/Home';
import Login2 from './components/Login2';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup2" element={<Signup2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
