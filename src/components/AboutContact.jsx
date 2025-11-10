import React from 'react';
import { MessageCircle, Phone, Instagram, Clock } from 'lucide-react';

const AboutContact = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black to-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* About */}
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Tentang Omoistore</h2>
            <p className="mt-4 text-slate-300">
              Omoistore hadir untuk membawa dunia Valorant ke dunia nyata. Dari plushies Agent, keycaps kece, hingga LED lights—semua dirancang untuk bikin setup gaming kamu makin hidup.
            </p>
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-lg font-semibold text-red-400">"Bring Your Agents to Life"</p>
              <p className="mt-2 text-slate-300">Bangun desk setup ala Agent favoritmu. Merch unik yang cuma kamu punya.</p>
              <div className="mt-4 flex items-center gap-6 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Kirim ke seluruh Indonesia</span>
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> CS ramah & responsif</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-2xl font-bold">Hubungi Kami</h3>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 grid grid-cols-1 gap-4">
              <input className="w-full rounded-md border border-slate-700 bg-black/40 px-4 py-3 text-sm outline-none focus:border-red-500" placeholder="Nama" />
              <input type="email" className="w-full rounded-md border border-slate-700 bg-black/40 px-4 py-3 text-sm outline-none focus:border-red-500" placeholder="Email" />
              <textarea rows={4} className="w-full rounded-md border border-slate-700 bg-black/40 px-4 py-3 text-sm outline-none focus:border-red-500" placeholder="Pesan" />
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
                <MessageCircle className="h-4 w-4" /> Kirim
              </button>
            </form>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="rounded-md border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-500/20">WhatsApp</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-fuchsia-500/40 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-300 transition hover:bg-fuchsia-500/20"><Instagram className="h-4 w-4" /> Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
