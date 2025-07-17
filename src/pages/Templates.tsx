import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import ShowcaseCard from '../components/card/ShowcaseCard'
import { useEffect, useState } from 'react'
import { ShowcaseCardProps } from '../types/props.ts'

const Templates = () => {
  const [data, setData] = useState<ShowcaseCardProps[]>([])
  const [query, setQuery] = useState('')
  const [filteredData, setFilteredData] = useState<ShowcaseCardProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/templates/data.json')
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error('Failed to fetch:', error)
      }
    }
    void fetchData()
  }, [])

  useEffect(() => {
    const result = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()))

    setFilteredData(result)
  }, [query, data])

  console.log(data)

  return (
    <>
      <Navbar />

      <main className='mt-20'>
        <div className='mx-auto max-w-screen-xl flex flex-col justify-center px-4 mb-20'>
          {/* Title */}
          <div className='md:w-3/4 mb-4'>
            <p className='text-xs md:text-sm text-gray-700'>
              Templates and Showcase
            </p>
            <h2 className='text-2xl md:text-4xl'>
              Visit our showcase to see the variety of{' '}
              <span className='font-semibold'>Tailwind CSS</span> website
              templates we have prepared.
            </h2>
          </div>

          {/* Search input */}
          <div className='flex justify-end items-center mb-2'>
            <input
              type='text'
              placeholder='Search Templates'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='border border-gray-200 px-4 py-2 rounded-lg text-sm focus:ring-0 focus:outline-0 text-gray-600'
            />
          </div>

          {/* Card List */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <ShowcaseCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  toShow={item.toShow}
                  toTemplate={item.toTemplate}
                  categories={item.categories}
                />
              ))
            ) : (
              <p className='text-gray-500'>No templates found.</p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Templates
