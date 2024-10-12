import React, { useState } from "react";
import "../1-header/header.css";
import { useEffect } from "react";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "bg-black");

  useEffect(() => {
    if (theme === "bg-light") {
      document.body.classList.remove("bg-black");
      document.body.classList.add("bg-light");
    }else{
      document.body.classList.remove("bg-light");
      document.body.classList.add("bg-black");
    }
  }, [theme]);
  return (
    <>
      <header className=" d-flex align-items-center justify-content-between mt-4">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="icon menu"
        >
          <i class="bi bi-list"></i>
        </button>
        <div />

        <nav>
          <ul className="d-flex  pl-5">
            <li className="li">
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Articles</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Speaking</a>
            </li>
            <li>
              <a href="/">Uses</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
           localStorage.setItem("currentMode",theme=== "bg-black" ? "bg-light" :"bg-black") 
           setTheme(localStorage.getItem("currentMode"))     }}
          className="icon"
        >
         {theme === "bg-black" ? (<i class="bi bi-moon-stars"></i>):(<i class="bi bi-brightness-high"></i>)}
        </button>
        {showModal && (
          <div className="fixed">
            <ul>
              <li>
                <button
                  className="button"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  <i class="bi bi-x xxx"></i>
                </button>
              </li>
              <li className="li">
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Articles</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Speaking</a>
              </li>
              <li>
                <a href="/">Uses</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
