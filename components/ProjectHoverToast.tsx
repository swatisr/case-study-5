'use client'

interface ProjectHoverToastProps {
  isVisible: boolean
  image: string
  heading: string
  position: { top: number; left: number }
}

export default function ProjectHoverToast({ isVisible, heading, position }: ProjectHoverToastProps) {
  if (!isVisible) return null

  return (
    <div
      className="fixed z-[9999] transition-opacity duration-300 pointer-events-none"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        opacity: isVisible ? 1 : 0,
        transform: 'translateX(-50%)', // Center the toast relative to the number
      }}
    >
      <div className="bg-[#1a1a1a] rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.6)] px-4 py-3 whitespace-nowrap">
        <p className="text-white font-light" style={{ fontSize: '14px' }}>{heading}</p>
      </div>
    </div>
  )
}
