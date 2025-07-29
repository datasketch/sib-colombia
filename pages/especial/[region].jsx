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
        slug={slug}
        title={generalInfo.label}
        description={generalInfo.main_text}
        imageMap={`data/${slug}/${slug}.svg`}
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
  // Define the special regions (excluding region-amazonia which has its own static file)
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

  // For sponsors, use Nariño for these regions
  const parentRegion = 'narino'
  const regionData = await getMunicipalityData(parentRegion, parentRegion)

  return {
    props: {
      data: JSON.parse(content),
      slug: region,
      sponsors: JSON.parse(regionData).patrocinador
    }
  }
}

export default EspecialRegion
