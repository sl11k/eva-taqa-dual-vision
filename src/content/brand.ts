import type { Lang } from "@/content/site";

/**
 * Brand-book blocks (Corporate Brand Book 2026): "Engineering Confidence".
 * Navy foundation + orange accent, uppercase display typography, numbered systems.
 */

export type BrandDict = {
  signature: string;
  signatureSub: string;
  confidence: { lines: string[]; body: string; stat: string; statLabel: string; statNote: string };
  why: { kicker: string; title: string[]; body: string; quote: string; quoteHighlight: string };
  numbers: { kicker: string; title: string; items: { value: string; label: string }[] };
  industries: { kicker: string; title: string; items: string[] };
  process: { kicker: string; title: string; body: string; steps: { num: string; title: string; desc: string }[] };
  values: { kicker: string; title: string; items: { title: string; desc: string }[] };
  partners: { kicker: string; title: string; body: string; items: string[] };
  hse: { kicker: string; title: string; body: string; items: string[] };
  vision2030: { kicker: string; title: string; body: string; items: string[] };
  commitment: { line1: string; line2: string; line3: string };
};

const brandEn: BrandDict = {
  signature: "ENGINEERING CONFIDENCE",
  signatureSub: "Integrated engineering solutions. Engineered for performance. Delivered with confidence.",
  confidence: {
    lines: ["WE DON'T BUILD POWER.", "WE BUILD CONFIDENCE."],
    body: "At EVA TAQA, we engineer mission-critical systems that perform when it matters most. Every solution. Every time.",
    stat: "99.9%",
    statLabel: "RELIABILITY",
    statNote: "Reliability is never accidental.",
  },
  why: {
    kicker: "Why we exist",
    title: ["EVERY RELIABLE SYSTEM", "BEGINS WITH ONE ENGINEER."],
    body: "We exist to empower organizations with reliable, efficient and sustainable engineering solutions that drive progress and protect what matters. Our people are the foundation of every solution we deliver.",
    quote: "The cost of failure is always higher than the cost of ",
    quoteHighlight: "engineering.",
  },
  numbers: {
    kicker: "By the numbers",
    title: "PROVEN AT SCALE",
    items: [
      { value: "15+", label: "Years of experience" },
      { value: "300+", label: "Projects delivered" },
      { value: "150+", label: "Engineers & specialists" },
      { value: "6+", label: "Countries of operation" },
      { value: "98%", label: "Client satisfaction" },
      { value: "24/7", label: "Service support" },
    ],
  },
  industries: {
    kicker: "Industries we serve",
    title: "ONE ECOSYSTEM. EVERY SECTOR.",
    items: [
      "Oil & Gas",
      "Power & Utilities",
      "Industrial",
      "Transportation",
      "Healthcare",
      "Government",
      "Commercial",
      "Water & Wastewater",
      "Renewables",
      "Data Centers",
      "Defense & Security",
      "Mission-Critical Facilities",
    ],
  },
  process: {
    kicker: "Engineering process",
    title: "OUR STRUCTURED PROCESS ASSURES QUALITY",
    body: "From concept to commissioning — a disciplined sequence that removes surprises and protects schedule, budget and safety.",
    steps: [
      { num: "01", title: "Consult", desc: "Understanding your needs" },
      { num: "02", title: "Design", desc: "Engineering with precision" },
      { num: "03", title: "Develop", desc: "Planning & simulation" },
      { num: "04", title: "Implement", desc: "Execution with quality" },
      { num: "05", title: "Commission", desc: "Testing & handover" },
      { num: "06", title: "Support", desc: "24/7 lifecycle support" },
    ],
  },
  values: {
    kicker: "Core values",
    title: "WHAT WE STAND ON",
    items: [
      { title: "Integrity", desc: "We do the right thing, always." },
      { title: "Excellence", desc: "We commit to the highest standards in everything we deliver." },
      { title: "Innovation", desc: "We embrace change and create real value." },
      { title: "Collaboration", desc: "We believe in teamwork and respect." },
      { title: "Safety", desc: "We protect people and the environment." },
      { title: "Sustainability", desc: "We engineer for a longer horizon." },
    ],
  },
  partners: {
    kicker: "Global partners",
    title: "TECHNOLOGY WE TRUST",
    body: "We build on equipment and platforms from world-class manufacturers, integrated by our own engineering teams.",
    items: ["ABB", "SCHNEIDER ELECTRIC", "EATON", "CUMMINS", "ComAp", "LIXISE", "RIM IMPIANTI", "FISCHER PANDA", "TEKOM"],
  },
  hse: {
    kicker: "Health, safety & environment",
    title: "SAFETY IS OUR PRIORITY",
    body: "We are committed to protecting people, assets and the environment on every site we enter.",
    items: ["Zero-harm culture", "Risk management", "Environmental protection", "Compliance & training", "ISO 9001:2015", "Strict quality control"],
  },
  vision2030: {
    kicker: "Vision 2030",
    title: "TOGETHER FOR A STRONGER TOMORROW",
    body: "Our work supports the Kingdom's transition to a diversified, sustainable and resilient energy future.",
    items: ["Localization of engineering capability", "Renewable energy integration", "National infrastructure resilience", "Saudi engineering talent development"],
  },
  commitment: {
    line1: "THIS IS WHO WE ARE.",
    line2: "THIS IS WHAT WE DO.",
    line3: "THIS IS OUR COMMITMENT TO YOUR SUCCESS.",
  },
};

