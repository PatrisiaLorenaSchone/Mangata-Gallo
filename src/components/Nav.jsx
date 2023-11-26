import { NavLink } from "react-router-dom"
import logo from "../assets/Asset2@3x.png"


const Nav =()=>{
    return(
      <>
      <nav>
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/">HOME</NavLink>
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/products">PRODUCTS</NavLink>
        <NavLink className={({isActive})=> isActive ? "active" : null} to="/about">ABOUT</NavLink>
      </nav>
      </>
    )
}
export default Nav