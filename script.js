/* ================================
   Sirius Kafe - JavaScript
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
    philBadge: "Odaklanmak İçin",
    philTitle: "Odaklanmak için doğru yer.",
    philDesc1: "Sirius Kafe, Kızılay’ın gürültüsünden arındırılmış 10. kattaki sakin ortamıyla konsantrasyonunuzu destekler. Uzun süre rahat oturabileceğiniz alanlar, priz ve şarj noktaları, ücretsiz Wi-Fi — hepsi düşünüldü.",
    philDesc2: "Yalnız çalışmak isteyenler için sessiz köşeler, grup projesi için sosyal masalar ve bir mola vermek isteyenler için balkon — Sirius Kafe, merkezi konumuyla Kızılay’ın en işlevsel çalışma durağı.",
    philSignature: "Sirius Kafe, Kızılay",

    heroBadge: "Kızılay, Ankara · Her gün 09:30 – 23:00 · Ücretsiz Wi-Fi",
    heroTitle: "Kitap, kahve ve derin bir nefes.",
    heroDesc: "Sirius Kafe; Kızılay’ın tam ortasında sizi bekleyen sessiz çalışma alanı, kitap kulübü ve sıcak kafe deneyimi.",
    btnMenu: "Bizi Keşfet",
    btnLocation: "Nasıl Gidilir?",
    coffeeLabel: "Sirius Kütüphane",
    coffeeTitle: "10. Katta, Şehrin Üstünde",
    coffeeDesc: "Kızılay merkezinde balkon manzaralı, sessiz çalışma alanı ve sıcak kafe deneyimi bir arada.",
    aboutBadge: "Hakkımızda",
    aboutTitle: "Sirius Kafe Hakkında",
    aboutDesc1: "Sirius Kafe, Kızılay’ın kalbinde 10. katta; şehrin gürültüsünden uzak, kitabınızla ya da notlarınızla saatlerce vakit geçirebileceğiniz bir alan. Güzel bir manzara, sıcak bir çay ve sessizlik — hepsini aynı anda bulabilirsiniz.",
    aboutDesc2: "Kütüphane rahatında, kafe sıcaklığında.",
    stat1Desc: "Google Puanı",
    stat2Desc: "Gerçek Yorum",
    stat3Desc: "Her Gün Açık",
    featBadge: "Deneyim",
    featTitle: "Neden Sirius Kafe?",
    featDesc: "Sessiz çalışma alanı, balkon manzarası, Speaking Club ve Kitap Kulübü ile Kızılay’ın en sıcak kitap kafe deneyimi.",
    feat1Title: "Sessiz Çalışma Alanı",
    feat1Desc: "Konsantrasyonu artıran sakin atmosfer, priz ve şarj imkânı, yalnız ya da grup çalışmasına uygun esnek oturma düzeni.",
    feat2Title: "Balkon & Şehir Manzarası",
    feat2Desc: "Kızılay’ın 10. katında şehrin üzerinde açık bir balkon; çayınızı içerken Ankara’yı tepeden izleyin.",
    feat3Title: "Speaking Club",
    feat3Desc: "Her Cuma 19:00’da düzenlenen Speaking Club etkinliğiyle İngilizce konuşma pratiği yapın, yeni insanlarla tanışın.",
    feat4Title: "Sirius Kitap Kulübü",
    feat4Desc: "Okuma grupları, kitap tartışmaları ve kültürel etkinliklerle Sirius topluluğunun bir parçası olun.",
    menuBadge: "Menü",
    menuTitle: "Sirius Kafe Menüsü",
    menuDesc: "Tüm paketler giriş ile birlikte sunulmaktadır. Detaylı menü için bize ulaşabilirsiniz.",
    catHot: "Giriş & İçecek Paketleri",
    catCold: "Atıştırmalık Paketleri",
    catSnack: "Ekstra Seçenekler",
    popBadge: "Popüler",
    menuNote: "Fiyatlar değişiklik gösterebilir. Güncel menü için bizimle iletişime geçebilirsiniz.",
    testBadge: "Müşteri Yorumları",
    testTitle: "Sirius Kafe’yi Sevenler Ne Diyor?",
    testDesc: "199’dan fazla Google yorumunda öne çıkan temalar: sakin atmosfer, sıcak ekip ve balkon manzarası.",
    test1Text: "\"Ders çalışmak için Ankara’nın en iyi adresi. 10. kattaki sessiz ortam ve balkon manzarası inanılmaz. Haftada birkaç kez geliyorum.\"",
    test1Role: "Üniversite Öğrencisi",
    test2Text: "\"Speaking Club etkinliği harika, ekip çok sıcak. Cuma akşamları burası benim için zorunlu durak.\"",
    test2Role: "Düzenli Müşteri",
    test3Text: "\"Kitap okumak, kahve içmek ve şehrin üstünden manzara izlemek — Sirius Kafe’de bunların hepsi bir arada.\"",
    test3Role: "Yazar & Serbest Çalışan",
    galBadge: "Atmosfer",
    galTitle: "Sirius Kafe’de Atmosfer",
    galDesc: "Kitaplık, balkon, çalışma köşeleri ve sıcak kafe ortamı — Sirius Kafe’nin farklı yüzleri.",
    gal1: "Giriş & Genel Atmosfer",
    gal2: "Balkon Manzarası",
    gal3: "Çalışma & Sosyal Alan",
    gal4: "Kitaplık & Kültür Köşesi",
    locBadge: "Konum",
    locTitle: "Bize Ulaşın",
    locDesc: "Kızılay’ın tam merkezinde, Atatürk Bulvarı üzerinde 10. katta. Ulaşmak kolay, ayrılmak zor.",
    locTimeTitle: "Çalışma Saatleri",
    locTime1D: "Her gün",
    locAddrTitle: "Adres",
    locAddr: "Atatürk Blv Alemdar İş Hanı No:88, 10. Kat / 20-19, 06530 Kızılay – Çankaya / Ankara",
    locBtn: "Google Maps’te Aç",
    contBadge: "İletişim",
    contTitle: "Sirius Kafe’ye Ulaşın",
    contDesc: "Rezervasyon, etkinlik veya menü hakkında bilgi almak için bize WhatsApp, Instagram veya telefon üzerinden ulaşabilirsiniz.",
    contWa: "☕ WhatsApp’tan Yaz",
    contIg: "📷 Instagram’ı Takip Et",
    contTel: "📞 Ara: 0534 058 33 28",
    footerDesc: "Kızılay’da kitap, kahve ve sessiz çalışma alanı. Her gün 09:30 – 23:00 açık.",
    footerRights: "© 2026 Sirius Kafe, Ankara. Tüm hakları saklıdır."
  },
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navMenu: "Menu",
    navGallery: "Gallery",
    navLocation: "Location",
    navContact: "Contact",
    btnContact: "Contact Us",
    philBadge: "Focus Here",
    philTitle: "The right place to focus.",
    philDesc1: "Sirius Kafe’s calm 10th-floor setting in Kızılay supports your concentration. Comfortable seating for long sessions, power outlets, charging points, and free Wi-Fi — all thought through.",
    philDesc2: "Quiet corners for solo work, social tables for group projects, and a balcony for a break — Sirius Kafe is Kızılay’s most functional study stop, right in the center.",
    philSignature: "Sirius Kafe, Kızılay",

    heroBadge: "Kızılay, Ankara · Open daily 09:30 – 23:00 · Free Wi-Fi",
    heroTitle: "Books, coffee, and a deep breath.",
    heroDesc: "Sirius Kafe — a quiet study space, book club, and warm café experience waiting for you in the heart of Kızılay.",
    btnMenu: "Discover Us",
    btnLocation: "Get Directions",
    coffeeLabel: "Sirius Library",
    coffeeTitle: "On the 10th Floor, Above the City",
    coffeeDesc: "Balcony views, quiet study space, and a warm café experience — all in the center of Kızılay.",
    aboutBadge: "About Us",
    aboutTitle: "About Sirius Kafe",
    aboutDesc1: "Sirius Kafe sits on the 10th floor in the heart of Kızılay — away from the city noise, a place where you can spend hours with your book or notes. A beautiful view, a warm cup of tea, and silence — all at the same time.",
    aboutDesc2: "Library comfort, café warmth.",
    stat1Desc: "Google Rating",
    stat2Desc: "Real Reviews",
    stat3Desc: "Open Every Day",
    featBadge: "Experience",
    featTitle: "Why Sirius Kafe?",
    featDesc: "Quiet study space, balcony view, Speaking Club, and Book Club — the warmest book café experience in Kızılay.",
    feat1Title: "Quiet Study Space",
    feat1Desc: "A focus-friendly atmosphere, power outlets, charging points, and flexible seating for solo or group work.",
    feat2Title: "Balcony & City View",
    feat2Desc: "An open balcony above Kızılay on the 10th floor — watch Ankara from above while enjoying your tea.",
    feat3Title: "Speaking Club",
    feat3Desc: "Practice your English and meet new people at our Speaking Club every Friday at 19:00.",
    feat4Title: "Sirius Book Club",
    feat4Desc: "Reading groups, book discussions, and cultural events — become part of the Sirius community.",
    menuBadge: "Menu",
    menuTitle: "Sirius Kafe Menu",
    menuDesc: "All packages include entry. Contact us for the full menu.",
    catHot: "Entry & Drink Packages",
    catCold: "Snack Packages",
    catSnack: "Extra Options",
    popBadge: "Popular",
    menuNote: "Prices are subject to change. Contact us for the current menu.",
    testBadge: "Customer Reviews",
    testTitle: "What Sirius Kafe Fans Say?",
    testDesc: "Themes from 199+ Google reviews: calm atmosphere, warm staff, and balcony view.",
    test1Text: "\"The best study spot in Ankara. The quiet environment on the 10th floor and the balcony view are incredible. I come several times a week.\"",
    test1Role: "University Student",
    test2Text: "\"The Speaking Club event is great, the team is so warm. Friday evenings here are a must for me.\"",
    test2Role: "Regular Customer",
    test3Text: "\"Reading a book, drinking coffee, and watching the view from above — all of that at Sirius Kafe.\"",
    test3Role: "Writer & Freelancer",
    galBadge: "Atmosphere",
    galTitle: "Atmosphere at Sirius Kafe",
    galDesc: "Library, balcony, study corners, and a warm café setting — the many faces of Sirius Kafe.",
    gal1: "Entrance & General Atmosphere",
    gal2: "Balcony View",
    gal3: "Study & Social Area",
    gal4: "Library & Culture Corner",
    locBadge: "Location",
    locTitle: "Find Us",
    locDesc: "In the very center of Kızılay, on the 10th floor of Atatürk Blvd. Easy to reach, hard to leave.",
    locTimeTitle: "Opening Hours",
    locTime1D: "Every day",
    locAddrTitle: "Address",
    locAddr: "Atatürk Blv Alemdar İş Hanı No:88, 10th Floor / 20-19, 06530 Kızılay – Çankaya / Ankara",
    locBtn: "Open in Google Maps",
    contBadge: "Contact",
    contTitle: "Reach Sirius Kafe",
    contDesc: "For reservations, events, or menu info, reach us via WhatsApp, Instagram, or phone.",
    contWa: "☕ Text on WhatsApp",
    contIg: "📷 Follow on Instagram",
    contTel: "📞 Call: 0534 058 33 28",
    footerDesc: "Books, coffee, and quiet study space in Kızılay. Open every day 09:30 – 23:00.",
    footerRights: "© 2026 Sirius Kafe, Ankara. All rights reserved."
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
        localStorage.setItem('sirius-lang', lang);
        
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
const savedLang = localStorage.getItem('sirius-lang') || 'tr';
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
const currentTheme = localStorage.getItem('sirius-theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('sirius-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('sirius-theme', 'light');
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
