import Head from 'next/head'
import { useContext, useEffect } from 'react'

import HeadRegion from '../../../components/headers/HeadRegion'
import { AppContext } from '../../_app'
import { getMunicipalityData, getMunicipalitesPath, getDepartmentData } from '../../../lib/regions'
import PageComponent from '../../../components/PageComponent'

function municipio ({ data, slug, municipality, sponsors }) {
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
        imageMap={`images/mapas-svg-dep/mapa-${slug}.svg`}
        especiesEstimadas={generalInfo.especies_region_estimadas}
        especiesObservadas={generalInfo.especies_region_total}
        marine={generalInfo.marino}
        municipality
      />
      <PageComponent data={{ ...data, patrocinador: sponsors }} slug={slug} municipality={municipality} municipalityflag />
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
  const region = await getDepartmentData(regiones)

  return {
    props: {
      data: JSON.parse(content),
      slug: regiones,
      municipality: municipio,
      sponsors: JSON.parse(region).patrocinador
    }
  }
}

export default municipio
