import { useContext, useEffect } from 'react'
import CardPregunta from '../../components/CardPregunta'
import HeadMore from '../../components/headers/HeadMore'
import { AppContext } from '../_app'
import questions from '../../static/data/preg_frecuentes.json'
export default function preguntasFrecuentes () {
  const { setFooterBgColor } = useContext(AppContext)

  useEffect(() => {
    setFooterBgColor('bg-footer-orange')
  }, [])
  return (
    <>
      <HeadMore title='Preguntas frecuentes' />
      <div className='mx-auto max-w-screen-2xl w-9/12 py-12 space-y-6'>
        {questions.map((item, key) => <CardPregunta key={key} title={item.pregunta} description={item.respuesta} date={item.date} index={key + 1} />)}
      </div>
    </>
  )
}
