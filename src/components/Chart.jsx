import React, { useState } from 'react'
import { ChartContext } from '../App'
import { MdShoppingCart } from "react-icons/md";
import SecondaryTitle from './SecondaryTitle';
import { Link } from 'react-router-dom';

function Chart({setShowChart}) {
  const {chart, setChart} = React.useContext(ChartContext)

  function getOccurence(array, value){
    let count = 0;
    array.forEach((v)=>(
      v == value && count++
    ))
    return count
  }

  let uniqueProducts = chart.reduce((acc, curr)=>{
    return acc.includes(curr) ? acc : [...acc, curr]
  }, [])

    let products = uniqueProducts.map((prod)=>{
    let quantity = getOccurence(chart, prod)
    return(
      <div className='product-chart-container' key={prod.id}>
          <img height={111} width={80} src={prod.image} alt="" />
          <div className='expand col'>
            <div className='row'>
              <h5>{prod.title}</h5>
              <button className='remove-chart-btn' onClick={()=>removeItem(prod)}>remove</button>
            </div>
            <div className='row'>
              <small>x</small><input type="number" value={quantity} readOnly name="quantity"/>
              <small>$ {prod.price}</small>
            </div>
          </div>
      </div>
  )
  })

  function removeItem(prod){
    setChart((prevChart)=>{
      return prevChart.filter((products)=> products !== prod)
    })
  }

  let total = chart.reduce((acc, curr)=>{
    return acc += parseFloat(curr.price)
  }, 0)

  function handleClick(){
    setShowChart(false)
  }


  return (
    <div className='chart-section' onMouseLeave={()=>{setShowChart(false)}}>
        <button className='close-btn' onClick={(showChart)=>setShowChart(!showChart)}>X</button>
    <div className='chart-container'>
    { chart.length === 0 ? 
    <div className='col'>
      <h3>It looks like your Chart is empty</h3>
      <MdShoppingCart fill="#ffc0cb99" />
      <Link to="/products" onClick={handleClick} className='secondary-btn'>shop</Link>
    </div> :
    <div>
      <h3>Your products</h3>
        {products}
        <div className='total row'>
          <h5>Total: </h5>
          <p className='expand'></p>
          <h5>${total.toFixed(2)}</h5>
          <small></small>
        </div>
    </div>
        }
    </div>
    </div>
  )
}

export default Chart
