import "./App.css";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="body ">
        <div id="us" className="container">
          <Header />

          <Hero />
          <div className="divider" />
          <Main />
          <div className="divider" />
          <Contact />
          <div className="divider" />
          <Footer />
          <a href="#us">
         <button className="scroll2Top"><i class="bi bi-caret-up"></i></button>
         </a>
        </div>
      </div>
    </>
  );
}

export default App;
