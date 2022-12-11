import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carousels = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-99"
          src="https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344-2a5d8b2206e74c67d7b1b94c3576ace7cd32bb65.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-99"
          src="https://d3i6fh83elv35t.cloudfront.net/static/2018/11/RTS27MFD-1024x692.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-99"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/4B43/production/_126976291_magnuscarlsen.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousels