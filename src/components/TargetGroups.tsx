import { Landmark, Briefcase, Users, UsersRound, Banknote, GraduationCap } from 'lucide-react';

const groups = [
  {
    icon: Landmark,
    title: 'الجهات الحكومية',
    description: 'الوزارات والجهات الاقتصادية والخدمية ذات الصلة.',
    color: 'primary',
  },
  {
    icon: Briefcase,
    title: 'القطاع الخاص',
    description: 'أصحاب الأعمال والشركات والمنتجون والمستثمرون.',
    color: 'accent',
  },
  {
    icon: Users,
    title: 'النقابات والاتحادات المهنية',
    description: 'العمال، الأطباء، الصيادلة، المهندسون، المحامون، المعلمون وغيرهم.',
    color: 'secondary',
  },
  {
    icon: UsersRound,
    title: 'الفئات المجتمعية',
    description: 'المرأة، الشباب، الطلاب، المنتجون وأصحاب المشروعات الصغيرة.',
    color: 'primary',
  },
  {
    icon: Banknote,
    title: 'المؤسسات المالية',
    description: 'المصارف ومؤسسات التمويل.',
    color: 'accent',
  },
  {
    icon: GraduationCap,
    title: 'الجامعات ومراكز البحوث',
    description: 'للدراسات والمتابعة وقياس الأثر.',
    color: 'secondary',
  },
];

const colorMap: Record<string, { bg: string; text: string; hoverBg: string; border: string }> = {
  primary: { bg: 'bg-primary-50', text: 'text-primary-600', hoverBg: 'group-hover:bg-primary-600', border: 'hover:border-primary-300' },
  secondary: { bg: 'bg-secondary-50', text: 'text-secondary-600', hoverBg: 'group-hover:bg-secondary-500', border: 'hover:border-secondary-300' },
  accent: { bg: 'bg-accent-50', text: 'text-accent-600', hoverBg: 'group-hover:bg-accent-600', border: 'hover:border-accent-300' },
};

export default function TargetGroups() {
  return (
    <section id="audience" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-30" />
      <div className="container-x relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            الجهات المستهدفة
          </div>
          <h2 className="section-title">الجهات والفئات المستهدفة</h2>
          <p className="section-subtitle">
            يهدف الملتقى إلى جمع كافة الجهات الفاعلة في المشهد الاقتصادي حول طاولة واحدة.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, i) => {
            const c = colorMap[group.color];
            return (
              <div
                key={i}
                className={`card card-hover p-8 group border ${c.border}`}
              >
                <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.hoverBg} flex items-center justify-center mb-5 transition-colors duration-300`}>
                  <group.icon className={`w-7 h-7 ${c.text} group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-3">
                  {group.title}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {group.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
