import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
// library
import { motion } from "framer-motion";
// components
import Home from "./screen/Home";
import About from "./screen/About";
import Projects from "./screen/Projects";
import Contact from "./screen/Contact";
import Navbar from "./components/Navbar";
import Loader from "./components/loader/Loader";


function App() {

  // loader
  const [loader,setLoader] = useState(true);
  // set loader
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2500)
  },[])


  return loader ? <Loader/>
  : (
    <div className="App">
      <motion.div initial={{y: -300,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.9,ease:"easeInOut"}}>
        <Navbar />
      </motion.div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
