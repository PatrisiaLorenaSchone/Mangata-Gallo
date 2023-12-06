import React from "react"
import {getProducts} from "../components/productsData"
import { Link, useSearchParams } from "react-router-dom"
import { PiFlowerLotus } from "react-icons/pi";
import { ChartContext } from "../App";


const Products = ()=>{
    const [searchParams, setSearchParams] = useSearchParams()
    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [price, setPrice] = React.useState(false)
    const [added, setAdded] = React.useState(false)
    let {chart, setChart} = React.useContext(ChartContext)
    const typeFilter = searchParams.get("type")

    React.useEffect(()=>{
        async function loadProducts() {
            setLoading(true)
            try {
                const data = await getProducts()
                setProducts(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadProducts()
    }, [])


    const displayedProducts = typeFilter
        ? products.filter(product => product.type === typeFilter)
        : products

    const productsElements = displayedProducts.map(product =>{

        function handleAdd(){
            setAdded(true)
            setChart((prevChart)=>[...prevChart, product])
        }

        return(
        <div className="productCard" key={product.id} >
        <Link 
          to={product.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter
          }}>
             <img src={product.image} height={350}/>
        </Link>
             <div className="productCardText">
               <h3>{product.title}</h3>
               <div className="row">
               <h5>$ {product.price}</h5>
               </div>
             </div>
             <button onClick={handleAdd} className="secondary-btn">Add to chart</button>
        </div>
        )
    })

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if (loading) {
        return(
        <div className="loading-page">
          <img height="30" src="../src/assets/Asset2@3x.png"/>
          <img src="../src/assets/giphy.gif"/>
        </div>
        )
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    function sortBySmallprice(){
        products.sort((a, b)=> a.price - b.price)
        setPrice(!price)
    }
    function sortByHighprice(){
        products.sort((a, b)=> b.price - a.price)
        setPrice(!price)
    }

    return(
        <div className="productsPage">
        <div className="sideBar">
          <div className="filters-container">
            <p>Filter by type:</p>
            <li className={typeFilter === "cream" ? "selected-type" : ""} onClick={()=>handleFilterChange("type", "cream")}><PiFlowerLotus /> Creams</li>
            <li className={typeFilter === "oil" ? "selected-type" : ""} onClick={()=>handleFilterChange("type", "oil")}><PiFlowerLotus /> Oils</li>
            <li className={typeFilter === "lotion" ? "selected-type" : ""} onClick={()=>handleFilterChange("type", "lotion")}><PiFlowerLotus /> Lotions</li>
            {typeFilter ? (
            <button onClick={() => handleFilterChange("type", null)}>Clear filters</button>
            ) : null}
            <p>Filter by price:</p>
            <li>
            <input onChange={sortBySmallprice} name="price" id="low-price" type="radio"/><label htmlFor="low-price">Low to High</label>
            </li>
            <li>
            <input onChange={sortByHighprice} name="price" id="high-price" type="radio"/><label htmlFor="high-price">High to Low</label>
            </li>
          </div>
        </div>
        <div className='productsSection'>
        {/* <p className="added-message">Added to Chat</p> */}
            {productsElements}
        </div>
        </div>
    )
}
export default Products