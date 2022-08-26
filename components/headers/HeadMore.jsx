
import PropTypes from 'prop-types'
const Head = ({ title, content = false }) => {
  return (
    <div className="bg-banner-orange bg-cover bg-center h-80 pt-32 lg:pt-20 flex items-center text-white">
      <div className="w-3/5 lg:w-2/5 mx-auto text-center space-y-2">
        <span className="text-3xl lg:text-5xl font-black font-inter">{title}</span>
        {content && <>
        <div className="border-b-[1px] border-b-white lg:w-2/3 mx-auto"/>
        <p className="lg:w-2/3 mx-auto tet-sm lg:text-lg font-lato">Irure excepteur officia sint fugiat minim est minim. Commodo incididunt do dolor officia. </p>
        </>}
    </div>
    </div >
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string,
  content: PropTypes.bool
}

export default Head
