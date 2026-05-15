/* ══ THEME TOGGLE ══ */
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Initialize Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeIcon.textContent = '☀️';
} else {
  document.documentElement.removeAttribute('data-theme');
  themeIcon.textContent = '🌙';
}

themeBtn.addEventListener('click', () => {
  if (document.documentElement.hasAttribute('data-theme')) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeIcon.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.textContent = '☀️';
  }
});


/* ══ DATA STRUCTURES ══ */
const skills = [
  { icon: '🐍', name: 'Python', desc: 'Clean, effective Python code for problem solving, automation, and data work. Getting better every day.' },
  { icon: '🧠', name: 'Problem Solving', desc: 'Strong analytical thinking and practical approach to breaking down complex problems — in code and real life.' },
  { icon: '🎤', name: 'Communication', desc: 'Confident communicator and public speaker. Clarity in communication is as important as technical skills.' },
  { icon: '☁️', name: 'Google Cloud', desc: 'Participated in Google Cloud Jams. Learning cloud concepts and tools that power modern applications.' },
  { icon: '🤝', name: 'Team Collaboration', desc: 'Experience in cross-functional student teams. Comfortable taking initiative or playing a support role.' },
  { icon: '🔧', name: 'Electronics & Hardware', desc: 'Built real hardware projects combining circuitry and logic. Interested in where software meets physical systems.' }
];

const projects = [
  { title: 'To-Do List App', tagClass: 'tag-beginner', tag: 'Beginner', desc: 'A clean, functional productivity app built to solidify programming fundamentals — data structures, state management, and UI logic.', tags: ['Python', 'Logic', 'UI Basics'] },
  { title: 'Bike Side Stand Alert', tagClass: 'tag-intermediate', tag: 'Intermediate', desc: 'A safety-focused hardware project that detects when a bike\'s side stand is down and alerts the rider. Combines electronics with practical impact.', highlight: 'Appreciated by teachers & faculty', tags: ['DEE Project', 'Electronics', 'Safety Tech'] },
  { title: 'UniSphere', tagClass: 'tag-progress', tag: 'In Progress', desc: 'A college campus social media platform for student connectivity. Built with a team of 4, focused on authentic community features.', highlight: 'Team of 4 · Student community platform', tags: ['Web Dev', 'Team Project', 'Social Platform'] },
  { title: 'Tricycle EV Bike', tagClass: 'tag-intermediate', tag: 'Completed', desc: 'A robust, cost-effective electric tricycle engineered by an 11-member team. Designed specifically for efficient local transport and resilience in tough conditions, showcasing practical mechanical and electrical integration on a limited budget.', highlight: 'Team of 11 · Cost-Effective EV', tags: ['Hardware', 'EV Tech', 'Team Project'] }
];

const achievements = [
  { icon: '☁️', title: 'Google Cloud Jams', desc: 'Participated in Google Cloud Skill Boost Jams — hands-on cloud labs exploring GCP tools, infrastructure, and real-world cloud use cases.' },
  { icon: '🏅', title: 'Nirmaan 4.0 Hackathon', desc: 'Took part in the Nexus of Evolution Hackathon under the Code Crafters category, building innovative solutions within tight deadlines.' },
  { icon: '🏆', title: 'DEE Project Recognition', desc: 'The Bike Side Stand Alert project was recognized by faculty for its safety relevance and practical engineering approach.' },
  { icon: '🤝', title: 'Team Lead – UniSphere', desc: 'Leading a 4-person team building a campus social platform — learning product thinking and real team dynamics.' }
];

