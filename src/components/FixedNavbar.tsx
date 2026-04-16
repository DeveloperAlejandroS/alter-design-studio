import { useEffect, useState } from 'react'
import MainNavLinks from "./MainNavLinks";
import SiteLogo from "./SiteLogo";

export default function FixedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 navbar-enter transition-all duration-500 ${
        isScrolled
          ? 'bg-[#fff8f7]/80 dark:bg-[#3a1237]/90 border-b border-[#d1c2cb]/30 backdrop-blur-sm shadow-[0_6px_20px_rgba(58,18,55,0.05)]'
          : 'bg-[#fff8f7] dark:bg-[#3a1237] border-b border-[#d1c2cb]/20'
      }`}
    >
      <nav aria-label="Navegación principal" className="flex justify-between items-center w-full px-4 sm:px-6 md:px-12 py-4 md:py-8 max-w-screen-2xl mx-auto">
        <div className="navbar-brand">
          <SiteLogo textClassName="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter text-[#3a1237] dark:text-[#E8D5D6] font-headline uppercase" />
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <MainNavLinks />
        </div>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-[#d1c2cb]/50 text-[#3a1237]"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined text-[20px]">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
        <a
          href="/brandbook.pdf"
          download
          className="hidden md:inline-block bg-primary text-on-primary px-6 py-3 font-label text-xs tracking-widest uppercase hover:bg-primary-container transition-colors duration-300 navbar-cta"
        >
          Brandbook
        </a>
      </nav>
      {isMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-[#d1c2cb]/40 px-4 sm:px-6 pb-5 pt-4 bg-[#fff8f7]/95">
          <MainNavLinks
            className="flex flex-col gap-4"
            itemClassName="text-base"
            onNavigate={() => setIsMenuOpen(false)}
          />
          <a
            href="/brandbook.pdf"
            download
            className="mt-5 inline-block bg-primary text-on-primary px-5 py-3 font-label text-[11px] tracking-widest uppercase hover:bg-primary-container transition-colors duration-300"
          >
            Brandbook
          </a>
        </div>
      )}
    </header>
  );
}
