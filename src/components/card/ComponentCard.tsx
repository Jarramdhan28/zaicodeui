import { Link } from 'react-router-dom'
import { ComponentCardProps } from '../../types/props'
import React from 'react'

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  componentCount,
  to,
  image,
}) => {
  return (
    <Link to={to}>
      <div className='rounded-xl border border-gray-200 p-2.5 hover:bg-gray-50 transition-colors duration-200'>
        <img
          src={image}
          alt={title}
          className='border border-gray-200 rounded-lg mb-2'
          onError={(e) => {
            ;(e.currentTarget as HTMLImageElement).src =
              '/thumbnails/default.png'
          }}
        />
        <div className='p-2 mb-2'>
          <h2 className='font-semibold'>{title}</h2>
          <p className='text-sm text-gray-400'>{componentCount} Component</p>
        </div>
      </div>
    </Link>
  )
}

export default ComponentCard
