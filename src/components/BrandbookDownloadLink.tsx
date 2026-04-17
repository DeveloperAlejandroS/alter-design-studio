type BrandbookDownloadLinkProps = {
  className?: string
  children?: string
}

const baseClassName =
  'group inline-flex items-center gap-2 font-serif font-light text-sm tracking-wide text-[#3a1237]/70 dark:text-[#fff8f7]/70 hover:underline decoration-1 underline-offset-4 font-semibold text-[#3a1237] dark:text-[#fff8f7] transition-all duration-300 hover:translate-x-1'

export default function BrandbookDownloadLink({
  className = '',
  children = 'Descargar Brandbook',
}: BrandbookDownloadLinkProps) {
  const classes = className ? `${baseClassName} ${className}` : baseClassName

  return (
    <a href="/brandbook.pdf" download className={classes}>
      {children}
      <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">arrow_right_alt</span>
    </a>
  )
}
