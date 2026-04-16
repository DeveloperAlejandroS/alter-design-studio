type SiteLogoProps = {
  textClassName: string
}

export default function SiteLogo({ textClassName }: SiteLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={new URL('../assets/isotype (2).jpg', import.meta.url).href}
        alt="ALTER Studio"
        className="w-8 h-8 object-contain"
      />
      <div className={textClassName}>Alter Studio</div>
    </div>
  )
}
