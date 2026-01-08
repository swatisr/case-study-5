'use client'

import { useEffect, useState } from 'react'

interface AboutMeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutMeModal({ isOpen, onClose }: AboutMeModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 700) // Match transition duration for smooth animation
  }

  if (!isOpen && !isVisible) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop with blur and green gradient overlay */}
      <div 
        className={`fixed inset-0 backdrop-blur-lg transition-opacity duration-700 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(18, 42, 28, 0.15) 0%, rgba(6, 26, 16, 0.20) 100%)'
        }}
        onClick={handleClose}
      />

      {/* Modal Container - Centered, 90% width (75vw + 35%), doesn't reach top, whole modal scrolls */}
      <div className="relative min-h-screen flex items-start justify-center px-5 md:px-10 pt-20 md:pt-32 pb-20 pointer-events-none">
        <div 
          className={`w-[90vw] max-w-6xl bg-[#f7f7f7] rounded-lg transition-all duration-700 ease-out pointer-events-auto relative ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-full opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Icon - Top Right */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 hover:opacity-70 transition-opacity"
            aria-label="Close modal"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[hsl(var(--primary-foreground))]"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Content - No internal scroll, whole modal scrolls */}
          <div className="p-8 md:p-24 lg:p-40">
            <div className="max-w-[95%] md:max-w-[81%] pt-12 md:pt-16 space-y-12 md:space-y-20 lg:space-y-32">
                {/* Hero Section */}
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--primary-foreground))]">
                      Swati Srivastava
                    </h1>
                    <p className="text-sm md:text-base text-[hsl(0_0%_40%)] font-light">
                      Lead UX Designer at Otovo ASA, Norway
                    </p>
                  </div>
                  <p className="text-base md:text-xl leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                    For the last 14 plus years, I have worked as a product designer across consulting and in house roles. My work has focused on shipping B2B operations tools at scale, including products used across European markets and complex internal systems. I cycle between understanding the problem, making decisions visible through design, and testing through implementation until the solution holds up in day to day use. What motivates me is designing systems that quietly enable others to do their best work, there when needed, invisible when not.
                  </p>
                  
                  {/* Links */}
                  <div className="flex gap-8">
                    <a 
                      href="#" 
                      className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] hover:text-[hsl(var(--primary-foreground))] transition-colors font-light"
                    >
                      LINKED IN
                    </a>
                    <a 
                      href="#" 
                      className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] hover:text-[hsl(var(--primary-foreground))] transition-colors font-light"
                    >
                      COPY EMAIL
                    </a>
                  </div>
                </div>

                {/* WHAT I CAN HELP WITH Section */}
                <div className="space-y-12">
                  <h2 className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light">
                    WHAT I CAN HELP WITH
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                        Product & service design
                      </div>
                      <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                        Designing clear, durable product and service experiences across consumer and business-facing contexts.
                      </div>
                    </div>
                    <div className="h-px bg-black/10"></div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                        Product & service design
                      </div>
                      <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                        Designing clear, durable product and service experiences across consumer and business-facing contexts.
                      </div>
                    </div>
                    <div className="h-px bg-black/10"></div>

                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                        Product & service design
                      </div>
                      <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                        Designing clear, durable product and service experiences across consumer and business-facing contexts.
                      </div>
                    </div>
                    <div className="h-px bg-black/10"></div>

                    {/* Row 4 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                        Product & service design
                      </div>
                      <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                        Designing clear, durable product and service experiences across consumer and business-facing contexts.
                      </div>
                    </div>
                  </div>
                </div>

                {/* EXPERIENCE Section - Hidden for now */}
                {false && (
                  <div className="space-y-12">
                    <h2 className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light">
                      EXPERIENCE
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Row 1 */}
                      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                          PRODUCT & SERVICE DESIGN
                        </div>
                        <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                          Designing clear, durable
                        </div>
                      </div>
                      <div className="h-px bg-black/10"></div>

                      {/* Row 2 */}
                      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                          PRODUCT & SERVICE DESIGN
                        </div>
                        <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                          Designing clear, durable
                        </div>
                      </div>
                      <div className="h-px bg-black/10"></div>

                      {/* Row 3 */}
                      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                          PRODUCT & SERVICE DESIGN
                        </div>
                        <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                          Designing clear, durable
                        </div>
                      </div>
                      <div className="h-px bg-black/10"></div>

                      {/* Row 4 */}
                      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                          PRODUCT & SERVICE DESIGN
                        </div>
                        <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                          Designing clear, durable
                        </div>
                      </div>
                      <div className="h-px bg-black/10"></div>

                      {/* Row 5 */}
                      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                          PRODUCT & SERVICE DESIGN
                        </div>
                        <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                          Designing clear, durable
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MY CURRENT FOCUS Section - Hidden for now */}
                {false && (
                  <div className="space-y-8">
                    <h2 className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light">
                      MY CURRENT FOCUS
                    </h2>
                    
                    <p className="text-base md:text-xl leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                      For the last 14 plus years, I have worked as a product designer across consulting and in house roles. My work has focused on shipping B2B operations tools at scale, including products used across European markets and complex internal systems. I cycle between understanding the problem, making decisions visible through design, and testing through implementation until the solution holds up in day to day use. What motivates me is designing systems that quietly enable others to do their best work, there when needed, invisible when not.
                    </p>
                  </div>
                )}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
