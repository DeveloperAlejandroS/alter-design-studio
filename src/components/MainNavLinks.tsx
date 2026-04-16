import { NavLink } from 'react-router-dom'

type MainNavLinksProps = {
  className?: string
  itemClassName?: string
  onNavigate?: () => void
}

const baseClassName =
  'relative font-serif font-bold tracking-tight uppercase text-[#3a1237]/60 dark:text-[#E8D5D6]/60 hover:text-[#3a1237] dark:hover:text-[#E8D5D6] transition-all duration-300 hover:-translate-y-0.5 nav-link-elegant after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100'

const activeClassName =
  'relative font-serif font-bold tracking-tight uppercase text-[#3a1237] dark:text-[#E8D5D6] nav-link-elegant nav-link-active after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-current after:transition-transform after:duration-300'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/estudio', label: 'Estudio' },
  { to: '/equipo', label: 'Equipo' },
  { to: '/contacto', label: 'Contacto' },
]

export default function MainNavLinks({ className = 'contents', itemClassName = '', onNavigate }: MainNavLinksProps) {
  return (
    <div className={className}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          end={link.end}
          className={({ isActive }) => `${isActive ? activeClassName : baseClassName} ${itemClassName}`.trim()}
          to={link.to}
          onClick={onNavigate}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  )
}
