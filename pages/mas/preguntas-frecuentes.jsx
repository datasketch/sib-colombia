import { useContext, useEffect } from 'react'
import CardPregunta from '../../components/CardPregunta'
import HeadMore from '../../components/headers/HeadMore'
import { AppContext } from '../_app'

export default function preguntasFrecuentes () {
  const questions = [
    {
      title: '¿Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet?',
      description: 'Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      date: ' 22 de julio del 2022'
    },
    {
      title: '¿Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet?',
      description: 'Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      date: ' 22 de julio del 2022'
    },
    {
      title: '¿Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet?',
      description: 'Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      date: ' 22 de julio del 2022'
    },
    {
      title: '¿Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet?',
      description: 'Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      date: ' 22 de julio del 2022'
    },
    {
      title: '¿Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet?',
      description: 'Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      date: ' 22 de julio del 2022'
    },
    {
      title: '¿Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet?',
      description: 'Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      date: ' 22 de julio del 2022'
    }

  ]

  const { setFooterBgColor } = useContext(AppContext)
  useEffect(() => {
    setFooterBgColor('bg-footer-orange')
  }, [])
  return (
    <>
      <HeadMore title='Preguntas frecuentes' />
      <div className='mx-auto max-w-screen-2xl w-9/12 py-12 space-y-6'>
        {questions.map((item, key) => <CardPregunta key={key} title={item.title} description={item.description} date={item.date} index={key + 1} />)}
      </div>
    </>
  )
}
