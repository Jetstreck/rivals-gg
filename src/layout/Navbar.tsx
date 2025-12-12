import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#contact", label: "CONTACT" },
    { href: "#blog", label: "BLOG" },
  ];

  return (
    <header className="sticky top-4 z-50 flex w-full justify-center px-4">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-8 rounded-full border-2 border-white/30 bg-white/10 px-16 py-8 shadow-lg backdrop-blur-md" style={{ minHeight: '80px', paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '4rem', paddingRight: '4rem' }}>
        {/* Left: Brand */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-1 rounded-full px-2"
        >
          <img 
            src="/assets/images/teks-logo-3.png" 
            alt="rivals gg" 
            className="h-12 object-contain drop-shadow-lg shadow-black/50"
          />
        </Link>

        {/* Center: Nav links - Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium uppercase tracking-wide text-white transition-colors hover:text-white/80"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Your Team Button */}
        <div className="flex items-center gap-2">
          <button className="hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-600 shadow-md transition-all hover:shadow-lg active:scale-95 md:block">
            Your Team
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 top-full mt-2 w-full rounded-full border border-white/20 bg-white/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full px-4 py-3 text-sm font-medium uppercase tracking-wide text-zinc-700 transition-colors hover:bg-zinc-100"
                >
                  {link.label}
                </a>
              ))}
              <button className="mt-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 active:scale-95">
                Your Team
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

