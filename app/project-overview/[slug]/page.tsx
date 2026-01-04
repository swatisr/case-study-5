'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import CaseStudySection from '@/components/CaseStudySection'
import AboutMeModal from '@/components/AboutMeModal'

export default function ProjectDetailPage() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const params = useParams()
  const slug = typeof params?.slug === 'string' ? params.slug : 'installer-app'

  // Determine current project number from slug
  const getCurrentProjectNumber = (slug: string): number => {
    const slugMap: { [key: string]: number } = {
      'installer-app': 1,
      'merchant-app': 2,
      'jobs': 3,
      'customersupport': 4,
    }
    return slugMap[slug] || 1
  }

  const currentProject = getCurrentProjectNumber(slug)

  // Case study navigation data
  const caseStudies = [
    { number: 1, slug: 'installer-app', route: '/project-overview/installer-app' },
    { number: 2, slug: 'merchant-app', route: '/project-overview/merchant-app' },
    { number: 3, slug: 'jobs', route: '/project-overview/jobs' },
    { number: 4, slug: 'customersupport', route: '/project-overview/customersupport' },
  ]

  // Get project-specific content for first section
  const getProjectContent = (slug: string) => {
    const contentMap: { [key: string]: { headline: string; description: string; image: string } } = {
      'installer-app': {
        headline: 'Installation documentation happened too late, slowing payments and quality checks',
        description: 'Installations were complete, but the documentation kept the project open. There were other customer photos on the job and back-office teams managing paperwork and types hardware. The delays created bottlenecks in the payment and quality check processes.',
        image: '/image/installerapp4.png',
      },
      'merchant-app': {
        headline: 'Merchant transactions needed a streamlined payment flow to reduce friction',
        description: 'The existing payment process created delays for merchants trying to process transactions. Multiple steps and unclear workflows led to abandoned transactions and support requests. We needed to simplify the flow while maintaining security and compliance.',
        image: '/image/settleappcombo.png',
      },
      'jobs': {
        headline: 'Jobs: Repairs and Fixes Workflow',
        description: 'Imagine a customer with a solar installation that\'s been running for a few years. Something stops working. They don\'t know who to call, so they contact Otovo. Behind the scenes, the team needs to understand the issue, assign the work, manage responsibility and cost, and approve an invoice without slowing daily operations. This is the context in which Jobs was introduced.',
        image: '/image/jobs.png',
      },
      'customersupport': {
        headline: 'Customer support teams needed better tools to resolve issues faster',
        description: 'Support agents were spending too much time searching for information and context about customer issues. The fragmented tools and lack of integrated workflows slowed down resolution times and impacted customer satisfaction. We needed a unified support experience.',
        image: '/image/customerSupportkitchen 2.png',
      },
    }
    return contentMap[slug] || contentMap['installer-app']
  }

  const projectContent = getProjectContent(slug)

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      {/* Sticky Home Button and Case Study Navigation */}
      <div className="fixed top-0 left-0 right-0 h-16 z-50 bg-[hsl(var(--background))]/80 backdrop-blur-md pointer-events-none flex items-center justify-between px-5 md:px-10 lg:px-40">
        <Link
          href="/project-overview"
          className="text-[hsl(var(--muted-foreground))] font-light relative inline-block group hover:text-white transition-colors duration-300 leading-none pointer-events-auto"
        >
          <span className="md:hidden text-[11px] tracking-[0.2em]">back</span>
          <span className="hidden md:inline text-[11px] uppercase tracking-[0.2em]">Home</span>
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[hsl(var(--muted-foreground))] group-hover:bg-white transition-all duration-300 ease-in-out group-hover:w-0 group-hover:origin-right"></span>
        </Link>
        
        {/* Case Study Numbers - Hidden on mobile */}
        <div className="hidden md:flex gap-6 pointer-events-auto">
          {caseStudies.map((study) => {
            const isActive = study.number === currentProject
            return (
              <Link
                key={study.number}
                href={study.route}
                className={`text-[11px] uppercase tracking-[0.2em] font-light relative inline-block group transition-colors duration-300 leading-none ${
                  isActive
                    ? 'text-[hsl(var(--foreground))]'
                    : 'text-[hsl(var(--muted-foreground))] opacity-40'
                } hover:text-white hover:opacity-100`}
              >
                <span>{study.number}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[hsl(var(--muted-foreground))] group-hover:bg-white transition-all duration-300 ease-in-out group-hover:w-0 group-hover:origin-right"></span>
              </Link>
            )
          })}
        </div>
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
          <button
            onClick={() => setIsAboutMeOpen(true)}
            className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]"
          >
            ABOUT ME
          </button>
        </div>
        <button className="md:hidden text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--foreground))]">
          MORE
        </button>
      </nav>

      {/* Section 1: Problem Statement */}
      <CaseStudySection
        leftContent={
          slug === 'jobs' ? (
            <>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--foreground))] leading-tight mb-4">
                Jobs: Repairs and Fixes Workflow
              </h1>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-light">
                900+ Jobs Invoiced
              </p>
            </>
          ) : (
            <>
              <p className="text-2xl md:text-4xl lg:text-5xl font-light text-[hsl(var(--foreground))] leading-tight">
                {projectContent.headline}
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                {projectContent.description}
              </p>
            </>
          )
        }
        rightContent={
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={projectContent.image}
              alt="Project visual"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
        }
      />

      {/* Section 2: Context Introduction (Jobs only) */}
      {slug === 'jobs' && (
        <CaseStudySection
          leftContent={
            <p className="text-base md:text-lg text-white font-bold leading-relaxed">
              Imagine a customer with a solar installation that's been running for a few years. Something stops working. They don't know who to call, so they contact Otovo. Behind the scenes, the team needs to understand the issue, assign the work, manage responsibility and cost, and approve an invoice without slowing daily operations. This is the context in which Jobs was introduced.
            </p>
          }
        />
      )}

      {/* Section 3: Context */}
      <CaseStudySection
        leftContent={
          slug === 'jobs' ? (
            <>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                Otovo already had a detailed workflow for installation projects. While it worked well for installations, repairs, fixes, and inspections behaved differently. They were smaller in scope, more dynamic, and linked to projects without being equivalent to them.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                Trying to fit this work into the project workflow added friction and raised an early design question:
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4 italic">
                Are we improving the experience by extending what exists, or by treating this as a different type of work?
              </p>
            </>
          ) : (
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
              The workflow between field installers and back-office operations
              needed to be redefined to ensure timely documentation and smoother
              project completion.
            </p>
          )
        }
        rightContent={
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={slug === 'jobs' ? '/image/installerapp4.png' : '/image/installerapp4.png'}
              alt={slug === 'jobs' ? 'Installation workflow comparison' : 'Building scaffolding detail'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 4: Solution Approach */}
      <CaseStudySection
        leftContent={
          slug === 'jobs' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Deciding whether Jobs should be a separate tool
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                Before exploring UI, the focus was on whether Jobs should exist as its own tool.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                Treating jobs as simplified projects would blur conceptual boundaries, add conditional complexity, and slow implementation. From engineering and business perspectives, a separate, lightweight tool could be built faster and tested safely. From a design perspective, it allowed jobs to be represented clearly as their own object, connected to projects but not pretending to be one.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                This led to the decision to design Jobs as a standalone beta without disturbing the core marketplace workflow.
              </p>
            </>
          ) : (
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
          )
        }
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src={slug === 'jobs' ? '/image/24. iPhone3.png' : '/image/24. iPhone.png'}
              alt={slug === 'jobs' ? 'Jobs tool decision process' : 'Mobile app interface showing projects list'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 5: App Interface Examples */}
      <CaseStudySection
        leftContent={
          slug === 'jobs' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                What the Jobs tool needed to support for internal teams
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                For Otovo agents, handling a job involved documenting the issue, assigning work, updating requirements, tracking progress, and approving invoices.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                Installers needed a clear view of assigned jobs, expectations, and how to submit invoices correctly.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                Design decisions were driven by mapping this work carefully and ensuring the system reflected how tasks were handled in practice.
              </p>
            </>
          ) : (
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
              The new workflow was organized into modules and sections to ensure
              work flow between installers and operations. This made the
              installation and operations teams more efficient. Ultimately, allowing
              operations to track, verify, and use information has created a
              better experience.
            </p>
          )
        }
        rightContent={
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
              <Image
                src={slug === 'jobs' ? '/image/24. iPhone.png' : '/image/24. iPhone.png'}
                alt={slug === 'jobs' ? 'Jobs interface example 1' : 'App screen with house illustration'}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
              <Image
                src={slug === 'jobs' ? '/image/24. iPhone3.png' : '/image/24. iPhone3.png'}
                alt={slug === 'jobs' ? 'Jobs interface example 2' : 'App screen with project details'}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
              <Image
                src={slug === 'jobs' ? '/image/18. iPhone.png' : '/image/18. iPhone.png'}
                alt={slug === 'jobs' ? 'Jobs interface example 3' : 'App screen dark state'}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
              <Image
                src={slug === 'jobs' ? '/image/IA1.png' : '/image/24. iPhone.png'}
                alt={slug === 'jobs' ? 'Jobs interface example 4' : 'App screen with notifications'}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        }
      />

      {/* Section 6: Installation Tracking UI */}
      <CaseStudySection
        leftContent={
          slug === 'jobs' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Designing Jobs to work within existing workflows
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                Jobs needed to fit into an ecosystem where projects, issues, installers, and invoices were already connected.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                A project could have issues. An issue could become a job. A job needed to reference the project without redefining it.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                Redesigning the entire workflow was not feasible in the short term. The design approach focused on supporting the current structure while making relationships clearer, delivering value immediately without blocking future improvements.
              </p>
            </>
          ) : (
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
              Real-time tracking capabilities allowed installers to mark when work
              started and completed, with checklists ensuring all documentation
              requirements were met before project closure.
            </p>
          )
        }
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src={slug === 'jobs' ? '/image/IA2.png' : '/image/24. iPhone.png'}
              alt={slug === 'jobs' ? 'Jobs workflow integration' : 'Installation tracking interface'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 6b: Designing for partial automation - Jobs only */}
      {slug === 'jobs' && (
        <CaseStudySection
          leftContent={
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Designing for partial automation with required verification
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                Invoice approval already existed in the project workflow, and Jobs needed to share it.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                OCR was introduced to reduce manual effort by reading invoice details uploaded by installers. This improved speed but introduced a risk of over trusting machine captured data.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                The design required agents to actively review and confirm key details before approval, balancing automation with clear human responsibility.
              </p>
            </>
          }
          rightContent={
            <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
              <Image
                src="/image/IA2.png"
                alt="Invoice approval interface"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover"
              />
            </div>
          }
        />
      )}

      {/* Section 7: MVP Scope */}
      <CaseStudySection
        leftContent={
          slug === 'jobs' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                What was designed and shipped
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                The work resulted in:
              </p>
              <ul className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed list-disc list-inside space-y-2 mt-2">
                <li>a UI for job creation and assignment</li>
                <li>a shared invoice approval panel</li>
                <li>a jobs overview for installers</li>
                <li>integration of jobs into the existing issues interface</li>
              </ul>
            </>
          ) : (
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
              We scoped the initial release to solve the core bottlenecks: photo
              capture, document upload, and installation tracking. We added more
              advanced capabilities (like barcodes) once the workflow proved
              effective. Keeping the MVP focused made adoption easier and guided
              where to invest next.
            </p>
          )
        }
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src={slug === 'jobs' ? '/image/IAMockup.png' : '/image/24. iPhone.png'}
              alt={slug === 'jobs' ? 'Jobs tool interface' : 'Project card with documentation'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 8: Project Details */}
      <CaseStudySection
        leftContent={
          slug === 'jobs' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Making job status and context easy to scan
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                As the feature evolved, clarity became a key UI focus.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                Internal and installer facing experiences were separated, and an overview pattern was introduced to help agents quickly understand what a job was, where it belonged, its current state, and what needed attention.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                Jobs were integrated into existing views using filters and contextual placement, reducing navigation effort and cognitive load.
              </p>
            </>
          ) : null
        }
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src={slug === 'jobs' ? '/image/CS1.png' : '/image/24. iPhone.png'}
              alt={slug === 'jobs' ? 'Jobs overview interface' : 'Project details with illustration'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 9: Metrics (Bounded Container) */}
      <CaseStudySection
        boundedContainer={true}
        leftContent={
          slug === 'jobs' ? (
            <div className="space-y-12">
              <div>
                <p className="text-6xl md:text-7xl lg:text-8xl font-light text-[hsl(var(--foreground))] mb-2">
                  900+
                </p>
                <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-light">
                  paid installer tasks tracked and invoiced
                </p>
              </div>
            </div>
          ) : (
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
          )
        }
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src={slug === 'jobs' ? '/image/settle1.png' : '/image/24. iPhone.png'}
              alt={slug === 'jobs' ? 'Jobs metrics visualization' : 'Camera interface for photo capture'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
        }
      />

      {/* Section 10: Impact/Results */}
      <CaseStudySection
        leftContent={
          slug === 'jobs' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                How Jobs changed ongoing work handling
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed">
                Jobs became a dedicated way to create, assign, and settle ongoing work across the lifespan of an installation. It enabled Otovo to handle repairs and fixes more flexibly than the project system alone, while remaining connected to it.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                Since launch, the Jobs feature has enabled 900 plus paid installer tasks to be tracked and invoiced directly within the system.
              </p>
              <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-light leading-relaxed mt-4">
                Repair and maintenance work moved from ad hoc coordination into a structured, auditable workflow, without overloading the project system designed for full installations.
              </p>
            </>
          ) : (
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
          )
        }
        rightContent={
          <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-lg overflow-hidden">
            <Image
              src={slug === 'jobs' ? '/image/settle2.png' : '/image/24. iPhone.png'}
              alt={slug === 'jobs' ? 'Jobs impact visualization' : 'Success confirmation screen'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
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

      {/* About Me Modal */}
      <AboutMeModal isOpen={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} />

      {/* Mobile Floating Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-[hsl(var(--secondary))] text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.4)] active:scale-95 transition-all duration-200 flex items-center justify-center"
        aria-label="Open menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path
            d="M3 12H21M3 6H21M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-[60]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div
            className="md:hidden fixed bottom-0 left-0 right-0 z-[70] bg-[hsl(var(--secondary))] rounded-t-3xl transition-transform duration-300 ease-out"
            style={{ maxHeight: '60vh' }}
          >
            <div className="px-6 pt-8 pb-6">
              {/* Menu Items */}
              <div className="flex flex-col gap-6 mb-8">
                <button
                  onClick={() => {
                    setIsAboutMeOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-left text-white text-sm font-light"
                >
                  About me
                </button>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left text-white text-sm font-light"
                >
                  Linked In
                </a>
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText('your-email@example.com')
                      setIsMobileMenuOpen(false)
                    } catch (err) {
                      console.error('Failed to copy email:', err)
                    }
                  }}
                  className="text-left text-white text-sm font-light bg-white/10 px-4 py-2 rounded-lg"
                >
                  Copy email
                </button>
              </div>

              {/* Case Study Numbers */}
              <div className="flex gap-6 justify-center">
                {caseStudies.map((study) => {
                  const isActive = study.number === currentProject
                  return (
                    <Link
                      key={study.number}
                      href={study.route}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-sm font-light transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-white/40'
                      }`}
                    >
                      {study.number}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

