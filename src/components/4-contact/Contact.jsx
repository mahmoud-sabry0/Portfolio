import React from "react";
import "../4-contact/contact.css";
import { useForm, ValidationError } from "@formspree/react";

import doneWalkAnimation from "../../img/Animation - 1729005471111.json"
import contactAnimation from "../../img/Animation - 1729092013954.json"
import Lottie from "lottie-react";
export default function Contact() {
  const [state, handleSubmit] = useForm("mgveeogd");
 
  return (
    <>
      <section className="contact-us">
        <h1 className="title">
          <span>
            <i class="bi bi-envelope"></i> Contact Us
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni
          iusto, dignissimos necessitatibus dicta delectus quasi dolorem quod,
          distinctio blanditiis facere corrupti quaerat itaque veritatis sint
          consectetur earum autem sit.
        </p>
        <div style={{justifyContent:"space-between"}} className="d-flex">
          <form onSubmit={handleSubmit} className="">
            <div className="d-flex">
              <label className="pt-4" htmlFor="email">
                Email Address
              </label>
              <input required type="email" name="email" id="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="d-flex">
              <label className="pt-5" htmlFor="message">
                Your Message
              </label>
              <textarea required name="message" id="message"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting...." :"submit"}
            </button>
            
            {state.succeeded&&(<h3 className="message d-flex"style={{fontSize:"20px", marginTop:"1.8rem"}} ><Lottie loop={false} style={{height:"37px"}} animationData={doneWalkAnimation}/> تم بنجاح</h3>)}
          </form>
          <div className=" "><Lottie className="contactAnimation" style={{height:"350px"}} animationData={contactAnimation}/></div>
        </div>
      </section>
    </>
  );
}
