import { NavLink, Link } from "react-router-dom"
import React from "react"
import logo from "../assets/Asset4@3x.png"
import ChartBtn from "./ChartBtn"
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";


const Nav =()=>{
  const [navChange, setNavChange] = React.useState(false)
  const [showNav, setShowNav] = React.useState(false)
  function changeNav(){
    if(window.scrollY >= 220){
      setNavChange(true)
    } else{
      setNavChange(false)
    }
  };
  window.addEventListener("scroll", changeNav)
    return(
      <>
      <nav className={navChange ? "scrolledNav" : ""}>
        {!showNav ? <BiMenu fill="#252525" onClick={()=>setShowNav(!showNav)} aria-label="hamburger menu" className="hamburger-menu"/> : <IoMdClose fill="#252525" aria-label="close menu"  onClick={()=>setShowNav(!showNav)} className="hamburger-menu"/>}
        {navChange && <img className="nav-logo" height={25} src={logo}/>}
        <div className={showNav ? "sidenav" : "navbar"}>
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/">HOME</NavLink>
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/products">PRODUCTS</NavLink>
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/about">ABOUT</NavLink>
        </div>
        {navChange && <ChartBtn class="nav-icons"/>}
      </nav>
      </>
    )
}
export default Nav