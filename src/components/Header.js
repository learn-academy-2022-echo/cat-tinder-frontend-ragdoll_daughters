
 //Imports
import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

//Component declaration
const Header= () => {

    //JSX Return
    return (

    <div> 
       <header>
       <Nav className="header-nav flex-space">
       <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catindex" className="nav-link">
            Meet the Cats
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catnew" className="nav-link">
            Add a New Cat
          </NavLink>
        </NavItem>
        <NavItem>
          <a
            target="blank"
            href="https://www.lionstigersandbears.org/visit-us"
            className="nav-link"
          >
            Visit a Wildcat!
          </a>
        </NavItem>
      </Nav>
      
       </header>
    </div>

    )
}
export default Header