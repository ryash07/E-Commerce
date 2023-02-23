import React from 'react'
import "./Footer.scss"

export const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className='item'>
                <h1>About</h1>
                <span>Sass is a preprocessor scripting language that is interpreted 
                    or compiled into Cascading Style Sheets. SassScript is the scripting 
                    language itself. Sass consists of two syntaxes.
                    The original syntax, called "the indented syntax," uses a syntax similar to Haml
                </span>
            </div>
            <div className='item'>
                <h1>Contact</h1>
                <span>Sass is a preprocessor scripting language that is interpreted 
                    or compiled into Cascading Style Sheets. SassScript is the scripting 
                    language itself. Sass consists of two syntaxes.
                    The original syntax, called "the indented syntax," uses a syntax similar to Haml
                </span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">LAMASTORE</span>
                <span className="copyright">© 2019 All RIGHTS RESERVED</span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}
