import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ArrowLeft from './ArrowLeft'
import { clearLink, clearText } from '../lib/functions'

export default function CustomSeparator () {
  const [breadcrumb, setbreadcrumb] = useState([])
  const route = useRouter()

  const diccionary = [
    {
      slug: 'Mas',
      label: 'Más'
    },
    {
      slug: 'Metodologia',
      label: 'Metodología'
    },
    {
      slug: 'Boyaca',
      label: 'Boyacá'
    },
    {
      slug: 'Narino',
      label: 'Nariño'
    },
    {
      slug: 'Ibague',
      label: 'Ibagué'
    }

  ]

  const handleClick = (event) => {
    event.preventDefault()
    // console.info('You clicked a breadcrumb.')
  }

  const corretWord = (el, dic) => {
    const word = dic.filter((word) => word.slug === el)[0]
    return word?.label || el
  }

  const breadcrumbs = breadcrumb?.map((item, i) => {
    if (i === breadcrumb.length - 1) {
      return (
        <Typography key="3" color="text.primary"
          style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', textTransform: 'capitalize' }}>
          {clearLink(item.label)}
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
    const crum = route.asPath
      .split('/')
      .reduce((acc, cur) => [...acc, { label: clearText(cur), path: route.asPath }], [])
      .filter(e => String(e.label).trim())
      .reduce((acc, { label, path }) => [...acc, { label: corretWord(label, diccionary), path }], [])

    setbreadcrumb(crum)
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
