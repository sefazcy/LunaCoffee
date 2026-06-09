/* ================================
   Luna Coffee - JavaScript
   Version: Interactive features & i18n
================================ */

// Language Data
const translations = {
  tr: {
    navHome: "Ana Sayfa",
    navAbout: "Hakkımızda",
    navMenu: "Menü",
    navGallery: "Galeri",
    navLocation: "Konum",
    navContact: "İletişim",
    btnContact: "Bize Ulaş",
    philBadge: "Felsefemiz",
    philTitle: "Mükemmellik Bir Standarttır",
    philDesc1: "Her bir kahve çekirdeği, özenle seçilmiş çiftliklerden gelir ve ustalıkla kavrulur. Luna'da kahve sadece bir içecek değil, aynı zamanda bir zanaattır.",
    philDesc2: "Modern yaşamın hızına karşı, anı yavaşlatmak ve kendinize elit bir mola vermek için tasarlandık. Ambiyansımız, sadece birinci sınıf bir kahve deneyimi sunmakla kalmaz, aynı zamanda zihinsel bir sığınak yaratır.",
    philSignature: "Kurucu, Luna Coffee",

    heroBadge: "Taze kahve · Sessiz alan · Öğrenci dostu menü",
    heroTitle: "Kampüsün Sakin Kahve Noktası",
    heroDesc: "Luna Coffee, ders çalışmak, arkadaşlarınla buluşmak ve günün arasında iyi bir kahve molası vermek için tasarlanmış modern ve sıcak bir alan.",
    btnMenu: "Menüyü İncele",
    btnLocation: "Konuma Git",
    coffeeLabel: "Luna Signature",
    coffeeTitle: "Espresso & Study Mood",
    coffeeDesc: "Sakin atmosfer, güçlü kahve ve uzun çalışma saatleri için ideal masa düzeni.",
    aboutBadge: "Hakkımızda",
    aboutTitle: "Luna Coffee Hakkında",
    aboutDesc1: "Luna Coffee, kampüs hayatının yoğun temposu içinde sakin bir mola alanı sunmak için kuruldu. İster ders çalışmak için sessiz bir köşe arıyor olun, ister arkadaşlarınızla kaliteli bir kahve eşliğinde vakit geçirmek isteyin; Luna Coffee sade atmosferi, özenli menüsü ve sıcak ortamıyla gününüzün iyi bir parçası olmayı hedefler.",
    aboutDesc2: "Kahve, çalışma alanı ve iyi atmosferi tek yerde buluşturuyoruz.",
    stat1Desc: "Açılış Saati",
    stat2Desc: "Kahve & Tatlı Seçeneği",
    stat3Desc: "Öğrenci Dostu Çalışma Alanı",
    featBadge: "Deneyim",
    featTitle: "Neden Luna Coffee?",
    featDesc: "Sadece kahve içilecek bir yer değil; çalışmak, odaklanmak ve iyi vakit geçirmek için düşünülmüş bir alan.",
    feat1Title: "Sessiz Çalışma Alanı",
    feat1Desc: "Ders çalışmak, proje hazırlamak veya laptopla odaklanmak isteyenler için sakin masa düzeni.",
    feat2Title: "Taze Kahve",
    feat2Desc: "Espresso bazlı kahveler, filtre kahve ve soğuk kahve seçenekleriyle günlük taze lezzetler.",
    feat3Title: "Öğrenci Dostu Menü",
    feat3Desc: "Kaliteli kahve ve atıştırmalıkları ulaşılabilir fiyatlarla sunan sade bir menü.",
    feat4Title: "Priz & Wi-Fi",
    feat4Desc: "Uzun çalışma oturumları için Wi-Fi ve priz erişimi bulunan rahat oturma alanları.",
    menuBadge: "Menü",
    menuTitle: "Menümüzden Seçtiklerimiz",
    menuDesc: "Günlük kahve molaları, uzun çalışma saatleri ve tatlı kaçamaklar için özenle seçilmiş lezzetler.",
    catHot: "Sıcak Kahveler",
    catCold: "Soğuk Kahveler",
    catSnack: "Tatlı & Atıştırmalık",
    popBadge: "Popüler",
    testBadge: "Müşteri Yorumları",
    testTitle: "Öğrenciler Ne Söylüyor?",
    testDesc: "Luna Coffee'yi tercih eden öğrenci ve çalışanlardan gelen samimi fikirler.",
    test1Text: "\"Araştırma yapmak için en iyi yer! Sessiz ortam ve iyi kahve kombinasyonu harika.\"",
    test1Role: "İkinci Sınıf Öğrenci",
    test2Text: "\"Fiyatları uygun, kahve kalitesi iyi ve barista'ları çok ilgili. Hergün geçiyorum.\"",
    test2Role: "İşletme Mezunu",
    test3Text: "\"Arkadaşlarla toplanmak için kusursuz bir mekân. Wi-Fi hızlı, çevre çok samimi.\"",
    test3Role: "Proje Koordinatörü",
    galBadge: "Atmosfer",
    galTitle: "Luna’da Atmosfer",
    galDesc: "Sade tasarım, sıcak ışıklar ve odaklanmaya uygun masa düzeniyle günün her anına eşlik eden bir alan.",
    gal1: "Çalışma Alanı",
    gal2: "Kahve Hazırlığı",
    gal3: "Tatlı & Kahve",
    gal4: "İç Mekân",
    locBadge: "Konum",
    locTitle: "Bize Ulaşın",
    locDesc: "Kampüs çevresinde kahve molası vermek, ders çalışmak veya arkadaşlarınla buluşmak için Luna Coffee’ye uğrayabilirsin.",
    locTimeTitle: "Çalışma Saatleri",
    locTime1D: "Pazartesi – Cuma",
    locTime2D: "Cumartesi",
    locTime3D: "Pazar",
    locAddrTitle: "Konum",
    locAddr: "Hacettepe Üniversitesi çevresi, Ankara",
    locBtn: "Google Maps’te Aç",
    contBadge: "İletişim",
    contTitle: "Kahve Molan İçin Buradayız",
    contDesc: "Menü hakkında bilgi almak, masa durumu sormak veya bize ulaşmak için WhatsApp, telefon ya da Instagram üzerinden iletişime geçebilirsiniz.",
    contWa: "☕ WhatsApp'tan Yaz",
    contIg: "📷 Instagram",
    contTel: "📞 Telefon Et",
    footerDesc: "Kampüs çevresinde sakin, modern ve öğrenci dostu kahve deneyimi.",
    footerRights: "© 2026 Luna Coffee. Demo portfolio project."
  },
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navMenu: "Menu",
    navGallery: "Gallery",
    navLocation: "Location",
    navContact: "Contact",
    btnContact: "Contact Us",
    philBadge: "Our Philosophy",
    philTitle: "Excellence is a Standard",
    philDesc1: "Every coffee bean comes from carefully selected farms and is expertly roasted. At Luna, coffee is not just a beverage, it's a craft.",
    philDesc2: "Designed to counteract the pace of modern life, allowing you to slow down the moment and give yourself an elite break. Our ambiance not only offers a first-class coffee experience but also creates a mental sanctuary.",
    philSignature: "Founder, Luna Coffee",

    heroBadge: "Fresh coffee · Quiet space · Student-friendly menu",
    heroTitle: "The Campus's Calm Coffee Spot",
    heroDesc: "Luna Coffee is a modern and warm space designed for studying, meeting friends, and taking a good coffee break during the day.",
    btnMenu: "Explore Menu",
    btnLocation: "Get Directions",
    coffeeLabel: "Luna Signature",
    coffeeTitle: "Espresso & Study Mood",
    coffeeDesc: "Quiet atmosphere, strong coffee, and ideal seating for long study hours.",
    aboutBadge: "About Us",
    aboutTitle: "About Luna Coffee",
    aboutDesc1: "Luna Coffee was established to offer a calm break area amidst the busy pace of campus life. Whether you're looking for a quiet corner to study or want to spend time with friends over quality coffee; Luna Coffee aims to be a good part of your day with its simple atmosphere, careful menu, and warm environment.",
    aboutDesc2: "We bring coffee, workspace, and good atmosphere together in one place.",
    stat1Desc: "Opening Time",
    stat2Desc: "Coffee & Dessert Options",
    stat3Desc: "Student-Friendly Workspace",
    featBadge: "Experience",
    featTitle: "Why Luna Coffee?",
    featDesc: "Not just a place to drink coffee; a space designed to work, focus, and have a good time.",
    feat1Title: "Quiet Workspace",
    feat1Desc: "Calm seating arrangement for those who want to study, prepare projects, or focus with a laptop.",
    feat2Title: "Fresh Coffee",
    feat2Desc: "Daily fresh flavors with espresso-based coffees, filter coffee, and cold coffee options.",
    feat3Title: "Student-Friendly Menu",
    feat3Desc: "A simple menu offering quality coffee and snacks at accessible prices.",
    feat4Title: "Outlets & Wi-Fi",
    feat4Desc: "Comfortable seating areas with Wi-Fi and outlet access for long study sessions.",
    menuBadge: "Menu",
    menuTitle: "Our Selections",
    menuDesc: "Carefully selected flavors for daily coffee breaks, long study hours, and sweet getaways.",
    catHot: "Hot Coffees",
    catCold: "Cold Coffees",
    catSnack: "Desserts & Snacks",
    popBadge: "Popular",
    testBadge: "Customer Reviews",
    testTitle: "What Students Say?",
    testDesc: "Sincere opinions from students and workers who prefer Luna Coffee.",
    test1Text: "\"Best place to do research! The combination of a quiet environment and good coffee is great.\"",
    test1Role: "Sophomore Student",
    test2Text: "\"Prices are reasonable, coffee quality is good, and baristas are very attentive. I stop by every day.\"",
    test2Role: "Business Graduate",
    test3Text: "\"A perfect place to gather with friends. Fast Wi-Fi, very friendly environment.\"",
    test3Role: "Project Coordinator",
    galBadge: "Atmosphere",
    galTitle: "Atmosphere at Luna",
    galDesc: "A space that accompanies every moment of the day with its simple design, warm lights, and focus-friendly seating.",
    gal1: "Workspace",
    gal2: "Coffee Prep",
    gal3: "Dessert & Coffee",
    gal4: "Interior",
    locBadge: "Location",
    locTitle: "Reach Us",
    locDesc: "You can stop by Luna Coffee to take a coffee break around the campus, study, or meet with your friends.",
    locTimeTitle: "Working Hours",
    locTime1D: "Monday – Friday",
    locTime2D: "Saturday",
    locTime3D: "Sunday",
    locAddrTitle: "Location",
    locAddr: "Around Hacettepe University, Ankara",
    locBtn: "Open in Google Maps",
    contBadge: "Contact",
    contTitle: "We Are Here For Your Coffee Break",
    contDesc: "To get information about the menu, ask about table availability, or reach us, you can contact us via WhatsApp, phone, or Instagram.",
    contWa: "☕ Text on WhatsApp",
    contIg: "📷 Instagram",
    contTel: "📞 Call Us",
    footerDesc: "A calm, modern, and student-friendly coffee experience around the campus.",
    footerRights: "© 2026 Luna Coffee. Demo portfolio project."
  }
};

