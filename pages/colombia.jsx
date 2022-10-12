import { useContext, useEffect } from 'react'
import Head from 'next/head'

import HeadRegion from '../components/headers/HeadRegion'
import { AppContext } from './_app'
import col from '../static/data/colombia.json'
import PageComponent from '../components/PageComponent'

export default function colombia () {
  const { general_info: generalInfo } = col

  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)
  useEffect(() => {
    setBreadCrumb([{ label: generalInfo.label }])
    setFooterBgColor('bg-footer-green')
    return () => {

    }
  }, [])

  return (

    <>
      <Head>
        <title>SiB Colombia | Biodiversidad en cifras</title>
      </Head>
      <HeadRegion
        slug='colombia'
        title={generalInfo.label}
        description={generalInfo.main_text}
        especiesEstimadas={generalInfo.especies_region_estimadas}
        especiesObservadas={generalInfo.especies_region_total}
        marine={generalInfo.marino}
      />
      <PageComponent data={col} slug='colombia' deparment/>
    </>
  )
}
