import { useEffect } from "react";
import "./App.css";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN,setshowScrollBTN] = useState(false);
  return (
    <>
      
        <div id="us" className="container">
          <Header />

          <Hero />
          <div className="divider" />
          <Main />
          <div className="divider" />
          <Contact />
          <div className="divider" />
          <Footer />
        
            <a style={{opacity:showScrollBTN?1:0,transition:"0.3s"}} href="#us">
              <button className="scroll2Top">
                <i class="bi bi-caret-up"></i>
              </button>
            </a>
          
        </div>
      
    </>
  );
}

export default App;
