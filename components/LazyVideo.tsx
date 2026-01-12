'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  preload?: 'none' | 'metadata' | 'auto'
}

export default function LazyVideo({
  src,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'none',
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on mobile
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !isMobile) return

    // On mobile, use Intersection Observer to only play when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play the video when it comes into view
            video.play().catch((err) => {
              // Silently fail - video autoplay may be blocked
              console.log('Video autoplay failed:', err)
            })
          } else {
            // Pause when out of view to save memory
            video.pause()
          }
        })
      },
      {
        threshold: 0.25, // Play when 25% of video is visible
        rootMargin: '50px', // Start loading slightly before it's visible
      }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [isMobile])

  // On mobile, disable autoplay and let Intersection Observer handle it
  // On desktop, allow normal autoplay
  const shouldAutoplay = isMobile ? false : autoPlay

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      autoPlay={shouldAutoplay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
    />
  )
}
