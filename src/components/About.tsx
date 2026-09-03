import { Target, Eye, ArrowLeft } from 'lucide-react';

const themes = [
  'تخفيض أسعار السلع',
  'أسواق ومنافذ البيع المخفض',
  'الشراء الجماعي والمباشر',
  'دعم الإنتاج المحلي',
  'خلق فرص العمل',
  'تشغيل الشباب والمرأة',
  'الحاضنات والمشروعات الصغيرة',
  'التمويل الميسر والجماعي',
  'الطاقة الشمسية',
  'دور النقابات والاتحادات المهنية',
  'الأسواق داخل المؤسسات',
  'الحماية الاجتماعية',
  'الشراكة بين الدولة والقطاع الخاص والمجتمع',
];

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
            ينطلق الملتقى برؤية متكاملة تقودها رعاية استراتيجية من اتحاد أصحاب العمل السوداني كممثل للقطاعات الإنتاجية والصناعية والتجارية ، 
            وتدعمها الخبرة المعرفية والدراسات التخصصية لشركاء الملتقى والمهنية التنفيذية والمحافظ المقترحة للمشاريع التنموية؛
            من أجل بناء منظومة عمل مستدامة تخدم التوجيهات السيادية وقطاعات الإنتاج والتصنيع ، 
            وتضمن استمرار أثر المبادرات على أرض الواقع عبر منصات متابعة وشراكات ممتدة.
            تحدث أثراً في حياة المواطن وتدعم التدفقات الصناعية والإنتاجية  والتعافي الاقتصادي والاجتماعي
          </p>
        </div>

        {/* Vision & Mission cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="card card-hover p-8 group">
            <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
              <Target className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-900 mb-4">الرسالة</h3>
            <p className="text-stone-600 leading-relaxed">
              الانطلاق من قضية مباشرة تمسّ المواطن: كيف نخفّف أعباء المعيشة ونزيد قدرة الأسرة
              على مواجهة الظروف الاقتصادية، وذلك من خلال منظومة متكاملة تشمل الأسواق المخفضة،
              والشراء الجماعي، ودعم الإنتاج المحلي، وخلق فرص العمل، والتمويل الميسر.
            </p>
          </div>

          <div className="card card-hover p-8 group">
            <div className="w-14 h-14 rounded-2xl bg-secondary-100 flex items-center justify-center mb-6 group-hover:bg-secondary-500 transition-colors duration-300">
              <Eye className="w-7 h-7 text-secondary-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-900 mb-4">الرؤية</h3>
            <p className="text-stone-600 leading-relaxed">
              تحويل الملتقى إلى منصة عمل مستمرة، تختار عددًا من المبادرات وتتابع تنفيذها بعد
              الفعالية، ويصدر عنها وثيقة مخرجات وتوصيات عملية تتضمن: المشكلة ← الحل ← الجهة
              المسؤولة ← الشركاء ← آلية التمويل ← الخطوة التالية.
            </p>
          </div>
        </div>

        {/* Themes grid */}
        <div className="text-center mb-10">
          <h3 className="font-display text-2xl font-bold text-primary-900">منظومة الملتقى المتكاملة</h3>
          <p className="text-stone-500 mt-2">المحاور التي يغطيها الملتقى لتحقيق التعافي الاقتصادي</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {themes.map((theme, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200/60 hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300 cursor-default group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                <ArrowLeft className="w-4 h-4 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-sm font-medium text-stone-700 group-hover:text-primary-800 transition-colors">
                {theme}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
