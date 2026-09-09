/* ==========================================================================
   Portfolio Application Logic - Ashkan Abavi (AchkanDev)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'fa'; // Default to Farsi

  // Initialize System Architecture Tabs
  initArchitectureTabs();

  // Initialize Ambient Fluid Spotlight
  initAmbientSpotlight();

  // Initialize Live Celestial Stardust Canvas & Interactive Waves
  initLiveAmbientCanvas();

  // Initialize Scroll Reading Progress Laser & Multi-Plane Parallax
  initScrollProgressAndParallax();

  // Initialize 3D Holographic Card Tilt & Specular Glare
  initCardTilt();

  // Initialize Magnetic Button Attraction
  initMagneticButtons();

  // Elements
  const langToggleBtn = document.getElementById('lang-toggle');
  const skillsGrid = document.getElementById('skills-grid');
  const projectsGrid = document.getElementById('projects-grid');
  const timelineContainer = document.getElementById('timeline-container');
  const statsContainer = document.getElementById('stats-container');
  const simTabsContainer = document.getElementById('sim-tabs-container');
  const phoneScreen = document.getElementById('phone-screen');
  const contactForm = document.getElementById('contact-form');
  const heroCvBtn = document.getElementById('hero-btn-cv');

  // Language Switcher Function
  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

    if (langToggleBtn) {
      const globeSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
      langToggleBtn.innerHTML = lang === 'fa' ? `${globeSvg} English` : `${globeSvg} فارسی`;
    }

    // Switch CV PDF Link dynamically according to selected language
    if (heroCvBtn) {
      heroCvBtn.href = lang === 'fa' ? 'cv-fa.pdf' : 'cv-en.pdf';
    }

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        el.textContent = TRANSLATIONS[lang][key];
      }
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        el.placeholder = TRANSLATIONS[lang][key];
      }
    });

    // Re-render Data Dependent Elements
    renderStats();
    renderSimulatorTabs();
    renderSkills('all');
    renderTimeline();
    renderProjects('all');
  }

  // Render Stats
  function renderStats() {
    if (!statsContainer) return;
    statsContainer.innerHTML = PORTFOLIO_DATA.stats.map(s => `
      <div class="stat-card reveal card-tilt">
        <div class="stat-number">${s.number}</div>
        <div class="stat-label">${currentLang === 'fa' ? s.labelFa : s.labelEn}</div>
      </div>
    `).join('');
    initScrollReveal();
  }

  // Render Live Mobile Simulator Tabs & Screen
  function renderSimulatorTabs() {
    if (!simTabsContainer || !phoneScreen) return;
    
    simTabsContainer.innerHTML = PORTFOLIO_DATA.appSimulators.map((sim, idx) => {
      const title = currentLang === 'fa' ? sim.titleFa : sim.titleEn;
      const subtitle = currentLang === 'fa' ? sim.subtitleFa : sim.subtitleEn;
      const badge = currentLang === 'fa' ? sim.badgeFa : sim.badgeEn;
      return `
        <div class="sim-tab-card ${idx === 0 ? 'active' : ''}" data-sim-id="${sim.id}">
          <div class="sim-tab-header">
            <div class="sim-tab-title"><span class="sim-indicator" style="background:${sim.uiColor};"></span> ${title}</div>
            <span class="sim-tab-badge">${badge}</span>
          </div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">${subtitle}</div>
        </div>
      `;
    }).join('');

    // Load initial mockup screen
    loadMockupScreen(PORTFOLIO_DATA.appSimulators[0]);

    // Tab Click Listener
    document.querySelectorAll('.sim-tab-card').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.sim-tab-card').forEach(t => t.classList.remove('active'));
        const card = e.currentTarget;
        card.classList.add('active');
        const simId = card.getAttribute('data-sim-id');
        const targetSim = PORTFOLIO_DATA.appSimulators.find(s => s.id === simId);
        if (targetSim) loadMockupScreen(targetSim);
      });
    });
  }

  let currentDhikrCount = 33;

  function loadMockupScreen(sim) {
    const isFa = currentLang === 'fa';
    let contentHtml = '';

    if (sim.id === 'weekilaw-sim') {
      contentHtml = `
        <div class="screen-app-bar">
          <span class="screen-title">${isFa ? 'دستیار حقوقی ویکیلا' : 'WeekiLaw AI Assistant'}</span>
          <span style="font-size: 0.72rem; color: #10b981; font-weight: 700;">● ${isFa ? '۲۴۰ وکیل آنلاین' : '240 Online'}</span>
        </div>
        <div class="screen-content">
          <div class="chat-bubble-user">
            ${isFa ? 'سلام، لطفاً بند فورس‌ماژور این قرارداد تجاری رو بررسی کن.' : 'Please analyze the force majeure clause in this contract.'}
          </div>
          <div class="chat-bubble-ai">
            <div style="font-size: 0.68rem; color: var(--primary-cyan); margin-bottom: 3px; font-weight:700;">WeekiLaw Legal AI Engine</div>
            ${isFa ? 'بند فورس‌ماژور استاندارد است. ریسک حقوقی: <strong>بسیار کم (ایمن)</strong>.' : 'Clause verified against standard regulations. Legal risk: <strong>Low (Safe)</strong>.'}
          </div>
          <div class="screen-widget-card" style="border-color: rgba(56, 189, 248, 0.25); background: rgba(56, 189, 248, 0.04);">
            <div style="font-size: 0.75rem; font-weight: 700; color: #f8fafc;">${isFa ? 'دفتر کار هوشمند وکلا' : 'Smart Lawyer Office'}</div>
            <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 2px;">${isFa ? 'مدیریت پرونده‌ها، نوبت‌دهی آنلاین و مشاوره صوتی' : 'Case tracking, online booking & audio consults'}</div>
          </div>
          <div class="fps-meter-badge">
            Flutter Impeller • 120 FPS
          </div>
        </div>
      `;
    } else if (sim.id === 'framesanj-sim') {
      contentHtml = `
        <div class="screen-app-bar">
          <span class="screen-title">${isFa ? 'بررسی سخت‌افزار فریم‌سنج' : 'FrameSanj Analyzer'}</span>
          <span style="font-size: 0.72rem; color: var(--primary-cyan); font-family: var(--font-code); font-weight:700;">1080p Ultra</span>
        </div>
        <div class="screen-content">
          <div class="screen-widget-card" style="padding: 8px 10px;">
            <div style="font-size: 0.7rem; color: var(--text-muted);">${isFa ? 'بازی انتخابی:' : 'Target Game:'}</div>
            <div style="font-weight: 700; color: #fff; font-size: 0.82rem;">Cyberpunk 2077 / Witcher 3</div>
          </div>
          <div class="fps-dial-box">
            <div>
              <div style="font-size: 0.68rem; color: var(--text-muted);">${isFa ? 'تخمین فریم ریت' : 'Estimated Performance'}</div>
              <div style="font-size: 0.75rem; color: #10b981; font-weight: 700;">${isFa ? 'سازگار • اجرای روان' : 'Optimal • Smooth 60+'}</div>
            </div>
            <div class="fps-number-glow" id="fps-counter-val">72 FPS</div>
          </div>
          <div class="screen-widget-card">
            <div style="display:flex; justify-content:space-between; font-size:0.7rem; color:var(--text-muted); margin-bottom:4px;">
              <span>CPU: Ryzen 7 / i7</span><span>GPU: RTX 3060</span>
            </div>
            <div class="progress-bar-bg" style="height: 5px;">
              <div class="progress-bar-fill" style="width: 85%;"></div>
            </div>
          </div>
          <button class="dhikr-tap-btn spring-tap" id="btn-benchmark-run" style="background: linear-gradient(135deg, var(--primary-cyan), var(--primary-blue)); font-size:0.75rem;">
            ${isFa ? 'تست مجدد بنچمارک سخت‌افزار' : 'Re-run Hardware Benchmark'}
          </button>
          <div class="fps-meter-badge">
            Offline DB Engine • Zero Latency
          </div>
        </div>
      `;
    } else {
      contentHtml = `
        <div class="screen-app-bar">
          <span class="screen-title">${isFa ? 'اپلیکیشن مبین' : 'Mobin Spiritual App'}</span>
          <span style="font-size: 0.72rem; color: #10b981; font-weight:700;">★ 4.8 Store</span>
        </div>
        <div class="screen-content">
          <div class="fps-dial-box" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.08);">
            <div>
              <div style="font-size: 0.68rem; color: var(--text-muted);">${isFa ? 'قبله‌نمای هوشمند مگنتومتر' : 'Magnetometer Compass'}</div>
              <div style="font-size: 0.85rem; color: #10b981; font-weight: 800;">217° SW</div>
            </div>
            <div style="font-size: 1.4rem;" class="compass-dial">🧭</div>
          </div>
          <div class="screen-widget-card">
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#fff; font-weight:600;">
              <span>${isFa ? 'اذان ظهر: ۱۲:۰۸' : 'Dhuhr: 12:08'}</span>
              <span>${isFa ? 'اذان مغرب: ۱۹:۴۲' : 'Maghrib: 19:42'}</span>
            </div>
          </div>
          <button class="dhikr-tap-btn spring-tap" id="btn-dhikr-increment">
            ${isFa ? 'ذکرشمار روزانه:' : 'Dhikr Counter:'} <strong id="mockup-dhikr-val" style="font-size:0.95rem; margin-right:4px;">${currentDhikrCount} / 100</strong>
          </button>
          <div class="fps-meter-badge">
            1,500+ Active Installs • CafeBazaar
          </div>
        </div>
      `;
    }

    phoneScreen.innerHTML = `
      <div class="phone-status-bar">
        <span>09:41</span>
        <div class="phone-dynamic-island">
          <div class="dynamic-island-dot"></div>
          <span style="font-size: 0.55rem; color: var(--primary-cyan); font-family: var(--font-code);">Flutter 3.x</span>
        </div>
        <span>100%</span>
      </div>
      ${contentHtml}
    `;

    // Add interactivity to phone elements
    const dhikrBtn = document.getElementById('btn-dhikr-increment');
    if (dhikrBtn) {
      dhikrBtn.addEventListener('click', () => {
        currentDhikrCount++;
        const valEl = document.getElementById('mockup-dhikr-val');
        if (valEl) {
          valEl.textContent = `${currentDhikrCount} / 100`;
          valEl.classList.remove('tap-bounce');
          void valEl.offsetWidth; // Trigger reflow for animation replay
          valEl.classList.add('tap-bounce');
        }
      });
    }

    const benchmarkBtn = document.getElementById('btn-benchmark-run');
    if (benchmarkBtn) {
      let isUltra = true;
      benchmarkBtn.addEventListener('click', () => {
        const counterEl = document.getElementById('fps-counter-val');
        if (counterEl) {
          counterEl.textContent = '...';
          setTimeout(() => {
            isUltra = !isUltra;
            counterEl.textContent = isUltra ? '72 FPS' : '88 FPS';
          }, 200);
        }
      });
    }
  }

  // Render Skills
  function renderSkills(category = 'all') {
    if (!skillsGrid) return;
    const isFa = currentLang === 'fa';
    const filtered = category === 'all' 
      ? PORTFOLIO_DATA.skills 
      : PORTFOLIO_DATA.skills.filter(s => s.category === category);

    skillsGrid.innerHTML = filtered.map(skill => `
      <div class="skill-card reveal card-tilt" data-category="${skill.category}">
        <div class="skill-card-top">
          <span class="skill-badge">${skill.badge}</span>
          <h3 class="skill-title">${isFa ? skill.titleFa : skill.titleEn}</h3>
        </div>
        <p class="skill-desc">${isFa ? skill.descFa : skill.descEn}</p>
        <div class="skill-tags">
          ${skill.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
    initScrollReveal();
  }

  // Render Timeline
  function renderTimeline() {
    if (!timelineContainer) return;
    timelineContainer.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
      <div class="timeline-item reveal">
        <div class="timeline-marker"></div>
        <div class="timeline-card">
          <span class="timeline-date">${currentLang === 'fa' ? exp.periodFa : exp.periodEn}</span>
          <h3 class="timeline-role">${currentLang === 'fa' ? exp.roleFa : exp.roleEn}</h3>
          <div class="timeline-company">${currentLang === 'fa' ? exp.companyFa : exp.companyEn}</div>
          <p class="timeline-desc">${currentLang === 'fa' ? exp.descFa : exp.descEn}</p>
        </div>
      </div>
    `).join('');
    initScrollReveal();
  }

  // Render Projects (Featured Case Study + Clean Engineering Grid)
  function renderProjects(category = 'all') {
    if (!projectsGrid) return;
    const isFa = currentLang === 'fa';
    const filtered = category === 'all' 
      ? PORTFOLIO_DATA.projects 
      : PORTFOLIO_DATA.projects.filter(p => p.category === category);

    projectsGrid.innerHTML = filtered.map(project => {
      const title = isFa ? project.titleFa : project.titleEn;
      const desc = isFa ? project.descFa : project.descEn;
      const badge = isFa ? project.badgeFa : project.badgeEn;
      const liveBtnLabel = isFa ? 'مشاهده در استور' : 'Store & Details';

      if (project.featured) {
        const highlights = isFa ? project.highlightsFa : project.highlightsEn;
        const highlightsTitle = isFa ? 'نکات کلیدی معماری و پروداکشن:' : 'Key Architecture Highlights:';
        return `
          <div class="project-card featured reveal card-tilt">
            <div class="featured-left">
              <div class="project-card-top">
                <span class="project-badge">${badge}</span>
                <span class="project-status-dot" title="Active Release"></span>
              </div>
              <h3 class="project-title" style="font-size: 1.45rem; margin-bottom: 0.5rem;">${title}</h3>
              <p class="project-desc">${desc}</p>
              <div class="project-tags" style="margin-bottom: 1.25rem;">
                ${project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
              </div>
              <div class="project-links">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm btn-magnetic">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  GitHub Architecture
                </a>
                <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-magnetic">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  ${liveBtnLabel}
                </a>
              </div>
            </div>
            <div class="featured-right">
              <div style="font-size: 0.82rem; font-weight: 700; color: #f8fafc; margin-bottom: 0.35rem;">${highlightsTitle}</div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.83rem; color: var(--text-muted); padding: 0;">
                ${(highlights || []).map(h => `<li style="display: flex; gap: 0.5rem; align-items: flex-start;"><span style="color: var(--primary-cyan); font-weight: 700;">✓</span> <span>${h}</span></li>`).join('')}
              </ul>
            </div>
          </div>
        `;
      }

      return `
        <div class="project-card reveal card-tilt">
          <div class="project-card-header">
            <div class="project-card-top">
              <span class="project-badge">${badge}</span>
              <span class="project-status-dot" title="Active Release"></span>
            </div>
            <h3 class="project-title">${title}</h3>
          </div>
          <div class="project-body">
            <p class="project-desc">${desc}</p>
            <div class="project-tags">
              ${project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
            </div>
            <div class="project-links">
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm btn-magnetic">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                GitHub
              </a>
              <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-magnetic">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                ${liveBtnLabel}
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
    initScrollReveal();
  }

  // Filter Tabs Event Listeners
  document.querySelectorAll('.skill-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-category');
      renderSkills(cat);
    });
  });

  // Scroll Reveal with Intersection Observer
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // Toast Notification Helper
  window.showToast = function(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.remove(), 4000);
  };

  // Smart Contact Form Submit Handler (Works on file:// and https://)
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const nameInput = document.getElementById('contact-name-input');
      const emailInput = document.getElementById('contact-email-input');
      const msgInput = document.getElementById('contact-msg-input');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = msgInput ? msgInput.value.trim() : '';

      // If browsing as a local file (file://), redirect to mailto cleanly without FormSubmit error page
      if (window.location.protocol === 'file:') {
        e.preventDefault();
        window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
        showToast(TRANSLATIONS[currentLang].contactSuccess);
        contactForm.reset();
      } else {
        // When hosted on web server (https://AchkanDev.github.io), submit normally
        showToast(TRANSLATIONS[currentLang].contactSuccess);
      }
    });
  }

  // Copy Email Button Helper
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      showToast(currentLang === 'fa' ? TRANSLATIONS.fa.emailCopied : TRANSLATIONS.en.emailCopied);
    });
  }

  // Language Switcher Click Event
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'fa' ? 'en' : 'fa');
    });
  }

  // Architecture Showcase Tab Switcher
  function initArchitectureTabs() {
    const archTabs = document.querySelectorAll('.arch-tab-btn');
    archTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        archTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const targetTab = btn.getAttribute('data-arch-tab');
        document.querySelectorAll('.arch-panel').forEach(p => p.classList.remove('active'));
        const targetPanel = document.getElementById(`panel-${targetTab}`);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });
  }

  // Ambient Interactive Cursor Spotlight (LERP Spring Physics - 120 FPS Compositor)
  function initAmbientSpotlight() {
    const spotlight = document.getElementById('ambient-spotlight');
    if (!spotlight) return;

    // Disable pointer tracking on touch devices without fine pointers
    if (window.matchMedia('(hover: none)').matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;
    let isRunning = false;

    // Buttery-smooth Linear Interpolation (LERP) loop
    function render() {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * 0.08;
      currentY += dy * 0.08;

      spotlight.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0)`;

      // Stop RAF when resting to conserve CPU and battery
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    }

    window.addEventListener('pointermove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!spotlight.classList.contains('active')) {
        spotlight.classList.add('active');
      }

      if (!isRunning) {
        isRunning = true;
        requestAnimationFrame(render);
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      spotlight.classList.remove('active');
    });
  }

  // Live Celestial Stardust Canvas & Interactive Shockwaves (120 FPS Fluid Engine)
  function initLiveAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();

    // Luminous starlight palette matching modern dark aesthetic
    const palette = [
      '56, 189, 248',   // Sky Cyan
      '129, 140, 248',  // Soft Indigo
      '14, 165, 233',   // Deep Ocean
      '16, 185, 129',   // Emerald Accent
      '248, 250, 252'   // Pure White Star
    ];

    const isMobile = width < 768;
    const particleCount = isMobile ? 36 : 64;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.012,
        phase: Math.random() * Math.PI * 2,
        color: palette[Math.floor(Math.random() * palette.length)]
      });
    }

    // Dynamic ripples on click/tap
    const ripples = [];
    let pointerX = -9999;
    let pointerY = -9999;
    let pointerActive = false;

    window.addEventListener('pointermove', (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      pointerActive = true;
    }, { passive: true });

    window.addEventListener('pointerleave', () => {
      pointerActive = false;
    });

    // Expand shockwave on click/tap
    window.addEventListener('pointerdown', (e) => {
      if (ripples.length >= 4) ripples.shift();
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: Math.min(width, height) * 0.45,
        speed: 5.2,
        alpha: 0.5
      });
    }, { passive: true });

    let rafId = null;
    let isPaused = false;
    let lastTime = performance.now();

    // Respect tab visibility to ensure ZERO CPU usage in background tabs
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isPaused = true;
        if (rafId) cancelAnimationFrame(rafId);
      } else {
        isPaused = false;
        lastTime = performance.now();
        rafId = requestAnimationFrame(loop);
      }
    });

    function loop(now) {
      if (isPaused) return;

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // 1. Update and draw Shockwave Ripples
      for (let rIdx = ripples.length - 1; rIdx >= 0; rIdx--) {
        const r = ripples[rIdx];
        r.radius += r.speed * (dt * 60);
        r.alpha = 0.5 * (1 - r.radius / r.maxRadius);

        if (r.radius >= r.maxRadius || r.alpha <= 0.01) {
          ripples.splice(rIdx, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${r.alpha.toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // 2. Update and draw Celestial Stardust
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Soft natural drift
        p.x += p.vx * (dt * 60);
        p.y += p.vy * (dt * 60);

        // Smooth boundary wrapping
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;

        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        // Interactive Pointer Gravity / Repulsion
        if (pointerActive) {
          const dx = p.x - pointerX;
          const dy = p.y - pointerY;
          const distSq = dx * dx + dy * dy;
          const maxDist = 160;
          if (distSq < maxDist * maxDist && distSq > 1) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / maxDist) * 0.8;
            p.x += (dx / dist) * force * 2.2;
            p.y += (dy / dist) * force * 2.2;
          }
        }

        // Wavefront push from ripples
        for (let j = 0; j < ripples.length; j++) {
          const r = ripples[j];
          const rx = p.x - r.x;
          const ry = p.y - r.y;
          const distToR = Math.sqrt(rx * rx + ry * ry);
          if (Math.abs(distToR - r.radius) < 30 && distToR > 1) {
            p.x += (rx / distToR) * 1.6;
            p.y += (ry / distToR) * 1.6;
          }
        }

        // Breathing Alpha Modulation
        const breath = 0.55 + 0.45 * Math.sin((now * 0.0018) * (p.pulseSpeed * 50) + p.phase);
        const currentAlpha = Math.max(0, Math.min(1, p.baseAlpha * breath));

        // Draw glowing particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${currentAlpha.toFixed(3)})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(loop);
      }
    }

    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(loop);
    } else {
      loop(performance.now());
    }
  }

  // Scroll Progress Laser Beam & Multi-Plane Parallax Depth
  function initScrollProgressAndParallax() {
    const progressBar = document.getElementById('scroll-progress-bar');
    const gridPattern = document.querySelector('.ambient-grid-pattern');
    const aurora1 = document.querySelector('.aurora-1');
    const aurora2 = document.querySelector('.aurora-2');

    let ticking = false;

    function onScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Laser Reading Beam
      if (progressBar && maxScroll > 0) {
        const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
        progressBar.style.transform = `scaleX(${progress.toFixed(4)})`;
      }

      // Parallax Shifts on Background Blueprint Grid
      if (gridPattern) {
        gridPattern.style.transform = `translate3d(0, ${(scrollY * 0.06).toFixed(1)}px, 0)`;
      }
      if (aurora1) {
        aurora1.style.marginTop = `${(scrollY * 0.04).toFixed(1)}px`;
      }
      if (aurora2) {
        aurora2.style.marginTop = `${(scrollY * -0.03).toFixed(1)}px`;
      }

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    onScroll();
  }

  // 3D Holographic Card Tilt & Specular Glare (Linear / Apple TV Style)
  function initCardTilt() {
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) return;

    let activeCard = null;

    document.addEventListener('pointerover', (e) => {
      const card = e.target.closest('.card-tilt');
      if (card && card !== activeCard) {
        activeCard = card;
        activeCard.style.transition = 'transform 0.08s ease-out, box-shadow 0.3s ease';
      }
    }, { passive: true });

    document.addEventListener('pointermove', (e) => {
      if (!activeCard) return;
      if (!activeCard.contains(e.target)) {
        resetCard();
        return;
      }

      const rect = activeCard.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const normX = (mouseX / rect.width) - 0.5;
      const normY = (mouseY / rect.height) - 0.5;

      // Clamped rotation angle for professional restraint (+/- 5.5 deg)
      const tiltX = -normY * 5.5;
      const tiltY = normX * 5.5;

      activeCard.style.setProperty('--mouse-x', `${mouseX.toFixed(1)}px`);
      activeCard.style.setProperty('--mouse-y', `${mouseY.toFixed(1)}px`);
      activeCard.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-4px) scale3d(1.01, 1.01, 1.01)`;
    }, { passive: true });

    document.addEventListener('pointerout', (e) => {
      if (activeCard && !activeCard.contains(e.relatedTarget)) {
        resetCard();
      }
    }, { passive: true });

    function resetCard() {
      if (!activeCard) return;
      activeCard.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease';
      activeCard.style.transform = '';
      activeCard = null;
    }
  }

  // Magnetic Buttons (Apple VisionOS Spring Magnetics)
  function initMagneticButtons() {
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) return;

    let activeBtn = null;

    document.addEventListener('pointerover', (e) => {
      const btn = e.target.closest('.btn-magnetic');
      if (btn && btn !== activeBtn) {
        activeBtn = btn;
        activeBtn.style.transition = 'transform 0.1s ease-out, background-color var(--transition-fast), border-color var(--transition-fast)';
      }
    }, { passive: true });

    document.addEventListener('pointermove', (e) => {
      if (!activeBtn) return;
      if (!activeBtn.contains(e.target)) {
        resetBtn();
        return;
      }

      const rect = activeBtn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.28;
      const deltaY = (e.clientY - centerY) * 0.28;

      // Restrain magnetic travel to maximum +/- 8px
      const clampedX = Math.max(-8, Math.min(8, deltaX));
      const clampedY = Math.max(-8, Math.min(8, deltaY));

      activeBtn.style.transform = `translate3d(${clampedX.toFixed(1)}px, ${clampedY.toFixed(1)}px, 0)`;
    }, { passive: true });

    document.addEventListener('pointerout', (e) => {
      if (activeBtn && !activeBtn.contains(e.relatedTarget)) {
        resetBtn();
      }
    }, { passive: true });

    function resetBtn() {
      if (!activeBtn) return;
      activeBtn.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color var(--transition-fast), border-color var(--transition-fast)';
      activeBtn.style.transform = '';
      activeBtn = null;
    }
  }

  // Initialize
  setLanguage('fa');
});
