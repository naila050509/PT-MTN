import { Target, Compass, Shield, Heart, Award, Users, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: 'Keselamatan',
      desc: 'Kami memastikan lingkungan kerja yang aman dan sehat untuk semua karyawan, kontraktor, dan mitra bisnis.',
      badgeColor: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-600" />,
      title: 'Etika',
      desc: 'Kami tanpa kompromi dalam integritas, kejujuran, keadilan, kepercayaan, dan saling menghormati di setiap transaksi.',
      badgeColor: 'bg-rose-50 border-rose-200 text-rose-700',
    },
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: 'Kualitas',
      desc: 'Kami berorientasi kepada hasil yang unggul dalam kualitas, ketepatan waktu pengiriman, dan penuh inovasi berkesinambungan.',
      badgeColor: 'bg-amber-50 border-amber-200 text-amber-700',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Relasi',
      desc: 'Kami membangun hubungan jangka panjang yang positif dengan para pelanggan, pemasok, dan kolega berdasarkan saling percaya.',
      badgeColor: 'bg-blue-50 border-blue-200 text-blue-700',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-slate-50 overflow-hidden">
      
      {/* Structural backgrounds */}
      <div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>
      <div className="absolute top-10 right-10 w-48 h-48 dot-pattern opacity-30 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 dot-pattern opacity-30 -z-10"></div>

      {/* Floating abstract decorative shape */}
      <div className="absolute bottom-1/3 right-5 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10 animate-blob-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* PART 1: Company Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <ScrollReveal variant="fade-right" className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-wider uppercase">
                Tentang Kami
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                PT. Mulia Tunggal Nusantara
              </h2>
              
              <div className="h-1 w-20 bg-brand-blue rounded-full"></div>
              
              <p className="text-slate-600 leading-relaxed text-base">
                <strong>PT. Mulia Tunggal Nusantara</strong> berdiri pada tahun 2023 di Bekasi, Jawa Barat. Berdirinya perusahaan kami merupakan respon atas terbukanya peluang yang sangat luas di dunia industri, logistik, pengadaan barang, serta kebutuhan perkantoran modern yang berkembang pesat.
              </p>
              
              <p className="text-slate-600 leading-relaxed text-base">
                Didirikan secara resmi pada tanggal <strong>11 Maret 2023</strong> di hadapan Notaris David, S.H., M.Kn., serta telah disahkan secara legal oleh Menteri Hukum dan Hak Asasi Manusia Republik Indonesia. Kehadiran MTN bertujuan menjadi solusi satu atap <em>(one-stop solution)</em> tepercaya bagi korporasi swasta, BUMN, maupun instansi pemerintahan di seluruh Indonesia.
              </p>
              
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm flex items-start gap-4 transform hover:scale-[1.01] transition-transform duration-300">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Fokus Kemitraan</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Kami berkomitmen pada penyediaan suplai perdagangan eceran maupun besar untuk berbagai kebutuhan teknis, operasional, dan material berkualitas.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Styled Image Frame */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="fade-left" delay={200}>
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300 z-10">
                <img 
                  src="/creative_meeting.png" 
                  alt="Creative business meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent"></div>
              </div>
            </ScrollReveal>
            {/* Design accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow/80 rounded-2xl -z-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 dot-pattern opacity-40 -z-10"></div>
          </div>
        </div>

        {/* PART 2: Vision & Mission Section */}
        <ScrollReveal variant="zoom-in" delay={100}>
          <div className="bg-brand-blue rounded-3xl text-white overflow-hidden shadow-xl relative group">
            {/* Mesh Overlay inside card */}
            <div className="absolute inset-0 dark-mesh-bg opacity-40 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-64 h-64 dot-pattern-white opacity-10"></div>
            
            <div className="relative z-10 px-8 py-16 sm:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 division-x divider-slate-700">
              
              {/* Vision Column */}
              <div className="space-y-6 text-left flex flex-col justify-start transform group-hover:translate-x-1 transition-transform duration-500">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/20 text-brand-yellow">
                  <Compass className="w-6 h-6 animate-[spin_10s_linear_infinite]" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Visi Perusahaan</h3>
                <p className="text-blue-100 text-lg leading-relaxed font-light">
                  “Menjadi perusahaan Indonesia yang unggul, profesional, dan terdepan dalam melayani klien maupun mitra bisnis secara terintegrasi.”
                </p>
              </div>
              
              {/* Mission Column */}
              <div className="space-y-6 text-left flex flex-col justify-start border-t md:border-t-0 md:border-l border-white/15 pt-8 md:pt-0 md:pl-12 transform group-hover:-translate-x-1 transition-transform duration-500">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/20 text-brand-yellow">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Misi Perusahaan</h3>
                <p className="text-blue-100 text-base leading-relaxed font-light">
                  “Memberikan produk berkualitas dengan harga kompetitif dan bermanfaat demi memastikan kepuasan pelanggan secara optimal, serta membina hubungan kemitraan yang berkelanjutan dengan para pemangku kepentingan.”
                </p>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* PART 3: Company Values */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal variant="fade-down" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow-dark text-xs font-semibold tracking-wider uppercase">
                Nilai Perusahaan
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Pilar Utama Nilai Kami
              </h2>
              <p className="text-slate-500 text-sm">
                Kami menjunjung tinggi budaya kerja yang profesional dan mengedepankan etika untuk menjamin hasil terbaik bagi mitra kami.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Image side (left on lg) */}
            <div className="lg:col-span-5 relative flex items-stretch">
              <ScrollReveal variant="fade-right" className="w-full flex">
                <div className="relative w-full min-h-75 rounded-2xl overflow-hidden shadow-lg border border-slate-200 grow">
                  <img 
                    src="/business_handshake.png" 
                    alt="Business partnership handshake"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                    <div className="font-bold text-lg leading-tight">Membangun Relasi Jangka Panjang</div>
                    <p className="text-xs text-slate-300 mt-1">Mengintegrasikan profesionalisme dengan integritas tanpa kompromi.</p>
                  </div>
                </div>
              </ScrollReveal>
              {/* Highlight background shape */}
              <div className="absolute bottom-4 right-4 w-16 h-16 dot-pattern opacity-30"></div>
            </div>

            {/* Values Cards grid (right on lg) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((val, idx) => (
                <ScrollReveal 
                  key={val.title}
                  variant="fade-up"
                  delay={idx * 100}
                  className="flex"
                >
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 flex flex-col justify-between text-left group w-full grad-border-card">
                    <div className="space-y-4">
                      <div className={`inline-flex p-3 rounded-xl border ${val.badgeColor} group-hover:scale-110 transition-transform duration-300`}>
                        {val.icon}
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg group-hover:text-brand-blue transition-colors">
                        {val.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
