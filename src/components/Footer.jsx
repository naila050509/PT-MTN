import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-slate-900 text-slate-400 py-16 overflow-hidden">
      
      {/* Mesh overlays */}
      <div className="absolute inset-0 dark-mesh-bg opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-slate-800"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
          
          {/* Col 1: Identity (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* Globe SVG */}
              <div className="relative w-10 h-10 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full text-red-500/80 animate-[spin_40s_linear_infinite]">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  <ellipse cx="50" cy="50" rx="30" ry="45" fill="none" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="2" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tighter text-white leading-none">MTN</span>
                <div className="relative w-28 h-px bg-emerald-500 my-0.5"></div>
                <span className="text-[7px] font-bold text-slate-300 tracking-wider leading-none">PT. MULIA TUNGGAL NUSANTARA</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Mitra penyedia jasa pengadaan barang dan logistik resmi terpercaya untuk berbagai kebutuhan perkantoran, IT, alat keselamatan kerja, dan furnitur. Berkomitmen menghadirkan produk berkualitas dengan pelayanan purna jual terbaik.
            </p>

            <div className="text-[10px] text-slate-500">
              Pengesahan Kemenkumham: <br />
              <code className="text-slate-400 font-semibold font-mono">No. AHU-0050294.AH.01.11 Tahun 2023</code>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Navigasi Cepat</h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-white transition-colors">Beranda</a>
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-white transition-colors">Tentang Kami</a>
              <a href="#legality" onClick={(e) => handleLinkClick(e, '#legality')} className="hover:text-white transition-colors">Aspek Legalitas</a>
              <a href="#products" onClick={(e) => handleLinkClick(e, '#products')} className="hover:text-white transition-colors">Katalog Layanan</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-white transition-colors">Hubungi Kontak</a>
            </div>
          </div>

          {/* Col 3: Sign-Off Representation (4 cols) */}
          <div className="md:col-span-4 space-y-4 border-t md:border-t-0 md:border-l border-slate-800 pt-8 md:pt-0 md:pl-8 flex flex-col justify-between">
            <div className="space-y-2">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Hormat Kami</h4>
              <p className="text-[11px] text-slate-500">Pernyataan komitmen dari direksi utama PT. Mulia Tunggal Nusantara</p>
            </div>

            <div className="pt-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-bold text-slate-200 text-sm block">Lusdiarto</span>
                <span className="text-[10px] text-brand-yellow font-semibold tracking-wider uppercase block">Direktur Utama</span>
              </div>
              
              {/* Styled signature representation using SVG path */}
              <svg className="w-24 h-8 text-slate-300 opacity-70" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 25 C 20 5, 25 5, 30 20 C 35 30, 40 25, 45 15 C 50 5, 55 10, 60 20 C 65 30, 70 5, 75 10 C 80 15, 82 25, 90 22 C 95 20, 92 10, 95 5" />
              </svg>
            </div>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-16 pt-8 border-t border-slate-800 text-[10px] sm:text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PT. Mulia Tunggal Nusantara. Hak Cipta Dilindungi Undang-Undang.</p>
          
          <button
            onClick={handleScrollToTop}
            className="mt-4 sm:mt-0 flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 px-3 rounded-lg border border-slate-700 transition-colors focus:outline-none"
          >
            <span>Kembali Ke Atas</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
