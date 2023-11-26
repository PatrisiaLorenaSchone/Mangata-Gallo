import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage"
import Products from "./pages/Products";
import Layout from "./components/Layout";
import ProductDashboard from "./pages/ProductDashboard";
import Aboutpage from './pages/Aboutpage';

const ChartContext = React.createContext(null)

export default function App() {
  const [chart, setChart] = React.useState([])

  return (
    <BrowserRouter>
      <ChartContext.Provider value={{chart, setChart}}>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="products/:id" element={<ProductDashboard/>}/>
          <Route path="about" element={<Aboutpage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
      </ChartContext.Provider>
    </BrowserRouter>
  )
}

export { ChartContext }
