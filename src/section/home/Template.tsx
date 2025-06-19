import HomeTemplateCard from '../../components/card/HomeTemplateCard'
import Button from '../../components/ui/Button'

const Template = () => {
  return (
    <section className='mx-auto max-w-screen-xl flex flex-col justify-center px-4 mb-20'>
      <div className='flex flex-col md:flex-row items-center gap-6'>
        <div className='w-full mx-auto gap-4 flex justify-center items-center'>
          <div className='w-4/5 md:w-3/4'>
            <HomeTemplateCard
              title='Zaicode'
              componentCount='Personal Website Template'
              image='thumbnails/default.png'
              to={''}
            />
          </div>
        </div>
        <div className='w-full mb-4'>
          <p className='text-xs md:text-sm text-gray-500'>
            Tailwind CSS Templates
          </p>
          <h2 className='font-bold text-2xl md:text-6xl mb-3'>
            Ready-made templates for modern websites and clean design 👨‍💻
          </h2>
          <h2 className='text-gray-500 text-sm md:text-md'>
            Browse a collection of modern, responsive templates. perfect for
            landing pages, dashboards, and more.
          </h2>
          <div className='flex items-center mt-2'>
            <Button to={'/templates'} variant='outline' size='sm'>
              See More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Template
