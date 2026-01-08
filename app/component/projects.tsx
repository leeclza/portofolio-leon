"use client"

import React, { useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const PROJECTS: Project[] = [
  { id: 1, title: "Website Pemilihan Ketua Angkatan", 
    description: "Website ini dibuat sebagai sarana pemilihan Ketua Angkatan secara e-voting yang aman, transparan, dan efisien. Saya bertanggung jawab di bidang front-end (halaman utama).", 
    image: "/image/bumiketupat.png",
    link: "https://www.algovista24.site/",
  },
  { id: 2, 
    title: "Website PPLK 2025", 
    description: "Website ini dibuat untuk Program Pengenalan Lingkungan Kampus (PPLK) Mahasiswa Baru 2025. Saya bertanggung jawab di bidang front-end, yaitu bagian Profile, dan Detail UPA.", 
    image: "/image/pplk25.png",
    link: "",
  },
  { id: 3, title: "Website IGTTPB 2025", 
    description: "Website ini dibuat untuk mencari kelompok, absensi kehadiran peserta, dan Pengumpulan tugas. Saya bertanggung jawab sebagai kepala divisi IT.", 
    image: "/image/igttpb25.png",
    link: "https://www.igttpb.site/",
  },
  { id: 4, title: "Website Portofolio", 
    description: "Website portofolio pribadi yang dibuat untuk personal branding saya.", 
    image: "/image/porto.png",
    link: "",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? PROJECTS : PROJECTS.slice(0, 2);
  const toggle = () => setExpanded((s) => !s);

  return (
    <section aria-label="projects" className="w-full py-16 mt-40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="text-center mb-12 text-5xl leading-tight font-semibold text-black">
          My Projects
        </h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {visible.map((p) => (
            <article
              key={p.id}
              className="w-full max-w-90 border-2 border-[#7E7979] rounded-[30px] overflow-hidden bg-white"
              aria-labelledby={`project-title-${p.id}`}
            >


            {/* IMAGE*/}
              <div className="relative w-full h-55">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-[30px] rounded-b-0"
                  />
              </div>
              {/* TEXT */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  id={`project-title-${p.id}`}
                  className="text-lg font-semibold mb-3 text-black"
                >
                  {p.title}
                </h3>

                <p className="text-sm leading-relaxed text-black">
                  {p.description}
                </p>

                {/* LINK DI PALING BAWAH */}
                <div className="mt-auto pt-3 text-sm text-black">
                  Link:
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-blue-600 hover:text-blue-800 hover:underline break-all"
                  >
                    {p.link}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Button area */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <button
            onClick={toggle}
            aria-expanded={expanded}
            className={`px-6 py-2 border-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D233F] ${
              expanded
                ? "bg-[#0D233F] border-[#0D233F] text-white"
                : "bg-transparent border-[#0D233F] text-black hover:bg-[#0D233F] hover:text-white"
            }`}
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
