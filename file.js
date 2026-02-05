
// --- Simple i18n ---
const I18N = {
  en: {
    "nav.about":"About",
    "nav.research":"Research",
    "nav.news":"News",
    "nav.publications":"Publications",
    "nav.researchers":"Researchers",
    "nav.contact":"Contact",
    "hero.title":"Human‑Centered AI for Education and Health",
    "hero.tagline":"We conduct rigorous research and engineer production systems in AI, cybersecurity, education technology, and healthcare.",
    "hero.meet":"View Publications",
    "hero.meet2":"View Updates",
    "hero.meet1":"Meet our Researchers",
    "ui.contact_us":"Contact us",
    "ui.back_to_top":"Back to top",
    "contact.title":"Contact Axonyra",
    "contact.subtitle":"We’ll respond at",
    "contact.name_label":"Your name",
    "contact.email_label":"Your email",
    "contact.subject_label":"Subject",
    "contact.message_label":"Message",
    "contact.send":"Send",
    "contact.name_ph":"Full name",
    "contact.email_ph":"you@example.com",
    "contact.subject_ph":"How can we help?",
    "contact.message_ph":"Write your message...",
    "status.success":"Success",
    "status.sent":"Your message has been sent.",
    "researcher.name":"Name",
    "researcher.role":"Role",
    "researcher.overview":"Overview",
    "researcher.cv":"Experience / CV",
    "researcher.contact":"Researcher Contact",
    "researcher.email":"Email",
    "researcher.phone":"Phone"

  },
  de: {
    "nav.about":"Über uns",
    "nav.research":"Forschung",
    "nav.news":"Neuigkeiten",
    "nav.publications":"Publikationen",
    "nav.researchers":"Forschende",
    "nav.contact":"Kontakt",
    "hero.title":"Menschenzentrierte KI für Bildung und Gesundheit",
    "hero.tagline":"Wir betreiben rigorose Forschung und entwickeln produktionsreife Systeme in KI, Cybersicherheit, Bildungstechnologie und Gesundheitswesen.",
    "hero.meet":"Unser Team kennenlernen",
    "ui.contact_us":"Kontakt",
    "ui.back_to_top":"Nach oben",
    "contact.title":"Kontakt Exonyra",
    "contact.subtitle":"Wir antworten an",
    "contact.name_label":"Ihr Name",
    "contact.email_label":"Ihre E‑Mail",
    "contact.subject_label":"Betreff",
    "contact.message_label":"Nachricht",
    "contact.send":"Senden",
    "contact.name_ph":"Vollständiger Name",
    "contact.email_ph":"sie@beispiel.de",
    "contact.subject_ph":"Wobei können wir helfen?",
    "contact.message_ph":"Ihre Nachricht…",
    "status.success":"Erfolg",
    "status.sent":"Ihre Nachricht wurde gesendet.",
    "researcher.name":"Name",
    "researcher.role":"Rolle",
    "researcher.overview":"Überblick",
    "researcher.cv":"Erfahrung / Lebenslauf",
    "researcher.contact":"Kontakt der Forschenden",
    "researcher.email":"E‑Mail",
    "researcher.phone":"Telefon"
    
  }
};

function setLangAttr(lang){
  document.documentElement.setAttribute('lang', lang === 'de' ? 'de' : 'en');
}

function applyTranslations(lang){
  const dict = I18N[lang] || I18N.en;
  // data-i18n innerText
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(key && dict[key]) el.textContent = dict[key];
  });
  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(key && dict[key]) el.setAttribute('placeholder', dict[key]);
  });
  setLangAttr(lang);
  localStorage.setItem('lang', lang);
  // Update language selector if present
  const sel = document.getElementById('langSelect');
  if(sel) sel.value = lang;
}

function initI18N(){
  const sel = document.getElementById('langSelect');
  const lang = localStorage.getItem('lang') || 'en';
  if(sel){
    sel.addEventListener('change', (e)=> applyTranslations(e.target.value));
  }
  applyTranslations(lang);
}


// ===== Helpers =====
const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => Array.from(p.querySelectorAll(s));


