import { useState } from 'react'
import menuClose from '../assets/images/icon-menu-close.svg'
import menu from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'

function Hamburger({ links }: { links: string[] }) {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen((value) => !value)
  }

  return (
    <section aria-label="Hamburger">
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className=""
        aria-controls="navbar-hamburger"
        aria-expanded={open}
        onClick={handleClick}
      >
        <img src={menu} alt="Menu Icon" className="h-6" />
      </button>

      {open && (
        <div
          className="absolute top-0 right-0 flex h-full w-3/4 flex-col bg-white p-8"
          id="navbar-hamburger"
        >
          <button className="mb-8 self-end" onClick={handleClick}>
            <img src={menuClose} alt="X close icon" />
          </button>
          <section className="flex h-[200px] flex-col justify-between">
            {links.map((link) => (
              <a key={link} href="#" className="text-darkPurple">
                {link}
              </a>
            ))}
          </section>
        </div>
      )}
    </section>
  )
}

export function Heading() {
  const links = ['Home', 'New', 'Popular', 'Trending', 'Categories']

  return (
    <div className="my-4 flex items-center justify-between">
      <img
        src={logo}
        alt="Logo Icon"
        className="col-start-1 col-end-1 h-full "
      />
      <div className="md:hidden">
        <Hamburger links={links} />
      </div>
      <div className="hidden md:flex">
        <nav className="flex">
          {links.map((link) => (
            <a key={link} className="p-4" href={`/${link}`}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
