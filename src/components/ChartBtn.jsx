import React from 'react'
import { BiSolidShoppingBags } from "react-icons/bi";
import { ChartContext } from "../App";
import Chart from "./Chart";

function ChartBtn(props) {
  const {chart} = React.useContext(ChartContext)
  const [showChart, setShowChart] = React.useState(false)
  return (
    <div className={props.class}>
        <BiSolidShoppingBags onClick={()=>setShowChart(!showChart)} fill="#232323" aria-label="Shopping chart"/>
        <div className="cart-count">{chart ? chart.length : 0}</div>
        {showChart && <Chart setShowChart={setShowChart}/>}
    </div>
  )
}

export default ChartBtn