// Language Switching Logic
const langBtns = document.querySelectorAll('.lang-btn');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const lang = btn.getAttribute('data-lang');
        localStorage.setItem('luna-lang', lang);
        
        // Add a small transition effect to the body for premium feel
        document.body.style.opacity = '0.5';
        setTimeout(() => {
            elementsToTranslate.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if(translations[lang] && translations[lang][key]) {
                    if (el.tagName.toLowerCase() === 'input' && el.type === 'placeholder') {
                        el.placeholder = translations[lang][key];
                    } else {
                        el.innerHTML = translations[lang][key];
                    }
                }
            });
            document.body.style.opacity = '1';
        }, 150);
    });
});

// Load saved language
const savedLang = localStorage.getItem('luna-lang') || 'tr';
if (savedLang !== 'tr') {
    const btn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
    if (btn) btn.click();
}

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const element = document.querySelector(href);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .testimonial-card, .menu-category, .stat-card, .section-heading, .gallery-card, .info-card').forEach(el => {
    // We add a class instead of just running playstate for better control
    el.classList.add('fade-up-element');
    observer.observe(el);
});

// Custom Cursor (Premium touch)
const createCursor = () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    });

    document.querySelectorAll('a, button, .gallery-card, .feature-card, .menu-item').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
};

// Disable custom cursor on mobile / touch devices
if (window.innerWidth > 980 && window.matchMedia("(pointer: fine)").matches) {
    document.body.style.cursor = "none";
    createCursor();
}

// Premium body transition
document.body.style.transition = 'opacity 0.2s ease-in-out';


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

// Header shrink on scroll
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
    const onScroll = () => {
        siteHeader.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
