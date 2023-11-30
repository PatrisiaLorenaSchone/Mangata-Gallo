import React from "react";
import Asset1 from "../assets/Asset1@3x.png"
import { Link } from "react-router-dom";
import ChartBtn from "./ChartBtn";

const Header =()=>{
    return(
        <header>
            <Link to="/">
            <img src={Asset1} alt="Mangata and Gallo logo" height="111" width="200"></img>
            </Link>
            <ChartBtn class="header-icons"/>
        </header>
    )
}
export default Header