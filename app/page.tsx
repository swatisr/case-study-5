import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Portfolio Website</h1>
        <p className="text-[hsl(var(--muted-foreground))]">
          Design system is ready. Visit <a href="/design-system" className="text-[hsl(var(--primary))] underline">/design-system</a> to view the documentation.
        </p>
        <Link 
          href="/project-overview"
          className="inline-block mt-6 px-6 py-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Enter Project Overview
        </Link>
      </div>
    </div>
  )
}