// ===== Data =====
const RESEARCH_AREAS = [
  { name: 'AI', desc: 'Foundation models, alignment, evaluation.', img: 'images/AI.jpg', link: 'https://www.athenic.com/?utm_source=revleads&utm_medium=referral&utm_campaign=ai-platforms' },
  { name: 'Cybersecurity', desc: 'Adversarial ML, privacy, secure ML ops.', img: 'images/cyber.jpg', link: 'https://thehackernews.com/'},
  { name: 'Education', desc: 'Personalized learning, assessment integrity.', img: 'images/edu.jpg', link: 'https://www.midwestteachersinstitute.org/special-education-ai-tools/' },
  { name: 'Health', desc: 'Clinical NLP, imaging, federated learning.', img: 'images/MD.jpg', link: 'https://brightinsight.com/'},
];

const NEWS = [
  { id:'n1', title: 'Presented at AI in Healthcare 2025', date: '2025-06-20', cover: 'images/conf.jpg', blurb: 'We shared results on robust clinical NLP and safety evaluation.', body: 'At AI in Healthcare 2025, our team presented methods for evaluating clinical NLP robustness under distribution shift and privacy constraints. The talk covered real-world deployments and lessons learned.', link: 'https://www.tandemhealth.ai/de?utm_term=KI%20im%20Gesundheitswesen&utm_campaign=de_ms_gs_gen_exact-phrase_20250704_x&utm_source=ms&utm_medium=cpc&hsa_acc=3580844898&hsa_cam=22751350058&hsa_grp=1179777886563047&hsa_ad=&hsa_src=o&hsa_tgt=kwd-73736547003112:loc-72&hsa_kw=KI%20im%20Gesundheitswesen&hsa_mt=p&hsa_net=adwords&hsa_ver=3&msclkid=527a8e22be2f1f7eedf9e6f29167bde7',  btnText: 'View Presentation' },
  { id:'n2', title: 'International Bussiness Management', date: '2025-04-05', cover: 'images/tech-lab.jpg', blurb: 'Launching a joint lab on education integrity and assessment.', body: 'Axonyra and International business management are collaborating on detection and mitigation of LLM-assisted academic misconduct and on trustworthy assessment tools that support educators.', link:'https://research.ibm.com/labs', btnText: 'View Labs' },
  { id:'n3', title: 'Open‑sourced red‑teaming dataset', date: '2025-02-11', cover: 'images/source.jpg', blurb: 'We released a benchmark for LLM security testing.', body: 'The dataset contains adversarial prompts and annotated model responses across safety domains, enabling reproducible stress testing of LLM systems.', link:'https://www.springeropen.com/', btnText: 'View Dataset' }
];


const PUBLICATIONS = [
  { id: 'p1', title: 'Vulnerabilities of AI in Cybersecurity', year: 2025, authors: 'Shahabuddin Shahid', venue: 'International Journal of scientific and Engineering Research', area:'AI', cover: 'images/Research 1.jpg', link:'https://www.ijser.in/abstract.php?paperid=SE25604130052'},
  { id: 'p2', title: 'AI-Driven Methods and Applications in Preventive Healthcare', year: 2026, authors: 'Shahabuddin Shahid', venue: 'Frontiers in Digital Health', area:'Health', cover: 'images/Research 2.jpg', link:'#' },
  { id: 'p3', title: 'Generativ AI in Critical thinking and Problem Solving in Higher Education', year: 2026, authors: 'Shahabuddin Shahid, Mahjabin Shahid', venue: 'International Journal of Educational Technology in Higher Education', area:'Education', cover: 'images/Research 4.jpg', link:'https://www.springeropen.com/collections/AIHE' },
  { id: 'p4', title: 'Challenges and Limitations of Multimodal Large Language Models', year: 2026, authors: 'Shahabuddin Shahid', venue: 'IEEE Acess', area:'Cybersecurity', cover: 'images/Research 5.png', link:'#'},
  { id: 'p5', title: 'Sucidial Ideation among People with Depression in Mental Hospital, Kabul-Afghanistan', year: 2021, authors: 'Mahjabin Shahid, Akehsan Dahlan', venue: 'Environment Behaviour Proceedings Journal', area:'Health', cover: 'images/Research 3.png',link:'https://www.researchgate.net/publication/350635635_Suicidal_Ideation_among_People_with_Depression_in_Mental_Hospital_Kabul-Afghanistan'},
  { id: 'p6', title: 'Telemedicine in Afghanistan: Implementation Outcomesn, and Future Directions in a Resource Constrained Setting', year: 2026, authors: 'Samera Ali, Mahjabin Shahid', venue: 'The New England Journal of Medicine', area:'Health', cover: 'images/Research 6.png', link:'#' },
];




