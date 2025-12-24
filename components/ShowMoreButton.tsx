'use client'

import { useEffect, useState } from 'react'

export default function ShowMoreButton() {
  const [activeSection, setActiveSection] = useState(0)
  const [isLastSectionVisible, setIsLastSectionVisible] = useState(false)

  useEffect(() => {
    const sections = [
      document.getElementById('section-1'),
      document.getElementById('section-2'),
      document.getElementById('section-3'),
      document.getElementById('section-4'),
    ]

    const observers: IntersectionObserver[] = []

    sections.forEach((section, index) => {
      if (!section) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionNumber = index + 1 // 1-indexed: 1, 2, 3, or 4
              setActiveSection(sectionNumber)
              if (sectionNumber === 4) {
                setIsLastSectionVisible(true)
              } else {
                setIsLastSectionVisible(false)
              }
            }
          })
        },
        {
          threshold: 0.5,
        }
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const totalSquares = 3 // n-1 for 4 projects
  // Show squares based on active section:
  // Section 1: show 3 squares
  // Section 2: show 2 squares (1 disappeared)
  // Section 3: show 1 square (2 disappeared)
  // Section 4: show 0 squares (all disappeared, show "Show more" instead)
  const squaresToShow = activeSection === 0 ? totalSquares : Math.max(0, totalSquares - activeSection + 1)

  return (
    <>
      {/* Desktop: Squares and More Projects button */}
      <div className="hidden md:flex fixed left-5 md:left-10 lg:left-40 top-auto bottom-8 z-50 items-center py-4 gap-3">
        {/* Squares - only show when not on last section */}
        {!isLastSectionVisible && (
          <div className="flex flex-col gap-1.5 items-center">
            {Array.from({ length: totalSquares }).map((_, index) => {
              const squareIndex = index + 1
              const shouldShow = squareIndex <= squaresToShow

              return (
                <div
                  key={squareIndex}
                  className={`w-1 h-1 bg-[hsl(var(--muted-foreground))] transition-all duration-500 ease-in-out ${
                    shouldShow
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-2'
                  }`}
                />
              )
            })}
          </div>
        )}

        {/* More Projects Button - appears when last section is visible */}
        {isLastSectionVisible && (
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] font-light relative inline-block group hover:text-white transition-colors duration-300 leading-none"
          >
            MORE PROJECTS
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[hsl(var(--muted-foreground))] group-hover:bg-white transition-all duration-300 ease-in-out group-hover:w-0 group-hover:origin-right"></span>
          </a>
        )}
      </div>

      {/* Mobile: More Projects button on top left */}
      {isLastSectionVisible && (
        <div className="md:hidden fixed top-4 left-5 z-50 flex items-start py-4">
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] font-light relative inline-block group hover:text-white transition-colors duration-300 leading-none"
          >
            MORE PROJECTS
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[hsl(var(--muted-foreground))] group-hover:bg-white transition-all duration-300 ease-in-out group-hover:w-0 group-hover:origin-right"></span>
          </a>
        </div>
      )}
    </>
  )
}

