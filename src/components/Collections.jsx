import React from 'react';
import { ArrowRight, ShieldCheck, Flame } from 'lucide-react';

const PlaceholderTile = ({ title, badge }) => (
  <a href="#shop" className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-red-600">
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-400">
        Foto Produk
      </div>
    </div>
    <div className="mt-3 flex items-center justify-between">
      <div>
        <div className="text-sm text-slate-300">{title}</div>
        {badge && (
          <span className={`mt-2 inline-block rounded px-2 py-0.5 text-[10px] font-bold tracking-wide ${badge === 'OFFICIAL LICENSED' ? 'bg-indigo-600 text-white' : 'bg-red-600 text-white'}`}>
            {badge}
          </span>
        )}
      </div>
      <span className="inline-flex items-center gap-2 text-xs text-red-400 group-hover:text-red-300">
        Lihat Detail <ArrowRight className="h-3 w-3" />
      </span>
    </div>
  </a>
);

const Collections = () => {
  return (
    <section id="collections" className="relative w-full bg-gradient-to-b from-black via-slate-950 to-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold md:text-4xl">Koleksi Unggulan</h2>
          <p className="mt-2 text-slate-300">Bawa Agent favoritmu ke dunia nyata. Merch unik untuk gamer yang beda.</p>
        </div>

        {/* UNOFFICIAL BEST SELLER */}
        <div className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-xl font-bold text-red-400"><Flame className="h-5 w-5" /> UNOFFICIAL BEST SELLER</h3>
            <a href="#shop" className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-1.5 text-sm font-semibold text-red-300 transition hover:bg-red-500/20">Lihat Semua</a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PlaceholderTile title="Plushies / Boneka Agent" badge="BEST DEAL" />
            <PlaceholderTile title="Keycaps Agent" badge="BEST DEAL" />
            <PlaceholderTile title="LED Gaming Lights" badge="BEST DEAL" />
          </div>
        </div>

        {/* OFFICIAL SHOWCASE */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-xl font-bold text-indigo-400"><ShieldCheck className="h-5 w-5" /> OFFICIAL SHOWCASE</h3>
            <a href="#shop" className="rounded-md border border-indigo-500/40 bg-indigo-500/10 px-3 py-1.5 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-500/20">Lihat Semua</a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PlaceholderTile title="Mini Figures" badge="OFFICIAL LICENSED" />
            <PlaceholderTile title="Keychain & Accessories" badge="OFFICIAL LICENSED" />
            <PlaceholderTile title="Keycaps Agent" badge="OFFICIAL LICENSED" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