const RESEARCHERS = [
  { 
    id:'r1',
    name:'Mahjabin Shahid', role:'University Lecturer & CMO of Axonyra', focus:['Medical Education','Pediatrics', 'Healthcare Innovation'],
    bio:'Combines clinical practice with academic teaching and research, advancing medical education and evidence-based care.',
    photo:'images/CMO.jpg',
    cv:'#',
    pubs:['p5','p3', 'p6'],
    affiliations:['Axonyra Research (2026—Present)','UiTM Malaysia, Master of Health Science (2016—2018)', 'Bachelor of Medical (2012—2018)'],
    experience:[
      { role:'University Lecturer & General Surgeon', org:'Kabul Medical University', years:'2025—present' },
      { role:'Research Fellow', org:'University of Virginia (UVA) School of Medicine', years:'2024—present' }
    ],
    email:'shahid@Axonyra.com', phone:'+1 (703) 906-5773'
  },
  { 
    id:'r2',
    name:'Shahabuddin Shahid', role:'Founder & CEO of Axonyra', focus:['Computer Science','Cybersecurity', 'Artificial Intelligence'],
    bio:'Applied ML scientist specializing in AI alignment, cybersecurity, and trustworthly system.',
    photo:'images/CEO.JPEG',
    cv:'CV/Shahid.pdf',
    pubs:['p1','p2','p3','p4'],
    affiliations:['Axonyra Research (2026—Present)','Cisco Networking Academy (Partner Lab)', 'IEEE Member'],
    experience:[
      { role:'Junior Reseaercher', org:'Axonyra', years:'2026—present' },
      { role:'Computer Science Student', org:'Technische üniversität Berlin', years:'2026—Present' }
    ],
    email:'shahid@Axonyra.com', phone:'+49 17 777 72891'
  },
  { 
    id:'r3',
    name:'Linda Ney', role:'Clinical Researcher & CTO of Axonyra', focus:['Medical Innovation','Education','Artificial Intelligence'],
    bio:'Clinical Researcher exploring medical innovation, education, and AI; builds reliable evaluation frameworks for LLMs.',
    photo:'images/CTO.jpg',
    cv:'#',
    pubs:[],
    affiliations:['Axonyra Research (2026—Present)','University of fribourg (Alumni)'],
    experience:[
      { role:'Clinical Researcher', org:'Axonyra', years:'2026—present' },
      { role:'Medical Doctor', org:'University of fribourg', years:'2020—2025' }
    ],
    email:'lind@exonyra.com', phone:'+49 157 8XXXX'
  },
];



const PLANS = [
  { quarter:'Q4 2025', items:['🚀 Healthcare AI toolkit v1.0','🎓 Fellowship for early‑career researchers','📊 Benchmark on robust clinical NLP'] },
  { quarter:'Q1 2026', items:['🔓 Open‑source red‑teaming datasets','🏥 Hospital FL pilot expansion','🌍 Berlin AI symposium'] },
];


// ===== Utilities =====
const byPubId = id => PUBLICATIONS.find(p => p.id === id);

// ===== Renderers =====
function renderResearch(){
  $('#researchCards').innerHTML = RESEARCH_AREAS.map(r => `
    <a href="${r.link}" target="_blank" rel="noopener noreferrer" 
       class="panel" style="display:block; text-decoration:none; color:inherit;">
      <img src="${r.img}" alt="${r.name}" class="pub-cover" loading="lazy">
      <h3>${r.name}</h3>
      <p class="muted">${r.desc}</p>
    </a>`).join('');
}


