import React from 'react';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Shop from './components/Shop';
import AboutContact from './components/AboutContact';
import Shell from './components/Shell';

function App() {
  return (
    <Shell>
      <Hero />
      <Collections />
      {/* Highlight Segments */}
      <section className="w-full bg-gradient-to-r from-slate-950 via-black to-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-2xl font-bold text-red-400">UNOFFICIAL BEST SELLER</h3>
              <p className="mt-2 text-sm text-slate-300">Pilihan paling diminati. Harga hemat dengan kualitas kece.</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[1,2,3].map(i => (
                  <div key={i} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                    <div className="aspect-square w-full rounded-md bg-gradient-to-tr from-red-600/20 to-indigo-600/20" />
                    <div className="mt-2 text-xs text-slate-300">Produk {i}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-2xl font-bold text-indigo-400">OFFICIAL SHOWCASE</h3>
              <p className="mt-2 text-sm text-slate-300">Koleksi berlisensi resmi. Eksklusif dan premium.</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[1,2,3].map(i => (
                  <div key={i} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                    <div className="aspect-square w-full rounded-md bg-gradient-to-tr from-indigo-600/20 to-fuchsia-600/20" />
                    <div className="mt-2 text-xs text-slate-300">Produk {i}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Shop />
      <AboutContact />
    </Shell>
  );
}

export default App;
