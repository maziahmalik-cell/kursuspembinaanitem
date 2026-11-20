/* ═══════════════════════════════════════════════════════════════
   DASHBOARD KURSUS PEMBINAAN ITEM — script.js
   Dummy data & semua logik JavaScript
═══════════════════════════════════════════════════════════════ */

/* ───────────────────────────────────────────
   DUMMY DATA
─────────────────────────────────────────── */
const dataDashboard = {

  /* INFO AM KURSUS */
  infoKursus: {
    nama:     'Kursus Pembinaan Item Penilaian Kebangsaan',
    tarikh:   '20 – 22 November 2026',
    tempat:   'Hotel Marriott, Putrajaya',
    penganjur:'Lembaga Peperiksaan Malaysia',
    jumlahPeserta: 10,
    jumlahSubjek:  6,
  },

  /* OBJEKTIF KURSUS */
  objektif: [
    {
      tajuk: 'Memahami Konsep Pembinaan Item',
      penerangan: 'Peserta dapat memahami prinsip asas dan konsep pembinaan item yang baik mengikut standard penilaian kebangsaan.'
    },
    {
      tajuk: 'Aplikasi Taksonomi Bloom',
      penerangan: 'Peserta berupaya membina item mengikut aras kognitif Taksonomi Bloom (Mengingat, Memahami, Mengaplikasi, Menganalisis, Menilai, Mencipta).'
    },
    {
      tajuk: 'Teknik Penulisan Stem & Distractor',
      penerangan: 'Peserta mahir menulis stem soalan yang jelas dan pengecoh (distractor) yang berkesan bagi item pelbagai pilihan.'
    },
    {
      tajuk: 'Semakan & Pengesahan Item',
      penerangan: 'Peserta dapat menjalankan proses semakan rakan sejawat dan pengesahan item mengikut prosedur yang ditetapkan.'
    },
    {
      tajuk: 'Penggunaan Jadual Spesifikasi Ujian (JSU)',
      penerangan: 'Peserta faham cara membina dan menggunakan JSU sebagai panduan dalam pengagihan item mengikut aras dan kandungan.'
    },
    {
      tajuk: 'Etika & Kerahsiaan Item',
      penerangan: 'Peserta menghayati etika kerja dan tanggungjawab menjaga kerahsiaan item peperiksaan yang telah dibina.'
    }
  ],

  /* SENARAI SUBJEK */
  subjek: [
    { kod: 'BM1101', nama: 'Bahasa Melayu', ikon: '📖', jumlahItem: 40, penyelaras: 'Pn. Siti Rahimah bt Yusof' },
    { kod: 'BI1102', nama: 'Bahasa Inggeris', ikon: '🌐', jumlahItem: 40, penyelaras: 'En. Hafizuddin bin Ahmad' },
    { kod: 'MT1103', nama: 'Matematik', ikon: '🔢', jumlahItem: 35, penyelaras: 'Dr. Lim Chee Wah' },
    { kod: 'SC1104', nama: 'Sains', ikon: '🔬', jumlahItem: 35, penyelaras: 'Pn. Norashikin bt Hamid' },
    { kod: 'SJ1105', nama: 'Sejarah', ikon: '🏛️', jumlahItem: 30, penyelaras: 'En. Zulkarnain bin Osman' },
    { kod: 'GG1106', nama: 'Geografi', ikon: '🗺️', jumlahItem: 30, penyelaras: 'Cik Nurul Ain bt Mohd Zain' }
  ],

  /* PESERTA KURSUS */
  peserta: [
    { nama: 'Mohd Faizal bin Ramli',      jawatan: 'Guru Kanan',      sesi: [true,  true,  true] },
    { nama: 'Noraini bt Abdullah',         jawatan: 'Penolong Kanan',  sesi: [true,  true,  false] },
    { nama: 'Ahmad Zulhilmi bin Hashim',   jawatan: 'Guru Mata Pelajaran', sesi: [true, true, true] },
    { nama: 'Siti Hajar bt Mohd Noor',     jawatan: 'Guru Mata Pelajaran', sesi: [true, false, true] },
    { nama: 'Khairul Anwar bin Ismail',    jawatan: 'Guru Kanan',      sesi: [true,  true,  true] },
    { nama: 'Zuraidah bt Zainal',          jawatan: 'Pensyarah',       sesi: [false, true,  true] },
    { nama: 'Mohd Nizam bin Razali',       jawatan: 'Pegawai Pelajaran', sesi: [true, true, true] },
    { nama: 'Farah Nadia bt Ibrahim',      jawatan: 'Guru Mata Pelajaran', sesi: [true, true, false] },
    { nama: 'Shahrul Nizam bin Kasim',     jawatan: 'Guru Kanan',      sesi: [true,  true,  true] },
    { nama: 'Nurul Izzati bt Mohd Yusof',  jawatan: 'Pensyarah',       sesi: [false, false, true] }
  ],

  /* PENGGUBAL ITEM */
  penggubal: [
    { nama: 'Mohd Faizal bin Ramli',      institusi: 'SMK Tun Hussein Onn, KL',         subjek: 'Bahasa Melayu',  jumlahItem: 8 },
    { nama: 'Noraini bt Abdullah',         institusi: 'SMK Dato Undang Musa, N9',         subjek: 'Bahasa Melayu',  jumlahItem: 7 },
    { nama: 'Pn. Siti Rahimah bt Yusof',   institusi: 'Lembaga Peperiksaan Malaysia',     subjek: 'Bahasa Melayu',  jumlahItem: 10 },
    { nama: 'Ahmad Zulhilmi bin Hashim',   institusi: 'SMK Bukit Jalil, KL',              subjek: 'Bahasa Inggeris', jumlahItem: 8 },
    { nama: 'En. Hafizuddin bin Ahmad',    institusi: 'Lembaga Peperiksaan Malaysia',     subjek: 'Bahasa Inggeris', jumlahItem: 10 },
    { nama: 'Farah Nadia bt Ibrahim',      institusi: 'SMK Puteri Titiwangsa, KL',        subjek: 'Bahasa Inggeris', jumlahItem: 7 },
    { nama: 'Khairul Anwar bin Ismail',    institusi: 'SMK Tun Abdul Razak, Pahang',      subjek: 'Matematik',      jumlahItem: 9 },
    { nama: 'Dr. Lim Chee Wah',            institusi: 'Institut Pendidikan Guru Malaysia', subjek: 'Matematik',      jumlahItem: 10 },
    { nama: 'Shahrul Nizam bin Kasim',     institusi: 'SMK Kompleks Gombak, Selangor',    subjek: 'Matematik',      jumlahItem: 7 },
    { nama: 'Zuraidah bt Zainal',          institusi: 'Universiti Pendidikan Sultan Idris', subjek: 'Sains',         jumlahItem: 10 },
    { nama: 'Pn. Norashikin bt Hamid',     institusi: 'Lembaga Peperiksaan Malaysia',     subjek: 'Sains',          jumlahItem: 10 },
    { nama: 'Mohd Nizam bin Razali',       institusi: 'JPN Selangor',                     subjek: 'Sains',          jumlahItem: 6 },
    { nama: 'Siti Hajar bt Mohd Noor',     institusi: 'SMK Jalan Kebun, Selangor',        subjek: 'Sejarah',        jumlahItem: 8 },
    { nama: 'En. Zulkarnain bin Osman',    institusi: 'Lembaga Peperiksaan Malaysia',     subjek: 'Sejarah',        jumlahItem: 10 },
    { nama: 'Nurul Izzati bt Mohd Yusof',  institusi: 'Universiti Malaya',                subjek: 'Geografi',       jumlahItem: 9 },
    { nama: 'Cik Nurul Ain bt Mohd Zain',  institusi: 'Lembaga Peperiksaan Malaysia',     subjek: 'Geografi',       jumlahItem: 10 }
  ]
};

