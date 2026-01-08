// components/Tools.tsx
import Image from "next/image";

type Tool = {
  id: number;
  title: string;
  desc: string;
  img: string;
  alt: string;
};

const TOOLS: Tool[] = [
  {
    id: 1,
    title: "HTML, CSS, JS",
    desc:
      "Ketiga bahasa ini merupakan awal dunia pemrograman saya dan sudah mempelajarinya sejak 2022 – Sekarang.",
    img: "/image/fe.png",
    alt: "HTML, CSS, JS",
  },
  {
    id: 2,
    title: "React",
    desc:
      "Berpengalaman dengan React, TypeScript (TSX), JSX, dan Tailwind CSS untuk styling responsif.",
    img: "/image/react.png",
    alt: "React",
  },
  {
    id: 3,
    title: "Bootstrap",
    desc: "Framework ini sering saya gunakan untuk mempermudah desain web.",
    img: "/image/bootstrap.png",
    alt: "Bootstrap",
  },
  {
    id: 4,
    title: "Basic Python",
    desc: "Saya mulai belajar bahasa pemrograman Python sejak 2024.",
    img: "/image/python.png",
    alt: "Basic Python",
  },
  {
    id: 5,
    title: "Basic C++",
    desc: "Saya mulai mempelajari bahasa pemrograman C++ sejak 2024 – Sekarang.",
    img: "/image/c++.png",
    alt: "Basic C++",
  },
  {
    id: 6,
    title: "Github",
    desc: "Saya menggunakan Github untuk projek kerjasama tim.",
    img: "/image/github.png",
    alt: "Github",
  },
];

export default function Tools() {
  return (
    <section
      id="tools-skills"
      className="py-20 px-5 mt-10"
      // gunakan font Georgia secara spesifik seperti permintaan
      style={{ fontFamily: "Georgia, serif" }}
    >
      {/* Judul sesuai permintaan (pakai baris judul versi lo) */}
      <h2 className="text-center mb-12 text-5xl leading-tight font-semibold text-black">
        Tools
      </h2>

      {/* grid: repeat(auto-fit, minmax(240px, 1fr)) */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10 max-w-250 mx-auto">
        {TOOLS.map((t) => (
          <article
            key={t.id}
            className="bg-white p-6 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
          >
            <div className="mb-5 relative">
              <Image
                src={t.img}
                alt={t.alt}
                width={60}
                height={60}
                className="object-contain"
                priority={false}
                style={{ objectFit: "cover" }}
              />
            </div>

            <h3
              className="text-[22px] mb-3 font-semibold text-black"
              // responsive reduction on very small screens
              style={{ textAlign: "center" }}
            >
              {t.title}
            </h3>

            <p className="text-base text-[#333333] leading-6 text-center">
              {t.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
