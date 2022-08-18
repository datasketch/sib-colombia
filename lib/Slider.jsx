import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SamplePrevArrow (props) {
  const { className, style, onClick, imagePath/* , sizeImage */ } = props
  return (
    <button className={className}
      style={{ ...style, left: '-50px', width: '32px', height: '30px' }}
      onClick={onClick}>
      <img src={imagePath} />
    </button>
  )
}

function SampleNextArrow (props) {
  const { className, style, onClick, imagePath /* sizeImage */ } = props
  return (
    <button className={className}
      style={{ ...style, right: '-50px', width: '32px', height: '30px' }}
      onClick={onClick}>
      <img src={imagePath} />
    </button>
  )
}

export default function SimpleSlider ({ children, dots = 'false', slidesToShow = 1, slidesToScroll = 1, buttonColor = 'dark', sizeImage = 'normal', responsive = false }) {
  // const buttonColorImagePath = {
  //   dark: {
  //     prevButton: '/images/arrow-left-carousel.svg',
  //     nextButton: '/images/arrow-right-carousel.svg'
  //   },
  //   light: {
  //     prevButton: '/images/swiper-arrow-left-light.svg',
  //     nextButton: '/images/swiper-arrow-right-light.svg'
  //   }
  // }
  const buttonImage = {
    prevButton: '/images/arrow-left-carousel.svg',
    nextButton: '/images/arrow-right-carousel.svg'
  }

  const settings = {
    infinite: false,
    speed: 500,
    nextArrow: <SampleNextArrow imagePath={buttonImage.nextButton} /* sizeImage={sizeImage}  *//>,
    prevArrow: <SamplePrevArrow imagePath={buttonImage.prevButton} /* sizeImage={sizeImage}  *//>
  }

  return (
    <Slider dots={dots} slidesToShow={slidesToShow} slidesToScroll={slidesToScroll} responsive={responsive && [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    } {...settings}>
      {children}
    </Slider >
  )
}

export { SimpleSlider }
