import { FaGithub, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaThreads } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

interface SosialMediaProps {
  href: string
  icon: React.ReactNode
}

const SosialMediaLink: SosialMediaProps[] = [
  {
    href: 'https://www.instagram.com/zaicode',
    icon: <FaInstagram size={20} />,
  },
  {
    href: 'https://www.youtube.com/@ZaicodeProgramming',
    icon: <FaYoutube size={20} />,
  },
  {
    href: 'https://www.instagram.com/zaicode/',
    icon: <FaThreads size={20} />,
  },
  {
    href: 'https://www.tiktok.com/@zaicodee',
    icon: <FaTiktok size={20} />,
  },
  {
    href: 'https://github.com/Jarramdhan28',
    icon: <FaGithub size={20} />,
  },
]

const Footer = () => {
  return (
    <footer className='border-t border-gray-200 py-6'>
      <div className='mx-auto max-w-screen-xl flex flex-col justify-center'>
        <div>
          <h2 className='font-semibold text-lg'>zaicodeui</h2>
          <p className='w-1/2 text-sm text-gray-600'>
            zaicodeui offers a collection of ready-to-use Tailwind CSS
            components and stunning templates, making it easier and faster to
            build responsive and visually impressive websites.
          </p>
          <div className='flex items-center gap-2 mt-2 text-gray-950'>
            {SosialMediaLink.map((item) => (
              <a href={item.href} target='_blank' rel='noopener noreferrer'>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <hr className='my-4 border-gray-100' />
        <div className='flex justify-between items-center '>
          <p className='text-xs w-3/5 text-gray-500'>
            Created by{' '}
            <Link
              to={'https://www.instagram.com/jarramdhan/'}
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-black hover:underline'
            >
              Muhamad Fajar
            </Link>{' '}
            and Design Component ZaicodeUi.
          </p>
          <div className='text-xs text-gray-500'>
            © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
