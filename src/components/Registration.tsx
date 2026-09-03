import { useState, type FormEvent } from 'react';
import { supabase, type RegistrationInput } from '@/lib/supabase';
import { User, Mail, Phone, Building2, Briefcase, Send, CheckCircle2, AlertCircle, FileText, MessageSquare } from 'lucide-react';

const categories = [
  { value: 'government', label: 'جهة حكومية' },
  { value: 'private_sector', label: 'قطاع خاص' },
  { value: 'unions', label: 'نقابة / اتحاد مهني' },
  { value: 'community', label: 'فئة مجتمعية' },
  { value: 'financial', label: 'مؤسسة مالية' },
  { value: 'academic', label: 'جامعة / مركز بحوث' },
];

const interestAreas = [
  'الأسواق المخفضة',
  'التشغيل والحاضنات',
  'التمويل',
  'الطاقة الشمسية',
  'دعم الإنتاج المحلي',
  'الشراء الجماعي',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Registration() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [willPresent, setWillPresent] = useState(false);

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const input: RegistrationInput = {
      name: (formData.get('name') as string).trim(),
      email: (formData.get('email') as string).trim(),
      phone: (formData.get('phone') as string).trim(),
      organization: (formData.get('organization') as string).trim(),
      role: (formData.get('role') as string).trim(),
      category: (formData.get('category') as string) || 'community',
      interest_areas: selectedAreas,
      will_present_paper: willPresent,
      paper_title: (formData.get('paper_title') as string) || '',
      message: (formData.get('message') as string) || '',
    };

    if (!input.name || !input.email || !input.phone || !input.organization) {
      setStatus('error');
      setErrorMsg('يرجى ملء جميع الحقول المطلوبة.');
      return;
    }

    const { error } = await supabase.from('registrations').insert({
      name: input.name,
      email: input.email,
      phone: input.phone,
      organization: input.organization,
      role: input.role || null,
      category: input.category,
      interest_areas: input.interest_areas,
      will_present_paper: input.will_present_paper,
      paper_title: willPresent && input.paper_title ? input.paper_title : null,
      message: input.message || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
      return;
    }

    setStatus('success');
    e.currentTarget.reset();
    setSelectedAreas([]);
    setWillPresent(false);
  };

  if (status === 'success') {
    return (
      <section id="register" className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="container-x relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-success-100 flex items-center justify-center mb-6 animate-scale-in">
              <CheckCircle2 className="w-10 h-10 text-success-600" />
            </div>
            <h2 className="font-display text-3xl font-bold text-primary-900 mb-4">
              تم تسجيلك بنجاح
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              شكرًا لتسجيلك في ملتقى الخرطوم للتعافي الاقتصادي.
              <br />
              سيتم التواصل معك قريبًا بتفاصيل الملتقى.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn-secondary"
            >
              تسجيل مشارك آخر
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-40" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary-100/40 rounded-full blur-3xl" />

      <div className="container-x relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            <Send className="w-4 h-4" />
            التسجيل
          </div>
          <h2 className="section-title">سجّل في الملتقى</h2>
          <p className="section-subtitle">
            انضمّ إلينا في ملتقى الخرطوم للتعافي الاقتصادي. سجل بياناتك وسيتم التواصل معك بتفاصيل الملتقى.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card p-8 sm:p-10 space-y-6">
            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-error-50 border border-error-200 text-error-700 animate-fade-in">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{errorMsg}</span>
              </div>
            )}

            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField icon={User} label="الاسم الكامل" name="name" required placeholder="مثال: محمد أحمد" />
              <FormField icon={Mail} label="البريد الإلكتروني" name="email" type="email" required placeholder="name@example.com" />
            </div>

            {/* Phone & Organization */}
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField icon={Phone} label="رقم الهاتف" name="phone" required placeholder="09xxxxxxxx" />
              <FormField icon={Building2} label="الجهة / المؤسسة" name="organization" required placeholder="اسم المؤسسة" />
            </div>

            {/* Role & Category */}
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField icon={Briefcase} label="المسمى الوظيفي" name="role" placeholder="مثال: مدير عام" />
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">الفئة المستهدفة</label>
                <div className="relative">
                  <select
                    name="category"
                    className="w-full appearance-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 pl-12 text-sm font-medium text-stone-700 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all cursor-pointer"
                    defaultValue="community"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                  <svg className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Interest areas */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-3">مجالات الاهتمام (اختياري)</label>
              <div className="flex flex-wrap gap-2">
                {interestAreas.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => toggleArea(area)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                      selectedAreas.includes(area)
                        ? 'bg-primary-600 text-white border-2 border-primary-600'
                        : 'bg-stone-50 text-stone-600 border-2 border-stone-200 hover:border-primary-300'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Paper presentation */}
            <div className="rounded-xl border border-stone-200 p-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <button
                  type="button"
                  onClick={() => setWillPresent(!willPresent)}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                    willPresent ? 'bg-primary-600 border-2 border-primary-600' : 'bg-white border-2 border-stone-300'
                  }`}
                >
                  {willPresent && <CheckCircle2 className="w-4 h-4 text-white" />}
                </button>
                <span className="text-sm font-medium text-stone-700">أرغب في تقديم ورقة في الملتقى</span>
                <FileText className="w-4 h-4 text-stone-400 mr-auto" />
              </label>
              {willPresent && (
                <div className="mt-4 animate-fade-in">
                  <FormField icon={FileText} label="عنوان الورقة" name="paper_title" placeholder="عنوان الورقة المقترحة" />
                </div>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">رسالة إضافية (اختياري)</label>
              <div className="relative">
                <textarea
                  name="message"
                  rows={3}
                  placeholder="أي ملاحظات أو استفسارات إضافية..."
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  جاري التسجيل...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  إرسال التسجيل
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function FormField({ icon: Icon, label, name, type = 'text', required, placeholder }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-stone-700 mb-2">
        {label} {required && <span className="text-error-500">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-xl border border-stone-200 bg-stone-50 pr-11 px-4 py-3 text-sm text-stone-700 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
        />
      </div>
    </div>
  );
}
