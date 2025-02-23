import { useParams } from 'react-router-dom'
import { componentsData } from '../data/components'
import { copyToClipboard } from '../utils/CopyToClipboard'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-markup'
import { useState } from 'react'

const ComponentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const component = componentsData.find((comp) => comp.id === id)
  const [copied, setCopied] = useState(false)

  if (!component) return <p>Components Not Found</p>

  const handleCopy = (code: string) => {
    copyToClipboard(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className='p-10'>
      <h1 className='text-2xl font-bold'>{component.name}</h1>
      <p className='text-gray-600'>{component.description}</p>

      {component.components.map((compDetail) => {
        return (
          <div key={compDetail.id}>
            <div className='mt-4 border p-4 rounded-lg bg-gray-100'>
              <h2 className='text-lg font-bold mb-2'>Preview</h2>
              <div dangerouslySetInnerHTML={{ __html: compDetail.code }} />
            </div>

            <div className='mt-4'>
              <h2 className='text-lg font-bold mb-2'>Code</h2>
              <pre className='bg-gray-900 text-white p-6 rounded-md overflow-x-auto'>
                <code
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      compDetail.code,
                      Prism.languages.html,
                      'html',
                    ),
                  }}
                />
              </pre>
              <button
                onClick={() => handleCopy(compDetail.code)}
                className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
              >
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ComponentDetail
