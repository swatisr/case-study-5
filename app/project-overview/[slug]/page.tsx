'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import CaseStudySection from '@/components/CaseStudySection'

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params?.slug as string

  // For now, we'll use the Otovo project content
  // This can be extended to fetch different content based on slug

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      {/* Sticky Back Button */}
      <div className="fixed top-0 left-0 right-0 h-16 z-50 bg-[hsl(var(--background))]/80 backdrop-blur-md pointer-events-none flex items-center">
        <Link
          href="/project-overview"
          className="left-5 md:left-10 lg:left-40 text-[hsl(var(--muted-foreground))] font-light relative inline-block group hover:text-white transition-colors duration-300 leading-none pointer-events-auto"
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">Back</span>
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[hsl(var(--muted-foreground))] group-hover:bg-white transition-all duration-300 ease-in-out group-hover:w-0 group-hover:origin-right"></span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 bottom-auto md:top-auto md:bottom-8 left-0 right-0 bg-transparent flex justify-end items-start md:items-center py-4 z-50 px-5 md:px-10 lg:px-40">
        <div className="hidden md:flex gap-8">
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]"
          >
            LINKEDIN
          </a>
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]"
          >
            COPY EMAIL
          </a>
        </div>
        <button className="md:hidden text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]">
          MORE
        </button>
      </nav>

      {/* Section 1: Problem Statement */}
      <CaseStudySection
        leftContent={
          <>
            <p className="text-2xl md:text-4xl lg:text-5xl font-light text-[hsl(var(--foreground))] leading-tight">
              Installation documentation happened too late, slowing payments and
              quality checks
            </p>
            <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
              Installations were complete, but the documentation kept the
              project open. There were other customer photos on the job and
              back-office teams managing paperwork and types hardware. The delays
              created bottlenecks in the payment and quality check processes.
            </p>
          </>
        }
        rightContent={
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/image/installerapp4.png"
              alt="Construction site with workers"
              fill
              className="object-cover"
              priority
            />
          </div>
        }
      />

      {/* Section 2: Context */}
      <CaseStudySection
        leftContent={
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
            The workflow between field installers and back-office operations
            needed to be redefined to ensure timely documentation and smoother
            project completion.
          </p>
        }
        rightContent={
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/image/installerapp4.png"
              alt="Building scaffolding detail"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 3: Solution Approach */}
      <CaseStudySection
        leftContent={
          <>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
              Because no installer app existed, we first had to define what work
              belonged in the field versus the back office.
            </p>
            <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
              This was an exercise in how installers should document, a new
              workflow for back-office teams, and how the data would flow from
              the field to the back office and beyond.
            </p>
          </>
        }
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src="/image/24. iPhone.png"
              alt="Mobile app interface showing projects list"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 4: App Interface Examples */}
      <CaseStudySection
        leftContent={
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
            The new workflow was organized into modules and sections to ensure
            work flow between installers and operations. This made the
            installation and operations teams more efficient. Ultimately, allowing
            operations to track, verify, and use information has created a
            better experience.
          </p>
        }
        rightContent={
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
              <Image
                src="/image/24. iPhone.png"
                alt="App screen with house illustration"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
              <Image
                src="/image/24. iPhone3.png"
                alt="App screen with project details"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
              <Image
                src="/image/18. iPhone.png"
                alt="App screen dark state"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
              <Image
                src="/image/24. iPhone.png"
                alt="App screen with notifications"
                fill
                className="object-cover"
              />
            </div>
          </div>
        }
      />

      {/* Section 5: Installation Tracking UI */}
      <CaseStudySection
        leftContent={
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
            Real-time tracking capabilities allowed installers to mark when work
            started and completed, with checklists ensuring all documentation
            requirements were met before project closure.
          </p>
        }
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src="/image/24. iPhone.png"
              alt="Installation tracking interface"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 6: MVP Scope */}
      <CaseStudySection
        leftContent={
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
            We scoped the initial release to solve the core bottlenecks: photo
            capture, document upload, and installation tracking. We added more
            advanced capabilities (like barcodes) once the workflow proved
            effective. Keeping the MVP focused made adoption easier and guided
            where to invest next.
          </p>
        }
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src="/image/24. iPhone.png"
              alt="Project card with documentation"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 7: Project Details */}
      <CaseStudySection
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src="/image/24. iPhone.png"
              alt="Project details with illustration"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 8: Metrics (Bounded Container) */}
      <CaseStudySection
        boundedContainer={true}
        leftContent={
          <div className="space-y-12">
            <div>
              <p className="text-6xl md:text-7xl lg:text-8xl font-light text-[hsl(var(--foreground))] mb-2">
                18%
              </p>
              <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light">
                Reduction in documentation time
              </p>
            </div>
            <div>
              <p className="text-6xl md:text-7xl lg:text-8xl font-light text-[hsl(var(--foreground))] mb-2">
                1000+
              </p>
              <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light">
                projects completed through the app
              </p>
            </div>
          </div>
        }
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src="/image/24. iPhone.png"
              alt="Camera interface for photo capture"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 9: Impact/Results */}
      <CaseStudySection
        leftContent={
          <>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light leading-relaxed mb-4">
              Documentation was now expected to be completed on the same day
              with operations being able to invoice the customer earlier than
              before. Operations are also proactively notified when the
              installation work starts and ends.
            </p>
            <p className="text-base text-[hsl(var(--muted-foreground))] font-light">
              Barcode scanning was introduced in the next iteration to assist
              documentation.
            </p>
          </>
        }
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src="/image/24. iPhone.png"
              alt="Success confirmation screen"
              fill
              className="object-cover"
            />
          </div>
        }
      />

      {/* Footer */}
      <footer className="py-20 md:py-32 bg-[hsl(var(--background))]">
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6">
              <p className="text-sm text-[hsl(var(--foreground))] mb-4">
                The team
              </p>
              <div className="flex gap-2 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-[hsl(var(--muted))]"
                  />
                ))}
              </div>
              <Link
                href="/project-overview"
                className="text-sm text-[hsl(var(--foreground))] underline"
              >
                Back to all projects
              </Link>
            </div>
            <div className="md:col-span-6 flex justify-end items-start">
              <a
                href="#"
                className="text-sm text-[hsl(var(--foreground))] underline"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Go up
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

