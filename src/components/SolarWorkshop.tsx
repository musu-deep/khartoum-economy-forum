import { Sun, DollarSign, Home, Building, Users, MapPin, Factory, Zap, ShieldCheck, Wrench } from 'lucide-react';

const solarImage = 'https://images.pexels.com/photos/9893731/pexels-photo-9893731.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop';

const topics = [
  { icon: DollarSign, title: 'تخفيض تكلفة الطاقة على المواطن' },
  { icon: Home, title: 'تمليك الأسر والمؤسسات منظومات الطاقة' },
  { icon: Coins, title: 'التمويل الميسر' },
  { icon: ShieldCheck, title: 'الإعفاءات والتسهيلات الجمركية والضريبية' },
  { icon: Building, title: 'دور القطاع الخاص' },
  { icon: Factory, title: 'توطين صناعة وخدمات الطاقة الشمسية' },
  { icon: Wrench, title: 'تدريب الشباب وخلق فرص عمل في القطاع' },
  { icon: MapPin, title: 'التوسع في الولايات' },
  { icon: Zap, title: 'ربط الطاقة بالمشروعات الصغيرة والإنتاج' },
];

function Coins(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function SolarWorkshop() {
  return (
    <section id="solar" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="container-x relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-50 text-secondary-700 text-sm font-medium mb-4">
            <Sun className="w-4 h-4" />
            ورشة تطبيقية رئيسية
          </div>
          <h2 className="section-title">ورشة الطاقة الشمسية</h2>
          <p className="section-subtitle">
            «ورشة الطاقة الشمسية وآفاق التوسع في تمليك المواطنين والمؤسسات حلول الطاقة»
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={solarImage}
                alt="الطاقة الشمسية"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6 left-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-500 text-white text-sm font-medium mb-3">
                  <Sun className="w-4 h-4" />
                  محور تطبيقي رئيسي
                </div>
                <p className="text-white font-display text-lg font-bold leading-snug">
                  حلول الطاقة الشمسية للأسر والمؤسسات والمشروعات
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-400/30 rounded-2xl blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400/20 rounded-2xl blur-2xl" />
          </div>

          {/* Topics side */}
          <div>
            <p className="text-stone-600 leading-relaxed mb-8">
              تهدف الورشة إلى مناقشة آفاق التوسع في تمليك المواطنين والمؤسسات حلول الطاقة،
              وتغطي المحاور التالية:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {topics.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-stone-200/60 hover:border-secondary-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-500 transition-colors duration-300">
                    <topic.icon className="w-5 h-5 text-secondary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-stone-700 group-hover:text-primary-900 transition-colors">
                    {topic.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
