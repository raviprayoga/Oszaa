import React from 'react';
import {Carousel} from 'react-bootstrap';

function ImageSlider() {
  
    return (
        <Carousel className="slider">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/pria2.png"
            alt="Photo by Mnz on Unsplash"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/wanita1.png"
            alt="Photo by Lauren Fleischmann on Unsplash"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 center"
            src="./images/unisex1.jpg"
            alt="Photo by Lauren Fleischmann on Unsplash"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ImageSlider;