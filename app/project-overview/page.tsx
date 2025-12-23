import Image from 'next/image'

export default function ProjectOverview() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[hsl(var(--background))]">
      {/* Sticky Navbar */}
      <nav className="fixed top-4 md:bottom-12 left-0 right-0 bg-transparent flex justify-end items-start md:items-center py-4 z-50 px-5 md:px-10 lg:px-40">
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
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[14px] md:mt-32 mb-14">
            <div className="col-span-12">
              <div className="w-full aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9] bg-white rounded-lg pt-0 pr-8 md:pr-16 lg:pr-32 pb-8 md:pb-14 lg:pb-[70px] pl-0 relative overflow-hidden">
                <Image
                  src="/image/installerapp4.png"
                  alt="Installer App"
                  fill
                  className="object-cover object-[35%_center]"
                  priority
                />
                
                {/* Text Content - Positioned in columns 9-12 - Desktop Only */}
                {/* First text block - Top */}
                <div className="hidden md:block absolute top-0 left-0 right-0 z-10">
                  <div className="w-full h-full grid grid-cols-12">
                    <div className="col-start-9 col-span-4 px-8 pt-8">
                      <div className="text-[12px] uppercase tracking-[0.2em] text-white">
                        <div>FINTECH / PAYMENTS</div>
                        <div>2019 • SR. UX DESIGNER</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Logo and second text block - Centered - Desktop Only */}
                <div className="hidden md:flex absolute inset-0 items-center z-10">
                  <div className="w-full h-full grid grid-cols-12">
                    <div className="col-start-9 col-span-4 flex flex-col justify-center px-8">
                      {/* Logo */}
                      <div className="mb-2">
                        <Image
                          src="/image/Otovo_logo_pale lilac_RGB 1 1.svg"
                          alt="Otovo Logo"
                          width={120}
                          height={40}
                          className="w-auto h-10"
                        />
                      </div>
                      
                      {/* Second text block */}
                      <div className="text-[16px] font-light text-white">
                        <div>On-site Documentation & Tracking</div>
                        <div>18% faster project approvals</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile: Logo and text below rectangle - Top aligned */}
              <div className="md:hidden mt-4 flex items-start justify-between w-full">
                {/* Logo - Left aligned with image */}
                <div>
                  <Image
                    src="/image/Otovo_logo_pale lilac_RGB 1 1.svg"
                    alt="Otovo Logo"
                    width={80}
                    height={28}
                    className="w-auto h-5"
                  />
                </div>
                
                {/* Text - Right aligned */}
                <div className="text-right text-sm font-light text-[hsl(var(--foreground))]">
                  <div>On-site Documentation & Tracking</div>
                  <div>18% faster project approvals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="h-screen snap-start snap-always flex items-center bg-[hsl(var(--background))]">
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[14px] md:mt-32 mb-14">
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
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[14px] md:mt-32 mb-14">
            <div className="col-span-12">
              {/* Section 3 content */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="h-screen snap-start snap-always flex items-center bg-[hsl(var(--background))]">
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-[14px] md:mt-32 mb-14">
            <div className="col-span-12">
              {/* Section 4 content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