const testimonials = [
  { quote: 'Utkarsh is an exceptionally bright and curious learner. His analytical skills in mathematics seamlessly translate into his programming logic. He is always eager to explore new concepts and consistently brings great energy to the classroom.', avatar: 'https://ui-avatars.com/api/?name=Satish+Gajbhiv&background=EBF4FF&color=2563EB&bold=true', name: 'Dr. Satish Gajbhiv', role: 'Mathematics Teacher' },
  { quote: 'Working with Utkarsh is a fantastic experience. He brings a perfect mix of technical curiosity and chill vibes to the team. His ability to pick up new frameworks and write clean, scalable code under pressure is truly impressive.', avatar: 'https://ui-avatars.com/api/?name=Team+Fantastic+4&background=F3F4F6&color=4B5563&bold=true', name: 'Team Fantastic 4', role: 'Teammate & Peer' },
  { quote: 'During the Nirmaan 4.0 Hackathon, Utkarsh demonstrated immense dedication. He tackled challenges head-on and showcased brilliant problem-solving abilities. A very promising data science student with a bright future ahead.', avatar: 'https://ui-avatars.com/api/?name=Kasturi+Ghuge&background=FEF3C7&color=D97706&bold=true', name: 'Kasturi Ghuge', role: 'Nirmaan 4.0 Hackathon' }
];

const certs = {
  cert1: { category: 'cloud', ribbon: 'Featured', img: 'assets/cloud.jpg', issuer: 'Google Developer Groups', title: 'Google Cloud Study Jams Program 2026', date: '2026', credUrl: '#', desc: 'Actively participated and successfully completed all pathways under Google Cloud Study Jams Program 2026.', tags: ['GCP', 'Cloud'] },
  cert2: { category: 'hackathon', ribbon: 'Winner', ribbonStyle: 'background:#8b5cf6;', img: 'assets/hackathon.jpg', issuer: 'Google Developer Groups', title: 'Nirmaan 4.0 Nexus of Evolution Hackathon', date: '2026', credUrl: '#', desc: 'Actively participated in Nirmaan 4.0 Hackathon in the CODE CRAFTERS category.', tags: ['Hackathon', 'Code Crafters'] },
  cert3: { category: 'python', img: 'assets/python1.jpeg', issuer: 'Cisco Networking Academy', title: 'Python Essentials 1', date: '30 Mar 2026', credUrl: '#', desc: 'Successfully completed Python Essentials 1.', tags: ['Python', 'Programming'] },
  cert4: { category: 'python', img: 'assets/python2.jpeg', issuer: 'Cisco Networking Academy', title: 'Python Essentials 2', date: '08 Apr 2026', credUrl: '#', desc: 'Successfully completed Python Essentials 2.', tags: ['Python', 'Programming'] },
  cert5: { category: 'skills', img: 'assets/ibm.jpeg', issuer: 'IBM SkillsBuild', title: 'Career Management Essentials', date: '18 Mar 2026', credUrl: '#', desc: 'Successfully satisfied the requirements for Career Management Essentials.', tags: ['Career Management'] }
};

