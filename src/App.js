import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './screen/Home';
import About from './screen/About';
import Projects from './screen/Projects';
import Contact from './screen/Contact';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects/>} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
