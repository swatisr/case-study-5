'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Toast from '@/components/Toast'

interface AboutMeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutMeModal({ isOpen, onClose }: AboutMeModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showToast, setShowToast] = useState(false)

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
          <div className="p-[1.805rem] md:p-[5.7rem] lg:p-[9.5rem] pb-20 md:pb-24 lg:pb-32">
            <div className="max-w-[95%] md:max-w-[81%] pt-12 md:pt-16 space-y-24 md:space-y-40 lg:space-y-64">
                {/* Hero Section */}
                <div className="space-y-8">
                  {/* Profile Picture - Above Name */}
                  <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-lg overflow-hidden">
                    <Image
                      src="/image/displayPic.png"
                      alt="Swati Srivastava"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 96px, 128px"
                    />
                  </div>
                  
                  {/* Name and Title - Left Aligned */}
                  <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--primary-foreground))]">
                      Swati Srivastava
                    </h1>
                    <p className="text-sm md:text-base text-[hsl(0_0%_65%)] font-semibold">
                      Lead UX Designer at Otovo ASA, Norway
                    </p>
                  </div>
                  
                  {/* Three Paragraphs */}
                  <div className="space-y-6">
                    <p className="text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                      For the last 14+ years, I have worked as a product designer across consulting and in-house roles. My work has focused on shipping B2B operations tools at scale, including products used across European markets and complex expert systems.
                    </p>
                    
                    <p className="text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                      I have worked as an IC designer and mentor, with a high degree of autonomy and close collaboration. In my six years at Otovo and in prior roles, I have led feature rollouts, mentored a small team of designers, and currently serve as part of product leadership as the design lead.
                    </p>
                    
                    <p className="text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                      I strongly prefer working with small, focused teams and going deep on one product, shaping and shipping its best version.
                    </p>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-8">
                    <a 
                      href="https://www.linkedin.com/in/swatisr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] hover:text-[hsl(var(--primary-foreground))] transition-colors font-light"
                    >
                      LINKED IN
                    </a>
                    <button 
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText('iswatisrivastava@gmail.com')
                          setShowToast(true)
                        } catch (err) {
                          console.error('Failed to copy email:', err)
                        }
                      }}
                      className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] hover:text-[hsl(var(--primary-foreground))] transition-colors font-light"
                    >
                      COPY EMAIL
                    </button>
                  </div>
                </div>

                {/* WHAT I CAN HELP WITH Section */}
                <div className="space-y-6 -mt-4 md:-mt-6 lg:-mt-8">
                  <h2 className="text-[1.75rem] md:text-[2rem] text-[hsl(0_0%_15%)] font-semibold">
                    What I can help with
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                        Product & service design
                      </div>
                      <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                        Designing product and service experiences across B2B and B2C in complex, constrained environments.
                      </div>
                    </div>
                    <div className="h-px bg-black/10"></div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                        Zero to one product UX
                      </div>
                      <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                        Taking new product ideas to first release by defining workflows, user flows, and core screens.
                      </div>
                    </div>
                    <div className="h-px bg-black/10"></div>

                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="w-full md:w-1/3 text-[11px] uppercase tracking-[0.1em] text-[hsl(0_0%_40%)] font-light">
                        Design leadership & mentorship
                      </div>
                      <div className="w-full md:flex-1 text-sm md:text-base leading-[1.7] font-light text-[hsl(var(--primary-foreground))]">
                        Leading design through critique and mentorship. Building lightweight design operations, reviews, and collaboration routines that support delivery.
                      </div>
                    </div>
                  </div>
                </div>

                {/* EXPERIENCE Section */}
                <div className="space-y-6">
                  <h2 className="text-[1.75rem] md:text-[2rem] text-[hsl(0_0%_15%)] font-semibold">
                    Experience
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Entry 1 - OTOVO ASA */}
                    <div className="space-y-2">
                      <div className="inline-block bg-black text-white px-3 py-1 text-[9px] uppercase tracking-[0.1em] font-light rounded-[2px]">
                        OTOVO ASA, Norway
                      </div>
                      <div className="space-y-1 pl-0">
                        <div className="text-sm md:text-base font-semibold text-[hsl(var(--primary-foreground))]">
                          Lead Designer, Product
                          <span className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light ml-2">2022-Present</span>
                        </div>
                        <div className="text-sm md:text-base font-semibold text-[hsl(var(--primary-foreground))]">
                          Designer, B2B and Operations
                          <span className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light ml-2">2020-22</span>
                        </div>
                      </div>
                    </div>

                    {/* Entry 2 - SETTLE AS */}
                    <div className="space-y-2">
                      <div className="inline-block bg-black text-white px-3 py-1 text-[9px] uppercase tracking-[0.1em] font-light rounded-[2px]">
                        SETTLE AS, Norway
                      </div>
                      <div className="space-y-1 pl-0">
                        <div className="text-sm md:text-base font-semibold text-[hsl(var(--primary-foreground))]">
                          Senior UX Designer
                          <span className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light ml-2">2019-20</span>
                        </div>
                      </div>
                    </div>

                    {/* Entry 3 - UNIVERSITY OF OSLO */}
                    <div className="space-y-2">
                      <div className="inline-block bg-black text-white px-3 py-1 text-[9px] uppercase tracking-[0.1em] font-light rounded-[2px]">
                        UNIVERSITY OF OSLO, Norway
                      </div>
                      <div className="space-y-1 pl-0">
                        <div className="text-sm md:text-base font-semibold text-[hsl(var(--primary-foreground))]">
                          Service Designer and Researcher
                          <span className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light ml-2">2015-19</span>
                        </div>
                      </div>
                    </div>

                    {/* Entry 4 - GLOBANT */}
                    <div className="space-y-2">
                      <div className="inline-block bg-black text-white px-3 py-1 text-[9px] uppercase tracking-[0.1em] font-light rounded-[2px]">
                        GLOBANT, India
                      </div>
                      <div className="space-y-1 pl-0">
                        <div className="text-sm md:text-base font-semibold text-[hsl(var(--primary-foreground))]">
                          Sr. User Experience Designer
                          <span className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light ml-2">2014</span>
                        </div>
                        <div className="text-sm md:text-base font-semibold text-[hsl(var(--primary-foreground))]">
                          User Experience Designer
                          <span className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light ml-2">2011-14</span>
                        </div>
                      </div>
                    </div>

                    {/* Entry 5 - HSBC */}
                    <div className="space-y-2">
                      <div className="inline-block bg-black text-white px-3 py-1 text-[9px] uppercase tracking-[0.1em] font-light rounded-[2px]">
                        HSBC, India
                      </div>
                      <div className="space-y-1 pl-0">
                        <div className="text-sm md:text-base font-semibold text-[hsl(var(--primary-foreground))]">
                          Software Engineer
                          <span className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light ml-2">2009-10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EDUCATION Section */}
                <div className="space-y-12">
                  <div className="space-y-2">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light">
                      M. Des. Interaction Design, 2009-11
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light">
                      B.E. Computer Science, 2004-08
                    </div>
                  </div>
                </div>

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

          {/* Close Button - Bottom Left (Mobile Only) */}
          <button
            onClick={handleClose}
            className="md:hidden absolute bottom-4 left-4 z-10 px-4 py-2 text-base font-light text-[hsl(var(--primary-foreground))] hover:opacity-70 transition-opacity underline"
            aria-label="Close modal"
          >
            Close
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message="iswatisrivastava@gmail.com copied"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  )
}
