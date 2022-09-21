
const CardContenido = ({ date, title, description, href }) => {
  return (
    <div className='shadow-default space-y-3 max-w-sm p-5'>
      <div>
        <div className='font-lato italic text-sm'>{date}</div>
        <div className='font-lato font-bold '>{title}</div>
      </div>
      <div className='font-lato'>{description}</div>
      <div>
        <a target='_blank' className="flex items-center py-0.5 justify-center gap-2 border border-black rounded-full w-1/3" href={href} rel="noreferrer">
          <span className="text-sm">Conocer más</span>
          <img src="/images/arrow-black.svg" />
        </a>
      </div>

    </div>
  )
}

export default CardContenido
