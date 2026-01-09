'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Toast from '@/components/Toast'
import AboutMeModal from '@/components/AboutMeModal'

// Trail images from public/trail folder
const trailImages = [
  { src: '/trail/08.2.jpg', name: 'Project 1' },
  { src: '/trail/4_ScenesScreen_c_v4.jpg', name: 'Project 2' },
  { src: '/trail/casestudy02low.jpg', name: 'Project 3' },
  { src: '/trail/Desktop app 1.png', name: 'Desktop App' },
  { src: '/trail/header.jpg', name: 'Header' },
  { src: '/trail/hero.png', name: 'Hero' },
  { src: '/trail/HomeScreen_VisualDesign_31Oct-1.jpg', name: 'Home Screen' },
  { src: '/trail/image-17.jpg', name: 'Image 17' },
  { src: '/trail/Map 1.png', name: 'Map 1' },
  { src: '/trail/map.png', name: 'Map' },
  { src: '/trail/Mobile app 1.png', name: 'Mobile App 1' },
  { src: '/trail/mobile app 2.png', name: 'Mobile App 2' },
  { src: '/trail/mobile.png', name: 'Mobile' },
  { src: '/trail/Netscout.png', name: 'Netscout' },
  { src: '/trail/sf1.png', name: 'SF1' },
  { src: '/trail/snapshotPlatform .jpg', name: 'Snapshot Platform' },
  { src: '/trail/Transfer-Details-Success.jpg', name: 'Transfer Details' },
]


