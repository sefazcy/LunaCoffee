import re

html_path = r'c:\Users\sefaa\Desktop\LunaCoffee\index.html'
js_path = r'c:\Users\sefaa\Desktop\LunaCoffee\script.js'
css_path = r'c:\Users\sefaa\Desktop\LunaCoffee\style-new.css'

# 1. UPDATE HTML
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Add Preloader
preloader = '''<body>
    <!-- Preloader -->
    <div id="preloader">
        <div class="loader-content">
            <span class="loader-text">LUNA</span>
            <div class="loader-bar"></div>
        </div>
    </div>
'''
if 'id="preloader"' not in html:
    html = html.replace('<body>', preloader)

# Add Theme Toggle
theme_toggle = '''
                <div class="theme-toggle" id="theme-btn" aria-label="Toggle Theme">
                    <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </div>
                <div class="lang-switch">
'''
if 'id="theme-btn"' not in html:
    html = html.replace('<div class="lang-switch">', theme_toggle)

# Add Philosophy Section
philosophy_section = '''
    <!-- Philosophy (Elitist Touch) -->
    <section id="philosophy" class="philosophy-section">
        <div class="container">
            <div class="philosophy-grid">
                <div class="philosophy-image fade-up-element">
                    <img src="assets/images/gallery-interior.jpg" alt="Luna Coffee Interior">
                </div>
                <div class="philosophy-content fade-up-element">
                    <span class="section-badge" data-i18n="philBadge">Felsefemiz</span>
                    <h2 data-i18n="philTitle">Mükemmellik Bir Standarttır</h2>
                    <p data-i18n="philDesc1">Her bir kahve çekirdeği, özenle seçilmiş çiftliklerden gelir ve ustalıkla kavrulur. Luna'da kahve sadece bir içecek değil, aynı zamanda bir zanaattır.</p>
                    <p data-i18n="philDesc2">Modern yaşamın hızına karşı, anı yavaşlatmak ve kendinize elit bir mola vermek için tasarlandık. Ambiyansımız, sadece birinci sınıf bir kahve deneyimi sunmakla kalmaz, aynı zamanda zihinsel bir sığınak yaratır.</p>
                    <div class="phil-signature" data-i18n="philSignature">Kurucu, Luna Coffee</div>
                </div>
            </div>
        </div>
    </section>
'''
if 'id="philosophy"' not in html:
    html = html.replace('<!-- Menu -->', philosophy_section + '\n    <!-- Menu -->')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)


