import { useContext, useEffect } from 'react'

import ArrowLeft from './ArrowLeft'

import { AppContext } from '../pages/_app'
import Link from 'next/link'

export default function CustomSeparator () {
  const { breadCrumb } = useContext(AppContext)
  useEffect(() => {
    return () => {

    }
  }, [breadCrumb])

  return (
    <div className='flex gap-x-2'>
      {breadCrumb.map((el, key) => {
        if (el.href) {
          return (
            <div key={el} className='flex gap-x-2 items-center'>
              <Link href={el.href}>
                <a className='text-white font'>{el.label}</a>
              </Link>
              <ArrowLeft />
            </div>
          )
        }
        return (
          <div key={key} className='flex gap-x-2 items-center'>
          <span className='text-white font'>{el.label}</span>
            {key === breadCrumb.length - 1 ? '' : <ArrowLeft />}
          </div>
        )
      }
      )}
    </div>
  )
}
