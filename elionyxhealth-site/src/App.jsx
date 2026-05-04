import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  Database,
  ShieldCheck,
  Stethoscope,
  Users,
  Building2,
  Workflow,
  ClipboardList,
} from 'lucide-react';

const problemCards = [
  {
    title: 'Fragmented diagnosis',
    text: 'Signals, notes, and pathways live in separate places, making diagnostic reasoning harder to standardize.',
  },
  {
    title: 'Delayed routing',
    text: 'Escalation often depends on manual judgment, local process variation, and timing rather than structured guidance.',
  },
  {
    title: 'Diffuse accountability',
    text: 'Outcomes depend on whether teams act on the right insight quickly enough across complex clinical workflows.',
  },
];

const outcomes = [
  {
    title: 'Diagnostic clarity',
    text: 'Support more structured differential thinking and more consistent next-step guidance.',
    icon: Stethoscope,
  },
  {
    title: 'Optimized routing',
    text: 'Improve alignment between patients, specialists, and the next appropriate action.',
    icon: Workflow,
  },
  {
    title: 'Research acceleration',
    text: 'Identify eligible cohorts faster for trials, registries, and protocol-driven workflows.',
    icon: Users,
  },
  {
    title: 'Enterprise value',
    text: 'Create a platform story that fits health systems, research organizations, and strategic partners.',
    icon: Building2,
  },
];

const platformPillars = [
  {
    title: 'Clinical credibility',
    text: 'Serious healthcare positioning built for enterprise, grant, payer, and institutional audiences.',
    icon: ShieldCheck,
  },
  {
    title: 'Workflow fit',
    text: 'Designed to improve decisions without requiring wholesale workflow replacement.',
    icon: ClipboardList,
  },
  {
    title: 'Scalable architecture',
    text: 'A parent platform that supports multiple products under one coherent brand system.',
    icon: Database,
  },
];

function SectionEyebrow({ children }) {
  return (
    <div className='text-xs font-semibold uppercase tracking-[0.28em] text-teal-600'>
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className='mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl'>
      {children}
    </h2>
  );
}

function Container({ children, className = '' }) {
  return <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>{children}</div>;
}

