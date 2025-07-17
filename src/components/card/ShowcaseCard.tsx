import { ShowcaseCardProps } from '../../types/props.ts'
import React from 'react'
import { Link } from 'react-router-dom'

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  description,
  image,
  toShow,
  toTemplate,
  categories,
}) => {
  return (
    <div className='rounded-xl w-full border border-gray-200 hover:bg-gray-50 transition-colors duration-200'>
      {/* Wrapper for image and hover overlay */}
      <div className='group relative overflow-hidden rounded-lg m-2.5'>
        <img
          src={image}
          alt={title}
          className='w-full h-40 border border-gray-200 rounded-lg object-cover'
        />

        {/* "view" button overlay - now inside the image's parent div */}
        <div className='absolute inset-0 flex gap-2 items-center justify-center bg-black/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto'>
          {toShow !== '#' && (
            <Link
              to={toShow}
              className='px-2 py-1 bg-white rounded-lg hover:bg-gray-100'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-5'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm18 3H3.75v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V9Zm-15-3.75A.75.75 0 0 0 4.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H5.25Zm1.5.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V6Zm3-.75A.75.75 0 0 0 9 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H9.75Z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          )}

          {toTemplate !== '#' && (
            <Link
              to={toTemplate}
              className='px-2 py-1 bg-white rounded-lg hover:bg-gray-100'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* body card*/}
      <div className='px-3 pt-1 pb-3'>
        <h2 className='font-semibold'>{title}</h2>
        <p className='text-sm text-gray-400'>{description}</p>
      </div>

      <div className='bg-gray-50/80 flex justify-start gap-1 border-t border-gray-200 flex justify-between items-center px-2.5 py-3'>
        {categories.map((category, index) => (
          <span
            key={index}
            className={`inline-block cursor-pointer ${category.color} text-white text-xs px-2.5 py-0.5 rounded-full`}
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ShowcaseCard
