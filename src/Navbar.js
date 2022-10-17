import React, { useEffect, useState } from 'react';
import './Row.css'
const Navbar = () => {
    const [show,handleShow] =useState(false)
    useEffect(() =>{
        window.addEventListener("scroll",() =>{
            if(window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        })
        return () => {
            window.removeEventListener('scroll', null)
          }
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
             <img
          className="nav--logo"
          src="https://raw.githubusercontent.com/CleverProgrammers/netflix-technical/main/public/logo.png"
          alt='Netflix Logo'
        />

<img
          className="nav--avatar"
        
          src={`https://avatars.dicebear.com/api/identicon/${'user'}.svg`}
          alt='User Image'
        />

        </div>
    );
};

export default Navbar;