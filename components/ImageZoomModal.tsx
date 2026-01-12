'use client'

import { useEffect, useState, useCallback } from 'react'

interface ImageZoomModalProps {
  isOpen: boolean
  imageSrc: string
  imageAlt: string
  onClose: () => void
}

export default function ImageZoomModal({ isOpen, imageSrc, imageAlt, onClose }: ImageZoomModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
      setIsVisible(true)
    } else {
      document.body.style.overflow = 'unset'
      setIsVisible(false)
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 200) // Match transition duration
  }, [onClose])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, handleClose])

  if (!isOpen && !isVisible) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={handleClose}
    >
      {/* Backdrop with blur */}
      <div 
        className={`fixed inset-0 backdrop-blur-md transition-opacity duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'rgba(0, 0, 0, 0.85)'
        }}
      />

      {/* Image Container - Click anywhere to close */}
      <div 
        className={`relative w-full h-full flex items-center justify-center p-4 md:p-8 transition-opacity duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      >
        {/* Image - Click/tap anywhere on image or backdrop to close */}
        <div 
          className="relative flex items-center justify-center"
          style={{ 
            maxWidth: '100%',
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto'
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-[90vh] md:max-h-[95vh] w-auto h-auto object-contain rounded-lg cursor-pointer"
            style={{ 
              display: 'block',
              userSelect: 'none'
            }}
            draggable={false}
            onClick={handleClose}
          />
        </div>
      </div>
    </div>
  )
}
