'use client'

import { ReactNode } from 'react'

interface CaseStudySectionProps {
  leftContent?: ReactNode
  rightContent?: ReactNode
  specialBackground?: boolean
  boundedContainer?: boolean
  className?: string
}

export default function CaseStudySection({
  leftContent,
  rightContent,
  specialBackground = false,
  boundedContainer = false,
  className = '',
}: CaseStudySectionProps) {
  const gridContent = (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
      {/* Left Content */}
      {leftContent && (
        <div className="md:col-span-6 flex flex-col justify-start">
          <div className="space-y-6">{leftContent}</div>
        </div>
      )}

      {/* Right Content */}
      {rightContent && (
        <div
          className={`${
            leftContent ? 'md:col-span-6' : 'md:col-span-12'
          } flex flex-col justify-start`}
        >
          <div className="space-y-6">{rightContent}</div>
        </div>
      )}
    </div>
  )

  return (
    <section
      className={`py-20 md:py-32 ${
        specialBackground ? 'deep-blue-bg' : 'bg-[hsl(var(--background))]'
      } ${className}`}
    >
      <div className="w-full px-5 md:px-10 lg:px-40">
        {boundedContainer ? (
          <div className="bg-[#171717] border border-[hsl(var(--border))] rounded-xl shadow-lg p-8 md:p-12 lg:p-16">
            {gridContent}
          </div>
        ) : (
          gridContent
        )}
      </div>
    </section>
  )
}

