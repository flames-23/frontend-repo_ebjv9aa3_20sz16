import React from 'react';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Shop from './components/Shop';
import AboutContact from './components/AboutContact';
import { Navbar, PromoBar, Footer } from './components/NavbarFooter';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <PromoBar />
      <Navbar />
      <Hero />
      <Collections />
      {/* Best Seller strip */}
      <section className="w-full bg-gradient-to-r from-slate-950 via-black to-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Best Seller</h3>
            <p className="text-sm text-slate-400">Merch paling diminati minggu ini</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {["Jett Plushie","Valorant LED","Phoenix Keycaps","Sage Keychain","Reyna Figure","Viper Plushie"].map((t, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-center transition hover:border-red-600">
                <div className="mx-auto h-20 w-full rounded-md bg-gradient-to-tr from-red-600/20 to-indigo-600/20" />
                <div className="mt-3 text-xs text-slate-300">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Shop />
      <AboutContact />
      <Footer />
    </div>
  );
}

export default App;
