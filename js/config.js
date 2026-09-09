/* ==========================================================================
   Portfolio Configuration - Ashkan Abavi (AchkanDev)
   ========================================================================== */

const PORTFOLIO_DATA = {
  profile: {
    name: "Ashkan Abavi",
    nameFa: "اشکان ابوی",
    username: "AchkanDev",
    title: "Senior Mobile Application Engineer & Cross-Platform Architect",
    status: "آماده همکاری",
    bioEn: "Senior Mobile Engineer specializing in high-scalability cross-platform solutions, native performance optimization, and end-to-end product engineering.",
    bioFa: "مهندس ارشد اپلیکیشن‌های موبایل. متخصص توسعه محصولات مقیاس‌پذیر کراس‌پلتفرم، بهینه‌سازی عملکرد نیتیو و معماری نرم‌افزار.",
    motto: "First, solve the problem. Then, write the code.",
    avatarUrl: "assets/avatar.png",
    email: "Ashkan.abavi1@gmail.com",
    github: "https://github.com/AchkanDev",
    linkedin: "https://linkedin.com/in/achkandev",
    telegram: "https://t.me/achkandev",
  },

  stats: [
    { number: "826+", labelEn: "GitHub Commits / Yr", labelFa: "کامیت فعال در یک سال گذشته" },
    { number: "14+", labelEn: "Repositories", labelFa: "ریپازیتوری‌های پروژه" },
    { number: "1,500+", labelEn: "Mobin App Installs", labelFa: "نصب فعال اپلیکیشن مبین" },
    { number: "4+", labelEn: "Global & Local Store Apps", labelFa: "اپلیکیشن منتشر شده در استورها" }
  ],

  // Live Mobile Device App Previews (Full English & Farsi Data)
  appSimulators: [
    {
      id: "weekilaw-sim",
      titleEn: "WeekiLaw Platform",
      titleFa: "WeekiLaw (ویکیلا)",
      subtitleEn: "AI Legal Assistant & Smart Office",
      subtitleFa: "دستیار هوش مصنوعی و دفتر کار حقوقی",
      iconType: "legal",
      badgeEn: "Google Play & App Store",
      badgeFa: "گوگل پلی، اپ استور و بازار",
      uiColor: "#38bdf8",
      mockupDataEn: {
        screenTitle: "WeekiLaw AI Assistant",
        query: "Contract Analysis & Consultation...",
        status: "AI Response Generated",
        lawyers: "240+ Verified Lawyers Online",
        availability: "Available on Google Play & App Store"
      },
      mockupDataFa: {
        screenTitle: "دستیار حقوقی ویکیلا",
        query: "تحلیل قرارداد تجاری و مشاوره آنلاین...",
        status: "پاسخ هوش مصنوعی دریافت شد",
        lawyers: "۲۴۰+ وکیل فعال آنلاین",
        availability: "منتشر شده در گوگل پلی، اپ استور و بازار"
      }
    },
    {
      id: "framesanj-sim",
      titleEn: "FrameSanj App",
      titleFa: "FrameSanj (فریم‌سنج)",
      subtitleEn: "PC Game FPS & Specs Analyzer",
      subtitleFa: "سنجش سخت‌افزار و تخمین فریم ریت",
      iconType: "hardware",
      badgeEn: "CafeBazaar & Myket",
      badgeFa: "کافه بازار و مایکت",
      uiColor: "#0ea5e9",
      mockupDataEn: {
        screenTitle: "FrameSanj Hardware Analyzer",
        game: "Cyberpunk 2077 / Witcher 3",
        cpu: "Core i7 / Ryzen 7",
        gpu: "RTX 3060 / RX 6700 XT",
        ram: "16 GB DDR4",
        fpsResult: "60-75 FPS (Optimal Hardware)",
        verdict: "Compatible • Smooth 60 FPS"
      },
      mockupDataFa: {
        screenTitle: "بررسی سخت‌افزار فریم‌سنج",
        game: "Cyberpunk 2077 / Witcher 3",
        cpu: "Core i7 / Ryzen 7",
        gpu: "RTX 3060 / RX 6700 XT",
        ram: "16 GB DDR4",
        fpsResult: "60-75 FPS (سخت‌افزار مناسب)",
        verdict: "سازگار • اجرای روان"
      }
    },
    {
      id: "mobin-sim",
      titleEn: "Mobin Spiritual App",
      titleFa: "Mobin (مبین)",
      subtitleEn: "Spiritual Companion & Qibla Finder",
      subtitleFa: "قبله‌نما، اوقات شرعی و ذکرشمار",
      iconType: "spiritual",
      badgeEn: "1,500+ Active Installs",
      badgeFa: "۱,۵۰۰+ نصب فعال",
      uiColor: "#10b981",
      mockupDataEn: {
        screenTitle: "Mobin Companion App",
        qibla: "217° SW Qibla Compass",
        dhikr: "33 / 100 (Daily Counter)",
        prayer: "Dhuhr 12:08 • Maghrib 19:42",
        rating: "4.8 ★★★★★ (Store Rating)"
      },
      mockupDataFa: {
        screenTitle: "اپلیکیشن مبین",
        qibla: "217° SW قبله‌نما",
        dhikr: "33 / 100 (ذکر روز)",
        prayer: "اذان ظهر 12:08 • اذان مغرب 19:42",
        rating: "4.8 ★★★★★ (کافه بازار)"
      }
    }
  ],

  skills: [
    {
      id: "flutter-core",
      titleEn: "Flutter Core & Impeller Graphics",
      titleFa: "موتور رندرینگ فلاتر و گرافیک Impeller",
      category: "mobile",
      badge: "Core Expertise",
      descEn: "Deep mastery of Flutter 3.x, Impeller rendering pipeline, GLSL shaders, 120 FPS motion physics, CustomPainters, and memory leak profiling.",
      descFa: "تسلط عمیق بر فلاتر ۳، خط لوله رندرینگ Impeller، شیدرهای GLSL، فیزیک موشن ۱۲۰ فریم، CustomPainter و بهینه‌سازی نشت حافظه.",
      tags: ["Flutter 3.x", "Dart 3", "Impeller", "CustomPainter", "DevTools", "Memory Profiling"]
    },
    {
      id: "clean-arch",
      titleEn: "Clean Architecture & State Engines",
      titleFa: "معماری تمیز و مدیریت استیت واکنشی",
      category: "architecture",
      badge: "Architecture",
      descEn: "Production design of decoupled domain-driven layers, strict SOLID principles, BLoC/Cubit, Riverpod, and dependency injection via get_it/injectable.",
      descFa: "طراحی لایه‌های تفکیک‌شده دامنه (DDD)، استانداردهای SOLID، مدیریت استیت BLoC/Cubit، و تزریق وابستگی با get_it و injectable.",
      tags: ["Clean Architecture", "BLoC / Cubit", "SOLID", "Dependency Injection", "TDD"]
    },
    {
      id: "native-interop",
      titleEn: "Native Platform Bridges & Hardware",
      titleFa: "پل‌های نیتیو پلتفرم و دسترسی سخت‌افزاری",
      category: "mobile",
      badge: "Systems",
      descEn: "Seamless bridge communication between Dart and native Kotlin/Swift using MethodChannels, EventChannels, sensor integration, and C-FFI bindings.",
      descFa: "پیاده‌سازی ارتباط سریع بین Dart و سیستم‌عامل‌های نیتیو (کاتلین/سوئیفت) با MethodChannel، حسگرها و بایندرهای C-FFI.",
      tags: ["MethodChannel", "Kotlin (Android)", "Swift (iOS)", "Sensors API", "C-FFI"]
    },
    {
      id: "offline-sync",
      titleEn: "Offline-First Storage & Concurrency",
      titleFa: "پایگاه‌داده آفلاین و پردازش موازی",
      category: "mobile",
      badge: "Performance",
      descEn: "High-performance local databases (Hive, Isar DB, SQLite/Drift), background concurrency with Dart Isolates, and conflict-free data sync engines.",
      descFa: "پایگاه‌های داده پرسرعت محلی (Hive, Isar, Drift)، پردازش در پس‌زمینه با Dart Isolates و همگام‌سازی بدون وقفه داده‌ها.",
      tags: ["Hive DB", "Isar DB", "SQLite / Drift", "Dart Isolates", "Offline Sync"]
    },
    {
      id: "cloud-backend",
      titleEn: "Cloud Ecosystem & Network Protocols",
      titleFa: "اکوسیستم ابری و پروتکل‌های شبکه",
      category: "backend",
      badge: "Backend & Cloud",
      descEn: "Full Firebase suite (Auth, Firestore, Cloud Messaging, Crashlytics), RESTful APIs with Dio interceptors, WebSockets, and secure token refresh.",
      descFa: "سرویس‌های فایربیس (FCM, Crashlytics, Firestore)، کلاینت RESTful با Dio و اینترسپتورهای پیشرفته، وب‌سوکت و توکن رفرش امن.",
      tags: ["Firebase Suite", "REST APIs (Dio)", "WebSockets", "Auth & JWT", "PostgreSQL"]
    },
    {
      id: "devops-ci",
      titleEn: "CI/CD Automation & Store Publishing",
      titleFa: "اتوماسیون CI/CD و انتشار در استورها",
      category: "tools",
      badge: "DevOps",
      descEn: "Automated test suites (Unit, Widget, Golden Tests), GitHub Actions workflows, Fastlane code signing, and global release on Google Play & App Store.",
      descFa: "تست‌های خودکار یونیت و ویجت، پایپ‌لاین‌های گیت‌هاب اکشنز، امضای خودکار با Fastlane و انتشار رسمی در گوگل پلی و اپ استور.",
      tags: ["GitHub Actions", "CI/CD", "flutter_test", "Fastlane", "Google Play", "App Store"]
    }
  ],

  experience: [
    {
      periodEn: "2023 - Present",
      periodFa: "۱۴۰۲ - تا کنون",
      roleEn: "Senior Mobile Application Engineer",
      roleFa: "مهندس ارشد اپلیکیشن‌های موبایل",
      companyEn: "Commercial Products & App Stores",
      companyFa: "توسعه پروژه‌های تجاری و استورها",
      descEn: "Architected and engineered production cross-platform applications (WeekiLaw on Google Play & App Store, FrameSanj, Mobin) focusing on scalable architecture, state management, and offline database synchronization.",
      descFa: "طراحی و توسعه پروژه‌های تجاری موبایل شامل پلتفرم حقوقی ویکیلا (منتشر شده در گوگل پلی، اپ استور، بازار و مایکت)، فریم‌سنج و مبین بر پایه معماری‌های مدرن و همگام‌سازی دیتابیس."
    },
    {
      periodEn: "2020 - 2023",
      periodFa: "۱۳۹۹ - ۱۴۰۲",
      roleEn: "Mobile Software Engineer",
      roleFa: "مهندس نرم‌افزار موبایل",
      companyEn: "Software Solutions",
      companyFa: "شرکت‌های توسعه نرم‌افزار",
      descEn: "Engineered scalable mobile backends, custom design systems, social feeds (Instagram Clone), and e-commerce shopping workflows (Nike Store).",
      descFa: "پیاده‌سازی فروشگاه‌های آنلاین مدرن، شبیه‌سازی سیستم‌های اجتماعی با پشتیبانی Real-time فایربیس و دیزاین سیستم‌های اختصاصی."
    }
  ],

  projects: [
    {
      id: "weekilaw",
      featured: true,
      titleEn: "WeekiLaw Legal Platform",
      titleFa: "پلتفرم خدمات حقوقی ویکیلا (WeekiLaw)",
      category: "mobile",
      badgeEn: "Featured Flagship • Production",
      badgeFa: "پروژه شاخص پروداکشن • استورها",
      descEn: "Commercial Legal Services Platform connecting citizens with 240+ verified attorneys, featuring automated AI contract parsing and a full-suite smart law office. Architected with Flutter 3, Decoupled Clean Architecture, and Isar offline sync.",
      descFa: "پلتفرم جامع خدمات حقوقی با بیش از ۲۴۰ وکیل رسمی، دستیار هوش مصنوعی تحلیل قراردادهای تجاری و دفتر کار آنلاین وکلا. پیاده‌سازی شده با فلاتر ۳، معماری تمیز تفکیک‌شده و کشینگ دیتابیس محلی.",
      highlightsEn: [
        "240+ verified attorneys & real-time audio/case consultation",
        "AI legal engine for automated contract & clause risk assessment",
        "Published across Google Play, Apple App Store, CafeBazaar & Myket"
      ],
      highlightsFa: [
        "۲۴۰+ وکیل رسمی و مشاوره صوتی و نوبت‌دهی آنلاین",
        "موتور هوش مصنوعی ارزیابی و تحلیل ریسک بندهای قرارداد",
        "منتشر شده رسمی در Google Play، App Store، کافه‌بازار و مایکت"
      ],
      tags: ["Google Play", "App Store", "Flutter 3", "AI Engine", "Clean Architecture", "BLoC", "Isar DB"],
      github: "https://github.com/AchkanDev/weekilaw-showcase",
      live: "https://cafebazaar.ir/app/com.pqlian.weekilaw"
    },
    {
      id: "framesanj",
      titleEn: "FrameSanj Analyzer",
      titleFa: "اپلیکیشن فریم‌سنج (FrameSanj)",
      category: "mobile",
      badgeEn: "Utility • Hardware Engine",
      badgeFa: "ابزار تحلیلی • دیتابیس محلی",
      descEn: "Offline PC game compatibility & FPS estimator — compare CPU/GPU/RAM specs with minimum/recommended game requirements.",
      descFa: "اپلیکیشن سنجش سخت‌افزار و تخمین فریم ریت (FPS) بازی‌های کامپیوتری به‌صورت آفلاین همراه با تحلیل سیستم.",
      tags: ["Flutter", "Dart 3", "Offline DB", "UI/UX", "Clean Arch"],
      github: "https://github.com/AchkanDev/gamegauge-showcase",
      live: "https://cafebazaar.ir/app/com.example.game_guge"
    },
    {
      id: "mobin",
      titleEn: "Mobin Spiritual App",
      titleFa: "اپلیکیشن مذهبی و سبک زندگی مبین",
      category: "mobile",
      badgeEn: "1,500+ Active Installs",
      badgeFa: "۱,۵۰۰+ نصب فعال",
      descEn: "Spiritual Companion App featuring daily prayers, Qibla compass, prayer times, Dhikr counter — 1,500+ installs on CafeBazaar.",
      descFa: "اپلیکیشن کاربردی اوقات شرعی، قبله‌نما، تعقیبات و ذکرشمار هوشمند با بیش از ۱۵۰۰ نصب فعال در کافه‌بازار.",
      tags: ["Flutter", "Location Services", "Sensors", "Offline First"],
      github: "https://github.com/AchkanDev/mobin-app-showcase",
      live: "https://cafebazaar.ir/app/?id=ir.mobinapp.mainapp"
    },
    {
      id: "vazhejoo",
      titleEn: "VazheJoo Word Finder",
      titleFa: "اپلیکیشن واژه‌جو (VazheJoo)",
      category: "mobile",
      badgeEn: "Persian NLP • Algorithm",
      badgeFa: "الگوریتم و پردازش زبان",
      descEn: "Persian offline word finder to discover hidden words using Persian letters and smart word generation algorithm.",
      descFa: "اپلیکیشن یافتن واژگان و الگوریتم هوشمند پیدا کردن کلمات مخفی فارسی به صورت کاملاً آفلاین.",
      tags: ["Flutter", "Algorithms", "Persian NLP", "Clean Arch"],
      github: "https://github.com/AchkanDev/vazhejoo-showcase",
      live: "https://cafebazaar.ir/app/com.achkandev.vazhejoo"
    },
    {
      id: "yariex",
      titleEn: "Yariex Modern App",
      titleFa: "پروژه مدرن Yariex",
      category: "mobile",
      badgeEn: "Cloud & Clean Architecture",
      badgeFa: "فایربیس و معماری تمیز",
      descEn: "Feature-rich Flutter application built with modern UI, real-time Firebase backend, and Clean Architecture.",
      descFa: "پروژه قدرتمند فلاتر با آخرین استانداردهای UI/UX، سرویس‌های Real-time فایربیس و ساختار Clean Architecture.",
      tags: ["Flutter", "Firebase", "BLoC", "Clean Architecture"],
      github: "https://github.com/AchkanDev/yariex-showcase",
      live: "https://github.com/AchkanDev/yariex-showcase"
    },
    {
      id: "nikestore",
      titleEn: "Nike Store E-Commerce",
      titleFa: "فروشگاه آنلاین Nike Store",
      category: "mobile",
      badgeEn: "Fluid Motion & Store Flow",
      badgeFa: "موشن دیزاین و فروشگاه",
      descEn: "Premium e-commerce Flutter app with fluid hero animations, cart management, and payment checkout flow.",
      descFa: "اپلیکیشن فروشگاهی فوق‌العاده شیک با انیمیشن‌های روان، مدیریت سبد خرید و مراحل سفارش‌گیری.",
      tags: ["Flutter", "UI/UX", "State Management", "Hero Animations"],
      github: "https://github.com/AchkanDev/Nike_store",
      live: "https://github.com/AchkanDev/Nike_store"
    }
  ]
};
