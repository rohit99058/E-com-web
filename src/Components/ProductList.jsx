import React, { useContext, useEffect, useState } from 'react'
import './ProductList.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../ContextApi/CartContext';
import { UserContext } from '../ContextApi/UserContext';

 function ProductList() {

let [products, setProducts] = useState([]);
let [url, setUrl] = useState('https://dummyjson.com/products')

useEffect(()=>{
     fetch(url)
.then((response) =>{
    response.json().then((result)=>{
    console.log(result)
    setProducts(result.products)
    })
})
}, [url])


let {cart, setCart} = useContext(CartContext)
let {name} = useContext(UserContext)

function AddCart(product){
let newCart = [...cart, product]
if(name == null){
  alert('please Login First!')
}else{
setCart(newCart);
}
}

console.log(cart)


  return (
    
  <div id="product-list">

        <h1>E-Commerce Website</h1>

    <button onClick={()=>setUrl("https://dummyjson.com/products")}>All</button>
    <button onClick={()=>setUrl("https://dummyjson.com/products/category/beauty")}>Beauty</button>
    <button onClick={()=>setUrl("https://dummyjson.com/products/category/furniture")}>Furniture</button>
    <button onClick={()=>setUrl("https://dummyjson.com/products/category/laptops")}>Laptops</button>
        <button onClick={()=>setUrl("https://dummyjson.com/products/category/groceries")}>Groceries</button><br />


  {products.map((product) => (
    <div key={product.id} className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">Description : {product.description}</p>
      <h4 className="product-price">Price : ${product.price}</h4>
<Link to={`/details/${product.id}`}>Read More...</Link>

<button onClick={()=>AddCart(product)}>Add to cart</button>
    </div>
  ))}
</div>

  )
}

export default ProductList;