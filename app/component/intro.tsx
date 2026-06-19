import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({ subsets: ["latin"], display: "swap" });

type Props = {
  imageSrc?: string;
  imageAlt?: string;
};

export default function Intro({  }: Props) {
  return (
    <section
      aria-label="hero"
    >
      <div className="mx-auto max-w-7xl px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-40">

          {/* LEFT - TEXT */}
          <div className="w-full lg:w-2/3">
            <p className={`${inter.className} text-2xl font-semibold text-[#000000] mb-4 ml-8`}>Hai saya</p>

            <h1 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#0D233F] mb-4`}>
              Christopher Leon Saputra
            </h1>

            <h2 className={`${playfair.className} text-base md:text-lg font-medium text-[#000000] mb-12 ml-9`}>
              Mahasiswa Program Studi Teknik Informatika
            </h2>

            <p className={`${inter.className} max-w-prose text-sm md:text-base text-[#000000] ml-8`}>Saat ini saya berkuliah di Institut Teknologi Sumatera. Saya memiliki minat besar dalam bidang front-end dan sedang aktif memperdalam keterampilan NextJS.</p>
          </div>

          {/* RIGHT - IMAGE CARD */}
          <div className="w-full lg:w-1/3 flex justify-end">
            <div className="relative w-75 h-50 md:w-90 md:h-60 lg:w-105 lg:h-75"> 

              {/* shadowed card with colored background */}
              <div className="absolute inset-0 rounded-sm shadow-[0_20px_30px_rgba(0,0,0,0.25)]">
                <div
                className="w-full h-full rounded-sm overflow-hidden"
                style={{
                    background: "linear-gradient(45deg, #0D233F 43%, #194072 85%)",
                }}
                >
                <Image
                    src="/image/pp.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
