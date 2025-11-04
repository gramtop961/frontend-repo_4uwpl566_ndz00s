import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[78vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft color glows over the 3D scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-fuchsia-500/10 to-transparent mix-blend-screen" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(244,114,182,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(250,204,21,0.12),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="uppercase tracking-wide text-cyan-200">New Patch 3.5 Live</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Aether Nexus
          <span className="block bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">Fan Hub for Fantasy & Sci‑Fi Anime Games</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
          Dive into up-to-date news, comprehensive databases, curated guides, and a welcoming community inspired by worlds like Teyvat and the Astral Express.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#guides"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90"
          >
            Explore Guides
            <Star className="h-4 w-4 transition group-hover:rotate-12" />
          </a>
          <a
            href="#databases"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:bg-white/10"
          >
            Browse Databases
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
