import { CalendarDays, MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

      <div className="container-x relative z-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="font-display text-white font-bold text-xl">خ</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg">ملتقى الخرطوم</div>
                <div className="text-sm text-primary-200">للتعافي الاقتصادي</div>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed">
              ملتقى ينطلق من قضية مباشرة تمسّ المواطن: كيف نخفّف أعباء المعيشة ونزيد قدرة الأسرة
              على مواجهة الظروف الاقتصادية.
            </p>
          </div>

          {/* Organizers */}
          <div>
            <h3 className="font-display font-bold text-base mb-5 text-secondary-400">برعاية وتنظيم</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-100">
                <span className="text-primary-300">الراعي: </span>
                اتحاد أصحاب العمل السوداني
              </li>
              <li className="text-primary-100">
                <span className="text-primary-300">المنظّم: </span>
                مجموعة فاس التنموية
              </li>
              <li className="text-primary-100">
                <span className="text-primary-300">المنظّم: </span>
                مركز إلهام للدراسات الاستراتيجية
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-base mb-5 text-secondary-400">معلومات الفعالية</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-primary-100">
                <CalendarDays className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span>الأسبوع الأول من أكتوبر ٢٠٢٦</span>
              </li>
              <li className="flex items-center gap-3 text-primary-100">
                <MapPin className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span>الخرطوم - السودان</span>
              </li>
              <li className="flex items-center gap-3 text-primary-100">
                <Mail className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span>info@sudabizhub.org</span>
              </li>
              <li className="flex items-center gap-3 text-primary-100">
                <Phone className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span dir="ltr">+249 123009001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-300 text-sm">
            © ٢٠٢٦ ملتقى الخرطوم للتعافي الاقتصادي. جميع الحقوق محفوظة.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-primary-100 transition-all duration-300 border border-white/10"
          >
            <ArrowUp className="w-4 h-4" />
            العودة للأعلى
          </button>
        </div>
      </div>
    </footer>
  );
}
