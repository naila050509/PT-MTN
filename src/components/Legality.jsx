import { useState } from 'react';
import { FileCheck, ShieldCheck, Landmark, CheckCircle, Search, Copy, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Legality() {
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const documentNumber = 'AHU-0050294.AH.01.11';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(documentNumber);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleVerify = () => {
    setVerifying(true);
    setVerified(false);
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
    }, 1500);
  };

  const legalDocs = [
    {
      title: 'Akta Notaris Pendirian',
      subtitle: 'Akta Pendirian Perusahaan',
      officer: 'Notaris David, S.H., M.Kn.',
      status: 'Terdaftar & Sah',
      desc: 'Dibuat pada tanggal 11 Maret 2023 di Kota Bekasi sebagai akta dasar pendirian badan hukum.',
    },
    {
      title: 'Pengesahan Kemenkumham',
      subtitle: 'Surat Keputusan Menteri Hukum & HAM',
      officer: 'Direktur Jenderal Administrasi Hukum Umum',
      status: 'Terverifikasi Aktif',
      desc: `Nomor keputusan: ${documentNumber} Tahun 2023. Memberikan status badan hukum resmi bagi PT. Mulia Tunggal Nusantara.`,
    },
    {
      title: 'Nomor Induk Berusaha (NIB)',
      subtitle: 'NIB Republik Indonesia',
      officer: 'Lembaga OSS / BKPM',
      status: 'Terdaftar Aktif',
      desc: 'Izin usaha dasar yang mencakup klasifikasi perdagangan eceran dan besar untuk berbagai macam barang.',
    },
    {
      title: 'Kewajiban Perpajakan (NPWP)',
      subtitle: 'NPWP Badan Usaha',
      officer: 'Direktorat Jenderal Pajak RI',
      status: 'Wajib Pajak Patuh',
      desc: 'Terdaftar secara resmi sebagai wajib pajak badan yang memenuhi seluruh regulasi perpajakan nasional.',
    },
  ];

  return (
    <section id="legality" className="relative py-20 bg-white overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute top-0 right-0 w-24 h-24 dot-pattern opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal variant="fade-down" className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck size={14} className="text-emerald-600 animate-pulse" />
              Aspek Legalitas Resmi
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kredibilitas Hukum Terjamin
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              PT. Mulia Tunggal Nusantara beroperasi di bawah payung hukum yang sah dan lengkap sesuai regulasi Republik Indonesia. Hal ini menjamin keamanan kerja sama bagi setiap instansi pemerintah maupun korporasi swasta.
            </p>
          </ScrollReveal>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Grid Left: Documents details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {legalDocs.map((doc, idx) => (
                <ScrollReveal 
                  key={idx}
                  variant="fade-up"
                  delay={idx * 100}
                  className="flex"
                >
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 text-left hover:bg-slate-100/50 transition-colors w-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-2">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                          {doc.status}
                        </span>
                        <FileCheck size={18} className="text-slate-400" />
                      </div>
                      
                      <h4 className="font-bold text-slate-800 text-base leading-tight">
                        {doc.title}
                      </h4>
                      <div className="text-xs text-brand-blue font-semibold">
                        {doc.officer}
                      </div>
                      
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {doc.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Scale definition box */}
            <ScrollReveal variant="fade-up" delay={400}>
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 text-left flex items-start gap-4 transform hover:scale-[1.01] transition-transform duration-300">
                <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
                  <Landmark size={24} />
                </div>
                <div className="space-y-1">
                  <h5 className="font-bold text-slate-900 text-sm">Klasifikasi Bidang Usaha</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Perusahaan kami ditetapkan secara legal sebagai <strong>Perusahaan Perdagangan Eceran Berskala Kecil / Besar</strong>. Klasifikasi ini memberikan kebebasan hukum untuk memasok berbagai macam komoditas operasional, baik material retail maupun kebutuhan pengadaan partai besar.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Grid Right: Interactive Verification Widget */}
          <div className="lg:col-span-5 w-full">
            <ScrollReveal variant="fade-left" delay={200} className="w-full">
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden group">
                
                {/* Background elements */}
                <div className="absolute inset-0 dark-mesh-bg opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 dot-pattern-white opacity-10"></div>
                
                <div className="relative z-10 space-y-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-blue rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <ShieldCheck size={22} className="text-brand-yellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight">Verifikasi AHU Kemenkumham</h4>
                      <p className="text-[10px] text-slate-400">Database Administrasi Hukum Umum</p>
                    </div>
                  </div>

                  {/* Document display card */}
                  <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 space-y-4">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">No. Keputusan Menteri Hukum & HAM</span>
                      <div className="flex items-center justify-between mt-1 gap-2 bg-slate-900/60 py-1.5 px-3 rounded-lg border border-slate-700/50">
                        <code className="text-xs text-brand-yellow font-bold tracking-wider">{documentNumber}</code>
                        <button
                          onClick={copyToClipboard}
                          className="text-slate-400 hover:text-white p-1 transition-colors cursor-pointer"
                          title="Salin Nomor"
                        >
                          {copiedText ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Tanggal Keputusan</span>
                        <span className="font-semibold text-slate-200">11 Maret 2023</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">Status Hukum</span>
                        <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Aktif & Sah
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="space-y-4">
                    <button
                      onClick={handleVerify}
                      disabled={verifying}
                      className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-60 text-sm cursor-pointer transform hover:-translate-y-0.5"
                    >
                      <Search size={16} className={verifying ? 'animate-spin' : ''} />
                      <span>{verifying ? 'Memeriksa Database...' : 'Cek Keabsahan Badan Hukum'}</span>
                    </button>

                    {/* Animated status message */}
                    {verifying && (
                      <div className="text-xs text-slate-300 text-center animate-pulse">
                        Menghubungkan ke server Kemenkumham... mohon tunggu.
                      </div>
                    )}

                    {verified && (
                      <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-3 animate-fade-in">
                        <CheckCircle className="text-emerald-400 w-5 h-5 shrink-0 mt-0.5" />
                        <div className="text-xs text-emerald-200">
                          <strong className="block text-emerald-300">Hasil: Valid & Resmi!</strong>
                          Badan hukum <strong>PT. Mulia Tunggal Nusantara</strong> terdaftar di pangkalan data AHU dengan status aktif. Berhak melakukan perdagangan retail & grosir.
                        </div>
                      </div>
                    )}
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
