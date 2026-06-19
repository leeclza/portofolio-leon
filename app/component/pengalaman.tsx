"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RundownItem = {
  id: number;
  date: string;
  about: string;
  isIT: boolean;
  role: string;
  event: string;
  desc: string;
};

type Tab = "kepanitiaan" | "magang" | "organisasi" | "prestasi";

const dataByTab: Record<Tab, RundownItem[]> = {
  kepanitiaan: [
    { id: 1, date: "Sep 2024", about: "First Meet Teknik Informatika 24, Staff Divisi Transportasi", isIT: false, role: "Staff Divisi Transportasi", event: "First Meet Teknik Informatika 24", desc: "Mengoordinasikan kebutuhan transportasi peserta maupun panitia selama kegiatan First Meet berlangsung." },
    { id: 2, date: "Feb 2025 – Mar 2025", about: "BUMI KETUPAT, Staff Divisi IT", isIT: true, role: "Staff Divisi IT", event: "Buat Milih Ketua Dua Empat (BUMI KETUPAT)", desc: "Mengembangkan tampilan front-end website sebagai media pelaksanaan pemilihan ketua angkatan berbasis digital." },
    { id: 3, date: "Jul 2025", about: "Penyambutan Maba Teknik Informatika 25, Mentor Kelompok", isIT: false, role: "Mentor Kelompok", event: "Penyambutan Maba Teknik Informatika 25", desc: "Membimbing dan mendampingi kelompok mahasiswa baru dalam mengikuti seluruh rangkaian kegiatan penyambutan." },
    { id: 4, date: "Jun 2025 – Aug 2025", about: "PPLK 2025, Staff Front-End Divisi IMTEK", isIT: true, role: "Staff Front-End Divisi IMTEK", event: "PPLK ITERA 2025", desc: "Mengembangkan tampilan website PPLK kegiatan menggunakan framework ReactJS." },
    { id: 5, date: "Sep 2025 – Oct 2025", about: "IGTTPB 2025, Kepala Divisi IT", isIT: true, role: "Kepala Divisi IT", event: "Informatics Goes to TPB (IGTTPB) 2025", desc: "Berperan sebagai project manager divisi IT sekaligus backup staff dan memastikan website berjalan dengan baik. Framework yang digunakan adalah NextJS." },
    { id: 6, date: "Oct 2025", about: "PODIUM ITERA, Staff Content Research Divisi IMTEK", isIT: true, role: "Staff Content Research Divisi IMTEK", event: "PODIUM ITERA", desc: "Melakukan riset dan pengumpulan informasi sebagai bahan konten yang ditampilkan pada website kegiatan." },
    { id: 7, date: "Aug 2025 – Nov 2025", about: "Informatics Festival 2025, Staff Sponsorship", isIT: false, role: "Staff Sponsorship", event: "Informatics Festival 2025", desc: "Mencari, mengajukan proposal, dan melakukan follow up kepada calon sponsor untuk mendukung kegiatan." },
    { id: 8, date: "Jun 2026 – Sekarang", about: "PPLK ITERA, Kepala Sub-Divisi Back-End Divisi IMTEK", isIT: true, role: "Kepala Sub-Divisi Back-End Divisi IMTEK", event: "PPLK ITERA 2026", desc: "Bertanggung jawab dalam mengatur aliran data, mengelola database, serta memastikan interaksi server dan klien berjalan lancar pada website dan game PPLK 2026." },
    { id: 9, date: "Mar 2026 – May 2026", about: "Paskah KMK ITERA 2026, Wakil Ketua Pelaksana", isIT: false, role: "Wakil Ketua Pelaksana", event: "Paskah KMK ITERA 2026", desc: "Membantu ketua pelaksana dalam mengoordinasikan seluruh rangkaian kegiatan dan menjadi backup dalam pengambilan keputusan teknis acara." },
    { id: 10, date: "Apr 2026 – Sekarang", about: "LDOP Arithmatic 8.0, Staff Komisi Disiplin", isIT: false, role: "Staff Komisi Disiplin", event: "LDOP Arithmatic 8.0", desc: "Mengawasi dan menegakkan ketertiban peserta selama kegiatan berlangsung sesuai SOP yang telah ditetapkan." },
    { id: 11, date: "Apr 2026 – Sekarang", about: "Serasehan HMIF ITERA, Staff Manajemen Acara", isIT: false, role: "Staff Manajemen Acara", event: "Serasehan HMIF ITERA", desc: "Menyusun rundown acara dan SOP sebagai panduan teknis pelaksanaan kegiatan." },
    { id: 12, date: "Apr 2026 – Sekarang", about: "Point Project 4.0 HMIF ITERA, Kepala Sub-Divisi Time Keeper", isIT: false, role: "Kepala Sub-Divisi Time Keeper", event: "Point Project 4.0 HMIF ITERA", desc: "Menjadi kepala sub-divisi time keeper yang memastikan ketepatan waktu seluruh rangkaian acara sesuai rundown yang telah ditetapkan." },
  ],
  magang: [
    { id: 1, date: "Sep 2025 – Dec 2025", about: "Asisten Praktikum, Dasar Teknologi Digital", isIT: false, role: "Asisten Praktikum", event: "Dasar Teknologi Digital, ITERA", desc: "Menjadi asisten praktikum mata kuliah dasar teknologi digital untuk TPB." },
    { id: 2, date: "Sep 2025 – Dec 2025", about: "Staff Magang, KM ITERA", isIT: false, role: "Staff Magang", event: "Kementerian Teknologi Informasi KM ITERA (Kabinet Resonara)", desc: "Menjadi salah satu anggota magang pada Teknologi Informasi KM Kabinet Resonara." },
    { id: 3, date: "Feb 2026 – Sekarang", about: "Asisten Praktikum, Pengenalan Komputasi", isIT: false, role: "Asisten Praktikum", event: "Pengenalan Komputasi, ITERA", desc: "Menjadi asisten praktikum mata kuliah pengenalan komputasi untuk TPB." },
  ],
  organisasi: [
    { id: 1, date: "Jun 2025 – Sekarang", about: "Anggota, Badan Pengurus Angkatan Algovista", isIT: false, role: "Anggota – Divisi IT", event: "Badan Pengurus Angkatan (BPA) Algovista – IF 24", desc: "Mengorganisir Divisi IT dalam Kepengurusan Angkatan." },
    { id: 2, date: "Jan 2026 – Sekarang", about: "Anggota Muda, Himpunan Mahasiswa Informatika ITERA", isIT: false, role: "Anggota Muda – Divisi Technopreneur", event: "Himpunan Mahasiswa Informatika (HMIF) ITERA", desc: "Mengorganisir Divisi Technopreneur dalam Departemen Keprofesian." },
    { id: 3, date: "Jan 2026 – Sekarang", about: "Anggota, Keluarga Mahasiswa Katholik St. Thomas Aquinas ITERA", isIT: false, role: "Anggota – Divisi Implementasi Teknologi", event: "Keluarga Mahasiswa Katholik (KMK) St. Thomas Aquinas ITERA", desc: "Mengorganisir Divisi Implementasi Teknologi dalam Departemen Media Komunikasi Visual." },
  ],
  prestasi: [
    { id: 1, date: "Aug 2024", about: "Peserta Pelatihan LKMM Pra-TD I, ITERA", isIT: false, role: "Peserta", event: "Pelatihan LKMM Pra-TD I ITERA", desc: "Mengikuti pelatihan kepemimpinan dan manajemen mahasiswa tingkat pra-dasar untuk mengembangkan jiwa kepemimpinan." },
    { id: 2, date: "Nov 2024", about: "Peserta Mini Bootcamp 1.0 HMIF, ITERA", isIT: false, role: "Peserta", event: "Mini Bootcamp 1.0 HMIF ITERA", desc: "Mengikuti mini bootcamp yang diselenggarakan oleh HMIF ITERA sebagai program pengembangan kemampuan teknis mahasiswa baru." },
    { id: 3, date: "Aug 2025", about: "Volunteer HMIF Mengabdi Vol. 3, ITERA", isIT: false, role: "Volunteer", event: "HMIF Mengabdi Vol. 3", desc: "Berpartisipasi sebagai volunteer dalam kegiatan pengabdian masyarakat yang diselenggarakan oleh HMIF ITERA." },
    { id: 4, date: "May 2026", about: "Peserta Pelatihan LKMM TD VIII, ITERA", isIT: false, role: "Peserta", event: "Pelatihan LKMM TD VIII ITERA", desc: "Mengikuti pelatihan kepemimpinan dan manajemen mahasiswa tingkat dasar untuk mengembangkan jiwa kepemimpinan." },
  ],
};

