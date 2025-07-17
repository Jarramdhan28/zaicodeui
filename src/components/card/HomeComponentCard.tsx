import { useEffect, useState } from 'react'
import CodeViewer from '../CodeViewer'

interface HomeComponentCardProps {
  filePath: string
}

const HomeComponentCard: React.FC<HomeComponentCardProps> = ({ filePath }) => {
  const [code, setCode] = useState<string>('Loading...')

  useEffect(() => {
    fetch(filePath)
      .then((res) => res.text())
      .then((data) => setCode(data))
      .catch(() => setCode('Failed to load code.'))
  }, [filePath])

  return (
    <div className='bg-white border border-gray-100 rounded-xl rotate-3 shadow hover:scale-105 hover:rotate-0 transition-transform duration-500'>
      {/* Header 3 dot */}
      <div className='flex px-2 py-4 gap-1 '>
        <span className='bg-blue-500 w-3 h-3 rounded-full' />
        <span className='bg-purple-500 w-3 h-3 rounded-full' />
        <span className='bg-pink-500 w-3 h-3 rounded-full' />
      </div>

      {/* Code Preview */}
      <div className='px-4 pb-4'>
        <CodeViewer code={code} />
      </div>
    </div>
  )
}

export default HomeComponentCard
