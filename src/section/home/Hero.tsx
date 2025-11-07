import Button from '../../components/ui/Button'
import HeroCard from '../../components/card/HeroCard'
import { HeroCardProps } from '../../types/props'

const HeroDataCard: HeroCardProps[] = [
  {
    title: 'Tailwind CSS V4 UI Components',
    description:
      'A collection of Tailwind CSS components that are ready for you to use easily',
    icon: '✢',
  },
  {
    title: 'Alpine.js UI Components',
    description:
      'A collection of components with Alpine.js that are ready for you to use easily',
    icon: '❄︎',
  },
  {
    title: 'Tailwind CSS Templates',
    description:
      'A collection of responsive website templates that you can use',
    icon: '⛵︎',
  },
]

const Hero = () => {
  return (
    <>
      <div className='mx-auto max-w-screen-xl h-screen flex flex-col justify-center px-4 md:mt-14'>
        <div className='flex justify-center items-center'>
          <div className='max-w-3xl'>
            <div className='mb-2 md:mb-6'>
              <h2 className='text-5xl lg:text-7xl text-center font-semibold mb-1'>
                Craft Beautiful UI Without the Hassle!
              </h2>
              <p className='text-sm md:text-md text-center text-gray-500'>
                zaicodeui provides Tailwind CSS and Alpine.js component UI that
                can be used easily without any configuration and you can use it
                for free, besides that it provides ready to use website
                templates.
              </p>
            </div>
            <div className='flex justify-center gap-3 items-center'>
              <Button
                to={'/tailwindui-components'}
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

        <div className='hidden md:grid mx-auto max-w-screen-2xl grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center mt-12 md:mt-16'>
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