const TAB_LABELS: Record<Tab, string> = {
  kepanitiaan: "Kepanitiaan",
  magang: "Magang & Kerja",
  organisasi: "Organisasi",
  prestasi: "Prestasi & Pelatihan",
};

export default function PengalamanPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("kepanitiaan");
  const [itFilter, setItFilter] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RundownItem | null>(null);
  const [typedText, setTypedText] = useState("");
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!selectedItem) return;
    setTypedText("");
    if (typingRef.current) clearTimeout(typingRef.current);
    let i = 0;
    const desc = selectedItem.desc;
    const type = () => {
      if (i < desc.length) {
        setTypedText(desc.slice(0, i + 1));
        i++;
        typingRef.current = setTimeout(type, 18);
      }
    };
    type();
    return () => { if (typingRef.current) clearTimeout(typingRef.current); };
  }, [selectedItem]);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setItFilter(false);
  };

  // terlama di atas → reverse the array
  const items = [...(itFilter
    ? dataByTab[activeTab].filter((i) => i.isIT)
    : dataByTab[activeTab])].reverse();

  const showITFilter = activeTab === "kepanitiaan";

  return (
    <section id="pengalaman" className="py-16 px-6">
      {/* TITLE */}
      <motion.h2
        className="text-center mt-10 mb-8 text-5xl leading-tight font-semibold text-black"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Pengalaman
      </motion.h2>

      {/* TABS */}
      <motion.div
        className="flex flex-col items-center gap-2 mb-2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span className="text-sm text-[#5F6F82] whitespace-nowrap">Pilih Kategori:</span>
          <div className="flex flex-wrap gap-2 bg-gray-100 rounded-xl p-1.5 border border-gray-200">
            {(Object.keys(TAB_LABELS) as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-white text-[#0B2545] font-semibold border border-gray-200 shadow-sm"
                    : "text-[#5F6F82] hover:bg-white hover:text-[#0B2545]"
                }`}
              >
                {TAB_LABELS[tab]}
            </button>
            ))}
          </div>
        </div>

        {/* IT FILTER — centered below tabs */}
        <AnimatePresence>
          {showITFilter && (
            <motion.div
              className="flex justify-center mt-1 mb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => setItFilter((v) => !v)}
                className={`px-5 py-1.5 rounded-full text-xs border transition-all duration-200 ${
                  itFilter
                    ? "bg-[#0B2545] text-white border-[#0B2545]"
                    : "bg-transparent text-[#5F6F82] border-[#5F6F82] hover:border-[#0B2545] hover:text-[#0B2545]"
                }`}
              >
                IT
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative flex flex-col items-center w-full max-w-3xl mx-auto">
        {/* GARIS TENGAH */}
        {!isMobile && (
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#081C33] -translate-x-1/2" />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + String(itFilter)}
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {items.length === 0 && (
              <p className="text-center text-[#5F6F82] py-10 text-sm">
                Tidak ada pengalaman dalam kategori ini.
              </p>
            )}

            {items.map((event, index) => (
              <motion.div
                key={event.id + event.about}
                className={`relative w-full flex my-6 ${
                  index % 2 === 0
                    ? "justify-start pr-6 md:pr-12"
                    : "justify-end pl-6 md:pl-12"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {/* TITIK */}
                {!isMobile && (
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-[#0B2545] rounded-full z-10 top-1/2 -translate-y-1/2" />
                )}

                {/* CARD */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedItem(event)}
                  className={`bg-white border-2 border-[#081C33] rounded-xl px-5 py-4 flex items-center gap-4 cursor-pointer select-none ${
                    isMobile ? "w-64 text-sm" : "w-72 md:w-80"
                  } ${index % 2 !== 0 ? "flex-row-reverse text-right" : "text-left"}`}
                >
                  {/* ICON */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="bg-[#F2F6FA] w-10 h-10 min-w-10 min-h-10 rounded-full border border-[#0B2545] flex items-center justify-center text-[#0B2545] font-semibold shrink-0 text-sm"
                  >
                    {event.id}
                  </motion.div>

                  {/* TEXT */}
                  <div>
                    <h3 className="font-semibold text-[#0B2545] text-sm leading-snug">
                      {event.about}
                    </h3>
                    <p className="text-[#5F6F82] text-xs mt-1">{event.date}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/45 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) setSelectedItem(null); }}
          >
            <motion.div
              className="bg-white rounded-2xl border border-gray-200 p-6 max-w-md w-full relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-[#5F6F82] hover:text-[#0B2545] text-xl leading-none transition-colors"
                aria-label="Tutup"
              >
                ✕
              </button>
              <p className="font-semibold text-[#0B2545] text-base pr-6 leading-snug">
                {selectedItem.role}
              </p>
              <p className="text-sm text-[#5F6F82] mt-1">{selectedItem.event}</p>
              <p className="text-xs text-gray-400 mt-1 mb-3">{selectedItem.date}</p>
              <div className="border-t border-gray-100 pt-3 min-h-[60px]">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {typedText}
                  {typedText.length < selectedItem.desc.length && (
                    <span className="inline-block w-0.5 h-3.5 bg-[#0B2545] ml-0.5 align-middle animate-pulse" />
                  )}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}