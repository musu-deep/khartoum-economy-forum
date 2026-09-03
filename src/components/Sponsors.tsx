import { Tv, Printer, Sun, Monitor, Building, Award } from 'lucide-react';

const mainSponsors = [
  { label: 'الراعي', name: 'اتحاد أصحاب العمل', icon: Award, color: 'from-primary-600 to-primary-800' },
  { label: 'المنظّم', name: 'فاس التنموية', icon: Building, color: 'from-accent-600 to-accent-800' },
  { label: 'المنظّم', name: 'مركز إلهام للدراسات الاستراتيجية', icon: Building, color: 'from-secondary-500 to-secondary-700' },
];

const otherSponsorships = [
  { icon: Tv, title: 'راعي إعلامي', description: 'التغطية والبث' },
  { icon: Printer, title: 'راعي طباعة', description: 'الفولدر والبروشور والاستاندات' },
  { icon: Sun, title: 'راعي طاقة', description: 'دعم ورشة الطاقة الشمسية' },
  { icon: Monitor, title: 'شريك تقني', description: 'الصوت والشاشات والإنترنت' },
  { icon: Building, title: 'شريك مؤسسي', description: 'القاعة أو الخدمات اللوجستية' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-white relative overflow-hidden">
      <div className="container-x relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            الرعايات والشركاء
          </div>
          <h2 className="section-title">رعاية وتنظيم</h2>
          <p className="section-subtitle">
            الملتقى برعاية وتنظيم جهات فاعلة في المشهد الاقتصادي والتنموي.
          </p>
        </div>

        {/* Main sponsors */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {mainSponsors.map((sponsor, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-stone-200/60 bg-stone-50 p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${sponsor.color} flex items-center justify-center mb-5 shadow-lg`}>
                <sponsor.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">
                {sponsor.label}
              </div>
              <div className="font-display text-lg font-bold text-primary-900 leading-snug">
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>

        {/* Other sponsorship opportunities */}
        <div className="text-center mb-10">
          <h3 className="font-display text-xl font-bold text-primary-900">فرص الرعاية الأخرى</h3>
          <p className="text-stone-500 text-sm mt-2">يمكن استكمال الاحتياجات من خلال الشراكات التالية</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {otherSponsorships.map((sponsor, i) => (
            <div
              key={i}
              className="card card-hover p-6 text-center group"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                <sponsor.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-display text-sm font-bold text-primary-900 mb-1">
                {sponsor.title}
              </h4>
              <p className="text-xs text-stone-500">
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
