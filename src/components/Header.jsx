import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import Logo from "../assets/images/nody--1634020148.jpg";

const Header = () =>{
    const links = ['Home','Menu','About','Contact']

  
  
    return(
      <div className='header__container'>
        <div className='header-logo'>
          <img src={Logo} alt="" />
        </div>
        <div className='header-links'>
          {
            links.map((page,index) => {
              return(
                  <NavLink className='header-links--text' to={page != 'Home' ? `/${page}` : '/'}>{page}</NavLink>
              )
            })
          }
        </div>
      </div>
    )
  }

export default Header;