import React from 'react'
import "../4-contact/contact.css"
export default function Contact() {
  return<>
  <section className='contact-us'>
    <h1 className='title'><span><i class="bi bi-envelope"></i> Contact Us</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni iusto, dignissimos necessitatibus dicta delectus quasi dolorem quod, distinctio blanditiis facere corrupti quaerat itaque veritatis sint consectetur earum autem sit.</p>
    <div className="d-flex">
      <form className=''>
        <div className="d-flex">
        <label className='pt-4' htmlFor='email'>Email Address</label>
        <input required type='email' name='' id='email'/>
        </div>
        <div className="d-flex" >
        <label className='pt-5' htmlFor='message'>Your Message</label>
        <textarea required name='' id='message'></textarea>
        </div>
        <button className='submit'>Submit</button>
      </form>
      <div className="border animation">animation</div>
    </div>
  </section>
  </>
}
