'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

// Project images with their display names
const projectImages = [
  { src: '/image/installerapp4.png', name: 'Installer App' },
  { src: '/image/settleappcombo.png', name: 'Settle' },
  { src: '/image/customerSupportkitchen 2.png', name: 'Customer Support' },
  { src: '/image/jobs.png', name: 'Jobs' },
  { src: '/image/CS1.png', name: 'Case Study 1' },
  { src: '/image/IA1.png', name: 'Installer App' },
  { src: '/image/IA2.png', name: 'Installer App' },
  { src: '/image/IAMockup.png', name: 'Installer App Mockup' },
  { src: '/image/InstallerApp1.png', name: 'Installer App' },
  { src: '/image/settel3.png', name: 'Settle' },
  { src: '/image/settle pic 2.png', name: 'Settle' },
  { src: '/image/settle pic 3.png', name: 'Settle' },
  { src: '/image/settle1.png', name: 'Settle' },
  { src: '/image/settle2.png', name: 'Settle' },
  { src: '/image/laptopCustomer Support.png', name: 'Customer Support' },
  { src: '/image/18. iPhone.png', name: 'iPhone Mockup' },
  { src: '/image/24. iPhone.png', name: 'iPhone Mockup' },
  { src: '/image/24. iPhone3.png', name: 'iPhone Mockup' },
  { src: '/image/M001T1432 L Iphone 16 Pro Mockup 21Jul25.png', name: 'iPhone 16 Pro Mockup' },
  { src: '/image/PSD.png', name: 'Design System' },
  { src: '/image/customerSupportkitchen.png', name: 'Customer Support' },
]

export default function Home() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const router = useRouter()

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    setError('')
    
    if (value === 'hellomonday') {
      setIsLoggingIn(true)
      // Show "Logging in..." for 100ms then redirect
      setTimeout(() => {
        localStorage.setItem('portfolio-auth', 'authenticated')
        router.push('/project-overview')
      }, 100)
    } else {
      setIsLoggingIn(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Auto-login is handled in handlePasswordChange
  }

  return (
    <div className="h-screen overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))] flex flex-col">
      {/* Header Links - Extreme Right */}
      <nav className="fixed top-4 md:top-8 right-0 z-50 px-5 md:px-10 lg:px-40">
        <div className="flex gap-8">
          <a href="#" className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))] opacity-50 font-light relative inline-block group hover:text-white transition-colors duration-300 leading-none">
            COPY EMAIL
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[hsl(var(--muted-foreground))] group-hover:bg-white transition-all duration-300 ease-in-out group-hover:w-0 group-hover:origin-right"></span>
          </a>
          <a href="#" className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))] opacity-50 font-light relative inline-block group hover:text-white transition-colors duration-300 leading-none">
            LINKEDIN
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[hsl(var(--muted-foreground))] group-hover:bg-white transition-all duration-300 ease-in-out group-hover:w-0 group-hover:origin-right"></span>
          </a>
        </div>
      </nav>

      {/* Main Content - Vertically Centered, Left Aligned */}
      <div className="flex-1 flex flex-col justify-center px-5 md:px-10 lg:px-40">
        <div className="w-full max-w-4xl space-y-4">
          {/* Label */}
          <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] font-light">
            Lead UX Designers, Otovo ASA
          </div>

          {/* Name - 26px */}
          <h1 className="text-[26px] font-bold text-[hsl(var(--foreground))]">
            Swati Srivastava
          </h1>

          {/* Description - 14px, 50% width */}
          <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))] font-light max-w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          {/* Password Form */}
          <div className="space-y-4 max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type={isLoggingIn ? 'text' : 'password'}
                  value={isLoggingIn ? 'Logging in...' : password}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-5 bg-[hsl(0_0%_6%)] border border-[hsl(0_0%_5%)] rounded-lg text-[hsl(var(--foreground))] focus:outline-none focus:border-[hsl(0_0%_5%)] hover:bg-[hsl(0_0%_5%)] hover:shadow-[inset_0_0_8px_rgba(0,0,0,0.1)] transition-all duration-200 placeholder:text-[hsl(var(--muted-foreground))]/50"
                  placeholder={isLoggingIn ? '' : 'Enter password to view the case studies'}
                  autoFocus
                  disabled={isLoggingIn}
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm">{error}</div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Horizontal Image Gallery */}
      <div className="w-full px-5 md:px-10 lg:px-40 pb-8 md:pb-12">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {projectImages.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 h-24 overflow-hidden rounded-none"
            >
              <div className="relative h-24" style={{ width: 'auto' }}>
                <Image
                  src={project.src}
                  alt={project.name}
                  width={100}
                  height={96}
                  className="h-24 w-auto object-contain"
                  style={{ width: 'auto', height: '96px', maxWidth: 'none' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


