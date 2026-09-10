<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Berfikir Kritis Melalui Pembelajaran Matematika dan PKN</title>
  <style>
    :root {
      --merah:#9b1c1c; --navy:#1e2a4a; --kertas:#f4efe4; --putih:#fffdf8;
      --garis:#d7cbb6; --teks:#222; --lembut:#5b5348; --biru:#2c4a7c; --hijau:#2f5d3a;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin:0; background:var(--kertas); color:var(--teks); font:17px/1.6 Georgia,"Times New Roman",serif; }
    .topbar { position:sticky; top:0; z-index:40; background:var(--putih); border-bottom:1px solid var(--garis); }
    .topbar-in { max-width:820px; margin:0 auto; display:flex; align-items:center; gap:12px; padding:8px 12px; }
    .burger { width:44px; height:44px; border:1px solid var(--navy); background:var(--putih); display:flex; flex-direction:column; justify-content:center; align-items:center; gap:6px; cursor:pointer; }
    .burger span { display:block; width:20px; height:2px; background:var(--navy); }
    .top-label { font-family:Arial,sans-serif; font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--navy); }
    .menu-bg { position:fixed; inset:0; background:rgba(30,42,74,.4); z-index:50; display:none; }
    .menu-bg.open { display:block; }
    .menu-panel { width:min(92vw,360px); height:100%; background:var(--putih); border-right:4px solid var(--navy); padding:24px; }
    .menu-panel a { display:block; text-decoration:none; padding:12px 14px; margin:10px 0; border:1px solid var(--garis); color:var(--navy); font-family:Arial,sans-serif; }
    .menu-panel a.utama { background:var(--navy); color:var(--putih); border-color:var(--navy); }
    .wrap { max-width:820px; margin:0 auto; padding:24px 16px 64px; }
    .page { display:none; }
    .page.on { display:block; }
    header.cover { border:3px solid var(--navy); background:var(--putih); padding:28px 22px; text-align:center; }
    .sekolah { font-family:Arial,sans-serif; font-size:12px; letter-spacing:.12em; text-transform:uppercase; color:var(--navy); }
    h1 { font-size:30px; line-height:1.25; margin:12px 0 8px; color:var(--navy); }
    .sub { color:var(--lembut); margin:0 0 8px; }
    section { background:var(--putih); border:1px solid var(--garis); padding:22px 20px; margin:0 0 18px; }
    .nomor { font-family:Arial,sans-serif; font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:var(--merah); margin:0 0 6px; }
    h2 { font-size:24px; margin:0 0 12px; color:var(--navy); }
    h3 { font-size:18px; margin:16px 0 8px; }
    p { margin:0 0 12px; }
    .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .kartu { border:1px solid var(--garis); padding:12px; text-decoration:none; color:inherit; display:block; }
    .kartu.navy { background:var(--navy); color:var(--putih); }
    .dua { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
    .kotak { border:1px solid var(--garis); padding:12px; }
    .kotak.mtk { border-left:5px solid var(--biru); }
    .kotak.pkn { border-left:5px solid var(--hijau); }
    .kotak h3 { margin-top:0; }
    table { width:100%; border-collapse:collapse; font-family:Arial,sans-serif; font-size:14px; margin:10px 0 14px; }
    th,td { border:1px solid var(--garis); padding:8px; text-align:left; vertical-align:top; }
    th { background:#efe6d6; }
    .rumus { font-family:Arial,sans-serif; background:#efe6d6; padding:10px 12px; text-align:center; margin:10px 0 14px; }
    .chips { display:flex; flex-wrap:wrap; gap:8px; margin:0 0 18px; font-family:Arial,sans-serif; font-size:13px; }
    .chips a { color:var(--navy); text-decoration:none; border:1px solid var(--garis); background:var(--putih); padding:6px 10px; }
    iframe { width:100%; height:640px; border:1px solid var(--garis); background:#fff; }
    .tombol { display:inline-block; font-family:Arial,sans-serif; background:var(--navy); color:#fff; text-decoration:none; padding:10px 14px; margin-top:10px; }
    footer { font-family:Arial,sans-serif; font-size:13px; color:var(--lembut); text-align:center; }
    .caption { font-family:Arial,sans-serif; font-size:12px; color:var(--lembut); }
    @media (max-width:700px) {
      h1 { font-size:24px; }
      .dua,.grid2 { grid-template-columns:1fr; }
      iframe { height:520px; }
    }
  </style>
</head>
<body>
  <div class="topbar">
    <div class="topbar-in">
      <button class="burger" id="btnMenu" type="button" aria-label="Buka menu">
        <span></span><span></span><span></span>
      </button>
      <div class="top-label">SMPN 165 Jakarta · Kelas 8E</div>
    </div>
  </div>

  <div class="menu-bg" id="menuBg">
    <nav class="menu-panel" aria-label="Menu utama">
      <p class="nomor">Menu</p>
      <h2>Ilmuwan Cilik</h2>
      <a href="#beranda" data-page="beranda">Beranda</a>
      <a class="utama" href="#materi" data-page="materi">Pembelajaran dan Melatih Kemampuan Matematika dan Pendidikan Pancasila</a>
      <p><button type="button" id="btnTutup" style="margin-top:16px;font-family:Arial;background:none;border:0;color:#5b5348;text-decoration:underline;cursor:pointer;">Tutup</button></p>
    </nav>
  </div>

  <div class="wrap">
    <div class="page on" id="page-beranda">
      <header class="cover">
        <div class="sekolah">Kokurikuler Lintas Mapel · Ilmuwan Cilik</div>
        <h1>Berfikir Kritis Melalui Pembelajaran Matematika dan PKN</h1>
        <p class="sub">Produk 2D berupa website infografis. Matematika dijodohkan dengan Pendidikan Pancasila.</p>
      </header>
      <section>
        <p class="nomor">Identitas kelompok</p>
        <h2>Kelompok 1 · Kelas 8E</h2>
        <div class="grid2">
          <div class="kartu"><strong>Sekolah</strong><br>SMP Negeri 165 Jakarta</div>
          <div class="kartu"><strong>Kelas / kelompok</strong><br>8E · Kelompok 1</div>
          <div class="kartu"><strong>Tema</strong><br>Peningkatan Proses Pembelajaran</div>
          <div class="kartu"><strong>Bentuk karya</strong><br>Website infografis 2D</div>
        </div>
      </section>
      <section>
        <p class="nomor">Anggota kelompok</p>
        <h2>Pengenalan kelompok</h2>
        <table>
          <thead><tr><th>Nama</th><th>Peran</th></tr></thead>
          <tbody>
            <tr><td>Hamad Zaid Jessar</td><td>Ketua</td></tr>
            <tr><td>Nayyara Kimi Ayumi</td><td>Sekretaris</td></tr>
            <tr><td>Calista Anatasya</td><td>Anggota</td></tr>
            <tr><td>Alicia Eleanor Amora</td><td>Anggota</td></tr>
            <tr><td>Hamizan Alvaro</td><td>Anggota</td></tr>
            <tr><td>Muhammad Alfatharrahman</td><td>Anggota</td></tr>
          </tbody>
        </table>
      </section>
      <section>
        <p class="nomor">Layanan interaktif</p>
        <h2>Pilih layanan</h2>
        <p>Gunakan tombol menu garis tiga di kiri atas, atau kartu di bawah.</p>
        <a class="kartu navy" href="#materi" data-page="materi">
          <span class="sekolah">Layanan 1</span>
          <strong style="display:block;font-size:20px;margin:8px 0;">Pembelajaran dan Melatih Kemampuan Matematika dan Pendidikan Pancasila</strong>
          Infografis kelas 8 Bab 1 &amp; Bab 6, plus materi kelas 7, dipasangkan dengan PKN.
        </a>
        <a class="kartu" href="#kuis" data-page="materi" style="margin-top:12px;">
          <span class="sekolah" style="color:var(--merah);">Layanan 2</span>
          <strong style="display:block;font-size:20px;margin:8px 0;color:var(--navy);">Kuis interaktif Educaplay</strong>
          Latihan menjodohkan konsep Matematika dengan nilai Pancasila.
        </a>
      </section>
      <footer><p>Ilmuwan Cilik · SMP Negeri 165 Jakarta</p></footer>
    </div>

    <div class="page" id="page-materi">
      <header class="cover">
        <div class="sekolah">Pembelajaran dan Melatih Kemampuan</div>
        <h1>Matematika dan Pendidikan Pancasila</h1>
        <p class="sub">Infografis menjodohkan konsep Matematika dengan Pendidikan Pancasila. Materi: kelas 8 Bab 1 dan Bab 6, plus seluruh materi kelas 7.</p>
      </header>
      <div class="chips">
        <a href="#cara">Cara baca</a><a href="#k8b1">Aljabar</a><a href="#k8b6">Peluang</a>
        <a href="#k7bil">Bilangan bulat</a><a href="#k7pers">Persamaan</a><a href="#k7band">Perbandingan</a>
        <a href="#k7data">Data</a><a href="#k7bangun">Bangun</a><a href="#kuis">Kuis</a>
      </div>
      <section id="cara">
        <p class="nomor">Cara memakai infografis</p>
        <h2>Jodohkan seperti kuis</h2>
        <p>Setiap halaman punya dua sisi. Sisi kiri: konsep Matematika. Sisi kanan: nilai PKN. Cari pasangan yang tepat, jangan langsung percaya klaim.</p>
        <table>
          <thead><tr><th>Kartu Matematika</th><th>Kartu PKN yang cocok</th></tr></thead>
          <tbody>
            <tr><td>Bentuk aljabar (kelas 8 Bab 1)</td><td>Aturan yang bisa dicek, bukan hanya diucapkan</td></tr>
            <tr><td>Peluang (kelas 8 Bab 6)</td><td>Musyawarah jangan berdasarkan desas-desus</td></tr>
            <tr><td>Bilangan bulat +/− (kelas 7)</td><td>Hak dan kewajiban saling menyeimbangkan</td></tr>
            <tr><td>Persamaan linear (kelas 7)</td><td>Keadilan: ruas kiri dan kanan harus seimbang</td></tr>
            <tr><td>Perbandingan (kelas 7)</td><td>Pembagian tugas dan fasilitas yang proporsional</td></tr>
            <tr><td>Data dan diagram (kelas 7)</td><td>Keputusan bersama berdasarkan fakta</td></tr>
            <tr><td>Bangun datar dan ruang (kelas 7)</td><td>Fasilitas sekolah adalah milik bersama</td></tr>
          </tbody>
        </table>
      </section>
      <section id="k8b1">
        <p class="nomor">Kelas 8 · Bab 1 · Menyederhanakan bentuk aljabar</p>
        <h2>Aljabar membuat aturan bisa dihitung</h2>
        <p>Bentuk aljabar memakai huruf untuk mewakili suatu nilai. Huruf itu disebut variabel. Suku-suku sejenis boleh dijumlahkan.</p>
        <div class="rumus">3x + 2x + 5 = 5x + 5</div>
        <p>Contoh: tiap kelompok membawa 4 sapu, dan ada 5 sapu cadangan. Jika kelompoknya x, jumlah sapu = 4x + 5.</p>
        <div class="dua">
          <div class="kotak mtk"><h3>Pasangan Matematika</h3><p>Sederhanakan dulu, baru dipakai untuk mengambil keputusan.</p></div>
          <div class="kotak pkn"><h3>Pasangan PKN</h3><p>Tata tertib sekolah harus jelas. Sila ke-5 meminta keadilan yang dapat dijelaskan.</p></div>
        </div>
      </section>
      <section id="k8b6">
        <p class="nomor">Kelas 8 · Bab 6 · Peluang</p>
        <h2>Peluang menguji kata “hampir semua”</h2>
        <p>Peluang suatu kejadian adalah perbandingan banyak hasil yang dimaksud dengan banyak semua hasil yang mungkin.</p>
        <div class="rumus">P(kejadian) = banyak hasil dimaksud / banyak semua hasil</div>
        <p>Contoh: dari 10 kartu nama siswa, 3 kartu bertuliskan “setuju pulang awal”. Peluang = 3/10. Itu belum berarti “hampir seluruh kelas setuju”.</p>
        <div class="dua">
          <div class="kotak mtk"><h3>Pasangan Matematika</h3><p>Sampel kecil bukan bukti untuk semua orang.</p></div>
          <div class="kotak pkn"><h3>Pasangan PKN</h3><p>Musyawarah (sila ke-4) butuh data, bukan desas-desus.</p></div>
        </div>
      </section>
      <section id="k7bil">
        <p class="nomor">Kelas 7 · Bilangan bulat</p>
        <h2>Positif dan negatif menyeimbangkan tanggung jawab</h2>
        <div class="rumus">(+7) + (−7) = 0</div>
        <p>Contoh: kas kelas bertambah Rp7.000 lalu dipakai Rp7.000. Saldo kembali seimbang.</p>
        <div class="dua">
          <div class="kotak mtk"><h3>Pasangan Matematika</h3><p>Tanda + dan − harus ditulis.</p></div>
          <div class="kotak pkn"><h3>Pasangan PKN</h3><p>Hak dan kewajiban berjalan berpasangan.</p></div>
        </div>
      </section>
      <section id="k7pers">
        <p class="nomor">Kelas 7 · Persamaan linear</p>
        <h2>Persamaan menjaga kedua ruas tetap adil</h2>
        <div class="rumus">x + 4 = 10 → x = 6</div>
        <p>Contoh: 6 kelompok mendapat bagian sama dari 24 tugas piket. 6x = 24, jadi x = 4.</p>
        <div class="dua">
          <div class="kotak mtk"><h3>Pasangan Matematika</h3><p>Kalau hanya satu ruas yang diubah, persamaan menjadi salah.</p></div>
          <div class="kotak pkn"><h3>Pasangan PKN</h3><p>Keadilan sosial menuntut perlakuan yang dapat dihitung.</p></div>
        </div>
      </section>
      <section id="k7band">
        <p class="nomor">Kelas 7 · Perbandingan</p>
        <h2>Perbandingan mengatur bagian yang proporsional</h2>
        <div class="rumus">2 : 3 = 8 : 12</div>
        <p>Contoh senilai: 2 guru mendampingi 3 kelompok. Untuk 6 kelompok diperlukan 4 guru.</p>
        <div class="dua">
          <div class="kotak mtk"><h3>Pasangan Matematika</h3><p>Tulis rasio dengan satuan yang sama.</p></div>
          <div class="kotak pkn"><h3>Pasangan PKN</h3><p>Pembagian kerja bakti sebaiknya proporsional.</p></div>
        </div>
      </section>
      <section id="k7data">
        <p class="nomor">Kelas 7 · Data dan diagram</p>
        <h2>Diagram menolong musyawarah berbasis fakta</h2>
        <table>
          <thead><tr><th>Pilihan kegiatan kelas</th><th>Suara</th></tr></thead>
          <tbody>
            <tr><td>Mading Pancasila</td><td>12</td></tr>
            <tr><td>Kerja bakti perpustakaan</td><td>8</td></tr>
            <tr><td>Lomba pidato</td><td>5</td></tr>
          </tbody>
        </table>
        <svg viewBox="0 0 360 110" width="100%" aria-label="Diagram batang">
          <text x="0" y="20" font-size="12" font-family="Arial">Mading</text>
          <rect x="70" y="8" width="168" height="16" fill="#2c4a7c"></rect>
          <text x="244" y="21" font-size="12" font-family="Arial">12</text>
          <text x="0" y="52" font-size="12" font-family="Arial">Bakti</text>
          <rect x="70" y="40" width="112" height="16" fill="#2f5d3a"></rect>
          <text x="188" y="53" font-size="12" font-family="Arial">8</text>
          <text x="0" y="84" font-size="12" font-family="Arial">Pidato</text>
          <rect x="70" y="72" width="70" height="16" fill="#9b1c1c"></rect>
          <text x="146" y="85" font-size="12" font-family="Arial">5</text>
        </svg>
        <p class="caption">Gambar 1. Hasil penjaringan pendapat 25 siswa.</p>
        <div class="dua">
          <div class="kotak mtk"><h3>Pasangan Matematika</h3><p>Jumlah suara 12 + 8 + 5 = 25. Grafik harus sesuai tabel.</p></div>
          <div class="kotak pkn"><h3>Pasangan PKN</h3><p>Keputusan kelas memakai data, lalu menghargai kelompok yang kalah jumlah.</p></div>
        </div>
      </section>
      <section id="k7bangun">
        <p class="nomor">Kelas 7 · Bangun datar dan bangun ruang</p>
        <h2>Ukuran ruang milik bersama harus dihitung</h2>
        <div class="rumus">Luas persegi panjang = p × l | Volume balok = p × l × t</div>
        <p>Contoh: pojok baca 3 m × 2 m = 6 m². Fasilitas milik bersama, jadi ukurannya perlu masuk akal untuk semua.</p>
        <div class="dua">
          <div class="kotak mtk"><h3>Pasangan Matematika</h3><p>Hitung luas lantai sebelum menambah barang.</p></div>
          <div class="kotak pkn"><h3>Pasangan PKN</h3><p>Sekolah adalah ruang bersama.</p></div>
        </div>
      </section>
      <section id="kuis">
        <p class="nomor">Latihan menjodohkan</p>
        <h2>Kuis Educaplay</h2>
        <p>Setelah membaca infografis, jodohkan soal dengan jawaban yang tepat.</p>
        <iframe title="Kuis Matching Matematika dan Pendidikan Pancasila" src="https://www.educaplay.com/learning-resources/30519624-matching_fotosintesis_dasar.html" allowfullscreen loading="lazy"></iframe>
        <p><a class="tombol" href="https://www.educaplay.com/learning-resources/30519624-matching_fotosintesis_dasar.html" target="_blank" rel="noopener">Buka kuis di tab baru</a></p>
      </section>
      <p style="text-align:center;"><a href="#beranda" data-page="beranda">Kembali ke beranda</a></p>
    </div>
  </div>

  <script>
    const beranda = document.getElementById("page-beranda");
    const materi = document.getElementById("page-materi");
    const menuBg = document.getElementById("menuBg");
    function closeMenu(){ menuBg.classList.remove("open"); }
    function show(page){
      beranda.classList.toggle("on", page === "beranda");
      materi.classList.toggle("on", page === "materi");
      closeMenu();
      if (page === "beranda") window.scrollTo(0,0);
    }
    function applyHash(){
      const h = (location.hash || "#beranda").slice(1);
      if (h === "beranda" || h === "") { show("beranda"); return; }
      show("materi");
      const el = document.getElementById(h);
      if (el) setTimeout(function(){ el.scrollIntoView({behavior:"smooth", block:"start"}); }, 50);
      else window.scrollTo(0,0);
    }
    document.getElementById("btnMenu").onclick = function(){ menuBg.classList.add("open"); };
    document.getElementById("btnTutup").onclick = closeMenu;
    menuBg.addEventListener("click", function(e){ if (e.target === menuBg) closeMenu(); });
    document.querySelectorAll("[data-page]").forEach(function(a){
      a.addEventListener("click", function(){ show(a.getAttribute("data-page")); });
    });
    window.addEventListener("hashchange", applyHash);
    applyHash();
  </script>
</body>
</html>
