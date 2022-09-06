import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ArrowLeft from './ArrowLeft'
import { clearText } from '../lib/functions'

export default function CustomSeparator () {
  const [breadcrumb, setbreadcrumb] = useState()

  const route = useRouter()

  const handleClick = (event) => {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  const breadcrumbs = breadcrumb?.map((item, i) => {
    if (i === breadcrumb.length - 1) {
      return (
        <Typography key="3" color="text.primary"
          style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', textTransform: 'capitalize' }}>
          {item.label}
        </Typography >
      )
    }
    return (
      <Link
        underline="hover"
        key="2"
        color="inherit"
        href={item.path}
        onClick={handleClick}
      >
        {item.label}
      </Link>)
  })

  useEffect(() => {
    setbreadcrumb(route.asPath.split('/').reduce((acc, cur, i, arr) => [...acc, { label: clearText(cur), path: route.asPath }], []).filter(e => String(e.label).trim()))
  }, [route])

  return (
    <Stack margin="10px 0 0 0" spacing={2}>
      <Breadcrumbs
        separator={<ArrowLeft />}
        aria-label="breadcrumb" style={{ color: '#fff', fontSize: '14px' }}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}
