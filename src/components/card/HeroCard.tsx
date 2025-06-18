import { HeroCardProps } from '../../types/props'

const HeroCard: React.FC<HeroCardProps> = ({ title, description, icon }) => {
  return (
    <div className='flex items-center border border-gray-100 rounded-2xl gap-6 px-8 py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200'>
      <div>
        <h2 className='text-4xl md:text-7xl text-yellow-950/20'>{icon}</h2>
      </div>
      <div>
        <h2 className='font-semibold mb-1 text-sm md:text-md'>{title}</h2>
        <p className='text-xs md:text-sm text-gray-500'>{description}</p>
      </div>
    </div>
  )
}

export default HeroCard
