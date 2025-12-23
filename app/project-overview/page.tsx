import Image from 'next/image'

export default function ProjectOverview() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[hsl(var(--background))]">
      {/* Sticky Navbar */}
      <nav className="fixed bottom-8 left-0 right-0 bg-transparent flex justify-center md:justify-end items-center py-4 z-50 px-5 md:px-10 lg:px-40">
        {/* Desktop: Full Navigation */}
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]">
            LINKEDIN
          </a>
          <a href="#" className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]">
            COPY EMAIL
          </a>
          <a href="#" className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]">
            ABOUT ME
          </a>
        </div>
        
        {/* Mobile: More Button */}
        <button className="md:hidden text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]">
          MORE
        </button>
      </nav>

      {/* Section 1 */}
      <section className="h-screen snap-start snap-always flex items-center bg-[hsl(var(--background))]">
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[11px] md:mt-32 mb-14">
            <div className="col-span-12">
              <div className="w-full aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9] bg-white rounded-lg pt-0 pr-8 md:pr-16 lg:pr-32 pb-8 md:pb-14 lg:pb-[70px] pl-0 relative overflow-hidden">
                <Image
                  src="/image/installerapp4.png"
                  alt="Installer App"
                  fill
                  className="object-cover object-[35%_center]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="h-screen snap-start snap-always flex items-center bg-[hsl(var(--background))]">
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[11px] md:mt-32 mb-14">
            <div className="col-span-12">
              <div className="w-full aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9] bg-white rounded-lg pt-0 pr-8 md:pr-16 lg:pr-32 pb-8 md:pb-14 lg:pb-[70px] pl-0">
                {/* Section 2 content */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="h-screen snap-start snap-always flex items-center bg-[hsl(var(--background))]">
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[11px] md:mt-32 mb-14">
            <div className="col-span-12">
              {/* Section 3 content */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="h-screen snap-start snap-always flex items-center bg-[hsl(var(--background))]">
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[11px] md:mt-32 mb-14">
            <div className="col-span-12">
              {/* Section 4 content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

