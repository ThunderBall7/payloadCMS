import React from 'react'
import { cn } from '@/utilities/ui'

type Speed = 'slow' | 'medium' | 'fast'
type Direction = 'left' | 'right'
type FontSize = 'small' | 'medium' | 'large' | 'xlarge'
type Padding = 'small' | 'medium' | 'large'

interface MarqueeBlockProps {
  text: string
  speed?: Speed
  direction?: Direction
  backgroundColor?: string
  textColor?: string
  fontSize?: FontSize
  padding?: Padding
  repeat?: number
}

type Props = {
  className?: string
} & MarqueeBlockProps

export const MarqueeBlock: React.FC<Props> = ({
  className,
  text,
  speed = 'medium',
  direction = 'left',
  backgroundColor = '#ffffff',
  textColor = '#000000',
  fontSize = 'medium',
  padding = 'medium',
  repeat = 3,
}) => {
  const speedClasses: Record<Speed, string> = {
    slow: 'animate-marquee-slow',
    medium: 'animate-marquee-medium',
    fast: 'animate-marquee-fast',
  }

  const fontSizeClasses: Record<FontSize, string> = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl',
  }

  const paddingClasses: Record<Padding, string> = {
    small: 'py-2',
    medium: 'py-4',
    large: 'py-6',
  }

  return (
    <div 
      className={cn(
        'w-full overflow-hidden whitespace-nowrap relative',
        className
      )}
      style={{ backgroundColor }}
    >
      <div className="flex w-max">
        {/* First set of items */}
        <div className={cn(
          'flex',
          direction === 'right' ? 'animate-marquee-reverse' : speedClasses[speed]
        )}>
          {Array.from({ length: repeat }).map((_, index) => (
            <div
              key={`first-${index}`}
              className={cn(
                'inline-flex items-center',
                fontSizeClasses[fontSize],
                paddingClasses[padding]
              )}
              style={{ color: textColor }}
            >
              <span className="mx-4">{text}</span>
              {index < repeat - 1 && <span className="mx-4">•</span>}
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className={cn(
          'flex',
          direction === 'right' ? 'animate-marquee-reverse' : speedClasses[speed]
        )}>
          {Array.from({ length: repeat }).map((_, index) => (
            <div
              key={`second-${index}`}
              className={cn(
                'inline-flex items-center',
                fontSizeClasses[fontSize],
                paddingClasses[padding]
              )}
              style={{ color: textColor }}
            >
              <span className="mx-4">{text}</span>
              {index < repeat - 1 && <span className="mx-4">•</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 