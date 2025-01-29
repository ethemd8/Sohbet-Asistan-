
# Sohbet-Asistanı
Bu proje, kullanıcıların metinler içerisinden hızlı ve etkili bilgiye erişmesini sağlayan bir sohbet asistanı uygulamasıdır. Kullanıcılar, mesajlarını girip "Gönder" butonuna basarak veya "Enter" tuşuna basarak hızlı bir şekilde yanıt alabilirler. Uygulama, Google Gemini API'siyle entegre edilmiş olup, metin akışı (streaming) şeklinde yanıtlar sunar. Gerçek zamanlı mesajlaşma deneyimi sağlar.

Proje Özellikleri
Express.js Sunucu: Web sunucusu olarak Express.js kullanılmıştır.
Google Gemini API: Sohbet yanıtları için Google Generative AI (Gemini) API kullanılmıştır.
Gerçek Zamanlı Yanıtlar: EventSource teknolojisiyle kullanıcıya anlık mesajlar iletilir.
Mesaj Geçmişi: Kullanıcı ve asistan mesajları, sohbet geçmişinde gösterilir.
Yüklenme Göstergesi: Mesaj gönderilirken bir yüklenme göstergesi görüntülenir.
Sohbet Temizleme: Kullanıcılar, sohbeti temizleyebilir ve yeni bir sohbete başlayabilirler.
Teknolojiler
Backend: Node.js, Express.js
Frontend: HTML, CSS, JavaScript
Google Generative AI (Gemini API): Metin üretimi için Google'ın yapay zeka modelleri kullanılmıştır.
Kurulum
Depoyu bilgisayarınıza klonlayın:

bash
Copy
Edit
git clone https://github.com/ethemd8/sohbet-asistan.git
Gerekli bağımlılıkları yükleyin:

bash
Copy
Edit
cd sohbet-asistan
npm install
Google Gemini API anahtarınızı GEMINI_API_KEY değişkenine ekleyin.

Uygulamayı başlatın:

bash
Copy
Edit
npm start
Uygulama, http://localhost:3000 adresinde çalışacaktır.

Kullanım
Kullanıcılar mesajlarını giriş kutusuna yazıp "Gönder" butonuna tıklayarak sohbeti başlatabilir.
Asistanın yanıtları gerçek zamanlı olarak sohbet penceresinde gösterilecektir.
Kullanıcılar, sohbeti temizleyebilir ve yeni bir mesaj gönderebilirler.
![image](https://github.com/user-attachments/assets/7211711c-2926-4b7d-9edd-5504334c4721)
Katkıda Bulunma
Bu projeye katkıda bulunmak isterseniz, pull request (PR) gönderebilir veya issues (hata raporları ve öneriler) oluşturabilirsiniz.
