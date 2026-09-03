import { ShoppingCart, Briefcase, Coins, Sun, Factory, ArrowLeft } from 'lucide-react';

const initiatives = [
  {
    icon: ShoppingCart,
    title: 'مبادرة الأسواق والسلع المخفضة',
    description: 'تطوير نموذج مستدام للشراء المباشر والجماعي والوصول إلى المستهلك بأسعار أقل.',
    number: '١',
  },
  {
    icon: Briefcase,
    title: 'مبادرة التشغيل والحاضنات',
    description: 'ربط الشباب والمرأة بالتدريب والحاضنات والتمويل والأسواق.',
    number: '٢',
  },
  {
    icon: Coins,
    title: 'مبادرة التمويل',
    description: 'تطوير نماذج للتمويل الفردي والجماعي للمشروعات الإنتاجية.',
    number: '٣',
  },
  {
    icon: Sun,
    title: 'مبادرة الطاقة الشمسية',
    description: 'توفير حلول الطاقة الشمسية للأسر والمؤسسات والمشروعات، مع دراسة التمويل الميسر والتوسع في الولايات.',
    number: '٤',
  },
  {
    icon: Factory,
    title: 'مبادرة دعم الإنتاج المحلي',
    description: 'ربط المنتجين بالأسواق والتصنيع والتوزيع.',
    number: '٥',
  },
];

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-50 rounded-full blur-3xl opacity-60" />

      <div className="container-x relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-50 text-secondary-700 text-sm font-medium mb-4">
            <LightbulbIcon />
            البعد العملي
          </div>
          <h2 className="section-title">المبادرات التنموية</h2>
          <p className="section-subtitle">
            الهدف من الملتقى ليس إصدار توصيات عامة فقط، بل الخروج بمبادرات قابلة للتنفيذ على أرض الواقع.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((init, i) => (
            <div
              key={i}
              className="card card-hover p-8 group relative overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-4 left-4 font-display text-6xl font-bold text-stone-100 select-none group-hover:text-primary-50 transition-colors duration-500">
                {init.number}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-6 shadow-lg shadow-primary-600/20 group-hover:scale-110 transition-transform duration-300">
                  <init.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-3">
                  {init.title}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {init.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-primary-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>مبادرة قابلة للتنفيذ</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 p-8 flex flex-col justify-center items-center text-center text-white shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <ArrowLeft className="w-7 h-7 text-secondary-400" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">حاضنة مبادرات</h3>
            <p className="text-primary-100 text-sm leading-relaxed mb-5">
              يتم اختيار عدد من المبادرات ومتابعة تنفيذها بعد الفعالية، ويصدر عن الملتقى وثيقة مخرجات وتوصيات عملية.
            </p>
            <button
              onClick={() => document.querySelector('#outputs')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-sm font-medium transition-all duration-300 border border-white/20"
            >
              مخرجات الملتقى
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function LightbulbIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}
