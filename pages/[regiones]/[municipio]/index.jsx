
import Head from 'next/head'
import { useContext, useEffect } from 'react'

import HeadRegion from '../../../components/headers/HeadRegion'
import { AppContext } from '../../_app'
import { getMunicipalityData, getMunicipalitesPath } from '../../../lib/regions'
import PageComponent from '../../../components/PageComponent'

function municipio ({ data, slug, municipality }) {
  const { general_info: generalInfo } = data
  const { setFooterBgColor } = useContext(AppContext)

  useEffect(() => {
    setFooterBgColor('bg-footer-green')
  }, [])
  return (
    <>
      <Head>
        <title>SiB Colombia | Biodiversidad en cifras</title>
      </Head>
      <HeadRegion
        slug={slug}
        title={generalInfo.label}
        description={generalInfo.main_text}
        imageMap={`images/mapas-svg-dep/mapa-${slug}.svg`}
        especiesEstimadas={generalInfo.especies_region_estimadas}
        especiesObservadas={generalInfo.especies_region_total}
        marine={generalInfo.marino}
        municipality
      />
      <PageComponent data={data} slug={slug} municipality={municipality}/>
    </>
  )
}

export async function getStaticPaths () {
  const paths = await getMunicipalitesPath()
  return {
    fallback: false,
    paths
  }
}

export async function getStaticProps (context) {
  const { regiones, municipio } = context.params
  const content = await getMunicipalityData(regiones, municipio)
  // console.log(content)
  return {
    props: {
      data: JSON.parse(content),
      slug: regiones,
      municipality: municipio
    }
  }
}

export default municipio
