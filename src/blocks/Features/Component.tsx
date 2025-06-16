import type { FeaturesBlock as FeaturesBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import React from 'react'
import Image from 'next/image'

type Props = {
  className?: string
} & FeaturesBlockProps

const getIconComponent = (iconName: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    star: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    check: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  }

  return icons[iconName] || icons.star
}

export const FeaturesBlock: React.FC<Props> = ({
  className,
  title,
  description,
  features,
  layout = 'grid',
  columns = '3',
  theme = 'light',
  enableAnimation = true,
}) => {
  const gridCols = {
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  const themeClasses = {
    light: 'bg-white text-gray-900',
    dark: 'bg-[#121C7B] text-white',
    gradient: 'bg-gradient-to-br from-[#121C7B] to-[#23278D] text-white',
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjFDMUIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>

      <section className={cn('relative z-10 py-20', themeClasses[theme])}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {title?.split(' ').map((word, index, array) => (
                <span key={index}>
                  {index === array.length - 1 ? (
                    <span className="bg-gradient-to-r from-[#121C7B] to-[#23278D] bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    <span className={theme === 'light' ? 'text-[#121C7B]' : 'text-white'}>
                      {word}
                    </span>
                  )}
                  {index < array.length - 1 && ' '}
                </span>
              ))}
            </h2>
            {description && (
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          <div
            className={cn(
              'grid gap-8',
              layout === 'grid' && gridCols[columns],
              layout === 'list' && 'grid-cols-1',
              layout === 'cards' && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            )}
          >
            {features?.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  'p-6 rounded-xl transition-all duration-300 relative group',
                  layout === 'cards' && 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20',
                  layout === 'list' && 'flex items-start gap-4',
                  enableAnimation && 'hover:scale-105'
                )}
              >
                {/* Floating Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-r from-[#121C7B]/10 to-[#23278D]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {feature.icon && (
                  <div className={cn(
                    'mb-4',
                    layout === 'list' && 'flex-shrink-0'
                  )}>
                    <div className={cn(
                      'w-12 h-12 rounded-lg flex items-center justify-center',
                      theme === 'light' ? 'bg-[#121C7B]/10' : 'bg-white/10'
                    )}>
                      {getIconComponent(feature.icon)}
                    </div>
                  </div>
                )}

                {feature.image && typeof feature.image !== 'string' && (
                  <div className="mb-4 relative aspect-video rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#121C7B]/20 via-transparent to-[#23278D]/20 z-10"></div>
                    <Image
                      src={feature.image.url}
                      alt={feature.image.alt || feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 