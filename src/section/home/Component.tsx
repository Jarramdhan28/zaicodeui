import HomeComponentCard from '../../components/card/HomeComponentCard'
import Button from '../../components/ui/Button'

const Component = () => {
  return (
    <section className='mx-auto max-w-screen-xl flex flex-col justify-center px-4 mb-6 md:mb-40'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='w-full mb-4 order-2 md:order-1'>
          <p className='text-xs md:text-sm text-gray-500'>UI Kit Components</p>
          <h2 className='font-bold text-2xl md:text-6xl mb-3'>
            50+ Free Tailwind CSS UI Components Build Faster, Design Smarter. 🫣
          </h2>
          <h2 className='text-gray-500 text-sm md:text-md'>
            A collection of pre-designed Tailwind CSS components that you can
            easily integrate into your projects.
          </h2>
          <div className='flex items-center mt-2'>
            <Button to={'/components'} variant='outline' size='sm'>
              See More
            </Button>
          </div>
        </div>

        <div className='w-full mx-auto gap-4 flex order-1 md:order-2 justify-center items-center'>
          <div className='w-full md:w-3/4'>
            <HomeComponentCard filePath='components/example.html' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Component
