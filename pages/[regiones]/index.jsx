import Head from 'next/head'
import { useContext, useEffect } from 'react'

import HeadRegion from '../../components/headers/HeadRegion'

import { getDepartmentData, getDepartmentsPath } from '../../lib/regions'
import { AppContext } from '../_app'
import PageComponent from '../../components/PageComponent'

export default function index ({ data, slug }) {
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
        especiesEstimadas={generalInfo.especies_region_estimadas}
        especiesObservadas={generalInfo.especies_region_total}
        marine={generalInfo.marino}
        referencia={generalInfo.referencia}
        photoLabel={generalInfo.credito_foto}
      />
      <PageComponent data={data} slug={slug} isScale />
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

  return {
    props: {
      data: JSON.parse(content),
      slug: context.params.regiones
    }
  }
}
