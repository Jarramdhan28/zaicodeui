import { Link } from 'react-router-dom'
import { componentsData } from '../data/components'

const Content: React.FC = () => {
  return (
    <div className='mx-auto max-w-screen-xl my-20'>
      <h2 className='text-2xl font-semibold'>Tailwind UI Components</h2>

      <div className='grid grid-cols-1 lg:grid-cols-3 mt-4 gap-6'>
        {componentsData.map((comp) => (
          <Link
            to={`/component/${comp.id}`}
            key={comp.id}
            className='border border-gray-200 p-2 rounded-lg hover:bg-gray-50 delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'
          >
            <img
              src={comp.preview}
              alt={comp.name}
              className='w-full rounded-lg h-50 object-cover'
            />
            <div className='mt-2 p-2 mb-2'>
              <h2 className='text-2xl font-semibold'>{comp.name}</h2>
              <p className='text-gray-400'>{comp.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Content
