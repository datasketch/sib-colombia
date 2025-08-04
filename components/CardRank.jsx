import { DIC_REF, ordinalSuffixOf } from '../lib/functions'

import TooltipText from './TooltipText'

const CardRank = ({ info, refs }) => {
  return (<>
    <div className='flex items-center'>
      <div className='text-6xl font-bold'>
        {info.position}
      </div>
      <div>
        <div>{ordinalSuffixOf(info.position)}</div>
        <p className='capitalize text-2xl'>país</p>
      </div>
    </div>
    <div>

      <div className='inline-block gap-x-0.5 max-w-xs'>
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

            const tooltip = DIC_REF.find(({ ref_id: refId }) => refId === number)
            const md = refs.find(({ ref_id: refId }) => +refId === +number)

            if (tooltip && md) {
              const reactMD = `${md.label} \n\n ${md.zotero}`
              parts.push(
                <TooltipText key={tooltip.ref_id} label={word} md={reactMD} id={tooltip.ref_id} />
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
