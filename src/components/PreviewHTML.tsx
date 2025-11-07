import { useEffect, useState } from 'react'
import CodeViewer from './CodeViewer'
import { IoCopyOutline } from 'react-icons/io5'
import toast, { Toaster } from 'react-hot-toast'
import classNames from 'classnames'

interface PreviewHTMLProps {
  file: string
  title: string
}

const sizes = ['full', 'tablet', 'mobile'] as const
const sizeStyles = {
  full: 'w-full',
  tablet: 'w-[768px]',
  mobile: 'w-[375px]',
}

const PreviewHTML: React.FC<PreviewHTMLProps> = ({ file, title }) => {
  const [rawHtml, setRawHtml] = useState('')
  const [htmlWithTailwind, setHtmlWithTailwind] = useState('')
  const [view, setView] = useState<'preview' | 'code'>('preview')
  const [size, setSize] = useState<(typeof sizes)[number]>('full')

  useEffect(() => {
    fetch(`/${file}`)
      .then((res) => res.text())
      .then((htmlContent) => {
        setRawHtml(htmlContent)
        const fullHtml = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
              <style>body { margin: 0; padding: 1rem; }</style>
            </head>
            <body class="flex justify-center items-center gap-2">
              ${htmlContent}
            </body>
            <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
          </html>
        `
        setHtmlWithTailwind(fullHtml)
      })
      .catch(() =>
        setRawHtml("<p class='text-red-500'>Failed to load preview.</p>"),
      )
  }, [file])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawHtml)
      toast.success('Copied to clipboard!', { icon: '📋' })
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <>
      <Toaster position='top-center' />
      <div className='block md:flex md:justify-between space-y-2 items-center mb-3 px-2'>
        <h2 className='font-semibold'>{title}</h2>
        <div className='flex items-center gap-3'>
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className='text-gray-500 hover:text-black transition'
            title='Copy HTML'
          >
            <IoCopyOutline size={20} />
          </button>

          {/* Size Switcher */}
          <div className='bg-gray-100 rounded-lg mx-auto flex gap-1 overflow-hidden'>
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={classNames(
                  'text-sm font-medium text-center px-4 py-1 m-0.5 transition-colors duration-200 rounded-lg',
                  size === s
                    ? 'text-black bg-white shadow'
                    : 'text-gray-500 hover:text-black',
                )}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

          {/* View Switcher */}
          <div className='flex bg-gray-100 rounded-lg text-sm font-medium'>
            {(['preview', 'code'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={classNames(
                  'px-4 py-1 rounded-lg m-0.5 transition-colors duration-200',
                  view === v
                    ? 'bg-white shadow text-black'
                    : 'text-gray-500 hover:text-black',
                )}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preview or Code View */}
      {view === 'preview' ? (
        <div className='w-full overflow-x-auto'>
          <div
            className={`transition-all duration-300 ease-in-out border border-gray-200 rounded-xl p-2 mx-auto ${sizeStyles[size]}`}
          >
            <iframe
              srcDoc={htmlWithTailwind}
              title='Preview'
              className='w-full h-[500px]'
            />
          </div>
        </div>
      ) : (
        <CodeViewer code={rawHtml} languange='html' />
      )}
    </>
  )
}

export default PreviewHTML