const brandAr: BrandDict = {
  signature: "ثقة هندسية",
  signatureSub: "حلول هندسية متكاملة. مصممة للأداء. تُنفَّذ بثقة.",
  confidence: {
    lines: ["نحن لا نبني الطاقة فقط.", "نحن نبني الثقة."],
    body: "في ايفا طاقة نهندس أنظمة حيوية تعمل بكفاءة في أصعب الظروف. في كل حل، وفي كل مرة.",
    stat: "99.9%",
    statLabel: "موثوقية",
    statNote: "الموثوقية لا تأتي بالصدفة.",
  },
  why: {
    kicker: "لماذا نحن",
    title: ["كل نظام موثوق", "يبدأ بمهندس واحد."],
    body: "نعمل على تمكين المؤسسات بحلول هندسية موثوقة وفعّالة ومستدامة تدفع التقدم وتحمي ما هو مهم. فريقنا هو الأساس في كل حل نقدّمه.",
    quote: "تكلفة الفشل دائماً أعلى من تكلفة ",
    quoteHighlight: "الهندسة.",
  },
  numbers: {
    kicker: "بالأرقام",
    title: "خبرة مثبتة على نطاق واسع",
    items: [
      { value: "+15", label: "سنة خبرة" },
      { value: "+300", label: "مشروع منجز" },
      { value: "+150", label: "مهندس ومتخصص" },
      { value: "+6", label: "دول عمل" },
      { value: "98%", label: "رضا العملاء" },
      { value: "24/7", label: "دعم وخدمة" },
    ],
  },
  industries: {
    kicker: "القطاعات التي نخدمها",
    title: "منظومة واحدة. كل القطاعات.",
    items: [
      "النفط والغاز",
      "الطاقة والمرافق",
      "الصناعة",
      "النقل",
      "الرعاية الصحية",
      "الجهات الحكومية",
      "القطاع التجاري",
      "المياه والصرف",
      "الطاقة المتجددة",
      "مراكز البيانات",
      "الدفاع والأمن",
      "المرافق الحيوية",
    ],
  },
  process: {
    kicker: "منهجية العمل",
    title: "منظومة عمل منظمة تضمن الجودة",
    body: "من الفكرة حتى التشغيل — تسلسل هندسي منظم يحمي الجدول الزمني والميزانية والسلامة.",
    steps: [
      { num: "01", title: "الاستشارة", desc: "فهم احتياجك بدقة" },
      { num: "02", title: "التصميم", desc: "هندسة بدقة عالية" },
      { num: "03", title: "التطوير", desc: "التخطيط والمحاكاة" },
      { num: "04", title: "التنفيذ", desc: "تنفيذ بجودة عالية" },
      { num: "05", title: "التشغيل", desc: "الاختبار والتسليم" },
      { num: "06", title: "الدعم", desc: "دعم على مدار الساعة" },
    ],
  },
  values: {
    kicker: "قيمنا",
    title: "ما نقوم عليه",
    items: [
      { title: "النزاهة", desc: "نفعل الصواب دائماً." },
      { title: "التميّز", desc: "نلتزم بأعلى المعايير في كل ما نقدمه." },
      { title: "الابتكار", desc: "نتبنى التغيير ونصنع قيمة حقيقية." },
      { title: "التعاون", desc: "نؤمن بالعمل الجماعي والاحترام." },
      { title: "السلامة", desc: "نحمي الإنسان والبيئة." },
      { title: "الاستدامة", desc: "نهندس لآفاق أطول." },
    ],
  },
  partners: {
    kicker: "شركاؤنا العالميون",
    title: "تقنيات نثق بها",
    body: "نبني حلولنا على معدات ومنصات من كبرى الشركات العالمية، بتكامل هندسي من فرقنا.",
    items: ["ABB", "SCHNEIDER ELECTRIC", "EATON", "CUMMINS", "ComAp", "LIXISE", "RIM IMPIANTI", "FISCHER PANDA", "TEKOM"],
  },
  hse: {
    kicker: "الصحة والسلامة والبيئة",
    title: "السلامة أولويتنا",
    body: "نلتزم بحماية الإنسان والأصول والبيئة في كل موقع نعمل به.",
    items: ["ثقافة صفر إصابات", "إدارة المخاطر", "حماية البيئة", "الالتزام والتدريب", "شهادة ISO 9001:2015", "رقابة جودة صارمة"],
  },
  vision2030: {
    kicker: "رؤية 2030",
    title: "معاً نحو غدٍ أقوى",
    body: "أعمالنا تدعم تحول المملكة نحو منظومة طاقة متنوعة ومستدامة وأكثر مرونة.",
    items: ["توطين القدرات الهندسية", "دمج الطاقة المتجددة", "مرونة البنية التحتية الوطنية", "تطوير الكوادر السعودية"],
  },
  commitment: {
    line1: "هذه هويتنا.",
    line2: "وهذا ما نقوم به.",
    line3: "وهذا التزامنا تجاه نجاحك.",
  },
};

export const brandFor = (lang: Lang): BrandDict => (lang === "ar" ? brandAr : brandEn);
