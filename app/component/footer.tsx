"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full mt-40">
        {/* TOP GRADIENT SECTION */}
        <div
        style={{
            background:
            "linear-gradient(180deg, rgba(235,233,231,0.9) 0%, rgba(9,24,43,0.99) 100%)",
        }}
        className="w-full min-h-[80vh] flex items-end"
        >
        <div className="mx-auto max-w-7xl px-6 pb-24 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* LEFT - IMAGE */}
            <div className="flex justify-start">
              <div
                className="relative overflow-hidden"
                style={{ width: 640, height: 425, borderRadius: 6 }}
              >
                <Image
                  src="/image/contact.png"
                  alt="Handshake"
                  fill
                  style={{ objectFit: "cover" }}
                  className=""
                />
              </div>
            </div>

            {/* RIGHT - Contact Text + Icons */}
            <div className="flex flex-col items-center md:items-center justify-center text-center">
            <h3
            className="
                text-3xl md:text-4xl font-semibold mb-8
                text-center md:text-left
                md:mr-48 md:mb-12
            "
            style={{ color: "#FFFFFF" }}
            >
            Contact Us
            </h3>

{/* coba bikin versi array di atas */}
              {/* social icons row */}
              <div className="flex items-center gap-6 mb-3">
                {/* Icon 1 - LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/christopher-leon-saputra-114402323/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                  className="flex items-center justify-center rounded-full shadow-sm bg-white"
                  style={{ width: 45, height: 45, padding: 6 }}
                >
                  <Image
                    src="/image/linkedin.png"
                    alt="linkedin"
                    width={22}
                    height={22}
                  />
                </a>

                {/* Icon 2 - Instagram */}
                <a
                  href="https://www.instagram.com/c.leonsra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center rounded-full shadow-sm bg-white"
                  style={{ width: 45, height: 45, padding: 6 }}
                >
                  <Image
                    src="/image/ig.png"
                    alt="instagram"
                    width={22}
                    height={22}
                  />
                </a>

                {/* Icon 3 - GitHub */}
                <a
                  href="https://github.com/leeclza"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                  className="flex items-center justify-center rounded-full shadow-sm bg-white"
                  style={{ width: 45, height: 45, padding: 6 }}
                >
                  <Image
                    src="/image/github.png"
                    alt="github"
                    width={22}
                    height={22}
                  />
                </a>
              </div>

              {/* Home text (scroll to top) */}
              <a
                href="#"
                onClick={scrollToTop}
                className="text-xs tracking-wide mt-1"
                style={{ color: "#808080" }}
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WHITE STRIP BELOW GRADIENT (for now it's white; you said you'll adjust later) */}
      <div className="w-full bg-[#09182B]" style={{ height: 10 }} />
    </footer>
  );
}
