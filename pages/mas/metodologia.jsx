import { useContext, useEffect, useState } from 'react'
import HeadMore from '../../components/headers/HeadMore'
import { AppContext } from '../_app'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import fs from 'fs'
import path from 'path'

// Helper function to extract text from React children
function getTextFromChildren (children) {
  if (!children) return ''
  if (typeof children === 'string') return children
  if (typeof children === 'number') return children.toString()
  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join('')
  }
  if (children.props && children.props.children) {
    return getTextFromChildren(children.props.children)
  }
  return ''
}

// Helper function to generate slug from heading text
function generateSlug (text) {
  return text.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export default function metodologia ({ markdownContent, headings }) {
  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    setFooterBgColor('bg-footer-orange')
    setBreadCrumb([{ label: 'Más' }, { label: 'Metodología' }])

    // Manual scrollspy implementation as fallback
    const handleScroll = () => {
      const validIDs = headings.filter(h => h.text.trim() && h.id.trim()).map(h => h.id)

      for (const id of validIDs) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveId(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  // Custom renderer to add IDs to headings
  const components = {
    h1: ({ children, ...props }) => {
      const text = getTextFromChildren(children)
      // Remove any anchor link syntax like {#anchor-id}
      const cleanText = text.replace(/\s*\{#[^}]*\}\s*$/, '')

      // Find the matching heading from our parsed headings to ensure consistent ID
      const matchingHeading = headings.find(h => h.text === cleanText && h.level === 1)
      const id = matchingHeading ? matchingHeading.id : generateSlug(cleanText)
      return (
        <div className='space-y-2 lg:space-y-4'>
          <div className='w-1/3 border-t-2 border-t-flame border-dotted' />
          <h1 id={id} className='text-flame font-inter text-2xl font-black' {...props}>
            {cleanText}
          </h1>
        </div>
      )
    },
    h2: ({ children, ...props }) => {
      const text = getTextFromChildren(children)
      // Remove any anchor link syntax like {#anchor-id}
      const cleanText = text.replace(/\s*\{#[^}]*\}\s*$/, '')

      // Find the matching heading from our parsed headings to ensure consistent ID
      const matchingHeading = headings.find(h => h.text === cleanText && h.level === 2)
      const id = matchingHeading ? matchingHeading.id : generateSlug(cleanText)
      return (
        <h2 id={id} className='font-bold text-xl font-inter' {...props}>
          {cleanText}
        </h2>
      )
    },
    img: ({ src, alt, ...props }) => {
      // Handle the diagram image - use high resolution version
      if (src && (src.includes('diagrama-metodologia') || src.includes('data:image/png'))) {
        return <img className='mx-auto' src='/images/metodologia.png' alt={alt || 'Metodología diagram'} {...props} />
      }
      // Handle the table image
      if (src && src.includes('tabla-metodologia')) {
        return <img className=' mx-auto' src='/images/tabla-metodologia.svg' alt={alt} {...props} />
      }
      return <img src={src} alt={alt} {...props} />
    },
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold text-left" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="border border-gray-300 px-4 py-2" {...props}>
        {children}
      </td>
    ),
    ul: ({ children, ...props }) => (
      <ul className='px-6 space-y-6 py-3' {...props}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }) => (
      <li className='flex font-lato' {...props}>
        <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' alt="bullet" />
        <div className='rc-markdown font-lato'>
          {children}
        </div>
      </li>
    ),
    p: ({ children, ...props }) => (
      <p className='font-lato' {...props}>
        {children}
      </p>
    ),
    strong: ({ children, ...props }) => (
      <b className='font-inter' {...props}>
        {children}
      </b>
    )
  }

  return (
    <>
      <HeadMore title='Metodología' slug='metodologia' />
      <div className='max-w-screen-2xl w-10/12 mx-auto flex'>
        <div className='space-y-4 lg:space-y-12 mx-auto md:w-8/12 py-10'>
          <ReactMarkdown
            linkTarget='_blank'
            className='rc-markdown font-lato space-y-4'
            remarkPlugins={[remarkGfm]}
            components={components}
          >
            {markdownContent}
          </ReactMarkdown>

          <div className='space-y-2 lg:space-y-4 pt-8'>
            <div className='w-1/3 border-t-2 border-t-flame border-dotted' />
            <h2 className='text-flame font-inter text-2xl font-black pt-4'>Descarga y bibliografía</h2>
            <div className='flex flex-col md:flex-row gap-5'>
              <a className='flex justify-center items-center gap-2 py-1 lg:w-4/12 px-2  border border-black rounded-full' href='/files/Biodiversidad En Cifras_ Ficha metodológica (2025).pdf' target='_blank' rel='noopener noreferrer'>
                <span className='text-base font-lato'>Descargar la metodología </span>
                <img className='w-3 h-4' src='/images/icon-download.svg' />
              </a>
              <a className='flex justify-center items-center gap-2 py-1 lg:w-4/12 px-1.5 border border-black rounded-full' href='https://www.zotero.org/groups/4455905/biodiversidadencifras/library' target='_blank' rel="noreferrer" >
                <span className='text-base font-lato'>Conocer la bibliografía</span>
              </a>
            </div>
          </div>
        </div>

        <div className='py-10 w-3/12 mx-auto hidden md:block'>
          <span className='font-black font-inter py-2'>Contenidos</span>
          {headings.length > 0 && (
            <ul className='space-y-1.5 sticky top-[5%] font-lato'>
              {headings.filter(h => h.text.trim() && h.id.trim()).map((heading, key) =>
                <li key={key} className={`hover:bg-[#8080801A] hover:border-l-2 hover:border-l-[#707070] ${heading.level === 1 ? 'pl-2' : 'pl-4'} ${activeId === heading.id ? 'border-l-2 border-flame' : ''}`}>
                  <a className='p-1.5 ' href={`#${heading.id}`}>
                    {heading.text}
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps () {
  const filePath = path.join(process.cwd(), 'static', 'data', 'metodologia-Biodiversidad En Cifras_ Ficha metodológica (2025).md')
  const markdownContent = fs.readFileSync(filePath, 'utf8')

  // Parse headings from markdown
  const lines = markdownContent.split('\n')
  const headings = []

  lines.forEach((line) => {
    if (line.startsWith('# ')) {
      const text = line.replace('# ', '').trim()
      // Remove any anchor link syntax like {#anchor-id}
      const cleanText = text.replace(/\s*\{#[^}]*\}\s*$/, '')

      if (cleanText.trim() && cleanText.length > 0) {
        const id = cleanText.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/--+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '')

        if (id && id.length > 0) {
          headings.push({
            level: 1,
            text: cleanText,
            id
          })
        }
      }
    } else if (line.startsWith('## ')) {
      const text = line.replace('## ', '').trim()
      // Remove any anchor link syntax like {#anchor-id}
      const cleanText = text.replace(/\s*\{#[^}]*\}\s*$/, '')

      if (cleanText.trim() && cleanText.length > 0) {
        const id = cleanText.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')
          .replace(/--+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '')

        if (id && id.length > 0) {
          headings.push({
            level: 2,
            text: cleanText,
            id
          })
        }
      }
    }
  })

  return {
    props: {
      markdownContent,
      headings
    }
  }
}
