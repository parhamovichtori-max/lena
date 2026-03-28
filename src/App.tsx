import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  Instagram, 
  Send, 
  Menu, 
  X,
  Sparkles,
  Zap,
  Moon,
  Heart,
  User,
  ShieldCheck,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О практиках', href: '#formats' },
    { name: 'Для кого', href: '#for-whom' },
    { name: 'Расписание', href: '#schedule' },
    { name: 'Стоимость', href: '#pricing' },
    { name: 'Отзывы', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-serif font-semibold tracking-tight">
          ТЕЛЕСНЫЕ ПРАКТИКИ
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:opacity-50 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-black/60 max-w-2xl text-lg italic"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Navbar />

      {/* Online Space Section */}
      <section className="section-padding pt-32 pb-16 border-b border-black/5 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                Онлайн‑пространство практик для женщин, которые устали выживать и хотят начать жить
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-black/70 leading-relaxed"
            >
              <p>
                Я собрала здесь свои онлайн‑практики, чтобы помочь тебе выйти из старых сценариев — спасательства, выгорания, бесконечного «надо» — и вернуть себе опору, чувствительность и вкус к жизни.
              </p>
              <p>
                Каждый продукт ниже — это точка входа в изменения: мастер‑классы про деньги, энергию и самосаботаж, личные разборы и расстановки, ежедневные энергопрактики и групповая работа, которые мягко, но конкретно влияют на твою реальность — отношения, тело, деньги и состояние внутри.
              </p>
              <p className="font-serif italic text-black">
                Выбери то, что сильнее всего откликается сейчас: с этого шага начнётся твой выход из выживания в жизнь, где ты опираешься на себя и создаёшь свою реальность, а не живёшь чужими сценариями.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern -z-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 border border-black/10 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6">
              Глубокая перезагрузка за один день
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
              Лёгкость, <br />
              <span className="italic">ясность</span> <br />
              и энергия.
            </h1>
            <p className="text-xl text-black/70 max-w-lg mb-10 leading-relaxed">
              Мои телесные практики — это когда с тела и головы уходит тяжесть, а мы мягко работаем с нервной системой и накопленным стрессом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#schedule" className="px-8 py-4 bg-black text-white rounded-full flex items-center justify-center gap-2 hover:bg-black/80 transition-colors">
                Записаться на практику <ArrowRight size={18} />
              </a>
              <a href="#formats" className="px-8 py-4 border border-black/10 rounded-full flex items-center justify-center gap-2 hover:bg-black/5 transition-colors">
                Узнать форматы
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/5] bg-neutral-100 rounded-3xl overflow-hidden hidden lg:block"
          >
             <div className="absolute inset-0 flex items-center justify-center text-black/10 font-serif text-9xl italic select-none">
               Silence
             </div>
             <img 
               src="https://picsum.photos/seed/calm/800/1000?grayscale" 
               alt="Calm atmosphere" 
               className="w-full h-full object-cover mix-blend-multiply opacity-80"
               referrerPolicy="no-referrer"
             />
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif leading-snug"
          >
            Access Bars®, Facelift и телесные процессы не требуют веры, усилия или «правильности» — вы просто лежите, а тело делает свою работу, когда с него наконец убирают ментальный и эмоциональный мусор.
          </motion.p>
        </div>
      </section>

      {/* Formats Section */}
      <section id="formats" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Форматы практик" 
            subtitle="Через прикосновения к определённым зонам запускаются процессы расслабления и обновления на очень глубоком уровне."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Access Bars®",
                desc: "Мягкая работа с 32 точками на голове. Помогает «выключить» фоновые мысли, снизить тревогу и освободить место для новых выборов.",
                icon: <Sparkles className="mb-4" size={32} strokeWidth={1} />,
                badge: "Популярно"
              },
              {
                title: "Facelift",
                desc: "Энергетический «санаторий» для лица и тела. Работа с возрастными установками, запуск клеточного омоложения и возвращение тонуса.",
                icon: <Zap className="mb-4" size={32} strokeWidth={1} />,
                badge: "Омоложение"
              },
              {
                title: "Телесные процессы",
                desc: "3-часовая точечная работа: прошлые связи, мимикрия, тяжесть чужих ролей и обязательств. Работа с конкретными темами.",
                icon: <Moon className="mb-4" size={32} strokeWidth={1} />,
                badge: "Глубина"
              }
            ].map((format, i) => (
              <motion.div 
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-black/5 rounded-3xl hover:border-black/20 transition-all group"
              >
                <div className="flex justify-between items-start">
                  {format.icon}
                  <span className="text-[10px] uppercase tracking-widest opacity-40">{format.badge}</span>
                </div>
                <h3 className="text-2xl mb-4 group-hover:italic transition-all">{format.title}</h3>
                <p className="text-black/60 leading-relaxed mb-6">{format.desc}</p>
                <div className="h-px w-full bg-black/5 mb-6" />
                <p className="text-xs uppercase tracking-widest opacity-50">Доступно как практика и как обучение</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section id="for-whom" className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-serif mb-8">Для кого это?</h2>
              <div className="space-y-6">
                {[
                  "Для тех, кто устал от тревоги, внутреннего шума и бесконечного анализа в голове.",
                  "Для тех, у кого тело давно сигналит: бессонница, напряжение, головные боли.",
                  "Для тех, кто живёт «на надрыве»: работа, семья, ответственность, а на себя — ни сил.",
                  "Для тех, кто тащит на себе чужие ожидания и устал жить не своей жизнью.",
                  "Для тех, кто хочет мягко запустить омоложение без уколов, через энергию."
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <CheckCircle2 className="shrink-0 mt-1 opacity-50" size={20} />
                    <p className="text-lg opacity-80">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-full flex items-center justify-center p-12 border border-white/10">
                <div className="text-center">
                  <p className="text-3xl font-serif italic mb-4">«Тело — это ваш <br /> самый верный <br /> союзник»</p>
                  <p className="text-xs uppercase tracking-widest opacity-40">Пора его услышать</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="С чем мы работаем" 
            subtitle="Запросы, которые находят решение через телесные сессии."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5">
            {[
              { title: "Хроническая усталость", desc: "Апатия, отсутствие сил и желания что-то хотеть." },
              { title: "Тревожность", desc: "Мысли по кругу, скачки настроения, панические состояния." },
              { title: "Бессонница", desc: "Проблемы с расслаблением, когда мозг не выключается." },
              { title: "Зажимы в теле", desc: "Головные боли, мышечное напряжение, ощущение тяжести." },
              { title: "Тема денег", desc: "Долги, ощущение надрыва, деньги через «надо»." },
              { title: "Отношения", desc: "Прошлые связи, отпечатки бывших партнёров в теле." },
              { title: "Принятие себя", desc: "Возраст, тело, женственность и сексуальность." },
              { title: "Энергия", desc: "Возвращение интереса к жизни и гибкости телу." }
            ].map((issue, i) => (
              <div key={i} className="bg-white p-8 group hover:bg-neutral-50 transition-colors">
                <h4 className="text-xl mb-3 font-serif group-hover:italic transition-all">{issue.title}</h4>
                <p className="text-sm text-black/50 leading-relaxed">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Ближайшие даты" />
          
          <div className="space-y-12">
            {/* Access Bars */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-black/5">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-3xl mb-2">Обучение Access Bars®</h3>
                  <p className="text-black/50">Однодневный интенсив (полный день практики и теории)</p>
                </div>
                <div className="px-4 py-2 bg-black text-white text-xs uppercase tracking-widest rounded-full">
                  Москва
                </div>
              </div>
              <div className="flex items-center gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="opacity-40" />
                  <span>18–19 октября 2025</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-black/10" />
                <div className="flex items-center gap-2">
                  <Clock size={20} className="opacity-40" />
                  <span>Полный день</span>
                </div>
              </div>
            </div>

            {/* Facelift & Body Processes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-black/5 rounded-3xl bg-white">
                <h3 className="text-2xl mb-4">Facelift (энергетический)</h3>
                <p className="text-black/60 mb-6">Однодневное обучение с полной проработкой лица и тела.</p>
                <p className="text-sm italic opacity-50">Даты озвучиваю в личных сообщениях и Telegram.</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold hover:gap-4 transition-all">
                  Запросить расписание <ArrowRight size={16} />
                </a>
              </div>
              <div className="p-8 border border-black/5 rounded-3xl bg-white">
                <h3 className="text-2xl mb-4">Телесные процессы</h3>
                <p className="text-black/60 mb-4">3-часовые тематические классы:</p>
                <ul className="text-sm space-y-2 mb-6 opacity-70">
                  <li>• Прошлые связи с любовниками</li>
                  <li>• «Мимикрия» (чужие жизни и чувства)</li>
                </ul>
                <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold hover:gap-4 transition-all">
                  Узнать даты <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Стоимость участия" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Access Bars®", price: "29 000 ₽", time: "Целый день" },
              { name: "Facelift", price: "38 000 ₽", time: "Целый день" },
              { name: "Телесный процесс", price: "7 000 ₽", time: "3 часа" },
              { name: "Прошлые связи", price: "7 000 ₽", time: "3 часа" }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-black/5 rounded-2xl text-center hover:bg-neutral-50 transition-colors">
                <p className="text-xs uppercase tracking-widest opacity-40 mb-4">{item.time}</p>
                <h4 className="text-xl mb-6 font-serif">{item.name}</h4>
                <p className="text-3xl font-serif mb-8">{item.price}</p>
                <button className="w-full py-3 border border-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                  Выбрать
                </button>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-black/50 max-w-2xl mx-auto text-sm italic">
            Во все форматы входят: практика, теория, ответы на ваши вопросы, поддерживающее пространство и возможность задать «тот самый» личный вопрос.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Опыт людей и результаты" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Стало спокойнее внутри, ушёл фон тревоги, появился вкус к жизни и силы на простые радости — от завтрака до прогулки.",
              "Перестала жить в режиме выживания, появились ресурсы заниматься собой, а не только работой и семьёй.",
              "Ушёл постоянный контроль и напряжение, стало легче дышать, легче отпускать близких и не тащить всех на себе.",
              "Тело стало мягче и живее, ушла часть боли, улучшился сон, а мысли перестали крутиться по ночам.",
              "После работы с телом и мыслями начали приходить новые деньги и возможности, без тотального надрыва и вины.",
              "Появилась возможность чувствовать удовольствие, интерес к отношениям, контакт с телом и своей сексуальностью."
            ].map((quote, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl"
              >
                <p className="text-lg italic leading-relaxed opacity-80">«{quote}»</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif mb-6">Телесные практики</h2>
            <p className="text-black/50 max-w-sm mb-8">
              Мягкая работа с телом и сознанием для тех, кто готов к глубоким переменам через расслабление.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all">
                <Send size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Навигация</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><a href="#formats" className="hover:opacity-100">Форматы</a></li>
              <li><a href="#for-whom" className="hover:opacity-100">Для кого</a></li>
              <li><a href="#schedule" className="hover:opacity-100">Расписание</a></li>
              <li><a href="#pricing" className="hover:opacity-100">Стоимость</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Контакты</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li>Москва / Онлайн</li>
              <li>Telegram: @body_practices</li>
              <li>WhatsApp: +7 (999) 000-00-00</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-30">
          <p>© 2025 Телесные практики. Все права защищены.</p>
          <p>Дизайн: Черно-белый прототип</p>
        </div>
      </footer>
    </div>
  );
}
