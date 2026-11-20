# Plan: Dashboard Kelas

## Gambaran Keseluruhan

Membina sebuah dashboard kelas berbasis web yang mempunyai dua jenis pengguna — **Guru** dan **Pelajar**. Guru boleh mengurus pelajar, markah, kehadiran, tugasan dan pengumuman. Pelajar boleh melihat maklumat peribadi mereka seperti gred, kehadiran, tugasan dan jadual kelas.

**Stack yang digunakan:**
- **Frontend & Backend:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Database & Auth:** Firebase (Firestore + Authentication)
- **Carta/Graf:** Recharts

**Skop:**
- Sistem log masuk dengan dua peranan (guru / pelajar)
- Halaman dashboard guru dengan ciri pengurusan penuh
- Halaman dashboard pelajar dengan paparan maklumat peribadi
- Responsive design (boleh guna di desktop dan mobile)

**Bukan dalam skop:**
- Sistem pembayaran yuran
- Video streaming / kelas dalam talian
- Aplikasi mobile (native)

---

## Sub-Tugas

---

### Sub-Tugas 1: Scaffolding Projek & Konfigurasi

**Status:** `[ ] pending`

**Intent:**
Sediakan struktur projek Next.js dengan Tailwind CSS dan Firebase, termasuk semua konfigurasi asas yang diperlukan sebelum mula membina halaman.

**Expected Outcomes:**
- Projek Next.js berjalan di `localhost:3000`
- Tailwind CSS berfungsi
- Firebase SDK tersedia dan dikonfigurasi
- Struktur folder projek tersusun mengikut peranan (guru/pelajar)

**Todo List:**
- [ ] Cipta projek Next.js baru dengan TypeScript: `npx create-next-app@latest dashboard-kelas --typescript --tailwind --app`
- [ ] Pasang pakej Firebase: `npm install firebase`
- [ ] Pasang pakej Recharts: `npm install recharts`
- [ ] Cipta fail `lib/firebase.ts` untuk inisialisasi Firebase
- [ ] Cipta fail `.env.local` untuk simpan Firebase config keys
- [ ] Sediakan struktur folder: `app/guru/`, `app/pelajar/`, `components/`, `lib/`, `types/`
- [ ] Cipta fail `types/index.ts` untuk definisi TypeScript (Pelajar, Guru, Markah, Kehadiran, Tugasan)

**Relevant Context:**
- Firebase project perlu dibuat di console.firebase.google.com
- Gunakan Firestore dalam mode "test" semasa development

---

### Sub-Tugas 2: Sistem Pengesahan (Authentication)

**Status:** `[ ] pending`

**Intent:**
Bina sistem log masuk yang membezakan peranan guru dan pelajar menggunakan Firebase Authentication, dengan redirect automatik ke dashboard masing-masing.

**Expected Outcomes:**
- Halaman log masuk berfungsi dengan email & password
- Guru diredirect ke `/guru/dashboard` selepas log masuk
- Pelajar diredirect ke `/pelajar/dashboard` selepas log masuk
- Route yang dilindungi tidak boleh diakses tanpa log masuk
- Butang log keluar berfungsi

**Todo List:**
- [ ] Cipta halaman log masuk `app/login/page.tsx` dengan borang email & password
- [ ] Cipta `lib/auth.ts` dengan fungsi `signIn`, `signOut`, dan `getUserRole`
- [ ] Simpan maklumat peranan pengguna dalam Firestore koleksi `users`
- [ ] Cipta `components/AuthGuard.tsx` untuk lindungi route
- [ ] Tambah redirect logic berdasarkan peranan pengguna
- [ ] Cipta halaman `app/guru/layout.tsx` dan `app/pelajar/layout.tsx` dengan AuthGuard

**Relevant Context:**
- Koleksi Firestore: `users/{uid}` dengan field `role: "guru" | "pelajar"`, `nama`, `email`
- Gunakan Firebase `onAuthStateChanged` untuk pantau status log masuk

---

### Sub-Tugas 3: Dashboard Guru — Halaman Utama & Pengurusan Pelajar

**Status:** `[ ] pending`

**Intent:**
Bina halaman utama dashboard guru yang menunjukkan ringkasan kelas, dan halaman pengurusan senarai pelajar.

**Expected Outcomes:**
- Halaman `/guru/dashboard` menunjukkan: jumlah pelajar, purata markah, peratusan kehadiran, tugasan belum dihantar
- Halaman `/guru/pelajar` menunjukkan senarai pelajar dalam jadual
- Guru boleh tambah, edit, dan padam pelajar
- Navigasi sidebar berfungsi

**Todo List:**
- [ ] Cipta `components/guru/Sidebar.tsx` dengan navigasi ke semua bahagian
- [ ] Cipta `components/guru/StatCard.tsx` untuk paparan nombor ringkasan
- [ ] Cipta halaman `app/guru/dashboard/page.tsx` dengan 4 kad statistik
- [ ] Cipta halaman `app/guru/pelajar/page.tsx` dengan jadual senarai pelajar
- [ ] Cipta `components/guru/ModalTambahPelajar.tsx` untuk borang tambah/edit pelajar
- [ ] Sambung operasi CRUD ke Firestore koleksi `pelajar`

**Relevant Context:**
- Koleksi Firestore: `pelajar/{id}` dengan field `nama`, `email`, `noMatrik`, `telefon`
- Gunakan `components/guru/` untuk semua komponen khusus guru

