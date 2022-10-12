import React from 'react'
import '../Style/Footer.css'

const Footer = () => {
  return (
    // <div className="footer">
      
    //     <p> © Copyright 2022 © Created By Souh@ibov. All Rights Reserved </p>
      
    // </div>
    <div className='footer'>
      <div className='left_footer'>
      <br/>
        <h2>Keep in touch</h2><br/>
        <p>𝓬𝓱𝓮𝓼𝓼.𝓶𝓮𝓽𝓸𝓾𝓲𝓪@𝓰𝓶𝓪𝓲𝓵.𝓬𝓸𝓶</p><br/>
        <p>𝓟𝓱𝓸𝓷𝓮 𝓷𝓾𝓶𝓫𝓮𝓻: +216 20 212 411</p>
        <p style={{marging_left:"50px"}}> +216 29 704 109</p>
      </div>
    <div className="footer-basic">
        <footer>
            <div className="social">
              <i className='follow_us'>follow us on : </i>
              <a href="https://www.linkedin.com/feed/"><i className="icon ion-social-linkedIn"></i></a>
              <a href="https://www.instagram.com/?hl=fr"><i className="icon ion-social-instagram"></i></a>
              <a href="https://accounts.snapchat.com/"><i className="icon ion-social-snapchat"></i></a>
              <a href="https://twitter.com/home"><i className="icon ion-social-twitter"></i></a>
              <a href="https://www.facebook.com/groups/C.Ech.Met"><i className="icon ion-social-facebook"></i></a>
            </div> <br/>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="../">Home</a></li>
                <li className="list-inline-item"><a href="../Activities">Services</a></li>
                <li className="list-inline-item"><a href="../About">About</a></li>
                <li className="list-inline-item"><a href="../ContactUs#">Terms</a></li>
                <li className="list-inline-item"><a href="../Login">Privacy Policy</a></li>
            </ul>
            <br/>
            <p >© Copyright 2022 © Created By Souh@ibov. All Rights Reserved </p>
        </footer>
    </div>
    </div>
  )
}

export default Footer