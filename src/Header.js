import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <div className='header'>
      <img
      className="header__icon"
      src="https://www.kindpng.com/picc/m/176-1769162_high-resolution-airbnb-logo-hd-png-download.png"
      alt="this is logo image"
      />

       <div className='header__center'>
        <input type="text" />
        <SearchIcon/>
        
       </div>
    </div>
  )
}

export default Header
