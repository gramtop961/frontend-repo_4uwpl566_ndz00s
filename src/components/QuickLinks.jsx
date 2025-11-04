import React from 'react';
import { Database, Map, Sword, Users } from 'lucide-react';

const links = [
  {
    title: 'Character Database',
    desc: 'Filter by element, weapon, and rarity. View skills, builds, and ascension materials.',
    icon: Users,
    href: '#',
    gradient: 'from-cyan-500 to-sky-500',
  },
  {
    title: 'Weapons & Equipment',
    desc: 'Stats, passives, and materials for swords, polearms, cannons, and more.',
    icon: Sword,
    href: '#',
    gradient: 'from-amber-400 to-fuchsia-500',
  },
  {
    title: 'Interactive Map',
    desc: 'Find resources, chests, and quest points with smart filters.',
    icon: Map,
    href: '#',
    gradient: 'from-fuchsia-500 to-cyan-500',
  },
  {
    title: 'All Databases',
    desc: 'Artifacts, stigmata, bosses, drop tables, and more collections.',
    icon: Database,
    href: '#',
    gradient: 'from-violet-500 to-cyan-500',
  },
];

const QuickLinks = () => {
  return (
    <section id="databases" className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white">Essential Databases</h2>
        <p className="mt-2 text-slate-300">Your hub for characters, gear, routes, and more.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {links.map(({ title, desc, icon: Icon, href, gradient }) => (
          <a
            key={title}
            href={href}
            className="group relative block overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/40 transition hover:border-cyan-400/30 hover:bg-slate-900/80"
          >
            <div className={`absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${gradient} opacity-20 blur-2xl`} />
            <div className="relative">
              <div className="mb-3 inline-flex rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{desc}</p>
              <span className="mt-4 inline-block text-sm text-cyan-300 group-hover:text-cyan-200">Open →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
