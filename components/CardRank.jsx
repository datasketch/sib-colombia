import TooltipText from './TooltipText'

const CardRank = ({ info, refs }) => {
  return (<>
    <div className='flex items-center'>
      <div className='text-4xl lg:text-5xl font-bold'>
        {info.position}
      </div>
      <div>
        <div className='text-sm lg:text-base'>{info.suffix}</div>
        <p className='capitalize text-lg lg:text-xl'>país</p>
      </div>
    </div>
    <div className='mt-0 pt-0'>
      <div className='inline-block gap-x-0.5 max-w-xs text-sm lg:text-base'>
        {(() => {
          const parts = []
          let lastIndex = 0
          const regexWithWord = /([a-zA-ZáéíóúÁÉÍÓÚñÑ]+)\s*\((\d+)\)/g
          let match

          while ((match = regexWithWord.exec(info.position_text)) !== null) {
            const [fullMatch, word, number] = match
            const beforeMatch = info.position_text.slice(lastIndex, match.index)

            if (beforeMatch) {
              parts.push(beforeMatch)
            }

            // Find the reference data directly from the refs prop
            const md = refs.find(({ ref_id: refId }) => +refId === +number)

            if (md) {
              const reactMD = `${md.label} \n\n ${md.zotero}`
              parts.push(
                <TooltipText key={number} label={word} md={reactMD} id={number} />
              )
            } else {
              parts.push(fullMatch)
            }

            lastIndex = match.index + fullMatch.length
          }

          const afterLastMatch = info.position_text.slice(lastIndex)
          if (afterLastMatch) {
            parts.push(afterLastMatch)
          }

          return parts
        })()}
      </div>
    </div>

  </>)
}

export default CardRank