/* ══ RENDER DATA ══ */
document.addEventListener('DOMContentLoaded', () => {
  const byId = id => document.getElementById(id);
  if (byId('skillsGrid')) byId('skillsGrid').innerHTML = skills.map(s => `<div class="skill-card base-card reveal"><div class="skill-icon">${s.icon}</div><div class="skill-name">${s.name}</div><div class="skill-desc">${s.desc}</div></div>`).join('');
  if (byId('projectsGrid')) byId('projectsGrid').innerHTML = projects.map(p => `<div class="project-card base-card reveal"><div class="project-header"><div class="project-title">${p.title}</div><span class="tag ${p.tagClass}">${p.tag}</span></div><p class="project-desc">${p.desc}</p>${p.highlight ? `<div class="project-highlight">${p.highlight}</div>` : ''}<div class="project-footer">${p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div></div>`).join('');
  if (byId('certsGrid')) byId('certsGrid').innerHTML = Object.entries(certs).map(([id, c]) => `<div class="cert-card base-card reveal" data-category="${c.category}" onclick="openModal('${id}')"><div class="cert-thumb"><img src="${c.img}" alt="${c.title}" class="cert-thumb-img"/>${c.ribbon ? `<span class="cert-ribbon" ${c.ribbonStyle ? `style="${c.ribbonStyle}"` : ''}>${c.ribbon}</span>` : ''}</div><div class="cert-body"><div class="cert-issuer">${c.issuer}</div><div class="cert-title">${c.title}</div><div class="cert-date">📅 ${c.date}</div><div class="cert-tags">${c.tags.map(t => `<span class="cert-tag">${t}</span>`).join('')}</div></div><div class="cert-footer"><span class="cert-link">View Details →</span></div></div>`).join('');
  if (byId('achGrid')) byId('achGrid').innerHTML = achievements.map(a => `<div class="ach-card base-card reveal"><div class="ach-icon">${a.icon}</div><div><div class="ach-title">${a.title}</div><div class="ach-desc">${a.desc}</div></div></div>`).join('');
  if (byId('testiSlider')) byId('testiSlider').innerHTML = testimonials.map(t => `<div class="testi-card"><div class="testi-bubble base-card"><span class="quote-mark">“</span>${t.quote}<span class="quote-mark right">”</span></div><div class="testi-author"><div class="testi-avatar"><img src="${t.avatar}" alt="${t.name}"></div><div class="testi-name">${t.name}</div><div class="testi-role">${t.role}</div></div></div>`).join('');
  
  // Re-trigger scroll reveal for newly injected elements
  document.querySelectorAll('.reveal').forEach((el,i)=>{ el.dataset.delay=(i%4)*90; new IntersectionObserver(e=>{ if(e[0].isIntersecting){ setTimeout(()=>el.classList.add('visible'),parseInt(el.dataset.delay)); } },{threshold:0.1}).observe(el); });
});

