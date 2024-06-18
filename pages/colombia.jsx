import { useContext, useEffect } from 'react'
import Head from 'next/head'

import HeadRegion from '../components/headers/HeadRegion'
import { AppContext } from './_app'
import col from '../static/data/colombia.json'
import DataMapColombia from '../static/data-maps/colombia.json'
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

  const daysElapsed = generalInfo.fecha_corte
  const dateReferenceDate = new Date('1970-01-01')
  const date = new Date(dateReferenceDate.getTime() + daysElapsed * 24 * 60 * 60 * 1000)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const dateCurrent = date.toLocaleDateString('es-co', options)

  return (

    <div>
      <Head>
        <title>SiB Colombia | Biodiversidad en cifras</title>
      </Head>
      <HeadRegion
        slug='colombia'
        title={generalInfo.label}
        description={'A ' + dateCurrent + generalInfo.main_text}
        especiesEstimadas={generalInfo.especies_region_estimadas}
        especiesObservadas={generalInfo.especies_region_total}
        marine={generalInfo.marino}
        imageMap='images/colombia.svg'
        referencia={generalInfo.referencia}
        photoLabel={generalInfo.credito_foto}
      />
      <PageComponent data={col} slug='colombia' deparment map={DataMapColombia}/>
    </div>
  )
}
