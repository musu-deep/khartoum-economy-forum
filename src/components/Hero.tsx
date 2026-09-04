import { useEffect, useState } from 'react';
import { CalendarDays, MapPin, ArrowLeft, Users, Lightbulb, Handshake } from 'lucide-react';

const heroImage = '/images/khartoum-cinematic-hero.webp';
const eventDate = new Date('2026-10-04T09:00:00+03:00').getTime();

const getTimeLeft = () => {
  const distance = Math.max(0, eventDate - Date.now());

  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
};

const formatNumber = (value: number) =>
  new Intl.NumberFormat('ar-EG', { minimumIntegerDigits: 2, useGrouping: false }).format(value);

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

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
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container-x text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-down">
          <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">برعاية اتحاد أصحاب العمل السوداني</span>
        </div>

        <div className="grid lg:grid-cols-[1.25fr_0.75fr] items-center gap-6 lg:gap-10 max-w-7xl mx-auto">
          <div className="relative px-6 sm:px-10 py-7 lg:text-right">
            <div className="absolute inset-0 rounded-[2rem] bg-black/30 backdrop-blur-[2px] shadow-[0_20px_70px_rgba(0,0,0,0.2)]" />

            <div className="relative">
              <img
                src="/images/forum-logo-mark.png"
                alt="شعار ملتقى الخرطوم للتعافي الاقتصادي"
                className="w-24 sm:w-28 lg:w-32 h-auto object-contain mx-auto lg:mx-0 mb-4 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] animate-fade-in-up"
              />
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-fade-in-up">
                ملتقى الخرطوم
                <br />
                <span className="text-[#38e0c1]">للتعافي الاقتصادي</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-white/95 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                تحويل التحديات المعيشية إلى فرص للتعافي والتمكين الاجتماعي والاقتصادي والصناعي
                <br />
                من خلال شراكات تمويلية ومشاريع طاقة ومياه واستدامة للخدمات الأساسية.
              </p>

              {/* Organizers */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-white/85 text-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <span>تنظيم مجموعة فاس التنموية</span>
                <span className="w-1 h-1 rounded-full bg-primary-300" />
                <span>مركز إلهام للدراسات الاستراتيجية</span>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="relative px-5 py-7 rounded-[2rem] bg-black/[0.35] backdrop-blur-[3px] border border-white/20 shadow-[0_20px_70px_rgba(0,0,0,0.24)] animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <div className="text-secondary-400 text-sm font-semibold tracking-wide">موعدنا المرتقب</div>
            <div className="mt-2 text-2xl sm:text-3xl font-bold text-white font-display">٤ أكتوبر ٢٠٢٦</div>
            <div className="mt-6 grid grid-cols-4 gap-2" dir="rtl">
              {[
                { value: timeLeft.days, label: 'يوم' },
                { value: timeLeft.hours, label: 'ساعة' },
                { value: timeLeft.minutes, label: 'دقيقة' },
                { value: timeLeft.seconds, label: 'ثانية' },
              ].map((unit) => (
                <div key={unit.label} className="rounded-2xl bg-white/10 border border-white/15 px-2 py-4">
                  <div className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white tabular-nums leading-none">{formatNumber(unit.value)}</div>
                  <div className="mt-2 text-xs sm:text-sm text-white/75">{unit.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 text-sm text-white/75">حتى انطلاق ملتقى الخرطوم للتعافي الاقتصادي</div>
          </div>
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
            { icon: Users, value: '١٥٠', label: 'مشارك متوقع' },
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
            <span className="font-medium">٤ أكتوبر ٢٠٢٦</span>
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
