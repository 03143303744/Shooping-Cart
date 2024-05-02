import React from 'react'
import { Link } from 'react-router-dom'
const Cart = ({cart , setCart}) => {
  return (
    <>
    <div className="container mt-3">
    <div className="row justify-content-center">
{
  cart.length == 0?(
<>
<div className='container text-center'>
  <h3>Your Cart is Empty</h3>
  <Link to={'/'} className='btn btn-warning'>Continue Shopping</Link>
</div>
</>
  ):

  cart.map((product)=>(
    <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
    <div className="product-details-box" style={{ maxWidth: '800px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
  <div className="d-sm-flex flex-wrap align-items-center">
    {/* Product Image */}
    <div style={{ flex: '1', marginRight: '20px', marginBottom: '20px' }}>
      <img
        src={product.imgSrc}
        alt={product.title}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
    {/* Product Details */}
    <div style={{ flex: '2' }}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
     <button className='btn btn-dark mx-2'>Add To cart</button>
     <button className='btn btn-danger'>Buy Now</button>
    </div>
  </div>
</div>
</div>
  ))
}
    </div>
    </div>
{
  cart.length != 0 &&(
    
    <div className='container  mt-3 py-4 text-center'>
      <button className='btn btn-dark mx-2'>Checkout</button>
      <button 
      onClick={()=>setCart("")}
      className='btn btn-warning'>Clear Cart</button>
    </div>
  )
}
    </>
  )
}

export default Cart