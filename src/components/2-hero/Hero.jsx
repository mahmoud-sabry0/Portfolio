import React from "react";
import "../2-hero/hero.css";
import img from "../../img/WhatsApp Image 2024-09-21 at 6.01.57 PM.jpeg";
import divAnimation from "../../img/Animation - 1729093970103.json"
import Lottie from "lottie-react";
export default function Hero() {
  return (
    <>
      <section className="hero d-flex">
        <div className="left-section flex-grow-1">
          <div className="parent-avatar d-flex">
            <img className="avatar" src={img} alt="" />
            
              <i class="bi bi-patch-check-fill "></i>
            
          </div>
          <h1 className="title">Welcome to c4a.dev 👋</h1>
          <p className="sub-title ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius tempora vero provident qui nemo distinctio. Quod dignissimos neque, quo, ut nobis animi veniam tempora quasi perferendis, quaerat error dolor vero.</p>
          <div className="all-icons d-flex ">
  <div className="icon"><i class="bi bi-twitter"></i></div>
  <div className="icon"><i class="bi bi-instagram"></i></div>
  <div className="icon"><i class="bi bi-github"></i></div>
  <div className="icon"><i class="bi bi-linkedin"></i></div>
 </div>
        </div>
        <div className="right-section animation "><Lottie className="contactAnimation"  animationData={divAnimation}/></div>
      </section>
    </>
  );
}
