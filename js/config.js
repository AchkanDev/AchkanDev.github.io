/* ==========================================================================
   Antigravity CV/Portfolio Configuration - Ashkan Abavi (AchkanDev)
   ========================================================================== */

const PORTFOLIO_DATA = {
  profile: {
    name: "Ashkan Abavi",
    nameFa: "اشکان ابوی",
    username: "AchkanDev",
    title: "Senior Flutter Developer & Cross-Platform Engineer",
    status: "آماده همکاری",
    bioEn: "Crafting fluid, production-grade Flutter applications with Clean Architecture, BLoC, and pixel-perfect design systems.",
    bioFa: "توسعه‌دهنده فلاتر و اپلیکیشن‌های موبایل. متخصص پیاده‌سازی پروژه‌ها با Clean Architecture، مدیریت استیت BLoC و رابط‌های کاربری روان و سریع.",
    motto: "First, solve the problem. Then, write the code.",
    avatarUrl: "assets/avatar.png",
    email: "Ashkan.abavi1@gmail.com",
    github: "https://github.com/AchkanDev",
    linkedin: "https://linkedin.com/in/achkandev",
    telegram: "https://t.me/achkandev",
  },

  typewriterTitlesEn: [
    "Senior Flutter Developer 📱",
    "Clean Architecture & BLoC Expert 🏗️",
    "Firebase & Mobile Specialist ⚡",
    "UI/UX Motion Craftsman 🎨"
  ],

  typewriterTitlesFa: [
    "توسعه‌دهنده فلاتر 📱",
    "متخصص Clean Architecture و BLoC 🏗️",
    "توسعه‌دهنده اپلیکیشن‌های موبایل ⚡",
    "طراح انیمیشن و UI/UX روان 🎨"
  ],

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
      icon: "⚖️",
      badgeEn: "Google Play & App Store",
      badgeFa: "گوگل پلی، اپ استور و بازار",
      uiColor: "#7f00ff",
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
      icon: "🎮",
      badgeEn: "CafeBazaar & Myket",
      badgeFa: "کافه بازار و مایکت",
      uiColor: "#00f2fe",
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
      icon: "🕌",
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
    { name: "Flutter & Dart", category: "mobile", percent: 98, icon: "📱" },
    { name: "BLoC & State Mgmt", category: "architecture", percent: 95, icon: "⚡" },
    { name: "Clean Architecture & MVVM", category: "architecture", percent: 94, icon: "🏗️" },
    { name: "Firebase (Auth, Firestore, Cloud)", category: "backend", percent: 96, icon: "🔥" },
    { name: "REST APIs, WebSockets, Dio", category: "backend", percent: 93, icon: "🌐" },
    { name: "UI/UX & Custom Motion", category: "mobile", percent: 97, icon: "🎨" },
    { name: "Git, GitHub Actions & CI/CD", category: "tools", percent: 90, icon: "🛠️" },
    { name: "Offline Sync (Hive, Isar, Drift)", category: "mobile", percent: 92, icon: "💾" }
  ],

  experience: [
    {
      periodEn: "2023 - Present",
      periodFa: "۱۴۰۲ - تا کنون",
      roleEn: "Senior Flutter Developer",
      roleFa: "توسعه‌دهنده ارشد فلاتر",
      companyEn: "Commercial Products & App Stores",
      companyFa: "توسعه پروژه‌های تجاری و استورها",
      descEn: "Engineered and launched Flutter applications (WeekiLaw on Google Play & App Store, FrameSanj, Mobin) focusing on Clean Architecture, BLoC, and offline database sync.",
      descFa: "طراحی و توسعه اپلیکیشن‌های فلاتر با Clean Architecture و BLoC شامل پلتفرم حقوقی ویکیلا (منتشر شده در گوگل پلی، اپ استور، بازار و مایکت)، فریم‌سنج و مبین."
    },
    {
      periodEn: "2020 - 2023",
      periodFa: "۱۳۹۹ - ۱۴۰۲",
      roleEn: "Flutter & Firebase Developer",
      roleFa: "متخصص توسعه فلاتر و فایربیس",
      companyEn: "Mobile Development Teams",
      companyFa: "شرکت‌های توسعه نرم‌افزار موبایل",
      descEn: "Built mobile backends, custom design systems, social feeds (Instagram Clone), and e-commerce shopping workflows (Nike Store).",
      descFa: "پیاده‌سازی فروشگاه‌های آنلاین مدرن، شبیه‌سازی سیستم‌های اجتماعی با پشتیبانی Real-time فایربیس و دیزاین سیستم‌های اختصاصی."
    }
  ],

  projects: [
    {
      id: "weekilaw",
      titleEn: "WeekiLaw Legal Platform",
      titleFa: "پلتفرم خدمات حقوقی ویکیلا (WeekiLaw)",
      category: "mobile",
      icon: "⚖️",
      descEn: "AI-Powered Legal Services Platform connecting citizens with verified lawyers + AI legal assistant + lawyer smart office. Published on Google Play Store, Apple App Store, CafeBazaar & Myket.",
      descFa: "پلتفرم جامع خدمات حقوقی و دستیار هوش مصنوعی حقوقی برای ارتباط شهروندان با وکلا و دفتر کار هوشمند. منتشر شده در گوگل پلی استور (Google Play)، اپ استور (App Store)، کافه‌بازار و مایکت.",
      tags: ["Google Play", "App Store", "Flutter", "AI Assistant", "REST API", "BLoC", "Firebase"],
      github: "https://github.com/AchkanDev/weekilaw-showcase",
      live: "https://cafebazaar.ir/app/com.pqlian.weekilaw"
    },
    {
      id: "framesanj",
      titleEn: "FrameSanj Analyzer",
      titleFa: "اپلیکیشن فریم‌سنج (FrameSanj)",
      category: "mobile",
      icon: "🎮",
      descEn: "Offline PC game compatibility & FPS estimator — compare CPU/GPU/RAM specs with minimum/recommended game requirements.",
      descFa: "اپلیکیشن سنجش سخت‌افزار و تخمین فریم ریت (FPS) بازی‌های کامپیوتری به‌صورت آفلاین همراه با تحلیل سیستم.",
      tags: ["Flutter", "Dart", "Offline DB", "UI/UX", "Clean Arch"],
      github: "https://github.com/AchkanDev/gamegauge-showcase",
      live: "https://cafebazaar.ir/app/com.example.game_guge"
    },
    {
      id: "mobin",
      titleEn: "Mobin Spiritual App",
      titleFa: "اپلیکیشن مذهبی و سبک زندگی مبین",
      category: "mobile",
      icon: "🕌",
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
      icon: "🔤",
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
      icon: "💡",
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
      icon: "👟",
      descEn: "Premium e-commerce Flutter app with fluid hero animations, cart management, and payment checkout flow.",
      descFa: "اپلیکیشن فروشگاهی فوق‌العاده شیک با انیمیشن‌های روان، مدیریت سبد خرید و مراحل سفارش‌گیری.",
      tags: ["Flutter", "UI/UX", "State Management", "Animations"],
      github: "https://github.com/AchkanDev/Nike_store",
      live: "https://github.com/AchkanDev/Nike_store"
    }
  ]
};
