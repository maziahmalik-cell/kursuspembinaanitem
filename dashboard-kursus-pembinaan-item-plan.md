# Plan: Dashboard Kursus Pembinaan Item

## Gambaran Keseluruhan

Membina sebuah **dashboard satu halaman (single-page)** untuk Kursus Pembinaan Item menggunakan HTML, CSS (tema biru), dan JavaScript tulen — tanpa framework. Data menggunakan dummy data untuk permulaan, dengan struktur yang mudah diganti dengan API backend kemudian.

**Stack yang digunakan:**
- **HTML5** — struktur halaman
- **CSS3** — styling dengan tema warna biru, layout responsif
- **JavaScript (vanilla)** — interaktiviti, carta, dan turas data
- **Chart.js (CDN)** — untuk carta statistik kehadiran

**Skop:**
- Header dashboard dengan tajuk kursus dan tema biru
- Seksyen kehadiran peserta: carta statistik + jadual peserta dengan status hadir
- Seksyen objektif kursus: paparan objektif dalam format kad
- Seksyen senarai subjek yang ditawarkan: kad-kad subjek
- Seksyen senarai penggubal item: turas mengikut subjek + jadual penggubal
- Responsive design (desktop & mobile)

**Bukan dalam skop:**
- Sistem log masuk / pengesahan pengguna
- Sambungan ke pangkalan data sebenar
- Fungsi tambah/edit/padam data (CRUD)

---

## Sub-Tugas

---

### Sub-Tugas 1: Struktur HTML & Tema Biru

**Status:** `[x] done`

**Intent:**
Cipta fail HTML utama dengan struktur asas dashboard, termasuk navbar, semua seksyen sebagai ankor, dan aplikasikan tema warna biru melalui CSS.

**Expected Outcomes:**
- Fail `index.html` wujud dan boleh dibuka di pelayar
- Navbar biru di bahagian atas dengan tajuk "Dashboard Kursus Pembinaan Item"
- Navigasi cepat (anchor links) ke setiap seksyen: Kehadiran, Objektif, Subjek, Penggubal
- Tema warna biru konsisten di seluruh halaman (header, butang, jadual header, border)
- Halaman boleh ditatal ke setiap seksyen

**Todo List:**
- [ ] Cipta fail `index.html` dengan struktur HTML5 penuh (doctype, head, body)
- [ ] Tambah `<link>` ke Chart.js melalui CDN dalam `<head>`
- [ ] Cipta navbar biru dengan tajuk dan pautan navigasi ke 4 seksyen
- [ ] Cipta skeleton 4 seksyen utama dengan `id` untuk anchor links: `#kehadiran`, `#objektif`, `#subjek`, `#penggubal`
- [ ] Cipta fail `style.css` dengan pembolehubah warna biru (`--biru-gelap`, `--biru-utama`, `--biru-muda`)
- [ ] Aplikasikan CSS asas: font, warna latar, padding, dan layout

**Relevant Context:**
- Warna biru cadangan: `#1a3a6b` (gelap), `#2563eb` (utama), `#dbeafe` (muda/latar)
- Semua seksyen diakses melalui tatal (scroll), bukan halaman berbeza

---

### Sub-Tugas 2: Seksyen Kehadiran Peserta

**Status:** `[x] done`

**Intent:**
Bina seksyen kehadiran yang memaparkan carta donut statistik kehadiran keseluruhan DAN jadual senarai peserta dengan status hadir/tidak hadir bagi setiap sesi kursus.

**Expected Outcomes:**
- Carta donut (Chart.js) menunjukkan peratusan Hadir vs Tidak Hadir
- Jadual peserta dengan lajur: No, Nama Peserta, Jawatan, Sesi 1, Sesi 2, Sesi 3, Jumlah Hadir
- Status hadir ditunjukkan dengan ikon/badge berwarna (hijau = hadir, merah = tidak hadir)
- Dummy data 10 orang peserta dimuatkan

**Todo List:**
- [ ] Tambah HTML untuk seksyen `#kehadiran` dengan tajuk seksyen bergaya biru
- [ ] Tambah `<canvas id="cartaKehadiran">` untuk Chart.js
- [ ] Cipta dummy data peserta dalam `script.js` (array objek dengan nama, jawatan, sesi1, sesi2, sesi3)
- [ ] Tulis fungsi JavaScript untuk render jadual peserta secara dinamik dari dummy data
- [ ] Tulis JavaScript untuk inisialisasi Chart.js Doughnut chart dengan data hadir/tidak hadir
- [ ] Tambah CSS untuk badge status hadir (hijau) dan tidak hadir (merah)
- [ ] Layout dua lajur: carta di kiri, ringkasan nombor di kanan, jadual di bawah

**Relevant Context:**
- Gunakan `Chart.js` dari CDN: `https://cdn.jsdelivr.net/npm/chart.js`
- Carta donut menggunakan warna biru (`#2563eb`) untuk Hadir dan merah muda (`#ef4444`) untuk Tidak Hadir

---

### Sub-Tugas 3: Seksyen Objektif Kursus

**Status:** `[x] done`

**Intent:**
Bina seksyen yang memaparkan maklumat dan objektif kursus pembinaan item dalam format yang teratur dan mudah dibaca.

**Expected Outcomes:**
- Maklumat am kursus: nama kursus, tarikh, tempat, penganjur
- Senarai objektif kursus dalam kad-kad bernombor
- Reka bentuk yang bersih dengan ikon dan warna biru

