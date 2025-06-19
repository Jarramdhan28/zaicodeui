import { useParams } from 'react-router-dom'
import { componentFiles } from '../data/componentIndex'
import Navbar from '../components/navbar/Navbar'
import { categoryMeta } from '../data/componentMeta'
import PreviewHTML from '../components/PreviewHTML'
import Footer from '../components/Footer'

const CategoryPage = () => {
  const { category } = useParams()
  const displayCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : 'Unknown Category'

  const components = componentFiles.filter(
    (comp) => comp.category.toLowerCase() === category?.toLowerCase(),
  )

  if (components.length === 0) {
    return (
      <p className='p-6 text-gray-500'>
        No components found for "{displayCategory}"
      </p>
    )
  }

  const categoryDescription = categoryMeta[displayCategory]?.description

  return (
    <>
      <Navbar />

      <main className='mt-20'>
        <div className='mx-auto max-w-screen-xl flex flex-col justify-center px-4 mb-20'>
          <div className='mb-6'>
            <h1 className='text-2xl font-semibold'>
              {displayCategory} Components
            </h1>
            <p className='md:w-3/5 text-sm md:text-md text-gray-600'>
              {categoryDescription}
            </p>
          </div>

          <div className='grid grid-cols-1 space-y-10'>
            {components.map((comp) => (
              <div key={comp.file}>
                <PreviewHTML file={comp.file} title={comp.title} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default CategoryPage
