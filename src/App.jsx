import React from 'react';
import Hero from './components/Hero';
import NewsFeed from './components/NewsFeed';
import GuidesShowcase from './components/GuidesShowcase';
import QuickLinks from './components/QuickLinks';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 font-inter text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-r from-cyan-500 to-fuchsia-500" />
            <span className="text-sm font-semibold tracking-wide text-white">Aether Nexus</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#news" className="hover:text-white">News</a>
            <a href="#guides" className="hover:text-white">Guides</a>
            <a href="#databases" className="hover:text-white">Databases</a>
            <a href="#" className="rounded-md bg-white/5 px-3 py-1.5 text-white ring-1 ring-white/10 hover:bg-white/10">Join Community</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <NewsFeed />
        <GuidesShowcase />
        <QuickLinks />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-400">
          <p>
            Fan-made hub inspired by Genshin Impact and Honkai Impact. Not affiliated with miHoYo/HoYoverse.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Aether Nexus</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
