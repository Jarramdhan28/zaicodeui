import { Link, useLocation } from 'react-router-dom'

interface NavLinkProps {
  to: string
  label: string
  target?: string
  isNew?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  label,
  target,
  isNew = false,
}) => {
  const location = useLocation()
  const currentPath = location.pathname
  const matchPath = to.endsWith('/') ? to : to + '/'
  const isActive = currentPath === to || currentPath.startsWith(matchPath)

  return (
    <Link
      to={to}
      className={
        `text-sm text-gray-700 hover:text-gray-500` +
        (isActive
          ? ' text-gray-950 font-medium hover:text-gray-800'
          : ' text-gray-60')
      }
      target={target}
    >
      <div className='flex items-center'>
        {label}{' '}
        {isNew && (
          <span className='ml-1 -mt-3 h-max inline-flex items-center px-2 py-0.5 rounded-full text-[8px] font-medium bg-red-100 text-red-800'>
            NEW
          </span>
        )}
      </div>
    </Link>
  )
}

export default NavLink
