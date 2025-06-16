import type { HeroBannerBlock as HeroBannerBlockProps } from 'src/payload-types'
import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'

type Props = {
  className?: string
} & HeroBannerBlockProps

export const HeroBannerBlock: React.FC<Props> = ({ 
  className, 
  headline, 
  subheadline,
  content,
  ctaButtons,
  backgroundImage,
  backgroundVideo,
  overlay,
  alignment = 'center',
  theme = 'default',
  enableParallax = false
}) => {
  return (
    <div className={cn(' relative overflow-hidden', className)}>
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMjFDMUIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>

      <section className="relative z-10 pt-20 lg:pt-32 pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2 lg:gap-20">
            {/* Content Section */}
            <div className="relative">
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-[#121C7B]/20 to-[#23278D]/20 border border-[#23278D]/30 backdrop-blur-sm">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-[#121C7B] to-[#23278D] text-white text-xs font-bold">
                  #1
                </div>
                <span className="text-[#121C7B] text-sm font-medium">
                  {subheadline || "Premium Solution"}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-5xl font-bold text-white/90 leading-tight mb-6">
                {headline ? (
                  <>
                    {headline.split(' ').map((word, index, array) => (
                      <span key={index}>
                        {index === array.length - 1 ? (
                          <span className="bg-gradient-to-r from-[#121C7B] to-[#23278D] bg-clip-text text-transparent">
                            {word}
                          </span>
                        ) : (
                          <span className='text-red-700'>{word}</span>
                          
                        )}
                        {index < array.length - 1 && ' '}
                      </span>
                    ))}
                  </>
                ) : (
                  <>
                    Transform Your 
                    <span className="bg-gradient-to-r from-[#121C7B] to-[#23278D] bg-clip-text text-transparent">
                      {' '}Vision
                    </span>
                  </>
                )}
              </h1>

              {/* Description */}
              {content && (
                <div className="text-black/80 text-lg font-semibold leading-relaxed mb-10 max-w-lg">
                  <RichText data={content} enableGutter={false} enableProse={true} />
                </div>
              )}

              {/* CTA Buttons */}
              {ctaButtons && ctaButtons.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {ctaButtons.map((button, index) => (
                    <button
                      key={index}
                      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        index === 0
                          ? 'bg-gradient-to-r from-[#121C7B] to-[#23278D] text-white hover:shadow-lg hover:shadow-[#121C7B]/25'
                          : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
                      }`}
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Floating Elements */}
              {/* <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-r from-[#121C7B]/20 to-[#23278D]/20 blur-xl"></div> */}
              <div className="absolute top-1/2 -left-16 w-32 h-32 rounded-full bg-gradient-to-r from-[#23278D]/10 to-[#121C7B]/10 blur-2xl"></div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#000C24]/50">
                {/* Gradient Overlay for Image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#121C7B]/20 via-transparent to-[#23278D]/20 z-10"></div>
                
                {backgroundImage && typeof backgroundImage !== 'string' && backgroundImage.url ? (
                  <Image
                    src={backgroundImage.url}
                    alt={backgroundImage.alt || ''}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-[600px] bg-gradient-to-br from-[#121C7B] to-[#23278D] flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-white/60">Your hero image here</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Stats Cards */}
              {/* <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#121C7B] to-[#23278D] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="font-bold text-lg">+247%</div>
                    <div className="text-sm text-white/60">Growth rate</div>
                  </div>
                </div>
              </div> */}

              <div className="absolute -top-6 -right-6 bg-black/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#23278D] to-[#121C7B] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    <div className="font-bold text-lg">1000+</div>
                    <div className="text-sm text-black/60">Projects</div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-r from-[#121C7B]/10 to-[#23278D]/10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Decoration */}
      {/* <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path 
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V120Z" 
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#121C7B" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#23278D" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="#121C7B" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </div>
  )
}