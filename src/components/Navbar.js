import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 

export default function Navbar (props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar- ${props.Mode} bg-${props.Mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" style={{color:props.Mode==='light'?'black':'white'}} to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link  " style={{color:props.Mode==='light'?'black':'white'}} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"style={{color:props.Mode==='light'?'black':'white'}} to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.Mode==="light"?"primary":"light"} mx-1`}>
         <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
        <div className={`form-check form-switch text-${props.Mode==="light"?"success":"light"} mx-1`}>
         <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
        <div className={`form-check form-switch text-${props.Mode==="light"?"dark":"light"} mx-1`}>
         <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark mode</label>
        </div>
        <form className="d-flex">
          {/*<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>*/}
          <button className={`btn btn-outline-${props.Mode==="light"?"dark":"light"}`} type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

{/*navbar.proptypes se hm properties ka datatype set kr skte ha aur
   isrequired kise bhi properties ko mandatery kr deta ha aur
  agar properties ko define nahi kiya jay tu hm cansole me. error mil ta ha  */}

Navbar.propTypes={
  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string.isRequired
}

{/*navbar.defaultprops se hm kise bhi properties ki value ko fix kr skte ha
  aur agar hm properties ko define nahi krte tu jo default vale ha vo print ho jati ha */}
  
Navbar.defaultProps={
  title: 'set title here',
  aboutText: 'about text here'
}