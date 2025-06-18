import { ComponentCardProps } from '../../types/props'

const HomeTemplateCard: React.FC<ComponentCardProps> = ({
  image,
  title,
  componentCount,
}) => {
  return (
    <div className='bg-white border border-gray-100 rounded-xl -rotate-3 shadow hover:scale-105 hover:rotate-0 transition-transform duration-500'>
      <div className='flex p-2 gap-1'>
        <div className=''>
          <span className='bg-blue-500 inline-block center w-3 h-3 rounded-full'></span>
        </div>
        <div className='circle'>
          <span className='bg-purple-500 inline-block center w-3 h-3 rounded-full'></span>
        </div>
        <div className='circle'>
          <span className='bg-pink-500 box inline-block center w-3 h-3 rounded-full'></span>
        </div>
      </div>

      <div className='px-4'>
        <img src={image} alt={title} className='rounded-xl' />

        <div className='py-4 px-1'>
          <h2 className='font-semibold'>{title}</h2>
          <p className='text-sm text-gray-500'>{componentCount}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeTemplateCard
