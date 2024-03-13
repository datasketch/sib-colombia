import { useEffect } from 'react'
import * as d3 from 'd3'

const WaffleChart = ({ data }) => {
  const speciesRegionTotalCol = data.waffle ? data.waffle[0].especies_region_total : 100
  const speciesRegionTotalDep = data.waffle ? data.waffle[1].especies_region_total : 5
  const percentage = Math.round((speciesRegionTotalDep / speciesRegionTotalCol) * 100)

  useEffect(() => {
    const waffle = d3.select('#waffle')
    const rows = 10
    const cols = 10
    const totalBlocks = rows * cols

    waffle.selectAll('.block').remove()

    const blocks = waffle
      .selectAll('.block')
      .data(d3.range(totalBlocks))
      .enter()
      .append('div')
      .attr('class', 'block')
      .style('background-color', d => (d < percentage ? '#6699FF' : '#FFCC99'))
      .style('width', '20px')
      .style('height', '20px')
      .style('margin', '2px')
      .style('border-radius', '9999px')

    return () => blocks.remove()
  }, [])

  return (
    <div className='mx-auto mt-24 w-11/12 flex justify-center items-center'>
      <figure id='waffle' className='flex flex-wrap-reverse w-[240px]'>
      </figure>
    </div>
  )
}

export default WaffleChart
