import React from 'react'
import navStyle from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { MdOutlineMenu } from "react-icons/md";


function Nav() {
  const [navState, setNavState] = useState(false)
  const [scroll, setScroll] = useState(false)
  const changeColor = ()=>{
    if (window.scrollY >= 200) {
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  
  window.addEventListener('scroll', changeColor)

  return (
    <div>

      <div className={`${navStyle.parent} ${scroll && navStyle.ChangeNavBackgroundColor}`}>
        <div className={navStyle.navContainer}>
          <div className={navStyle.logo}>
            <img src='http://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-light-1.png'/>
          </div>
          <div className={navStyle.togglerLinks}>
            <div className={`${navStyle.links} ${navState && navStyle.show}`}>
              <NavLink to='/Home'>Home</NavLink>
              <NavLink to='/About'>About</NavLink>
              <NavLink to='/OurOffer'>Our Offer</NavLink>
              <NavLink to='/Gallery'>Gallery</NavLink>
              <NavLink to='/Blog'>Blog</NavLink>
              <NavLink to='/Contact'>Contact</NavLink>
            </div>
            <div className={navStyle.toggeler} onClick={()=>setNavState(!navState)}>
              <MdOutlineMenu/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav