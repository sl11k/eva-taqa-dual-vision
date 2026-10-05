export type Lang = "en" | "ar";

export const LANGS: Lang[] = ["en", "ar"];
export const isLang = (v: string): v is Lang => v === "en" || v === "ar";

export type ServiceSlug =
  | "power-transmission"
  | "distribution-substations"
  | "electrical-installations"
  | "power-plants"
  | "solar-renewable"
  | "control-panels-hvac"
  | "power-conversion";

export const SERVICE_SLUGS: ServiceSlug[] = [
  "power-transmission",
  "distribution-substations",
  "electrical-installations",
  "power-plants",
  "solar-renewable",
  "control-panels-hvac",
  "power-conversion",
];

type Service = { num: string; title: string; desc: string; points: string[] };

export type Dict = {
  dir: "ltr" | "rtl";
  brand: string;
  langName: string;
  otherLangLabel: string;
  nav: { home: string; about: string; services: string; projects: string; contact: string };
  cta: string;
  meta: Record<string, { title: string; description: string }>;
  hero: {
    eyebrow: string;
    headline: string[];
    desc: string;
    tagline: string;
    primary: string;
    secondary: string;
    tertiary: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string[];
    cta: string;
    pillars: { title: string; desc: string }[];
  };
  vmso: { key: string; label: string; heading: string; body?: string; items?: string[] }[];
  services: {
    title: string;
    kicker: string;
    items: Record<ServiceSlug, Service>;
    detailCta: string;
    back: string;
  };
  projects: {
    title: string;
    kicker: string;
    note: string;
    intro: string;
    majorTitle: string;
    majorNote: string;
    tableHeaders: { num: string; project: string; location: string };
    rows: { name: string; location: string; military?: boolean }[];
    cta: { title: string; body: string; primary: string; secondary: string };
  };
  ceo: { kicker: string; title: string; role: string; body: string[] };
  reliability: { title: string[]; body: string };
  ctaBlock: { title: string; body: string; primary: string; secondary: string };
  contact: {
    title: string;
    kicker: string;
    form: {
      name: string;
      company: string;
      email: string;
      phone: string;
      projectType: string;
      message: string;
      submit: string;
      success: string;
    };
    infoLabels: { email: string; phone: string; address: string };
    address: string[];
  };
  footer: {
    statement: string;
    blurb: string;
    companyCol: string;
    contactCol: string;
    location: string;
    rights: string;
  };
};

const email = "sales@evataqa.com";
const phone = "+966 544967553";

export const en: Dict = {
  dir: "ltr",
  brand: "EVA TAQA",
  langName: "English",
  otherLangLabel: "العربية",
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    projects: "Projects",
    contact: "Contact Us",
  },
  cta: "Request a Proposal",
  meta: {
    home: {
      title: "EVA TAQA — Reliable Power & Energy Solutions in Saudi Arabia",
      description:
        "EVA TAQA designs, delivers, commissions and maintains high-performance electrical power systems for critical infrastructure across Saudi Arabia.",
    },
    about: {
      title: "About EVA TAQA — Power Engineering in Saudi Arabia",
      description:
        "Who we are: vision, mission, strategy and objectives of EVA TAQA, a provider of modern electrical power solutions for Saudi infrastructure.",
    },
    services: {
      title: "Core Services — Transmission, Substations & Solar | EVA TAQA",
      description:
        "Power lines and transmission, distribution networks and substations, full electrical installations, power plants, solar energy, control panels and HVAC.",
    },
    projects: {
      title: "Completed Projects — EVA TAQA",
      description:
        "Selected completed projects delivered by EVA TAQA, including the Riyadh Metro Project, Saudi Telecom Company and the Electronic University.",
    },
    contact: {
      title: "Contact EVA TAQA — Let's Power Your Next Project",
      description:
        "Talk to the EVA TAQA engineering team in Riyadh about power systems for your project or facility. sales@evataqa.com · +966 544967553.",
    },
  },
  hero: {
    eyebrow: "EVA TAQA — POWER & ENERGY SOLUTIONS",
    headline: ["Reliable Power.", "Engineered for the Future."],
    desc: "We design, deliver, commission, and maintain high-performance electrical power systems for Saudi Arabia's most critical infrastructure.",
    tagline: "نطمح بأن نكون الأولى في الشرق الأوسط",
    primary: "Explore Services",
    secondary: "Request a Proposal",
    tertiary: "View Our Projects →",
  },
  about: {
    kicker: "Who We Are",
    title: "Modern power solutions for Saudi infrastructure",
    body: [
      "EVA TAQA is a leading provider of modern power electrical solutions for infrastructure in Saudi Arabia. We support our clients from study and design to installation, commissioning, operation, and maintenance.",
      "Our goal is to deliver the most reliable and economical electrical solutions — with financing models that fit the project.",
    ],
    cta: "Discover EVA TAQA",
    pillars: [
      {
        title: "Study & Design",
        desc: "Load studies, technical design and value engineering before a single cable is pulled.",
      },
      {
        title: "Execution & Commissioning",
        desc: "Installation, testing and commissioning under strict quality discipline.",
      },
      {
        title: "Operation & Maintenance",
        desc: "Lifecycle support that keeps critical assets available and safe.",
      },
      {
        title: "Flexible Financing",
        desc: "Innovative and diversified financing models matched to project scale.",
      },
    ],
  },
  vmso: [
    {
      key: "vision",
      label: "01",
      heading: "Vision",
      body: "To be the first company in the Middle East in providing our customers with the most efficient electrical power with high reliability, through innovative and diversified solutions.",
    },
    {
      key: "mission",
      label: "02",
      heading: "Mission",
      items: [
        "Develop complementary solutions for customers of different project sizes.",
        "Support customers from study preparation to full operation and maintenance.",
        "Help customers choose the best technical and economical option.",
        "Offer multiple innovative financing methods.",
      ],
    },
    {
      key: "strategy",
      label: "03",
      heading: "Strategy",
      body: "Generate electric power across different regions of the Kingdom using traditional and renewable sources, and supply that energy to the Saudi Electricity Company or other licensed authorities.",
    },
    {
      key: "objectives",
      label: "04",
      heading: "Objectives",
      items: [
        "Obtain the largest share of the power generation market in Saudi Arabia.",
        "Search for fruitful opportunities in the Gulf and Arab markets.",
        "Align with international leaders in power generation technology.",
        "Participate in projects inside and outside the Kingdom.",
        "Develop local industrial facilities for electrical products in Saudi Arabia.",
      ],
    },
  ],
  services: {
    kicker: "Capabilities",
    title: "Our Core Services",
    detailCta: "Service details",
    back: "All services",
    items: {
      "power-transmission": {
        num: "01",
        title: "Power Lines & Transmission",
        desc: "Design and execution of power lines and electrical transmission networks in and out of cities.",
        points: [
          "Overhead line and underground cable routes",
          "Transmission network design and execution",
          "Intercity and intracity power corridors",
        ],
      },
      "distribution-substations": {
        num: "02",
        title: "Distribution Networks & Substations",
        desc: "Building distribution centers, load distribution, voltage breakers, and urban MV/HV stations.",
        points: [
          "Distribution centres and load distribution",
          "Voltage breakers and protection",
          "MV/HV stations inside cities",
        ],
      },
      "electrical-installations": {
        num: "03",
        title: "Full Electrical Installations",
        desc: "Internal & external building installations: electrical, mechanical, electronic, lighting & façades.",
        points: [
          "Electrical and mechanical building systems",
          "Electronic and low-current systems",
          "Interior lighting and façade lighting",
        ],
      },
      "power-plants": {
        num: "04",
        title: "Power Plants & Commissioning",
        desc: "Construction, equipping & commissioning of various power plants and critical backup systems.",
        points: [
          "Plant construction and equipping",
          "Testing and commissioning",
          "Critical backup power systems",
        ],
      },
      "solar-renewable": {
        num: "05",
        title: "Solar & Renewable Energy",
        desc: "Solar power plants and solar heating units for facilities, from design to installation.",
        points: [
          "Solar power plants",
          "Solar heating units for facilities",
          "Design through installation",
        ],
      },
      "control-panels-hvac": {
        num: "06",
        title: "Control Rooms, Panels & HVAC",
        desc: "MV/LV panel fabrication, control centers, transformers, circuit breakers and HVAC work.",
        points: [
          "MV/LV panel fabrication",
          "Control centres, transformers, circuit breakers",
          "HVAC works",
        ],
      },
      "power-conversion": {
        num: "07",
        title: "Power Conversion & Management",
        desc: "Supply, installation and maintenance of power-conversion systems for fixed and mobile applications.",
        points: [
          "12V, 24V and 48V alternators",
          "Inverters, converters and charging systems",
          "Voltage regulation for fixed and mobile applications",
        ],
      },
    },
  },
  projects: {
    kicker: "Track record",
    title: "Completed Projects",
    note: "Project details are published only as supplied by the company.",
    intro:
      "EVA TAQA delivers critical electrical power systems with reliability, safety, and long-term maintenance support — aligned with local and national standards in Saudi Arabia.",
    majorTitle: "Major Completed Projects — المشاريع المنجزة",
    majorNote:
      "These projects highlight EVA TAQA’s delivery of high-reliability electrical infrastructure — from government facilities to national mobility projects and large-scale industrial clients.",
    tableHeaders: { num: "#", project: "Project / Client", location: "Location" },
    rows: [
      {
        name: "Mobile vehicle electrical and inverter system installation",
        location: "Saudi Arabia",
      },
      {
        name: "Generator maintenance for SAMI Military Industries",
        location: "Riyadh",
        military: true,
      },
      { name: "Generator maintenance for Saudi Electronic University", location: "Saudi Arabia" },
      { name: "Electrical systems for SDAIA mobile vehicles", location: "Saudi Arabia" },
      {
        name: "UPS supply and installation at Alab border crossing",
        location: "Dhahran Al-Janoub",
      },
      {
        name: "Battery supply and installation for the Satellite Administration",
        location: "Tabuk",
      },
      { name: "Saline Water Conversion Corporation project", location: "Shuqaiq" },
      { name: "Saudi Electronic University project", location: "Dammam" },
      { name: "Riyadh Metro Project", location: "Riyadh" },
      { name: "Saudi Electronic University – Women’s Campus", location: "Riyadh" },
      { name: "Saudi Electronic University – Men’s Campus", location: "Riyadh" },
      { name: "Saudi Telecom Company (STC) project", location: "To be specified" },
      { name: "Ministry of Foreign Affairs project", location: "Madinah" },
      {
        name: "Supply, installation and commissioning of generators for Saudi embassies abroad — 12 generators across 7 embassies",
        location: "Brasília, Lisbon, Nicosia, Nairobi, Addis Ababa, Asmara and Libreville",
      },
      {
        name: "Maintenance of generators, UPS and CBS systems — Ministry of Foreign Affairs",
        location: "Riyadh",
      },
      {
        name: "CBS battery replacement — Prince Saud Al Faisal Institute for Diplomatic Studies",
        location: "Riyadh",
      },
      {
        name: "Preventive maintenance contract for backup power systems — Alshaya",
        location: "Riyadh",
      },
      {
        name: "Inspection and maintenance of armored vehicles and their generators — Joint Forces",
        location: "To be specified",
        military: true,
      },
      {
        name: "Supply and installation of electrical systems, mast systems and hydraulic jacks for 114 vehicles — Al Arabah Saden",
        location: "To be specified",
        military: true,
      },
      {
        name: "Supply and maintenance of UPS systems — Ministry of National Guard Health Affairs",
        location: "Jeddah",
      },
      { name: "Supply and maintenance of UPS systems — King Fahd Hospital", location: "Jeddah" },
      {
        name: "Supply and maintenance of UPS systems — King Fahd Specialist Hospital",
        location: "Dammam",
      },
      { name: "UPS systems project — Security Forces Hospital", location: "Bisha" },
      { name: "Backup power systems project — Yanbu Commercial Port", location: "Yanbu" },
      {
        name: "Backup power systems project — Royal Saudi Naval Forces",
        location: "Jazan",
        military: true,
      },
      {
        name: "Preventive maintenance contracts for generators — SAMI Land Systems",
        location: "Riyadh",
        military: true,
      },
      {
        name: "Supply and installation of integrated electrical systems for 50 vehicles — SAMI Land Systems",
        location: "Riyadh",
        military: true,
      },
      {
        name: "Supply and installation of electrical systems and hydraulic jacks for 4 mobile-operations vehicles — Al Arabah Saden",
        location: "To be specified",
        military: true,
      },
    ],
    cta: {
      title: "Need high-reliability power for your facility?",
      body: "Tell us about your site. Our engineering team will propose the safest technical and most economical electrical solution.",
      primary: "Contact Us",
      secondary: "Request a Proposal",
    },
  },
  ceo: {
    kicker: "Leadership",
    title: "Message from the CEO",
    role: "Chief Executive Officer — EVA TAQA",
    body: [
      "At EVA TAQA, we believe energy is not merely a source of operation — it is the foundation of business continuity, the backbone of vital sectors, and the basis for a more efficient and sustainable future.",
      "From this conviction, we deliver integrated engineering solutions across power generation, backup power, and power conversion and management: generators, UPS and CBS systems, inverters and converters, alternators, and control, distribution and protection systems — in addition to vehicle electrification and mobile operations systems for civil and military sectors.",
      "In every project we work to understand our clients’ needs and design the right solution for each application — from study and supply, through installation, testing and commissioning, to maintenance and technical support. We commit to the highest standards of quality, safety and reliability, drawing on the expertise of our technical teams and our partnerships with leading global manufacturers.",
    ],
  },
  reliability: {
    title: ["High Reliability.", "Safe Delivery."],
    body: "EVA TAQA operates with strict quality, commissioning discipline, and lifecycle maintenance. Our approach aligns with recognized best practices and local regulatory expectations, including secure operations and resilience in line with ISO standards in Saudi Arabia.",
  },
  ctaBlock: {
    title: "Need power for your project or facility?",
    body: "Tell us about your site. Our engineering team will recommend the right technical and economical solution.",
    primary: "Request a Proposal",
    secondary: "Contact Our Team",
  },
  contact: {
    kicker: "Contact",
    title: "Let's Power Your Next Project.",
    form: {
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      projectType: "Project Type",
      message: "Message",
      submit: "Send Inquiry",
      success: "Thank you. Your inquiry has been prepared — our team will be in touch.",
    },
    infoLabels: { email: "Email", phone: "Phone", address: "Address" },
    address: ["4273 Omar Ibn Al Khattab Branch,", "8532 Al Farooq Dist.,", "Riyadh 12863, KSA"],
  },
  footer: {
    statement: "We aspire to be the best in the Middle East.",
    blurb: "Reliable electrical power, delivered with innovation, safety, and long-term support.",
    companyCol: "Company",
    contactCol: "Contact",
    location: "Riyadh, Saudi Arabia",
    rights: "EVA TAQA. All rights reserved.",
  },
};

