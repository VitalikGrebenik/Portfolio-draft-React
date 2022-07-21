import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.scss';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/navbar/Navbar.jsx'
import Footer from "./components/footer/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/project/:id" element={<ProjectDisplay/>} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
