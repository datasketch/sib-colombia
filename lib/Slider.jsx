import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SamplePrevArrow (props) {
  const { className, style, onClick, imagePath } = props
  return (
    <button className={className}
      style={{ ...style, left: '-50px' }}
      onClick={onClick}>
      <img src={imagePath} />
    </button>
  )
}

function SampleNextArrow (props) {
  const { className, style, onClick, imagePath } = props
  return (
    <button className={className}
      style={{ ...style, right: '-50px' }}
      onClick={onClick}>
      <img src={imagePath} />
    </button>
  )
}

export default function SimpleSlider ({ children, dots = 'false', slidesToShow = 1, slidesToScroll = 1, buttonColor = 'dark' }) {
  const buttonColorImagePath = {
    dark: {
      prevButton: '/images/swiper-arrow-left.svg',
      nextButton: '/images/swiper-arrow-right.svg'
    },
    light: {
      prevButton: '/images/swiper-arrow-left-light.svg',
      nextButton: '/images/swiper-arrow-right-light.svg'
    }
  }
  const settings = {
    infinite: false,
    speed: 500,
    nextArrow: <SampleNextArrow imagePath={buttonColorImagePath[buttonColor].nextButton} />,
    prevArrow: <SamplePrevArrow imagePath={buttonColorImagePath[buttonColor].prevButton} />
  }
  return (
    <Slider dots={dots} slidesToShow={slidesToShow} slidesToScroll={slidesToScroll} {...settings}>
      {children}
    </Slider>
  )
}

export { SimpleSlider }
