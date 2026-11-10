// All website texts live here — edit freely.
export const PHONE = "0539427061";
export const WA_NUMBER = "966539427061";
export const CR = "1009204126";
export const UNIFIED = "7049197119";

export const waLink = (msg?: string) =>
  `https://wa.me/${WA_NUMBER}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export type Lang = "ar" | "en";

export const serviceIcons = [
  "Wind", "ChefHat", "Snowflake", "Droplets", "Wrench", "Bug", "Sparkles", "Sofa", "Building2",
] as const;

export const content = {
  ar: {
    name: "مؤسسة علي معيض الأسمري للصيانة والنظافة",
    short: "الأسمري للصيانة والنظافة",
    nav: [
      ["home", "الرئيسية"], ["about", "من نحن"], ["services", "خدماتنا"], ["why", "لماذا نحن"],
      ["certificate", "شهادة الإنجاز"], ["process", "كيف نعمل"], ["vision", "رؤية 2030"], ["contact", "تواصل معنا"],
    ],
    hero: {
      badge: "رؤية السعودية 2030",
      title: "نصنع بيئة أنظف وأكثر أمانًا لمنشأتك",
      sub: "خدمات صيانة ونظافة متكاملة للمطاعم والمجمعات التجارية والمنشآت في الرياض – بمعايير تُرضي البلدية والدفاع المدني.",
      cta: "اطلب خدمتك الآن",
      cta2: "تواصل معنا",
      cr: "السجل التجاري",
    },
    about: {
      kicker: "من نحن",
      title: "شريكك الموثوق في صيانة ونظافة المنشآت بالرياض",
      body: "مؤسسة علي معيض الأسمري للصيانة والنظافة مؤسسة سعودية تعمل في مدينة الرياض، تقدّم خدمات الصيانة والنظافة المتخصصة للمطاعم والمجمعات التجارية والمنشآت. نلتزم بالجودة في كل تفصيلة، ونضع السلامة والامتثال لاشتراطات البلدية والدفاع المدني في مقدمة أولوياتنا.",
      points: ["الجودة", "السلامة", "الامتثال"],
    },
    services: {
      kicker: "خدماتنا",
      title: "حلول متكاملة لمنشأتك",
      order: "اطلب الخدمة",
      msg: "مرحباً، أرغب في طلب خدمة: ",
      items: [
        ["تنظيف مداخن الشفط والهودات والمراوح", "تنظيف شامل لمنظومة الشفط كاملة لتقليل مخاطر الحريق."],
        ["تنظيف الهودات فقط", "إزالة الدهون المتراكمة من الهودات بعناية."],
        ["تنظيف وتعقيم نظام التكييف", "هواء أنقى وأداء أفضل لأجهزة التكييف."],
        ["شفط مصائد الزيوت", "شفط آمن لمصائد الزيوت وفق الاشتراطات."],
        ["تسليك مصائد الزيوت", "معالجة الانسدادات وإعادة التصريف بكفاءة."],
        ["مكافحة الحشرات والقوارض", "بيئة خالية من الآفات بمواد آمنة."],
        ["تنظيف عام للموقع", "نظافة شاملة لجميع مرافق المنشأة."],
        ["تنظيف وتعقيم المفروشات", "تنظيف عميق وتعقيم للكنب والسجاد والمفروشات."],
        ["تنظيف الواجهات", "واجهات لامعة تعكس صورة منشأتك."],
      ],
    },
    why: {
      kicker: "لماذا نحن",
      title: "ما يميزنا",
      items: [
        ["فريق متخصص", "كوادر مدرّبة على أعمال الصيانة والنظافة المتخصصة."],
        ["التزام بمعايير السلامة", "نعمل وفق اشتراطات البلدية والدفاع المدني."],
        ["مواد وأجهزة حديثة", "معدات احترافية ومواد فعّالة وآمنة."],
        ["سرعة في التنفيذ", "إنجاز دقيق في الوقت المتفق عليه."],
        ["شهادة إنجاز رسمية", "توثيق معتمد بعد كل عملية."],
      ],
    },
    cert: {
      kicker: "شهادة الإنجاز",
      title: "توثيق رسمي بعد كل خدمة",
      body: "بعد الانتهاء من كل عملية نُصدر شهادة إنجاز رسمية يمكن تقديمها لإدارة المجمع والبلدية والدفاع المدني، لتكون منشأتك جاهزة دائمًا لأي زيارة تفتيشية.",
      to: ["إدارة المجمع", "البلدية", "الدفاع المدني"],
      card: { title: "شهادة إنجاز", label: "Certificate of Completion", no: "رقم الشهادة", service: "الخدمة", status: "تم التنفيذ بنجاح" },
    },
    process: {
      kicker: "كيف نعمل",
      title: "أربع خطوات بسيطة",
      steps: ["تواصل معنا", "معاينة وتسعير", "تنفيذ الخدمة", "تسليم شهادة الإنجاز"],
    },
    vision: {
      kicker: "رؤية 2030",
      title: "نتماشى مع رؤية السعودية 2030",
      body: "نؤمن بدورنا في تحقيق مستهدفات رؤية المملكة 2030، من خلال الإسهام في تحسين جودة الحياة، ودعم مدن نظيفة وصحية، والحفاظ على منشآت آمنة لسكانها وزوارها.",
    },
    faq: {
      title: "أسئلة شائعة",
      items: [
        ["ما الخدمات التي تقدمونها في الرياض؟", "نقدم تنظيف مداخن الشفط والهودات والمراوح، تنظيف وتعقيم التكييف، شفط وتسليك مصائد الزيوت، مكافحة الحشرات والقوارض، التنظيف العام، تنظيف المفروشات، وتنظيف الواجهات."],
        ["هل تصدرون شهادة بعد إنجاز الخدمة؟", "نعم، نصدر شهادة إنجاز رسمية بعد كل عملية يمكن تقديمها لإدارة المجمع والبلدية والدفاع المدني."],
        ["كيف أطلب الخدمة؟", "تواصل معنا عبر واتساب أو اتصال على الرقم 0539427061، ثم نقوم بالمعاينة والتسعير والتنفيذ."],
        ["أين تقع المؤسسة؟", "الرياض – حي بدر – رقم المبنى 2653 – الرمز البريدي 14742."],
      ],
    },
    contact: {
      kicker: "تواصل معنا",
      title: "نسعد بخدمتك",
      phone: "الهاتف", wa: "واتساب", address: "العنوان", unified: "الرقم الموحد", cr: "السجل التجاري",
      addressText: "المملكة العربية السعودية – الرياض – حي بدر – رقم المبنى 2653 – الرمز البريدي 14742 – الرقم الإضافي 6858",
      form: { name: "الاسم", phone: "رقم الجوال", service: "الخدمة", message: "رسالتك", submit: "إرسال عبر واتساب", choose: "اختر الخدمة" },
      waIntro: "طلب خدمة جديد",
    },
    footer: { links: "روابط سريعة", services: "خدماتنا", contact: "بيانات التواصل", rights: "جميع الحقوق محفوظة" },
    waFloat: "تواصل عبر واتساب",
    toTop: "العودة للأعلى",
    menu: "القائمة",
    vision2030Alt: "شعار رؤية السعودية 2030",
  },
  en: {
    name: "Ali Mueed Al-Asmari Est. for Maintenance & Cleaning",
    short: "Al-Asmari Maintenance & Cleaning",
    nav: [
      ["home", "Home"], ["about", "About"], ["services", "Services"], ["why", "Why Us"],
      ["certificate", "Certificate"], ["process", "Process"], ["vision", "Vision 2030"], ["contact", "Contact"],
    ],
    hero: {
      badge: "Saudi Vision 2030",
      title: "A cleaner, safer environment for your facility",
      sub: "Integrated maintenance and cleaning services for restaurants, malls and facilities in Riyadh – meeting municipality and civil defense standards.",
      cta: "Request a Service",
      cta2: "Contact Us",
      cr: "Commercial Register",
    },
    about: {
      kicker: "About Us",
      title: "Your trusted partner for facility maintenance & cleaning in Riyadh",
      body: "Ali Mueed Al-Asmari Est. is a Saudi establishment operating in Riyadh, delivering specialized maintenance and cleaning services to restaurants, commercial complexes and facilities. We are committed to quality in every detail, with safety and compliance with municipality and civil defense requirements as our top priority.",
      points: ["Quality", "Safety", "Compliance"],
    },
    services: {
      kicker: "Our Services",
      title: "Complete solutions for your facility",
      order: "Request service",
      msg: "Hello, I would like to request: ",
      items: [
        ["Exhaust ducts, hoods & fans cleaning", "Full exhaust system cleaning to reduce fire risk."],
        ["Hood cleaning only", "Careful removal of built-up grease from hoods."],
        ["AC system cleaning & sanitizing", "Cleaner air and better AC performance."],
        ["Grease trap pumping", "Safe grease trap pumping per regulations."],
        ["Grease trap unclogging", "Clearing blockages and restoring flow."],
        ["Pest & rodent control", "A pest-free environment with safe materials."],
        ["General site cleaning", "Thorough cleaning of all facility areas."],
        ["Upholstery cleaning & sanitizing", "Deep cleaning of sofas, carpets and furnishings."],
        ["Facade cleaning", "Shining facades that reflect your brand."],
      ],
    },
    why: {
      kicker: "Why Us",
      title: "What sets us apart",
      items: [
        ["Specialized team", "Trained staff for specialized maintenance and cleaning."],
        ["Safety standards", "We follow municipality and civil defense requirements."],
        ["Modern equipment", "Professional tools and effective, safe materials."],
        ["Fast execution", "Precise delivery on the agreed schedule."],
        ["Official certificate", "Certified documentation after every job."],
      ],
    },
    cert: {
      kicker: "Completion Certificate",
      title: "Official documentation after every job",
      body: "After every job we issue an official completion certificate that can be presented to the complex management, the municipality and civil defense — keeping your facility ready for any inspection.",
      to: ["Complex management", "Municipality", "Civil defense"],
      card: { title: "Completion Certificate", label: "شهادة إنجاز", no: "Certificate No.", service: "Service", status: "Completed successfully" },
    },
    process: {
      kicker: "How We Work",
      title: "Four simple steps",
      steps: ["Contact us", "Inspection & quote", "Service execution", "Certificate delivery"],
    },
    vision: {
      kicker: "Vision 2030",
      title: "Aligned with Saudi Vision 2030",
      body: "We believe in our role in achieving the Kingdom's Vision 2030 goals by contributing to a better quality of life, clean and healthy cities, and safe facilities for residents and visitors.",
    },
    faq: {
      title: "FAQ",
      items: [
        ["What services do you offer in Riyadh?", "Exhaust duct, hood and fan cleaning, AC cleaning and sanitizing, grease trap pumping and unclogging, pest control, general cleaning, upholstery cleaning and facade cleaning."],
        ["Do you issue a certificate after the service?", "Yes, an official completion certificate for the complex management, municipality and civil defense."],
        ["How do I request a service?", "Contact us on WhatsApp or call 0539427061; we inspect, quote and execute."],
        ["Where are you located?", "Riyadh – Badr District – Building 2653 – Postal code 14742."],
      ],
    },
    contact: {
      kicker: "Contact Us",
      title: "We're happy to help",
      phone: "Phone", wa: "WhatsApp", address: "Address", unified: "Unified Number", cr: "Commercial Register",
      addressText: "Kingdom of Saudi Arabia – Riyadh – Badr District – Building 2653 – Postal code 14742 – Additional No. 6858",
      form: { name: "Name", phone: "Mobile", service: "Service", message: "Message", submit: "Send via WhatsApp", choose: "Choose a service" },
      waIntro: "New service request",
    },
    footer: { links: "Quick links", services: "Services", contact: "Contact details", rights: "All rights reserved" },
    waFloat: "Chat on WhatsApp",
    toTop: "Back to top",
    menu: "Menu",
    vision2030Alt: "Saudi Vision 2030 logo",
  },
} as const;
