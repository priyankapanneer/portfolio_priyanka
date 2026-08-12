document.addEventListener('DOMContentLoaded', () => {
  // Initialize Feather Icons
  feather.replace();

  // Load Data
  document.getElementById('nav-initial').textContent = portfolioData.name.charAt(0);
  document.getElementById('hero-name').innerHTML = `<span class="block">${portfolioData.name.split(' ')[0]}</span> <span class="text-gradient block mt-2">${portfolioData.name.split(' ').slice(1).join(' ')}</span>`;
  document.getElementById('hero-role').textContent = portfolioData.shortRole;
  document.getElementById('hero-resume').href = portfolioData.resumeUrl;
  
  // document.getElementById('about-text').textContent = portfolioData.aboutText;
  
  document.getElementById('contact-email-link').href = `mailto:${portfolioData.email}`;
  document.getElementById('contact-email').textContent = portfolioData.email;
  
  document.getElementById('current-year').textContent = new Date().getFullYear();
  document.getElementById('footer-name').textContent = portfolioData.name;
  document.getElementById('mobile-name').textContent = portfolioData.name.split(' ')[0];
  
  const heroImage = document.getElementById('hero-image');
  if (heroImage && portfolioData.profileImage) {
    heroImage.src = portfolioData.profileImage;
  }

  // Socials
  const createSocialLink = (url, icon) => {
    return `<a href="${url}" target="_blank" rel="noreferrer" class="p-3 rounded-full bg-primary/10 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all border border-border/50 hover:shadow-[0_0_15px_hsl(var(--primary-glow))]"><i data-feather="${icon}" class="w-5 h-5"></i></a>`;
  };
  
  const socialsHtml = `
    ${createSocialLink(portfolioData.socials.github, 'github')}
    ${createSocialLink(portfolioData.socials.linkedin, 'linkedin')}
    <a href="mailto:${portfolioData.email}" class="p-3 rounded-full bg-primary/10 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all border border-border/50 hover:shadow-[0_0_15px_hsl(var(--primary-glow))]"><i data-feather="mail" class="w-5 h-5"></i></a>
  `;
  document.getElementById('hero-socials').innerHTML = socialsHtml;
  document.getElementById('contact-socials').innerHTML = socialsHtml;
  document.getElementById('mobile-socials').innerHTML = socialsHtml;

  // Experience (Split-Layout Timeline)
  const renderTimeline = (dataArray, containerId) => {
    const html = dataArray.map((item, index) => {
      const isEven = index % 2 !== 0; // 0 is first item (odd visually)
      return `
      <div class="relative flex flex-col md:flex-row justify-between items-center group mb-24 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}">
        
        <!-- Date side -->
        <div class="hidden md:flex w-[45%] ${isEven ? 'justify-start pl-12' : 'justify-end pr-12'}">
          <span class="text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary/40 drop-shadow-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            ${item.duration}
          </span>
        </div>

        <!-- Timeline Dot -->
        <div class="absolute left-0 md:left-1/2 ml-0 md:-ml-[24px] w-12 h-12 rounded-full border-4 border-background bg-primary/10 text-primary flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary-glow))] z-10 transition-transform group-hover:scale-125 duration-500 backdrop-blur-md">
          <i data-feather="${item.icon || 'star'}" class="w-5 h-5 group-hover:animate-pulse"></i>
        </div>
        
        <!-- Content Card side -->
        <div class="w-full md:w-[45%] pl-16 md:pl-0">
          <div class="hologram-card p-8 rounded-3xl relative overflow-hidden transition-all duration-500 text-left ${isEven ? 'md:text-right' : ''}">
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10">
              <h3 class="font-heading font-bold text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">${item.title || item.degree || ''}</h3>
              <div class="text-muted-foreground font-bold text-sm tracking-widest uppercase mb-4">${item.company || item.institution || ''}</div>
              ${item.description ? `<p class="text-base text-muted-foreground mb-6 leading-relaxed">${item.description}</p>` : ''}
              ${item.score ? `<p class="text-base text-primary font-bold mb-6">${item.score}</p>` : ''}
              ${item.technologies ? `
              <div class="flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''} mb-4">
                ${item.technologies.map(tech => `<span class="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-foreground/5 backdrop-blur-sm text-foreground rounded border border-foreground/10 group-hover:border-primary/50 transition-colors">${tech}</span>`).join('')}
              </div>` : ''}
              ${item.link ? `
              <div class="mt-4 ${isEven ? 'flex justify-end' : ''}">
                <a href="${item.link}" target="_blank" class="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-lg border border-primary/30 transition-all hover:shadow-[0_0_15px_hsl(var(--primary-glow))]">
                  <span>View Credential</span>
                  <i data-feather="external-link" class="w-4 h-4"></i>
                </a>
              </div>
              ` : ''}
              <!-- Mobile Date -->
              <div class="mt-6 md:hidden text-primary font-bold opacity-70">${item.duration}</div>
            </div>
          </div>
        </div>
      </div>
    `}).join('');
    document.getElementById(containerId).innerHTML = html;
  };

  renderTimeline(portfolioData.experience, 'experience-container');

  if (portfolioData.education && portfolioData.education.length > 0) {
    renderTimeline(portfolioData.education, 'education-container');
  }

  // Projects (Ultra Compact Style with Premium Aesthetics)
  const projHtml = portfolioData.projects.map(proj => `
    <div class="glass-card p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden transform hover:-translate-y-1 bg-background/30 backdrop-blur-md">
      
      <!-- Animated Left Neon Border -->
      <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary-glow opacity-50 group-hover:opacity-100 group-hover:w-2 transition-all duration-300"></div>

      <!-- Hover Glow Background -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <!-- Title and Tech -->
      <div class="relative z-10 flex flex-col gap-2 pl-4">
        <h3 class="font-heading font-extrabold text-lg text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary-glow transition-all duration-300 tracking-wide">${proj.title}</h3>
        <div class="flex flex-wrap gap-2 mt-1">
          ${proj.technologies.slice(0,4).map(tech => `<span class="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full shadow-[0_0_10px_rgba(var(--primary-glow),0.1)] group-hover:border-primary/50 group-hover:shadow-[0_0_15px_hsl(var(--primary-glow))] transition-all duration-300">${tech}</span>`).join('')}
        </div>
      </div>
      
      <!-- GitHub Action Button -->
      <div class="relative z-10 flex-shrink-0 pr-2 mt-2 sm:mt-0">
        <a href="${proj.githubUrl}" target="_blank" class="flex items-center justify-center space-x-2 text-foreground group-hover:text-primary transition-all duration-300 px-4 py-2.5 rounded-xl border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary-glow))] relative overflow-hidden" title="View Source Code">
          <div class="absolute inset-0 bg-primary/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
          <i data-feather="github" class="w-5 h-5 relative z-10"></i>
          <span class="text-xs font-bold uppercase tracking-widest relative z-10 hidden sm:block">Code</span>
        </a>
      </div>
    </div>
  `).join('');
  document.getElementById('projects-container').innerHTML = projHtml;

  // Skills
  const createSkillCard = (title, icon, skills) => `
    <div class="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div class="flex items-center space-x-3 mb-6 relative z-10">
        <div class="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_hsl(var(--primary-glow))]">
          <i data-feather="${icon}" class="w-5 h-5"></i>
        </div>
        <h3 class="font-heading font-bold text-xl text-foreground">${title}</h3>
      </div>
      
      <div class="flex flex-col gap-4 relative z-10">
        ${skills.map(s => `
          <div class="skill-item">
            <div class="flex justify-between items-end mb-1.5">
              <span class="text-xs font-bold text-muted-foreground uppercase tracking-widest">${s.name}</span>
              <span class="text-[10px] font-mono font-bold text-primary">${s.level}%</span>
            </div>
            <div class="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden border border-foreground/5 relative">
              <div class="skill-progress h-full bg-gradient-to-r from-primary to-secondary-glow rounded-full shadow-[0_0_15px_hsl(var(--primary-glow))] w-0 transition-all duration-[1500ms] ease-out absolute left-0 top-0" data-level="${s.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  document.getElementById('skills-container').innerHTML = `
    ${createSkillCard('Languages', 'code', portfolioData.skills.languages)}
    ${createSkillCard('AI & Data Science', 'cpu', portfolioData.skills.ai_ml)}
    ${createSkillCard('Web Development', 'layout', portfolioData.skills.web_dev)}
    ${createSkillCard('Databases', 'database', portfolioData.skills.databases)}
    ${createSkillCard('Tools', 'tool', portfolioData.skills.tools)}
  `;

  // Certifications
  if (portfolioData.certifications && portfolioData.certifications.length > 0) {
    // Sort certificates from recent to old
    const sortedCerts = [...portfolioData.certifications].sort((a, b) => {
      const parseCertDate = (dateStr) => {
        const monthRegex = /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/ig;
        const yearRegex = /\d{4}/g;
        const months = { "jan": 0, "feb": 1, "mar": 2, "apr": 3, "may": 4, "jun": 5, "jul": 6, "aug": 7, "sep": 8, "oct": 9, "nov": 10, "dec": 11 };
        
        const years = [...dateStr.matchAll(yearRegex)];
        const m = [...dateStr.matchAll(monthRegex)];
        
        let year = years.length > 0 ? parseInt(years[years.length - 1][0]) : 0;
        let month = m.length > 0 ? months[m[m.length - 1][0].toLowerCase()] : 0;
        
        return year * 100 + month;
      };
      return parseCertDate(b.date) - parseCertDate(a.date);
    });

    const renderCerts = (certsArr) => {
      return certsArr.map(cert => `
        <div class="hologram-card relative rounded-2xl overflow-hidden group border border-border hover:border-primary/50 transition-all duration-500 h-full flex flex-col bg-background/40">
          
          <!-- Left accent bar -->
          <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-primary/80 shadow-[0_0_15px_hsl(var(--primary-glow))] group-hover:bg-primary transition-colors"></div>

          <div class="relative z-10 flex flex-col h-full p-6 md:p-8 ml-2">
            <!-- Header: Icon & Date -->
            <div class="flex justify-between items-start mb-6">
              <div class="flex items-center gap-3">
                <i data-feather="award" class="w-5 h-5 text-primary group-hover:animate-pulse"></i>
                <span class="text-[10px] font-mono tracking-[0.2em] text-primary uppercase">CERTIFICATE</span>
              </div>
              <div class="text-right">
                <span class="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">Date Issued</span>
                <span class="font-mono text-xs font-bold text-foreground bg-foreground/10 px-2 py-1 rounded border border-foreground/10">${cert.date}</span>
              </div>
            </div>
            
            <!-- Body: Title & Issuer -->
            <div class="mb-8">
              <h3 class="font-heading font-bold text-xl md:text-2xl text-foreground mb-3 leading-tight uppercase group-hover:text-primary transition-colors">${cert.title}</h3>
              <p class="font-mono text-xs text-muted-foreground uppercase tracking-widest border-l-2 border-primary/50 pl-3">${cert.issuer}</p>
            </div>
            
            <!-- Bottom Ticket Footer -->
            <div class="mt-auto pt-6 border-t border-dashed border-foreground/20 flex items-center justify-center">
              
              <!-- Action Button -->
              <a href="${cert.link}" target="_blank" class="w-full flex items-center justify-center space-x-2 px-4 h-10 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary-glow))] transition-all font-bold text-xs uppercase tracking-wider">
                <span>View Credential</span>
                <i data-feather="arrow-up-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>
      `).join('');
    };

    const container = document.getElementById('certifications-container');
    const INITIAL_COUNT = 6;
    
    // Render initial
    container.innerHTML = renderCerts(sortedCerts.slice(0, INITIAL_COUNT));
    
    // Add Show More button if needed
    if (sortedCerts.length > INITIAL_COUNT) {
      const btnWrapper = document.createElement('div');
      btnWrapper.className = "flex justify-center mt-12 w-full col-span-1 md:col-span-2";
      btnWrapper.innerHTML = `
        <button id="show-more-certs" class="px-8 py-3 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-bold uppercase tracking-widest hover:shadow-[0_0_20px_hsl(var(--primary-glow))] flex items-center space-x-2 group">
          <span>Show All Certifications</span>
          <i data-feather="chevron-down" class="w-4 h-4 group-hover:translate-y-1 transition-transform"></i>
        </button>
      `;
      container.appendChild(btnWrapper);
      
      document.getElementById('show-more-certs').addEventListener('click', (e) => {
        container.innerHTML = renderCerts(sortedCerts);
        feather.replace(); // re-init icons for newly added elements
      });
    }
  }

  // Additional Info
  if (portfolioData.additionalInfo && portfolioData.additionalInfo.length > 0) {
    const addInfoHtml = portfolioData.additionalInfo.map((info) => `
      <div class="hologram-card p-8 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex flex-col items-center text-center h-full">
        <!-- Background Gradient -->
        <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div class="relative z-10 flex flex-col h-full w-full">
          <!-- Icon -->
          <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/30 shadow-[0_0_20px_hsl(var(--primary-glow))] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
            <i data-feather="${info.icon || 'star'}" class="w-8 h-8 group-hover:animate-pulse"></i>
          </div>
          <!-- Title -->
          <h3 class="font-heading font-bold text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">${info.title}</h3>
          <!-- Description -->
          <p class="text-muted-foreground leading-relaxed text-sm mb-6 flex-grow">${info.description}</p>
          
          ${info.link ? `
          <!-- Link -->
          <a href="${info.link}" target="_blank" class="inline-flex items-center space-x-2 text-sm font-bold text-primary hover:text-primary-foreground hover:bg-primary px-6 py-2.5 rounded-full border border-primary/20 transition-all hover:shadow-[0_0_15px_hsl(var(--primary-glow))] mt-auto mx-auto w-max bg-foreground/5">
            <span>${info.linkText || 'Learn More'}</span>
            <i data-feather="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
          </a>
          ` : ''}
        </div>
      </div>
    `).join('');
    document.getElementById('additional-container').innerHTML = addInfoHtml;
  }

  feather.replace();

  // Tabs Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  const activateTab = (targetId) => {
    tabBtns.forEach(b => {
      b.classList.remove('active', 'text-primary');
      b.classList.add('text-muted-foreground');
    });
    tabContents.forEach(c => c.classList.remove('active'));
    
    const activeBtn = Array.from(tabBtns).find(b => b.dataset.tab === targetId || b.dataset.target === targetId);
    if(activeBtn) {
      activeBtn.classList.remove('text-muted-foreground');
      activeBtn.classList.add('active', 'text-primary');
    }
    document.getElementById(targetId).classList.add('active');
    
    // Trigger Skill Animations
    if(targetId === 'tab-skills') {
      setTimeout(() => {
        document.querySelectorAll('.skill-progress').forEach(bar => {
          bar.style.width = bar.getAttribute('data-level') + '%';
        });
      }, 100);
    } else {
      // Reset so they animate again next time
      document.querySelectorAll('.skill-progress').forEach(bar => {
        bar.style.width = '0%';
      });
    }
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab || btn.dataset.target;
      activateTab(target);
    });
  });

  // Navigation Logic (Fixing the bug)
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.dataset.tab;
      
      // Close mobile menu if open
      document.getElementById('mobile-menu').classList.add('hidden');
      
      // Scroll to journey section
      document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
      
      // Activate the specific tab
      activateTab(targetTab);
    });
  });

  // Mobile Menu Logic
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinksNormal = document.querySelectorAll('.mobile-link:not(.nav-link)');

  mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
  closeMenuBtn.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  mobileLinksNormal.forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));

  // Navbar Scroll
  const navbar = document.getElementById('navbar').firstElementChild;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('glass-nav');
      navbar.classList.remove('bg-transparent', 'border-transparent', 'shadow-none');
    } else {
      navbar.classList.remove('glass-nav');
      navbar.classList.add('bg-transparent', 'border-transparent', 'shadow-none');
    }
  });

  // Theme Toggles
  const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
  
  // Set default theme to dark if not set, or read from local storage
  if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
  } else if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
  } else {
      document.documentElement.classList.remove('dark');
  }

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  themeToggles.forEach(toggle => {
    if (toggle) toggle.addEventListener('click', toggleTheme);
  });


});
