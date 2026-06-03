import React, { useState } from 'react';
function CollapsibleNotice({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className='mb-8 rounded-2xl border border-teal-300 bg-teal-50 p-6 shadow'>
      <button
        type='button'
        className='flex w-full items-center justify-between text-lg font-bold text-teal-900 mb-2 focus:outline-none'
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`notice-content-${title.replace(/\s+/g, '')}`}
      >
        <span>{title}</span>
        <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && (
        <div id={`notice-content-${title.replace(/\s+/g, '')}`}>{children}</div>
      )}
    </div>
  );
}
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

function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl ${className}`}>
      {children}
    </h2>
  );
}

function Container({ children, className = '' }) {
  return <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>{children}</div>;
}

function encodeFormData(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');
}

function ContactForm() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    // Honeypot: if filled, silently succeed.
    if (formData.get('bot-field')) {
      setStatus('success');
      form.reset();
      return;
    }

    const payload = {
      'form-name': 'contact',
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      organization: formData.get('organization') || '',
      topic: formData.get('topic') || 'General',
      message: formData.get('message') || '',
    };

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(payload),
      });
      if (!res.ok) {
        throw new Error(`Submission failed (${res.status})`);
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err?.message || 'Submission failed. Please email info@elionyxhealth.com directly.');
    }
  }

  if (status === 'success') {
    return (
      <div className='mt-10 rounded-3xl border border-teal-200 bg-white p-8 text-center shadow-sm'>
        <h3 className='text-xl font-semibold text-slate-950'>Thank you — we received your message.</h3>
        <p className='mt-3 text-sm leading-7 text-slate-600'>
          A member of the Elionyx Health team will follow up from{' '}
          <a href='mailto:info@elionyxhealth.com' className='font-medium text-teal-700 underline-offset-4 hover:underline'>
            info@elionyxhealth.com
          </a>
          .
        </p>
        <button
          type='button'
          onClick={() => setStatus('idle')}
          className='mt-6 rounded-lg border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400'
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name='contact'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      onSubmit={handleSubmit}
      className='mt-10 grid gap-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10'
      noValidate
    >
      {/* Required by Netlify for SPA submissions */}
      <input type='hidden' name='form-name' value='contact' />
      {/* Honeypot field — humans leave it blank */}
      <p className='hidden'>
        <label>
          Don’t fill this out: <input name='bot-field' tabIndex='-1' autoComplete='off' />
        </label>
      </p>

      <div className='grid gap-5 sm:grid-cols-2'>
        <label className='block'>
          <span className='text-sm font-medium text-slate-700'>Your name</span>
          <input
            type='text'
            name='name'
            required
            autoComplete='name'
            className='mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30'
          />
        </label>
        <label className='block'>
          <span className='text-sm font-medium text-slate-700'>Email</span>
          <input
            type='email'
            name='email'
            required
            autoComplete='email'
            className='mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30'
          />
        </label>
      </div>

      <div className='grid gap-5 sm:grid-cols-2'>
        <label className='block'>
          <span className='text-sm font-medium text-slate-700'>Organization</span>
          <input
            type='text'
            name='organization'
            autoComplete='organization'
            className='mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30'
          />
        </label>
        <label className='block'>
          <span className='text-sm font-medium text-slate-700'>Topic</span>
          <select
            name='topic'
            defaultValue='Demo request'
            className='mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30'
          >
            <option>Demo request</option>
            <option>Partnership inquiry</option>
            <option>RealDiag</option>
            <option>CritMatch</option>
            <option>Investor / press</option>
            <option>General</option>
          </select>
        </label>
      </div>

      <label className='block'>
        <span className='text-sm font-medium text-slate-700'>Message</span>
        <textarea
          name='message'
          required
          rows={5}
          className='mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30'
        />
      </label>

      {status === 'error' && (
        <div className='rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700'>
          {errorMsg}
        </div>
      )}

      <div className='flex flex-wrap items-center gap-4'>
        <button
          type='submit'
          disabled={status === 'submitting'}
          className='inline-flex items-center justify-center rounded-lg bg-[#041E42] px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60'
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
        <a
          href='mailto:info@elionyxhealth.com'
          className='text-sm font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline'
        >
          Or email us directly
        </a>
      </div>
    </form>
  );
}

export default function ElionyxHealthLandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='min-h-screen bg-[#f4f6f7] text-slate-900'>
      <header className='sticky top-0 z-50 bg-gradient-to-r from-[#041E42] to-[#0d3d38] backdrop-blur'>
        <Container className='flex items-center justify-between gap-6 py-3'>
          <a href='#top' className='flex shrink-0 items-center gap-4'>
            <div className='flex h-[5.5rem] w-36 items-center justify-center rounded-[1.6rem] bg-white py-3 pr-3 pl-4 shadow-md sm:h-28 sm:w-44 sm:py-4 sm:pr-4 sm:pl-5'>
              <img
                src='/branding/eh-logo-simple.png'
                alt='Elionyx Health'
                className='h-full w-full object-contain'
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className='text-2xl font-bold leading-tight text-white sm:text-3xl'>Elionyx Health</div>
              <div className='text-sm font-medium text-teal-300 sm:text-base'>Intelligent Infrastructure for Clinical Decision-Making</div>
            </div>
          </a>

          <nav className='hidden flex-1 items-center justify-center gap-8 text-sm text-slate-300 lg:flex'>
            <a href='#platform' className='transition hover:text-white'>Platform</a>
            <a href='#realdiag' className='transition hover:text-white'>RealDiag</a>
            <a href='#critmatch' className='transition hover:text-white'>CritMatch</a>
            <a href='#outcomes' className='transition hover:text-white'>Outcomes</a>
            <a href='#about' className='transition hover:text-white'>About</a>
            <a href='#contact' className='transition hover:text-white'>Contact</a>
          </nav>

          <a
            href='#contact'
            className='inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10'
          >
            Request Demo
          </a>
        </Container>
      </header>

      <main id='top'>
        <section className='bg-gradient-to-br from-[#041E42] via-[#0a3040] to-[#1a5248] text-white'>
          <Container className='py-12 lg:py-16'>
            <div className='rounded-3xl bg-gradient-to-br from-[#061f3a] to-[#1d5c50] px-8 py-14 shadow-2xl lg:px-14 lg:py-20'>
              <div className='grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
                <div>
                  <span className='inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur-sm'>
                    Clinical Intelligence Platform
                  </span>
                  <h1 className='mt-5 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl'>
                    Intelligent Infrastructure for Clinical Decision-Making
                  </h1>
                  <p className='mt-8 max-w-2xl text-lg leading-8 text-slate-300'>
                    Elionyx Health improves diagnostic clarity, optimizes patient routing, and accelerates research workflows through a unified clinical intelligence platform.
                  </p>
                  <div className='mt-10 flex flex-wrap gap-4'>
                    <a
                      href='#contact'
                      className='rounded-lg bg-white px-6 py-3 text-sm font-semibold text-teal-800 transition hover:bg-slate-100'
                    >
                      Request Demo
                    </a>
                    <a
                      href='#contact'
                      className='rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20'
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
                          CritMatch
                        </div>
                        <img
                          src='/branding/critmatch-logo-dark.png'
                          alt='CritMatch logo'
                          className='h-48 w-full rounded-xl border border-slate-200 bg-white p-6 object-contain'
                        />
                      </div>

                      <div className='rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                        <div className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                          RealDiag
                        </div>
                        <img
                          src='/branding/realdiag-logo-dark.png'
                          alt='RealDiag logo'
                          className='h-48 w-full rounded-xl border border-slate-200 bg-white p-6 object-contain'
                        />
                      </div>
                    </div>
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
              <CollapsibleNotice title='RealDiag Validation Study Site Recruitment'>
                <div className='italic text-teal-800 mb-3'>Elionyx Health, LLC</div>
                <p className='mb-2'>We are actively seeking clinical partner sites to participate in the formal validation study for <b>RealDiag</b> — an AI-enabled diagnostic decision support platform developed under Elionyx Health, LLC.</p>
                <p className='mb-2'>RealDiag is designed to support clinicians by improving diagnostic accuracy, referral precision, and guideline-aligned clinical decision-making across complex disease states.</p>
                <div className='mb-2'>We are currently recruiting:</div>
                <ul className='list-disc ml-6 mb-2 text-slate-800'>
                  <li>Academic medical centers</li>
                  <li>Health systems</li>
                  <li>Community hospitals</li>
                  <li>Specialty practices</li>
                  <li>Research organizations</li>
                  <li>Innovation-forward clinical groups</li>
                </ul>
                <div className='mb-2'>Participating validation sites will receive:</div>
                <ul className='list-none ml-0 mb-2 text-slate-800'>
                  <li>✔ Unlimited RealDiag platform access for one full year</li>
                  <li>✔ Early access to upcoming platform capabilities</li>
                  <li>✔ Direct collaboration with the RealDiag development and clinical validation team</li>
                  <li>✔ Opportunity for co-authorship/publication participation on validation outcomes</li>
                  <li>✔ Recognition as an inaugural RealDiag validation partner site</li>
                </ul>
                <div className='mb-2'>Study objectives include:</div>
                <ul className='list-disc ml-6 mb-2 text-slate-800'>
                  <li>Diagnostic accuracy validation</li>
                  <li>Referral optimization assessment</li>
                  <li>Workflow integration evaluation</li>
                  <li>Clinical utility and usability analysis</li>
                  <li>Health economic and operational impact assessment</li>
                </ul>
                <div className='mb-2'>We are especially interested in organizations with strengths in:</div>
                <ul className='list-disc ml-6 mb-2 text-slate-800'>
                  <li>Neurology</li>
                  <li>Primary care</li>
                  <li>Emergency medicine</li>
                  <li>Internal medicine</li>
                  <li>Multi-specialty referral systems</li>
                  <li>Clinical informatics</li>
                  <li>AI/digital health innovation</li>
                </ul>
                <p className='mb-2'>If your organization is interested in participating in the validation process for next-generation diagnostic support technology, we would welcome a conversation.</p>
                <p className='mb-2'>Please contact us to learn more.</p>
                <div className='mt-2 text-xs text-teal-700'>#HealthcareInnovation #DigitalHealth #ClinicalResearch #ArtificialIntelligence #ClinicalDecisionSupport #HealthIT #Diagnostics #MedicalInnovation #RealWorldEvidence #ClinicalValidation #AIinHealthcare #RealDiag</div>
              </CollapsibleNotice>
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
                <CollapsibleNotice title='CritMatch Validation Study Site Recruitment'>
                  <div className='italic text-teal-800 mb-3'>Elionyx Health, LLC</div>
                  <p className='mb-2'>We are seeking healthcare organizations and research sites to participate in the validation study for <b>CritMatch</b> — a clinical cohort identification and research matching platform developed by Elionyx Health, LLC.</p>
                  <p className='mb-2'>CritMatch is designed to help organizations identify eligible patient populations for clinical research and operational initiatives using intelligent EMR/EHR-based cohort discovery.</p>
                  <div className='mb-2'>We are currently recruiting:</div>
                  <ul className='list-disc ml-6 mb-2 text-slate-800'>
                    <li>Clinical research sites</li>
                    <li>Academic medical centers</li>
                    <li>Health systems</li>
                    <li>Specialty clinics</li>
                    <li>CROs</li>
                    <li>Research networks</li>
                    <li>Innovation-focused healthcare organizations</li>
                  </ul>
                  <div className='mb-2'>Participating validation sites will receive:</div>
                  <ul className='list-none ml-0 mb-2 text-slate-800'>
                    <li>✔ Unlimited CritMatch platform access for one full year</li>
                    <li>✔ Early access to new product features and integrations</li>
                    <li>✔ Direct collaboration with the CritMatch development team</li>
                    <li>✔ Opportunity to contribute to publications and validation outcomes</li>
                    <li>✔ Recognition as an inaugural CritMatch validation partner site</li>
                  </ul>
                  <div className='mb-2'>Validation study focus areas:</div>
                  <ul className='list-disc ml-6 mb-2 text-slate-800'>
                    <li>Cohort identification accuracy</li>
                    <li>Inclusion/exclusion criteria matching performance</li>
                    <li>ICD-10 / CPT / SNOMED query optimization</li>
                    <li>Workflow efficiency improvements</li>
                    <li>Research recruitment acceleration</li>
                    <li>Clinical operations and population analytics utility</li>
                  </ul>
                  <div className='mb-2'>CritMatch is being developed to support:</div>
                  <ul className='list-disc ml-6 mb-2 text-slate-800'>
                    <li>Clinical trial recruitment</li>
                    <li>Registry identification</li>
                    <li>Population health initiatives</li>
                    <li>Quality improvement programs</li>
                    <li>Precision medicine workflows</li>
                    <li>Research feasibility analysis</li>
                  </ul>
                  <div className='mb-2'>We are especially interested in sites with:</div>
                  <ul className='list-disc ml-6 mb-2 text-slate-800'>
                    <li>Active clinical research programs</li>
                    <li>EHR/EMR analytics capabilities</li>
                    <li>Research recruitment challenges</li>
                    <li>Innovation and AI adoption initiatives</li>
                  </ul>
                  <p className='mb-2'>If your organization is interested in participating in the validation of next-generation cohort discovery technology, please contact us.</p>
                  <div className='mt-2 text-xs text-teal-700'>#ClinicalResearch #DigitalHealth #HealthcareInnovation #AIinHealthcare #ClinicalTrials #PatientRecruitment #HealthIT #ResearchOperations #PopulationHealth #MedicalInnovation #CritMatch #ClinicalInformatics</div>
                </CollapsibleNotice>
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

              <div className='mt-8 rounded-3xl border border-slate-200 bg-white p-6'>
                <div className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>Demo preview</div>
                <p className='mt-3 text-sm leading-7 text-slate-600'>
                  Watch the latest CritMatch product demo showing the matching and recruitment workflow in action.
                </p>
              </div>
            </div>

            <div className='overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm'>
              <video
                src='/ui/CM-demo.mp4'
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
          </Container>
        </section>

        <section id='outcomes' className='bg-[#041E42] py-20 text-white'>
          <Container>
            <SectionEyebrow>Outcomes</SectionEyebrow>
            <SectionTitle className='text-white'>Designed to improve healthcare and enterprise outcomes.</SectionTitle>
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
          <Container className='max-w-3xl'>
            <div className='text-center'>
              <SectionEyebrow>Contact</SectionEyebrow>
              <SectionTitle>Ready to discuss a demo, pilot, or partnership?</SectionTitle>
              <p className='mt-5 text-lg leading-8 text-slate-600'>
                Tell us a little about you and we’ll respond from{' '}
                <a href='mailto:info@elionyxhealth.com' className='font-medium text-teal-700 underline-offset-4 hover:underline'>
                  info@elionyxhealth.com
                </a>
                .
              </p>
            </div>

            <ContactForm />
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
