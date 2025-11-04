import React from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    title: 'Version 3.5: Starlit Frontiers Patch Notes',
    date: 'Oct 28, 2025',
    excerpt:
      'New zones, two featured banners, weapon balance tweaks, and a quality-of-life stash system. Full breakdown inside.',
  },
  {
    title: 'Dev Stream Recap: Celestial Odyssey',
    date: 'Oct 15, 2025',
    excerpt:
      'Highlights include character reworks, new domain mechanics, and the upcoming co-op raid challenges.',
  },
  {
    title: 'Event: Prism Hunt – Limited-Time Boss Rush',
    date: 'Oct 01, 2025',
    excerpt:
      'Farm rare prisms, unlock cosmetics, and climb the leaderboard with your best teams.',
  },
];

const NewsFeed = () => {
  return (
    <section id="news" className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-cyan-500/20 p-2 ring-1 ring-cyan-400/30">
            <Newspaper className="h-5 w-5 text-cyan-300" />
          </div>
          <h2 className="text-2xl font-bold text-white">Latest News</h2>
        </div>
        <a href="#" className="text-sm text-cyan-300 hover:text-cyan-200">View all</a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {newsItems.map((item, idx) => (
          <article
            key={idx}
            className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/40 transition hover:border-cyan-400/30 hover:bg-slate-900/80"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wide text-slate-400">{item.date}</span>
              <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;
