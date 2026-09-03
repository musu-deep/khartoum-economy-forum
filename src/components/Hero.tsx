import { CalendarDays, MapPin, ArrowLeft, Users, Lightbulb, Handshake } from 'lucide-react';

const heroImage = '/images/khartoum-cinematic-hero.webp';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="خلفية الملتقى"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/45 via-primary-900/35 to-primary-950/60" />
        <div className="absolute inset-0 pattern-dots opacity-15" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container-x text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-down">
          <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">برعاية اتحاد أصحاب العمل</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up">
          ملتقى الخرطوم
          <br />
          <span className="text-secondary-400">للتعافي الاقتصادي</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          تحويل التحديات المعيشية إلى فرص للتعافي والتمكين الاجتماعي والاقتصادي والصناعي
          <br />
          من خلال شراكات تمويلية ومشاريع طاقة ومياه واستدامة للخدمات الأساسية.
        </p>

        {/* Organizers */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-primary-100/80 text-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <span>تنظيم فاس التنموية</span>
          <span className="w-1 h-1 rounded-full bg-primary-300" />
          <span>مركز إلهام للدراسات الاستراتيجية</span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button onClick={() => scrollTo('#register')} className="btn-primary text-base px-8 py-4">
            <span>سجّل في الملتقى</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTo('#about')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 active:scale-95"
          >
            تعرّف على الملتقى
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {[
            { icon: Users, value: '+٥٠٠', label: 'مشارك متوقع' },
            { icon: Lightbulb, value: '٦', label: 'مبادرات قابلة للتنفيذ' },
            { icon: Handshake, value: '+٢٠', label: 'جهة شريكة' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm mb-3">
                <stat.icon className="w-6 h-6 text-secondary-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-display">{stat.value}</div>
              <div className="text-sm text-primary-100/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Date/location bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-primary-100/90 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-secondary-400" />
            <span className="font-medium">نهاية سبتمبر أو بداية أكتوبر ٢٠٢٦</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-secondary-400" />
            <span className="font-medium">الخرطوم - السودان</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
