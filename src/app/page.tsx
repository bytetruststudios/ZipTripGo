'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Plane,
  Globe,
  Utensils,
  MapPin,
  Compass,
  MessageSquare,
  Github,
  Linkedin,
  User2,
  Ticket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from "next/image";

const CONTACT_LINK = '#contact'; 

const LOGO_SVG = (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-sm"
  >
    <path
      d="M12 2C8.68629 2 6 4.68629 6 8C6 12.8354 12 22 12 22C12 22 18 12.8354 18 8C18 4.68629 15.3137 2 12 2Z"
      fill="#0f172a"
      stroke="#0f172a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="8" r="3" fill="#0ea5e9" />
    <path
      d="M16 11L18.9998 14.5L22 11"
      stroke="#22d3ee"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 11L5.00018 14.5L2 11"
      stroke="#22d3ee"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TravelGuideLanding() {
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
            {LOGO_SVG}
            <span className="text-xl font-semibold tracking-tight">
              Voyage <span className="text-sky-400">Guides</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-100">
            <a href="#destinations" className="hover:text-white">
              Destinations
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#guides" className="hover:text-white">
              Guides
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <Button
              asChild
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold"
            >
              <a href={CONTACT_LINK}>Contact us</a>
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
                Explore the World, <span className="text-sky-400">One Story</span> at a Time
              </h1>
              <p className="mt-5 text-lg md:text-xl text-slate-200">
                Your ultimate guide to <span className="text-white">unforgettable travel</span>,
                <span className="text-white"> authentic culture</span>, and <span className="text-white">local cuisine</span>.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-[0_8px_20px_-8px_rgba(14,165,233,0.7)]"
                >
                  <a href="#destinations">
                    Start exploring <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="border-sky-500 text-sky-300 hover:bg-slate-900/60 hover:text-sky-200"
                >
                  <a href="#about">Learn more</a>
                </Button>
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

                {/* mock map / planner card */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 backdrop-blur p-4">
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                    <span className="ml-auto">/guides/paris.json</span>
                  </div>
                  <pre className="mt-3 font-mono text-[12px] leading-relaxed text-slate-200">
                    <code>{`{
  "city": "Paris",
  "country": "France",
  "cuisine": [
    "croissant",
    "macaron",
    "escargots"
  ],
  "attractions": [
    "Eiffel Tower",
    "Louvre Museum"
  ],
  "flights": {
    "from": "major airports",
    "duration": "7-9 hours"
  }
}`}</code>
                  </pre>
                </div>

                {/* stats badges */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                    <div className="text-xs text-slate-400">Guides updated</div>
                    <div className="text-lg font-semibold text-white">Weekly</div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                    <div className="text-xs text-slate-400">User rating</div>
                    <div className="text-lg font-semibold text-white">4.9/5</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">Top Destinations</h2>
          <p className="mt-2 text-slate-200 max-w-2xl">
            Explore our most popular and curated guides for your next trip.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Tokyo, Japan',
                description: 'A blend of tradition and modernity.',
                img: 'https://dummyimage.com/1200x720/0b1220/14213d.png&text=Tokyo, Japan',
                icon: <Globe />,
              },
              {
                title: 'Paris, France',
                description: 'The city of love and art.',
                img: 'https://dummyimage.com/1200x720/0b1220/14213d.png&text=Paris, France',
                icon: <Globe />,
              },
              {
                title: 'Cairo, Egypt',
                description: 'Ancient history and vibrant markets.',
                img: 'https://dummyimage.com/1200x720/0b1220/14213d.png&text=Cairo, Egypt',
                icon: <Globe />,
              },
            ].map((d) => (
              <Card
                key={d.title}
                className="group bg-slate-900/60 border-slate-800 hover:border-sky-700/60 transition overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-full h-56 object-cover opacity-80 transition-transform duration-500 ease-out group-hover:scale-[1.04] will-change-transform"
                  />
                  {/* Contrast overlay over the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      {d.icon}
                      <span className="font-semibold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.65)]">{d.title}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-200 [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                      {d.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">Our Mission</h2>
          <p className="mt-2 text-slate-200 max-w-2xl">
            At Voyage Guides, our mission is to provide more than just travel tips; we offer a window into the soul of each destination. We believe that true travel is about connecting with people, understanding history, and savoring local flavors. Our dedicated team of travel enthusiasts and local experts curates every guide to ensure it's authentic, practical, and inspiring.
          </p>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">What You'll Find</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Utensils />,
                title: 'Culture & Cuisine',
                bullets: [
                  'Authentic dining experiences',
                  'Local recipes & food tours',
                  'Cultural customs & etiquette',
                ],
              },
              {
                icon: <Plane />,
                title: 'Flight & Logistics',
                bullets: [
                  'Tips for finding cheap flights',
                  'Airport and transportation guides',
                  'Visa requirements & travel documents',
                ],
              },
              {
                icon: <MapPin />,
                title: 'Things to Do',
                bullets: [
                  'Hidden gems & off-the-beaten-path spots',
                  'Detailed itineraries for all budgets',
                  'Must-see landmarks & attractions',
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


      {/* Testimonials (re-skinned as User stories) */}
      <section className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">Traveler Stories</h2>
          <div className="mt-8 overflow-x-auto">
            <div className="grid auto-cols-[minmax(300px,1fr)] grid-flow-col gap-4 pr-6">
              {[
                { q: 'Found the best local cafe thanks to this guide!', a: 'Sarah M., Digital Nomad' },
                { q: 'The flight tips saved me hundreds of dollars.', a: 'David L., Budget Traveler' },
                { q: 'The cultural section helped me feel truly prepared.', a: 'Emily T., Solo Explorer' },
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
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Have a question or a story to share?</h3>
              <p className="mt-1 text-slate-200">Our team is always here to help you plan your next great adventure.</p>
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
          <div className="flex items-center gap-2">{LOGO_SVG}<span>Voyage Guides</span></div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#destinations">Destinations</a>
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#guides">Guides</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <a className="flex items-center gap-2 hover:text-white" href="https://github.com" target="_blank" rel="noreferrer"><Github className="h-4 w-4"/> GitHub</a>
            <a className="flex items-center gap-2 hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/> LinkedIn</a>
            <a className="flex items-center gap-2 hover:text-white" href={CONTACT_LINK}><Ticket className="h-4 w-4"/> Fiverr</a>
          </div>
          <div>© {new Date().getFullYear()} Voyage Guides. All rights reserved.</div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <a
        href={CONTACT_LINK}
        className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-sky-500 text-slate-950 font-semibold shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 ring-sky-400"
      >
        Contact Us
      </a>
    </main>
  );
}

function Accordion() {
  const [open, setOpen] = React.useState<number | null>(0);
  const faqs = [
    {
      q: 'How do you create your travel guides?',
      a: 'Our guides are meticulously researched and written by a team of experienced travelers and local experts who live in or have extensive knowledge of the destinations. We focus on providing authentic, practical advice that you won\'t find in standard guidebooks.',
    },
    {
      q: 'Do you offer flight and hotel booking services?',
      a: 'We provide links and guidance to the best flight and hotel booking platforms, but we don\'t handle the bookings directly. This allows us to remain unbiased and focus on providing the most helpful information for your trip planning.',
    },
    {
      q: 'Are the travel guides free to use?',
      a: 'Yes, all of our travel guides and articles are completely free to access. We believe that everyone should have the resources to explore the world. Our revenue comes from affiliate links and partnerships, which helps us keep the content free for all our users.',
    },
    {
      q: 'How often do you update your content?',
      a: 'We regularly update our guides to reflect changes in local laws, new attractions, and evolving travel trends. We aim to review and update our most popular guides at least once a quarter to ensure the information is accurate and current.',
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