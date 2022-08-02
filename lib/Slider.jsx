import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SamplePrevArrow (props) {
  const { className, style, onClick, imagePath, sizeImage } = props
  return (
    <button className={className}
      style={{ ...style, left: '-50px' }}
      onClick={onClick}>
      <img className={sizeImage === 'small' && 'w-[13.5px] h-[23.62px]'} src={imagePath} />
    </button>
  )
}

function SampleNextArrow (props) {
  const { className, style, onClick, imagePath, sizeImage } = props
  return (
    <button className={className}
      style={{ ...style, right: '-50px' }}
      onClick={onClick}>
      <img className={sizeImage === 'small' && 'w-[13.5px] h-[23.62px]'} src={imagePath} />
    </button>
  )
}

export default function SimpleSlider ({ children, dots = 'false', slidesToShow = 1, slidesToScroll = 1, buttonColor = 'dark', sizeImage = 'normal', responsive = false }) {
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
    nextArrow: <SampleNextArrow imagePath={buttonColorImagePath[buttonColor].nextButton} sizeImage={sizeImage} />,
    prevArrow: <SamplePrevArrow imagePath={buttonColorImagePath[buttonColor].prevButton} sizeImage={sizeImage} />
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
