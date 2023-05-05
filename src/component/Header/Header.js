import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';


function Header({ hideCompoenet }) {


  return (
    <div>
      <div className="banner">
        <small>Figma Prototype testing just got a whole lot better! Read More<i className="fa fa-long-arrow-right icon" aria-hidden="true"></i></small>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand " href="/"><img alt='' className='logo' src={logo} /></a><span className='tag'>Become a tester</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className=" me-auto mb-2 mb-lg-0">
            </div>
            <div className="d-flex navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Overview</a></li>
                  <li><a className="dropdown-item" href="/">Card slotting</a></li>
                  <li><a className="dropdown-item" href="/">Prototype Testing</a></li>
                  <li><a className="dropdown-item" href="/">Design Surveys</a></li>
                  <li><a className="dropdown-item" href="/">Five Second tests</a></li>
                  <li><a className="dropdown-item" href="/">First click test</a></li>
                  <li><a className="dropdown-item" href="/">Panel</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to='/customers' className="nav-link navig-links" aria-current="page">Customers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/pricing' className="nav-link navig-links" aria-current="page">Pricing</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown1">
                  <li><a className="dropdown-item" href="/">Example</a></li>
                  <li><a className="dropdown-item" href="/">Testing Guides</a></li>
                  <li><a className="dropdown-item" href="/">Help center</a></li>
                  <li><a className="dropdown-item" href="/">Blog</a></li>
                </ul>
              </li>
            </div>
            <NavLink to='/signin' type='button' onClick={hideCompoenet} className="btn signin-btn  btn-outline-primary">Sign in</NavLink>
            <NavLink to='/signup' type='button' className="btn btn-primary m-3 ">Sign up</NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
