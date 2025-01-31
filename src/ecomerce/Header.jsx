import React, { useState } from 'react'

export const Header = () => {
    const [isMenuClicked, setIsMenuClicked]=useState(false);
    const handleMenuClick=()=>{
        setIsMenuClicked(!isMenuClicked);
    }
  return (
    <div>
        <header>
            <img src="https://assets.upstox.com/content/assets/images/cms/202451/Amazon%20logo.png"/>
            <input type="checkbox" id="check"></input>
            <label for="check" className="checkbut">
            <i class='bx bx-menu' onClick={()=>handleMenuClick()}></i>
            </label>
            <nav className={isMenuClicked?'opened':''}>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Clients</a>
                <a href="">Blog</a>
                <a href="">Questions</a>
                <a href="">live Count</a>
                <a href="">Form</a>
            </nav>
        </header>
    </div>
  )
}


