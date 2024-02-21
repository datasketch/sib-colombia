import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import boyacaJson from '../public/data/santander/santander2.json'
import { useState } from "react";

const MapDepartment = () => {
  const { territorio } = boyacaJson
  const mapDataObj = territorio[0]
  const mapDataCoords = mapDataObj.map_data

  const geoJsonFormat = {
    type: 'FeatureCollection',
    features: mapDataCoords.reduce((prev, curr) => {
      return [
        ...prev,
        {
          type: 'Feature',
          geometry: curr.geometry,
          properties: {
            id: curr.id,
            name: curr.name,
            depto: curr.depto,
            label: curr.label,
            n_especies: curr.n_especies,
            n_registros: curr.n_registros
          }
        }
      ]
    }, [])
  }

  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  function handleZoomIn() {
    if (position.zoom >= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  return (
    <>
      <div className="border" style={{ width: '100%', height: '500px' }}>
        <ComposableMap
          width={800}
          height={600}
          projection="geoMercator"
          projectionConfig={{
            center: [-73.361944444444, -40.4541666666667],
            scale: 0
          }}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
          >
            <Geographies geography={geoJsonFormat}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  )
}

export default MapDepartment
