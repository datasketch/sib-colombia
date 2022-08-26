import { Pagination, PaginationItem } from '@mui/material'
import Head from '../../components/HeadMore'
import PublishersCard from '../../components/PublishersCard'
import publishers from '../../data/publicadores'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
// import { makeStyles } from '@mui/styles'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .Mui-selected': {
//       backgroundColor: 'transparent',
//       color: '#E1501B'
//     }
//   }
// })
// )

// const useStyles = makeStyles((theme) => ({
//   selected: {
//     backgroundColor: 'transparent',
//     color: '#19D5C6'
//   }
// })
// )
export default function publicadores () {
  // const classes = useStyles()
  return (
    <>
      <Head title={'Publicadores'} />
      <div className="w-10/12 mx-auto space-y-16 pt-8">
        <div className="filters flex flex-col items-center lg:flex-row space-y-4 sm:space-y-8 lg:space-y-0 lg:justify-between">
          <div className="relative w-full lg:max-w-xs">
            <img className="absolute top-2 left-3" src="/images/public/icon-search.svg" alt="icon search" />
            <input id="search" className="block w-full focus:outline-none py-2 pl-12 pr-8 border border-black rounded-full"
              type="text" placeholder="Buscar" />
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:gap-x-10 space-y-4 sm:space-y-0 sm:justify-between lg:justify-start"
            style={{ maxWidth: '475px' }}>
            <select className="flex space-x-2 border border-black px-3 py-2 items-center"
              id="publicationCountry">
              <option selected value="-">Pais de publicación</option>
              <option selected value="-">Pais de publicación</option>

            </select>
            <select className="flex space-x-2 border border-black px-3 py-2 items-center"
              id="orderBy">
              <option defaultValue='' value="-">Ordenar por</option>
              <option value="A">Alfabéticamente (A-Z)</option>
              <option value="Z">Alfabéticamente (Z-A)</option>
            </select>

          </div>
        </div>
      </div>
      <div id="publishers" className="w-8/12 mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {
          publishers.map((item, key) => {
            if (key >= 12) return (<></>)
            return (
              <PublishersCard key={key} title={item.label} country={item.pais_publicacion} totalEspecies={item.especies} observationsQuantity={item.registros} imagePath={item.url_logo} />
            )
          }
          )}
      </div>
      <div className='py-8 flex justify-center'>
        <Pagination count={10}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )} />
      </div>
    </>
  )
}
