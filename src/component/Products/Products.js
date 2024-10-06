import React, { useEffect, useState } from 'react'
import productsStyle from './Products.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Products() {
  const [product, setProduct] = useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>setProduct(res.data))
    .catch((er)=>console.log(er))
  },[])
  return (
    <div className={productsStyle.parent}>
        <div className={productsStyle.productsContainer}>
          {
            product?.map((prod)=>
              <div key={prod.id} className={productsStyle.card}>
                <img src={prod.image}/>
                <h5>Title: {prod.title}</h5>
                <p>{prod.description}</p>
                <p>{prod.price}$</p>
                <Link>Show more</Link>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Products