**Todo List:**
- [ ] Tambah HTML untuk seksyen `#objektif` dengan tajuk seksyen
- [ ] Cipta kad maklumat am kursus (nama, tarikh, tempat, penganjur) menggunakan dummy data
- [ ] Cipta dummy data objektif kursus (sekurang-kurangnya 4 objektif) dalam `script.js`
- [ ] Tulis JavaScript untuk render senarai objektif secara dinamik
- [ ] Setiap objektif dipapar dalam kad dengan nombor bulat berwarna biru dan teks penerangan
- [ ] Tambah CSS untuk kad objektif dengan border biru di sebelah kiri

**Relevant Context:**
- Contoh objektif: "Peserta dapat memahami konsep pembinaan item", "Peserta dapat membina item mengikut aras Taksonomi Bloom", dll.
- Dummy data disimpan dalam `script.js` sebagai objek `dataDashboard`

---

### Sub-Tugas 4: Seksyen Senarai Subjek

**Status:** `[x] done`

**Intent:**
Bina seksyen yang memaparkan semua subjek yang ditawarkan dalam kursus pembinaan item dalam format kad grid yang menarik.

**Expected Outcomes:**
- Grid kad subjek (3 kolum di desktop, 1 kolum di mobile)
- Setiap kad subjek menunjukkan: nama subjek, kod subjek, bilangan item sasaran, nama penyelaras
- Kad berwarna biru muda dengan border biru
- Dummy data sekurang-kurangnya 6 subjek

**Todo List:**
- [ ] Tambah HTML untuk seksyen `#subjek` dengan tajuk seksyen
- [ ] Tambah `<div id="gridSubjek">` sebagai container untuk kad-kad subjek
- [ ] Cipta dummy data subjek dalam `script.js` (array dengan kod, nama, jumlahItem, penyelaras)
- [ ] Tulis JavaScript untuk render kad subjek secara dinamik dari dummy data
- [ ] Tambah CSS untuk grid kad dengan hover effect (shadow bertambah, warna berubah)
- [ ] Pastikan grid responsif menggunakan CSS Grid dengan `auto-fill`

**Relevant Context:**
- Gunakan CSS Grid: `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`
- Kad subjek perlu ada ikon (emoji atau unicode) untuk visual menarik

---

### Sub-Tugas 5: Seksyen Senarai Penggubal Item

**Status:** `[x] done`

**Intent:**
Bina seksyen yang memaparkan senarai penggubal item dengan ciri turas (filter) mengikut subjek, supaya pengguna boleh lihat penggubal bagi setiap subjek dengan mudah.

**Expected Outcomes:**
- Butang turas untuk setiap subjek (dan satu butang "Semua")
- Butang turas aktif berwarna biru penuh, butang tidak aktif berwarna biru muda
- Jadual penggubal dengan lajur: No, Nama Penggubal, Institusi/Organisasi, Subjek, Bilangan Item Dibina
- Jadual ditapis secara langsung apabila klik butang subjek
- Dummy data sekurang-kurangnya 12 orang penggubal merentasi 6 subjek

**Todo List:**
- [ ] Tambah HTML untuk seksyen `#penggubal` dengan tajuk seksyen
- [ ] Tambah `<div id="turasSubjek">` untuk container butang-butang turas
- [ ] Tambah `<table id="jadualPenggubal">` untuk jadual penggubal
- [ ] Cipta dummy data penggubal dalam `script.js` (nama, institusi, subjek, jumlahItem)
- [ ] Tulis JavaScript untuk render butang turas dari senarai subjek unik
- [ ] Tulis JavaScript untuk render jadual penggubal, dengan fungsi turas berdasarkan subjek yang dipilih
- [ ] Tambah CSS untuk butang turas aktif/tidak aktif dengan warna biru
- [ ] Tambah animasi fade-in ringkas apabila jadual ditapis

**Relevant Context:**
- Turas bekerja pada dummy data di JavaScript (tiada panggilan API)
- Gunakan `data-subjek` attribute pada baris jadual untuk memudahkan turas

---

### Sub-Tugas 6: Polish & Responsif

**Status:** `[x] done`

**Intent:**
Pastikan keseluruhan dashboard kelihatan kemas, konsisten, dan berfungsi dengan baik di skrin desktop mahupun mobile.

**Expected Outcomes:**
- Navbar responsif (menu runtuh di mobile)
- Semua seksyen kelihatan baik di lebar skrin 320px hingga 1920px
- Footer ringkas berwarna biru gelap
- Smooth scroll apabila klik pautan navigasi
- Butang "Ke Atas" muncul apabila scroll ke bawah

**Todo List:**
- [ ] Tambah CSS `media queries` untuk layout mobile (navbar, grid, jadual)
- [ ] Jadikan jadual boleh scroll mendatar di mobile (`overflow-x: auto`)
- [ ] Tambah `scroll-behavior: smooth` pada `html`
- [ ] Cipta footer dengan maklumat kursus dan warna biru gelap
- [ ] Tambah butang "↑ Ke Atas" yang muncul selepas scroll 300px menggunakan JavaScript
- [ ] Semak dan pastikan semua warna biru konsisten menggunakan CSS variables

**Relevant Context:**
- Gunakan CSS variables yang ditetapkan di Sub-Tugas 1 untuk konsistensi warna
- Breakpoint mobile: `max-width: 768px`
