# Paso a Paso – İspanyolca (A1 → C1)

Telefon ve tablet için yapılmış, çevrimdışı çalışabilen bir İspanyolca öğrenme uygulaması (PWA). Arayüz İngilizce.

## İçerik
- **5 seviye, 40 ders** (A1: 10, A2: 8, B1: 8, B2: 7, C1: 7). Her derste 12 kelime, bir dilbilgisi notu, boşluk doldurma ve örnek cümleler var.
- **Alıştırma türleri:** çoktan seçmeli, dinleme, kelime eşleştirme, boşluk doldurma, cümle kurma, dinleyip cümle kurma, yazma (aksan klavyesiyle) ve konuşma (mikrofonla; Chrome/Android).
- **Tekrar:** aralıklı tekrar sistemi (Leitner). Öğrenilen kelimeler doğru zamanda tekrar karşına çıkar.
- **Okuma:** 12 metin. A1–B2 için uygulamaya özel yazılmış metinler, B2–C1 için telif hakkı süresi dolmuş gerçek edebiyat: Antonio Machado ("Caminante, no hay camino"), Bécquer (Rima XXI, XXIII, LIII), Cervantes (Don Quijote, 1. bölüm). Her metinde sesli okuma, kelimeye dokununca anlamı, İngilizce çeviri ve anlama testi var.
- **Sözlük:** 480 kelime ve ifade; arama ve seviye filtresi.
- **Profil:** XP, seri (streak), haftalık grafik, seviye testi, günlük hedef, ses hızı ve ses seçimi, tema (açık/koyu), ilerlemeyi dışa/içe aktarma.

Telaffuz için cihazın kendi metin-okuma (TTS) motoru kullanılır. Ses çıkmazsa cihaz ayarlarından İspanyolca bir ses paketi yükle.

## Çalıştırma
Bilgisayarda:
```bash
./serve.sh          # veya: python3 -m http.server 8000
```
Sonra tarayıcıda `http://localhost:8000` adresini aç.

Aynı Wi-Fi'daki telefon veya tablette: `serve.sh` çalışırken ekranda yazan `http://<bilgisayar-IP>:8000` adresini aç.

> Not: Uygulamayı ana ekrana **yükleme**, **çevrimdışı** kullanım ve **mikrofon** için tarayıcılar HTTPS ister (localhost hariç). Yerel ağdan (http://IP) açınca dersler ve sesler çalışır, ama yükleme ve mikrofon çalışmayabilir.

## Telefona/tablete yükleme (önerilen)
Klasörü herhangi bir ücretsiz statik barındırma servisine yükle; hepsi HTTPS verir:
- **GitHub Pages:** dosyaları bir repoya koy → Settings → Pages.
- **Netlify Drop:** https://app.netlify.com/drop adresine klasörü sürükle-bırak.

Sonra:
- **Android (Chrome):** sayfayı aç → ana sayfadaki "Install" butonu veya menü → "Uygulamayı yükle".
- **iPhone/iPad (Safari):** Paylaş → "Ana Ekrana Ekle".

İlerleme cihazda (localStorage) saklanır. Başka cihaza taşımak için Profil → Export / Import.

## Dosya yapısı
```
index.html              uygulama iskeleti
css/style.css           mobil öncelikli tasarım, tablet düzeni, koyu tema
js/app.js               uygulama motoru (dersler, tekrar, okuma, profil)
js/data/a1.js … c1.js   ders içerikleri
js/data/readings.js     okuma metinleri
sw.js                   çevrimdışı önbellek (service worker)
manifest.webmanifest    PWA tanımı, icons/  uygulama simgeleri
```
Yeni ders eklemek için ilgili `js/data/*.js` dosyasındaki `units` dizisine aynı formatta bir nesne ekle. İçerik değiştirdikten sonra `sw.js` içindeki `CACHE` sürümünü artır (`pasoapaso-v2` gibi).
