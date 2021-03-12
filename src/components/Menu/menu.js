import { Link } from 'gatsby'
import React from 'react'
import "./menu.css";

const Menu = () => (
  <div class="wrapper">
    <ul class="menu__list">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
    </ul>
  </div>
)

export default Menu;