'use client'

import { useEffect, useState } from 'react'

export default function ShowMoreButton() {
  const [isLastSectionVisible, setIsLastSectionVisible] = useState(false)

  useEffect(() => {
    // Find Section 4 by ID
    const lastSection = document.getElementById('section-4')
    
    if (!lastSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLastSectionVisible(true)
          } else {
            setIsLastSectionVisible(false)
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
      }
    )

    observer.observe(lastSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  if (!isLastSectionVisible) return null

  return (
    <div className="hidden md:flex fixed left-5 md:left-10 lg:left-40 top-auto bottom-8 z-50 items-center py-4">
      <a
        href="#"
        className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] font-light relative inline-block group hover:text-white transition-colors duration-300 leading-none"
      >
        SHOW MORE
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[hsl(var(--muted-foreground))] group-hover:bg-white transition-all duration-300 ease-in-out group-hover:w-0 group-hover:origin-right"></span>
      </a>
    </div>
  )
}