/* ══ MODAL ══ */
function openModal(id){
  const cert = certs[id];
  if(!cert) return;
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  title.innerText = cert.title;
  body.innerHTML = `
    <div class="modal-img-container"><img src="${cert.img}" alt="${cert.title}" /></div>
    <div class="modal-issuer">${cert.issuer}</div>
    <div class="modal-cert-title">${cert.title}</div>
    <div class="modal-meta">
      <div class="modal-meta-item"><span class="modal-meta-label">Year</span><span class="modal-meta-value">${cert.date}</span></div>
    </div>
    <p class="modal-desc">${cert.desc}</p>
    <div style="display:flex;flex-wrap:wrap;gap:.4rem;">${cert.tags.map(t=>`<span class="cert-tag">${t}</span>`).join('')}</div>
    <div class="modal-actions">
      ${cert.credUrl!=='#'?`<a href="${cert.credUrl}" target="_blank" class="btn btn-primary btn-sm">View Credential →</a>`:`<span class="btn btn-outline btn-sm" style="display:none"></span>`}
    </div>`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function openResumeModal() {
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  title.innerText = "Resume - Utkarsh Tapise";
  body.innerHTML = `
    <div style="height: 65vh; width: 100%; position: relative;">
        <iframe src="assets/Utkarsh_Tapise_Resume.pdf" width="100%" height="100%" style="border: none; border-radius: 8px;"></iframe>
    </div>
    <div style="margin-top: 1rem; display: flex; justify-content: flex-end;">
        <a href="assets/Utkarsh_Tapise_Resume.pdf" download="Utkarsh_Tapise_Resume.pdf" class="btn btn-primary">Download Resume</a>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e){ if(e.target===document.getElementById('modalOverlay')) closeModalDirect(); }
function closeModalDirect(){ document.getElementById('modalOverlay').classList.remove('open'); document.body.style.overflow=''; }
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModalDirect(); });

/* ══ CERT FILTER */
document.querySelectorAll('.cert-filter').forEach(btn=>{
  btn.addEventListener('click',function(){
    document.querySelectorAll('.cert-filter').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');
    const f=this.dataset.filter;
    document.querySelectorAll('.cert-card').forEach(card=>{
      if(f==='all'||card.dataset.category===f){ card.classList.remove('hidden'); }
      else{ card.classList.add('hidden'); }
    });
  });
});

/* ══ NAV */
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
hamburger.addEventListener('click',()=>{ hamburger.classList.toggle('open'); mobileMenu.classList.toggle('open'); });
function closeMobile(){ hamburger.classList.remove('open'); mobileMenu.classList.remove('open'); }
document.addEventListener('click',e=>{ if(!hamburger.contains(e.target)&&!mobileMenu.contains(e.target)) closeMobile(); });

/* ══ SCROLL PROGRESS + NAV SHADOW */
let isScrolling = false;
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      const st = window.scrollY, dh = document.documentElement.scrollHeight - window.innerHeight;
      const progress = document.getElementById('scroll-progress');
      if (progress) progress.style.width = (st / dh * 100) + '%';
      const navbar = document.getElementById('navbar');
      if (navbar) navbar.classList.toggle('scrolled', st > 20);
      isScrolling = false;
    });
    isScrolling = true;
  }
});

/* ══ ACTIVE NAV */
const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('.nav-links a');
new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) navLinks.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));
  });
},{threshold:.4}).observe&&sections.forEach(s=>new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) navLinks.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id)); });
},{threshold:.4}).observe(s));

/* ══ SCROLL REVEAL */
new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{ if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('visible'),(parseInt(e.target.dataset.delay||0))); new IntersectionObserver(()=>{}).disconnect(); } });
},{threshold:0.1}).observe&&document.querySelectorAll('.reveal').forEach((el,i)=>{ el.dataset.delay=(i%4)*90; new IntersectionObserver(e=>{ if(e[0].isIntersecting){ setTimeout(()=>el.classList.add('visible'),parseInt(el.dataset.delay)); } },{threshold:0.1}).observe(el); });

/* ══ COUNTER ANIMATION */
function animateCounter(el){
  const target=parseInt(el.dataset.target); let cur=0;
  const step=Math.max(1,Math.ceil(target/40));
  const t=setInterval(()=>{ cur=Math.min(cur+step,target); el.textContent=cur; if(cur>=target)clearInterval(t); },40);
}
new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting){ e.target.querySelectorAll('.counter').forEach(animateCounter); } }); },{threshold:.5}).observe(document.querySelector('.hero-stats')||document.body);

/* ══ FORM ══ */
const contactForm = document.getElementById('contactForm');
if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if user replaced the KEY
    const accessKey = contactForm.querySelector('input[name="access_key"]').value;
    if(accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        alert("Action Required: Please get your FREE Web3Forms Access Key and paste it into index.html as per the instructions!");
        return;
    }

    const formData = new FormData(contactForm);
    
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(async (response) => {
      if (response.status == 200) {
        document.getElementById('formStatus').classList.add('success');
        contactForm.reset();
        setTimeout(()=>document.getElementById('formStatus').classList.remove('success'),5000);
      } else {
        alert("Something went wrong! Try again.");
      }
    })
    .catch(error => {
      alert("Error submitting form.");
    });
  });
}

/* ══ TESTIMONIALS SLIDER ══ */
const testiSlider = document.getElementById('testiSlider');
const testiDots = document.querySelectorAll('.testi-dot');
if (testiSlider && testiDots.length) {
  testiSlider.addEventListener('scroll', () => {
    const cardWidth = testiSlider.querySelector('.testi-card').offsetWidth;
    const scrollLeft = testiSlider.scrollLeft;
    // Calculate which card is most visible
    const index = Math.round(scrollLeft / cardWidth);
    testiDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  });

  testiDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const cards = testiSlider.querySelectorAll('.testi-card');
      if(cards[i]) {
        testiSlider.scrollTo({ left: cards[i].offsetLeft - testiSlider.offsetLeft, behavior: 'smooth' });
      }
    });
  });
}
