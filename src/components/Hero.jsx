import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[85vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <div className="max-w-2xl">
          <span className="mb-3 inline-block rounded-full border border-red-500/60 bg-red-500/10 px-3 py-1 text-xs tracking-widest text-red-300">OMOISTORE</span>
          <h1 className="font-extrabold text-4xl leading-tight sm:text-5xl md:text-6xl">
            Bring Your <span className="text-red-500">Agents</span> to Life
          </h1>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Merch bertema Valorant dengan vibes futuristik—dari plushies Agent, keycaps, sampai LED lights buat setup gaming kamu.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#shop" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
              <ShoppingCart className="h-4 w-4" /> Belanja Sekarang
            </a>
            <a href="#collections" className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800">
              Jelajah Koleksi <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