export const ar: Dict = {
  dir: "rtl",
  brand: "إيفا طاقة",
  langName: "العربية",
  otherLangLabel: "EN",
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    projects: "مشاريعنا",
    contact: "تواصل معنا",
  },
  cta: "طلب عرض",
  meta: {
    home: {
      title: "إيفا طاقة — حلول موثوقة للطاقة والكهرباء في المملكة العربية السعودية",
      description:
        "نصمم وننفذ ونختبر ونشغل ونصون أنظمة الطاقة الكهربائية عالية الكفاءة للبنية التحتية والمشاريع الحيوية في المملكة العربية السعودية.",
    },
    about: {
      title: "من نحن — إيفا طاقة لحلول الطاقة الكهربائية",
      description:
        "رؤية إيفا طاقة ومهمتها واستراتيجيتها وأهدافها في تقديم حلول الطاقة الكهربائية الحديثة للبنية التحتية في المملكة.",
    },
    services: {
      title: "خدماتنا الأساسية — نقل الطاقة والمحطات والطاقة الشمسية | إيفا طاقة",
      description:
        "خطوط ونقل الطاقة، شبكات التوزيع والمحطات الفرعية، الأعمال الكهربائية المتكاملة، محطات التوليد، الطاقة الشمسية، اللوحات وأنظمة التكييف.",
    },
    projects: {
      title: "المشاريع المنجزة — إيفا طاقة",
      description:
        "نماذج من المشاريع التي نفذتها إيفا طاقة، ومنها مشروع مترو الرياض وشركة الاتصالات السعودية والجامعة السعودية الإلكترونية.",
    },
    contact: {
      title: "تواصل مع إيفا طاقة — لنمنح مشروعك الطاقة التي يحتاجها",
      description:
        "تحدث مع فريق إيفا طاقة الهندسي في الرياض حول أنظمة الطاقة لمشروعك أو منشأتك. sales@evataqa.com · ‎+966 544967553.",
    },
  },
  hero: {
    eyebrow: "إيفا طاقة — حلول الطاقة والكهرباء",
    headline: ["طاقة موثوقة.", "مصممة لمستقبل أفضل."],
    desc: "نصمم وننفذ ونختبر ونشغل ونصون أنظمة الطاقة الكهربائية عالية الكفاءة للبنية التحتية والمشاريع الحيوية في المملكة العربية السعودية.",
    tagline: "نطمح بأن نكون الأولى في الشرق الأوسط",
    primary: "استكشف خدماتنا",
    secondary: "اطلب عرضاً",
    tertiary: "استعرض مشاريعنا ←",
  },
  about: {
    kicker: "من نحن",
    title: "حلول طاقة حديثة للبنية التحتية السعودية",
    body: [
      "إيفا طاقة هي إحدى الشركات الرائدة في تقديم حلول الطاقة الكهربائية الحديثة للبنية التحتية في المملكة العربية السعودية. ندعم عملاءنا بدءاً من الدراسات والتصميم، مروراً بالتنفيذ والتركيب والاختبارات والتشغيل، وصولاً إلى التشغيل والصيانة.",
      "هدفنا هو تقديم حلول كهربائية تتميز بأعلى مستويات الموثوقية والكفاءة الاقتصادية، مع نماذج تمويل مرنة تتناسب مع احتياجات المشروع.",
    ],
    cta: "اكتشف إيفا طاقة",
    pillars: [
      {
        title: "الدراسات والتصميم",
        desc: "دراسات الأحمال والتصميم الفني وهندسة القيمة قبل بدء التنفيذ.",
      },
      {
        title: "التنفيذ والتشغيل",
        desc: "التركيب والاختبارات والتشغيل وفق انضباط صارم في الجودة.",
      },
      {
        title: "التشغيل والصيانة",
        desc: "دعم متكامل على مدار دورة حياة الأصول الحيوية لضمان جاهزيتها وسلامتها.",
      },
      { title: "تمويل مرن", desc: "نماذج تمويل مبتكرة ومتنوعة تناسب حجم كل مشروع." },
    ],
  },
  vmso: [
    {
      key: "vision",
      label: "٠١",
      heading: "الرؤية",
      body: "أن نكون الشركة الأولى في الشرق الأوسط في تقديم أكثر حلول الطاقة الكهربائية كفاءة وموثوقية لعملائنا، من خلال حلول مبتكرة ومتنوعة.",
    },
    {
      key: "mission",
      label: "٠٢",
      heading: "المهمة",
      items: [
        "تطوير حلول متكاملة تلبي احتياجات العملاء بمختلف أحجام مشاريعهم.",
        "دعم العملاء بدءاً من إعداد الدراسات وحتى التشغيل والصيانة الكاملة.",
        "مساعدة العملاء في اختيار أفضل الحلول من الناحيتين الفنية والاقتصادية.",
        "تقديم أساليب تمويل مبتكرة ومتعددة.",
      ],
    },
    {
      key: "strategy",
      label: "٠٣",
      heading: "الاستراتيجية",
      body: "توليد الطاقة الكهربائية في مختلف مناطق المملكة باستخدام مصادر الطاقة التقليدية والمتجددة، وتوريد الطاقة إلى الشركة السعودية للكهرباء أو الجهات المرخصة الأخرى.",
    },
    {
      key: "objectives",
      label: "٠٤",
      heading: "الأهداف",
      items: [
        "الحصول على أكبر حصة من سوق توليد الطاقة في المملكة العربية السعودية.",
        "البحث عن الفرص الاستثمارية الواعدة في أسواق الخليج والأسواق العربية.",
        "التعاون والتوافق مع الشركات العالمية الرائدة في تقنيات توليد الطاقة.",
        "المشاركة في المشاريع داخل المملكة وخارجها.",
        "تطوير منشآت صناعية محلية للمنتجات الكهربائية في المملكة العربية السعودية.",
      ],
    },
  ],
  services: {
    kicker: "قدراتنا",
    title: "خدماتنا الأساسية",
    detailCta: "تفاصيل الخدمة",
    back: "كل الخدمات",
    items: {
      "power-transmission": {
        num: "٠١",
        title: "خطوط ونقل الطاقة",
        desc: "تصميم وتنفيذ خطوط الطاقة وشبكات نقل الكهرباء داخل المدن وخارجها.",
        points: [
          "الخطوط الهوائية ومسارات الكابلات الأرضية",
          "تصميم وتنفيذ شبكات النقل",
          "ممرات الطاقة داخل المدن وبينها",
        ],
      },
      "distribution-substations": {
        num: "٠٢",
        title: "شبكات التوزيع والمحطات الفرعية",
        desc: "إنشاء مراكز التوزيع، وتوزيع الأحمال، وقواطع الجهد، ومحطات الجهد المتوسط والعالي داخل المدن.",
        points: [
          "مراكز التوزيع وتوزيع الأحمال",
          "قواطع الجهد وأنظمة الحماية",
          "محطات الجهد المتوسط والعالي",
        ],
      },
      "electrical-installations": {
        num: "٠٣",
        title: "الأعمال الكهربائية المتكاملة",
        desc: "تنفيذ الأعمال الداخلية والخارجية للمباني، بما يشمل الأنظمة الكهربائية والميكانيكية والإلكترونية والإضاءة والواجهات.",
        points: [
          "الأنظمة الكهربائية والميكانيكية للمباني",
          "الأنظمة الإلكترونية وأنظمة التيار الخفيف",
          "إضاءة المباني والواجهات",
        ],
      },
      "power-plants": {
        num: "٠٤",
        title: "محطات توليد الطاقة والتشغيل",
        desc: "إنشاء وتجهيز واختبار وتشغيل مختلف محطات الطاقة وأنظمة الطاقة الاحتياطية الحيوية.",
        points: [
          "إنشاء وتجهيز المحطات",
          "الاختبارات وأعمال التشغيل",
          "أنظمة الطاقة الاحتياطية الحيوية",
        ],
      },
      "solar-renewable": {
        num: "٠٥",
        title: "الطاقة الشمسية والطاقة المتجددة",
        desc: "تنفيذ محطات الطاقة الشمسية ووحدات التسخين بالطاقة الشمسية للمنشآت، بدءاً من التصميم وحتى التركيب.",
        points: ["محطات الطاقة الشمسية", "وحدات التسخين بالطاقة الشمسية", "من التصميم حتى التركيب"],
      },
      "control-panels-hvac": {
        num: "٠٦",
        title: "غرف التحكم واللوحات وأنظمة التكييف",
        desc: "تصنيع لوحات الجهد المتوسط والمنخفض، ومراكز التحكم، والمحولات، وقواطع الدائرة، وأعمال التكييف.",
        points: [
          "تصنيع لوحات الجهد المتوسط والمنخفض",
          "مراكز التحكم والمحولات والقواطع",
          "أعمال التكييف",
        ],
      },
      "power-conversion": {
        num: "٠٧",
        title: "أنظمة تحويل وإدارة الطاقة الكهربائية",
        desc: "توريد وتركيب وصيانة حلول تحويل وإدارة الطاقة للتطبيقات الثابتة والمتنقلة.",
        points: [
          "ألترنيتر بجهود 12V و24V و48V",
          "الإنفيرتر والكونفيرتر وأنظمة الشحن",
          "تنظيم الجهد للتطبيقات الثابتة والمتنقلة",
        ],
      },
    },
  },
  projects: {
    kicker: "سجل الأعمال",
    title: "المشاريع المنجزة",
    note: "تُنشر تفاصيل المشاريع كما توفرها الشركة فقط.",
    intro:
      "تُقدم إيفا طاقة أنظمة طاقة كهربائية حيوية بموثوقية وسلامة ودعم صيانة طويل الأمد — بما يتوافق مع المعايير المحلية والوطنية في المملكة العربية السعودية.",
    majorTitle: "المشاريع المنجزة — Major Completed Projects",
    majorNote:
      "تُبرز هذه المشاريع قدرة إيفا طاقة على تسليم بنية تحتية كهربائية عالية الموثوقية — من المنشآت الحكومية إلى المشاريع الوطنية للنقل والعملاء الصناعيين الكبار.",
    tableHeaders: { num: "م", project: "المشروع / العميل", location: "الموقع" },
    rows: [
      { name: "تركيب منظومة كهرباء وإنفيرتر لمركبة متنقلة", location: "المملكة العربية السعودية" },
      { name: "صيانة مولدات شركة سامي للصناعات العسكرية", location: "الرياض", military: true },
      { name: "صيانة مولدات الجامعة السعودية الإلكترونية", location: "المملكة العربية السعودية" },
      {
        name: "تجهيز منظومة الكهرباء للعربات المتنقلة لسدايا",
        location: "المملكة العربية السعودية",
      },
      { name: "توريد وتركيب UPS لمنفذ علب", location: "ظهران الجنوب" },
      { name: "توريد وتركيب بطاريات بإدارة الأقمار الصناعية", location: "تبوك" },
      { name: "مشروع المؤسسة العامة لتحلية المياه المالحة", location: "الشقيق" },
      { name: "مشروع الجامعة السعودية الإلكترونية", location: "الدمام" },
      { name: "مشروع مترو الرياض", location: "الرياض" },
      { name: "مشروع الجامعة السعودية الإلكترونية – فرع الطالبات", location: "الرياض" },
      { name: "مشروع الجامعة السعودية الإلكترونية – فرع الطلاب", location: "الرياض" },
      { name: "مشروع شركة الاتصالات السعودية STC", location: "يُحدّد الموقع" },
      { name: "مشروع وزارة الخارجية", location: "المدينة المنورة" },
      {
        name: "توريد وتركيب وتشغيل مولدات السفارات السعودية بالخارج – 12 مولدًا في 7 سفارات",
        location: "برازيليا، لشبونة، نيقوسيا، نيروبي، أديس أبابا، أسمرة وليبرفيل",
      },
      { name: "صيانة المولدات وأنظمة UPS وCBS – وزارة الخارجية", location: "الرياض" },
      {
        name: "استبدال بطاريات نظام CBS – معهد الأمير سعود الفيصل للدراسات الدبلوماسية",
        location: "الرياض",
      },
      { name: "عقد الصيانة الوقائية لنظام الكهرباء الاحتياطية – شركة الشايع", location: "الرياض" },
      {
        name: "فحص وصيانة العربات المدرعة ومولداتها – القوات المشتركة",
        location: "يُحدّد الموقع",
        military: true,
      },
      {
        name: "توريد وتركيب منظومات الكهرباء وأنظمة الماست والجاك الهيدروليكي لعدد 114 مركبة – شركة العربة سادن",
        location: "يُحدّد الموقع",
        military: true,
      },
      { name: "توريد وصيانة أنظمة UPS – الشؤون الصحية بوزارة الحرس الوطني", location: "جدة" },
      { name: "توريد وصيانة أنظمة UPS – مستشفى الملك فهد", location: "جدة" },
      { name: "توريد وصيانة أنظمة UPS – مستشفى الملك فهد التخصصي", location: "الدمام" },
      { name: "مشروع أنظمة UPS – مستشفى قوى الأمن", location: "بيشة" },
      { name: "مشروع أنظمة الطاقة الاحتياطية – ميناء ينبع التجاري", location: "ينبع" },
      { name: "مشروع أنظمة الطاقة الاحتياطية – القوات البحرية", location: "جازان", military: true },
      {
        name: "عقود الصيانة الوقائية للمولدات – SAMI Land Systems",
        location: "الرياض",
        military: true,
      },
      {
        name: "توريد وتركيب منظومة الكهرباء المتكاملة لعدد 50 مركبة – SAMI Land Systems",
        location: "الرياض",
        military: true,
      },
      {
        name: "توريد وتركيب منظومة الكهرباء والجاك الهيدروليكي لعدد 4 مركبات للعمليات المتنقلة – شركة العربة سادن",
        location: "يُحدّد الموقع",
        military: true,
      },
    ],
    cta: {
      title: "هل تحتاج إلى طاقة عالية الموثوقية لمنشأتك؟",
      body: "أخبرنا عن موقعك واحتياجاتك. سيعمل فريقنا الهندسي على اقتراح الحل الكهربائي الأكثر أماناً والأوفر اقتصادياً.",
      primary: "تواصل معنا",
      secondary: "اطلب عرضاً",
    },
  },
  ceo: {
    kicker: "كلمة الرئيس التنفيذي",
    title: "كلمة الرئيس التنفيذي",
    role: "الرئيس التنفيذي – إيفا طاقة",
    body: [
      "في إيفا طاقة، نؤمن بأن الطاقة ليست مجرد مصدر للتشغيل، بل هي أساس لاستمرارية الأعمال، ودعم القطاعات الحيوية، وبناء مستقبل أكثر كفاءة واستدامة.",
      "ومن هذا المنطلق، نعمل على تقديم حلول هندسية متكاملة في مجالات توليد الطاقة، والطاقة الاحتياطية، وتحويل وإدارة الطاقة، تشمل المولدات الكهربائية، وأنظمة UPS وCBS، والإنفرتر والكونفرتر، والألترنيتر، وأنظمة التحكم والتوزيع والحماية، بالإضافة إلى تجهيز المركبات ومنظومات العمليات المتنقلة للقطاعات المدنية والعسكرية.",
      "نحرص في جميع مشاريعنا على فهم احتياجات عملائنا وتصميم الحلول المناسبة لكل تطبيق، بدءًا من الدراسة والتوريد، مرورًا بالتركيب والاختبار والتشغيل، ووصولًا إلى خدمات الصيانة والدعم الفني. ونلتزم في ذلك بأعلى معايير الجودة والسلامة والموثوقية، مستفيدين من خبرات فرقنا الفنية وشراكاتنا مع الشركات العالمية الرائدة في هذا المجال.",
    ],
  },
  reliability: {
    title: ["موثوقية عالية.", "وتنفيذ آمن."],
    body: "تعمل إيفا طاقة وفق معايير صارمة للجودة والانضباط في أعمال الاختبار والتشغيل والصيانة على مدار دورة حياة المشروع. ويستند نهجنا إلى أفضل الممارسات المعترف بها والمتطلبات التنظيمية المحلية، بما يدعم التشغيل الآمن والمرونة والموثوقية.",
  },
  ctaBlock: {
    title: "هل تحتاج إلى حلول طاقة لمشروعك أو منشأتك؟",
    body: "أخبرنا عن موقعك واحتياجات مشروعك، وسيعمل فريقنا الهندسي على اقتراح الحل الفني والاقتصادي الأنسب.",
    primary: "اطلب عرضاً",
    secondary: "تواصل مع فريقنا",
  },
  contact: {
    kicker: "تواصل معنا",
    title: "لنمنح مشروعك الطاقة التي يحتاجها.",
    form: {
      name: "الاسم",
      company: "الشركة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      projectType: "نوع المشروع",
      message: "الرسالة",
      submit: "إرسال الاستفسار",
      success: "شكراً لك. تم تجهيز استفسارك وسيتواصل معك فريقنا قريباً.",
    },
    infoLabels: { email: "البريد الإلكتروني", phone: "رقم الهاتف", address: "العنوان" },
    address: [
      "4273 فرع عمر بن الخطاب،",
      "8532 حي الفاروق،",
      "الرياض 12863،",
      "المملكة العربية السعودية",
    ],
  },
  footer: {
    statement: "نطمح بأن نكون الأولى في الشرق الأوسط.",
    blurb: "طاقة كهربائية موثوقة، نقدمها بالابتكار والسلامة والدعم طويل الأمد.",
    companyCol: "الشركة",
    contactCol: "تواصل معنا",
    location: "الرياض، المملكة العربية السعودية",
    rights: "إيفا طاقة. جميع الحقوق محفوظة.",
  },
};

export const DICT: Record<Lang, Dict> = { en, ar };
export const CONTACT = { email, phone };
