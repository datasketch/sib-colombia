
import { DIC_REF, ordinalSuffixOf } from '../lib/functions'

import reactStringReplace from 'react-string-replace'
import TooltipText from './TooltipText'

const CardRank = ({ info, refs }) => {
  const regex = /\((\d+)\)/g
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

      <p className='inline-block gap-x-0.5 max-w-xs'>
      {reactStringReplace(info.position_text, regex, (match) => {
        const tooltip = DIC_REF.find(({ ref_id: refId }) => match === refId)
        const md = refs.find(({ ref_id: refId }) => match === refId)
        const reactMD = `${md.label} \n\n ${md.zotero}`
        return <TooltipText key={tooltip.ref_id} label={tooltip.label} md={reactMD} id={tooltip.ref_id} />
      })}
    </p>
    </div>

  </>)
}

export default CardRank