# 2. UPDATE CSS
css_additions = """

/* ==================================================
   PREMIUM ELITE UPGRADES (THEME, PRELOADER, CONTENT)
   ================================================== */

/* ---------- Preloader ---------- */
#preloader {
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: #0e0e0e;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.8s ease, visibility 0.8s ease;
}
[data-theme="light"] #preloader { background: #fcf9f5; }

.loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}
.loader-text {
    font-family: "Playfair Display", serif;
    font-size: 28px;
    letter-spacing: 4px;
    color: var(--coffee-light);
    animation: pulse 1.5s infinite alternate;
}
.loader-bar {
    width: 100px;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}
[data-theme="light"] .loader-bar { background: rgba(0,0,0,0.1); }
.loader-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background: var(--coffee-light);
    animation: loadBar 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
@keyframes pulse {
    0% { opacity: 0.5; }
    100% { opacity: 1; }
}
@keyframes loadBar {
    0% { width: 0%; }
    50% { width: 60%; }
    100% { width: 100%; }
}
.preloader-hidden {
    opacity: 0;
    visibility: hidden;
}

/* ---------- Theme Toggle ---------- */
.theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    color: var(--text-muted);
    transition: all 0.3s ease;
}
.theme-toggle:hover {
    color: var(--coffee-light);
    border-color: rgba(200, 162, 122, 0.3);
    transform: rotate(15deg);
}
.theme-toggle .sun-icon { display: none; }
.theme-toggle .moon-icon { display: block; }

[data-theme="light"] .theme-toggle .sun-icon { display: block; }
[data-theme="light"] .theme-toggle .moon-icon { display: none; }
[data-theme="light"] .theme-toggle { background: rgba(0, 0, 0, 0.05); }

/* ---------- Philosophy Section ---------- */
.philosophy-section {
    padding: 120px 0;
    background: #0a0a0a;
}
[data-theme="light"] .philosophy-section { background: #ffffff; }

.philosophy-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}
@media (max-width: 980px) {
    .philosophy-grid { grid-template-columns: 1fr; gap: 40px; }
}
.philosophy-image img {
    border-radius: var(--radius-lg);
    filter: brightness(0.85);
    transition: all 0.5s ease;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}
[data-theme="light"] .philosophy-image img { box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
.philosophy-image:hover img {
    filter: brightness(1);
    transform: scale(1.02);
}
.philosophy-content h2 {
    font-family: "Playfair Display", serif;
    font-size: clamp(34px, 4vw, 48px);
    margin: 16px 0 24px;
    line-height: 1.1;
    color: var(--text-main);
}
.philosophy-content p {
    color: var(--text-muted);
    font-size: 17px;
    margin-bottom: 20px;
    line-height: 1.7;
}
.phil-signature {
    margin-top: 30px;
    font-family: "Playfair Display", serif;
    font-size: 20px;
    font-style: italic;
    color: var(--coffee-light);
}

/* ---------- Light Mode Overrides ---------- */
[data-theme="light"] {
    --bg-dark: #fcfcfc;
    --bg-card: #ffffff;
    --bg-card-soft: #f4f4f4;
    --text-main: #111111;
    --text-muted: #555555;
    --coffee: #7a4f2e;
    --coffee-light: #b08055;
    --border: rgba(0, 0, 0, 0.08);
}

[data-theme="light"] body { background: var(--bg-dark); }
[data-theme="light"] .about-section, 
[data-theme="light"] .location-section { background: var(--bg-card-soft); }
[data-theme="light"] .site-header { background: rgba(252, 252, 252, 0.9); }
[data-theme="light"] .hero-card { background: #ffffff; border-color: var(--border); box-shadow: 0 30px 90px rgba(0,0,0,0.06); }
[data-theme="light"] .coffee-card { background: rgba(255, 255, 255, 0.85); border-color: var(--border); }
[data-theme="light"] .menu-section { background: #ffffff; }
[data-theme="light"] .menu-category { border-color: var(--border); box-shadow: 0 20px 40px rgba(0,0,0,0.04); }
[data-theme="light"] .gallery-section { background: var(--bg-dark); }
[data-theme="light"] .site-footer { background: #111; color: #fff; } 
[data-theme="light"] .btn-primary { background: var(--coffee); color: #fff; }
[data-theme="light"] .btn-primary:hover { background: var(--coffee-light); }
[data-theme="light"] .testimonials-section { background: var(--bg-card-soft); }
[data-theme="light"] .contact-container { background: #ffffff; border-color: var(--border); box-shadow: 0 20px 60px rgba(0,0,0,0.05); }
[data-theme="light"] .feature-card { background: #ffffff; }
[data-theme="light"] .feature-card:hover { background: #faf5f0; }
[data-theme="light"] .testimonial-card { background: #ffffff; }
[data-theme="light"] .stat-card { background: #ffffff; }
[data-theme="light"] .info-card { background: #ffffff; }
[data-theme="light"] .btn-secondary { background: transparent; color: var(--text-main); border-color: var(--border); }
[data-theme="light"] .btn-secondary:hover { border-color: var(--coffee); color: var(--coffee); }
[data-theme="light"] .custom-cursor { border-color: var(--coffee); }
[data-theme="light"] .custom-cursor.cursor-hover { background-color: rgba(122, 79, 46, 0.15); border-color: transparent; }
[data-theme="light"] .nav-menu { background: rgba(252, 252, 252, 0.98); }
"""

with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

if 'PREMIUM ELITE UPGRADES' not in css:
    with open(css_path, 'a', encoding='utf-8') as f:
        f.write(css_additions)


# 3. UPDATE JS
with open(js_path, 'r', encoding='utf-8') as f:
    js = f.read()

# Add translations
tr_insert = """
    philBadge: "Felsefemiz",
    philTitle: "Mükemmellik Bir Standarttır",
    philDesc1: "Her bir kahve çekirdeği, özenle seçilmiş çiftliklerden gelir ve ustalıkla kavrulur. Luna'da kahve sadece bir içecek değil, aynı zamanda bir zanaattır.",
    philDesc2: "Modern yaşamın hızına karşı, anı yavaşlatmak ve kendinize elit bir mola vermek için tasarlandık. Ambiyansımız, sadece birinci sınıf bir kahve deneyimi sunmakla kalmaz, aynı zamanda zihinsel bir sığınak yaratır.",
    philSignature: "Kurucu, Luna Coffee",
"""
en_insert = """
    philBadge: "Our Philosophy",
    philTitle: "Excellence is a Standard",
    philDesc1: "Every coffee bean comes from carefully selected farms and is expertly roasted. At Luna, coffee is not just a beverage, it's a craft.",
    philDesc2: "Designed to counteract the pace of modern life, allowing you to slow down the moment and give yourself an elite break. Our ambiance not only offers a first-class coffee experience but also creates a mental sanctuary.",
    philSignature: "Founder, Luna Coffee",
"""
if 'philBadge' not in js:
    js = js.replace('btnContact: "Bize Ulaş",', 'btnContact: "Bize Ulaş",' + tr_insert)
    js = js.replace('btnContact: "Contact Us",', 'btnContact: "Contact Us",' + en_insert)

# Add Preloader & Theme Logic
new_js_logic = """

// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('preloader-hidden');
    }, 1200); // 1.2s delay for premium feel
});

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const currentTheme = localStorage.getItem('luna-theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('luna-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('luna-theme', 'light');
        }
    });
}
"""

if '// Theme Toggle Logic' not in js:
    js += new_js_logic

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js)
