import { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SamplePrevArrow (props) {
  const { className, style, onClick } = props
  return (
    <button className={className}
      style={{ ...style, left: '-50px' }}
      onClick={onClick}>
      <img src="/images/swiper-arrow-left.svg" alt="swiper arrow left" />
    </button>
  )
}

function SampleNextArrow (props) {
  const { className, style, onClick } = props
  return (
    <button className={className}
      style={{ ...style, right: '-50px' }}
      onClick={onClick}>
      <img src="/images/swiper-arrow-right.svg" alt="swiper arrow right" />
    </button>
  )
}

export default class SimpleSlider extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
    return (
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    )
  }
}

export { SimpleSlider }
