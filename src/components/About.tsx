import { Target, Eye, Scale, Compass, HandCoins, TrendingUp, ArrowLeft } from 'lucide-react';

const recoverySystem = [
  {
    icon: Scale,
    level: 'المستوى التشريعي',
    title: 'بيئة سياسات محفّزة للتعافي',
    description: 'تحويل توصيات الأوراق إلى حزمة سياسات مترابطة تخفّض كلفة الإنتاج وتفتح مسارات التعافي.',
    outcomes: ['سياسات مالية وضريبية داعمة', 'تعرفة جمركية محفّزة لمدخلات الإنتاج', 'تسهيلات تشريعية للاستيراد والتوطين'],
    color: 'primary',
  },
  {
    icon: Compass,
    level: 'المستوى القيادي',
    title: 'قيادة موحّدة وقرار منسّق',
    description: 'إطار قيادة يجمع الدولة والقطاع الخاص والاتحادات حول أولويات واضحة ومسؤوليات قابلة للمتابعة.',
    outcomes: ['مجلس قيادة لمنظومة التعافي', 'مصفوفة قرارات ومسؤوليات مشتركة', 'منصة متابعة وقياس للأثر'],
    color: 'secondary',
  },
  {
    icon: HandCoins,
    level: 'المستوى التمكيني',
    title: 'تمويل وشراكات تفتح القدرة',
    description: 'توجيه الأدوات التمويلية والائتمانية والمشتريات الجماعية لتقوية المنتج وحماية المستهلك.',
    outcomes: ['محافظ تمويل ميسّر وائتمان إنتاجي', 'شراكات تنفيذ بين القطاعين العام والخاص', 'دور فاعل للنقابات والحماية الاجتماعية'],
    color: 'accent',
  },
  {
    icon: TrendingUp,
    level: 'المستوى التنموي',
    title: 'مشروعات تنتج أثراً مستداماً',
    description: 'ترجمة التوافق المؤسسي إلى مشروعات عملية تدعم الخدمات الأساسية والإنتاج والتشغيل.',
    outcomes: ['توطين صناعة الطاقة الشمسية والمياه', 'أسواق مخفّضة وسلاسل إمداد أكثر كفاءة', 'حاضنات وفرص عمل للشباب والمرأة'],
    color: 'teal',
  },
];

const colorMap: Record<string, { icon: string; badge: string; border: string }> = {
  primary: { icon: 'bg-primary-100 text-primary-700 group-hover:bg-primary-600', badge: 'bg-primary-50 text-primary-700', border: 'hover:border-primary-300' },
  secondary: { icon: 'bg-secondary-100 text-secondary-700 group-hover:bg-secondary-500', badge: 'bg-secondary-50 text-secondary-700', border: 'hover:border-secondary-300' },
  accent: { icon: 'bg-accent-100 text-accent-700 group-hover:bg-accent-600', badge: 'bg-accent-50 text-accent-700', border: 'hover:border-accent-300' },
  teal: { icon: 'bg-teal-100 text-teal-700 group-hover:bg-teal-600', badge: 'bg-teal-50 text-teal-700', border: 'hover:border-teal-300' },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-50" />
      <div className="container-x relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            عن الملتقى
          </div>
          <h2 className="section-title">الرؤية والتوجُّه</h2>
          <p className="section-subtitle">
            ينطلق الملتقى برؤية متكاملة تقودها رعاية استراتيجية من اتحاد أصحاب العمل السوداني كممثل للقطاعات الإنتاجية والصناعية والتجارية،
            وتدعمها الخبرة المعرفية والدراسات التخصصية لشركاء الملتقى والمهنية التنفيذية والمحافظ المقترحة للمشاريع التنموية؛
            من أجل بناء منظومة عمل مستدامة تخدم التوجيهات السيادية وقطاعات الإنتاج والتصنيع،
            وتضمن استمرار أثر المبادرات على أرض الواقع عبر منصات متابعة وشراكات ممتدة،
            تحدث أثراً في حياة المواطن وتدعم التدفقات الصناعية والإنتاجية والتعافي الاقتصادي والاجتماعي.
          </p>
        </div>

        {/* Vision & Mission cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="card card-hover p-8 group">
            <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
              <Target className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-900 mb-4">الرؤية</h3>
            <p className="text-stone-600 leading-relaxed">
              نحو تعزيز القيمة والأثر الاجتماعي والاقتصادي للمؤسسات والقطاعات الإنتاجية والصناعية ودورها في التعافي 
            </p>
          </div>

          <div className="card card-hover p-8 group">
            <div className="w-14 h-14 rounded-2xl bg-secondary-100 flex items-center justify-center mb-6 group-hover:bg-secondary-500 transition-colors duration-300">
              <Eye className="w-7 h-7 text-secondary-600 group-hover:text-white transition-colors duration-300" />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-primary-900 mb-4">الرسالة</h3>
            <p className="text-stone-600 leading-relaxed">
              بحث آليات تلبية الاحتياجات المباشرة التي تمسّ المواطن وتخفيف أعباء المعيشة وزيادة قدرة الأسرة
              على مواجهة الظروف الاقتصادية، عبر سياسات ممكنة وشراكات فاعلة ومشروعات إنتاجية
              قابلة للتنفيذ والقياس والاستدامة.
            </p>
          </div>
        </div>

        {/* Recovery system */}
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-teal-700 mb-3">من الأوراق إلى السياسات والمشروعات</div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-primary-900">منظومة التعافي</h3>
          <p className="text-stone-500 mt-3 max-w-3xl mx-auto leading-relaxed">
            إطار متكامل يحوّل أوراق الملتقى إلى مسار مؤسسي يبدأ بالتشريع، تقوده حوكمة مشتركة،
            وتمكّنه أدوات التمويل والشراكة، وينتهي بمشروعات تنموية قابلة للقياس والاستدامة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {recoverySystem.map((pillar) => {
            const colors = colorMap[pillar.color];
            return (
              <article
                key={pillar.level}
                className={`rounded-3xl bg-white border border-stone-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colors.border} group`}
              >
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:text-white ${colors.icon}`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${colors.badge}`}>{pillar.level}</span>
                </div>
                <h4 className="font-display text-xl font-bold text-primary-900 leading-snug">{pillar.title}</h4>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed min-h-[5rem]">{pillar.description}</p>
                <div className="mt-5 pt-5 border-t border-stone-100 space-y-3">
                  {pillar.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2.5 text-sm text-stone-700">
                      <ArrowLeft className="w-4 h-4 mt-0.5 text-teal-600 flex-shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
