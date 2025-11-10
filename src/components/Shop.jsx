import React, { useMemo, useState } from 'react';
import { Filter, Star, ShoppingBag } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'plush-001',
    name: 'Agent Plushie – Jett',
    price: 189000,
    category: 'plushies',
    img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop',
    badge: 'Best Seller',
  },
  {
    id: 'keycap-011',
    name: 'Keycaps Set – Phoenix Theme',
    price: 459000,
    category: 'keycaps',
    img: 'https://images.unsplash.com/photo-1595223566777-8357275b67a8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'led-301',
    name: 'LED Light – Valorant Logo',
    price: 129000,
    category: 'led',
    img: 'https://images.unsplash.com/photo-1540924788197-7043583ae5cb?q=80&w=1200&auto=format&fit=crop',
    badge: 'Promo',
  },
  {
    id: 'kc-201',
    name: 'Acrylic Keychain – Sage',
    price: 49000,
    category: 'keychain',
    img: 'https://images.unsplash.com/photo-1567225588148-5b4b39c9a4a5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'fig-101',
    name: 'Mini Figure – Reyna',
    price: 249000,
    category: 'figure',
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop',
  },
];

const formatIDR = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const Shop = () => {
  const [filter, setFilter] = useState('all');
  const filtered = useMemo(() => (filter === 'all' ? PRODUCTS : PRODUCTS.concat().filter(p => p.category === filter)), [filter]);

  return (
    <section id="shop" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Katalog Produk</h2>
            <p className="mt-2 text-slate-300">Cari merch Valorant favoritmu. Mobile-first, cepat, dan responsif.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm text-slate-400">Filter:</span>
            {['all','plushies','keycaps','led','keychain','figure'].map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`rounded-full border px-4 py-2 text-sm transition ${filter === c ? 'border-red-500 bg-red-600 text-white' : 'border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800'}`}>
                {c === 'all' ? 'Semua' : c.charAt(0).toUpperCase()+c.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <a key={p.id} href={`#product-${p.id}`} className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded bg-red-600 px-2 py-1 text-xs font-semibold">{p.badge}</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="line-clamp-1 text-lg font-semibold">{p.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-yellow-400">
                  <Star className="h-4 w-4 fill-yellow-400" /> 4.9 • 120+ ulasan
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-red-400">{formatIDR(p.price)}</span>
                  <button className="inline-flex items-center gap-2 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-500/20">
                    <ShoppingBag className="h-4 w-4" /> Beli via WhatsApp
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
