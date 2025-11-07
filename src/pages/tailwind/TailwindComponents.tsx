import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar.tsx'
import {
  ComponentFileMeta,
  componentIndex,
} from '../../data/component-tailwind/componentIndex.ts'
import { categoryMeta } from '../../data/component-tailwind/categories.ts'
import ComponentCard from '../../components/card/ComponentCard.tsx'
import Footer from '../../components/Footer.tsx'

const Components = () => {
  const [search, setSearch] = useState('')

  const groupedByCategory = componentIndex.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, ComponentFileMeta[]>,
  )

  const filteredGrouped = Object.entries(groupedByCategory).reduce(
    (acc, [category, components]) => {
      const filteredComponents = components.filter((comp) =>
        comp.category.toLowerCase().includes(search.toLowerCase()),
      )
      if (filteredComponents.length > 0) {
        acc[category] = filteredComponents
      }
      return acc
    },
    {} as Record<string, ComponentFileMeta[]>,
  )

  const categories = Object.entries(filteredGrouped).sort(([a], [b]) =>
    a.localeCompare(b),
  )

  return (
    <>
      <Navbar />

      <main className='mt-20'>
        <div className='mx-auto max-w-screen-xl flex flex-col justify-center px-4 mb-20'>
          {/* Title */}
          <div className='md:w-3/4 mb-4'>
            <p className='text-xs md:text-sm text-gray-700'>
              Tailwind CSS V4 UI Components
            </p>
            <h2 className='text-2xl md:text-4xl'>
              A collection of Tailwind CSS components that are ready for you to
              use easily by just copy and paste
            </h2>
          </div>
          {/* Search Input */}
          <div className='flex justify-end items-center mb-2'>
            <input
              type='text'
              placeholder='Search components'
              className='border border-gray-200 px-4 py-2 rounded-lg text-sm focus:ring-0 focus:outline-0 text-gray-600'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Card List Components */}
          {categories.length === 0 ? (
            <p className='text-gray-500'>No components found.</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
              {categories.map(([categoryName, components]) => {
                const image =
                  categoryMeta[categoryName]?.image ?? '/thumbnails/default.png'
                return (
                  <ComponentCard
                    key={categoryName}
                    title={categoryName}
                    to={`/tailwindui-components/${categoryName.toLowerCase()}`}
                    componentCount={components.length.toString()}
                    image={image}
                  />
                )
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Components
