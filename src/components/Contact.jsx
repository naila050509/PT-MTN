import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfos = [
    {
      icon: <MapPin className="w-5 h-5 text-brand-blue" />,
      title: 'Alamat Kantor',
      detail: 'Kota Bekasi, Jawa Barat, Indonesia',
      desc: 'Pusat operasional dan administrasi hukum',
    },
    {
      icon: <Phone className="w-5 h-5 text-brand-blue" />,
      title: 'Telepon / WhatsApp',
      detail: '+62 812-3456-7890',
      desc: 'Hubungi kami langsung via WhatsApp Chat',
      isLink: true,
      href: 'https://wa.me/6281234567890?text=Halo%20PT.%20Mulia%20Tunggal%20Nusantara,%20saya%20ingin%20bertanya%20mengenai%20pengadaan%20barang.',
    },
    {
      icon: <Mail className="w-5 h-5 text-brand-blue" />,
      title: 'Email Resmi',
      detail: 'info@muliatunggalnusantara.com',
      desc: 'Kirimkan proposal penawaran atau tender resmi',
      isLink: true,
      href: 'mailto:info@muliatunggalnusantara.com',
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-blue" />,
      title: 'Jam Kerja',
      detail: 'Senin - Jumat | 08.00 - 17.00 WIB',
      desc: 'Sabtu, Minggu & Hari Libur Nasional: Tutup',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Nama lengkap wajib diisi.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Alamat email wajib diisi.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Format email tidak valid.';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subjek pesan wajib diisi.';
    if (!formData.message.trim()) tempErrors.message = 'Pesan wajib diisi.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      
      {/* Structural guidelines */}
      <div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>
      <div className="absolute top-1/4 right-0 w-48 h-48 dot-pattern opacity-30 -z-10"></div>
      <div className="absolute bottom-10 left-5 w-32 h-32 dot-pattern opacity-35 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal variant="fade-down" className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-wider uppercase">
              Hubungi Kami
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mulai Kerja Sama Dengan MTN
            </h2>
            <p className="text-slate-500 text-sm">
              Apakah Anda memiliki pertanyaan atau ingin mengajukan permintaan pengadaan barang untuk instansi Anda? Silakan isi formulir atau hubungi tim kami secara langsung.
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Grid Left: Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <ScrollReveal variant="fade-right" className="space-y-4">
              {contactInfos.map((info, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 flex gap-4 text-left hover:border-brand-blue/30 transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="p-3 bg-white border border-slate-100 rounded-lg shadow-sm shrink-0 h-fit">
                    {info.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 text-sm leading-tight">
                      {info.title}
                    </h4>
                    {info.isLink ? (
                      <a 
                        href={info.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-brand-blue hover:text-brand-blue-dark text-xs sm:text-sm block hover:underline"
                      >
                        {info.detail}
                      </a>
                    ) : (
                      <span className="font-bold text-slate-700 text-xs sm:text-sm block">
                        {info.detail}
                      </span>
                    )}
                    <p className="text-[11px] text-slate-400">
                      {info.desc}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollReveal>

            {/* Mock Map Card */}
            <ScrollReveal variant="fade-right" delay={200} className="grow flex">
              <div className="relative rounded-2xl border border-slate-200 overflow-hidden aspect-video shadow-sm bg-slate-100 grow min-h-55 w-full">
                {/* Map Illustration SVG */}
                <svg className="w-full h-full text-slate-300" viewBox="0 0 400 200" fill="none" stroke="currentColor">
                  <path d="M 0,50 L 400,100" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 120,0 L 220,200" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 0,150 L 400,120" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 300,0 L 280,200" strokeWidth="5" strokeLinecap="round" />
                  
                  <path d="M -20,10 Q 150,90 220,10 Q 300,140 420,110" stroke="#bfdbfe" strokeWidth="12" strokeLinecap="round" />
                  
                  <circle cx="80" cy="110" r="15" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                  <rect x="250" y="30" width="40" height="30" rx="4" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                  <circle cx="340" cy="150" r="12" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                  
                  <g className="animate-bounce" style={{ transformOrigin: '200px 85px' }}>
                    <path d="M 200,60 C 190,60 185,75 200,90 C 215,75 210,60 200,60 Z" fill="#ef4444" />
                    <circle cx="200" cy="70" r="4" fill="white" />
                  </g>
                  <circle cx="200" cy="90" r="6" fill="#ef4444" opacity="0.4" />
                </svg>
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg border border-slate-100 shadow flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Lokasi Kantor Utama</span>
                    <p className="text-xs font-semibold text-slate-800">Bekasi City, West Java</p>
                  </div>
                  <a 
                    href="https://www.google.com/maps/place/Perumahan+Hasta+Graha/@-6.2517364,107.0895013,3a,75y,22.83h,90t/data=!3m7!1e1!3m5!1sZvAgSuWzOcwPpP1eI54xrQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DZvAgSuWzOcwPpP1eI54xrQ%26yaw%3D22.83239!7i16384!8i8192!4m10!1m2!2m1!1sPERUMAHAN+HASTA+GRAHA+BLOK+17+NOMOR+2++WANASARI,+CIBITUNG++KAB.+BEKASI+JAWA+BARAT!3m6!1s0x2e698f002ce51c37:0x66560206fb4b2858!8m2!3d-6.2516792!4d107.0895257!15sClFQRVJVTUFIQU4gSEFTVEEgR1JBSEEgQkxPSyAxNyBOT01PUiAyICBXQU5BU0FSSSwgQ0lCSVRVTkcgIEtBQi4gQkVLQVNJIEpBV0EgQkFSQVSSAQ9ob3VzaW5nX2NvbXBsZXjgAQA!16s%2Fg%2F11vwvfs9wc?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-brand-blue text-white py-1 px-3 rounded text-[10px] font-bold hover:bg-brand-blue-dark transition-colors"
                  >
                    Buka Peta
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Grid Right: Inquiry Form */}
          <div className="lg:col-span-7 flex">
            <ScrollReveal variant="fade-left" delay={200} className="w-full flex">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-start grow w-full gap-5">

                {/* ── Form Header ── */}
                <div className="text-left">
                  <h3 className="text-xl font-bold text-slate-900">Kirim Penawaran / Pesan</h3>
                  <p className="text-xs text-slate-400 mt-1">Formulir tanggapan cepat — respon dalam 1×24 jam kerja</p>
                </div>

                {/* ── Trust Stats Strip ── */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '1×24 Jam', label: 'Waktu Respon', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
                    { value: 'Full Support', label: 'Layanan Pengadaan', color: 'bg-brand-blue/5 border-brand-blue/20 text-brand-blue' },
                    { value: 'Resmi & Sah', label: 'Badan Hukum', color: 'bg-amber-50 border-amber-200 text-amber-700' },
                  ].map(s => (
                    <div key={s.label} className={`flex flex-col items-center justify-center text-center p-3 rounded-2xl border ${s.color}`}>
                      <span className="font-extrabold text-sm leading-tight">{s.value}</span>
                      <span className="text-[10px] font-medium opacity-70 mt-0.5 leading-tight">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* ── Quick Category Chips ── */}
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Topik Pengadaan Populer</p>
                  <div className="flex flex-wrap gap-2">
                    {['Alat Tulis Kantor (ATK)', 'Laptop & Komputer', 'Alat Pelindung Diri', 'Mebel & Furniture', 'Printer & Toner', 'Jaringan & IT'].map(chip => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => {
                          document.getElementById('contact-subject').value = `Pengadaan: ${chip}`;
                          document.getElementById('contact-message').value = `Halo MTN, kami membutuhkan penawaran harga untuk pengadaan ${chip}. Mohon informasi harga dan ketersediaan stok. Terima kasih.`;
                        }}
                        className="text-[11px] font-semibold px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600
                                   hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5
                                   transition-all duration-200 cursor-pointer"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                {/* divider */}
                <div className="h-px bg-slate-200"/>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-bold text-slate-700 block">Nama Lengkap *</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama Anda"
                        className={`w-full bg-white border rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all ${
                          errors.name ? 'border-rose-400' : 'border-slate-200 focus:border-brand-blue'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 block">Email Kantor / Pribadi *</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@perusahaan.com"
                        className={`w-full bg-white border rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all ${
                          errors.email ? 'border-rose-400' : 'border-slate-200 focus:border-brand-blue'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div className="space-y-1">
                      <label htmlFor="contact-company" className="text-xs font-bold text-slate-700 block">Nama Perusahaan / Instansi</label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Contoh: PT. Maju Bersama (Opsional)"
                        className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-1">
                      <label htmlFor="contact-subject" className="text-xs font-bold text-slate-700 block">Subjek / Perihal *</label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Contoh: Pengadaan ATK Bulanan"
                        className={`w-full bg-white border rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all ${
                          errors.subject ? 'border-rose-400' : 'border-slate-200 focus:border-brand-blue'
                        }`}
                      />
                      {errors.subject && (
                        <span className="text-[10px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.subject}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 block">Detail Pesan / Pertanyaan *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tuliskan spesifikasi barang yang Anda butuhkan secara detail di sini..."
                      className={`w-full bg-white border rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none ${
                        errors.message ? 'border-rose-400' : 'border-slate-200 focus:border-brand-blue'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <span className="text-[10px] text-rose-500 font-medium flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Status Indicator */}
                  {submitSuccess && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 animate-fade-in text-emerald-800 text-xs">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-emerald-900 font-bold mb-0.5">Pesan Terkirim Sukses!</strong>
                        Terima kasih telah menghubungi kami. Pesan pengadaan Anda telah diterima dan akan segera direspons oleh Account Officer kami melalui email / telepon.
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 text-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <MessageSquare size={16} className="animate-pulse" />
                        <span>Mengirim Formulir...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Kirim Pengajuan Pengadaan</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
