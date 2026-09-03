import { FileText, ArrowLeft, CheckCircle2, CalendarCheck2 } from 'lucide-react';

const outputs = [
  { title: 'وثيقة السياسات والتوصيات المعتمدة', description: 'مرجعية مؤسسية توحّد اتجاهات التعافي الاقتصادي.' },
  { title: 'مصفوفة الأولويات والقرارات التنفيذية', description: 'ترتيب التدخلات وفق الأهمية والجاهزية والأثر.' },
  { title: 'محفظة المبادرات والمشروعات', description: 'مسارات عملية قابلة للتطوير والتنفيذ والشراكة.' },
  { title: 'إطار الشراكات والتمويل المؤسسي', description: 'ربط المبادرات بالجهات الداعمة والأدوات التمويلية المناسبة.' },
  { title: 'منظومة الحوكمة والمتابعة', description: 'آلية واضحة للمسؤوليات والمتابعة وقياس النتائج.' },
  { title: 'برنامج العمل لما بعد الملتقى', description: 'مسار زمني يحافظ على الزخم وينقل المخرجات إلى التنفيذ.' },
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
            مخرجات مؤسسية تنقل الحوار من منصة الملتقى إلى مسارات القرار والتنفيذ والمتابعة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Initiatives followed up */}
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary-400" />
              المخرجات المؤسسية المستهدفة
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
                  <div>
                    <div className="text-white font-semibold group-hover:text-secondary-300 transition-colors">{item.title}</div>
                    <div className="text-primary-100/65 text-xs mt-1 leading-relaxed">{item.description}</div>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-primary-400 mr-auto group-hover:text-secondary-400 group-hover:-translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Document structure */}
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-secondary-400" />
              الوثيقة الختامية للملتقى
            </h3>
            <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 min-h-[25rem] flex flex-col justify-center">
              <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-secondary-400/10 blur-3xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-secondary-500/15 border border-secondary-400/20 flex items-center justify-center mb-7">
                  <CalendarCheck2 className="w-8 h-8 text-secondary-300" />
                </div>
                <h4 className="font-display text-2xl font-bold text-white mb-4">وثيقة تُبنى على نتائج الحوار</h4>
                <p className="text-primary-100 text-base leading-loose">
                  تُصاغ الوثيقة الختامية عقب اكتمال جلسات الملتقى ومداولاته، بما يعكس ما تنتهي إليه
                  الأوراق والنقاشات والتوافقات المؤسسية، ثم تُراجع وتُنشر بوصفها المرجعية الرسمية
                  لمخرجات الملتقى ومسارات العمل اللاحقة.
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-secondary-200">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-semibold">يتم نشر الوثيقة عقب جلسات الملتقى</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
