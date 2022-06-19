import React from 'react'
import PropTypes from 'prop-types'
import { CarouselItem } from 'react-bootstrap'

function Carousel(props) {
  return (
    <CarouselItem>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="https://cdn.tgdd.vn/bachhoaxanh/banners/2505/xa-kho-gia-soc-san-pham-p-g-03062022213650.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src="https://cdn.tgdd.vn/bachhoaxanh/banners/2505/bhx-thich-qua-1806202205834.png"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.tgdd.vn/bachhoaxanh/banners/2505/thuc-pham-dong-lanh-08062022133258.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </CarouselItem>
  )
}

Carousel.propTypes = {}

export default Carousel