export default function Home() {
  const [password, setPassword] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState<'error' | 'success' | ''>('')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuAnimating, setIsMenuAnimating] = useState(false)
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)
  const router = useRouter()
  
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...trailImages, ...trailImages]

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])


  useEffect(() => {
    // Debounce validation - wait 600ms after user stops typing
    if (password.length === 0) {
      setStatusMessage('')
      setStatusType('')
      return
    }

    const timeoutId = setTimeout(() => {
      // User has stopped typing for 600ms, now validate
      if (password === 'monday') {
        // Correct password - show "Logging in..." for 800ms
        setStatusMessage('Logging in…')
        setStatusType('success')
        
        // After 800ms, start transition
        setTimeout(() => {
          setIsTransitioning(true)
          
          const transitionDuration = prefersReducedMotion ? 0 : 600
          
          setTimeout(() => {
            localStorage.setItem('portfolio-auth', 'authenticated')
            router.push('/project-overview')
          }, transitionDuration)
        }, 800)
      } else if (password.length > 0) {
        // Incorrect password - show error message
        setStatusType('error')
        setStatusMessage('') // Clear any success message
      }
    }, 600)
    
    return () => clearTimeout(timeoutId)
  }, [password, prefersReducedMotion, router])

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    // Clear status messages while typing
    setStatusMessage('')
    setStatusType('')
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('iswatisrivastava@gmail.com')
      setShowToast(true)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validation is handled in useEffect with debounce
  }

  const prefersReducedMotionValue = prefersReducedMotion ? 0 : 600
  const transitionClass = isTransitioning 
    ? `transition-opacity ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0`
    : `transition-opacity ease-[cubic-bezier(0.4,0,0.2,1)] opacity-100`

  return (
    <div 
      className={`h-screen overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))] relative ${transitionClass}`}
      style={{ transitionDuration: `${prefersReducedMotionValue}ms` }}
    >
      {/* Utility Links - Desktop: Aligned with input, Right Side | Mobile: Horizontal, close to input */}
      <nav 
        className="absolute top-1/2 translate-y-[calc(50vh-50%+180px)] md:translate-y-[calc(50vh-50%+200px)] lg:translate-y-[calc(50vh-50%+220px)] left-6 md:left-auto md:right-8 lg:right-12 xl:right-16 z-10"
      >
        <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 items-end">
          <button 
            onClick={handleCopyEmail}
            className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))] opacity-40 font-light relative inline-block group hover:opacity-70 transition-opacity duration-300 leading-none cursor-pointer"
          >
            COPY EMAIL
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[hsl(var(--muted-foreground))] group-hover:bg-white transition-all duration-300 ease-in-out group-hover:w-0 group-hover:origin-right"></span>
          </button>
          <a 
            href="https://www.linkedin.com/in/swatisr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))] opacity-40 font-light relative inline-block group hover:opacity-70 transition-opacity duration-300 leading-none"
          >
            LINKEDIN
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[hsl(var(--muted-foreground))] group-hover:bg-white transition-all duration-300 ease-in-out group-hover:w-0 group-hover:origin-right"></span>
          </a>
        </div>
      </nav>

      {/* Main Content - Vertically Centered, Left Aligned */}
      <div 
        className="absolute top-[calc(50%+50px)] md:top-1/2 -translate-y-1/2 left-6 md:left-8 lg:left-12 xl:left-16 max-w-xs md:max-w-sm lg:max-w-md"
      >
        {/* Role/Location */}
        <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] font-light mb-2 md:mb-3">
          Product Designer, Oslo Norway
        </div>

        {/* Name */}
        <h1 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[hsl(var(--foreground))] mb-3 md:mb-4 leading-tight">
          Swati Srivastava
        </h1>

        {/* Description - Narrow and Readable */}
        <p className="text-xs md:text-sm lg:text-base leading-relaxed text-[hsl(var(--muted-foreground))] font-light mb-6 md:mb-8">
          Currently, I lead design at <span className="font-serif font-bold">Otovo ASA</span>, across customer journeys and B2B platform in the European solar market. I help organizations ship scalable and high-trust digital experiences.
        </p>

        {/* Password Form - Quiet and Secondary */}
        <div className="space-y-2 md:space-y-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-[hsl(0_0%_6%)] border border-[hsl(0_0%_7%)] text-sm md:text-base text-[hsl(var(--foreground))] focus:outline-none focus:border-[hsl(0_0%_8%)] hover:bg-[hsl(0_0%_5%)] hover:shadow-[inset_0_0_8px_rgba(0,0,0,0.1)] transition-all duration-200 placeholder:text-[hsl(var(--muted-foreground))]/50"
              placeholder="Enter password to view the case studies"
              autoFocus
              disabled={isTransitioning}
            />
          </form>

          {/* Validation Messages - Fixed Height Container */}
          <div className="min-h-[24px] mt-2">
            {/* Success Message - Always rendered, opacity controlled */}
            <div 
              className={`text-xs text-green-400 transition-opacity ${
                statusType === 'success' && statusMessage 
                  ? 'opacity-100 duration-[225ms] ease-in' 
                  : 'opacity-0 duration-200 ease-out pointer-events-none h-0 overflow-hidden'
              }`}
            >
              {statusMessage}
            </div>
            
            {/* Error Message - Always rendered, opacity controlled */}
            <div 
              className={`text-xs text-red-400 transition-opacity ${
                statusType === 'error' 
                  ? 'opacity-100 duration-[225ms] ease-in' 
                  : 'opacity-0 duration-200 ease-out pointer-events-none h-0 overflow-hidden'
              }`}
            >
              Password seems to be incorrect. You can try again or email me.{' '}
              <button
                onClick={handleCopyEmail}
                className="underline hover:opacity-70 transition-opacity"
              >
                copy email
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Strip - Infinite Right-to-Left Scrolling Train */}
      <div 
        className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-6 md:left-8 lg:left-12 xl:left-16 right-6 md:right-8 lg:right-12 xl:right-16 overflow-hidden"
      >
        <div 
          className="flex items-start gap-6 md:gap-8 lg:gap-10 xl:gap-12 scroll-train"
          style={{
            willChange: prefersReducedMotion ? 'auto' : 'transform'
          }}
        >
          {duplicatedImages.map((image, index) => {
            // Vary image heights naturally for editorial feel - different sizes per breakpoint
            const mobileHeights = ['h-[60px]', 'h-[75px]', 'h-[90px]', 'h-[65px]', 'h-[80px]', 'h-[70px]', 'h-[85px]', 'h-[68px]']
            const desktopHeights = ['md:h-[80px]', 'md:h-[100px]', 'md:h-[120px]', 'md:h-[90px]', 'md:h-[110px]', 'md:h-[95px]', 'md:h-[105px]', 'md:h-[85px]', 'md:h-[115px]', 'md:h-[88px]', 'md:h-[98px]', 'md:h-[92px]']
            const mobileClass = mobileHeights[index % mobileHeights.length]
            const desktopClass = desktopHeights[index % desktopHeights.length]
            
            return (
              <div
                key={`${image.src}-${index}`}
                className={`flex-shrink-0 ${mobileClass} ${desktopClass}`}
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  width={200}
                  height={150}
                  className="h-full w-auto object-contain"
                  style={{ width: 'auto', height: '100%', maxWidth: 'none' }}
                  unoptimized
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message="iswatisrivastava@gmail.com copied"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

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
            className={`md:hidden fixed bottom-0 left-0 right-0 z-[70] bg-[#f7f7f7] rounded-t-3xl transition-transform duration-300 ease-out overflow-y-auto ${
              isMenuAnimating ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ maxHeight: '75vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 pt-8 pb-8">
              {/* Menu Items */}
              <div className="flex flex-col gap-6 mb-6">
        <Link 
          href="/project-overview"
                  onClick={() => {
                    setIsMenuAnimating(false)
                    setTimeout(() => setIsMobileMenuOpen(false), 300)
                  }}
                  className="text-left text-[hsl(var(--primary-foreground))] text-sm font-light"
                >
                  Home
                </Link>
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
                  type="button"
                  onClick={async (e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    try {
                      await navigator.clipboard.writeText('iswatisrivastava@gmail.com')
                      setShowToast(true)
                      setIsMenuAnimating(false)
                      setTimeout(() => setIsMobileMenuOpen(false), 300)
                    } catch (err) {
                      console.error('Failed to copy email:', err)
                      // Fallback for older browsers
                      const textArea = document.createElement('textarea')
                      textArea.value = 'iswatisrivastava@gmail.com'
                      textArea.style.position = 'fixed'
                      textArea.style.opacity = '0'
                      document.body.appendChild(textArea)
                      textArea.select()
                      try {
                        document.execCommand('copy')
                        setShowToast(true)
                        setIsMenuAnimating(false)
                        setTimeout(() => setIsMobileMenuOpen(false), 300)
                      } catch (fallbackErr) {
                        console.error('Fallback copy failed:', fallbackErr)
                      }
                      document.body.removeChild(textArea)
                    }
                  }}
                  className="text-left text-[hsl(var(--primary-foreground))] text-sm font-light cursor-pointer"
                >
                  Copy email
                </button>
              </div>

              {/* Project Numbers - Mobile Only */}
              <div className="md:hidden flex flex-col gap-3 pt-4 border-t border-[hsl(0_0%_85%)]">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] font-light mb-1">
                  Project
                </div>
                <div className="flex gap-10 justify-start items-center">
                  <Link
                    href="/project-overview/installer-app"
                    onClick={() => {
                      setIsMenuAnimating(false)
                      setTimeout(() => setIsMobileMenuOpen(false), 300)
                    }}
                    className="text-base font-light text-[hsl(0_0%_40%)] transition-colors duration-300 relative inline-block pb-1.5 hover:text-[hsl(var(--primary-foreground))]"
                  >
                    1
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[hsl(var(--primary-foreground))] transition-all duration-300 hover:w-full"></span>
                  </Link>
                  <Link
                    href="/project-overview/merchant-app"
                    onClick={() => {
                      setIsMenuAnimating(false)
                      setTimeout(() => setIsMobileMenuOpen(false), 300)
                    }}
                    className="text-base font-light text-[hsl(0_0%_40%)] transition-colors duration-300 relative inline-block pb-1.5 hover:text-[hsl(var(--primary-foreground))]"
                  >
                    2
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[hsl(var(--primary-foreground))] transition-all duration-300 hover:w-full"></span>
                  </Link>
                  <Link
                    href="/project-overview/jobs"
                    onClick={() => {
                      setIsMenuAnimating(false)
                      setTimeout(() => setIsMobileMenuOpen(false), 300)
                    }}
                    className="text-base font-light text-[hsl(0_0%_40%)] transition-colors duration-300 relative inline-block pb-1.5 hover:text-[hsl(var(--primary-foreground))]"
                  >
                    3
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[hsl(var(--primary-foreground))] transition-all duration-300 hover:w-full"></span>
                  </Link>
                  <Link
                    href="/project-overview/customersupport"
                    onClick={() => {
                      setIsMenuAnimating(false)
                      setTimeout(() => setIsMobileMenuOpen(false), 300)
                    }}
                    className="text-base font-light text-[hsl(0_0%_40%)] transition-colors duration-300 relative inline-block pb-1.5 hover:text-[hsl(var(--primary-foreground))]"
                  >
                    4
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[hsl(var(--primary-foreground))] transition-all duration-300 hover:w-full"></span>
        </Link>
      </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* About Me Modal */}
      <AboutMeModal isOpen={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} />
    </div>
  )
}


