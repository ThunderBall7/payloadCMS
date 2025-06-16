import type { MarqueeLogosBlock as MarqueeLogosBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Media } from '@/payload-types'

type LogoItem = {
  logo: Media | string
  alt?: string | null
  link?: string | null
  id?: string | null
}

type Props = {
  className?: string
} & MarqueeLogosBlockProps

export const MarqueeLogosBlock: React.FC<Props> = ({
  className,
  logos = [],
  speed = 'medium',
  direction = 'left',
  padding = 'medium',
  logoSize = 'medium',
  enableHover = true,
  enableGrayscale = true,
}) => {
  const speedClasses: Record<string, string> = {
    slow: 'animate-marquee-slow',
    medium: 'animate-marquee-medium',
    fast: 'animate-marquee-fast',
  }

  const paddingClasses: Record<string, string> = {
    small: 'py-4',
    medium: 'py-8',
    large: 'py-12',
  }

  const logoSizeClasses: Record<string, string> = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16',
  }

  const directionClass = direction === 'right' ? 'animate-marquee-reverse' : ''

  const safeSpeed = speed || 'medium'
  const safePadding = padding || 'medium'
  const safeLogoSize = logoSize || 'medium'

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjFDMUIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 "></div>

      <div className={cn('relative z-10', paddingClasses[safePadding])}>
        <div
          className={cn(
            'flex items-center gap-12 whitespace-nowrap',
            speedClasses[safeSpeed],
            directionClass
          )}
        >
          {/* First set of logos */}
          {logos?.map((logo, index) => (
            <LogoItem
              key={`first-${index}`}
              logo={logo}
              size={logoSizeClasses[safeLogoSize]}
              enableHover={Boolean(enableHover)}
              enableGrayscale={Boolean(enableGrayscale)}
            />
          ))}
          {logos?.map((logo, index) => (
            <LogoItem
              key={`second-${index}`}
              logo={logo}
              size={logoSizeClasses[safeLogoSize]}
              enableHover={Boolean(enableHover)}
              enableGrayscale={Boolean(enableGrayscale)}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 -left-16 w-32 h-32 rounded-full bg-gradient-to-r from-[#23278D]/10 to-[#121C7B]/10 blur-2xl"></div>
      <div className="absolute top-1/2 -right-16 w-32 h-32 rounded-full bg-gradient-to-r from-[#121C7B]/10 to-[#23278D]/10 blur-2xl"></div>
    </div>
  )
}

const LogoItem: React.FC<{
  logo: LogoItem
  size: string
  enableHover: boolean
  enableGrayscale: boolean
}> = ({ logo, size, enableHover, enableGrayscale }) => {
  if (!logo.logo || typeof logo.logo === 'string') return null

  const mediaLogo = logo.logo as Media
  const logoUrl = mediaLogo.url || mediaLogo.sizes?.medium?.url || '/placeholder.png'
  const logoWidth = mediaLogo.width || mediaLogo.sizes?.medium?.width || 200
  const logoHeight = mediaLogo.height || mediaLogo.sizes?.medium?.height || 100
  const logoAlt = logo.alt || mediaLogo.alt || ''

  const content = (
    <div className={cn('relative w-[10rem]', size)}>
      <Image
        src={logoUrl}
        alt={logoAlt}
        width={logoWidth}
        height={logoHeight}
        className={cn(
          'object-contain',
          enableGrayscale && 'filter grayscale hover:grayscale-0 transition-all duration-300'
        )}
      />
    </div>
  )

  if (logo.link) {
    return (
      <Link
        href={logo.link}
        className={cn(
          'relative flex items-center justify-center px-8',
          enableHover && 'transition-transform duration-300 hover:scale-110',
          'cursor-pointer'
        )}
      >
        {content}
      </Link>
    )
  }

  return (
    <div
      className={cn(
        'relative flex items-center justify-center px-8',
        enableHover && 'transition-transform duration-300 hover:scale-110'
      )}
    >
      {content}
    </div>
  )
} 