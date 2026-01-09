'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ShowMoreButton from '@/components/ShowMoreButton'
import AboutMeModal from '@/components/AboutMeModal'
import Toast from '@/components/Toast'

export default function ProjectOverview() {
  const [hoveredRectangle, setHoveredRectangle] = useState<number | null>(null)
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuAnimating, setIsMenuAnimating] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [imageKey, setImageKey] = useState(Date.now())
  const [showToast, setShowToast] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem('portfolio-auth')
    if (auth !== 'authenticated') {
      router.push('/')
    } else {
      setIsAuthenticated(true)
      // Fade in with slight delay (100ms after home page fade out starts)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const delay = prefersReducedMotion ? 0 : 100
      setTimeout(() => {
        setIsVisible(true)
      }, delay)
    }
  }, [router])

  // Track previous pathname to detect navigation back
  const prevPathnameRef = useRef<string | null>(null)

  // Force image reload when navigating back to this page
  useEffect(() => {
    // Check if we navigated from a project detail page back to overview
    const prevPath = prevPathnameRef.current
    const isNavigatingBack = prevPath && prevPath.startsWith('/project-overview/') && pathname === '/project-overview'
    
    prevPathnameRef.current = pathname

    if (pathname === '/project-overview') {
      if (isNavigatingBack) {
        // Force router refresh to clear Next.js cache
        router.refresh()
      }
      // Force reload immediately and again after a short delay
      setImageKey(Date.now())
      const timer = setTimeout(() => {
        setImageKey(Date.now())
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [pathname, router])

  // Also reload when component becomes visible
  useEffect(() => {
    if (pathname === '/project-overview' && isVisible) {
      const timer = setTimeout(() => {
        setImageKey(Date.now())
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [pathname, isVisible])

  // Show loading while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[hsl(var(--background))] flex items-center justify-center">
        <div className="text-[hsl(var(--muted-foreground))]">Loading...</div>
      </div>
    )
  }

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null
  }

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false
  const transitionDuration = prefersReducedMotion ? 0 : 600

  return (
    <div className="fixed inset-0 bg-[hsl(var(--background))]">
      <div 
        className={`h-screen overflow-y-scroll snap-y snap-mandatory transition-opacity ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isVisible 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
        style={{ transitionDuration: `${transitionDuration}ms` }}
      >
      {/* Sticky Navbar */}
      <nav className={`fixed top-4 bottom-auto md:top-auto md:bottom-8 left-0 right-0 bg-transparent flex justify-end items-start md:items-center py-4 z-50 px-5 md:px-10 lg:px-40 md:transition-opacity md:duration-500 ${hoveredRectangle ? 'md:opacity-20' : 'md:opacity-100'}`}>
        {/* Desktop: Full Navigation */}
        <div className="hidden md:flex gap-8">
          <a 
            href="https://www.linkedin.com/in/swatisr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]"
          >
            LINKEDIN
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
            className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]"
          >
            COPY EMAIL
          </button>
          <button 
            onClick={() => setIsAboutMeOpen(true)}
            className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]"
          >
            ABOUT ME
          </button>
        </div>
      </nav>

      {/* Show More Button - appears when last section is visible */}
      <ShowMoreButton hoveredRectangle={hoveredRectangle} />

      {/* Section 1 */}
      <section id="section-1" className={`h-screen snap-start snap-always flex items-center bg-[hsl(var(--background))] md:transition-opacity md:duration-500 ${hoveredRectangle && hoveredRectangle !== 1 ? 'md:opacity-20' : 'md:opacity-100'}`}>
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[14px] md:mt-32 mb-14">
            <div className="col-span-12">
              <Link href="/project-overview/installer-app" className="block cursor-pointer">
                <div 
                  className={`w-full aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9] bg-white rounded-lg pt-0 pr-8 md:pr-16 lg:pr-32 pb-8 md:pb-14 lg:pb-[70px] pl-0 relative overflow-hidden md:transition-transform md:duration-700 md:ease-out ${hoveredRectangle === 1 ? 'md:scale-[1.01]' : ''}`}
                  onMouseEnter={() => setHoveredRectangle(1)}
                  onMouseLeave={() => setHoveredRectangle(null)}
                >
                <div key={`image-wrapper-${imageKey}`} className="absolute inset-0 w-full h-full">
                  <Image
                    src="/image/installerapp4.png"
                    alt="Installer App"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    className="object-cover object-[35%_center]"
                    priority
                    quality={85}
                    onLoadingComplete={() => {
                      console.log('Image loaded successfully')
                    }}
                    onError={(e) => {
                      console.error('Image error:', e)
                    }}
                  />
                </div>
                
                {/* Text Content - Positioned in columns 9-12 - Desktop Only */}
                {/* First text block - Top Left and Right */}
                <div className="hidden md:block absolute top-0 left-0 right-0 z-10 pointer-events-none">
                  <div className="w-full flex justify-between items-start px-8 pt-8">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white">
                      B2B / Operations
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white">
                      Lead UX Designer
                    </div>
                  </div>
                </div>
                
                {/* Logo and second text block - Centered - Desktop Only */}
                <div className="hidden md:flex absolute inset-0 items-center z-10 pointer-events-none">
                  <div className="w-full h-full grid grid-cols-12">
                    <div className="col-start-9 col-span-4 flex flex-col justify-center px-8">
                      {/* Logo */}
                      <div className="mb-2">
                        <Image
                          src="/image/Otovo_logo_pale lilac_RGB 1 1.svg"
                          alt="Otovo Logo"
                          width={60}
                          height={20}
                          className="h-5"
                          style={{ width: 'auto', height: '20px', aspectRatio: '120/40' }}
                        />
                      </div>
                      
                      {/* Second text block */}
                      <div className="text-[16px] font-light text-white">
                        <div className="font-semibold">On Location project tracking</div>
                        <div className="font-light">18% faster project approvals</div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </Link>
              
              {/* Mobile: Logo and text below rectangle - Top aligned */}
              <div className="md:hidden mt-4 flex items-start justify-between w-full">
                {/* Logo - Left aligned with image */}
                <div>
                  <Image
                    src="/image/Otovo_logo_pale lilac_RGB 1 1.svg"
                    alt="Otovo Logo"
                    width={32}
                    height={11}
                    className="h-2"
                    style={{ width: 'auto', height: '8px', aspectRatio: '64/22' }}
                  />
                </div>
                
                {/* Text - Right aligned */}
                <div className="text-right text-sm font-light text-[hsl(var(--foreground))]">
                  <div className="font-semibold">On Location project tracking</div>
                  <div className="font-light">18% faster project approvals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className={`h-screen snap-start snap-always flex items-center bg-[hsl(var(--background))] md:transition-opacity md:duration-500 ${hoveredRectangle && hoveredRectangle !== 2 ? 'md:opacity-20' : 'md:opacity-100'}`}>
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[14px] md:mt-32 mb-14">
            <div className="col-span-12">
              <Link href="/project-overview/merchant-app" className="block cursor-pointer">
                <div 
                  className={`w-full aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9] deep-green-bg rounded-lg pt-0 pr-8 md:pr-16 lg:pr-32 pb-8 md:pb-14 lg:pb-[70px] pl-0 relative overflow-hidden md:transition-transform md:duration-700 md:ease-out ${hoveredRectangle === 2 ? 'md:scale-[1.01]' : ''}`}
                  onMouseEnter={() => setHoveredRectangle(2)}
                  onMouseLeave={() => setHoveredRectangle(null)}
                >
                {/* Top text - FINTECH / PAYMENTS and 2019 • SR. UX DESIGNER - Desktop Only */}
                <div className="hidden md:flex absolute top-0 right-0 z-10 flex-col items-end px-4 md:px-8 pt-4 md:pt-8 pointer-events-none">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] font-light">
                    SR. UX DESIGNER
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] font-light">
                    Fintech / Payments
                  </div>
                </div>
                
                {/* Settle Logo - Top left, horizontally middle-aligned with top-right text - Desktop Only */}
                <div className="hidden md:flex absolute top-0 left-0 z-10 flex-col items-start px-4 md:px-8 pt-4 md:pt-8 pointer-events-none">
                  <Image
                    src="/image/Settle.svg"
                    alt="Settle Logo"
                    width={58}
                    height={20}
                    className="brightness-0 invert"
                    style={{ width: '58px', height: 'auto', aspectRatio: '58/20' }}
                  />
                  <div className="text-white text-[16px] font-light mt-1">
                    <div className="font-semibold">On Location project tracking</div>
                    <div className="font-light">Integrated Merchant payments in P2P</div>
                  </div>
                </div>
                
                {/* Image wrapper - to position image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-bottom-12 md:top-auto md:translate-y-0 w-[90.3%] md:w-[70%]">
                  {/* Image - Mobile: settle pic 3 */}
                  <div className="md:hidden overflow-hidden" style={{ maxHeight: '100%' }}>
                    <Image
                      src="/image/settle pic 3.png"
                      alt="Settle"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                  {/* Image - Desktop: settleappcombo */}
                  <div className="hidden md:block overflow-hidden" style={{ maxHeight: '100%' }}>
                    <Image
                      src="/image/settleappcombo.png"
                      alt="Settle"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                </div>
              </Link>
              
              {/* Mobile: Logo and text below rectangle - Middle aligned */}
              <div className="md:hidden mt-4 flex items-center justify-between w-full">
                {/* Logo - Left aligned with image */}
                <div>
                  <Image
                    src="/image/Settle.svg"
                    alt="Settle Logo"
                    width={64}
                    height={22}
                    className="brightness-0 invert"
                    style={{ width: 'auto', height: '22px', aspectRatio: '64/22' }}
                  />
                </div>
                
                {/* Text - Right aligned */}
                <div className="text-right text-sm font-light text-[hsl(var(--foreground))]">
                  <div className="font-semibold">On Location project tracking</div>
                  <div className="font-light">Integrated Merchant payments in P2P</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-3" className={`h-screen snap-start snap-always flex items-center bg-[hsl(var(--background))] md:transition-opacity md:duration-500 ${hoveredRectangle && hoveredRectangle !== 3 ? 'md:opacity-20' : 'md:opacity-100'}`}>
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[14px] md:mt-32 mb-14">
            <div className="col-span-12">
              <Link href="/project-overview/jobs" className="block cursor-pointer">
                <div 
                  className={`w-full aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9] bg-[#121212] rounded-lg pt-0 pr-8 md:pr-16 lg:pr-32 pb-8 md:pb-14 lg:pb-[70px] pl-0 relative overflow-hidden md:transition-transform md:duration-700 md:ease-out ${hoveredRectangle === 3 ? 'md:scale-[1.01]' : ''}`}
                  onMouseEnter={() => setHoveredRectangle(3)}
                  onMouseLeave={() => setHoveredRectangle(null)}
                >
                {/* Video - Mobile: Centered and middle-aligned */}
                <div className="md:hidden absolute inset-0 flex items-center justify-center z-10 px-4 pointer-events-none">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-full max-w-sm h-auto rounded-lg shadow-2xl"
                  >
                    <source src="/video/jobs2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Text Content - Positioned in columns 1-4 - Desktop Only */}
                {/* First text block - Top Left and Right */}
                <div className="hidden md:block absolute top-0 left-0 right-0 z-10 pointer-events-none">
                  <div className="w-full flex justify-between items-start px-8 pt-8">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white">
                      B2B / Operations
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white">
                      Lead UX DESIGNER
                    </div>
                  </div>
                </div>
                
                {/* Logo and second text block - Left side - Desktop Only */}
                <div className="hidden md:flex absolute inset-0 z-10 pointer-events-none">
                  <div className="w-full h-full grid grid-cols-12">
                    <div className="col-start-1 col-span-4 flex flex-col justify-end px-8 pb-8">
                      {/* Logo */}
                      <div className="mb-2">
                        <Image
                          src="/image/Otovo_logo_pale lilac_RGB 1 1.svg"
                          alt="Otovo Logo"
                          width={60}
                          height={20}
                          className="h-5"
                          style={{ width: 'auto', height: '20px', aspectRatio: '120/40' }}
                        />
                      </div>
                      
                      {/* Second text block */}
                      <div className="text-[16px] font-light text-white">
                        <div className="font-semibold">Solar maintenance and invoicing</div>
                        <div className="font-light">900+ jobs invoiced</div>
                      </div>
                    </div>
                    
                    {/* Video - 8 column span (doubled size), auto-playing - Desktop Only */}
                    <div className="col-start-5 col-span-8 flex items-end justify-center px-4 pb-8">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="w-full h-auto rounded-lg shadow-2xl"
                      >
                        <source src="/video/jobs2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                </div>
              </Link>
              
              {/* Mobile: Logo and text below rectangle - Top aligned */}
              <div className="md:hidden mt-4 flex items-start justify-between w-full">
                {/* Logo - Left aligned with image */}
                <div>
                  <Image
                    src="/image/Otovo_logo_pale lilac_RGB 1 1.svg"
                    alt="Otovo Logo"
                    width={32}
                    height={11}
                    className="h-2"
                    style={{ width: 'auto', height: '8px', aspectRatio: '64/22' }}
                  />
                </div>
                
                {/* Text - Right aligned */}
                <div className="text-right text-sm font-light text-[hsl(var(--foreground))]">
                  <div className="font-semibold">Solar maintenance and invoicing</div>
                  <div className="font-light">900+ jobs invoiced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className={`h-screen snap-start snap-always flex items-center bg-[hsl(var(--background))] md:transition-opacity md:duration-500 ${hoveredRectangle && hoveredRectangle !== 4 ? 'md:opacity-20' : 'md:opacity-100'}`}>
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[14px] md:mt-32 mb-14">
            <div className="col-span-12">
              <Link href="/project-overview/customersupport" className="block cursor-pointer">
                <div 
                  className={`w-full aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9] bg-white rounded-lg pt-0 pr-8 md:pr-16 lg:pr-32 pb-8 md:pb-14 lg:pb-[70px] pl-0 relative overflow-hidden md:transition-transform md:duration-700 md:ease-out ${hoveredRectangle === 4 ? 'md:scale-[1.01]' : ''}`}
                  onMouseEnter={() => setHoveredRectangle(4)}
                  onMouseLeave={() => setHoveredRectangle(null)}
                >
                <Image
                  src="/image/customerSupportkitchen 2.png"
                  alt="Customer Support Kitchen"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  className="object-cover"
                  priority
                />
                
                {/* Vignette overlay for text visibility */}
                <div className="absolute inset-0 z-0 pointer-events-none" style={{
                  background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
                }}></div>
                
                {/* Text Content - Positioned in columns 1-4 - Desktop Only */}
                {/* First text block - Top Left and Right */}
                <div className="hidden md:block absolute top-0 left-0 right-0 z-10 pointer-events-none">
                  <div className="w-full flex justify-between items-start px-8 pt-8">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white">
                      B2C / Support
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white">
                      Lead UX DESIGNER
                    </div>
                  </div>
                </div>
                
                {/* Logo and second text block - Left side - Desktop Only */}
                <div className="hidden md:flex absolute inset-0 items-center z-10 pointer-events-none">
                  <div className="w-full h-full grid grid-cols-12">
                    <div className="col-start-1 col-span-4 flex flex-col justify-center px-8">
                      {/* Logo */}
                      <div className="mb-2">
                        <Image
                          src="/image/Otovo_logo_pale lilac_RGB 1 1.svg"
                          alt="Otovo Logo"
                          width={60}
                          height={20}
                          className="h-5"
                          style={{ width: 'auto', height: '20px', aspectRatio: '120/40' }}
                        />
                      </div>
                      
                      {/* Second text block */}
                      <div className="text-[16px] font-light text-white">
                        <div className="font-semibold">Installation tracking and support</div>
                        <div className="font-light">70% reduction in tickets</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
              
              {/* Mobile: Logo and text below rectangle - Top aligned */}
              <div className="md:hidden mt-4 flex items-start justify-between w-full">
                {/* Logo - Left aligned with image */}
                <div>
                  <Image
                    src="/image/Otovo_logo_pale lilac_RGB 1 1.svg"
                    alt="Otovo Logo"
                    width={32}
                    height={11}
                    className="h-2"
                    style={{ width: 'auto', height: '8px', aspectRatio: '64/22' }}
                  />
                </div>
                
                {/* Text - Right aligned */}
                <div className="text-right text-sm font-light text-white">
                  <div className="font-semibold">Installation tracking and support</div>
                  <div className="font-light">70% reduction in tickets</div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </section>

      {/* About Me Modal */}
      <AboutMeModal isOpen={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} />

      {/* Mobile Floating Button */}
      <button
        onClick={() => {
          if (!isMobileMenuOpen) {
            setIsMobileMenuOpen(true)
            setTimeout(() => setIsMenuAnimating(true), 10)
          } else {
            setIsMenuAnimating(false)
            setTimeout(() => setIsMobileMenuOpen(false), 300)
          }
        }}
        className={`md:hidden fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-[hsl(var(--secondary))] text-white hover:shadow-[0_6px_25px_rgba(0,0,0,0.4)] active:scale-95 transition-all duration-200 flex items-center justify-center ${
          isMobileMenuOpen ? '' : 'shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
        }`}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            style={{ color: 'white' }}
          >
            <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop with blur and green gradient overlay */}
          <div
            className="md:hidden fixed inset-0 z-[60] backdrop-blur-lg transition-opacity duration-700 ease-out"
            style={{
              background: 'linear-gradient(135deg, rgba(18, 42, 28, 0.15) 0%, rgba(6, 26, 16, 0.20) 100%)'
            }}
            onClick={() => {
              setIsMenuAnimating(false)
              setTimeout(() => setIsMobileMenuOpen(false), 300)
            }}
          />
          
          {/* Menu Panel */}
          <div
            className={`md:hidden fixed bottom-0 left-0 right-0 z-[70] bg-[#f7f7f7] rounded-t-3xl transition-transform duration-300 ease-out ${
              isMenuAnimating ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ maxHeight: '75vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 pt-8 pb-6">
              {/* Menu Items */}
              <div className="flex flex-col gap-6 mb-8">
                <button
                  onClick={() => {
                    setIsAboutMeOpen(true)
                    setIsMenuAnimating(false)
                    setTimeout(() => setIsMobileMenuOpen(false), 300)
                  }}
                  className="text-left text-[hsl(var(--primary-foreground))] text-sm font-light"
                >
                  About me
                </button>
                <a
                  href="https://www.linkedin.com/in/swatisr"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setIsMenuAnimating(false)
                    setTimeout(() => setIsMobileMenuOpen(false), 300)
                  }}
                  className="text-left text-[hsl(var(--primary-foreground))] text-sm font-light"
                >
                  Linked In
                </a>
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText('iswatisrivastava@gmail.com')
                      setShowToast(true)
                      setIsMenuAnimating(false)
                      setTimeout(() => setIsMobileMenuOpen(false), 300)
                    } catch (err) {
                      console.error('Failed to copy email:', err)
                    }
                  }}
                  className="text-left text-[hsl(var(--primary-foreground))] text-sm font-light px-4 py-2 rounded-none"
                >
                  Copy email
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Toast Notification */}
      <Toast
        message="iswatisrivastava@gmail.com copied"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      </div>
    </div>
  )
}

