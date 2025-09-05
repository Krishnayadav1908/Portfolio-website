import react from "react";
import Navbar from "coponents/Navbar/Navbar";
import About from "components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "components/Experience/Experience";
import Work from "components/Work/Work";
import Education from "components/Education/Education";
import Contact from "components/Contact/Contact";
import Footer from "componets/Footer/Footer";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-#050414">
      <div>
      </div>
      <div>
        <Navbar/>
        <About/>
        <Skills/>
        <Experience/>
        <Work/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
