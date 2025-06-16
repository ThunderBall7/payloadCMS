import type { HeroBanner1Block as HeroBanner1BlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & HeroBanner1BlockProps

type Theme = 'light' | 'dark' | 'gradient'

export const HeroBanner1Block: React.FC<Props> = ({
  className,
  title,
  description,
  media,
  theme = 'light',
  enableAnimation = true,
}) => {
  const themeClasses: Record<Theme, string> = {
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

      <section className={cn('relative z-10 py-20 mx-auto', themeClasses[theme as Theme])}>
        <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold leading-tight mx-auto text-center mb-12">
                {title?.split(' ').map((word: string, index: number, array: string[]) => (
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
              </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title and Description */}
            <div className={cn(
              'space-y-8',
              enableAnimation && 'animate-fade-in-up'
            )}>
              
              
              {description && (
                <div className="prose prose-lg max-w-none">
                  <RichText data={description} />
                </div>
              )}
            </div>

            {/* Right Column - Media */}
            <div className={cn(
              'relative',
              enableAnimation && 'animate-fade-in-up animation-delay-200'
            )}>
              {media?.type === 'image' && media.image && typeof media.image !== 'string' && (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#121C7B]/20 via-transparent to-[#23278D]/20 z-10"></div>
                  <Image
                    src={media.image.url || ''}
                    alt={media.image.alt || title || ''}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {media?.type === 'video' && media.video && typeof media.video !== 'string' && (
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    src={media.video.url || ''}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Floating Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-r from-[#121C7B]/10 to-[#23278D]/10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 