type BrandbookDownloadLinkProps = {
  className?: string
  children?: string
}

const baseClassName =
  'font-serif font-light text-sm tracking-wide text-[#3a1237]/70 dark:text-[#fff8f7]/70 hover:underline decoration-1 underline-offset-4 font-semibold text-[#3a1237] dark:text-[#fff8f7]'

export default function BrandbookDownloadLink({
  className = '',
  children = 'Descargar Brandbook',
}: BrandbookDownloadLinkProps) {
  const classes = className ? `${baseClassName} ${className}` : baseClassName

  return (
    <a href="/brandbook.pdf" download className={classes}>
      {children}
    </a>
  )
}
