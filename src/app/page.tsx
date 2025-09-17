'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Brain,
  Code2,
  Rocket,
  Sparkles,
  Server,
  Laptop,
  MessageSquare,
  Github,
  Linkedin,
  User2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from "next/image";
// ByteTrust Studios — One-page landing (Next.js 15 + Tailwind + shadcn + Framer Motion)
const CONTACT_LINK = '#contact'; // replace with your Fiverr or email link

const LOGO_SVG = (
  <svg
    width="36"
    height="36"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-sm"
  >
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path
      d="M32 6l22 10v16c0 13.255-8.745 24-22 26C18.745 56 10 45.255 10 32V16L32 6z"
      fill="#0f172a"
    />
    <path d="M27 22h8a7 7 0 110 14h-8V22zm8 10a3 3 0 100-6h-4v6h4z" fill="url(#g)" />
    <rect x="43" y="20" width="4" height="4" rx="1" fill="#22d3ee" />
    <rect x="49" y="24" width="3" height="3" rx="1" fill="#67e8f9" />
  </svg>
);

export default function ByteTrustLanding() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Aurora gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-500/30 via-sky-400/20 to-fuchsia-500/20" />
        <div className="absolute top-1/3 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-blue-600/20 to-teal-400/20" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"              
            alt="ByteTrust Studios"
            width={36}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <span className="text-xl font-semibold tracking-tight">
            ByteTrust <span className="text-sky-400">Studios</span>
          </span>
        </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-100">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#work" className="hover:text-white">
              Work
            </a>
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <Button
              asChild
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold"
            >
              <a href={CONTACT_LINK}>Get a quote</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: copy + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Building Trust, <span className="text-sky-400">One Byte</span> at a Time
              </h1>
              <p className="mt-5 text-lg md:text-xl text-slate-200">
                We design and ship reliable <span className="text-white">AI automations</span>,
                <span className="text-white"> Next.js web apps</span>, and <span className="text-white">custom software</span>—fast.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-[0_8px_20px_-8px_rgba(14,165,233,0.7)]"
                >
                  <a href={CONTACT_LINK}>
                    Start your project <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="border-sky-500 text-sky-300 hover:bg-slate-900/60 hover:text-sky-200"
                >
                  <a href="#work">See our work</a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-sky-400" />
                  Security-first
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-sky-400" />
                  Fast delivery
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-sky-400" />
                  Quality code
                </div>
              </div>
            </motion.div>

            {/* Right: visual panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 md:p-8 shadow-[0_20px_80px_-20px_rgba(56,189,248,0.25)]">
                {/* radial grid */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_70%_40%,black,transparent)]"
                >
                  <svg
                    className="absolute -right-12 -top-12 h-[28rem] w-[28rem] opacity-30"
                    viewBox="0 0 400 400"
                  >
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="400" height="400" fill="url(#grid)" />
                  </svg>
                </div>

                {/* floating blob */}
                <motion.div
                  className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-sky-500/20 blur-2xl"
                  animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                />

                {/* mock terminal / code card */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 backdrop-blur p-4">
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                    <span className="ml-auto">/api/ai/assistant.ts</span>
                  </div>
                  <pre className="mt-3 font-mono text-[12px] leading-relaxed text-slate-200">
                    <code>{`// ByteTrust pipeline (simplified)
const answer = await ai.chat({
  model: 'gpt-4o',
  tools: ['search', 'kv', 'webhooks'],
  memory: true,
});

if (answer.confidence > 0.9) {
  await queue.enqueue('notify:slack', answer.summary);
}`}</code>
                  </pre>
                </div>

                {/* stats badges */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                    <div className="text-xs text-slate-400">Average turnaround</div>
                    <div className="text-lg font-semibold text-white">2–4 weeks</div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                    <div className="text-xs text-slate-400">Client satisfaction</div>
                    <div className="text-lg font-semibold text-white">4.9/5</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">What we do</h2>
          <p className="mt-2 text-slate-200 max-w-2xl">
            AI integrations and agents, modern web engineering, and dependable
            software delivery—aligned to your business outcomes.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain />,
                title: 'AI Automation & Chatbots',
                bullets: [
                  'OpenAI/ChatGPT, RAG, vector search',
                  'Support & lead-gen bots (web, WhatsApp)',
                  'Workflow automation & analytics',
                ],
              },
              {
                icon: <Code2 />,
                title: 'Web & SaaS Engineering',
                bullets: [
                  'Next.js, React, TypeScript',
                  'REST/GraphQL APIs, Stripe, webhooks',
                  'UX-first, responsive, accessible',
                ],
              },
              {
                icon: <Server />,
                title: 'Cloud & DevOps',
                bullets: [
                  'AWS / Azure / GCP deployments',
                  'Docker, CI/CD, observability',
                  'Security & data privacy by design',
                ],
              },
            ].map((s, i) => (
              <Card
                key={i}
                className="group bg-slate-900/60 border-slate-800 hover:border-sky-600/50 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.25)] transition-all"
              >
                <CardHeader className="space-y-4 md:space-y-6">
                  <div className="h-12 w-12 grid place-content-center rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-400/10 text-sky-300 ring-1 ring-sky-700/30 group-hover:from-sky-500/30 group-hover:to-cyan-400/20">
                    <div className="h-6 w-6">{s.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-white">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-200 space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">Featured work</h2>
          <p className="mt-2 text-slate-200">
            A glimpse of the problems we solve. (Swap with your own case studies
            and screenshots.)
          </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'AI Support Bot for SaaS',
              result: '↓ support volume 30%, ↑ CSAT 18%',
              img: 'https://dummyimage.com/1200x720/0b1220/14213d.png&text=AI+Support+Bot',
            },
            {
              title: 'Next.js Fintech Dashboard',
              result: 'MVP in 3 weeks, SOC-ready',
              img: 'https://dummyimage.com/1200x720/0b1220/14213d.png&text=Fintech+Dashboard',
            },
            {
              title: 'Lead Scoring Automation',
              result: '↑ MQL conversion 22%',
              img: 'https://dummyimage.com/1200x720/0b1220/14213d.png&text=Lead+Scoring',
            },
          ].map((p) => (
            <Card
              key={p.title}
              className="group bg-slate-900/60 border-slate-800 hover:border-sky-700/60 transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 object-cover opacity-80 transition-transform duration-500 ease-out group-hover:scale-[1.04] will-change-transform"
                />
                {/* Contrast overlay over the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <Laptop className="h-5 w-5 text-sky-300" />
                    <span className="font-semibold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.65)]">{p.title}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-200 [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                    Outcome: {p.result}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">How we deliver</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {[
              { t: 'Discover', d: 'Goals, constraints, and success metrics.' },
              { t: 'Design', d: 'System design, UX, and data flows.' },
              { t: 'Build', d: 'Iterative sprints with previews.' },
              { t: 'Launch', d: 'Deploy, monitor, and improve.' },
            ].map((s, idx) => (
              <div
                key={s.t}
                className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 relative"
              >
                <div className="absolute left-4 -top-3 text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-700/30">
                  0{idx + 1}
                </div>
                <div className="font-semibold mt-2 text-white">{s.t}</div>
                <div className="text-slate-200 text-sm mt-1">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">What clients say</h2>
          <div className="mt-8 overflow-x-auto">
            <div className="grid auto-cols-[minmax(300px,1fr)] grid-flow-col gap-4 pr-6">
              {[
                { q: 'Shipped our MVP in 3 weeks with stellar quality.', a: 'Founder, HealthTech' },
                { q: 'Seamless AI integration—support volume dropped 30%.', a: 'Ops Lead, SaaS' },
                { q: 'Clean code, great communication, on-time delivery.', a: 'CTO, Fintech' },
              ].map((t, i) => (
                <Card key={i} className="bg-slate-900/60 border-slate-800 min-w-[300px]">
                  <CardContent className="pt-6 pb-5 text-slate-200 text-sm space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-800 grid place-content-center text-slate-300">
                        <User2 className="h-4 w-4" />
                      </div>
                      <div className="text-xs text-slate-400">{t.a}</div>
                    </div>
                    <p>“{t.q}”</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Accordion) */}
      <section id="faq" className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">FAQ</h2>
          <Accordion />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Have a project in mind?</h3>
              <p className="mt-1 text-slate-200">Tell us your goals. We’ll propose a clear plan, timeline, and fixed quote.</p>
            </div>
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-[0_0_24px_rgba(56,189,248,0.45)]">
              <a href={CONTACT_LINK}><MessageSquare className="mr-2 h-4 w-4"/> Contact us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">{LOGO_SVG}<span>ByteTrust Studios</span></div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#work">Work</a>
            <a className="hover:text-white" href="#process">Process</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <a className="flex items-center gap-2 hover:text-white" href="https://github.com" target="_blank" rel="noreferrer"><Github className="h-4 w-4"/> GitHub</a>
            <a className="flex items-center gap-2 hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/> LinkedIn</a>
            <a className="flex items-center gap-2 hover:text-white" href={CONTACT_LINK}>Fiverr</a>
          </div>
          <div>© {new Date().getFullYear()} ByteTrust Studios. All rights reserved.</div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <a
        href={CONTACT_LINK}
        className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-sky-500 text-slate-950 font-semibold shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 ring-sky-400"
      >
        Get a quote
      </a>
    </main>
  );
}

/* --- Simple Accordion component (no external deps) --- */
function Accordion() {
  const [open, setOpen] = React.useState<number | null>(0);
  const faqs = [
    {
      q: 'What tech stack do you use?',
      a: 'Next.js, React, Node/Express, Python (FastAPI/Django), TypeScript, Postgres/Mongo, REST/GraphQL, OpenAI, vector DBs, Stripe, Docker, CI/CD.',
    },
    {
      q: 'Do you provide support after launch?',
      a: 'Yes—monitoring, fixes, and iterative enhancements via support plans.',
    },
    {
      q: 'Can you integrate with our existing systems?',
      a: 'Absolutely. We integrate with your APIs, auth, CRM, payment gateways, and internal tools.',
    },
    {
      q: 'How much does a project cost?',
      a: 'We scope based on complexity. Starter features from $1k; full products vary—get a quick quote.',
    },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40">
      {faqs.map((f, idx) => {
        const isOpen = open === idx;
        return (
          <div key={f.q} className={`border-b last:border-none ${isOpen ? 'border-sky-700/40' : 'border-slate-800'}`}>
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              className={`w-full text-left px-5 py-4 hover:bg-slate-900/70 ${isOpen ? 'bg-slate-900/70' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-medium text-slate-100 text-base md:text-lg">{f.q}</span>
                <span className="text-sky-400">{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && <p className="mt-2 text-sm text-slate-200">{f.a}</p>}
            </button>
          </div>
        );
      })}
    </div>
  );
}
