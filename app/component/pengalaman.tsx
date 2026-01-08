"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type RundownItem = {
  id: number;
  date: string;
  about: string;
};

const rundown: RundownItem[] = [
  { id: 1, date: "Nov 2024", about: "Peserta Mini Bootcamp 1.0 HMIF ITERA" },
  { id: 2, date: "Feb - Mar 2025", about: "Panitia Divisi IT Pemilihan Ketua Angkatan 24" },
  { id: 3, date: "May 2025 - Now", about: "Badan Pengurus Angkatan Teknik Informatika Angkatan 24 Divisi IT" },
  { id: 4, date: "Jun - August 2025", about: "Staff IMTEK Subdivisi Front End PPLK ITERA 2025" },
  { id: 5, date: "Jul 2025", about: "Panitia Penyambutan Maba Teknik Informatika Angkatan 25" },
  { id: 6, date: "Aug 2025", about: "Volunteer HMIF Mengabdi Vol. 3 2025" },
  { id: 7, date: "Sep - Oct 2025", about: "Kepala Divisi IT Informatics Goes to TPB 2025" },
  { id: 8, date: "Sep - Dec 2025", about: "Asisten Praktikum Dasar Teknologi Digital" },
  { id: 9, date: "Oct 2025", about: "Staff IMTEK PODIUM ITERA"},
  { id: 10, date: "Oct 2025", about: "Staff Magang Kementrian Teknologi Informasi KM ITERA"},
  { id: 11, date: "Oct - Nov 2025", about: "Staff Sponsorship Informatics Festival 2025" },
];


export default function PengalamanPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section id="rundown" className="py-16 px-6">
      {/* TITLE */}
      <motion.h2
        className="text-center mt-10 mb-14 text-5xl leading-tight font-semibold text-black"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Pengalaman
      </motion.h2>

      {/* TIMELINE */}
      <div className="relative flex flex-col items-center w-full max-w-3xl mx-auto">
        {/* GARIS TENGAH */}
        {!isMobile && (
          <div className="absolute top-0 bottom-0 left-1/2 w-0.75 bg-[#081C33] -translate-x-1/2" />
        )}

        {rundown.map((event, index) => {

          return (
            <motion.div
              key={index}
              className={`relative w-full flex my-6 ${
                index % 2 === 0
                  ? "justify-start pr-6 md:pr-12"
                  : "justify-end pl-6 md:pl-12"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* TITIK */}
              {!isMobile && (
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-[#0B2545] rounded-full z-10" />
              )}

              {/* CARD */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={`bg-white border-2 border-[#081C33] shadow-lg rounded-xl px-5 py-4 flex items-center gap-4 ${
                  isMobile ? "w-64 text-sm" : "w-72 md:w-80"
                } ${
                  index % 2 !== 0 ? "flex-row-reverse text-right" : "text-left"
                }`}
              >
                {/* ICON */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="
                  bg-[#F2F6FA]
                  w-10 h-10
                  min-w-10 min-h-10
                  rounded-full
                  border border-[#0B2545]
                  flex items-center justify-center
                  text-[#0B2545]
                  font-semibold
                  shrink-0
                "
              >
                {event.id}
              </motion.div>


                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-[#0B2545]">
                    {event.about}
                  </h3>
                  <p className="text-[#5F6F82]">{event.date}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