---

### Sub-Tugas 4: Dashboard Guru — Kehadiran & Markah

**Status:** `[ ] pending`

**Intent:**
Bina ciri rekod kehadiran harian dan sistem input markah untuk pelajar, termasuk paparan carta.

**Expected Outcomes:**
- Guru boleh ambil kehadiran harian (hadir/tidak hadir/lewat) untuk setiap pelajar
- Halaman markah menunjukkan senarai tugasan dan markah setiap pelajar
- Carta bar menunjukkan perbandingan markah kelas
- Carta pai menunjukkan statistik kehadiran kelas

**Todo List:**
- [ ] Cipta halaman `app/guru/kehadiran/page.tsx` dengan senarai pelajar dan toggle hadir/tidak hadir
- [ ] Simpan rekod kehadiran ke Firestore: `kehadiran/{tarikh}/pelajar/{pelajarId}`
- [ ] Cipta halaman `app/guru/markah/page.tsx` dengan jadual markah boleh edit
- [ ] Simpan markah ke Firestore: `markah/{pelajarId}/subjek/{subjekId}`
- [ ] Cipta `components/ChartKehadiran.tsx` menggunakan Recharts PieChart
- [ ] Cipta `components/ChartMarkah.tsx` menggunakan Recharts BarChart

**Relevant Context:**
- Gunakan Recharts `BarChart`, `PieChart`, `ResponsiveContainer`
- Kehadiran disimpan mengikut tarikh supaya mudah ditapis

---

### Sub-Tugas 5: Dashboard Guru — Tugasan & Pengumuman

**Status:** `[ ] pending`

**Intent:**
Bina sistem pengurusan tugasan dan pengumuman yang boleh diterbitkan kepada pelajar.

**Expected Outcomes:**
- Guru boleh cipta tugasan baru dengan tajuk, penerangan, dan tarikh akhir
- Guru boleh lihat status hantar tugasan setiap pelajar
- Guru boleh pos pengumuman yang akan dipapar di dashboard pelajar

**Todo List:**
- [ ] Cipta halaman `app/guru/tugasan/page.tsx` dengan senarai tugasan
- [ ] Cipta `components/guru/ModalTambahTugasan.tsx` untuk borang tugasan baru
- [ ] Simpan tugasan ke Firestore: `tugasan/{id}` dengan field `tajuk`, `penerangan`, `tarikhAkhir`, `status`
- [ ] Cipta halaman `app/guru/pengumuman/page.tsx` dengan borang tambah pengumuman
- [ ] Simpan pengumuman ke Firestore: `pengumuman/{id}` dengan field `tajuk`, `isi`, `tarikh`

**Relevant Context:**
- Koleksi tugasan perlu ada field `hantaranPelajar: { [pelajarId]: boolean }` untuk track status hantar

---

### Sub-Tugas 6: Dashboard Pelajar

**Status:** `[ ] pending`

**Intent:**
Bina keseluruhan dashboard pelajar yang membolehkan pelajar melihat maklumat peribadi mereka — gred, kehadiran, tugasan, jadual, dan pengumuman.

**Expected Outcomes:**
- Pelajar boleh log masuk dan lihat dashboard peribadi mereka
- Halaman gred menunjukkan markah setiap subjek dengan carta
- Halaman kehadiran menunjukkan rekod hadir/tidak hadir
- Halaman tugasan menunjukkan senarai tugasan dan status
- Halaman pengumuman menunjukkan semua pengumuman guru

**Todo List:**
- [ ] Cipta `components/pelajar/Sidebar.tsx` dengan navigasi pelajar
- [ ] Cipta halaman `app/pelajar/dashboard/page.tsx` dengan ringkasan peribadi
- [ ] Cipta halaman `app/pelajar/gred/page.tsx` dengan jadual markah dan carta
- [ ] Cipta halaman `app/pelajar/kehadiran/page.tsx` dengan rekod kehadiran bulanan
- [ ] Cipta halaman `app/pelajar/tugasan/page.tsx` dengan senarai tugasan dan deadline
- [ ] Cipta halaman `app/pelajar/pengumuman/page.tsx` dengan senarai pengumuman
- [ ] Semua data diambil dari Firestore berdasarkan `uid` pelajar yang log masuk

**Relevant Context:**
- Data pelajar diambil berdasarkan `uid` dari Firebase Auth
- Pelajar hanya boleh BACA data, tidak boleh TULIS (kecuali hantar tugasan)

---

### Sub-Tugas 7: Polish & Deploy

**Status:** `[ ] pending`

**Intent:**
Pastikan UI responsive, kemas, dan deploy projek ke Vercel supaya boleh diakses secara dalam talian.

**Expected Outcomes:**
- Dashboard berfungsi dengan baik di desktop dan mobile
- Loading states dan error handling ada di setiap halaman
- Projek berjaya di-deploy ke Vercel
- URL dalam talian boleh diakses

**Todo List:**
- [ ] Tambah loading skeleton untuk semua halaman yang fetch data
- [ ] Tambah empty states (bila tiada data)
- [ ] Pastikan semua halaman responsive dengan Tailwind breakpoints
- [ ] Buat akaun Vercel dan deploy dengan `vercel --prod`
- [ ] Tambah Firebase config keys ke Vercel environment variables

**Relevant Context:**
- Vercel menyokong Next.js secara native, deploy adalah mudah
- Firebase keys mestilah dalam environment variables, bukan hardcoded
