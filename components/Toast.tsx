'use client'

import { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true)
      const timer = setTimeout(() => {
        onClose()
      }, 3000) // Toast stays for 3 seconds

      return () => clearTimeout(timer)
    } else {
      // Delay removal to allow fade-out animation
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-[#1a1a1a] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.4)] text-xs md:text-sm font-light whitespace-nowrap">
        {message}
      </div>
    </div>
  )
}
