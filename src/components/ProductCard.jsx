import React from 'react'

export const ProductCard = ({title, description, img, price, addToCart}) => {
  return (
    <div className='card mb-4 p-2'>
        <img className='card-img-top' src={img} alt="Card image cap"/>
     <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text text-bold'>{price}$</p>
        <p className='card-text text-truncate'>{description}</p>
      <button onClick={()=> addToCart(title)} className='btn btn-primary'>
         Add to cart
      </button>
     </div>      
    </div>
  )
}
