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
        headline: 'Installer App: Installation Documentation and Status Tracking',
        description: 'Impact metrics',
        image: '/image/installerapp4.png',
      },
      'merchant-app': {
        headline: 'Settle: Designing Merchant Payments for Physical Shops',
        description: 'Starting from a product built for peer-to-peer payments',
        image: '/image/settleappcombo.png',
      },
      'jobs': {
        headline: 'Jobs: Repairs and Fixes Workflow',
        description: 'Imagine a customer with a solar installation that\'s been running for a few years. Something stops working. They don\'t know who to call, so they contact Otovo. Behind the scenes, the team needs to understand the issue, assign the work, manage responsibility and cost, and approve an invoice without slowing daily operations. This is the context in which Jobs was introduced.',
        image: '/image/jobs.png',
      },
      'customersupport': {
        headline: 'Building AI Supported Customer Support',
        description: 'Overview',
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
        className={slug === 'merchant-app' ? '!pt-[180px] md:!pt-[280px] [&>div>div>div:last-child]:justify-center' : slug === 'installer-app' ? '!pt-[120px] md:!pt-[200px]' : slug === 'jobs' ? '!pt-[120px] md:!pt-[200px]' : ''}
        leftContent={
          slug === 'jobs' ? (
            <>
              <p className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] font-normal mb-3 uppercase tracking-wide">
                Otovo • Operations Tool • B2B
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--foreground))] leading-tight mb-4">
                designing Jobs: the operational tool for maintenance
              </h1>
              <p className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] font-normal">
                900+ Jobs Invoiced
              </p>
            </>
          ) : slug === 'merchant-app' ? (
            <>
              <p className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] font-normal mb-3 uppercase tracking-wide">
                Settle ASA • FINTECH 2019
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--foreground))] leading-tight mb-4 max-w-[90%]">
                Settle: Designing Merchant Payments for Physical Shops
              </h1>
              <p className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] font-normal">
                Integrated Merchant payments in P2P payments app
              </p>
            </>
          ) : slug === 'installer-app' ? (
            <>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--foreground))] leading-tight mb-4">
                Installer App: Installation Documentation and Status Tracking
              </h1>
              <div className="space-y-2 mt-4">
                <p className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] font-normal">
                  1,057 installation projects used the Installer App.
                </p>
                <p className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] font-normal">
                  Projects using the app spent 18 percent less time on documentation.
                </p>
              </div>
            </>
          ) : slug === 'customersupport' ? (
            <>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--foreground))] leading-tight mb-4">
                Building AI Supported Customer Support
              </h1>
              <div className="space-y-4 mt-4">
                <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                  As Otovo scaled across markets, customer support volume increased rapidly. Most incoming tickets were not complex issues, but repeated questions about project status, payments, and next steps.
                </p>
                <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                  Analysis showed that these questions were largely caused by missing, unclear, or poorly timed information across the product rather than failures in support handling.
                </p>
                <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                  The goal of this work was to reduce unnecessary support requests by improving how information was presented, while still preserving access to human support when needed.
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="text-2xl md:text-4xl lg:text-5xl font-light text-[hsl(var(--foreground))] leading-tight">
                {projectContent.headline}
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                {projectContent.description}
              </p>
            </>
          )
        }
        rightContent={
          slug === 'merchant-app' ? (
            <div className="flex justify-end w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[hsl(var(--background))] img-scale-mobile md:img-scale-1-44" style={{ minHeight: '200px' }}>
                <video
                  src="/image/settle app/settlegif1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain rounded-[20px]"
                />
              </div>
            </div>
          ) : slug === 'installer-app' ? (
            <div className="flex justify-end w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[hsl(var(--background))] img-scale-mobile md:img-scale-1-44" style={{ minHeight: '200px' }}>
                <Image
                  src="/image/installer app/headerimage.png"
                  alt="Installer app header"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-contain rounded-[20px]"
                  priority
                />
              </div>
            </div>
          ) : slug === 'jobs' ? (
            <div className="flex justify-end w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[hsl(var(--background))] img-scale-mobile md:img-scale-2-88" style={{ minHeight: '200px' }}>
                <Image
                  src="/image/jobs/headerImage.png"
                  alt="Jobs header"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-contain rounded-[20px]"
                  priority
                />
              </div>
            </div>
          ) : (
            <div className="relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-1-2" style={{ minHeight: '200px' }}>
              <Image
                src={projectContent.image}
                alt="Project visual"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
                priority
              />
            </div>
          )
        }
      />

      {/* Section 3: Context */}
      <CaseStudySection
        leftContent={
          slug === 'jobs' ? (
            <>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Otovo already had a detailed workflow for installation projects. While it worked well for installations, repairs, fixes, and inspections behaved differently. They were smaller in scope, more dynamic, and linked to projects without being equivalent to them.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Trying to fit this work into the project workflow added friction and raised an early design question:
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4 italic">
                Are we improving the experience by extending what exists, or by treating this as a different type of work?
              </p>
            </>
          ) : slug === 'merchant-app' ? (
            <>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                In 2019, Settle was a peer-to-peer payments app. Users could add a wallet and send money instantly to other people.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                The goal was to support in-person payments at nearby shops and events using the same app people already used for peer-to-peer transfers.
              </p>
            </>
          ) : slug === 'customersupport' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Core problem we were addressing
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Customers contacted support primarily to reduce uncertainty.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                They wanted to know:
              </p>
              <ul className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed list-disc list-inside space-y-2 mt-2">
                <li>where their installation was in the process</li>
                <li>when payments would happen</li>
                <li>what would happen next</li>
              </ul>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Support teams were repeatedly answering the same questions because the product did not surface this information clearly at the right time.
              </p>
            </>
          ) : slug === 'installer-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                The scenario we were designing for
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Installers completed solar installations on site and were required to document the work for approval and payment. This involved capturing photos, hardware identifiers, and signed documents, often under time pressure and in varying site conditions.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Before the app existed, installers relied on paper notes and memory to track documentation requirements. Operations teams had limited visibility into installation progress and frequently contacted installers to confirm status.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                The goal was to support accurate documentation in the field while creating clear, dependable status signals for back office teams, without slowing installers down.
              </p>
            </>
          ) : (
            <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
              The workflow between field installers and back-office operations
              needed to be redefined to ensure timely documentation and smoother
              project completion.
            </p>
          )
        }
        rightContent={
          slug === 'merchant-app' ? null : slug === 'installer-app' ? (
            <div className="relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-2-4" style={{ minHeight: '200px' }}>
              <Image
                src="/image/installer app/workers.png"
                alt="Workers installation scenario"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          ) : slug === 'jobs' ? null : (
            <div className="relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-1-2" style={{ minHeight: '200px' }}>
              <Image
                src={slug === 'jobs' ? '/image/installerapp4.png' : '/image/installerapp4.png'}
                alt={slug === 'jobs' ? 'Installation workflow comparison' : 'Building scaffolding detail'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          )
        }
      />

      {/* New Section: Image Only (Merchant App only) - Second Section */}
      {slug === 'merchant-app' && (
        <CaseStudySection
          className="py-40 md:py-64"
          rightContent={
            <div className="flex justify-end items-center w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto md:w-2/3 rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-3" style={{ minHeight: '150px' }}>
                <Image
                  src="/image/settle app/settle app 2019.png.png"
                  alt="Settle app 2019"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-contain"
                />
              </div>
            </div>
          }
        />
      )}

      {/* Section 2: Context Introduction */}
      {slug === 'jobs' && (
        <CaseStudySection
          leftContent={
            <p className="text-base md:text-lg text-white font-bold leading-relaxed">
              Imagine a customer with a solar installation that's been running for a few years. Something stops working. They don't know who to call, so they contact Otovo. Behind the scenes, the team needs to understand the issue, assign the work, manage responsibility and cost, and approve an invoice without slowing daily operations. This is the context in which Jobs was introduced.
            </p>
          }
        />
      )}

      {/* Image-Only Section: Flow (Jobs only) */}
      {slug === 'jobs' && (
        <CaseStudySection
          className="py-40 md:py-64"
          rightContent={
            <div className="flex justify-end items-center w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto md:w-1/2 rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-3" style={{ minHeight: '150px' }}>
                <Image
                  src="/image/jobs/flow.png"
                  alt="Jobs flow"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          }
        />
      )}

      {/* Image-Only Section: Walkthrough (Jobs only) */}
      {slug === 'jobs' && (
        <CaseStudySection
          className="py-40 md:py-64"
          rightContent={
            <div className="flex justify-end items-center w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto md:w-1/2 rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-3" style={{ minHeight: '150px' }}>
                <Image
                  src="/image/jobs/walkthrough.png"
                  alt="Jobs walkthrough"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          }
        />
      )}

      {/* Section 4: Solution Approach */}
      <CaseStudySection
        leftContent={
          slug === 'customersupport' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Information design as the primary lever
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Rather than starting with tooling, we focused first on information design.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                The design approach was to reduce the need to ask a question at all by making key information visible, timely, and contextual.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                This included:
              </p>
              <ul className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed list-disc list-inside space-y-2 mt-2">
                <li>redesigning MyPage modules to clearly show installation status and milestones</li>
                <li>surfacing payment timing and expectations explicitly</li>
                <li>explaining next steps in plain language instead of linking to generic help content</li>
              </ul>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                The intent was that customers could understand their situation without navigating to a Help Center or contacting support.
              </p>
            </>
          ) : slug === 'installer-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Defining the product role before designing the interface
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Because no installer app existed, the initial design work focused on product definition.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                We clarified what the app needed to support in the long term and what it needed to deliver in its first release. A key decision was to define the app as a tool for connecting field documentation with back office operations, rather than a simple photo upload interface.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                This definition shaped scope, information architecture, and how success was measured for the first version.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Design contribution: translated an unclear requirement for documentation into a defined product role focused on on-site capture and operational visibility.
              </p>
            </>
          ) : slug === 'merchant-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                This work tested a hypothesis: that shops and merchant payments could live inside a peer-to-peer payments app.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Doing this introduced different expectations than person-to-person transfers. In physical settings, customers needed to discover nearby shops, browse menus without standing in line, place orders, and pay quickly from their phone. Merchants needed to appear inside the app, accept digital payments without physical POS hardware, and manage payouts centrally.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Validating this hypothesis required adding merchant and shop capabilities to a product originally designed for person-to-person payments.
              </p>
            </>
          ) : slug === 'jobs' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Deciding whether Jobs should be a separate tool
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Before exploring UI, the focus was on whether Jobs should exist as its own tool.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Treating jobs as simplified projects would blur conceptual boundaries, add conditional complexity, and slow implementation. From engineering and business perspectives, a separate, lightweight tool could be built faster and tested safely. From a design perspective, it allowed jobs to be represented clearly as their own object, connected to projects but not pretending to be one.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                This led to the decision to design Jobs as a standalone beta without disturbing the core marketplace workflow.
              </p>
            </>
          ) : (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Because no installer app existed, we first had to define what work
                belonged in the field versus the back office.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                This was an exercise in how installers should document, a new
                workflow for back-office teams, and how the data would flow from
                the field to the back office and beyond.
              </p>
            </>
          )
        }
        rightContent={
          slug === 'installer-app' ? null : slug === 'jobs' ? (
            <div className="relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-2-145" style={{ minHeight: '200px' }}>
              <Image
                src="/image/jobs/snapshot.png"
                alt="Jobs snapshot"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          ) : (
            <div className={`relative w-full max-w-full mx-auto md:ml-auto ${slug === 'merchant-app' ? 'md:max-w-none' : 'md:max-w-sm'} rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile ${slug === 'merchant-app' ? 'md:img-scale-1-32' : 'md:img-scale-1-2'}`} style={{ minHeight: '200px' }}>
              <Image
                src={slug === 'jobs' ? '/image/24. iPhone3.png' : slug === 'merchant-app' ? '/image/settle app/group image 1.png' : '/image/24. iPhone.png'}
                alt={slug === 'jobs' ? 'Jobs tool decision process' : slug === 'merchant-app' ? 'Settle merchant group interface' : 'Mobile app interface showing projects list'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          )
        }
      />

      {/* Image-Only Section: Experience Map (Installer App only) */}
      {slug === 'installer-app' && (
        <CaseStudySection
          className="py-40 md:py-64"
          rightContent={
            <div className="flex justify-end items-center w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto md:w-1/2 rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-1-5" style={{ minHeight: '150px' }}>
                <Image
                  src="/image/installer app/experience map.png"
                  alt="Experience map"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          }
        />
      )}

      {/* Image-Only Section: North Star (Installer App only) */}
      {slug === 'installer-app' && (
        <CaseStudySection
          className="py-40 md:py-64"
          rightContent={
            <div className="flex justify-end items-center w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto md:w-1/2 rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-1-5" style={{ minHeight: '150px' }}>
                <Image
                  src="/image/installer app/north star.png"
                  alt="North star"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          }
        />
      )}

      {/* New Section: Horizontal Image List (Merchant App only) */}
      {slug === 'merchant-app' && (
        <CaseStudySection
          className="py-40 md:py-64"
          rightContent={
            <div className="flex justify-end w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto md:w-1/2 rounded-[16px] overflow-hidden bg-[hsl(var(--background))] shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-3-3" style={{ minHeight: '150px' }}>
                <Image
                  src="/image/settle app/settleasa03.png"
                  alt="Settle merchant setup interface"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          }
        />
      )}

      {/* Section 5: App Interface Examples */}
      <CaseStudySection
        className={slug === 'merchant-app' ? 'py-20 md:py-32 lg:py-40 [&>div>div>div:last-child]:justify-center' : ''}
        leftContent={
          slug === 'customersupport' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Dynamic FAQs tied to the installation stage
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                A key concept explored was dynamic FAQs that changed based on where the customer was in their installation journey.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Instead of a static list of questions, answers would be generated based on:
              </p>
              <ul className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed list-disc list-inside space-y-2 mt-2">
                <li>current installation stage</li>
                <li>payment status</li>
                <li>market specific rules</li>
              </ul>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                This approach was designed but not fully implemented due to time and implementation constraints. As a result, some information remained fragmented across different surfaces.
              </p>
            </>
          ) : slug === 'merchant-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Merchant payments needed to be treated as a separate problem space
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                From a design perspective, merchant payments could not be handled as a variation of peer-to-peer transfers.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Merchant transactions involve settlement, reporting, identity verification, and regulatory compliance, particularly in European markets. These requirements affected how flows were structured, how data was surfaced, and how permissions were handled.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                The system needed to make these differences explicit rather than hiding them behind the same interface.
              </p>
            </>
          ) : slug === 'jobs' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                What the Jobs tool needed to support for internal teams
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                For Otovo agents, handling a job involved documenting the issue, assigning work, updating requirements, tracking progress, and approving invoices.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Installers needed a clear view of assigned jobs, expectations, and how to submit invoices correctly.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Design decisions were driven by mapping this work carefully and ensuring the system reflected how tasks were handled in practice.
              </p>
            </>
          ) : slug === 'installer-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Designing for field conditions rather than ideal workflows
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Testing showed that installers worked in environments with frequent interruptions. Documentation requirements varied by project, and installers regularly checked paper notes to confirm what needed to be captured.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                The workflow was closer to structured compliance capture than a linear upload process, with variation across hardware, site conditions, and project requirements.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Design contribution: reduced reliance on memory and interpretation by designing workflows that guided required capture step by step.
              </p>
            </>
          ) : (
            <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
              The new workflow was organized into modules and sections to ensure
              work flow between installers and operations. This made the
              installation and operations teams more efficient. Ultimately, allowing
              operations to track, verify, and use information has created a
              better experience.
            </p>
          )
        }
        rightContent={
          slug === 'merchant-app' ? (
            <div className="flex justify-end w-full">
              <div className="relative w-full max-w-full md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-1-8" style={{ minHeight: '200px' }}>
                <Image
                  src="/image/settle app/settleasa06.png"
                  alt="Settle merchant interface"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-contain"
                />
              </div>
            </div>
          ) : slug === 'installer-app' ? null : slug === 'jobs' ? null : (
            <div className="relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-1-2" style={{ minHeight: '200px' }}>
              <Image
                src={slug === 'jobs' ? '/image/24. iPhone.png' : '/image/24. iPhone.png'}
                alt={slug === 'jobs' ? 'Jobs interface example' : 'App screen with house illustration'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          )
        }
      />

      {/* Image-Only Section: Flowmap (Installer App only) */}
      {slug === 'installer-app' && (
        <CaseStudySection
          className="py-40 md:py-64"
          rightContent={
            <div className="flex justify-end items-center w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto md:w-1/2 rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-1-5" style={{ minHeight: '150px' }}>
                <Image
                  src="/image/installer app/flowmap.png"
                  alt="Flow map"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          }
        />
      )}

      {/* Image-Only Section: All Screens (Jobs only) */}
      {slug === 'jobs' && (
        <CaseStudySection
          className="py-40 md:py-64"
          rightContent={
            <div className="flex justify-end items-center w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto md:w-1/2 rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-3" style={{ minHeight: '150px' }}>
                <Image
                  src="/image/jobs/all screens.png"
                  alt="Jobs all screens"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          }
        />
      )}

      {/* Section 6: Installation Tracking UI */}
      <CaseStudySection
        leftContent={
          slug === 'installer-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Structuring documentation without slowing installation work
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                A central interaction challenge was how to structure documentation while maintaining installation speed.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                We explored different approaches, including capturing content first and adding details later, organising documentation by hardware type, organising by action type, and guiding installers through a minimum required set with optional additions.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                The checklist became the primary mechanism for balancing structure and speed while meeting operational requirements.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Design contribution: used structure to make documentation requirements explicit and consistent across installations.
              </p>
            </>
          ) : slug === 'merchant-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                A merchant portal became necessary to support operational needs
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                To support location-based payments, merchants needed a dedicated way to manage their setup and operations.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                The merchant portal allowed businesses to register and verify identity, configure payout and settlement preferences, define menus and pricing visible to customers, and access transaction status and reporting.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                This separated operational and regulatory complexity from the consumer app, allowing each experience to stay focused.
              </p>
            </>
          ) : slug === 'jobs' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Designing Jobs to work within existing workflows
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Jobs needed to fit into an ecosystem where projects, issues, installers, and invoices were already connected.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                A project could have issues. An issue could become a job. A job needed to reference the project without redefining it.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Redesigning the entire workflow was not feasible in the short term. The design approach focused on supporting the current structure while making relationships clearer, delivering value immediately without blocking future improvements.
              </p>
            </>
          ) : slug === 'customersupport' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Introducing AI cautiously
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                AI was introduced to support search based answers rather than as a conversational chatbot.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                This decision was based on two observations:
              </p>
              <ul className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed list-disc list-inside space-y-2 mt-2">
                <li>trust in chatbots was low, especially among older customers</li>
                <li>many support questions required precise, factual answers rather than conversation</li>
              </ul>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                AI was used to surface relevant answers more efficiently, but responses required monitoring to ensure correctness and clarity.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                AI reduced effort, but did not eliminate the need for oversight.
              </p>
            </>
          ) : slug === 'installer-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Making installation progress visible through documentation actions
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Operational discussions highlighted that a large amount of coordination effort was spent answering whether an installation had started or finished.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Instead of introducing a separate reporting step, we embedded simple start and end markers directly into the documentation flow. These markers created a shared timeline that operations teams could rely on.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Design contribution: turned documentation actions into system-level status signals without adding extra steps for installers.
              </p>
            </>
          ) : (
            <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
              Real-time tracking capabilities allowed installers to mark when work
              started and completed, with checklists ensuring all documentation
              requirements were met before project closure.
            </p>
          )
        }
        rightContent={
          slug === 'merchant-app' ? null : slug === 'installer-app' ? (
            <div className="relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-4-8" style={{ minHeight: '200px' }}>
              <Image
                src="/image/installer app/allvertical.png"
                alt="All vertical installation tracking"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          ) : slug === 'jobs' ? null : (
            <div className="relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-1-2" style={{ minHeight: '200px' }}>
              <Image
                src={slug === 'jobs' ? '/image/IA2.png' : '/image/24. iPhone.png'}
                alt={slug === 'jobs' ? 'Jobs workflow integration' : 'Installation tracking interface'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          )
        }
      />

      {/* Image-Only Section: Invoice Video (Jobs only) */}
      {slug === 'jobs' && (
        <CaseStudySection
          className="py-40 md:py-64"
          rightContent={
            <div className="flex justify-end items-center w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto md:w-1/2 rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[hsl(var(--background))] img-scale-mobile md:img-scale-1-5" style={{ minHeight: '150px' }}>
              <video
                src="/image/jobs/invoice video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
              </div>
            </div>
          }
        />
      )}

      {/* Section 6b: Designing for partial automation - Jobs only */}
      {slug === 'jobs' && (
        <CaseStudySection
          leftContent={
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Designing for partial automation with required verification
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Invoice approval already existed in the project workflow, and Jobs needed to share it.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                OCR was introduced to reduce manual effort by reading invoice details uploaded by installers. This improved speed but introduced a risk of over trusting machine captured data.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                The design required agents to actively review and confirm key details before approval, balancing automation with clear human responsibility.
              </p>
            </>
          }
          rightContent={null}
        />
      )}

      {/* Section 7: MVP Scope */}
      <CaseStudySection
        leftContent={
          slug === 'customersupport' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Customers still wanted human contact
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Even when information was clearer and AI assisted answers were available, some customers still wanted to talk to a person.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                This was especially true in edge cases, delays, or moments of uncertainty.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                In early iterations, access to human support was too restricted. Customers who were previously used to calling a phone line experienced frustration when they could not easily reach a person.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                This was a critical learning.
              </p>
            </>
          ) : slug === 'installer-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Scoping the first release to support iteration
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                The first release focused on features that directly changed how installation work was documented:
              </p>
              <ul className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed list-disc list-inside space-y-2 mt-2">
                <li>photo documentation</li>
                <li>signed document upload</li>
                <li>installation start and end tracking</li>
              </ul>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                After adoption and value were confirmed, barcode scanning was added to reduce manual entry and shorten the time required to capture hardware identifiers.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Design contribution: used phased delivery to support iteration while maintaining a stable product foundation.
              </p>
            </>
          ) : slug === 'merchant-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Designing across connected touchpoints instead of a single flow
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Rather than forcing everything into one interface, the design work was split across multiple connected surfaces.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                <strong>Merchant setup and management</strong><br />
                A web-based portal supported longer tasks such as configuration and reporting. This was the first desktop-first experience in the product and required different navigation patterns and information density than mobile.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                <strong>Customer ordering and payment</strong><br />
                Inside the existing Settle app, customers could discover nearby shops, browse menus, place orders, and pay using their wallet. The existing payment infrastructure was reused, with adaptations for merchant transactions.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                <strong>QR codes as an alternative entry point</strong><br />
                QR codes were explored as a faster way to access a shop. Scanning a code opened the menu directly and allowed immediate payment, and this approach was tested alongside location-based discovery.
              </p>
            </>
          ) : slug === 'jobs' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                What was designed and shipped
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                The work resulted in:
              </p>
              <ul className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed list-disc list-inside space-y-2 mt-2">
                <li>a UI for job creation and assignment</li>
                <li>a shared invoice approval panel</li>
                <li>a jobs overview for installers</li>
                <li>integration of jobs into the existing issues interface</li>
              </ul>
            </>
          ) : (
            <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
              We scoped the initial release to solve the core bottlenecks: photo
              capture, document upload, and installation tracking. We added more
              advanced capabilities (like barcodes) once the workflow proved
              effective. Keeping the MVP focused made adoption easier and guided
              where to invest next.
            </p>
          )
        }
        rightContent={
          slug === 'installer-app' ? null : slug === 'jobs' ? null : (
            <div className={`relative w-full max-w-full ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile ${slug === 'merchant-app' ? 'md:img-scale-3-6' : 'md:img-scale-1-2'}`} style={{ minHeight: '200px', transformOrigin: 'top center' }}>
              <Image
                src={slug === 'jobs' ? '/image/IAMockup.png' : slug === 'merchant-app' ? '/image/settle app/settleasa1410.png' : '/image/24. iPhone.png'}
                alt={slug === 'jobs' ? 'Jobs tool interface' : slug === 'merchant-app' ? 'Settle connected touchpoints' : 'Project card with documentation'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          )
        }
      />

      {/* Image-Only Section: All Screens (Installer App only) */}
      {slug === 'installer-app' && (
        <CaseStudySection
          className="py-40 md:py-64"
          rightContent={
            <div className="flex justify-end items-center w-full">
              <div className="relative w-full max-w-full mx-auto md:ml-auto md:w-2/3 rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-3" style={{ minHeight: '150px' }}>
                <Image
                  src="/image/installer app/iall screens.png"
                  alt="All screens"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-contain"
                />
              </div>
            </div>
          }
        />
      )}

      {/* Section 8: Project Details */}
      <CaseStudySection
        leftContent={
          slug === 'merchant-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Scoping the first version to enable learning
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                The first version was intentionally limited.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Instead of building a full commerce platform, the design focused on the minimum set of merchant capabilities needed to operate. Scenarios such as food festivals and temporary markets were used to validate assumptions around setup effort, speed, and clarity.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                This allowed the team to learn quickly before investing in broader functionality.
              </p>
            </>
          ) : slug === 'jobs' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Making job status and context easy to scan
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                As the feature evolved, clarity became a key UI focus.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Internal and installer facing experiences were separated, and an overview pattern was introduced to help agents quickly understand what a job was, where it belonged, its current state, and what needed attention.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Jobs were integrated into existing views using filters and contextual placement, reducing navigation effort and cognitive load.
              </p>
            </>
          ) : slug === 'customersupport' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Build versus buy tradeoff
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                During the project, a key question was whether to:
              </p>
              <ul className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed list-disc list-inside space-y-2 mt-2">
                <li>use a third party support tool that already handled routing, escalation, and AI responses</li>
                <li>or design and build an inhouse solution tailored to Otovo's workflows</li>
              </ul>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Given limited time and implementation capacity, we chose to design a focused inhouse solution first, with the intention to improve and expand it over time.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                This allowed faster rollout, but also meant some details were not implemented to the level customers expected, contributing to frustration during early use.
              </p>
            </>
          ) : slug === 'installer-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Reducing friction by focusing on the active installation
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                A usability issue identified early was that installers could not easily tell which installation they were expected to work on that day. Without this clarity, the app risked becoming noisy and unreliable in the field.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                The interface was adjusted to prioritise the current installation, supporting installation-day work rather than presenting a general project list.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Design contribution: reduced navigation and selection effort to match real working conditions on site.
              </p>
            </>
          ) : null
        }
        rightContent={
          slug === 'merchant-app' ? null : slug === 'installer-app' ? (
            <div className="relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[hsl(var(--background))] img-scale-mobile md:img-scale-1-2" style={{ minHeight: '200px' }}>
              <video
                src="/image/installer app/walkthrough.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          ) : slug === 'jobs' ? (
            <div className="relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[hsl(var(--background))] img-scale-mobile md:img-scale-1-2" style={{ minHeight: '200px' }}>
              <video
                src="/image/jobs/jobvideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="relative w-full max-w-sm mx-auto rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]" style={{ minHeight: '300px', transform: 'scale(1.2)', transformOrigin: 'center' }}>
              <Image
                src={slug === 'jobs' ? '/image/CS1.png' : '/image/24. iPhone.png'}
                alt={slug === 'jobs' ? 'Jobs overview interface' : 'Project details with illustration'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          )
        }
      />

      {/* Section 9: Metrics (Bounded Container) */}
      <CaseStudySection
        boundedContainer={true}
        boundedContainerPadding={slug === 'merchant-app' ? 'py-24 md:py-36 lg:py-48 px-8 md:px-12 lg:px-16' : 'p-8 md:p-12 lg:p-16'}
        leftContent={
          slug === 'merchant-app' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                What this work made possible
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                This work established:
              </p>
              <ul className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed list-disc list-inside space-y-2 mt-2">
                <li>a clear path from peer-to-peer payments to consumer-to-business transactions</li>
                <li>a compliant foundation for merchant payments in European markets</li>
                <li>a system flexible enough to support both temporary events and permanent shops</li>
              </ul>
            </>
          ) : slug === 'jobs' ? (
            <div className="space-y-12">
              <div>
                <p className="text-6xl md:text-7xl lg:text-8xl font-light text-[hsl(var(--foreground))] mb-2">
                  900+
                </p>
                <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-normal">
                  paid installer tasks tracked and invoiced
                </p>
              </div>
            </div>
          ) : slug === 'customersupport' ? (
            <>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                Outcomes
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                Support ticket volume was significantly reduced after launch, particularly for repetitive status and payment related questions.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                Support teams were able to spend more time on complex cases rather than answering the same questions repeatedly.
              </p>
              <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                At the same time, the project revealed clear limits:
              </p>
              <ul className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed list-disc list-inside space-y-2 mt-2">
                <li>AI responses required ongoing monitoring</li>
                <li>information design alone could not replace human reassurance</li>
                <li>removing familiar contact channels too quickly damaged trust</li>
              </ul>
            </>
          ) : slug === 'installer-app' ? (
            <div className="space-y-12">
              <div>
                <p className="text-6xl md:text-7xl lg:text-8xl font-light text-[hsl(var(--foreground))] mb-2">
                  1,057
                </p>
                <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-normal">
                  installation projects used the Installer App
                </p>
              </div>
              <div>
                <p className="text-6xl md:text-7xl lg:text-8xl font-light text-[hsl(var(--foreground))] mb-2">
                  18%
                </p>
                <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-normal">
                  less time on documentation
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                  Documentation was now expected to be completed on the same day with operations being able to invoice the customer earlier than before. Operations are also proactively notified when the installation work starts and ends.
                </p>
                <p className="text-sm text-[hsl(var(--muted-foreground))] font-normal">
                  Barcode scanning was introduced in the next iteration to assist documentation.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              <div>
                <p className="text-6xl md:text-7xl lg:text-8xl font-light text-[hsl(var(--foreground))] mb-2">
                  18%
                </p>
                <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-normal">
                  Reduction in documentation time
                </p>
              </div>
              <div>
                <p className="text-6xl md:text-7xl lg:text-8xl font-light text-[hsl(var(--foreground))] mb-2">
                  1000+
                </p>
                <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] font-normal">
                  projects completed through the app
                </p>
              </div>
            </div>
          )
        }
        rightContent={
          slug === 'merchant-app' ? (
            <div className={`relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-1-44`} style={{ minHeight: '200px' }}>
              <Image
                src="/image/settle app/settleasa10.png"
                alt="What this work made possible"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          ) : slug === 'installer-app' ? (
            <div className="relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[hsl(var(--background))] img-scale-mobile md:img-scale-0-8" style={{ minHeight: '200px' }}>
              <video
                src="/image/installer app/barcode scanner.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          ) : slug === 'jobs' ? null : (
            <div className={`relative w-full max-w-full mx-auto md:ml-auto md:max-w-sm rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] img-scale-mobile md:img-scale-1-2`} style={{ minHeight: '200px' }}>
              <Image
                src={slug === 'jobs' ? '/image/settle1.png' : '/image/24. iPhone.png'}
                alt={slug === 'jobs' ? 'Jobs metrics visualization' : 'Camera interface for photo capture'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          )
        }
      />

      {/* Section 10: Impact/Results */}
      {slug !== 'merchant-app' && slug !== 'installer-app' && (
        <CaseStudySection
          leftContent={
            slug === 'customersupport' ? (
              <>
                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                  Key reflection
                </p>
                <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                  Reducing support demand is not only a tooling problem.
                </p>
                <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                  Clear information design can prevent many questions, and AI can help scale answers, but customers still expect visible and reliable access to human support.
                </p>
                <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                  The long term value of this work came from understanding where automation helps and where it should stop, and from treating customer support as an evolving system rather than a one time solution.
                </p>
              </>
            ) : slug === 'jobs' ? (
              <>
                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(var(--foreground))] leading-tight mb-4">
                  How Jobs changed ongoing work handling
                </p>
                <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                  Jobs became a dedicated way to create, assign, and settle ongoing work across the lifespan of an installation. It enabled Otovo to handle repairs and fixes more flexibly than the project system alone, while remaining connected to it.
                </p>
                <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                  Since launch, the Jobs feature has enabled 900 plus paid installer tasks to be tracked and invoiced directly within the system.
                </p>
                <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mt-4">
                  Repair and maintenance work moved from ad hoc coordination into a structured, auditable workflow, without overloading the project system designed for full installations.
                </p>
              </>
            ) : null
          }
          rightContent={slug === 'jobs' ? null : (
            <div className="relative w-full max-w-sm mx-auto rounded-none overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]" style={{ minHeight: '300px', transform: 'scale(1.2)', transformOrigin: 'center' }}>
              <Image
                src={slug === 'jobs' ? '/image/settle2.png' : '/image/24. iPhone.png'}
                alt={slug === 'jobs' ? 'Jobs impact visualization' : 'Success confirmation screen'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain"
              />
            </div>
          )}
        />
      )}

      {/* Footer */}
      <footer className="py-20 md:py-32 bg-[hsl(var(--background))]">
        <div className="w-full px-5 md:px-10 lg:px-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <Link
              href="/project-overview"
              className="text-sm text-[hsl(var(--foreground))] underline"
            >
              Back to all projects
            </Link>
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
                  className="text-left text-white text-sm font-light bg-white/10 px-4 py-2 rounded-none"
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

