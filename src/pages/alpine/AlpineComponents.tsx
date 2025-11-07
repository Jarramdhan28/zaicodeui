import Navbar from '../../components/navbar/Navbar.tsx'
import Footer from '../../components/Footer.tsx'
import { useState } from 'react'
import {
  ComponentIndexAlpine,
  ComponentMeta,
} from '../../data/component-alpine/componentIndex.ts'
import ComponentCard from '../../components/card/ComponentCard.tsx'
import { categoriesAlpineComponents } from '../../data/component-alpine/cetegories.ts'

const AlpineComponents = () => {
  const [search, setSearch] = useState('')

  const groupCategory = ComponentIndexAlpine.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, ComponentMeta[]>,
  )

  const filteredGrouped = Object.entries(groupCategory).reduce(
    (acc, [category, components]) => {
      const filteredComponents = components.filter((comp) =>
        comp.category.toLowerCase().includes(search.toLocaleLowerCase()),
      )
      if (filteredComponents.length > 0) {
        acc[category] = filteredComponents
      }
      return acc
    },
    {} as Record<string, ComponentMeta[]>,
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
              Alpine.js Components
            </p>
            <h2 className='text-2xl md:text-4xl'>
              A collection of components with Alpine.js that are ready for you
              to use easily by just copying and pasting
            </h2>
          </div>
          <div className='flex justify-end items-center mb-2'>
            <input
              type='text'
              placeholder='Search components'
              className='border border-gray-200 px-4 py-2 rounded-lg text-sm focus:ring-0 focus:outline-0 text-gray-600'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {categories.length === 0 ? (
            <p className='text-gray-500'>No components found.</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
              {categories.map(([categoryName, components]) => {
                const image =
                  categoriesAlpineComponents[categoryName]?.thumbnail ??
                  '/thumbnails/default.png'
                return (
                  <ComponentCard
                    key={categoryName}
                    title={categoryName}
                    to={`/alpine-components/${categoryName.toLowerCase()}`}
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

export default AlpineComponents
