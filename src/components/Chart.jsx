import React, { useState } from 'react'
import { ChartContext } from '../App'

function Chart({setShowChart}) {
  const {chart, setChart} = React.useContext(ChartContext)
  let products = chart.map((prod)=>{

    return(
        <div className='product-chart-container' key={prod.id}>
            <img height={111} src={prod.image} alt="" />
            <h5>{prod.title}</h5>
            <p>{prod.quantity}</p>
        </div>
    )
  })

  return (
    <div className='chart-section'>
        <button className='close-btn' onClick={(showChart)=>setShowChart(!showChart)}>X</button>
    { chart.length === 0 ? <h3>It looks like your Chart is empty</h3> :
    <div>
        <h3>Your products</h3>
        {products}
    </div>
    }
    </div>
  )
}

export default Chart