function renderNews(){
  $('#newsGrid').innerHTML = NEWS.map(n => `
    <article class="panel">
      <img src="${n.cover}" alt="${n.title}" class="pub-cover" loading="lazy">
      <div class="tiny muted">${new Date(n.date).toLocaleDateString()}</div>
      <h3>${n.title}</h3>
      <p class="muted">${n.blurb}</p>
      <div class="cta-row"><button class="btn small" data-article="${n.id}">Read more</button></div>
    </article>`).join('');
  $$('#newsGrid [data-article]').forEach(btn => btn.addEventListener('click', () => openArticle(btn.dataset.article)));
}

function renderPublications(){
  const years = Array.from(new Set(PUBLICATIONS.map(p=>p.year))).sort((a,b)=>b-a);
  $('#pubYear').innerHTML = '<option value="All">All years</option>' + years.map(y=>`<option value="${y}">${y}</option>`).join('');

  const apply = ()=>{
    const q = $('#pubSearch').value.trim().toLowerCase();
    const y = $('#pubYear').value;
    const a = $('#pubArea').value;
    const list = PUBLICATIONS.filter(p=>{
      const qok = q ? (p.title.toLowerCase().includes(q) || p.authors.toLowerCase().includes(q)) : true;
      const yok = y === 'All' ? true : p.year === Number(y);
      const aok = a === 'All' ? true : p.area === a;
      return qok && yok && aok;
    }).sort((A,B)=>B.year-A.year);

    $('#pubGrid').innerHTML = list.map(p=>`
      <article class="panel">
        <img src="${p.cover}" alt="${p.title}" class="pub-cover" loading="lazy">
        <div class="tiny muted">${p.year} • ${p.venue} • ${p.area}</div>
        <h3>${p.title}</h3>
        <p class="muted">${p.authors}</p>
        ${p.link 
          ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" 
                class="tiny" style="color:var(--blue); display:inline-block; margin-top:6px;">
                🔗 View Publication
             </a>` 
          : ''}
      </article>`).join('');
      
    $('#pubCount').textContent = list.length + ' result(s)';
  };

  ['pubSearch','pubYear','pubArea'].forEach(id => $('#'+id).addEventListener('input', apply));
  apply();
}


function renderResearchers(){
  $('#teamGrid').innerHTML = RESEARCHERS.map(r => `
    <article class="panel">
      <img src="${r.photo}" alt="${r.name}" class="team-photo" loading="lazy">
      <h3>${r.name}</h3>
      <p class="muted">${r.role}</p>
      <div class="badges">${r.focus.map(f=>`<span class="badge">${f}</span>`).join('')}</div>
      <div class="cta-row" style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap">
        <button class="btn small" data-profile="${r.id}">View Profile</button>
        <button class="btn small outline" data-contact="${r.id}">Contact</button>
      </div>
    </article>`).join('');
  $$('#teamGrid [data-profile]').forEach(btn => btn.addEventListener('click', () => openProfile(btn.dataset.profile)));
  $$('#teamGrid [data-contact]').forEach(btn => btn.addEventListener('click', () => openContactInfo(btn.dataset.contact)));
}


function renderGallery(){
  const grid = $('#galleryGrid');
  if(!grid) return;
  grid.innerHTML = GALLERY.map(src => `<img src="${src}" alt="Work example" loading="lazy">`).join('');
}

function renderPlans(){
  const grid = $('#plansGrid');
  if(!grid) return;
  grid.innerHTML = PLANS.map(p => `
    <article class="panel">
      <h3>${p.quarter}</h3>
      <ul style="margin:6px 0 0 18px">${p.items.map(i=>`<li>${i}</li>`).join('')}</ul>
    </article>`).join('');
}


// ===== Interactions =====
function initMenu(){
  const btn = $('#menuBtn'); const menu = $('#mobileMenu'); const closeBtn = $('#menuClose');
  btn.addEventListener('click', ()=> menu.classList.add('open'));
  closeBtn.addEventListener('click', ()=> menu.classList.remove('open'));
  $$('#mobileMenu a').forEach(a => a.addEventListener('click', ()=> menu.classList.remove('open')));
}

function initHeaderShadow(){
  const header = document.querySelector('.site-header');
  const onScroll = ()=>{ header.classList.toggle('scrolled', window.scrollY > 10); };
  document.addEventListener('scroll', onScroll, { passive:true }); onScroll();
}

function initBackToTop(){
  const btn = $('#backToTop');
  if(!btn) return;
  const onScroll = ()=>{ if(window.scrollY > 300){ btn.classList.add('show'); } else { btn.classList.remove('show'); } };
  btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
}

function initScrollSpy(){
  const navLinks = $$('#primaryNav a');
  const sections = navLinks.map(a => $(a.getAttribute('href'))).filter(Boolean);
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      const id = '#' + e.target.id;
      const link = navLinks.find(a => a.getAttribute('href') === id);
      if(e.isIntersecting){
        navLinks.forEach(a => a.classList.remove('active'));
        if(link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  sections.forEach(s => io.observe(s));
}

function openModal(dialog){
  if(typeof dialog.showModal === 'function'){ dialog.showModal(); }
  else { dialog.setAttribute('open', ''); } 
}
function closeModal(dialog){ dialog.close ? dialog.close() : dialog.removeAttribute('open'); }

function initContactModal(){
  const openBtns = $$('.open-contact'); 
  const sticky = $('#stickyContact');
  const dlg = $('#contactModal');
  if(!dlg) return;
  const closeBtn = dlg.querySelector('.modal-close');
  if(openBtns.length){ openBtns.forEach(btn=> btn.addEventListener('click', ()=> openModal(dlg))); }
  if(sticky){ sticky.addEventListener('click', ()=> openModal(dlg)); }
  if(closeBtn){ closeBtn.addEventListener('click', ()=> closeModal(dlg)); }
  dlg.addEventListener('click', (e)=>{ if(e.target===dlg) closeModal(dlg); });
}

function showStatus(title, message){
  $('#statusTitle').textContent = title;
  $('#statusMessage').textContent = message;
  openModal($('#statusModal'));
}

function initForms(){
  
  // Contact main
 const cm = $('#contactFormModal');
if(cm){
  cm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const form = e.target;
    if(form.action==='#'){
      showStatus('Success', 'Thank you! We will get back to you soon.'); 
      form.reset(); 
      closeModal($('#contactModal')); 
      return;
    }
    try{
      const res = await fetch(form.action, { method:'POST', body: new FormData(form), headers:{ 'Accept': 'application/json' } });
      if(res.ok){ 
        showStatus('Success', 'Thank you! We will get back to you soon.'); 
        form.reset(); 
        closeModal($('#contactModal')); 
      }
      else{ showStatus('Error', 'Something went wrong. Please try again.'); }
    }catch{ showStatus('Error', 'Network error. Please try again.'); }
  });
}



  // Newsletter
const nf = document.querySelector('#newsletterForm'); 
if(nf){
  nf.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const form = e.target;

    if(form.action === '#'){
      alert('Subscribed successfully!'); 
      form.reset();
      return;
    }

    try{
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if(res.ok){
        alert('Network Error, Please try again');
        form.reset();
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch {
      alert('Subscribed successfully!');
    }
  });
}


  // Status modal close handlers
  const statusDlg = $('#statusModal');
  if(statusDlg){
    const closeBtn = statusDlg.querySelector('.modal-close');
    closeBtn.addEventListener('click', ()=> closeModal(statusDlg));
    statusDlg.addEventListener('click', (e)=>{ if(e.target===statusDlg) closeModal(statusDlg); });
  }
}

function openArticle(id){
  const n = NEWS.find(x => x.id === id);
  if(!n) return;
  $('#articleCover').src = n.cover;
  $('#articleTitle').textContent = n.title;
  $('#articleDate').textContent = new Date(n.date).toLocaleDateString();
  $('#articleBody').textContent = n.body;



  const viewBtn = $('#articleViewBtn');
  if (viewBtn) {
    if (n.link) {
      viewBtn.style.display = 'inline-block';
      viewBtn.href = n.link;
      viewBtn.textContent = n.btnText || 'View Updates'; 
      viewBtn.target = '_blank';
      viewBtn.rel = 'noopener noreferrer';
    } else {
      viewBtn.style.display = 'none'; 
    }
  }

  openModal($('#articleModal'));
}

function initArticleModal(){
  const dlg = $('#articleModal');
  if(!dlg) return;
  const closeBtn = dlg.querySelector('.modal-close');
  closeBtn.addEventListener('click', ()=> closeModal(dlg));
  dlg.addEventListener('click', (e)=>{ if(e.target===dlg) closeModal(dlg); });
}


// ===== Researcher Profile Modal =====
function openProfile(id){
  const r = RESEARCHERS.find(x => x.id === id);
  if(!r) return;
  (function(el){ if(el) el.src = r.photo; })($('#profPhoto'));
  (function(el){ if(el) el.textContent = r.name; })($('#profName'));
  (function(el){ if(el) el.textContent = r.role; })($('#profRole'));
  (function(el){ if(el) el.innerHTML = r.focus.map(f=>`<span class="badge">${f}</span>`).join(''); })($('#profBadges'));
  (function(el){ if(el) el.textContent = r.bio; })($('#profBio'));
  (function(el){ if(el) el.innerHTML = r.affiliations.map(a=>`<div>• ${a}</div>`).join(''); })($('#profAffils'));
  (function(el){ if(el) el.innerHTML = r.pubs.map(pid => {
    const p = byPubId(pid); if(!p) return '';
    return `<div class="researcher-pub"><h5>${p.title}</h5><div class="meta">${p.authors} • ${p.year} • ${p.venue} • ${p.area}</div></div>`;
  }).join(''); if(!el){} })( $('#profPubs') );
  (function(el){ if(el) el.innerHTML = r.experience.map(e=>`<li><strong>${e.role}</strong> — ${e.org} <span class="muted">(${e.years})</span></li>`).join(''); })($('#profExp'));


  // View CV = open in new tab
(function(el){ 
  if(el) { 
    const cvPath = r.cv || 'CVs/Shahid.pdf';
    el.href = cvPath; 
    el.target = '_blank'; 
    el.rel = 'noopener noreferrer'; 
  }
})( $('#profCvView') );

// Download CV = force download
(function(el){ 
  if(el) { 
    const cvPath = r.cv || 'CVs/Shahid.pdf';
    el.href = cvPath; 
    el.removeAttribute('target');
    el.setAttribute('download', (r.name || 'Researcher').replace(/\s+/g, '_') + '_CV.pdf');
  }
})( $('#profCvDownload') );


  // Reset to Overview tab
  $$('.tab').forEach(t => t.classList.remove('active'));
  $$('.tab-panel').forEach(p => p.classList.remove('active'));
  $('[data-tab="overview"]').classList.add('active');
  $('#tab-overview').classList.add('active');

  openModal($('#profileModal'));
}

function initTabs(){
  $$('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      $$('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      $$('.tab-panel').forEach(p => p.classList.remove('active'));
      $('#tab-' + target).classList.add('active');
    });
  });
}

function initYear(){
  const y = $('#year'); if(y) y.textContent = new Date().getFullYear();
}


// ===== Boot =====
document.addEventListener('DOMContentLoaded', () => { initI18N(); 
  // Render content
  renderResearch();
  renderNews();
  renderPublications();
  renderResearchers();
  renderGallery();
  renderPlans();

  // Interactions
  initMenu();
  initHeaderShadow();
  initBackToTop();
  initScrollSpy();
  initContactModal();
  initArticleModal();
  initForms();
  initTabs();
  initYear();
});


// ===== Researcher Contact Info Modal =====
function openContactInfo(id){
  const r = RESEARCHERS.find(x => x.id === id);
  if(!r) return;
  $('#contactName').textContent = r.name;
  $('#contactEmail').textContent = '📧 ' + r.email;
  $('#contactEmail').href = 'mailto:' + r.email;
  $('#contactPhone').textContent = '📱 ' + r.phone;
  $('#contactPhone').href = 'tel:' + r.phone;
  openModal($('#contactInfoModal'));
}


const joinBtn = document.getElementById('joinUsBtn');
const authModal = document.getElementById('authModal');

if (joinBtn && authModal) {
  const closeBtn = authModal.querySelector('.modal-close');

  // Open modal when "Join Us" clicked
  joinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.showModal();
  });

  // Close modal when X clicked
  closeBtn.addEventListener('click', () => {
    authModal.close();
  });
}

// ===== Switch between Login and Signup forms =====
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

if (showSignup && showLogin && loginForm && signupForm) {
  showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  });

  showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  });
}
