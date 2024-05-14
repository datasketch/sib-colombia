import DataMapColombia from '../static/data-maps/colombia.json'
import * as d3Geo from 'd3-geo'
/* import { useState, useMemo } from 'react' */
/* import { MapContainer, TileLayer } from 'react-leaflet' */
/* import Tooltip from 'react-tooltip' */

import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'

const DemoMapSpecies = () => {
  const data = DataMapColombia

  const centroid = d3Geo.geoCentroid(data)
  const center = centroid.map((coord, index) => {
    if (index === 0) return coord - 180
    return coord * -1
  }).reverse()

  return (
    <MapContainer center={center} zoom={5}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    </MapContainer>
  )
}

export default DemoMapSpecies
