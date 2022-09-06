
import PropTypes from 'prop-types'
const HeadMore = ({ title, description, content = false }) => {
  return (
    <div className="bg-banner-mas bg-cover bg-center h-72 pt-32 lg:pt-20 flex items-center text-white">
      <div className="w-3/5 lg:w-2/5 mx-auto text-center space-y-2">
        <span className="text-3xl lg:text-5xl font-black font-inter">{title}</span>
        {content && <>
          <div className="border-b-[1px] border-b-white w-2/3 mx-auto" />
          <p className="font-lato">
            {description}
          </p>
        </>}
      </div>
    </div >
  )
}

HeadMore.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.bool,
  background: PropTypes.string
}

export default HeadMore
