import Link from "next/link";

export default function Navbar() {
    return(
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#0b2545]">
    <div className="flex h-16 items-center justify-between px-8">

        {/* LOGO */}
        <div className="text-white text-2xl font-medium tracking-[0.35em] -mr-[0.35em]" >
        <Link href="/">LEON</Link>
        </div>

        {/* MENU */}
        <div className="flex items-center gap-8 text-md mr-2">
        <Link href="/pengalaman" className="transition-colors duration-200 text-white hover:text-blue-800 hover:underline break-all">
        Pengalaman
        </Link>
        </div>

    </div>
    </nav>
    )
}