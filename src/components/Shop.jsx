import React, { useMemo, useState } from 'react';
import { Filter, Star, ShoppingBag, Info } from 'lucide-react';

// Placeholder products with segment and subcategory. Images and real prices will be replaced later by the owner.
const PRODUCTS = [
  // UNOFFICIAL
  { id: 'u-plush-001', name: 'Agent Plushie – Jett', segment: 'UNOFFICIAL', subcategory: 'Plushies / Boneka Agent', category: 'plushies', priceOriginal: 355000, priceDiscount: 315000 },
  { id: 'u-keycap-011', name: 'Keycaps Set – Phoenix', segment: 'UNOFFICIAL', subcategory: 'Keycaps Agent', category: 'keycaps', priceOriginal: 459000, priceDiscount: 399000 },
  { id: 'u-led-301', name: 'LED Light – Valorant Logo', segment: 'UNOFFICIAL', subcategory: 'LED Gaming Lights', category: 'led', priceOriginal: 129000, priceDiscount: 109000 },
  { id: 'u-fig-101', name: 'Mini Figure – Reyna', segment: 'UNOFFICIAL', subcategory: 'Mini Figures', category: 'figure', priceOriginal: 249000, priceDiscount: 219000 },
  { id: 'u-keychain-201', name: 'Acrylic Keychain – Sage', segment: 'UNOFFICIAL', subcategory: 'Keychain & Accessories', category: 'keychain', priceOriginal: 69000, priceDiscount: 49000 },
  // OFFICIAL
  { id: 'o-plush-001', name: 'Official Agent Plushie – Jett', segment: 'OFFICIAL', subcategory: 'Plushies / Boneka Agent', category: 'plushies', priceOriginal: 455000, priceDiscount: 425000 },
  { id: 'o-keycap-011', name: 'Official Keycaps – Phoenix', segment: 'OFFICIAL', subcategory: 'Keycaps Agent', category: 'keycaps', priceOriginal: 559000, priceDiscount: 529000 },
  { id: 'o-led-301', name: 'Official LED Light – Valorant', segment: 'OFFICIAL', subcategory: 'LED Gaming Lights', category: 'led', priceOriginal: 229000, priceDiscount: 199000 },
  { id: 'o-fig-101', name: 'Official Mini Figure – Reyna', segment: 'OFFICIAL', subcategory: 'Mini Figures', category: 'figure', priceOriginal: 349000, priceDiscount: 329000 },
  { id: 'o-keychain-201', name: 'Official Keychain – Sage', segment: 'OFFICIAL', subcategory: 'Keychain & Accessories', category: 'keychain', priceOriginal: 129000, priceDiscount: 119000 },
];

const formatIDR = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const SegmentBadge = ({ segment }) => {
  const isOfficial = segment === 'OFFICIAL';
  return (
    <span className={`rounded px-2 py-0.5 text-[10px] font-bold tracking-wide ${isOfficial ? 'bg-indigo-600 text-white' : 'bg-red-600 text-white'}`}>
      {segment}
    </span>
  );
};

const PromoBadge = ({ segment }) => {
  const isOfficial = segment === 'OFFICIAL';
  return (
    <span className={`absolute left-3 top-3 rounded px-2 py-1 text-[10px] font-bold ${isOfficial ? 'bg-indigo-600 text-white' : 'bg-red-600 text-white'}`}>
      {isOfficial ? 'OFFICIAL LICENSED' : 'BEST DEAL'}
    </span>
  );
};

const ProductCard = ({ product }) => {
  const { name, segment, priceOriginal, priceDiscount } = product;
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Placeholder image slot */}
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-xs text-slate-400">
          Foto Produk
        </div>
        <PromoBadge segment={segment} />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-sm font-semibold md:text-base">{name}</h3>
          <SegmentBadge segment={segment} />
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-yellow-400">
          <Star className="h-4 w-4 fill-yellow-400" /> 4.9 • 120+ ulasan
        </div>
        {/* Price block */}
        <div className="mt-3">
          <div className="text-xs text-slate-400 line-through">{formatIDR(priceOriginal)}</div>
          <div className="text-lg font-extrabold text-white">{formatIDR(priceDiscount)}</div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-500/20">
            Chat via WhatsApp
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-800">
            Lihat Detail Produk
          </a>
        </div>
      </div>
    </div>
  );
};

const SectionBlock = ({ title, children }) => (
  <div className="mb-10">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex items-center gap-2 text-xs text-slate-400"><Filter className="h-4 w-4" /> Kurasi</div>
    </div>
    {children}
  </div>
);

const Shop = () => {
  const [segmentFilter, setSegmentFilter] = useState('ALL');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [priceSort, setPriceSort] = useState('NONE');

  const categories = ['ALL', 'plushies', 'keycaps', 'led', 'figure', 'keychain'];
  const segments = ['ALL', 'UNOFFICIAL', 'OFFICIAL'];

  const sortProducts = (items) => {
    if (priceSort === 'LOW') return [...items].sort((a,b) => a.priceDiscount - b.priceDiscount);
    if (priceSort === 'HIGH') return [...items].sort((a,b) => b.priceDiscount - a.priceDiscount);
    return items;
  };

  const filterProducts = (seg, cat) => {
    let items = PRODUCTS;
    if (seg !== 'ALL') items = items.filter(p => p.segment === seg);
    if (cat !== 'ALL') items = items.filter(p => p.category === cat);
    return sortProducts(items);
  };

  const unofficial = useMemo(() => filterProducts('UNOFFICIAL', categoryFilter === 'ALL' ? 'ALL' : categoryFilter), [categoryFilter, priceSort]);
  const official = useMemo(() => filterProducts('OFFICIAL', categoryFilter === 'ALL' ? 'ALL' : categoryFilter), [categoryFilter, priceSort]);
  const allFiltered = useMemo(() => filterProducts(segmentFilter, categoryFilter), [segmentFilter, categoryFilter, priceSort]);

  const currentList = segmentFilter === 'ALL' ? null : allFiltered;

  return (
    <section id="shop" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Katalog Produk</h2>
            <p className="mt-2 text-slate-300">Bawa Agent favoritmu ke dunia nyata. Upgrade setup biar makin kayak Radiant.</p>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-xs text-slate-400">Segmen</div>
            {segments.map(s => (
              <button key={s} onClick={() => setSegmentFilter(s)} className={`rounded-full border px-3 py-1.5 text-xs transition ${segmentFilter === s ? 'border-red-500 bg-red-600 text-white' : 'border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800'}`}>
                {s}
              </button>
            ))}
            <div className="ml-3 text-xs text-slate-400">Kategori</div>
            {categories.map(c => (
              <button key={c} onClick={() => setCategoryFilter(c)} className={`rounded-full border px-3 py-1.5 text-xs transition ${categoryFilter === c ? 'border-red-500 bg-red-600 text-white' : 'border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800'}`}>
                {c === 'ALL' ? 'Semua' : c}
              </button>
            ))}
            <div className="ml-3 text-xs text-slate-400">Harga</div>
            <select value={priceSort} onChange={(e) => setPriceSort(e.target.value)} className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs outline-none">
              <option value="NONE">Default</option>
              <option value="LOW">Terendah</option>
              <option value="HIGH">Tertinggi</option>
            </select>
          </div>
        </div>

        {/* Custom view when a specific segment is selected */}
        {currentList ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentList.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <>
            <SectionBlock title="UNOFFICIAL COLLECTION">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {unofficial.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </SectionBlock>

            <SectionBlock title="OFFICIAL COLLECTION">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {official.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </SectionBlock>
          </>
        )}
      </div>
    </section>
  );
};

export default Shop;