/* ═══════════════════════════════════════════════════════════════
   RENDER: SEKSYEN 1 — KEHADIRAN PESERTA
═══════════════════════════════════════════════════════════════ */
function renderKehadiran() {
  const peserta = dataDashboard.peserta;

  /* Kira statistik */
  let jumlahHadir = 0, jumlahTidakHadir = 0;
  peserta.forEach(p => {
    p.sesi.forEach(s => {
      if (s) jumlahHadir++; else jumlahTidakHadir++;
    });
  });
  const jumlahSesi = peserta.length * peserta[0].sesi.length;

  /* Render kad statistik */
  const statsEl = document.getElementById('kehadiranStats');
  statsEl.innerHTML = `
    <div class="stat-kad">
      <div class="stat-num">${peserta.length}</div>
      <div class="stat-label">Jumlah Peserta</div>
    </div>
    <div class="stat-kad hijau-top">
      <div class="stat-num">${jumlahHadir}</div>
      <div class="stat-label">Kehadiran (sesi)</div>
    </div>
    <div class="stat-kad merah-top">
      <div class="stat-num">${jumlahTidakHadir}</div>
      <div class="stat-label">Tidak Hadir (sesi)</div>
    </div>
    <div class="stat-kad">
      <div class="stat-num">${Math.round((jumlahHadir / jumlahSesi) * 100)}%</div>
      <div class="stat-label">Peratusan Hadir</div>
    </div>
  `;

  /* Render jadual */
  const tbody = document.getElementById('jadualPesertaBody');
  tbody.innerHTML = peserta.map((p, i) => {
    const jumlahHadirP = p.sesi.filter(Boolean).length;
    const sesiHtml = p.sesi.map(s =>
      s ? '<td style="text-align:center"><span class="badge-hadir">✔ Hadir</span></td>'
        : '<td style="text-align:center"><span class="badge-tidak-hadir">✘ Tidak</span></td>'
    ).join('');
    return `
      <tr>
        <td class="td-no">${i + 1}</td>
        <td><strong>${p.nama}</strong></td>
        <td>${p.jawatan}</td>
        ${sesiHtml}
        <td class="td-jumlah">${jumlahHadirP} / ${p.sesi.length}</td>
      </tr>`;
  }).join('');

  /* Render carta donut */
  const ctx = document.getElementById('cartaKehadiran').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Hadir', 'Tidak Hadir'],
      datasets: [{
        data: [jumlahHadir, jumlahTidakHadir],
        backgroundColor: ['#2563eb', '#ef4444'],
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 3,
        hoverOffset: 8
      }]
    },
    options: {
      cutout: '65%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { size: 13 }, padding: 16 }
        },
        tooltip: {
          callbacks: {
            label: ctx => {
              const pct = Math.round((ctx.parsed / jumlahSesi) * 100);
              return ` ${ctx.label}: ${ctx.parsed} sesi (${pct}%)`;
            }
          }
        }
      }
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: SEKSYEN 2 — OBJEKTIF KURSUS
═══════════════════════════════════════════════════════════════ */
function renderObjektif() {
  const info = dataDashboard.infoKursus;

  /* Kad maklumat am */
  const infoEl = document.getElementById('infoKursus');
  infoEl.innerHTML = [
    { label: 'Nama Kursus',  nilai: info.nama },
    { label: 'Tarikh',       nilai: info.tarikh },
    { label: 'Tempat',       nilai: info.tempat },
    { label: 'Penganjur',    nilai: info.penganjur },
    { label: 'Jumlah Peserta', nilai: `${info.jumlahPeserta} Orang` },
    { label: 'Jumlah Subjek',  nilai: `${info.jumlahSubjek} Subjek` }
  ].map(item => `
    <div class="info-item">
      <div class="info-label">${item.label}</div>
      <div class="info-nilai">${item.nilai}</div>
    </div>`
  ).join('');

  /* Kad-kad objektif */
  const gridEl = document.getElementById('objektifGrid');
  gridEl.innerHTML = dataDashboard.objektif.map((obj, i) => `
    <div class="objektif-kad">
      <div class="objektif-num">${i + 1}</div>
      <div class="objektif-teks">
        <h4>${obj.tajuk}</h4>
        <p>${obj.penerangan}</p>
      </div>
    </div>`
  ).join('');
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: SEKSYEN 3 — SENARAI SUBJEK
═══════════════════════════════════════════════════════════════ */
function renderSubjek() {
  const gridEl = document.getElementById('gridSubjek');
  gridEl.innerHTML = dataDashboard.subjek.map(s => `
    <div class="subjek-kad">
      <span class="subjek-ikon">${s.ikon}</span>
      <div class="subjek-kod">${s.kod}</div>
      <div class="subjek-nama">${s.nama}</div>
      <div class="subjek-info">
        <span>🎯 Sasaran item: <strong>${s.jumlahItem} item</strong></span>
        <span>👤 Penyelaras: <strong>${s.penyelaras}</strong></span>
      </div>
    </div>`
  ).join('');
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: SEKSYEN 4 — PENGGUBAL ITEM
═══════════════════════════════════════════════════════════════ */
function renderPenggubal(turasAktif = 'Semua') {
  const semua = dataDashboard.penggubal;

  /* Render baris jadual */
  const senarai = turasAktif === 'Semua'
    ? semua
    : semua.filter(p => p.subjek === turasAktif);

  const tbody = document.getElementById('jadualPenggubalBody');
  tbody.innerHTML = '';

  senarai.forEach((p, i) => {
    const tr = document.createElement('tr');
    tr.className = 'fade-in';
    tr.dataset.subjek = p.subjek;
    tr.innerHTML = `
      <td class="td-no">${i + 1}</td>
      <td><strong>${p.nama}</strong></td>
      <td>${p.institusi}</td>
      <td><span class="subjek-tag">${p.subjek}</span></td>
      <td class="td-jumlah">${p.jumlahItem} item</td>`;
    tbody.appendChild(tr);
  });

  /* Aktifkan butang turas yang betul */
  document.querySelectorAll('.btn-turas').forEach(btn => {
    btn.classList.toggle('aktif', btn.dataset.nilai === turasAktif);
  });
}

function renderTurasPenggubal() {
  /* Ambil senarai subjek unik */
  const subjekUnik = ['Semua', ...new Set(dataDashboard.penggubal.map(p => p.subjek))];

  const container = document.getElementById('turasSubjek');
  container.innerHTML = subjekUnik.map(s => `
    <button class="btn-turas${s === 'Semua' ? ' aktif' : ''}" data-nilai="${s}">${s}</button>`
  ).join('');

  container.addEventListener('click', e => {
    if (e.target.classList.contains('btn-turas')) {
      renderPenggubal(e.target.dataset.nilai);
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR TOGGLE (MOBILE)
═══════════════════════════════════════════════════════════════ */
function initNavbar() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));

  /* Tutup menu apabila klik pautan */
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ═══════════════════════════════════════════════════════════════
   BUTANG KE ATAS
═══════════════════════════════════════════════════════════════ */
function initBtnKeAtas() {
  const btn = document.getElementById('btnKeAtas');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ═══════════════════════════════════════════════════════════════
   TAMBAH STYLE INLINE UNTUK .subjek-tag
═══════════════════════════════════════════════════════════════ */
(function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .subjek-tag {
      display: inline-block;
      background: var(--biru-muda);
      color: var(--biru-tua);
      padding: 0.15rem 0.6rem;
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: 600;
    }
  `;
  document.head.appendChild(style);
})();

/* ═══════════════════════════════════════════════════════════════
   INIT — Jalankan semua fungsi render
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderKehadiran();
  renderObjektif();
  renderSubjek();
  renderTurasPenggubal();
  renderPenggubal();
  initNavbar();
  initBtnKeAtas();
});
