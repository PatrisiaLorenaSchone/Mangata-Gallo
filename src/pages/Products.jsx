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
    const [quantity, setQuantity] = React.useState(0)

    let {setChart} = React.useContext(ChartContext)
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
               <input type="number" />
               <small>price....99$</small>
             </div>
             <button onClick={()=>{setChart((prevChart)=>[...prevChart, product])}} className="secondary-btn">Add to chart</button>
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
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return(
        <div className="productsPage">
        <div className="sideBar">
            <li className={typeFilter === "cream" ? "selected-type" : ""} onClick={()=>handleFilterChange("type", "cream")}><PiFlowerLotus /> Creams</li>
            <li className={typeFilter === "oil" ? "selected-type" : ""} onClick={()=>handleFilterChange("type", "oil")}><PiFlowerLotus /> Oils</li>
            <li className={typeFilter === "lotion" ? "selected-type" : ""} onClick={()=>handleFilterChange("type", "lotion")}><PiFlowerLotus /> Lotions</li>
            {typeFilter ? (
            <button onClick={() => handleFilterChange("type", null)}>Clear filters</button>
            ) : null}
        </div>
        <div className='productsSection'>
            {productsElements}
        </div>
        </div>
    )
}
export default Products