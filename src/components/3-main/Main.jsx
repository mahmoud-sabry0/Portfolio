import React, { useState } from "react";
import "../3-main/main.css";
import img1 from "../../img/mahmou1 (7).jpg";
import img2 from "../../img/mahmou1 (10).jpg";
import img3 from "../../img/mahmou1 (11).jpg";
import img4 from "../../img/mahmou1 (12).jpg";
import img5 from "../../img/mahmou1 (13).jpg";
import img6 from "../../img/mahmou1 (8).jpg";
import img7 from "../../img/mahmou1 (9).jpg";
import img8 from "../../img/mahmou1.webp";
import { Fade, Slide } from "react-awesome-reveal";

const myprojects = [
  { projectTitle: "react bootstrap", category: ["react", "bootstrap"], imgPath: img8,},
  { projectTitle: "HTML & css", category: ["aaa", "css", "bbb"], imgPath: img1 },
  { projectTitle: "HTML & css", category: ["aaa", "css", "bbb"], imgPath:img2 },
  {projectTitle: "javaScribt",category: ["aaa", "javaScribt", "bbb"],imgPath:img3,},
  { projectTitle: "React & MUI",category: ["aaa", "mui", "bbb"],imgPath: img4,},
  {projectTitle: "Nood & Express",category: ["aaa", "express", "bbb"],imgPath:img5,},
  {projectTitle: "Nood & Express",category: ["aaa", "express", "bbb"],imgPath:img6,},
  {projectTitle: "Nood & Express",category: ["aaa", "express", "bbb"],imgPath:img7,},
];

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");

  const [arr, setArr] = useState(myprojects);

  return (
    <>
    
      <main className="d-flex pt-5">
        <section className="left-section d-flex">
          <button
            onClick={() => {
              setcurrentActive("all");
              setArr(myprojects);
            }}
            className={currentActive === "all" ? "active" : null}
          >
            all progects
          </button>
          <button
            onClick={() => {
              setcurrentActive("css");
              const nuwArr = myprojects.filter((item) => {
                const zzz = item.category.filter((myItem) => {
                  return myItem === "css";
                });
                return zzz[0] === "css";
              });
              setArr(nuwArr);
            }}
            className={currentActive === "css" ? "active" : null}
          >
            HTML & css
          </button>
          <button
            onClick={() => {
              setcurrentActive("javaScribt");
              const nuwArr = myprojects.filter((item) => {
                const zzz = item.category.filter((myItem) => {
                  return myItem === "javaScribt";
                });
                return zzz[0] === "javaScribt";
              });
              setArr(nuwArr);
            }}
            className={currentActive === "javaScribt" ? "active" : null}
          >
            javaScribt
          </button>
          <button
            onClick={() => {
              setcurrentActive("mui");
              const nuwArr = myprojects.filter((item) => {
                const zzz = item.category.filter((myItem) => {
                  return myItem === "mui";
                });
                return zzz[0] === "mui";
              });
              setArr(nuwArr);
            }}
            className={currentActive === "mui" ? "active" : null}
          >
            React & MUI
          </button>
          <button
            onClick={() => {
              setcurrentActive("express");
              const nuwArr = myprojects.filter((item) => {
                const zzz = item.category.filter((myItem) => {
                  return myItem === "express";
                });
                return zzz[0] === "express";
              });
              setArr(nuwArr);
            }}
            className={currentActive === "express" ? "active" : null}
          >
            Nood & Express
          </button>
        </section>
        
        <section className="right-section d-flex ">
        
          {arr.map((item) => {
            return (
              <>
              <Fade>
              
                <article key={item.imgPath} className="card1 ">
                  <img width={266} src={item.imgPath} alt="" />
                  <div className="box " style={{ width: "266px" }}>
                    <h2 className="title">{item.projectTitle}</h2>

                    <p className="sub-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ducimus sequi delectus magnam nulla incidunt.
                    </p>
                    <div className="d-flex icons">
                      <div style={{ gap: "11px" }} className="icon d-flex">
                        <div>
                          <i class="bi bi-link-45deg"></i>
                        </div>
                        <div>
                          <i class="bi bi-github"></i>
                        </div>
                      </div>
                      <a
                        style={{ textDecoration: "none", color: "" }}
                        className="link d-flex"
                        href="/"
                      >
                        more
                        <span>
                          <i class="bi bi-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
                </Fade>
              </>

            );
          })}
          
        </section>
        
      </main>
      
    </>
  );
}
