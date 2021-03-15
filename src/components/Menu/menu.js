import { Link } from 'gatsby'
import React from 'react'
import "./menu.css";

const Menu = () => (
  <div className="wrapper">
    <ul className="menu__list">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/blog">Blog</Link></li>
    </ul>
  </div>
)

export default Menu;