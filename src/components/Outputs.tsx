import { FileText, ArrowLeft, CheckCircle2 } from 'lucide-react';

const outputs = [
  'الأسواق المخفضة',
  'التشغيل',
  'الحاضنات',
  'التمويل',
  'الطاقة الشمسية',
  'دعم الإنتاج المحلي',
];

const documentSteps = [
  { label: 'المشكلة', color: 'bg-error-500' },
  { label: 'الحل', color: 'bg-primary-500' },
  { label: 'الجهة المسؤولة', color: 'bg-accent-500' },
  { label: 'الشركاء', color: 'bg-secondary-500' },
  { label: 'آلية التمويل', color: 'bg-primary-600' },
  { label: 'الخطوة التالية', color: 'bg-accent-600' },
];

export default function Outputs() {
  return (
    <section id="outputs" className="py-24 bg-gradient-to-b from-primary-900 to-primary-950 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

      <div className="container-x relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-secondary-300 text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            المخرجات
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            مخرجات الملتقى
          </h2>
          <p className="text-lg text-primary-100 leading-relaxed mt-4 max-w-2xl mx-auto">
            استثمار الملتقى لإطلاق مسارات عمل مستمرة: «من الملتقى إلى المبادرة»
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Initiatives followed up */}
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary-400" />
              المبادرات المتابعة للتنفيذ
            </h3>
            <div className="space-y-3">
              {outputs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-secondary-400/30 transition-all duration-300 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-secondary-500/20 flex items-center justify-center text-secondary-300 font-bold text-sm flex-shrink-0">
                    {['١', '٢', '٣', '٤', '٥', '٦'][i]}
                  </span>
                  <span className="text-white font-medium group-hover:text-secondary-300 transition-colors">
                    {item}
                  </span>
                  <ArrowLeft className="w-4 h-4 text-primary-400 mr-auto group-hover:text-secondary-400 group-hover:-translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Document structure */}
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-secondary-400" />
              وثيقة المخرجات والتوصيات العملية
            </h3>
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
              <p className="text-primary-100 text-sm leading-relaxed mb-6">
                يصدر عن الملتقى وثيقة تتضمن لكل توصية المسار التالي:
              </p>
              <div className="space-y-3">
                {documentSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${step.color} flex-shrink-0`} />
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-white/90 text-sm font-medium">{step.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-secondary-500/10 to-primary-500/10 border border-secondary-400/20">
                <p className="text-secondary-200 text-sm font-medium text-center">
                  مسار متكامل من المشكلة إلى الخطوة التالية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
