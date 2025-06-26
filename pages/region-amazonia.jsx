import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function RegionAmazoniaRedirect () {
  const router = useRouter()

  useEffect(() => {
    router.replace('/especial/region-amazonia')
  }, [router])

  return null
}
