import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useEffect, useState } from 'react'

function handleClick (event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function CustomSeparator () {
  const [location, setLocation] = useState('')
  useEffect(() => {
    setLocation(window.location.pathname.replace('/', ''))

    return () => {

    }
  }, [])

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
        <Typography key="3" color="text.primary" style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', textTransform: 'capitalize' }}>
          {location}
        </Typography>
  ]

  return (
        <Stack margin="20.5px 0 0 0" spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb" style={{ color: '#fff', fontSize: '14px' }}
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
  )
}
