import React from 'react'
import { Link, useParams } from "react-router-dom"
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { getProduct } from '../components/productsData';
import { ChartContext } from "../App";

function ProductDashboard() {
  const [product, setProduct] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const { id } = useParams()
  const [mainPhoto, setMainPhoto] = React.useState(null)
  const {setChart} = React.useContext(ChartContext)

  React.useEffect(()=>{
    async function loadProducts(){
      setLoading(true)
      try{
        const data = await getProduct(id)
        setProduct(data)
      } catch(err){
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [id])

if (loading) {
    return <h1>Loading...</h1>
}

if (error) {
    return <h1>There was an error: {error.message}</h1>
}

  return (
    <div className='dashboard-layout'>
      <Link to="/products" className='back-button'>
        <FaRegArrowAltCircleLeft /> Back to all products
      </Link>
      {product && (
            <div className='product-dashboard'>
              <div className='product-photos'>
                <div className='product-dashboard-small-photos-container'>
                  <img onClick={()=>setMainPhoto(product.secondary_image)} className='product-dashboard-small-photo' src={product.secondary_image} alt="" />
                  <img onClick={()=>setMainPhoto(product.closeup_image)} className='product-dashboard-small-photo' src={product.closeup_image} alt="" />
                  <img onClick={()=>setMainPhoto(product.image)} className='product-dashboard-small-photo' src={product.image} alt="" />
                </div>
                <img className='product-dashboard-main-photo' src={mainPhoto ? mainPhoto : product.image} alt="" />
              </div>
              <div className='product-details'>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <input type="number" />
              <h5>price 99.99$</h5>
              <button onClick={()=>{setChart((prevChart)=>[...prevChart, product])}} className='secondary-btn'>Add to chart</button>
              </div>
            </div>
      )}
    </div>
  )
}

export default ProductDashboard

//carousel or image display with a background image that changes on hoover and  a png of the product as a main photo 
//3 photos in total with small and one big
//title description price quantity