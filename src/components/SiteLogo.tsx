import { useEffect, useState } from 'react'

type SiteLogoProps = {
  textClassName: string
}

function getInitialThemeMode() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const root = document.documentElement

  if (root.classList.contains('dark')) {
    return 'dark'
  }

  if (root.classList.contains('light')) {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function SiteLogo({ textClassName }: SiteLogoProps) {
  const [themeMode, setThemeMode] = useState(getInitialThemeMode)

  useEffect(() => {
    const root = document.documentElement
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const updateThemeMode = () => {
      if (root.classList.contains('dark')) {
        setThemeMode('dark')
        return
      }

      if (root.classList.contains('light')) {
        setThemeMode('light')
        return
      }

      setThemeMode(mediaQuery.matches ? 'dark' : 'light')
    }

    updateThemeMode()

    const observer = new MutationObserver(updateThemeMode)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    mediaQuery.addEventListener('change', updateThemeMode)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', updateThemeMode)
    }
  }, [])

  const logoSrc =
    themeMode === 'dark'
      ? new URL('../assets/icon_light_no_bg.png', import.meta.url).href
      : new URL('../assets/icon_dark_no_bg.png', import.meta.url).href

  return (
    <div className="group flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5">
      <img
        src={logoSrc}
        alt="ALTER Studio"
        className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]"
      />
      <div className={`${textClassName} transition-colors duration-300 group-hover:opacity-90`}>Alter Studio</div>
    </div>
  )
}
