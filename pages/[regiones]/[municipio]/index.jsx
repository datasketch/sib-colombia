import { getMunicipalityData, getMunicipalitesPath } from '../../../lib/regions'

function municipio (props) {
  console.log(props)
  return (
    <div>[municipio]</div>
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
  console.log(content)
  return {
    props: {
      data: JSON.parse(content),
      slug: regiones,
      name: municipio
    }
  }
}

export default municipio
