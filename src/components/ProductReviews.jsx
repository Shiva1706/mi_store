import React from 'react'
import ProductReviewsCard from './ProductReviewsCard'
import '../styles/ProductReviews.css'

const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {
            productReviews.map((item, index)=>(
                <ProductReviewsCard price={item.price} image={item.image} name={item.name} review={item.review} index={index} key={item.image} />
            ))
        }
    </div>
  )
}

export default ProductReviews