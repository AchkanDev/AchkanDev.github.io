/* ==========================================================================
   Antigravity CV/Portfolio Main Application Logic - Ashkan Abavi
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'fa'; // Default to Farsi as requested

  // Initialize Particles & Terminal
  new ParticleEngine('particles-canvas');
  new TerminalShell('terminal-body', 'terminal-input');

  // Elements
  const langToggleBtn = document.getElementById('lang-toggle');
  const typewriterElement = document.getElementById('typewriter');
  const skillsGrid = document.getElementById('skills-grid');
  const projectsGrid = document.getElementById('projects-grid');
  const timelineContainer = document.getElementById('timeline-container');
  const statsContainer = document.getElementById('stats-container');
  const simTabsContainer = document.getElementById('sim-tabs-container');
  const phoneScreen = document.getElementById('phone-screen');
  const contactForm = document.getElementById('contact-form');
  const heroCvBtn = document.getElementById('hero-btn-cv');

  // Typewriter Variables
  let typewriterIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typewriterTimeout = null;

  // Language Switcher Function
  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

    if (langToggleBtn) {
      langToggleBtn.innerHTML = lang === 'fa' ? '<span>🌐</span> English' : '<span>🌐</span> فارسی';
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
    restartTypewriter();
  }

  // Typewriter Effect
  function typeEffect() {
    const titles = currentLang === 'fa' ? PORTFOLIO_DATA.typewriterTitlesFa : PORTFOLIO_DATA.typewriterTitlesEn;
    const currentTitle = titles[typewriterIndex % titles.length];

    if (isDeleting) {
      typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    let delta = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentTitle.length) {
      delta = 1800; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typewriterIndex++;
      delta = 500;
    }

    typewriterTimeout = setTimeout(typeEffect, delta);
  }

  function restartTypewriter() {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    charIndex = 0;
    isDeleting = false;
    typewriterIndex = 0;
    typeEffect();
  }

  // Render Stats
  function renderStats() {
    if (!statsContainer) return;
    statsContainer.innerHTML = PORTFOLIO_DATA.stats.map(s => `
      <div class="stat-card reveal">
        <div class="stat-number">${s.number}</div>
        <div class="stat-label">${currentLang === 'fa' ? s.labelFa : s.labelEn}</div>
      </div>
    `).join('');
    initScrollReveal();
  }

  // Render Live Mobile Simulator Tabs & Screen
  function renderSimulatorTabs() {
    if (!simTabsContainer || !phoneScreen) return;
    
    simTabsContainer.innerHTML = PORTFOLIO_DATA.appSimulators.map((sim, idx) => `
      <div class="sim-tab-card ${idx === 0 ? 'active' : ''}" data-sim-id="${sim.id}">
        <div class="sim-tab-header">
          <div class="sim-tab-title"><span>${sim.icon}</span> ${sim.title}</div>
          <span class="sim-tab-badge">${sim.badge}</span>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">${sim.subtitle}</div>
      </div>
    `).join('');

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

  function loadMockupScreen(sim) {
    const data = sim.mockupData;
    phoneScreen.innerHTML = `
      <div class="screen-app-bar">
        <span class="screen-title">${data.screenTitle}</span>
        <span style="font-size: 0.8rem;">60 FPS</span>
      </div>
      <div class="screen-content">
        ${Object.entries(data).filter(([k]) => k !== 'screenTitle').map(([key, val]) => `
          <div class="screen-widget-card">
            <div style="color: var(--text-dim); font-size: 0.72rem; text-transform: uppercase;">${key}</div>
            <div style="color: #fff; font-weight: 600; margin-top: 2px;">${val}</div>
          </div>
        `).join('')}
        <div class="fps-meter-badge">
          <span>⚡</span> Flutter Impeller Engine • 60 FPS
        </div>
      </div>
    `;
  }

  // Render Skills
  function renderSkills(category = 'all') {
    if (!skillsGrid) return;
    const filtered = category === 'all' 
      ? PORTFOLIO_DATA.skills 
      : PORTFOLIO_DATA.skills.filter(s => s.category === category);

    skillsGrid.innerHTML = filtered.map(skill => `
      <div class="skill-card reveal">
        <div class="skill-info">
          <span class="skill-name"><span>${skill.icon}</span> ${skill.name}</span>
          <span class="skill-percent">${skill.percent}%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${skill.percent}%;"></div>
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

  // Render Projects
  function renderProjects(category = 'all') {
    if (!projectsGrid) return;
    const filtered = category === 'all' 
      ? PORTFOLIO_DATA.projects 
      : PORTFOLIO_DATA.projects.filter(p => p.category === category);

    projectsGrid.innerHTML = filtered.map(project => `
      <div class="project-card reveal">
        <div class="project-banner">
          <span class="project-banner-icon">${project.icon}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${currentLang === 'fa' ? project.titleFa : project.titleEn}</h3>
          <p class="project-desc">${currentLang === 'fa' ? project.descFa : project.descEn}</p>
          <div class="project-tags">
            ${project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.github}" target="_blank" class="btn btn-secondary btn-sm">GitHub</a>
            <a href="${project.live}" target="_blank" class="btn btn-primary btn-sm">${currentLang === 'fa' ? 'کافه بازار / لینک' : 'Live / Store'}</a>
          </div>
        </div>
      </div>
    `).join('');
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
    toast.innerHTML = `<span>✅</span> ${message}`;
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

  // Initialize
  setLanguage('fa');
});
