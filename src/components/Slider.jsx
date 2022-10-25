import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({start}) => {
  return (
    <Carousel fade>
        {start.map((itm)=>(
            <Carousel.Item key={itm} >
            <img className='d-block w-100' src={itm} alt="first-slide" />
            </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default Slider