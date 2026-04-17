import BrandbookDownloadLink from './BrandbookDownloadLink'

export default function FixedFooter() {
  return (
    <footer className="bg-[#e9d6d7] dark:bg-[#52284E] border-t border-[#d1c2cb]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 px-4 sm:px-6 md:px-12 py-14 md:py-20 w-full max-w-screen-2xl mx-auto">
        <div className="space-y-8 transition-transform duration-300 hover:-translate-y-1">
          <div className="text-xl font-bold text-[#3a1237] dark:text-[#fff8f7] font-headline uppercase tracking-tighter">
            ALTER Studio
          </div>
          <p className="font-serif font-light text-sm tracking-wide text-[#3a1237]/70 dark:text-[#fff8f7]/70 max-w-xs">
            Curaduría digital y arquitectura de marca desde el corazón de Bogotá. Evolución consciente para marcas que buscan trascender.
          </p>
        </div>
        <div className="flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1">
          <h4 className="font-label text-[10px] uppercase tracking-[0.3em] mb-4 opacity-50">Explora</h4>
          <a className="font-serif font-light text-sm tracking-wide text-[#3a1237] dark:text-[#fff8f7] hover:underline decoration-1 underline-offset-4 transition-all duration-300 hover:translate-x-1" href="#">Manual Corporativo</a>
          <BrandbookDownloadLink />
          <a className="font-serif font-light text-sm tracking-wide text-[#3a1237] dark:text-[#fff8f7] hover:underline decoration-1 underline-offset-4 transition-all duration-300 hover:translate-x-1" href="#">Privacy Policy</a>
          <a className="font-serif font-light text-sm tracking-wide text-[#3a1237] dark:text-[#fff8f7] hover:underline decoration-1 underline-offset-4 transition-all duration-300 hover:translate-x-1" href="https://www.instagram.com/alte_rstudio/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="space-y-8 text-left md:text-right transition-transform duration-300 hover:-translate-y-1">
          <div className="font-serif font-light text-sm tracking-wide text-[#3a1237]/70 dark:text-[#fff8f7]/70">
            ALTER Studio © 2026. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