export default function ElionyxHealthLandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='min-h-screen bg-[#f4f6f7] text-slate-900'>
      <header className='sticky top-0 z-50 border-b border-slate-800 bg-[#041E42]/95 backdrop-blur'>
        <Container className='flex items-center justify-between py-4'>
          <a href='#top' className='flex items-center gap-3'>
            <img
              src='/branding/elionyx-logo-horizontal-light.png'
              alt='Elionyx Health'
              className='h-10 w-auto'
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className='hidden text-white sm:block'>
              <div className='text-sm font-semibold tracking-[0.22em]'>ELIONYX HEALTH</div>
            </div>
          </a>

          <nav className='hidden items-center gap-8 text-sm text-slate-300 md:flex'>
            <a href='#platform' className='transition hover:text-white'>Platform</a>
            <a href='#realdiag' className='transition hover:text-white'>RealDiag</a>
            <a href='#critmatch' className='transition hover:text-white'>CritMatch</a>
            <a href='#outcomes' className='transition hover:text-white'>Outcomes</a>
            <a href='#about' className='transition hover:text-white'>About</a>
            <a href='#contact' className='transition hover:text-white'>Contact</a>
          </nav>

          <a
            href='#contact'
            className='inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-400'
          >
            Request Demo <ArrowRight className='h-4 w-4' />
          </a>
        </Container>
      </header>

      <main id='top'>
        <section className='bg-[#041E42] text-white'>
          <Container className='grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28'>
            <div>
              <SectionEyebrow>Clinical Intelligence Platform</SectionEyebrow>
              <h1 className='mt-4 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl'>
                Intelligent Infrastructure for Clinical Decision-Making
              </h1>
              <p className='mt-8 max-w-2xl text-lg leading-8 text-slate-300'>
                Elionyx Health improves diagnostic clarity, optimizes patient routing, and accelerates research workflows through a unified clinical intelligence platform.
              </p>
              <div className='mt-10 flex flex-wrap gap-4'>
                <a
                  href='#contact'
                  className='rounded-lg bg-teal-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-teal-400'
                >
                  Request Demo
                </a>
                <a
                  href='#platform'
                  className='rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10'
                >
                  Partner With Us
                </a>
              </div>
            </div>

            <div className='rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/20'>
              <div className='grid gap-4'>
                <div className='rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                  <div className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                    Elionyx Health
                  </div>
                  <img
                    src='/ui/analytics-placeholder.png'
                    alt='Elionyx Health logo'
                    className='h-56 w-full rounded-xl border border-slate-200 bg-white p-4 object-contain'
                  />
                </div>

                <div className='grid gap-4 md:grid-cols-2'>
                  <div className='rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                    <div className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                      CritMatch placeholder
                    </div>
                    <img
                      src='/ui/critmatch-placeholder.png'
                      alt='CritMatch logo'
                      className='h-48 w-full rounded-xl border border-slate-200 bg-white p-4 object-contain'
                    />
                  </div>

                  <div className='rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                    <div className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                      RealDiag
                    </div>
                    <video
                      src='/ui/RealDiag-Product-Film.mp4'
                      className='h-48 w-full rounded-xl border border-slate-200 bg-white object-cover'
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className='bg-white py-20'>
          <Container>
            <SectionEyebrow>The problem</SectionEyebrow>
            <SectionTitle>The challenge is not data scarcity. It is decision fragmentation.</SectionTitle>
            <div className='mt-12 grid gap-6 md:grid-cols-3'>
              {problemCards.map((card) => (
                <div key={card.title} className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
                  <h3 className='text-xl font-semibold tracking-tight text-slate-950'>{card.title}</h3>
                  <p className='mt-4 text-sm leading-7 text-slate-600'>{card.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id='platform' className='border-y border-slate-200 bg-[#eef3f4] py-20'>
          <Container>
            <SectionEyebrow>Platform</SectionEyebrow>
            <SectionTitle>One intelligence layer. Multiple workflow solutions.</SectionTitle>
            <p className='mt-5 max-w-3xl text-lg leading-8 text-slate-600'>
              Elionyx sits above existing healthcare infrastructure to improve decision-making without forcing workflow replacement.
            </p>

            <div className='mt-14 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm'>
              <div className='grid gap-6 lg:grid-cols-5 lg:items-center'>
                <div className='rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center font-medium text-slate-700'>
                  Clinical Inputs
                </div>
                <div className='text-center text-3xl text-teal-600'>→</div>
                <div className='rounded-2xl bg-[#041E42] p-8 text-center text-white'>
                  <div className='text-sm font-semibold uppercase tracking-[0.18em] text-teal-300'>Elionyx</div>
                  <div className='mt-2 text-xl font-semibold'>Intelligence Layer</div>
                </div>
                <div className='text-center text-3xl text-teal-600'>→</div>
                <div className='space-y-4'>
                  <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
                    <div className='text-sm font-semibold text-slate-950'>RealDiag</div>
                    <div className='mt-1 text-sm text-slate-600'>Diagnostic guidance</div>
                  </div>
                  <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
                    <div className='text-sm font-semibold text-slate-950'>CritMatch</div>
                    <div className='mt-1 text-sm text-slate-600'>Patient cohort identification</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id='realdiag' className='bg-white py-20'>
          <Container className='grid gap-14 lg:grid-cols-2 lg:items-center'>
            <div className='overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm'>
              <video
                src='/ui/RealDiag-Product-Film.mp4'
                className='h-auto w-full rounded-xl border border-slate-200 object-cover'
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div>
              <SectionEyebrow>RealDiag</SectionEyebrow>
              <SectionTitle>Real-time diagnostic intelligence</SectionTitle>
              <p className='mt-5 text-lg leading-8 text-slate-600'>
                RealDiag improves diagnostic accuracy, reduces misdiagnosis, and standardizes clinical decision-making across care settings.
              </p>

              <div className='mt-8 grid gap-3'>
                {[
                  'Differential diagnosis ranking',
                  'Guided workups and next-step support',
                  'Referral optimization',
                  'Explainable clinical outputs',
                  'Integration-ready deployment options',
                ].map((item) => (
                  <div key={item} className='flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3'>
                    <Stethoscope className='h-4 w-4 text-teal-600' />
                    <span className='text-sm text-slate-700'>{item}</span>
                  </div>
                ))}
              </div>

              <div className='mt-8'>
                <a
                  href='#contact'
                  className='inline-flex items-center gap-2 rounded-lg bg-[#041E42] px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-900'
                >
                  Request RealDiag Demo <ChevronRight className='h-4 w-4' />
                </a>
              </div>
            </div>
          </Container>
        </section>

        <section id='critmatch' className='bg-[#f4f6f7] py-20'>
          <Container className='grid gap-14 lg:grid-cols-2 lg:items-center'>
            <div>
              <SectionEyebrow>CritMatch</SectionEyebrow>
              <SectionTitle>Smarter matches. Better trials. Real impact.</SectionTitle>
              <p className='mt-5 text-lg leading-8 text-slate-600'>
                CritMatch is being developed as a cohort discovery and patient matching workflow for research recruitment, protocol eligibility, and operational reporting.
              </p>

              <div className='mt-8 grid gap-3'>
                {[
                  'Cohort discovery',
                  'Protocol matching',
                  'Recruitment acceleration',
                  'Operational reporting',
                ].map((item) => (
                  <div key={item} className='flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3'>
                    <Users className='h-4 w-4 text-teal-600' />
                    <span className='text-sm text-slate-700'>{item}</span>
                  </div>
                ))}
              </div>

              <div className='mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-6'>
                <div className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>Placeholder status</div>
                <p className='mt-3 text-sm leading-7 text-slate-600'>
                  Expanded CritMatch product interface currently in development. Branded placeholder visuals should be used until the live product screens are ready.
                </p>
              </div>
            </div>

            <div className='overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm'>
              <img
                src='/ui/critmatch-placeholder.png'
                alt='CritMatch placeholder screen'
                className='h-auto w-full rounded-xl border border-slate-200 object-cover'
              />
            </div>
          </Container>
        </section>

        <section id='outcomes' className='bg-[#041E42] py-20 text-white'>
          <Container>
            <SectionEyebrow>Outcomes</SectionEyebrow>
            <SectionTitle>Designed to improve healthcare and enterprise outcomes.</SectionTitle>
            <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
              {outcomes.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className='rounded-3xl border border-white/10 bg-white/5 p-7'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-teal-200'>
                      <Icon className='h-5 w-5' />
                    </div>
                    <h3 className='mt-5 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-3 text-sm leading-7 text-slate-300'>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section id='about' className='bg-white py-20'>
          <Container>
            <SectionEyebrow>About</SectionEyebrow>
            <SectionTitle>Built for serious healthcare workflows.</SectionTitle>
            <p className='mt-5 max-w-3xl text-lg leading-8 text-slate-600'>
              Elionyx Health is the parent platform for RealDiag and CritMatch. The company is designed to present as a credible healthcare infrastructure brand while giving each product room to address a distinct workflow problem.
            </p>

            <div className='mt-12 grid gap-6 md:grid-cols-3'>
              {platformPillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className='rounded-[2rem] border border-slate-200 bg-slate-50 p-7'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-sm'>
                      <Icon className='h-5 w-5' />
                    </div>
                    <h3 className='mt-5 text-xl font-semibold tracking-tight text-slate-950'>{item.title}</h3>
                    <p className='mt-3 text-sm leading-7 text-slate-600'>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section id='contact' className='border-t border-slate-200 bg-[#eef3f4] py-20'>
          <Container className='max-w-4xl text-center'>
            <SectionEyebrow>Contact</SectionEyebrow>
            <SectionTitle>Ready to discuss a demo, pilot, or partnership?</SectionTitle>
            <p className='mt-5 text-lg leading-8 text-slate-600'>
              Use this site as the public front door for Elionyx Health, with deeper product demos and investor materials hosted privately as needed.
            </p>

            <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
              <a
                href='mailto:info@elionyxhealth.com'
                className='rounded-lg bg-[#041E42] px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-900'
              >
                Contact Elionyx Health
              </a>
              <a
                href='#top'
                className='rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400'
              >
                Back to Top
              </a>
            </div>
          </Container>
        </section>
      </main>

      <footer className='border-t border-slate-200 bg-white'>
        <Container className='flex flex-col gap-3 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between'>
          <div>© {currentYear} Elionyx Health. All rights reserved.</div>
          <div>Parent platform for RealDiag and CritMatch.</div>
        </Container>
      </footer>
    </div>
  );
}
