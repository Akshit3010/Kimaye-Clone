import React from 'react'
import { Carousel } from "react-bootstrap";
import slider1 from "../components/slider_img/slider1.jpg"
import slider2 from "../components/slider_img/slider2.jpg"
import slider3 from "../components/slider_img/slider3.jpg"
import slider4 from "../components/slider_img/slider4.jpg"
import slider5 from "../components/slider_img/slider5.jpg"
import slider6 from "../components/slider_img/slider6.jpg"
import slider7 from "../components/slider_img/slider7.jpg"



export default function ControlledCarousel() {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      style={{height:700}}
      src={slider1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{height:700}}
      alt="Second slide"
      src={slider2}
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{height:700}}
      src={slider3}

      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{height:700}}
      src={slider4}

      alt="fouth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{height:700}}
      src={slider5}

      alt="fifth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{height:700}}
      src={slider6}

      alt="sixth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block"
      style={{height:700}}
      src={slider7}

      alt="seventh slide"
    />
  </Carousel.Item>




</Carousel>
    </div>
  )
}
