import React from 'react';
import { BookOpen, Star } from 'lucide-react';

const guides = [
  {
    title: 'Quantum DPS Build – Nebula Edge',
    tags: ['DPS', 'Quantum', 'Late Game'],
    rating: 4.8,
  },
  {
    title: 'Burst Support – Auriel of Dawn',
    tags: ['Support', 'Pyro', 'Mid/Late'],
    rating: 4.7,
  },
  {
    title: 'F2P Friendly Starter Teams',
    tags: ['Beginner', 'Team', 'F2P'],
    rating: 4.6,
  },
  {
    title: 'Artifact Farming Routes (Weeklies)',
    tags: ['Farming', 'Routes', 'Efficiency'],
    rating: 4.9,
  },
];

const GuidesShowcase = () => {
  return (
    <section id="guides" className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-fuchsia-500/20 p-2 ring-1 ring-fuchsia-400/30">
            <BookOpen className="h-5 w-5 text-fuchsia-300" />
          </div>
          <h2 className="text-2xl font-bold text-white">Popular Guides</h2>
        </div>
        <a href="#" className="text-sm text-fuchsia-300 hover:text-fuchsia-200">Browse all</a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {guides.map((g, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/40 transition hover:border-fuchsia-400/30 hover:bg-slate-900/80"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 blur-2xl" />
            <h3 className="text-base font-semibold text-white">{g.title}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {g.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/5 px-2 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-amber-300">
              <Star className="h-4 w-4 fill-amber-300/30" />
              <span className="text-sm">{g.rating}</span>
            </div>
            <button className="mt-4 inline-flex items-center rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 text-xs font-medium text-white opacity-90 transition hover:opacity-100">
              Read Guide
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuidesShowcase;
