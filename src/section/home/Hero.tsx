import Button from '../../components/ui/Button'
import HeroCard from '../../components/card/HeroCard'
import { HeroCardProps } from '../../types/props'

const HeroDataCard: HeroCardProps[] = [
  {
    title: 'Tailwind CSS Components',
    description:
      'A collection of pre-designed Tailwind CSS components that you can easily integrate into your projects.',
    icon: '✢',
  },
  {
    title: 'Tailwind CSS Templates',
    description:
      'Browse a collection of modern, responsive templates. perfect for landing pages, dashboards, and more.',
    icon: '⛵︎',
  },
]

const Hero = () => {
  return (
    <>
      <div className='mx-auto max-w-screen-xl h-screen flex flex-col justify-center px-4 md:mt-14'>
        <div className='flex justify-center items-center '>
          <div className='max-w-3xl'>
            <div className='mb-2 md:mb-6'>
              <h2 className='text-5xl lg:text-7xl text-center font-semibold mb-1'>
                Craft Beautiful UI Without the Hassle!
              </h2>
              <p className='text-sm md:text-md text-center text-gray-500'>
                zaicodeui offers a collection of ready-to-use Tailwind CSS
                components and stunning templates, making it easier and faster
                to build responsive and visually impressive websites.
              </p>
            </div>
            <div className='flex justify-center gap-3 items-center'>
              <Button
                to={'/components'}
                variant='primary'
                size='md'
                className='text-xs'
              >
                Explore Components
              </Button>
              <Button
                to={'/templates'}
                variant='outline'
                size='md'
                className='text-xs'
              >
                Explore Templates
              </Button>
            </div>
          </div>
        </div>

        <div className='hidden md:grid mx-auto max-w-screen-lg grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center mt-12 md:mt-16'>
          {HeroDataCard.map((card, index) => (
            <HeroCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero
