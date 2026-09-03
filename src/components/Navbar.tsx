import { useEffect, useState } from 'react';
import { Menu, X, CalendarDays, MapPin } from 'lucide-react';

const navItems = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'عن الملتقى', href: '#about' },
  { label: 'الأوراق', href: '#papers' },
  { label: 'المبادرات', href: '#initiatives' },
  { label: 'ورشة الطاقة', href: '#solar' },
  { label: 'المستهدفون', href: '#audience' },
  { label: 'المخرجات', href: '#outputs' },
  { label: 'الرعايات', href: '#sponsors' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-600/20">
            <span className="font-display text-white font-bold text-lg">خ</span>
          </div>
          <div className="text-right">
            <div
              className={`font-display font-bold text-sm leading-tight ${
                scrolled ? 'text-primary-900' : 'text-white'
              }`}
            >
              ملتقى الخرطوم
            </div>
            <div
              className={`text-xs ${
                scrolled ? 'text-stone-500' : 'text-primary-100'
              }`}
            >
              للتعافي الاقتصادي
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`text-sm ${scrolled ? 'nav-link' : 'text-white/90 hover:text-white font-medium transition-colors'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <div className={`text-xs flex items-center gap-2 ${scrolled ? 'text-stone-500' : 'text-primary-100'}`}>
            <CalendarDays className="w-4 h-4" />
            <span>سبتمبر - أكتوبر ٢٠٢٦</span>
          </div>
          <button onClick={() => handleNav('#register')} className="btn-primary text-sm py-2.5">
            سجّل الآن
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-primary-900' : 'text-white'}`}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 mt-2 animate-fade-in-down">
          <nav className="container-x py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-right py-3 px-4 rounded-lg text-stone-700 hover:bg-primary-50 hover:text-primary-700 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-2 py-3 px-4 text-stone-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>الخرطوم، السودان</span>
            </div>
            <button onClick={() => handleNav('#register')} className="btn-primary mt-2 mx-4">
              سجّل الآن
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
