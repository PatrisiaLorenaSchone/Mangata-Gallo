import React from "react";
import Asset1 from "../assets/Asset1@3x.png"
import { Link } from "react-router-dom";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BiSolidInfoCircle } from "react-icons/bi";
import { ChartContext } from "../App";
import Chart from "./Chart";
import logo from "../assets/Asset4@3x.png"

const Header =()=>{
    const {chart} = React.useContext(ChartContext)
    const [showChart, setShowChart] = React.useState(false)

    return(
        <header>
            <Link to="/">
            <img src={Asset1} alt="Mangata and Gallo logo" height="111" width="200"></img>
            </Link>
            <div className="header-icons">
            <BiSolidShoppingBags onClick={()=>setShowChart(!showChart)} fill="#909090" aria-label="Shopping chart"/>
            <div className="cart-count">{chart ? chart.length : 0}</div>
            </div>
            {showChart && <Chart setShowChart={setShowChart}/>}
        </header>
    )
}
export default Header