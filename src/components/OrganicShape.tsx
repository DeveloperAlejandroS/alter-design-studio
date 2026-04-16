type OrganicShapeVariant = 'blob' | 'petal' | 'separator'

type OrganicShapeProps = {
  className?: string
  variant?: OrganicShapeVariant
}

const variantPaths: Record<OrganicShapeVariant, string> = {
  blob: 'M85.8,43.2C91.5,60.9,81.9,82,65.3,88.6C48.8,95.2,25.2,87.3,14.2,69.7C3.2,52.1,4.9,24.8,20.4,11.4C35.9,-2,65.9,-1.6,79.4,13.3C92.8,28.2,80.1,25.4,85.8,43.2Z',
  petal: 'M84.7,44.5C90.6,62.8,78.3,82.7,60.4,90.3C42.6,97.9,19.2,93.1,10.8,76.2C2.4,59.2,8.9,30.2,24.6,15.3C40.3,0.4,65.3,-0.4,78.4,13.1C91.4,26.7,78.9,26.1,84.7,44.5Z',
  separator: 'M95.2,54.8C89.6,63.1,74.5,64.7,59.8,64.9C45.1,65.1,30.8,64,19.4,58.7C8,53.4,-0.5,43.9,3.9,36.8C8.3,29.7,25.6,25,41.7,22.7C57.7,20.4,72.6,20.6,83.4,26.2C94.2,31.7,100.8,46.5,95.2,54.8Z'
}

export default function OrganicShape({ className = '', variant = 'blob' }: OrganicShapeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="organic-soft-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5.5" />
        </filter>
        <radialGradient id="organic-main" cx="42%" cy="38%" r="72%">
          <stop offset="0%" stopColor="#D4C5E5" stopOpacity="0.2" />
          <stop offset="58%" stopColor="#8D6AA8" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#52284E" stopOpacity="0.12" />
        </radialGradient>
        <radialGradient id="organic-accent" cx="65%" cy="28%" r="64%">
          <stop offset="0%" stopColor="#EFE7F9" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#52284E" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      <g filter="url(#organic-soft-blur)">
        <path d={variantPaths[variant]} fill="url(#organic-main)" transform="translate(0 0)" />
        <path
          d={variantPaths[variant]}
          fill="url(#organic-accent)"
          transform={variant === 'separator' ? 'translate(-3 1) scale(0.92 0.8)' : 'translate(4 -3) scale(0.88 0.9)'}
        />
      </g>
    </svg>
  )
}
