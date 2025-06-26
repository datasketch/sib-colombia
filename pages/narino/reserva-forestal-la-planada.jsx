import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ReservaForestalLaPlanadaRedirect () {
  const router = useRouter()

  useEffect(() => {
    router.replace('/especial/reserva-forestal-la-planada')
  }, [router])

  return null
}
