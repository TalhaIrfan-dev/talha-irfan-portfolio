(() => {
  "use strict";

  const state = {
    theme: "cyan",
    skill: "all",
    filter: "all",
  };

  const skillData = {
    all: {
      title: "All categories",
      groups: [
        ["Programming Languages", ["Java", "C++", "Python", "SQL", "HTML", "CSS", "JavaScript"]],
        ["Frameworks & Technologies", ["JavaFX", "FXML", "Java Swing", "JDBC", "Maven", "Node.js", "Express.js", "EJS", "Spring Boot · learning"]],
        ["Data & AI", ["MySQL", "Relational Database Design", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Streamlit"]],
        ["Engineering & Core Concepts", ["Object-Oriented Programming", "Data Structures & Algorithms", "Software Design", "UML", "Requirements Engineering", "Software Testing", "Problem Solving"]],
        ["Tools & Platforms", ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "MySQL Workbench", "Figma"]],
      ],
    },
    languages: { title: "Programming Languages", groups: [["Languages", ["Java", "C++", "Python", "SQL", "HTML", "CSS", "JavaScript"]]] },
    frameworks: { title: "Frameworks & Technologies", groups: [["Java & Desktop", ["JavaFX", "FXML", "Java Swing", "JDBC", "Maven"]], ["Web & Backend", ["Node.js", "Express.js", "EJS", "Spring Boot · learning"]]] },
    data: { title: "Data, Databases & AI/ML", groups: [["Data & Databases", ["MySQL", "Relational Database Design", "CRUD Operations", "Pandas", "NumPy"]], ["AI / ML", ["scikit-learn", "Matplotlib", "Streamlit", "Regression", "Classification", "Market Segmentation"]]] },
    engineering: { title: "Software Engineering", groups: [["Core", ["OOP", "DSA", "Software Design", "UML", "Requirements Engineering", "Software Testing", "Problem Solving"]]] },
    tools: { title: "Tools & Platforms", groups: [["Development", ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "MySQL Workbench", "Figma"]]] },
  };

  const projectData = {
    browser: {
      kicker: "JAVA / JAVAFX / DSA",
      title: "JavaFX Web Browser",
      image: "assets/projects/javafx-browser.svg",
      description: "A JavaFX-based desktop web browser built as a DSA project, using custom data structures and MySQL for persistent user, history and bookmark data.",
      tech: ["Java", "JavaFX", "FXML", "MySQL", "JDBC", "Maven"],
      features: ["Multi-tab browsing and tab management", "Stack-based back/forward navigation", "Queue-based browsing history", "Doubly linked list for bookmarks", "User management and persistent storage"],
      links: [["View on GitHub", "https://github.com/TalhaIrfan-dev/Javafx-web-browser"]],
    },
    autodeal: {
      kicker: "JAVA / SWING / MYSQL",
      title: "AutoDeal Management System",
      image: "assets/projects/auto-deal.svg",
      description: "A desktop automobile dealership management application focused on customer management, vehicle inventory and sales/deal workflows.",
      tech: ["Java", "Java Swing", "JDBC", "MySQL", "OOP"],
      features: ["Customer management", "Vehicle inventory management", "Sales/deal workflows", "GUI built with Java Swing", "CRUD operations through JDBC and MySQL"],
      links: [["View on GitHub", "https://github.com/TalhaIrfan-dev/AutoDeal-Management-System"]],
    },
    alumni: {
      kicker: "NODE / EXPRESS / EJS",
      title: "Alumni Management System",
      image: "assets/projects/alumni-management.svg",
      description: "A web-based alumni records system with search, profile viewing, editing and persistent database storage.",
      tech: ["Node.js", "Express.js", "EJS", "MySQL", "JavaScript"],
      features: ["Alumni directory and search", "Profile details and editing", "MySQL database persistence", "Server-rendered EJS pages", "CRUD-focused web workflow"],
      links: [["View on GitHub", "https://github.com/TalhaIrfan-dev/Alumni_Management_System-Web_Engineering_Lab_Project"]],
    },
    resale: {
      kicker: "PYTHON / MACHINE LEARNING",
      title: "Car Resale Value & Market Segmentation",
      image: "assets/projects/car-resale.svg",
      description: "A machine learning lab system for predicting car resale prices, classifying vehicle condition, checking price fairness and exploring market segments with a Streamlit dashboard.",
      tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Streamlit", "Matplotlib"],
      features: ["Resale price prediction", "Condition classification", "Fair-price checking around a ±10% band", "Market segmentation", "Interactive dashboard"],
      links: [["View GitHub profile", "https://github.com/TalhaIrfan-dev"]],
    },
    showroom: {
      kicker: "HTML / CSS / JAVASCRIPT",
      title: "Luxury Car Showroom",
      image: "assets/projects/luxury-showroom.svg",
      description: "A responsive frontend project designed around interactive vehicle showcases, modern sections and polished styling.",
      tech: ["HTML", "CSS", "JavaScript"],
      features: ["Responsive layout", "Interactive vehicle showcases", "Gallery-style presentation", "Service sections", "Custom visual styling"],
      links: [["View on GitHub", "https://github.com/TalhaIrfan-dev/luxury-car-showroom-website"]],
    },
    rental: {
      kicker: "C++ / FILE HANDLING",
      title: "Vehicle Management & Renting System",
      image: "assets/projects/vehicle-rental.svg",
      description: "A console-based C++ application for vehicle inventory and customer rental operations using file handling for persistent data.",
      tech: ["C++", "File Handling", "Data Management"],
      features: ["Vehicle inventory management", "Customer rental operations", "Persistent file storage", "Structured programming", "Problem-solving practice"],
      links: [["View on GitHub", "https://github.com/TalhaIrfan-dev/Vehicle-Management-and-Renting-System"]],
    },
    agriculture: {
      kicker: "WEB / RULE-BASED",
      title: "Digital Agriculture Recommender",
      image: "assets/projects/agriculture.svg",
      description: "A rule-based web decision-support project for agricultural recommendations and software engineering documentation.",
      tech: ["HTML", "Web Development", "Rule-Based Logic"],
      features: ["Crop recommendation", "Soil suitability analysis", "Seasonal demand insights", "Disease-treatment guidance", "Rule-driven decision support"],
      links: [["View on GitHub", "https://github.com/TalhaIrfan-dev/Rule-based-agriculture-recommendation-system"]],
    },
  };

  const skillIconMap = {
    "Java": "java.svg",
    "C++": "cpp.svg",
    "Python": "python.svg",
    "SQL": "sql.svg",
    "HTML": "html5.svg",
    "CSS": "css3.svg",
    "JavaScript": "javascript.svg",
    "JavaFX": "javafx.svg",
    "FXML": "fxml.svg",
    "Java Swing": "java.svg",
    "JDBC": "jdbc.svg",
    "Maven": "maven.svg",
    "Node.js": "nodejs.svg",
    "Express.js": "express.svg",
    "EJS": "express.svg",
    "Spring Boot · learning": "spring-boot.svg",
    "MySQL": "mysql.svg",
    "Relational Database Design": "database.svg",
    "CRUD Operations": "crud.svg",
    "Pandas": "pandas.svg",
    "NumPy": "numpy.svg",
    "scikit-learn": "sklearn.svg",
    "Matplotlib": "matplotlib.svg",
    "Streamlit": "streamlit.svg",
    "Regression": "regression.svg",
    "Classification": "classification.svg",
    "Market Segmentation": "market-segmentation.svg",
    "Object-Oriented Programming": "oop.svg",
    "Data Structures & Algorithms": "dsa.svg",
    "Software Design": "system-design.svg",
    "UML": "uml.svg",
    "Requirements Engineering": "requirements.svg",
    "Software Testing": "testing.svg",
    "Problem Solving": "problem-solving.svg",
    "OOP": "oop.svg",
    "DSA": "dsa.svg",
    "Git": "git.svg",
    "GitHub": "github.svg",
    "IntelliJ IDEA": "intellij.svg",
    "VS Code": "vscode.svg",
    "MySQL Workbench": "mysql.svg",
    "Figma": "figma.svg",
  };

  const skillIconLabel = {
    "Java": "Java logo", "C++": "C++ logo", "Python": "Python logo", "SQL": "SQL icon",
    "HTML": "HTML5 logo", "CSS": "CSS3 logo", "JavaScript": "JavaScript logo",
    "JavaFX": "JavaFX logo", "FXML": "FXML icon", "Java Swing": "Java logo", "JDBC": "JDBC icon",
    "Maven": "Maven icon", "Node.js": "Node.js logo", "Express.js": "Express.js logo", "EJS": "Express.js logo",
    "Spring Boot · learning": "Spring Boot logo", "MySQL": "MySQL logo", "Relational Database Design": "Database icon",
    "CRUD Operations": "CRUD icon", "Pandas": "Pandas icon", "NumPy": "NumPy icon", "scikit-learn": "scikit-learn icon",
    "Matplotlib": "Matplotlib icon", "Streamlit": "Streamlit icon", "Regression": "Regression icon",
    "Classification": "Classification icon", "Market Segmentation": "Market segmentation icon",
    "Object-Oriented Programming": "OOP icon", "Data Structures & Algorithms": "DSA icon",
    "Software Design": "System design icon", "UML": "UML icon", "Requirements Engineering": "Requirements icon",
    "Software Testing": "Testing icon", "Problem Solving": "Problem solving icon", "OOP": "OOP icon",
    "DSA": "DSA icon", "Git": "Git logo", "GitHub": "GitHub logo", "IntelliJ IDEA": "IntelliJ IDEA icon",
    "VS Code": "Visual Studio Code icon", "MySQL Workbench": "MySQL logo", "Figma": "Figma logo"
  };

  function getSkillIcon(item) {
    return skillIconMap[item] || "analytics.svg";
  }

  function getSkillIconAlt(item) {
    return skillIconLabel[item] || `${item} icon`;
  }

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  function safeStorageGet(key) { try { return localStorage.getItem(key); } catch { return null; } }
  function safeStorageSet(key, value) { try { localStorage.setItem(key, value); } catch {} }

  function updateThemeMenu() {
    $$('.theme-option').forEach(option => option.classList.toggle('selected', option.dataset.themeChoice === state.theme));
  }

  function setTheme(theme) {
    state.theme = theme;
    document.body.dataset.theme = theme;
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    const themeColors = { cyan: '#080F20', amber: '#1A1208', blue: '#F7F9FC', 'light-amber': '#FCFAF6' };
    if (metaTheme) metaTheme.setAttribute('content', themeColors[theme] || '#080F20');
    safeStorageSet('talha-portfolio-theme', theme);
    updateThemeMenu();
  }

  function closeThemeMenu() {
    const menu = $('#themeMenu');
    const button = $('#themeButton');
    menu?.classList.remove('open');
    button?.setAttribute('aria-expanded', 'false');
  }

  function toggleThemeMenu() {
    const menu = $('#themeMenu');
    const button = $('#themeButton');
    if (!menu || !button) return;
    const isOpen = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  }

  function setMobileNav(open) {
    const nav = $('#mobileNav');
    const button = $('#menuButton');
    if (!nav || !button) return;
    nav.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }

  function renderSkillDetails(key) {
    const data = skillData[key] || skillData.all;
    const detail = $('#skillDetail');
    const title = $('#skillDetailTitle');
    const groups = $('#skillGroups');
    if (!detail || !title || !groups) return;
    state.skill = key;
    title.textContent = data.title;
    groups.innerHTML = data.groups.map(([name, items]) => `
      <article class="skill-group">
        <div class="skill-group-heading">
          <h4>${name}</h4>
          <span class="skill-group-count">${items.length} ${items.length === 1 ? 'skill' : 'skills'}</span>
        </div>
        <div class="skill-logo-grid">
          ${items.map(item => `
            <div class="skill-logo-tile" title="${item}">
              <span class="skill-logo-frame ${item === 'GitHub' ? 'github-logo' : ''}">
                <img class="skill-logo-img ${item === 'GitHub' ? 'github' : ''}" src="assets/skills/${getSkillIcon(item)}" alt="${getSkillIconAlt(item)}" loading="lazy" decoding="async">
              </span>
              <span class="skill-logo-name">${item}</span>
            </div>`).join('')}
        </div>
      </article>`).join('');
    detail.classList.add('open');
    detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function closeSkillDetails() { $('#skillDetail')?.classList.remove('open'); }

  function applyProjectFilter(filter) {
    state.filter = filter;
    $$('.filter').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));
    $$('#projectsGrid .project-card').forEach(card => {
      const category = card.dataset.category;
      card.classList.toggle('hidden', filter !== 'all' && category !== filter);
    });
  }

  function openProjectModal(key) {
    const data = projectData[key];
    const modal = $('#projectModal');
    if (!data || !modal) return;
    $('#modalKicker').textContent = data.kicker;
    $('#modalTitle').textContent = data.title;
    $('#modalDescription').textContent = data.description;
    const image = $('#modalImage');
    image.src = data.image;
    image.alt = `${data.title} preview`;
    $('#modalTech').innerHTML = data.tech.map(item => `<span>${item}</span>`).join('');
    $('#modalFeatures').innerHTML = data.features.map(item => `<li>${item}</li>`).join('');
    $('#modalLinks').innerHTML = data.links.map(([label, href]) => `<a class="project-btn primary" href="${href}" target="_blank" rel="noreferrer">${label} ↗</a>`).join('');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    $('.modal-close', modal)?.focus();
  }

  function closeProjectModal() {
    const modal = $('#projectModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function openCertificate() {
    const modal = $('#certificateModal');
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    $('.modal-close', modal)?.focus();
  }

  function closeCertificate() {
    const modal = $('#certificateModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function updateScrollUi() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0;
    const progress = $('#progressBar');
    if (progress) progress.style.width = `${percent}%`;
    $('#siteHeader')?.classList.toggle('scrolled', scrollTop > 20);
  }

  function setupReveal() {
    const elements = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -20px 0px' });
    elements.forEach(element => observer.observe(element));
  }

  function setupCertificateScroller() {
    const scroller = $('#certificateScroller');
    if (!scroller) return;

    // Native touch scrolling works automatically. These additions make
    // mouse-wheel and click-drag interactions feel natural on desktop.
    scroller.addEventListener('wheel', event => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const max = scroller.scrollWidth - scroller.clientWidth;
      if (max <= 0) return;
      const atStart = scroller.scrollLeft <= 0;
      const atEnd = scroller.scrollLeft >= max - 1;
      const movingRight = event.deltaY > 0;
      if ((movingRight && atEnd) || (!movingRight && atStart)) return;
      event.preventDefault();
      scroller.scrollLeft += event.deltaY;
    }, { passive: false });

    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    scroller.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') return;
      dragging = true;
      moved = false;
      startX = event.clientX;
      startScroll = scroller.scrollLeft;
      scroller.setPointerCapture?.(event.pointerId);
      scroller.classList.add('dragging');
    });

    scroller.addEventListener('pointermove', event => {
      if (!dragging) return;
      const dx = event.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      scroller.scrollLeft = startScroll - dx;
    });

    const stopDrag = event => {
      if (!dragging) return;
      dragging = false;
      scroller.classList.remove('dragging');
      if (event && scroller.hasPointerCapture?.(event.pointerId)) {
        scroller.releasePointerCapture(event.pointerId);
      }
    };

    scroller.addEventListener('pointerup', stopDrag);
    scroller.addEventListener('pointercancel', stopDrag);
    scroller.addEventListener('mouseleave', () => { if (dragging) stopDrag(); });

    // Keep click-to-open certificate buttons usable after a drag.
    scroller.addEventListener('click', event => {
      if (!moved) return;
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    }, true);

    scroller.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scroller.scrollBy({ left: 230, behavior: 'smooth' });
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scroller.scrollBy({ left: -230, behavior: 'smooth' });
      } else if (event.key === 'Home') {
        event.preventDefault();
        scroller.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (event.key === 'End') {
        event.preventDefault();
        scroller.scrollTo({ left: scroller.scrollWidth, behavior: 'smooth' });
      }
    });
  }

  function setupActiveNav() {
    const sections = $$('main section[id]');
    const links = $$('.desktop-nav a');
    if (!('IntersectionObserver' in window) || !sections.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-42% 0px -52% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }

  function bindEvents() {
    $('#themeButton')?.addEventListener('click', event => { event.stopPropagation(); toggleThemeMenu(); });
    $$('.theme-option').forEach(option => option.addEventListener('click', () => { setTheme(option.dataset.themeChoice); closeThemeMenu(); }));
    document.addEventListener('click', event => {
      const menu = $('#themeMenu');
      const button = $('#themeButton');
      if (menu?.classList.contains('open') && !menu.contains(event.target) && !button?.contains(event.target)) closeThemeMenu();
    });
    $('#menuButton')?.addEventListener('click', () => {
      const nav = $('#mobileNav');
      setMobileNav(!nav?.classList.contains('open'));
    });
    $$('#mobileNav a').forEach(link => link.addEventListener('click', () => setMobileNav(false)));

    $$('.skill-node').forEach(node => node.addEventListener('click', () => renderSkillDetails(node.dataset.skill)));
    $('#closeSkills')?.addEventListener('click', closeSkillDetails);
    $$('.filter').forEach(btn => btn.addEventListener('click', () => applyProjectFilter(btn.dataset.filter)));
    $$('#projectsGrid [data-modal]').forEach(button => button.addEventListener('click', () => openProjectModal(button.dataset.modal)));
    $$('#projectsGrid .image-action').forEach(button => button.addEventListener('click', event => {
      const card = event.currentTarget.closest('.project-card');
      if (card?.dataset.project) openProjectModal(card.dataset.project);
    }));
    $$('[data-close-modal]').forEach(el => el.addEventListener('click', closeProjectModal));
    $('#certificateTrigger')?.addEventListener('click', openCertificate);
    $('.cert-click')?.addEventListener('click', openCertificate);
    $$('[data-close-certificate]').forEach(el => el.addEventListener('click', closeCertificate));
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      closeThemeMenu();
      setMobileNav(false);
      closeProjectModal();
      closeCertificate();
    });
    window.addEventListener('scroll', updateScrollUi, { passive: true });
    window.addEventListener('resize', updateScrollUi);
    $('#year').textContent = String(new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', () => {
    const saved = safeStorageGet('talha-portfolio-theme');
    const validThemes = ['cyan','amber','blue','light-amber'];
    setTheme(validThemes.includes(saved) ? saved : 'cyan');
    bindEvents();
    setupReveal();
    setupActiveNav();
    setupCertificateScroller();
    updateScrollUi();
  });
})();
