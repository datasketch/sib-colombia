import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ResguardoIndigenaPialapiPuebloViejoRedirect () {
  const router = useRouter()

  useEffect(() => {
    router.replace('/especial/resguardo-indigena-pialapi-pueblo-viejo')
  }, [router])

  return null
}
