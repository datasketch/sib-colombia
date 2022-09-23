
const CardGlosario = ({ title, definition }) => {
  return (
    <div className='border-l-2 hover:bg-light-orange hover:bg-opacity-5 border-l-flame border-dotted space-y-3 px-3'>
      <h2 className='font-inter font-black text-xl'>{title}:</h2>
      <p className="font-lato">{definition}</p>
    </div>
  )
}

export default CardGlosario
