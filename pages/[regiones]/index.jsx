import Head from 'next/head'
import { useContext, useEffect } from 'react'

import HeadRegion from '../../components/headers/HeadRegion'

import { getDepartmentData, getDepartmentsPath, getMapData } from '../../lib/regions'
import { AppContext } from '../_app'
import PageComponent from '../../components/PageComponent'

export default function index ({ data, slug, map }) {
  const { general_info: generalInfo } = data

  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)

  useEffect(() => {
    setFooterBgColor('bg-footer-green')
    setBreadCrumb([{ label: generalInfo.label, href: generalInfo.slug }])
    return () => {}
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
        imageSmallDpto={`images/mapas-svg-dep/${slug}.svg`}
        especiesEstimadas={generalInfo.especies_region_estimadas}
        especiesObservadas={generalInfo.especies_region_total}
        marine={generalInfo.marino}
        referencia={generalInfo.referencia}
        photoLabel={generalInfo.credito_foto}
        data={data}
        isScale
        map={map}
      />
      <PageComponent data={data} slug={slug} isScale map={map}/>
    </>
  )
}

export async function getStaticPaths () {
  const paths = await getDepartmentsPath()
  return {
    fallback: false,
    paths
  }
}

export async function getStaticProps (context) {
  const content = await getDepartmentData(context.params.regiones)
  const map = await getMapData(context.params.regiones)

  return {
    props: {
      data: JSON.parse(content),
      map: JSON.parse(map),
      slug: context.params.regiones
    }
  }
}
