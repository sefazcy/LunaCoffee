import re

with open('c:\\Users\\sefaa\\Desktop\\LunaCoffee\\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = {
    '<a href="#hero">Ana Sayfa</a>': '<a href="#hero" data-i18n="navHome">Ana Sayfa</a>',
    '<a href="#about">Hakkımızda</a>': '<a href="#about" data-i18n="navAbout">Hakkımızda</a>',
    '<a href="#menu">Menü</a>': '<a href="#menu" data-i18n="navMenu">Menü</a>',
    '<a href="#gallery">Galeri</a>': '<a href="#gallery" data-i18n="navGallery">Galeri</a>',
    '<a href="#location">Konum</a>': '<a href="#location" data-i18n="navLocation">Konum</a>',
    '<a href="#contact">İletişim</a>': '<a href="#contact" data-i18n="navContact">İletişim</a>',
    '<a href="#contact" class="header-button">Bize Ulaş</a>': '<a href="#contact" class="header-button" data-i18n="btnContact">Bize Ulaş</a>',
    '<span class="section-badge">Taze kahve · Sessiz alan · Öğrenci dostu menü</span>': '<span class="section-badge" data-i18n="heroBadge">Taze kahve · Sessiz alan · Öğrenci dostu menü</span>',
    '<h1>Kampüsün Sakin Kahve Noktası</h1>': '<h1 data-i18n="heroTitle">Kampüsün Sakin Kahve Noktası</h1>',
    '<p>\n                    Luna Coffee, ders çalışmak, arkadaşlarınla buluşmak ve günün arasında\n                    iyi bir kahve molası vermek için tasarlanmış modern ve sıcak bir alan.\n                </p>': '<p data-i18n="heroDesc">\n                    Luna Coffee, ders çalışmak, arkadaşlarınla buluşmak ve günün arasında\n                    iyi bir kahve molası vermek için tasarlanmış modern ve sıcak bir alan.\n                </p>',
    '<a href="#menu" class="btn btn-primary">Menüyü İncele</a>': '<a href="#menu" class="btn btn-primary" data-i18n="btnMenu">Menüyü İncele</a>',
    '<a href="#location" class="btn btn-secondary">Konuma Git</a>': '<a href="#location" class="btn btn-secondary" data-i18n="btnLocation">Konuma Git</a>',
    '<span class="coffee-label">Luna Signature</span>': '<span class="coffee-label" data-i18n="coffeeLabel">Luna Signature</span>',
    '<h2>Espresso & Study Mood</h2>': '<h2 data-i18n="coffeeTitle">Espresso & Study Mood</h2>',
    '<p>\n                        Sakin atmosfer, güçlü kahve ve uzun çalışma saatleri için ideal masa düzeni.\n                    </p>': '<p data-i18n="coffeeDesc">\n                        Sakin atmosfer, güçlü kahve ve uzun çalışma saatleri için ideal masa düzeni.\n                    </p>',
    '<span class="section-badge">Hakkımızda</span>': '<span class="section-badge" data-i18n="aboutBadge">Hakkımızda</span>',
    '<h2>Luna Coffee Hakkında</h2>': '<h2 data-i18n="aboutTitle">Luna Coffee Hakkında</h2>',
    '<p>\n                    Luna Coffee, kampüs hayatının yoğun temposu içinde sakin bir mola alanı\n                    sunmak için kuruldu. İster ders çalışmak için sessiz bir köşe arıyor olun,\n                    ister arkadaşlarınızla kaliteli bir kahve eşliğinde vakit geçirmek isteyin;\n                    Luna Coffee sade atmosferi, özenli menüsü ve sıcak ortamıyla gününüzün iyi\n                    bir parçası olmayı hedefler.\n                </p>': '<p data-i18n="aboutDesc1">\n                    Luna Coffee, kampüs hayatının yoğun temposu içinde sakin bir mola alanı\n                    sunmak için kuruldu. İster ders çalışmak için sessiz bir köşe arıyor olun,\n                    ister arkadaşlarınızla kaliteli bir kahve eşliğinde vakit geçirmek isteyin;\n                    Luna Coffee sade atmosferi, özenli menüsü ve sıcak ortamıyla gününüzün iyi\n                    bir parçası olmayı hedefler.\n                </p>',
    '<p class="about-highlight">\n                    Kahve, çalışma alanı ve iyi atmosferi tek yerde buluşturuyoruz.\n                </p>': '<p class="about-highlight" data-i18n="aboutDesc2">\n                    Kahve, çalışma alanı ve iyi atmosferi tek yerde buluşturuyoruz.\n                </p>',
    '<p>Açılış Saati</p>': '<p data-i18n="stat1Desc">Açılış Saati</p>',
    '<p>Kahve & Tatlı Seçeneği</p>': '<p data-i18n="stat2Desc">Kahve & Tatlı Seçeneği</p>',
    '<p>Öğrenci Dostu Çalışma Alanı</p>': '<p data-i18n="stat3Desc">Öğrenci Dostu Çalışma Alanı</p>',
    '<span class="section-badge">Deneyim</span>': '<span class="section-badge" data-i18n="featBadge">Deneyim</span>',
    '<h2>Neden Luna Coffee?</h2>': '<h2 data-i18n="featTitle">Neden Luna Coffee?</h2>',
    '<p>\n                    Sadece kahve içilecek bir yer değil; çalışmak, odaklanmak ve iyi vakit\n                    geçirmek için düşünülmüş bir alan.\n                </p>': '<p data-i18n="featDesc">\n                    Sadece kahve içilecek bir yer değil; çalışmak, odaklanmak ve iyi vakit\n                    geçirmek için düşünülmüş bir alan.\n                </p>',
    '<h3>Sessiz Çalışma Alanı</h3>': '<h3 data-i18n="feat1Title">Sessiz Çalışma Alanı</h3>',
    '<p>\n                        Ders çalışmak, proje hazırlamak veya laptopla odaklanmak isteyenler için\n                        sakin masa düzeni.\n                    </p>': '<p data-i18n="feat1Desc">\n                        Ders çalışmak, proje hazırlamak veya laptopla odaklanmak isteyenler için\n                        sakin masa düzeni.\n                    </p>',
    '<h3>Taze Kahve</h3>': '<h3 data-i18n="feat2Title">Taze Kahve</h3>',
    '<p>\n                        Espresso bazlı kahveler, filtre kahve ve soğuk kahve seçenekleriyle\n                        günlük taze lezzetler.\n                    </p>': '<p data-i18n="feat2Desc">\n                        Espresso bazlı kahveler, filtre kahve ve soğuk kahve seçenekleriyle\n                        günlük taze lezzetler.\n                    </p>',
    '<h3>Öğrenci Dostu Menü</h3>': '<h3 data-i18n="feat3Title">Öğrenci Dostu Menü</h3>',
    '<p>\n                        Kaliteli kahve ve atıştırmalıkları ulaşılabilir fiyatlarla sunan sade bir menü.\n                    </p>': '<p data-i18n="feat3Desc">\n                        Kaliteli kahve ve atıştırmalıkları ulaşılabilir fiyatlarla sunan sade bir menü.\n                    </p>',
    '<h3>Priz & Wi-Fi</h3>': '<h3 data-i18n="feat4Title">Priz & Wi-Fi</h3>',
    '<p>\n                        Uzun çalışma oturumları için Wi-Fi ve priz erişimi bulunan rahat oturma alanları.\n                    </p>': '<p data-i18n="feat4Desc">\n                        Uzun çalışma oturumları için Wi-Fi ve priz erişimi bulunan rahat oturma alanları.\n                    </p>',
    '<span class="section-badge">Menü</span>': '<span class="section-badge" data-i18n="menuBadge">Menü</span>',
    '<h2>Menümüzden Seçtiklerimiz</h2>': '<h2 data-i18n="menuTitle">Menümüzden Seçtiklerimiz</h2>',
    '<p>\n                    Günlük kahve molaları, uzun çalışma saatleri ve tatlı kaçamaklar için\n                    özenle seçilmiş lezzetler.\n                </p>': '<p data-i18n="menuDesc">\n                    Günlük kahve molaları, uzun çalışma saatleri ve tatlı kaçamaklar için\n                    özenle seçilmiş lezzetler.\n                </p>',
    '<h3>Sıcak Kahveler</h3>': '<h3 data-i18n="catHot">Sıcak Kahveler</h3>',
    '<h3>Soğuk Kahveler</h3>': '<h3 data-i18n="catCold">Soğuk Kahveler</h3>',
    '<h3>Tatlı & Atıştırmalık</h3>': '<h3 data-i18n="catSnack">Tatlı & Atıştırmalık</h3>',
    '<span class="menu-badge">Popüler</span>': '<span class="menu-badge" data-i18n="popBadge">Popüler</span>',
    '<span class="section-badge">Müşteri Yorumları</span>': '<span class="section-badge" data-i18n="testBadge">Müşteri Yorumları</span>',
    '<h2>Öğrenciler Ne Söylüyor?</h2>': '<h2 data-i18n="testTitle">Öğrenciler Ne Söylüyor?</h2>',
    '<p>Luna Coffee\'yi tercih eden öğrenci ve çalışanlardan gelen samimi fikirler.</p>': '<p data-i18n="testDesc">Luna Coffee\'yi tercih eden öğrenci ve çalışanlardan gelen samimi fikirler.</p>',
    '<p>"Araştırma yapmak için en iyi yer! Sessiz ortam ve iyi kahve kombinasyonu harika."</p>': '<p data-i18n="test1Text">"Araştırma yapmak için en iyi yer! Sessiz ortam ve iyi kahve kombinasyonu harika."</p>',
    '<span>İkinci Sınıf Öğrenci</span>': '<span data-i18n="test1Role">İkinci Sınıf Öğrenci</span>',
    '<p>"Fiyatları uygun, kahve kalitesi iyi ve barista\'ları çok ilgili. Hergün geçiyorum."</p>': '<p data-i18n="test2Text">"Fiyatları uygun, kahve kalitesi iyi ve barista\'ları çok ilgili. Hergün geçiyorum."</p>',
    '<span>İşletme Mezunu</span>': '<span data-i18n="test2Role">İşletme Mezunu</span>',
    '<p>"Arkadaşlarla toplanmak için kusursuz bir mekân. Wi-Fi hızlı, çevre çok samimi."</p>': '<p data-i18n="test3Text">"Arkadaşlarla toplanmak için kusursuz bir mekân. Wi-Fi hızlı, çevre çok samimi."</p>',
    '<span>Proje Koordinatörü</span>': '<span data-i18n="test3Role">Proje Koordinatörü</span>',
    '<span class="section-badge">Atmosfer</span>': '<span class="section-badge" data-i18n="galBadge">Atmosfer</span>',
    '<h2>Luna’da Atmosfer</h2>': '<h2 data-i18n="galTitle">Luna’da Atmosfer</h2>',
    '<p>\n                    Sade tasarım, sıcak ışıklar ve odaklanmaya uygun masa düzeniyle günün\n                    her anına eşlik eden bir alan.\n                </p>': '<p data-i18n="galDesc">\n                    Sade tasarım, sıcak ışıklar ve odaklanmaya uygun masa düzeniyle günün\n                    her anına eşlik eden bir alan.\n                </p>',
    '<span>Çalışma Alanı</span>': '<span data-i18n="gal1">Çalışma Alanı</span>',
    '<span>Kahve Hazırlığı</span>': '<span data-i18n="gal2">Kahve Hazırlığı</span>',
    '<span>Tatlı & Kahve</span>': '<span data-i18n="gal3">Tatlı & Kahve</span>',
    '<span>İç Mekân</span>': '<span data-i18n="gal4">İç Mekân</span>',
    '<span class="section-badge">Konum</span>': '<span class="section-badge" data-i18n="locBadge">Konum</span>',
    '<h2>Bize Ulaşın</h2>': '<h2 data-i18n="locTitle">Bize Ulaşın</h2>',
    '<p>\n                    Kampüs çevresinde kahve molası vermek, ders çalışmak veya arkadaşlarınla\n                    buluşmak için Luna Coffee’ye uğrayabilirsin.\n                </p>': '<p data-i18n="locDesc">\n                    Kampüs çevresinde kahve molası vermek, ders çalışmak veya arkadaşlarınla\n                    buluşmak için Luna Coffee’ye uğrayabilirsin.\n                </p>',
    '<h3>Çalışma Saatleri</h3>': '<h3 data-i18n="locTimeTitle">Çalışma Saatleri</h3>',
    '<span>Pazartesi – Cuma</span>': '<span data-i18n="locTime1D">Pazartesi – Cuma</span>',
    '<span>Cumartesi</span>': '<span data-i18n="locTime2D">Cumartesi</span>',
    '<span>Pazar</span>': '<span data-i18n="locTime3D">Pazar</span>',
    '<h3>Konum</h3>': '<h3 data-i18n="locAddrTitle">Konum</h3>',
    '<p>Hacettepe Üniversitesi çevresi, Ankara</p>': '<p data-i18n="locAddr">Hacettepe Üniversitesi çevresi, Ankara</p>',
    'Google Maps’te Aç': '<span data-i18n="locBtn">Google Maps’te Aç</span>',
    '<span class="section-badge">İletişim</span>': '<span class="section-badge" data-i18n="contBadge">İletişim</span>',
    '<h2>Kahve Molan İçin Buradayız</h2>': '<h2 data-i18n="contTitle">Kahve Molan İçin Buradayız</h2>',
    '<p>\n                    Menü hakkında bilgi almak, masa durumu sormak veya bize ulaşmak için\n                    WhatsApp, telefon ya da Instagram üzerinden iletişime geçebilirsiniz.\n                </p>': '<p data-i18n="contDesc">\n                    Menü hakkında bilgi almak, masa durumu sormak veya bize ulaşmak için\n                    WhatsApp, telefon ya da Instagram üzerinden iletişime geçebilirsiniz.\n                </p>',
    '☕ WhatsApp\'tan Yaz': '<span data-i18n="contWa">☕ WhatsApp\'tan Yaz</span>',
    '📷 Instagram': '<span data-i18n="contIg">📷 Instagram</span>',
    '📞 Telefon Et': '<span data-i18n="contTel">📞 Telefon Et</span>',
    '<p>Kampüs çevresinde sakin, modern ve öğrenci dostu kahve deneyimi.</p>': '<p data-i18n="footerDesc">Kampüs çevresinde sakin, modern ve öğrenci dostu kahve deneyimi.</p>',
    '<p>© 2026 Luna Coffee. Demo portfolio project.</p>': '<p data-i18n="footerRights">© 2026 Luna Coffee. Demo portfolio project.</p>'
}

for old, new in replacements.items():
    html = html.replace(old, new)

lang_switch = """
            <div class="header-actions">
                <div class="lang-switch">
                    <button class="lang-btn active" data-lang="tr">TR</button>
                    <button class="lang-btn" data-lang="en">EN</button>
                </div>
                <a href="#contact" class="header-button" data-i18n="btnContact">Bize Ulaş</a>
                <button class="hamburger" aria-label="Menüyü aç">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
"""

# Replace the old button + hamburger with the new header-actions block
html = re.sub(
    r'<a href="#contact" class="header-button">Bize Ulaş</a>\s*<button class="hamburger" aria-label="Menüyü aç">\s*<span></span>\s*<span></span>\s*<span></span>\s*</button>',
    lang_switch,
    html
)

with open('c:\\Users\\sefaa\\Desktop\\LunaCoffee\\index.html', 'w', encoding='utf-8') as f:
    f.write(html)
