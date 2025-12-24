import Image from 'next/image'

export default function ProjectOverview() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[hsl(var(--background))]">
      {/* Sticky Navbar */}
      <nav className="fixed top-4 bottom-auto md:top-auto md:bottom-8 left-0 right-0 bg-transparent flex justify-end items-start md:items-center py-4 z-50 px-5 md:px-10 lg:px-40">
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
                {/* First text block - Top Left and Right */}
                <div className="hidden md:block absolute top-0 left-0 right-0 z-10">
                  <div className="w-full flex justify-between items-start px-8 pt-8">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white">
                      FINTECH / PAYMENTS
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white">
                      2019 • SR. UX DESIGNER
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
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                      
                      {/* Second text block */}
                      <div className="text-[16px] font-light text-white">
                        <div className="font-semibold">On-site Documentation & Tracking</div>
                        <div className="font-light">18% faster project approvals</div>
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
                    width={64}
                    height={22}
                    className="w-auto h-4"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
                
                {/* Text - Right aligned */}
                <div className="text-right text-sm font-light text-[hsl(var(--foreground))]">
                  <div className="font-semibold">On-site Documentation & Tracking</div>
                  <div className="font-light">18% faster project approvals</div>
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
              <div className="w-full aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9] deep-green-bg rounded-lg pt-0 pr-8 md:pr-16 lg:pr-32 pb-8 md:pb-14 lg:pb-[70px] pl-0 relative overflow-hidden">
                {/* Top text - FINTECH / PAYMENTS and 2019 • SR. UX DESIGNER - Desktop Only */}
                <div className="hidden md:flex absolute top-0 right-0 z-10 flex-col items-end px-4 md:px-8 pt-4 md:pt-8">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] font-light">
                    2019 • SR. UX DESIGNER
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] font-light">
                    FINTECH / PAYMENTS
                  </div>
                </div>
                
                {/* Settle Logo - Top left, horizontally middle-aligned with top-right text - Desktop Only */}
                <div className="hidden md:flex absolute top-0 left-0 z-10 flex-col items-start px-4 md:px-8 pt-4 md:pt-8">
                  <Image
                    src="/image/Settle.svg"
                    alt="Settle Logo"
                    width={58}
                    height={20}
                    className="brightness-0 invert"
                    style={{ width: '58px', height: 'auto' }}
                  />
                  <div className="text-white text-[16px] font-light mt-1">
                    <div className="font-semibold">Merchant transactions in P2P app</div>
                  </div>
                </div>
                
                {/* Image wrapper - to position image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-bottom-12 md:top-auto md:translate-y-0 w-[90.3%] md:w-[70%]">
                  {/* Image - Mobile: settle pic 3 */}
                  <div className="md:hidden overflow-hidden" style={{ maxHeight: '100%' }}>
                    <Image
                      src="/image/settle pic 3.png"
                      alt="Settle"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  {/* Image - Desktop: settleappcombo */}
                  <div className="hidden md:block overflow-hidden" style={{ maxHeight: '100%' }}>
                    <Image
                      src="/image/settleappcombo.png"
                      alt="Settle"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Mobile: Logo and text below rectangle - Middle aligned */}
              <div className="md:hidden mt-4 flex items-center justify-between w-full">
                {/* Logo - Left aligned with image */}
                <div>
                  <Image
                    src="/image/Settle.svg"
                    alt="Settle Logo"
                    width={64}
                    height={22}
                    className="w-auto h-4 brightness-0 invert"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
                
                {/* Text - Right aligned */}
                <div className="text-right text-sm font-light text-[hsl(var(--foreground))]">
                  <div className="font-semibold">Merchant transactions in P2P app</div>
                </div>
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
              <div className="w-full aspect-[3/4] md:aspect-[16/9] lg:aspect-[21/9] bg-[#121212] rounded-lg pt-0 pr-8 md:pr-16 lg:pr-32 pb-8 md:pb-14 lg:pb-[70px] pl-0 relative overflow-hidden">
                {/* Video - Mobile: Centered and middle-aligned */}
                <div className="md:hidden absolute inset-0 flex items-center justify-center z-10 px-4">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-full max-w-sm h-auto rounded-lg shadow-2xl"
                  >
                    <source src="/video/jobs2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Text Content - Positioned in columns 1-4 - Desktop Only */}
                {/* First text block - Top Left and Right */}
                <div className="hidden md:block absolute top-0 left-0 right-0 z-10">
                  <div className="w-full flex justify-between items-start px-8 pt-8">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white">
                      FINTECH / PAYMENTS
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white">
                      2019 • SR. UX DESIGNER
                    </div>
                  </div>
                </div>
                
                {/* Logo and second text block - Left side - Desktop Only */}
                <div className="hidden md:flex absolute inset-0 z-10">
                  <div className="w-full h-full grid grid-cols-12">
                    <div className="col-start-1 col-span-4 flex flex-col justify-end px-8 pb-8">
                      {/* Logo */}
                      <div className="mb-2">
                        <Image
                          src="/image/Otovo_logo_pale lilac_RGB 1 1.svg"
                          alt="Otovo Logo"
                          width={120}
                          height={40}
                          className="w-auto h-10"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                      
                      {/* Second text block */}
                      <div className="text-[16px] font-light text-white">
                        <div className="font-semibold">On-site Documentation & Tracking</div>
                        <div className="font-light">18% faster project approvals</div>
                      </div>
                    </div>
                    
                    {/* Video - 8 column span (doubled size), auto-playing - Desktop Only */}
                    <div className="col-start-5 col-span-8 flex items-end justify-center px-4 pb-8">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="w-full h-auto rounded-lg shadow-2xl"
                      >
                        <source src="/video/jobs2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
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
                    width={64}
                    height={22}
                    className="w-auto h-4"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
                
                {/* Text - Right aligned */}
                <div className="text-right text-sm font-light text-[hsl(var(--foreground))]">
                  <div className="font-semibold">On-site Documentation & Tracking</div>
                  <div className="font-light">18% faster project approvals</div>
                </div>
              </div>
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

