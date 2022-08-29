
const CardGlosario = ({ title, definition }) => {
  return (
    <div className='border-l-2 border-l-flame border-dotted space-y-3  px-3'>
      <span className='font-inter font-black text-xl'>{title} :</span>
      <p className="font-lato">{definition}</p>
    </div>
  )
}

export default CardGlosario
