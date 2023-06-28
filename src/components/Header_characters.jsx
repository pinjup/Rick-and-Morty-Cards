import { useContext } from 'react'
import { ProContext } from './Context'
export default function Header({ children, location }) {
    const {scrolled} = useContext(ProContext)
    const grid_conf = location == 'Home' ? 'grid-cols-1 h-24 min-[400px]:h-28 min-[460px]:h-32 min-[550px]:h-28 min-[1200px]:h-32 min-[1500px]:h-40' : 'grid-cols-[80%_20%] h-20 min-[400px]:h-24 min-[460px]:h-28 min-[550px]:h-24 min-[1200px]:h-28 min-[1500px]:h-36'
    let conf = ''
    if (location == 'Home') {
      conf = ''
    } else {
      conf = scrolled ? 'fixed' : ''
    }
  return (
    <header className={'w-full h-auto'}>
        <nav className={`${conf} w-full bg-slate-800 grid ${grid_conf}  items-center justify-items-center`}>
          {children}
        </nav>
    </header>
  )
}
