import React from 'react'
import '../styles/ProductReviewsCard.css'

const ProductReviewsCard = ({image, index, name, review, price}) => {
  return (
    <div className='ProductReviewsCard'>
        <img src={image} alt={`${index} reviews`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewsCard