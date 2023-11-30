import { NavLink } from "react-router-dom"
import React from "react"
import logo from "../assets/Asset2@3x.png"
import ChartBtn from "./ChartBtn"


const Nav =()=>{
  const [navChange, setNavChange] = React.useState(false)
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
        {navChange && <img height={25} src={logo}/>}
        <div className="navbar">
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