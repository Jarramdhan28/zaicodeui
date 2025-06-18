import { Link, useLocation } from 'react-router-dom'

interface NavLinkProps {
  to: string
  label: string
  target?: string
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, target }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={
        `text-sm text-gray-950 hover:text-gray-500` +
        (isActive ? ' text-gray-90 font-semibold' : ' text-gray-60')
      }
      target={target}
    >
      {label}
    </Link>
  )
}

export default NavLink
