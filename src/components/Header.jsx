import React from 'react'
import "../components/Header.css"
import { SiStreamlit } from "react-icons/si";
function Header() {
  return (
    <div>
      <header>
        <div className='div-header'>
            <h1> VIDEO CHAT </h1>
           <span><a href='/'>Home</a></span>
           <span><a href='/'>Contact</a></span>
           <span><a href='/'>About Us</a></span>
           <button>Register</button>
           <button>Log in</button>
            </div>
            </header>
      <div className='body-header'>
         <div className='main'>
      <span className='spans'> 
      <div>

      <p className='para'>How to integrate <br></br>Live Audio + Video <br></br>
      <h3>Into iOS Apps Using WebRTC</h3>
      </p>
      </div>
      </span>
      <img src="videocall.png.png" alt="picture" style={{height:'300px'}}></img>
      
        <div className='circle'>
            
            <span className='dot'>Web<br></br>RTC</span>
        </div>
         </div>  
        
      </div>
      
    </div>   
  )
}

export default Header
