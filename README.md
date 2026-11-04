# Paso a Paso – İspanyolca (A1 → C1)

Telefon ve tablet için yapılmış, çevrimdışı çalışabilen bir İspanyolca öğrenme uygulaması (PWA). Arayüz İngilizce.

## İçerik
- **Kurs:** 5 seviye, **77 ders** (A1: 17, A2: 16, B1: 16, B2: 14, C1: 14). Instituto Cervantes müfredatındaki dilbilgisi konularını kapsar. Her derste kelimeler, dilbilgisi notu, boşluk doldurma ve örnek cümleler var.
- **Alıştırma türleri:** çoktan seçmeli, dinleme, eşleştirme, boşluk doldurma, cümle kurma, yazma (aksan klavyeli), konuşma (mikrofon).
- **Fiil çekimi:** kurallarla çalışan bir çekim motoru. 400 fiil, 16 zaman kipi; düzensiz fiiller, kök değişimleri ve dönüşlü emir kipleri dahil (144 test formu doğrulandı). Tam tablolar ve zamana göre fiil alıştırmaları var.
- **Kelime:** derslerle birlikte ~2.000 kelime; 36 tematik deste var ve öğrenilen her şey aralıklı tekrara (spaced repetition) eklenir.
- **Kütüphane:** 34 okuma metni (A1–B2 için özgün metinler + Cervantes, Lazarillo, Bécquer, Machado, Martí, Darío, Storni, Lorca, Quiroga, Clarín'den telif hakkı bitmiş eserler), 20 iki sesli diyalog ve aranabilir dilbilgisi başvurusu.
- **Pratik:** dikte, çeviri, sayılar/fiyat/yıl/saat dinleme, telaffuz rehberi, minimal çiftler testi, tekerlemeler, örnek cevaplı 14 yazma görevi.
- **Sınavlar:** her seviye için 30 soruluk sınav; %70 ile geçince yazdırılabilir sertifika. Ayrıca seviye tespit sınavı ve rozetler var.
- **Profil:** XP, seri, haftalık grafik, ses hızı ve iki ses seçimi, tema, ilerlemeyi dışa/içe aktarma.

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
js/app.js               uygulama motoru (dersler, alıştırmalar, kütüphane, profil)
js/conj.js              fiil çekim motoru
js/data/a1.js … c1.js   ilk 40 ders; extra-a/b/c.js: ek 37 ders + ders sırası
js/data/vocab-*.js      tematik kelime desteleri;  verbs.js: fiil listesi
js/data/readings*.js    okuma metinleri;  dialogues.js, writing.js, pron.js
sw.js                   çevrimdışı önbellek (service worker)
manifest.webmanifest    PWA tanımı, icons/  uygulama simgeleri
```
Yeni ders eklemek için ilgili `js/data/*.js` dosyasındaki `units` dizisine aynı formatta bir nesne ekle. İçerik değiştirdikten sonra `sw.js` içindeki `CACHE` sürümünü artır (`pasoapaso-v2` gibi).
