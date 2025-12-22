export default function ProjectOverview() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[hsl(var(--background))]">
      {/* Section 1 */}
      <section className="h-screen snap-start snap-always flex items-center border border-[hsl(var(--border))] bg-[hsl(var(--background))]">
        <div className="w-full px-20">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-32 mb-14">
            <div className="col-span-12">
              <div className="w-full aspect-[21/9] bg-white rounded-lg pt-0 pr-32 pb-14 pl-0">
                {/* Rectangle placeholder */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="h-screen snap-start snap-always flex items-center border border-[hsl(var(--border))] bg-[hsl(var(--background))]">
        <div className="w-full px-20">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-32 mb-14">
            <div className="col-span-12">
              <div className="w-full aspect-[21/9] bg-white rounded-lg pt-0 pr-32 pb-14 pl-0">
                {/* Rectangle placeholder */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="h-screen snap-start snap-always flex items-center border border-[hsl(var(--border))] bg-[hsl(var(--background))]">
        <div className="w-full px-20">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-32 mb-14">
            <div className="col-span-12">
              {/* Section 3 content */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="h-screen snap-start snap-always flex items-center border border-[hsl(var(--border))] bg-[hsl(var(--background))]">
        <div className="w-full px-20">
          <div className="grid grid-cols-12 gap-2 md:gap-3 lg:gap-4 mt-32 mb-14">
            <div className="col-span-12">
              {/* Section 4 content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

