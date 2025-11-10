import React from 'react';
import { ShoppingCart, Store, Star, Timer } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-800 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="flex items-center gap-2 text-lg font-extrabold tracking-wide">
          <span className="text-red-500">OMOI</span>STORE
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#collections" className="hover:text-white">Koleksi</a>
          <a href="#shop" className="hover:text-white">Shop</a>
          <a href="#about" className="hover:text-white">Tentang</a>
          <a href="#contact" className="hover:text-white">Kontak</a>
        </nav>
        <a href="#shop" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500">
          <ShoppingCart className="h-4 w-4" /> Belanja
        </a>
      </div>
    </header>
  );
};

export const PromoBar = () => {
  return (
    <div className="w-full border-b border-slate-800 bg-gradient-to-r from-red-600 via-fuchsia-600 to-indigo-600 py-2 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 text-sm">
        <Timer className="h-4 w-4" />
        <span>Promo Launch: Diskon 15% semua kategori • Berakhir dalam </span>
        <Countdown />
      </div>
    </div>
  );
};

const useCountdown = (seconds = 86400) => {
  const [time, setTime] = React.useState(seconds);
  React.useEffect(() => {
    const id = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(time / 3600)).padStart(2, '0');
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
  const s = String(time % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
};

export const Countdown = () => {
  const t = useCountdown(3600 * 12);
  return <span className="font-mono font-semibold">{t}</span>;
};

export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-black py-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        <div>
          <div className="text-xl font-extrabold"><span className="text-red-500">OMOI</span>STORE</div>
          <p className="mt-2 text-slate-400">Merch Valorant unofficial & fanmade. Kirim dari China ke seluruh Indonesia.</p>
        </div>
        <div>
          <h4 className="font-semibold">Menu</h4>
          <ul className="mt-3 space-y-2 text-slate-400">
            <li><a href="#collections" className="hover:text-white">Koleksi</a></li>
            <li><a href="#shop" className="hover:text-white">Shop</a></li>
            <li><a href="#about" className="hover:text-white">Tentang</a></li>
            <li><a href="#contact" className="hover:text-white">Kontak</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Kepercayaan</h4>
          <ul className="mt-3 space-y-2 text-slate-400">
            <li className="inline-flex items-center gap-2"><Store className="h-4 w-4" /> Toko resmi marketplace</li>
            <li className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-yellow-400" /> Rating 4.9 dari pembeli</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Omoistore. Bring Your Agents to Life.</div>
    </footer>
  );
};
