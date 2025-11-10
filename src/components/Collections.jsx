import React from 'react';
import { Sparkles, LayoutGrid, Lightbulb, KeyRound } from 'lucide-react';

const categories = [
  { key: 'plushies', label: 'Plushies', desc: 'Boneka karakter Agent', icon: Sparkles },
  { key: 'keycaps', label: 'Keycaps', desc: 'Keycaps mechanical keyboard', icon: KeyRound },
  { key: 'led', label: 'LED Lights', desc: 'Lampu LED dekor kamar gaming', icon: Lightbulb },
  { key: 'keychain', label: 'Keychain', desc: 'Gantungan kunci akrilik Agent', icon: LayoutGrid },
];

const Collections = () => {
  return (
    <section id="collections" className="relative w-full bg-gradient-to-b from-black via-slate-950 to-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Highlight Koleksi</h2>
            <p className="mt-2 text-slate-300">Plushies • Keycaps • LED Lights • Keychain</p>
          </div>
          <a href="#shop" className="hidden rounded-md border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/20 md:block">Lihat Semua</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <a key={c.key} href={`#shop`} className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-red-600 hover:bg-slate-900/70">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-600/10 blur-2xl transition group-hover:bg-red-600/20" />
                <Icon className="mb-3 h-6 w-6 text-red-400" />
                <h3 className="text-lg font-semibold">{c.label}</h3>
                <p className="mt-1 text-sm text-slate-300">{c.desc}</p>
                <div className="mt-6 h-1 w-10 rounded bg-red-500 transition-all group-hover:w-20" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collections;
