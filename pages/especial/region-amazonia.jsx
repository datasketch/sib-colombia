import Head from 'next/head'
import { useContext, useEffect } from 'react'

import HeadRegion from '../../components/headers/HeadRegion'
import { AppContext } from '../_app'
import { getStandaloneRegionData } from '../../lib/regions'
import PageComponent from '../../components/PageComponent'
import SliderBanner from '../../components/SliderBanner'
import Gallery from '../../components/Gallery'

function EspecialRegion ({ data, slug, sponsors }) {
  const { general_info: generalInfo, slides, gallery } = data
  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)

  useEffect(() => {
    setBreadCrumb([{ label: generalInfo.parent_label, href: '/' + generalInfo.parent }, { label: generalInfo.label }])
    setFooterBgColor('bg-footer-green')
    return () => {

    }
  }, [data])

  // Create a custom data object for region-amazonia without slides to avoid duplicate sliders
  const customData = slug === 'region-amazonia'
    ? { ...data, slides: [], gallery: [] } // Remove slides and gallery from PageComponent for region-amazonia
    : data

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

      {/* Gallery Component for region-amazonia */}
      {slug === 'region-amazonia' && gallery && gallery.length > 0 && <Gallery gallery={gallery} />}

      {/* SliderBanner Component for region-amazonia */}
      {slug === 'region-amazonia' && slides && (
        <SliderBanner
          slides={slides}
          region={generalInfo.label}
          municipalityflag={true}
          parentlabel="Colombia"
        />
      )}

      {/* PageComponent for all regions */}
      <PageComponent data={{ ...customData, patrocinador: sponsors }} slug={slug} municipality={slug} municipalityflag={false} />
    </>
  )
}

export async function getStaticProps () {
  const region = 'region-amazonia'

  // Load data from the standalone folder
  const content = await getStandaloneRegionData(region)
  const regionData = JSON.parse(content)

  return {
    props: {
      data: regionData,
      slug: region,
      sponsors: regionData.patrocinador // Use sponsors from region-amazonia.json itself
    }
  }
}

export default EspecialRegion
