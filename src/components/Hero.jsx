import { useState } from 'react';
import { ArrowRight, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const [showLetter, setShowLetter] = useState(false);

  const handleScrollToSection = (id) => {
    const target = document.querySelector(id);
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
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center mesh-bg overflow-hidden">
      
      {/* Premium Floating Blobs in the Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -z-10 animate-blob-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl -z-10 animate-blob-2"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-blob-3"></div>
      
      {/* Interactive grid elements */}
      <div className="absolute top-1/4 left-5 w-24 h-24 dot-pattern opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left Column (Scroll Reveal fade-right) */}
          <div className="lg:col-span-6 text-left">
            <ScrollReveal variant="fade-right" className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold tracking-wide animate-pulse">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping"></span>
                Penyedia Pengadaan & Solusi Bisnis
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Inovasi & Teknologi <br />
                <span className="text-brand-blue relative">
                  Unggul & Kompetitif
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-brand-yellow/30 -z-10"></span>
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                <strong>PT. Mulia Tunggal Nusantara</strong> hadir sebagai mitra strategis tepercaya untuk memenuhi segala kebutuhan operasional kantor, instansi, dan industri berskala kecil hingga besar dengan layanan prima dan produk berkualitas tinggi.
              </p>

              {/* Quick trust metrics */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200/80">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-slate-900">Bekasi</div>
                  <div className="text-xs text-slate-500 font-medium">Pusat Operasional</div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-slate-900">Full Support</div>
                  <div className="text-xs text-slate-500 font-medium">Layanan Pengadaan</div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-slate-900">Resmi</div>
                  <div className="text-xs text-slate-500 font-medium">Persetujuan Kemenkumham</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => handleScrollToSection('#products')}
                  className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-brand-blue/20 transition-all duration-300 transform hover:-translate-y-0.5 group"
                >
                  <span>Lihat Produk & Layanan</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => handleScrollToSection('#contact')}
                  className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold py-3 px-6 rounded-xl shadow border border-slate-200 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Hubungi Kontak
                </button>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span>Berdasarkan Keputusan Menteri Hukum & HAM No. AHU-0050294.AH.01.11</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Document / Cover Right Column (Scroll Reveal fade-left) */}
          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal variant="fade-left" delay={200} className="w-full max-w-125">
              <div className="relative w-full aspect-4/5 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 group transition-all duration-500 hover:shadow-brand-blue/5">
                
                {/* Cover Face */}
                <div className={`absolute inset-0 z-20 flex flex-col justify-between p-8 bg-white transition-all duration-700 ease-in-out ${
                  showLetter ? 'transform -translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
                }`}>
                  {/* Visual Header Grid & Blocks */}
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 dot-pattern opacity-60"></div>
                    <div className="w-24 h-24 bg-brand-blue rounded-bl-3xl -mr-8 -mt-8 shadow-inner"></div>
                  </div>

                  {/* Company Logo and Centerpiece */}
                  <div className="flex flex-col items-center justify-center grow py-8 text-center">
                    {/* Red Globe Logo */}
                    <div className="relative w-28 h-28 mb-4 transform group-hover:scale-105 transition-transform duration-500">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-red-500 animate-[spin_50s_linear_infinite]">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
                        <ellipse cx="50" cy="50" rx="30" ry="45" fill="none" stroke="currentColor" strokeWidth="2" />
                        <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="2" />
                        <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2" />
                        <ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="currentColor" strokeWidth="2" />
                        <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    
                    <h2 className="text-5xl font-black tracking-tighter text-slate-900 leading-none">MTN</h2>
                    <div className="relative w-64 h-0.75 bg-emerald-500 my-2">
                      <div className="absolute -left-1.5 -top-1 w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      <div className="absolute -right-1.5 -top-1 w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    </div>
                    <h3 className="text-xs font-bold tracking-widest text-slate-800">PT. MULIA TUNGGAL NUSANTARA</h3>
                  </div>

                  {/* Bottom Cover Section */}
                  <div className="relative border-t border-slate-100 pt-6">
                    {/* Background Facade Clip */}
                    <div className="absolute right-0 bottom-0 w-32 h-16 bg-brand-yellow rounded-tl-3xl opacity-80 -mr-8 -mb-8 z-0"></div>
                    <div className="absolute right-6 bottom-0 w-12 h-12 dot-pattern opacity-40 -mb-8"></div>

                    <div className="relative z-10 text-left">
                      <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Company Profile</div>
                      <div className="text-xl font-bold text-slate-800 mt-1">2026/2027 Edition</div>
                      
                      <button
                        onClick={() => setShowLetter(true)}
                        className="mt-4 flex items-center gap-2 bg-slate-900 hover:bg-brand-blue text-white font-semibold py-2.5 px-4 rounded-xl shadow-md transition-all duration-300 text-xs cursor-pointer transform hover:scale-[1.03]"
                      >
                        <FileText size={14} />
                        <span>Buka Surat Pengantar</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Inside Letter Face */}
                <div className={`absolute inset-0 z-10 flex flex-col p-6 sm:p-8 bg-white transition-all duration-700 ease-in-out ${
                  showLetter ? 'translate-y-0 opacity-100' : 'transform translate-y-full opacity-0 pointer-events-none'
                }`}>
                  {/* Mini Header / Back Button */}
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Surat Pengantar Direksi</span>
                    <button
                      onClick={() => setShowLetter(false)}
                      className="text-xs font-semibold text-slate-500 hover:text-brand-blue py-1 px-2.5 rounded bg-slate-100 hover:bg-slate-200/80 transition-colors cursor-pointer"
                    >
                      Tutup Surat
                    </button>
                  </div>

                  {/* Letter Content */}
                  <div className="grow overflow-y-auto pr-1 py-4 text-xs sm:text-sm text-slate-700 space-y-4 text-left leading-relaxed">
                    
                    {/* Letter Metadata */}
                    <div className="grid grid-cols-2 gap-2 text-slate-500 font-medium text-[11px] sm:text-xs">
                      <div>
                        <p>Nomor : 001/MTN/CP/2023</p>
                        <p>Lampiran : 1 Berkas Company Profile</p>
                        <p>Perihal : Perkenalan & Kerja Sama</p>
                      </div>
                      <div className="text-right">
                        <p>Kepada Yth,</p>
                        <p className="font-bold text-slate-800">Bapak/Ibu Pimpinan</p>
                        <p>Perusahaan / Instansi Di - Tempat</p>
                      </div>
                    </div>

                    <p className="font-semibold text-slate-900 border-t border-slate-100 pt-2 text-[11px] sm:text-xs">
                      Dengan Hormat,
                    </p>

                    <p>
                      Puji dan syukur kita panatkan kepada Tuhan Yang Maha Esa. Karena lindungan dan hidayahnya kita bisa melakukan berbagai inovasi dan teknologi untuk mencapai keunggulan kompetitif di instansi/perusahaan Bapak/Ibu pimpinan instansi/perusahaan.
                    </p>
                    
                    <p>
                      Bapak/Ibu pimpinan instansi/perusahaan yang telah memberikan kesempatan untuk kami memperkenalkan diri melalui Company Profile PT. Mulia Tunggal Nusantara ini.
                    </p>
                    
                    <p>
                      Besar harapan kami untuk dapat membantu dan berkontribusi dalam inovasi dan teknologi untuk mendukung proses operasional dari instansi/perusahaan Bapak/Ibu pimpin.
                    </p>
                    
                    <p>
                      Kami memberikan layanan full support dalam hal pengadaan, sebagai bahan pertimbangan Bapak/Ibu pimpinan dapat mempelajari kompetensi dan pengalaman kami melalui Company Profile ini.
                    </p>
                    
                    <p>
                      Demikian Company Profile ini kami sampaikan, atas perhatian dan kerjasamanya kami ucapkan terima kasih.
                    </p>

                    {/* Sign-off section */}
                    <div className="pt-4 flex justify-between items-end border-t border-slate-100">
                      <div className="w-12 h-12 dot-pattern opacity-30"></div>
                      <div className="text-right">
                        <p className="text-[11px] sm:text-xs font-medium text-slate-500">Hormat kami,</p>
                        
                        {/* Signature stamp mock representation */}
                        <div className="relative py-2 pr-4 flex items-center justify-end">
                          {/* Red stamp logo backplate */}
                          <div className="absolute right-8 w-12 h-12 border-2 border-red-500/30 rounded-full flex items-center justify-center text-red-500/30 rotate-12 z-0">
                            <span className="text-[8px] font-bold">MTN BEKASI</span>
                          </div>
                          
                          {/* Styled signature representation using SVG path */}
                          <svg className="relative z-10 w-28 h-10 text-slate-950 opacity-90" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 25 C 20 5, 25 5, 30 20 C 35 30, 40 25, 45 15 C 50 5, 55 10, 60 20 C 65 30, 70 5, 75 10 C 80 15, 82 25, 90 22 C 95 20, 92 10, 95 5" />
                          </svg>
                        </div>

                        <p className="font-bold text-slate-900 border-t border-slate-300 pt-1 leading-none text-xs">Lusdiarto</p>
                        <p className="text-[10px] text-slate-400">Direktur Utama</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
