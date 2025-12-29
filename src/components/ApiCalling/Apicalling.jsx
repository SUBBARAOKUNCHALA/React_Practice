import React, { useEffect } from "react";
import './Apicalling.css'
import { useState } from "react";
export const Products = () => {
    const [products, setProducts] = useState([])


    async function GetProducts() {
        let res = await fetch("https://dummyjson.com/products")
        let Data = await res.json()
        setProducts(Data.products)
        console.log(Data.products)
    }
    useEffect(() => {
        GetProducts()
    }, [])

    if (products.length === 0) {
        return (<><h1>Products Are Loading ....</h1></>)
    }
    return (
        <>
            <div className="products-container">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div className="product-price">₹ {product.price}</div>
                        <h2>{product.title}</h2>
                    </div>
                ))}
            </div>
        </>
    )


}