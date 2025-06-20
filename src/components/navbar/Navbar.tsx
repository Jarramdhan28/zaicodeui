import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { TfiMenu } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className='border-b border-gray-100 fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md'>
      <nav className='mx-auto max-w-screen-xl py-4 flex justify-between px-4'>
        <div className='flex gap-x-3 items-center'>
          <Link to={'/'} className='font-semibold'>
            zaicodeui
          </Link>
        </div>

        <div className='hidden lg:flex gap-x-4 items-center justify-center'>
          <NavLink to={'/components'} label='Components' />
          <NavLink to={'/templates'} label='Templates' />
          <NavLink
            to={'https://www.zaicode.my.id/articles'}
            target='_blank'
            label='Articles'
          />
          <NavLink to={'/templates'} label='Donate' />
          <FaGithub size={26} />
        </div>

        <div className='lg:hidden flex gap-x-4'>
          <FaGithub size={26} />
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <IoClose size={20} /> : <TfiMenu size={20} />}
          </button>
        </div>
      </nav>

      {isMobileOpen && (
        <div className='lg:hidden top-12 flex flex-col space-y-4 mt-2 mb-4 text-start px-4'>
          <NavLink to={'/components'} label='Components' />
          <NavLink to={'/templates'} label='Templates' />
          <NavLink
            to={'https://www.zaicode.my.id/articles'}
            label='Articles'
            target='_blank'
          />
          <NavLink to={'/templates'} label='Donate' />
        </div>
      )}
    </header>
  )
}

export default Navbar
