import Head from 'next/head'
import { useContext, useEffect } from 'react'

import HeadRegion from '../../components/headers/HeadRegion'
import { AppContext } from '../_app'
import { getStandaloneRegionData, getMunicipalityData } from '../../lib/regions'
import PageComponent from '../../components/PageComponent'

function EspecialRegion ({ data, slug, sponsors }) {
  const { general_info: generalInfo } = data
  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)

  useEffect(() => {
    setBreadCrumb([{ label: generalInfo.parent_label, href: '/' + generalInfo.parent }, { label: generalInfo.label }])
    setFooterBgColor('bg-footer-green')
    return () => {

    }
  }, [data])

  return (
    <>
      <Head>
        <title>SiB Colombia | Biodiversidad en cifras</title>
      </Head>
      <HeadRegion
        slug="narino"
        title={generalInfo.label}
        description={generalInfo.main_text}
        imageMap={'images/mapas-svg-dep/mapa-narino.svg'}
        imageSmallDpto={'images/mapas-svg-dep/mapa-narino.svg'}
        especiesEstimadas={generalInfo.especies_region_estimadas}
        especiesObservadas={generalInfo.especies_region_total}
        marine={generalInfo.marino}
        municipality
      />
      <PageComponent data={{ ...data, patrocinador: sponsors }} slug={slug} municipality={slug} municipalityflag />
    </>
  )
}

export async function getStaticPaths () {
  // Define the special regions
  const specialRegions = ['reserva-forestal-la-planada', 'resguardo-indigena-pialapi-pueblo-viejo']

  const paths = specialRegions.map(region => ({
    params: { region }
  }))

  return {
    fallback: false,
    paths
  }
}

export async function getStaticProps (context) {
  const { region } = context.params

  // Load data from the standalone folder
  const content = await getStandaloneRegionData(region)

  // For sponsors, we'll use the parent region data (Nariño)
  const regionData = await getMunicipalityData('narino', 'narino')

  return {
    props: {
      data: JSON.parse(content),
      slug: region,
      sponsors: JSON.parse(regionData).patrocinador
    }
  }
}

export default EspecialRegion
