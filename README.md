# Berfikir Kritis Melalui Pembelajaran Matematika dan PKN

Kokurikuler SMPN 165 Jakarta
Kelas 8E Kelompok 1
Matematika dan Pendidikan Pancasila
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Berfikir Kritis Melalui Pembelajaran Matematika dan PKN</title>
  <style>
    :root {
      --merah: #9b1c1c;
      --navy: #1e2a4a;
      --kertas: #f4efe4;
      --putih: #fffdf8;
      --garis: #d7cbb6;
      --teks: #222;
      --lembut: #5b5348;
      --biru: #2c4a7c;
      --hijau: #2f5d3a;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; background: var(--kertas); color: var(--teks); font: 17px/1.6 Georgia, "Times New Roman", serif; }
    .wrap { max-width: 820px; margin: 0 auto; padding: 24px 16px 64px; }
    header.cover { border: 3px solid var(--navy); background: var(--putih); padding: 28px 22px 22px; text-align: center; }
    .sekolah { font-family: Arial, sans-serif; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--navy); }
    header.cover h1 { font-size: 30px; line-height: 1.25; margin: 12px 0 8px; color: var(--navy); }
    .sub { color: var(--lembut); margin: 0 0 16px; }
    .meta { font-family: Arial, sans-serif; font-size: 13px; border-top: 1px solid var(--garis); border-bottom: 1px solid var(--garis); padding: 8px 0; color: var(--navy); }
    nav { display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0 28px; font-family: Arial, sans-serif; font-size: 13px; }
    nav a { color: var(--navy); text-decoration: none; border: 1px solid var(--garis); background: var(--putih); padding: 6px 10px; }
    section { background: var(--putih); border: 1px solid var(--garis); padding: 22px 20px; margin: 0 0 22px; }
    .nomor { font-family: Arial, sans-serif; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: var(--merah); margin: 0 0 6px; }
    h2 { font-size: 24px; margin: 0 0 12px; color: var(--navy); }
    h3 { font-size: 18px; margin: 16px 0 8px; }
    p { margin: 0 0 12px; }
    .dua { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .kotak { border: 1px solid var(--garis); padding: 12px; }
    .kotak.mtk { border-left: 5px solid var(--biru); }
    .kotak.pkn { border-left: 5px solid var(--hijau); }
    .kotak h3 { margin-top: 0; }
    .caption { font-family: Arial, sans-serif; font-size: 12px; color: var(--lembut); margin-top: 8px; }
    table { width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px; margin: 10px 0 14px; }
    th, td { border: 1px solid var(--garis); padding: 8px; text-align: left; vertical-align: top; }
    th { background: #efe6d6; }
    .rumus { font-family: Arial, sans-serif; background: #efe6d6; padding: 10px 12px; text-align: center; margin: 10px 0 14px; }
    .pasangan { width: 100%; }
    figure { margin: 12px 0; }
    svg { width: 100%; height: auto; display: block; }
    .kuis-bingkai { border: 2px dashed var(--navy); padding: 10px; background: #faf6ee; }
    iframe { width: 100%; height: 640px; border: 1px solid var(--garis); background: white; }
    .tombol { display: inline-block; font-family: Arial, sans-serif; background: var(--navy); color: white; text-decoration: none; padding: 10px 14px; margin-top: 10px; }
    footer { font-family: Arial, sans-serif; font-size: 13px; color: var(--lembut); text-align: center; }
    @media (max-width: 700px) {
      header.cover h1 { font-size: 24px; }
      .dua { grid-template-columns: 1fr; }
      iframe { height: 520px; }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <header class="cover">
      <div class="sekolah">SMP Negeri 165 Jakarta · Kokurikuler Lintas Mapel · Ilmuwan Cilik</div>
      <h1>Berfikir Kritis Melalui Pembelajaran Matematika dan PKN</h1>
      <p class="sub">Infografis menjodohkan konsep Matematika dengan Pendidikan Pancasila. Materi Matematika hanya yang sudah dipelajari: kelas 8 Bab 1 dan Bab 6, plus seluruh materi kelas 7.</p>
      <div class="meta">Produk 2D · Kelas 8 · Tema: Peningkatan Proses Pembelajaran</div>
    </header>

    <nav>
      <a href="#cara">Cara baca</a>
      <a href="#k8b1">Aljabar</a>
      <a href="#k8b6">Peluang</a>
      <a href="#k7bil">Bilangan bulat</a>
      <a href="#k7pers">Persamaan</a>
      <a href="#k7band">Perbandingan</a>
      <a href="#k7data">Data</a>
      <a href="#k7bangun">Bangun</a>
      <a href="#kuis">Kuis</a>
    </nav>

    <section id="cara">
      <p class="nomor">Cara memakai infografis</p>
      <h2>Jodohkan seperti kuis</h2>
      <p>Setiap halaman punya dua sisi. Sisi kiri: konsep Matematika. Sisi kanan: nilai PKN / Pendidikan Pancasila. Cara berfikirnya sama seperti kuis menjodohkan: cari pasangan yang tepat, jangan langsung percaya klaim.</p>
      <table class="pasangan">
        <thead>
          <tr><th>Kartu Matematika</th><th>Kartu PKN yang cocok</th></tr>
        </thead>
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
      <p>Bentuk aljabar memakai huruf untuk mewakili suatu nilai. Huruf itu disebut variabel. Suku-suku sejenis boleh dijumlahkan supaya kalimatnya lebih sederhana.</p>
      <div class="rumus">3x + 2x + 5 = 5x + 5</div>
      <p>Contoh di sekolah: tiap kelompok membawa 4 sapu, dan ada 5 sapu cadangan. Jika kelompoknya x, jumlah sapu = 4x + 5.</p>
      <div class="dua">
        <div class="kotak mtk">
          <h3>Pasangan Matematika</h3>
          <p>Sederhanakan dulu, baru dipakai untuk mengambil keputusan. Kalau bentuknya masih berantakan, hitungannya mudah keliru.</p>
        </div>
        <div class="kotak pkn">
          <h3>Pasangan PKN</h3>
          <p>Tata tertib sekolah juga harus jelas. Aturan yang kabur sulit dijalankan adil. Sila ke-5 meminta keadilan yang dapat dijelaskan, bukan hanya diucapkan.</p>
        </div>
      </div>
    </section>

    <section id="k8b6">
      <p class="nomor">Kelas 8 · Bab 6 · Peluang</p>
      <h2>Peluang menguji kata “hampir semua”</h2>
      <p>Peluang suatu kejadian adalah perbandingan banyak hasil yang dimaksud dengan banyak semua hasil yang mungkin.</p>
      <div class="rumus">P(kejadian) = banyak hasil dimaksud / banyak semua hasil</div>
      <p>Contoh: dari 10 kartu nama siswa, 3 kartu bertuliskan “setuju pulang awal”. Peluang terambil kartu “setuju” = 3/10.</p>
      <p>3/10 belum boleh diubah menjadi kalimat “hampir seluruh kelas setuju”. Sampelnya terlalu kecil dan belum mewakili seluruh siswa.</p>
      <div class="dua">
        <div class="kotak mtk">
          <h3>Pasangan Matematika</h3>
          <p>Bedakan peluang dari satu percobaan dengan klaim tentang seluruh sekolah. Frekuensi relatif dari sampel kecil bukan bukti untuk semua orang.</p>
        </div>
        <div class="kotak pkn">
          <h3>Pasangan PKN</h3>
          <p>Musyawarah (sila ke-4) butuh data, bukan desas-desus. Menyebarkan klaim tanpa perhitungan merusak keputusan bersama.</p>
        </div>
      </div>
    </section>

    <section id="k7bil">
      <p class="nomor">Kelas 7 · Bilangan bulat</p>
      <h2>Positif dan negatif menyeimbangkan tanggung jawab</h2>
      <p>Bilangan bulat mencakup 0, bilangan positif, dan bilangan negatif. Penjumlahan bilangan lawan menghasilkan nol.</p>
      <div class="rumus">(+7) + (−7) = 0</div>
      <p>Contoh: kas kelas bertambah Rp7.000 lalu dipakai Rp7.000. Saldo kembali seimbang.</p>
      <div class="dua">
        <div class="kotak mtk">
          <h3>Pasangan Matematika</h3>
          <p>Tanda + dan − harus ditulis. Tanpa tanda, kita tidak tahu apakah uang masuk atau keluar.</p>
        </div>
        <div class="kotak pkn">
          <h3>Pasangan PKN</h3>
          <p>Hak dan kewajiban berjalan berpasangan. Terima hak tanpa menjalankan kewajiban membuat kehidupan bersama tidak seimbang.</p>
        </div>
      </div>
    </section>

    <section id="k7pers">
      <p class="nomor">Kelas 7 · Persamaan linear</p>
      <h2>Persamaan menjaga kedua ruas tetap adil</h2>
      <p>Persamaan linear menyatakan dua ruas yang nilainya sama. Apa pun yang dilakukan di ruas kiri harus dilakukan juga di ruas kanan.</p>
      <div class="rumus">x + 4 = 10 &nbsp; → &nbsp; x = 6</div>
      <p>Contoh: 6 kelompok mendapat bagian sama dari 24 tugas piket. x adalah tugas tiap kelompok. 6x = 24, jadi x = 4.</p>
      <div class="dua">
        <div class="kotak mtk">
          <h3>Pasangan Matematika</h3>
          <p>Kalau hanya satu ruas yang diubah, persamaan menjadi salah. Keseimbangan rusak.</p>
        </div>
        <div class="kotak pkn">
          <h3>Pasangan PKN</h3>
          <p>Keadilan sosial menuntut perlakuan yang dapat dihitung. Membuang tugas ke satu orang saja sama dengan merusak persamaan.</p>
        </div>
      </div>
    </section>

    <section id="k7band">
      <p class="nomor">Kelas 7 · Perbandingan</p>
      <h2>Perbandingan mengatur bagian yang proporsional</h2>
      <p>Perbandingan senilai: jika salah satu membesar, yang lain membesar dengan rasio yang sama. Perbandingan berbalik nilai: jika salah satu membesar, yang lain mengecil.</p>
      <div class="rumus">2 : 3 = 8 : 12</div>
      <p>Contoh senilai: 2 guru mendampingi 3 kelompok. Untuk 6 kelompok diperlukan 4 guru. Contoh berbalik nilai: makin banyak orang yang mengerjakan, waktu yang dibutuhkan makin singkat.</p>
      <div class="dua">
        <div class="kotak mtk">
          <h3>Pasangan Matematika</h3>
          <p>Tulis rasio dengan satuan yang sama, lalu samakan perbandingannya sebelum memutuskan.</p>
        </div>
        <div class="kotak pkn">
          <h3>Pasangan PKN</h3>
          <p>Pembagian kerja bakti atau fasilitas sekolah sebaiknya proporsional. Gotong royong bukan berarti satu orang bekerja terus.</p>
        </div>
      </div>
    </section>

    <section id="k7data">
      <p class="nomor">Kelas 7 · Data dan diagram</p>
      <h2>Diagram menolong musyawarah berbasis fakta</h2>
      <p>Data dikumpulkan, disusun, lalu ditampilkan. Diagram batang cocok untuk membandingkan jumlah. Diagram lingkaran cocok untuk melihat bagian dari keseluruhan.</p>
      <table>
        <thead>
          <tr><th>Pilihan kegiatan kelas</th><th>Suara</th></tr>
        </thead>
        <tbody>
          <tr><td>Mading Pancasila</td><td>12</td></tr>
          <tr><td>Kerja bakti perpustakaan</td><td>8</td></tr>
          <tr><td>Lomba pidato</td><td>5</td></tr>
        </tbody>
      </table>
      <figure>
        <svg viewBox="0 0 360 110" role="img" aria-label="Diagram batang pilihan kegiatan">
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
      </figure>
      <div class="dua">
        <div class="kotak mtk">
          <h3>Pasangan Matematika</h3>
          <p>Jumlah suara 12 + 8 + 5 = 25. Grafik harus sesuai tabel. Jika batangnya lebih tinggi tanpa angka yang bertambah, datanya menipu.</p>
        </div>
        <div class="kotak pkn">
          <h3>Pasangan PKN</h3>
          <p>Keputusan kelas memakai data, lalu tetap menghargai kelompok yang kalah jumlah. Itu musyawarah, bukan menang sendiri.</p>
        </div>
      </div>
    </section>

    <section id="k7bangun">
      <p class="nomor">Kelas 7 · Bangun datar dan bangun ruang</p>
      <h2>Ukuran ruang milik bersama harus dihitung</h2>
      <p>Bangun datar diukur luasnya. Bangun ruang diukur volume atau kapasitasnya. Perhitungan ini dipakai saat menata fasilitas sekolah.</p>
      <div class="rumus">Luas persegi panjang = p × l &nbsp;&nbsp;|&nbsp;&nbsp; Volume balok = p × l × t</div>
      <p>Contoh: pojok baca 3 m × 2 m = 6 m². Kalau raknya terlalu besar, jalur siswa menjadi sempit. Fasilitas itu milik bersama, jadi ukurannya perlu masuk akal untuk semua.</p>
      <div class="dua">
        <div class="kotak mtk">
          <h3>Pasangan Matematika</h3>
          <p>Hitung luas lantai dan kapasitas ruangan sebelum menambah barang. Jangan menaksir saja.</p>
        </div>
        <div class="kotak pkn">
          <h3>Pasangan PKN</h3>
          <p>Sekolah adalah ruang bersama. Menaruh barang semaunya merugikan hak siswa lain untuk lewat dan belajar aman.</p>
        </div>
      </div>
    </section>

    <section id="kuis">
      <p class="nomor">Latihan menjodohkan</p>
      <h2>Kuis Educaplay</h2>
      <p>Setelah membaca infografis, jodohkan soal dengan jawaban yang tepat.</p>
      <div class="kuis-bingkai">
        <iframe title="Kuis Matching Matematika dan Pendidikan Pancasila" src="https://www.educaplay.com/learning-resources/30519624-matching_fotosintesis_dasar.html" allowfullscreen loading="lazy"></iframe>
        <p>
          <a class="tombol" href="https://www.educaplay.com/learning-resources/30519624-matching_fotosintesis_dasar.html" target="_blank" rel="noopener">Buka kuis di tab baru</a>
        </p>
      </div>
    </section>

    <footer>
      <p>Ilmuwan Cilik · SMP Negeri 165 Jakarta</p>
      <p>Materi Matematika: kelas 8 Bab 1 dan Bab 6, serta materi kelas 7. Dipasangkan dengan Pendidikan Pancasila.</p>
    </footer>
  </div>
</body>
</html>
