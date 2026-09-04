import { Building2, Landmark, Factory, Banknote, Users, Package } from 'lucide-react';

const papers = [
  {
    icon: Package,
    category: 'القطاع الخاص - غرفة المستوردين',
    title: 'استيراد الطاقة الشمسية ومدخلات الإنتاج',
    description: 'استيراد الطاقة الشمسية ومدخلات الإنتاج، بالإضافة إلى مدخلات إنتاج صناعة المياه.',
    color: 'accent',
  },
  {
    icon: Factory,
    category: 'القطاع الخاص - الغرفة الصناعية',
    title: 'توطين صناعة الطاقة الشمسية وحلول المياه',
    description: 'توطين صناعة الطاقة الشمسية، وتطوير حلول المياه محليًا.',
    color: 'primary',
  },
  {
    icon: Landmark,
    category: 'القطاع العام - وزارة المالية',
    title: 'السياسات المالية والضريبية',
    description: 'السياسات المالية والضريبية اللازمة لدعم التعافي الاقتصادي وتخفيف الأعباء.',
    color: 'secondary',
  },
  {
    icon: Building2,
    category: 'القطاع العام - وزارة التجارة والصناعة',
    title: 'السياسات اللازمة لتسهيل الاستيراد',
    description: 'السياسات اللازمة لتسهيل استيراد الطاقة الشمسية ومدخلات الإنتاج.',
    color: 'accent',
  },
  {
    icon: Package,
    category: 'القطاع العام - الجمارك',
    title: 'السياسات الجمركية لخفض التعرفة',
    description: 'السياسات الجمركية المتبعة لخفض التعرفة الجمركية على المدخلات الإنتاجية الأساسية.',
    color: 'primary',
  },
  {
    icon: Banknote,
    category: 'القطاع العام - بنك السودان',
    title: 'السياسات التمويلية والائتمانية',
    description: 'السياسات التمويلية والائتمانية تجاه المنتجين والمستهلك.',
    color: 'secondary',
  },
  {
    icon: Users,
    category: 'القطاع العام - اتحاد العمال',
    title: 'دور النقابات والاتحادات المهنية',
    description: 'دور النقابات والاتحادات المهنية في التعافي الاقتصادي وحماية العمال.',
    color: 'accent',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; hoverBg: string }> = {
  primary: { bg: 'bg-primary-100', text: 'text-primary-600', border: 'border-primary-200', hoverBg: 'group-hover:bg-primary-600' },
  secondary: { bg: 'bg-secondary-100', text: 'text-secondary-600', border: 'border-secondary-200', hoverBg: 'group-hover:bg-secondary-500' },
  accent: { bg: 'bg-accent-100', text: 'text-accent-600', border: 'border-accent-200', hoverBg: 'group-hover:bg-accent-600' },
};

export default function Papers() {
  return (
    <section id="papers" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-50" />
      <div className="container-x relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-4">
            <FileText />
            الأوراق المقدمة
          </div>
          <h2 className="section-title">أوراق الملتقى</h2>
          <p className="section-subtitle">
            أوراق مقدّمة من القطاعين العام والخاص تغطي محاور التعافي الاقتصادي والسياسات اللازمة.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((paper, i) => {
            const c = colorMap[paper.color];
            return (
              <div
                key={i}
                className={`card card-hover p-6 group border ${c.border}`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.hoverBg} flex items-center justify-center mb-5 transition-colors duration-300`}>
                  <paper.icon className={`w-6 h-6 ${c.text} group-hover:text-white transition-colors duration-300`} />
                </div>
                <div className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">
                  {paper.category}
                </div>
                <h3 className="font-display text-lg font-bold text-primary-900 mb-3 leading-snug">
                  {paper.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {paper.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FileText() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
