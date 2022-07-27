import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

function handleClick (event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function CustomSeparator () {
  const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Regiones
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            Departamentos
        </Link>,
        <Typography className='text-white text-sm font-bold' key="3" color="text.primary">
            Nariño
        </Typography>
  ]

  return (
        <Stack margin="20.5px 0 0 0" spacing={2}>
            <Breadcrumbs className='text-white text-sm'
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
  )
}
