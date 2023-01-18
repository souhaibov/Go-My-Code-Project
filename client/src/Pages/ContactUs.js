import React, { useRef } from 'react';
import '../Style/ContactUs.css'
import Maps from './Maps'
import emailjs from '@emailjs/browser';


const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26f1u63', 'template_br0jd1e', form.current, 'LSHvTJdX7lbBZeeRX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
   
    <div className="contact-card">
     
      <div className="formulaire">
        <form ref={form} onSubmit={sendEmail}>
      <h1 style={{fontSize: '40px',textShadow: 'none', color: 'DarkGreen'}}>Get in Touch</h1>
      <br/><br/>
      <input placeholder=' Name *' type="text"/>
      <br/><br/>
      <input placeholder=' E.mail *' type="email" name="from_name"/>
      <br/><br/>
      <input placeholder=' Subject *' type="text" name="to_name"/>
      <br/><br/>

      <input style={{height:'150px'}} placeholder=' Message *' name="message" />
      <br/><br/><br/>
      <button className="submit" type="submit" value="Send">Submit</button>
      
         </form>
      </div>


      {/* <div class="wrapper">
  <div class="link_wrapper">
    <a href="#">Hover Me!</a>
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div> */}
  
{/* </div> */}

         
          <div className='left_side'>
          {/* <iframe title='map' style={{width:"40vw", height:"60vh", style:"border:0;", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200.90164671140815!2d9.997767981057914!3d33.96113915214634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2stn!4v1663637067416!5m2!1sfr!2stn"></iframe>   */}
              <Maps/>
           {/* <div className='info_club'>
        <div className='sous_info'>
          <img className='position' src='position.png' alt='position img' />
          <h4>𝓜é𝓽𝓸𝓾𝓲𝓪-𝓖𝓪𝓫é𝓼</h4>
          <h4>6010</h4><br/>
          <h4>𝓣𝓾𝓷𝓲𝓼𝓲𝓪</h4>
        </div>
        <div className='sous_info1'>
        <img src='phone.png' alt='position img' />
        <h4>+216 20 212 411</h4>
        <h4>+216 29 704 109</h4>
          <h4>𝓜𝓸𝓷-𝓢𝓪𝓽</h4>
          <h4>8:00 - 20:00</h4>
        </div>
        <div className='sous_info2'>
        <img src='email.png' alt='position img' />
        <h4>𝓬𝓱𝓮𝓼𝓼.𝓶𝓮𝓽𝓸𝓾𝓲𝓪@𝓰𝓶𝓪𝓲𝓵.𝓬𝓸𝓶</h4><br/>
          <h4>𝓼𝓸𝓾𝓱𝓪𝓲𝓫𝓸𝓿6@𝓰𝓶𝓪𝓲𝓵.𝓬𝓸𝓶</h4>
        </div> */}
           {/* </div> */}

           <div className="rectangles">
<div className="rectangle">
 
<img src="mail.png" alt="mail" />
<h3>Email</h3>

<h4>contact@chess-metouia.tn</h4>
<h4>chess.metouia@gmail.com</h4>
<br/>
<h4 className='write-me' onClick={() => window.location = 'mailto:contact@chess-metouia.tn'}>Write me →</h4>

</div>
<div className="rectangle">
<img  src="whatsapp1.png" alt="whatsapp" />
<h3>WhatsApp</h3>
<h4>+216 55 547 212</h4>
<h4>+216 29 704 109</h4>
<br/>
<a href="https://api.whatsapp.com/send?phone=+21628420108&text=Hello,%20more%20information!"><h4 className='write-me'>Write me →</h4></a>
  
</div>
<div className="rectangle">
  <img src="messenger.png" alt="messenger" />
  <h3>Messenger</h3>
  <h4>chess metouia</h4>
  <br/>
  <a style={{text_decoration:"none"}} href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F100004318984852"><h4 className='write-me'>Write me →</h4></a>
  
</div>
          </div>

          </div>
          <br/>
           </div>
           
  )
}

export default ContactUs