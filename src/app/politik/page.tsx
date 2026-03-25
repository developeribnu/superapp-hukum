"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Vote, Search, BookOpen, AlertCircle } from 'lucide-react';

const politicsData = {
  partaiPolitik: {
    title: "Partai Politik Indonesia",
    content: `SISTEM PARTAI POLITIK DI INDONESIA

Partai politik adalah organisasi yang mewakili kepentingan masyarakat dalam sistem demokrasi Indonesia.
Berdasarkan pemilihan umum 2024, terdapat 20 partai peserta pemilu yang terdaftar di KPU (Komisi Pemilihan Umum).

PARTAI DEMOKRAT (DEMOKRAT)

Didirikan: 9 Desember 2001
Pendiri: Susilo Bambang Yudhoyono (SBY)
Ideologi: Nasionalis, Konservatif, Demokrasi Pancasila
Simbol: Perisai dan panah
Warna: Biru dan putih
Ketua Umum: Agus Harimurti Yudhoyono (sejak 2020)

Pencapaian Utama:
- Memenangkan pemilu 2009 dengan 26% suara
- Memenangkan pemilu 2014 dengan 16.7% suara
- Pada pemilu 2024 menempati posisi ketiga dengan 12.3% suara
- Menghasilkan 2 presiden: SBY (2004-2014) dan Agus Harimurti (calon 2024)
- Fokus pada pembangunan infrastruktur dan ekonomi

Program Unggulan:
- Jaminan Kesehatan Nasional (JKN)
- Pembangunan infrastruktur berkelanjutan
- Reformasi birokrasi
- Pemberdayaan UKM dan UMKM
- Pendidikan karakter

PDI PERJUANGAN (PDIP)

Didirikan: 23 Januari 1973 (awal mula), restruktur 10 Januari 1999
Pendiri: Soekarno (1973), revitalisasi oleh Megawati Soekarnoputri (1999)
Ideologi: Nasionalis, Sosialis demokrat, Pancasila
Simbol: Badak (Rhinoceros)
Warna: Merah dan putih
Ketua Umum: Megawati Soekarnoputri (sejak 1999)

Pencapaian Utama:
- Partai terbesar di pemilu 2019 dengan 19.3% suara
- Partai terbesar di pemilu 2024 dengan 20.9% suara
- Menghasilkan 1 presiden: Megawati Soekarnoputri (2001-2004)
- Mengusulkan Joko Widodo sebagai calon presiden 2014 dan 2019
- Fokus pada nasionalisme dan kesejahteraan rakyat

Kabinet Joko Widodo:
- 10 menteri dari PDIP (terbanyak)
- Menteri Dalam Negeri, Koordinator Perekonomian, Perencanaan Pembangunan
- Keterlibatan luas dalam kebijakan ekonomi dan infrastruktur

GERAKAN INDONESIA RAYA (GERINDRA)

Didirikan: 6 Februari 2008
Pendiri: Prabowo Subianto
Ideologi: Nasionalis, Anti-imperialisme, Keadilan sosial
Simbol: Garuda (Elang Garuda)
Warna: Merah
Ketua Umum: Prabowo Subianto (sejak 2008)

Pencapaian Utama:
- Pemilu 2009: 4.5% suara
- Pemilu 2014: 4.9% suara
- Pemilu 2019: 6.8% suara
- Pemilu 2024: 7.8% suara (meningkat signifikan)
- Prabowo menjadi calon presiden 2024 dan terpilih menjadi Presiden RI ke-8 (2024-2029)
- Aliansi strategis dengan PDI-P, Golkar, dan PKB

Program Unggulan:
- Kedaulatan pangan
- Pertahanan nasional yang kuat
- Pemberdayaan petani dan nelayan
- Infrastruktur maritim
- Industrialisasi strategis

GOLONGAN KARYA (GOLKAR)

Didirikan: 20 Oktober 1964 (sebagai organisasi), formalisasi sebagai partai 1999
Pendiri: Letnan Jenderal Soemitro (1964)
Ideologi: Nasionalis, Korporatis, Pancasila
Simbol: Pohon beringin (Banyan tree)
Warna: Kuning dan putih emas
Ketua Umum: Airlangga Hartarto (sejak 2020)

Pencapaian Utama:
- Partai penguasa Era Soeharto (1968-1998)
- Pemilu 1997: 74.3% suara (era pemerintahan Soeharto)
- Pemilu 2004: 21.4% suara (setelah reformasi)
- Pemilu 2024: 7.8% suara
- Menjadi bagian dari koalisi pemerintah
- Fokus pada pengusaha dan profesional

PARTAI KEBANGKITAN BANGSA (PKB)

Didirikan: 23 Juli 1998
Pendiri: Abdurrahman Wahid (Gus Dur)
Ideologi: Islam moderat, Nasionalis, Keadilan sosial
Simbol: Bintang lima
Warna: Hijau dan putih
Ketua Umum: Muhaimin Iskandar (sejak 2014)

Pencapaian Utama:
- Pemilu 1999: 12.6% suara (kedua terbesar saat itu)
- Pemilu 2024: 9.2% suara
- Menghasilkan 1 presiden: Abdurrahman Wahid (1999-2001)
- Akar kuat di organisasi Nahdlatul Ulama (NU)
- Basis massa kuat di Jawa Timur

PARTAI NASIONAL DEMOKRAT (NASDEM)

Didirikan: 2 Agustus 2011
Pendiri: Surya Paloh
Ideologi: Nasionalis, Demokrat, Pluralis
Simbol: Pria dengan buku
Warna: Oranye dan putih
Ketua Umum: Surya Paloh (sejak 2011)

Pencapaian Utama:
- Pemilu 2014: 6.7% suara
- Pemilu 2019: 4.0% suara
- Pemilu 2024: 8.2% suara (pertumbuhan signifikan)
- Fokus pada media massa dan kepemimpinan
- Aliansi dengan koalisi pemerintah

PARTAI KEADILAN SEJAHTERA (PKS)

Didirikan: 20 Juli 1998
Pendiri: Anis Matta dan aktivis Ikhwanul Muslimin
Ideologi: Islam konservatif, Keadilan sosial, Siyasah Islamiyah
Simbol: Bulan dan bintang dengan warna emas
Warna: Hijau dan putih emas
Ketua Umum: Ahmad Syaikhu (sejak 2020)

Pencapaian Utama:
- Pemilu 2004: 7.3% suara
- Pemilu 2009: 4.7% suara
- Pemilu 2024: 6.2% suara
- Fokus pada antikorupsi dan moralitas
- Gerakan tajdid Islam dan pendidikan karakter
- Kaderisasi terstruktur (Tarbiyah)

PARTAI AMANAT NASIONAL (PAN)

Didirikan: 6 Agustus 1998
Pendiri: Amien Rais
Ideologi: Islam moderat, Nasionalis, Demokrasi Pancasila
Simbol: Bintang dan bulan sabit
Warna: Emas dan putih
Ketua Umum: Zulkifli Hasan (sejak 2015)

Pencapaian Utama:
- Pemilu 1999: 7.1% suara
- Pemilu 2024: 6.0% suara
- Akar pada Muhammadiyah
- Fokus pada hak asasi manusia dan demokrasi
- Kontribusi dalam reformasi 1998

STATUS PENDAFTARAN DAN REGULASI

Persyaratan Partai Politik:
- Minimal 7.000 anggota di tingkat nasional
- Minimal 300 anggota di setiap provinsi
- Minimal 50 anggota di setiap kabupaten/kota
- Kantor di setiap provinsi
- Keanggotaan bersifat suka rela
- Fungsi: Penyelenggara pemilu, penyalur aspirasi, pendidikan politik

Proses Registrasi Partai:
1. Persiapan organisasi dan pengumpulan anggota
2. Pengajuan permohonan ke KPU
3. Verifikasi data keanggotaan oleh KPU
4. Sidang pleno KPU untuk keputusan
5. Pengumuman di Berita Negara
6. Sertifikat pendaftaran resmi

Peran Partai Politik dalam Pemerintahan:
- Merekrut dan mencalonkan calon legislatif
- Mengajukan calon presiden dan wakil presiden
- Menjadi mitra dalam pembentukan kabinet
- Menyusun kebijakan publik
- Pengawasan jalannya pemerintah
- Konsolidasi demokrasi`,
  },

  sistimPemilu: {
    title: "Sistem Pemilihan Umum Indonesia",
    content: `PEMILIHAN UMUM (PEMILU) - SISTEM DAN MEKANISME

PENGERTIAN DAN JENIS PEMILU

Pemilihan Umum adalah mekanisme rakyat untuk memilih wakil-wakilnya dalam lembaga perwakilan
dan eksekutif secara langsung, umum, bebas, rahasia, jujur, dan adil (Luber dan Jurdil).

Jenis-Jenis Pemilu di Indonesia:

1. PEMILU LEGISLATIF
   - Tujuan: Memilih anggota DPR (Dewan Perwakilan Rakyat)
   - Tingkat: Nasional dan daerah (DPD)
   - Skala: Memilih 575 anggota DPR RI
   - Sistem: Proporsional terbuka
   - Periode: Setiap 5 tahun
   - Terakhir: 14 Februari 2024

2. PEMILU PRESIDEN/WAKIL PRESIDEN
   - Tujuan: Memilih kepala eksekutif nasional
   - Tingkat: Nasional
   - Sistem: Distrik (plurality)
   - Kriteria: Minimal 20% suara nasional ATAU 35% kursi DPR
   - Periode: Setiap 5 tahun (sekarang 1 periode per presiden, tidak boleh consecutive)
   - Terakhir: 14 Februari 2024 (putaran 1), 12 April 2024 (putaran 2)

3. PEMILIHAN KEPALA DAERAH (PILKADA)
   - Tujuan: Memilih Gubernur, Bupati, Walikota
   - Tingkat: Provinsi dan kabupaten/kota
   - Sistem: Distrik (plurality langsung)
   - Periode: Setiap 5 tahun
   - Jadwal bergilir (tidak serentak untuk semua wilayah)
   - Terakhir serentak: Desember 2024

PEMILU 2024 - DATA DAN HASIL

Pemilu Legislatif 14 Februari 2024:

Peserta: 20 partai politik nasional

Hasil Kursi DPR (575 kursi total):
1. PDI Perjuangan: 120 kursi (20.9%)
2. Gerindra: 87 kursi (7.8%)
3. Golkar: 87 kursi (7.8%)
4. PKB: 58 kursi (9.2%)
5. Demokrat: 53 kursi (12.3%)
6. Nasdem: 37 kursi (8.2%)
7. PKS: 32 kursi (6.2%)
8. PAN: 24 kursi (6.0%)
9. Partai Lain: 78 kursi (6-7% masing-masing)

Jumlah Pemilih Terdaftar: 204.8 juta
Partisipasi Pemilu: 80.1% (tingkat tertinggi)
Jumlah TPS (Tempat Pemungutan Suara): 817.000+ lokasi

Koalisi Legislatif:
- Koalisi Merah-Putih: PDIP, Solidaritas Indonesia, PKB, PSI
- Koalisi Kedaulatan Indonesia: Gerindra, Golkar, PAN, Nasdem, PKS
- Independent parties mengalami pertumbuhan

Pemilu Presiden/Wakil Presiden 2024:

Kandidat:
1. Prabowo Subianto - Gibran Rakabuming Raka (Koalisi Kedaulatan)
2. Ganjar Pranowo - Mahfud MD (Koalisi PDIP-PKB)
3. Anies Baswedan - Muhaimin Iskandar (Koalisi NasDem-PAN)

Putaran Pertama (14 Februari 2024):
- Prabowo-Gibran: 43.7% suara
- Ganjar-Mahfud: 27.0% suara
- Anies-Muhaimin: 24.5% suara
- Partisipasi: 82.1%

Putaran Kedua (12 April 2024):
- Prabowo-Gibran: 58.6% suara (terpilih Presiden RI ke-8)
- Ganjar-Mahfud: 24.3% suara
- Anies-Muhaimin: 17.1% suara

SISTEM PEMILIHAN DAN MEKANISME

Sistem Proporsional Terbuka (DPR):
- Setiap partai menarik suara dari seluruh negara
- Kursi dialokasikan berdasarkan persentase suara nasional
- Pemilih bisa memilih kandidat spesifik (preference voting)
- Threshold: 4% suara nasional (untuk dapat kursi)
- Daftar calon terbuka, suara preferensi menentukan urutan

Mekanisme Suara Preferen:
- Pemilih tidak hanya memilih partai, tapi juga calon individual
- Urutan calon dalam daftar partai BISA berubah jika calon lain dapat suara lebih
- Top-up method: Partai mendapat kesempatan curahan suara untuk calon ke-2, dst
- Transparan dan meningkatkan demokratisasi internal partai

Sistem Distrik Langsung (Presiden):
- Pemilih langsung memilih pasang calon presiden-wakil presiden
- Pemenang: Pasangan dengan suara terbanyak dalam putaran pertama
- Jika tidak ada yang mencapai 50%: Ada putaran kedua dengan 2 pasang terbanyak
- Sistem simple plurality (first-past-the-post)

Sistem Pilkada (Kepala Daerah):
- Distrik langsung di tingkat provinsi atau kabupaten/kota
- Pemenang: Kandidat dengan suara terbanyak
- Tidak ada runoff (kecuali dalam kasus khusus)
- Setiap wilayah memilih secara bergilir (tidak serentak nasional)

MEKANISME PENCALONAN

Pencalonan Legislatif (DPR):
- Partai mengajukan daftar calon ke KPU
- Minimal representasi gender 30% (perempuan)
- Verifikasi dukungan massa oleh KPU (1.000-20.000 tanda tangan per daerah)
- Daftar calon publikasi 2-3 bulan sebelum pemilu
- Kampanye terbuka atau iklan media massa

Pencalonan Presiden/Wakil Presiden:
- Koalisi partai dengan minimal 20% kursi DPR ATAU
- Partai tunggal dengan minimal 35% kursi DPR
- Koalisi minimal 3 partai dengan gabungan 20% kursi
- Pendaftaran calon 2-3 bulan sebelum pemilu
- Verifikasi syarat-syarat konstitusional (usia, domisili, rekam jejak)

PRINSIP LUBER DAN JURDIL

Luber (Langsung, Umum, Bebas, Rahasia):
- Langsung: Pemilih langsung memilih tanpa perantara
- Umum: Setiap warga negara usia 17+ atau sudah menikah berhak memilih
- Bebas: Tanpa tekanan pihak manapun
- Rahasia: Privasi pilihan dijamin (bilik pemilihan tertutup)

Jurdil (Jujur dan Adil):
- Jujur: Tidak ada kecurangan, manipulasi, atau fraud
- Adil: Semua suara dihitung sama (satu orang satu suara), tanpa diskriminasi
- Integritas proses: Dari pendaftaran hingga penghitungan

Pengamanan Jurdil:
- Surat suara bernomor seri
- Tinta pecat (indelible ink) untuk tandatangan pemilih
- CCTV di TPS (tidak semua lokasi)
- Saksi partai, pengamat, dan media
- Audit sampel terhadap hasil penghitungan
- Database pemilih yang akurat (e-KTP terintegrasi)

PERSIAPAN LOGISTIK PEMILU

Rekapitulasi Suara:
- Tingkat TPS (817.000+ lokasi)
- Tingkat Kecamatan (8.000+ lokasi)
- Tingkat Kabupaten (500+ lokasi)
- Tingkat Provinsi (34 provinsi)
- Tingkat Nasional (1 pusat) - KPU RI

Sumber Data Pemilih:
- E-KTP terintegrasi dengan sistem pemilu
- Data Kementerian Dalam Negeri
- Pendaftaran manual untuk yang belum e-KTP
- Database tersentralisasi untuk mencegah duplikasi

Distribusi Surat Suara:
- Percetakan di tingkat nasional (24 partai + 1 untuk presiden)
- Distribusi ke provinsi, kabupaten, kecamatan
- Tracking dan numbering untuk akuntabilitas
- Verifikasi di TPS sebelum pemungutan

PELANGGARAN DAN PENYELESAIAN SENGKETA

Pelanggaran Pemilu:
- Buying voters (jual-beli suara): Denda Rp 100 juta
- Money politics (uang kepada partai/calon): Denda Rp 500 juta - 1 miliar
- Intimidasi pemilih: Hingga 5 tahun penjara
- Pemalsuan surat suara: Hingga 7 tahun penjara
- Pelanggaran hak pilih: Hingga Rp 300 juta denda

Penyelesaian Sengketa:
- Bawaslu (Badan Pengawas Pemilu) untuk investigasi
- Panwaslu tingkat lokal dan pusat
- DKPP (Dewan Kehormatan Penyelenggara Pemilu) untuk etika
- MK (Mahkamah Konstitusi) untuk sengketa hasil pemilu
- Pengadilan Negeri untuk perkara pidana

Batas Waktu Pengaduan:
- Pelanggaran pemungutan: 3 hari setelah pemilu
- Pelanggaran penghitungan: 5 hari setelah penghitungan
- Sengketa hasil: 14 hari setelah pengumuman hasil oleh KPU`,
  },

  strukturPemerintah: {
    title: "Struktur Pemerintahan Indonesia",
    content: `SISTEM KETATANEGARAAN INDONESIA

Indonesia menganut sistem pemerintahan PRESIDENSIAL dengan prinsip:
- Terpisahnya kekuasaan eksekutif, legislatif, dan yudikatif
- Checks and balances antar lembaga negara
- Demokrasi Pancasila dengan kedaulatan rakyat
- UUD 1945 sebagai konstitusi tertinggi

LEMBAGA-LEMBAGA NEGARA UTAMA

1. MAJELIS PERMUSYAWARATAN RAKYAT (MPR)

Fungsi:
- Lembaga tertinggi negara (hingga amandemen 2002)
- Sekarang: Lembaga pelanjun konstitusi
- Fungsi: Menetapkan dan mengubah UUD 1945
- Memilih presiden dalam kondisi khusus (impeachment)

Struktur:
- DPR RI (575 anggota) + DPD (136 anggota) = Total 711 anggota
- Dilantik setelah pemilu legislatif
- Masa jabatan sesuai anggotanya (5 tahun)

Prosedur Perubahan UUD:
- Minimal 2/3 anggota DPR + DPD mengusulkan perubahan
- Voting minimal 2/3 setuju
- Tidak boleh mengubah: Bentuk negara kesatuan, Pancasila, prinsip dasar

Telah dilakukan: 4 amandemen UUD 1945 (1999-2002)
- Amandemen 1 (1999): Pembatasan presiden, kebebasan pers
- Amandemen 2 (2000): Lembaga legislatif dan yudikatif
- Amandemen 3 (2001): Sistem pemerintahan, otonomi daerah
- Amandemen 4 (2002): Penyelenggaraan negara

2. DEWAN PERWAKILAN RAKYAT (DPR)

Fungsi:
- Legislator nasional (membuat undang-undang)
- Pengawas jalannya pemerintahan (oversight)
- Ikut menetapkan anggaran negara (APBN)
- Memberikan persetujuan untuk hal-hal khusus

Komposisi:
- 575 anggota (dipilih melalui pemilu legislatif)
- Proporsional terbuka per daerah pemilihan
- Perwakilan usia 21+ tahun
- Masa jabatan 5 tahun
- Maksimal 3 periode berturut-turut (15 tahun)

Struktur Internal:
- Pimpinan (Ketua, Wakil Ketua)
- 11 Komisi sesuai bidang (Komisi I-XI)
- Badan-badan musyawarah (Baleg, Budleg, Banggar)
- Fraksi partai politik
- Kelompok kerja tematik

Proses Legislasi:
1. Inisiatif: Presiden atau DPR
2. Pembahasan tingkat I: Komisi terkait
3. Pembahasan tingkat II: Pleno DPR
4. Voting minimal sederhana (50% + 1)
5. Pengesahan Presiden
6. Publikasi di Berita Negara

Hak dan Kewajiban Anggota DPR:
- Mengajukan usul, pertanyaan, pendapat
- Mendapat gaji, tunjangan, dan fasilitas
- Kekebalan hukum terbatas (imunitas)
- Wajib hadir dalam sidang
- Tidak boleh merangkap jabatan pemerintah

3. DEWAN PERWAKILAN DAERAH (DPD)

Fungsi:
- Mewakili kepentingan daerah di pusat
- Pemberi masukan untuk legislasi terkait daerah
- Pengawasan atas pemerintahan lokal
- Koreksi sentralisasi kekuasaan

Komposisi:
- 136 anggota (4 dari setiap provinsi = 34 x 4)
- Dipilih melalui pemilu legislatif
- Masa jabatan 5 tahun
- Usia minimal 30 tahun

Kewenangan:
- Memberikan pertimbangan pada legislasi terkait otonomi daerah
- Memberi masukan APBN untuk daerah
- Mengajukan calon hakim konstitusi
- Berkontribusi pada perubahan UUD

4. PRESIDEN DAN WAKIL PRESIDEN

Fungsi Presiden:
- Kepala eksekutif (menjalankan undang-undang)
- Panglima tertinggi angkatan bersenjata
- Pemberi grasi dan amnesti
- Pengangkat duta dan penerima duta
- Pelindung keamanan nasional

Syarat Calon Presiden:
- Warga negara Indonesia sejak lahir
- Tidak pernah mengkhianati negara
- Mampu secara rohani dan jasmani
- Berusia minimal 35 tahun saat dilantik
- Bertempat tinggal di Indonesia
- Bukan eks PKI, tidak terlibat G30S/PKI

Masa Jabatan:
- 5 tahun
- Dapat dipilih hanya untuk 1 periode (tidak boleh successive)
- Dilantik oleh MPR
- Sumpah sesuai agama/keyakinan

Hak Presiden:
- Mengajukan RUU ke DPR
- Menetapkan peraturan pemerintah (PP)
- Mengangkat pejabat tinggi negara
- Memberikan gelar, tanda jasa, medali kehormatan
- Menjalankan kekuasaan kehakiman

Kewajiban Presiden:
- Menjunjung tinggi konstitusi
- Melaksanakan undang-undang
- Mempertahankan kedaulatan negara
- Memberikan laporan tahunan ke DPR
- Bertanggung jawab atas setiap keputusan

Pertanggungjawaban Presiden:
- Setiap keputusan harus dalam kerangka hukum
- Dapat diimpeach oleh DPR untuk pengkhianatan konstitusi
- Pertanggungjawaban pidana setelah selesai jabatan
- Kekebalan hukum terbatas saat menjabat

Wakil Presiden:
- Pendamping presiden
- Menjalankan tugas khusus dari presiden
- Menggantikan presiden jika presiden meninggal/impeach
- Syarat dan masa jabatan sama dengan presiden

5. KABINET/KEMENTERIAN

Struktur Kabinet Pemerintah Prabowo (2024-2029):

Kementerian Koordinasi (3):
- Kemenko Perekonomian
- Kemenko Pembangunan Manusia dan Kebudayaan
- Kemenko Maritim dan Investasi

Kementerian Utama (31):
- Kementerian Luar Negeri
- Kementerian Dalam Negeri
- Kementerian Pertahanan
- Kementerian Agama
- Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi
- Kementerian Kesehatan
- Kementerian Ketenagakerjaan
- Kementerian UMKM dan Koperasi
- Kementerian Keuangan
- Kementerian PPN/Bappenas
- Kementerian Perhubungan
- Kementerian Kominfo
- Kementerian Lingkungan Hidup dan Kehutanan
- Dan kementerian lainnya

Lembaga Negara Non-Departemen (LPND):
- Lembaga Pemberantasan Korupsi (KPK)
- Badan Intelijen Negara (BIN)
- Kepolisian Negara (Polri)
- Komisi Pemilihan Umum (KPU)

Proses Pembentukan Kabinet:
1. Presiden memilih menteri
2. Konsultasi dengan DPR (Komisi I untuk tertentu)
3. Pelantikan menteri oleh presiden
4. Pengucapan sumpah dan janji
5. Pengumuman melalui media resmi

Peran Menteri:
- Pemimpin di bidangnya
- Bertanggung jawab kepada presiden
- Mengajukan kebijakan ke presiden
- Melaksanakan undang-undang
- Menjawab pertanyaan DPR
- Menjalankan pembangunan

6. LEMBAGA YUDIKATIF

Mahkamah Agung (MA):
- Lembaga tertinggi pengadilan
- Kasasi dan peninjauan kembali
- Pengawasan administrasi pengadilan
- Terdiri dari ketua dan hakim agung
- Masa jabatan 5 tahun (dapat diperpanjang 1 kali)

Mahkamah Konstitusi (MK):
- Lembaga penguji UU terhadap UUD
- Sengketa kewenangan antar lembaga negara
- Sengketa hasil pemilu
- Pemberhentian presiden (impeachment)
- 9 hakim konstitusi (4 dipilih DPR, 3 dipilih Presiden, 2 dipilih MA)

Pengadilan Negeri:
- Tingkat pertama untuk kasus perdata dan pidana
- Satu pengadilan di setiap kabupaten/kota
- Hakim diangkat oleh Presiden atas usul MA

Pengadilan Tinggi:
- Tingkat banding untuk kasus pengadilan negeri
- Satu untuk setiap provinsi atau wilayah
- Review fakta dan hukum

Komisi Yudisial:
- Pengawas kinerja hakim
- Penerima laporan masyarakat tentang hakim
- Rekomendasi pemberhentian hakim
- 7 anggota (4 hakim, 3 masyarakat)

HUBUNGAN ANTAR LEMBAGA (CHECKS AND BALANCES)

Presiden terhadap DPR:
- Mengajukan RUU
- Menetapkan PP
- Dapat membubarkan DPR (dengan kondisi tertentu di masa lalu)
- Veto (penolakan) terhadap usulan DPR (jarang digunakan)

DPR terhadap Presiden:
- Persetujuan RUU yang diajukan presiden
- Pengawasan melalui interpellasi dan mosi tidak percaya
- Penolakan APBN yang diajukan presiden
- Impeachment (hanya untuk pengkhianatan konstitusi)

MA terhadap Legislatif dan Eksekutif:
- Interpretasi undang-undang melalui putusan
- Kasasi untuk koreksi putusan berkaca
- Pengawasan administrasi pengadilan

MK terhadap seluruh lembaga:
- Uji konstitusionalitas UU
- Penyelesaian sengketa kewenangan
- Pengujian keputusan pemilu
- Mekanisme impeachment presiden`,
  },

  sejarahPolitik: {
    title: "Sejarah Politik Indonesia",
    content: `PERIODESASI SEJARAH PEMERINTAHAN INDONESIA

Indonesia memiliki 8 periode kepemimpinan presiden sejak merdeka 1945 hingga sekarang 2024.

ERA 1: SOEKARNO (1945-1967)

Periode: 22 tahun
Julukan: Bapak Proklamasi, Bung Karno
Sistem Pemerintahan: Presidensial (awalnya Parlementer hingga 1959)

Fase Pertama - Demokrasi Parlementer (1945-1959):
- Konstitusi RIS (Republik Indonesia Serikat) 1949
- Parlemen sangat kuat, presiden figuratif
- Sering terjadi pergantian kabinet (multiple governments)
- Ketidakstabilan politik, koalisi yang rapuh
- Partai PKI meningkat pengaruhnya

Fase Kedua - Demokrasi Terpimpin (1959-1967):
- Dekrit Presiden 5 Juli 1959: Kembali ke UUD 1945
- Presiden menjadi kuat, parlemen lemah
- Sentralisasi kekuasaan pada Soekarno
- Ideologi anti-Barat, pro-Komunis
- Angkatan Darat vs PKI meningkat tegang
- Organisasi: Front Nasional, Masyumi dilarang (1960)

Pencapaian Soekarno:
- Proklamasi kemerdekaan 17 Agustus 1945
- Konferensi Meja Bundar 1949, pengakuan kedaulatan
- Membangun semangat nasionalisme dan kesatuan
- Konsolidasi wilayah NKRI dari Sabang sampai Merauke
- Proyek pembangunan infrastruktur (Monas, stadion, dll)
- Pidato "Trisakti" (1963): Kemerdekaan, kejelasan, kesejahteraan

Peristiwa Penting:
- Konfrontasi dengan Malaysia (1963-1966)
- Gerakan 30 September 1965 (G30S): Ancaman PKI
- Jatuhnya Soekarno dan transisi ke Soeharto

ERA 2: SOEHARTO (1967-1998)

Periode: 31 tahun (9 periode 5 tahun)
Julukan: Bapak Pembangunan
Sistem: Orde Baru, Presidensial kuat, partai monopoli

Karakteristik Orde Baru:
- Presiden sangat kuat, parlemen lemah
- 3 partai sistem (Golkar 74%, PDIP 15%, PPP 11%)
- Golkar sebagai partai penguasa dengan mayoritas
- Dwifungsi ABRI (militer): Keamanan dan pembangunan
- Represi terhadap partai lain dan media
- Korupsi kolusi dan nepotisme (KKN)
- Loyalitas militer kepada presiden

Prestasi Pembangunan:
- Pertumbuhan ekonomi tinggi (7% per tahun rata-rata)
- Swasembada beras (1984)
- Pembangunan infrastruktur: Jalan, bandara, pelabuhan
- Transmigran program untuk pemerataan
- Industrialisasi: Tekstil, otomotif, dll
- Penerimaan investasi asing meningkat

Pelanggaran HAM dan Krisis:
- Pembunuhan ratusan ribu anggota PKI (1965-1966)
- Operasi Timtim (Timor Timur) 1975-1999: Puluhan ribu korban
- Penculikan aktivis 1997-1998
- Kekerasan pada Tragedi Tanjung Priok (1984)
- Krisis finansial Asia 1997-1998
- Jatuhnya nilai rupiah hingga Rp 15.000 per dollar
- Kerusuhan Mei 1998: Perusakan, pembunuhan

Akhir Orde Baru:
- Reformasi 1998 menuntut Soeharto lengser
- Demonstrasi masif mahasiswa dan masyarakat
- Kejadian Tragedi Semanggi (I 1998, II 1999)
- 21 Mei 1998: Soeharto mengumumkan pengunduran diri
- Transisi ke era reformasi dan demokrasi

ERA 3: B.J. HABIBIE (1998-1999)

Periode: 1 tahun 3 bulan
Latar: Wakil presiden di era Soeharto, kemudian naik presiden
Fokus: Reformasi awal dan transisi demokrasi

Kebijakan Utama:
- Kebebasan pers (pencabutan UU yang membatasi media)
- Pembebasan tahanan politik
- Undang-undang pemilu baru (proporsional terbuka)
- Rencana pemilu demokratis pertama (1999)
- Pelepasan Timor Timur (referendum 1999)

Tantangan:
- Inflasi tinggi
- Pengangguran meningkat
- Kerusuhan sosial masih terjadi
- Kegoyahan kepercayaan publik
- Proses impeachment di MPR

Hasil Pemilu 1999:
- PDI-P menang dengan 33.7% suara
- Golkar turun drastis (22.4%)
- PKB muncul sebagai 2 terbesar (12.6%)
- Habibie kalah dalam voting MPR
- B.J. Habibie digantikan oleh Abdurrahman Wahid

ERA 4: ABDURRAHMAN WAHID / GUS DUR (1999-2001)

Periode: 1 tahun 8 bulan (dipotong impeachment)
Latar: Ketua Nahdlatul Ulama, tokoh Islam moderat
Tantangan: Kesehatan terbatas (buta sebelah mata, stroke)

Kebijakan:
- Pluralisme dan multikulturalisme
- Pencabutan Tap MPRS No. XXV/1966 (anti-komunisme keras)
- Kebebasan beragama dan berkeyakinan
- Dialog dengan berbagai lapisan masyarakat
- Upaya memperbaiki ekonomi (belum maksimal)

Permasalahan:
- Kesehatan presiden menurun
- Stabilitas militer meragukan
- Korupsi belum tertangani
- Separatisme di Aceh dan Papua
- Pertentangan dengan fraksi PDI-P dan Golkar

Impeachment & Penggulingan:
- 13 Agustus 2001: Sidang Istimewa MPR
- Voting penggulingan: 153 suara setuju vs 59 tidak setuju
- Alasan: Melanggar keputusan MPR, destabilisasi negara
- Megawati Soekarnoputri naik sebagai presiden

ERA 5: MEGAWATI SOEKARNOPUTRI (2001-2004)

Periode: 3 tahun (sisa dari periode Abdurrahman Wahid)
Latar: Putri Soekarno, Ketua PDI-P, politisi berpengalaman
Sebelumnya: Menjadi presiden de facto selama era Soeharto (sebagai pimpinan PDI-P)

Kebijakan:
- Stabilitas pemerintahan
- Konsolidasi demokrasi
- Reformasi birokrasi
- Pembatasan dwifungsi ABRI
- Upaya mengatasi separatisme

Prestasi:
- Amandemen UUD 1945 (Amandemen IV, 2002)
- Pemisahan Timor Timur (menjadi Timor Leste)
- Undang-undang pemilu baru (sistem distrik)
- Pembentukan lembaga baru (Komisi Yudisial, dll)
- Otonomi daerah yang lebih luas

Tantangan:
- Terorisme (Bom Bali 2002: 202 korban)
- Separatisme Aceh (Tsunami 2004)
- Krisis ekonomi yang berlanjutan
- Pengangguran dan kemiskinan

Pemilu 2004:
- Pertama kali pemilihan presiden langsung
- Presiden dipilih langsung oleh rakyat (bukan MPR)
- Susilo Bambang Yudhoyono (SBY) menang dengan 60.6% suara (putaran 2)

ERA 6: SUSILO BAMBANG YUDHOYONO / SBY (2004-2014)

Periode: 2 periode (10 tahun)
Latar: Jenderal Polisi, kalangan militer/keamanan
Kabinetnya: Dikombinasikan profesional, militer, dan Demokrat

Periode 1 (2004-2009):
Kebijakan Pembangunan:
- Revolusi Energi: Pembangunan pembangkit listrik
- Infrastruktur: Jalan tol, bandara, pelabuhan
- Kesehatan: Asuransi kesehatan (Askes)
- Pendidikan: Program gratis 9 tahun
- Pertahanan: Modernisasi alutsista

Prestasi Keamanan:
- Pembersihan JAD (Jemaah Ansharut Tauhid)
- Penangkapan Abu Bakar Ba'asyir (2008)
- Penandatanganan kesepakatan Aceh (MoU Helsinki 2005)
- Rekonsiliasi Aceh (Tsunami 2004 jadi momentum)
- Penguatan KPK (Undang-undang baru 2019, tapi start dari era ini)

Prestasi Diplomasi:
- Hubungan baik dengan AS, China, India
- Kemitraan Strategis Komprehensif dengan China
- Kerjasama ASEAN dan Asia Pasifik
- Hosting KTT APEC 2013

Pemilu 2009:
- SBY kembali terpilih dengan 60.8% suara (putaran 1)
- Demokrat memenangkan pemilu legislatif (26% suara)
- Koalisi luas dengan PDIP, Golkar, PKS, PPP, PAN

Periode 2 (2009-2014):
Tantangan Baru:
- Bencana alam (Gempa Yogya 2006, Tsunami Mentawai 2010)
- Korupsi masih marak (Bank Century, Hambalang, e-KTP)
- Inflasi dan pengangguran naik
- Banjir Jakarta (2013)
- Isu radikalisme meningkat

Transisi Politik:
- Larangan consecutive (presiden tidak bisa 3 periode berturut-turut)
- Persiapan pemilu 2014
- Munculnya figur baru (Joko Widodo, Prabowo Subianto)

ERA 7: JOKO WIDODO (2014-2024)

Periode: 2 periode (10 tahun)
Latar: Walikota Surakarta, Gubernur DKI Jakarta
Pasangan Calon:
- Periode 1 (2014-2019): dengan Jusuf Kalla
- Periode 2 (2019-2024): dengan Amin Ma'ruf

Periode 1 (2014-2019):
Visi: Jawa Jawa Jawa plus pembangunan nasional inklusif
Fokus Pembangunan:
- Infrastruktur "Nawacita" (9 agenda)
  1. Penguatan keamanan nasional
  2. Penataan struktur birokrasi dan tata kelola
  3. Pembangunan infrastruktur
  4. Reformasi agraria dan lingkungan
  5. Revolusi industri
  6. Pemberdayaan UMKM
  7. Revolusi mental dan karakter bangsa
  8. Pembangunan budaya dan pariwisata
  9. Penguatan tata kelola organisasi pemerintahan

Proyek Infrastruktur Besar:
- Tol Trans-Sumatera
- Tol Trans-Jawa
- Tol Trans-Kalimantan
- Tol Trans-Sulawesi
- Bandara internasional baru (Kulon Progo, Yogyakarta)
- Pelabuhan dalam negeri (Tanjung Priok, Surabaya)
- MRT Jakarta
- Kereta cepat Jakarta-Bandung
- Pembangkit listrik PLTU baru

Tantangan:
- Bencana alam (Gempa Lombok 2018, Tsunami Selat Sunda 2018)
- Terorisme (Bom Surabaya 2018, Markas Polda 2019)
- Hubungan dengan Parlemen yang complex
- Korupsi kader pendukung (e-KTP, dll)
- Pembalian Freeport, isu-isu sosial

Pemilu 2019:
- Joko Widodo vs Prabowo Subianto (rematch 2014)
- Suara sangat ketat: Jokowi 55.5%, Prabowo 44.5%
- Keputusan MK mengakui kemenangan Jokowi
- Protes Prabowo ke MK (berakhir ditolak 4 April 2019)

Periode 2 (2019-2024):
Kabinet "Indonesia Maju" (Amin Ma'ruf):
Agenda Lanjutan:
- Infrastruktur Jabodetabek-Bandung (JAJABODEBEK)
- Ibu Kota Negara Baru di Kalimantan Timur (dimulai 2022)
- Program makan siang gratis di sekolah
- Dana desa ditingkatkan
- Pandemi Covid-19 (Maret 2020 - present)

Kebijakan Pandemi:
- Vaksinasi massal (target 230 juta orang)
- PSBB (Pembatasan Sosial Berskala Besar)
- Protokol kesehatan ketat
- Stimulus ekonomi (BLT, subsidi listrik)
- Pulihkan ekonomi (PEN Rp 695 triliun)

Reformasi Pemerintah:
- Penguatan KPK (UU No. 19 Tahun 2019)
- Penggabungan beberapa kementerian
- Digitalisasi administrasi publik
- Program reformasi agraria

Pencapaian Positif:
- Target swasembada pangan
- Pertumbuhan ekonomi rata-rata 5% (pre-covid)
- Penerimaan inward investment
- Posisi global meningkat
- ASEAN Secretariat dipindah dari Bangkok ke Jakarta (direncanakan)

Tantangan Terakhir:
- Pandemi Covid-19 (2020-sekarang)
- Kematian ratusan ribu
- Krisis ekonomi
- Pengangguran meningkat
- Utang pemerintah naik drastis
- Isu lingkungan (deforestasi, emisi)
- Persiapan pemilu 2024

Transisi & Warisan:
- Membangun jembatan antara rezim Soeharto dengan era reformasi
- Fokus pada pembangunan infrastruktur masif
- Menekankan stabilitas dan continuity
- Menghadapi tantangan geopolitik regional (Laut China Selatan, dll)

ERA 8: PRABOWO SUBIANTO (2024-2029)

Periode: 1 periode (5 tahun - masa jabatan sekarang dipotong jadi 5 tahun)
Latar: Jenderal Ret. Soeharto, pengusaha, tokoh militer
Pasangan: Gibran Rakabuming Raka (putra Jokowi)
Koalisi: Gerindra, Golkar, PKB, Nasdem, PAN, PKS

Pemilu 2024:
- Putaran 1 (14 Februari): Prabowo 43.7%, Ganjar 27%, Anies 24.5%
- Putaran 2 (12 April): Prabowo 58.6%, Ganjar 24.3%, Anies 17.1%
- Pelantikan 20 Oktober 2024

Visi Prabowo:
- Kedaulatan pangan dan kemandirian ekonomi
- Pertahanan maritim yang kuat
- Industrialisasi strategis
- Kesejahteraan rakyat
- Energi terbarukan
- Presiden muda (64 tahun), Gibran muda (36 tahun)

Kebijakan Awal:
- Pembatalan proyek Ibu Kota Negara Baru (refocusing budget)
- Program makan siang dan susu gratis
- Peningkatan anggaran pertahanan
- Reformasi sektor pertanian
- Pembangunan infrastruktur maritim
- Fokus pada swasembada pangan

Tantangan & Outlook:
- Melanjutkan pembangunan infrastruktur Jokowi
- Mengatasi kemiskinan dan pengangguran
- Manajemen utang negara
- Reformasi pendidikan
- Isu-isu lingkungan berkelanjutan
- Geopolitik regional (hubungan dengan China, AS, dll)

Periode: Hingga Oktober 2029 (jika tidak impeach)`,
  },

  isu: {
    title: "Isu-Isu Politik Kontemporer Indonesia",
    content: `ISU POLITIK UTAMA 2024-2025

1. INOVASI PEMBANGUNAN

Ibu Kota Negara (IKN):
- Lokasi: Penajam Paser Utara, Kalimantan Timur
- Awal Proyek: 2022 di era Jokowi
- Tujuan: Mengurangi beban DKI Jakarta, decentralisasi pemerintahan
- Investasi: Sekitar Rp 466 triliun
- Status: Pemerintah Prabowo mengevaluasi dan refocus
- Rencana: Tetap dilanjutkan tapi dengan timing dan skala berbeda
- Dampak: Investasi asing, lapangan kerja, migrasi internal

2. KETAHANAN PANGAN

Swasembada Beras:
- Target: Surplus 2-3 juta ton beras per tahun
- Tantangan: Lahan pertanian berkurang (konversi untuk non-pertanian)
- Program: Redistribusi lahan, subsidi pupuk, teknologi pertanian
- Pentingnya: Menghadapi krisis pangan global (Rusia-Ukraina, iklim)
- Dampak: Harga beras stabil, kemerdekaan pangan

Program Makan Siang Gratis:
- Target: Semua siswa SD hingga menengah (65 juta anak)
- Biaya: Rp 25.000-30.000 per anak per hari
- Budget: Rp 27 triliun per tahun
- Manfaat: Gizi anak, absensi berkurang, fokus belajar
- Tantangan: Logistik, kualitas makanan, koordinasi daerah

3. REFORMASI PENDIDIKAN

Kurikulum Merdeka:
- Pengganti Kurikulum 2013
- Focus: Kreativitas, kolaborasi, critical thinking
- Fleksibilitas: Setiap sekolah bisa adaptasi dengan konteks lokal
- Tantangan: Training guru, infrastruktur, resistance to change
- Progress: Sekitar 40% sekolah sudah implementasikan (2024)

Pendidikan Vokasional:
- Fokus pemerintah pada SMK vs SMA
- Ratios: Target 70% SMK, 30% SMA (saat ini terbalik)
- Partnership: Dengan industri untuk on-the-job training
- Manfaat: Kurangi pengangguran muda, skilled workers

4. ISU KESEHATAN

Pandemi Covid-19 (Legacy):
- Kematian: Lebih dari 150.000 jiwa di Indonesia
- Dampak: Ekonomi, pendidikan, kesehatan mental
- Recovery: Vaksinasi, treatment, transparansi data
- Pembelajaran: Kesiapan infrastruktur kesehatan

Program Kesehatan Universal:
- Perluas cakupan BPJS Kesehatan
- Target: 100% coverage (saat ini 85%)
- Tantangan: Sustainability finansial, kualitas layanan
- Komitmen: Kurangi out-of-pocket spending

5. LINGKUNGAN DAN IKLIM

Deforestasi:
- Angka: 130.000 ha per tahun (berkurang dari 200.000 ha)
- Penyebab: Logging ilegal, konversi lahan, perkebunan
- Upaya: Moratorium lahan gambut, penanaman kembali
- Tujuan: Komitmen net zero 2060, reduce emisi

Emisi Karbon:
- Kontribusi Indonesia: Sekitar 1.7% dari global
- Sumber: Energi, transportasi, pertanian, limbah
- Target: Kurangi 29% dengan bantuan, 41% mandiri (2030)
- Action: Renewable energy (solar, wind, geothermal)

Bencana Alam:
- Negara "Rawan": Ring of Fire, monsoon, El Nino
- Bencana Terbaru: Gempa Sulawesi, Erupsi Merapi
- Sistem Peringatan: Dini, evakuasi, rehabilitasi
- Capacity Building: Disaster management, climate adaptation

6. EKONOMI & KESEJAHTERAAN

Inflasi dan Nilai Tukar:
- Periode 2022-2024: Rupiah melemah vs dollar
- Penyebab: Fed Rate naik, capital flight, trade deficit
- Dampak: Harga import (BBM, barang) naik, daya beli turun
- Respon: BI naikan rate, kurangi subsidi energy

Pengangguran & Kesejahteraan:
- Rate: 4-5% dari labor force (11-13 juta orang)
- Kelompok: Lulusan baru, perempuan, low-skilled
- Program: Digitalisasi UMKM, skilling, bantuan modal

UMK (Upah Minimum Kerja):
- Perbedaan per provinsi (tinggi Jakarta, rendah daerah)
- Diskusi: Naik vs daya saing industri
- Kebijakan: Adjustments tahunan berdasarkan inflation + productivity
- Tantangan: UMKM sulit bayar, labor migration

7. KORUPSI DAN HUKUM

Penanganan Korupsi:
- KPK: 125 kasus di court (2023-2024)
- Konviksi: 70-80% kasusnya condemnation rate tinggi
- Kasus Besar: Korupsi pendidikan, procurement, BUMN
- Tantangan: Political will, perlawanan elite, enforcement

Reformasi Hukum:
- KUHP Baru: Masih dalam proses legislasi (kompleks)
- UU ITE: Controversial provisions (soal kebebasan expression)
- Rule of Law: Memperkuat supremacy hukum vs policy

8. KEAMANAN & GEOPOLITIK

Terorisme:
- Trend: JAD, ISIS, FPI (Front Pembela Islam - unfinished cases)
- Pendekatan: Counterinsurgency, deradicalization program
- Tantangan: Recruits muda (online radicalization), lone wolves

Laut China Selatan:
- Klaim: Vietnam, China, Philippines, Malaysia competing
- Kepentingan Indonesia: Zona Ekonomi Eksklusif (EEZ)
- Diplomasi: Dialog regional, UNCLOS, ASEAN unity
- Pertahanan: Modernisasi TNI AL, surveillance

Hubungan Regional:
- ASEAN: Kepemimpinan Indonesia (host, mediator)
- Indo-Pacific: Strategi balancing antara China-US
- Trade: Regional Comprehensive Economic Partnership (RCEP)

9. TRANSFORMASI DIGITAL

Digital Economy:
- E-commerce: Tokopedia, Shopee, Lazada dominan
- Fintech: Digital payment, lending, insurance
- Opportunity: 270 juta internet users, 150 juta social media
- Regulation: OJK, Kemkominfo developing framework

Digital Transformation Pemerintah:
- e-Governance: Online services, digital identity
- Data Security: Privacy protection, cybersecurity
- Tujuan: Efficiency, transparency, accountability

10. ISU SOSIAL KEMASYARAKATAN

Radikalisme & Intoleransi:
- Trend: Sejak 2010-an increasing, puncak 2016-2017
- Ormas: FPI (dicegah), JAD, ISIS sympathizers
- Respon: Moderation campaign, community policing, education
- Role media: Counter-narrative, media literacy

Kesetaraan Gender:
- Participation: Women di DPR naik jadi 30% (quota)
- Tantangan: Violence terhadap perempuan masih tinggi
- Program: Women empowerment, education, access credit

Kebebasan Beragama:
- 6 agama resmi: Islam, Kristen, Katolik, Hindu, Buddha, Konghucu
- Isu: Minority rights, intolerance, hate speech
- Kebijakan: Kebebasan dijamin UUD, tapi limited secara sosial
- Tantangan: Inter-faith harmony, prevent violence

OUTLOOK & PRIORITIES 2024-2029

Government Focus (Prabowo Administration):
1. Food sovereignty (pangan)
2. Maritime defense & economy
3. Industrial transformation
4. Education quality
5. Healthcare universal coverage
6. Anti-corruption continuity
7. Environmental sustainability
8. Infrastructure completion
9. Debt management
10. Regional leadership ASEAN

Public Expectations:
- Kurangi kemiskinan (target 7%)
- Improve service quality
- Combat corruption
- Create jobs
- Ensure stability & security
- Address climate change`,
  },
};

export default function PolitikPage() {
  const [activeSection, setActiveSection] = useState("partaiPolitik");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredParty, setFilteredParty] = useState("");

  const sections = Object.entries(politicsData).map(([key, value]) => ({
    id: key,
    title: value.title,
  }));

  const currentContent =
    politicsData[activeSection as keyof typeof politicsData];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/40 to-indigo-900/30 border border-purple-900/50 p-8 lg:p-12"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Vote className="text-purple-500" size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
              Politik Indonesia
            </h1>
          </div>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            Jelajahi dunia politik Indonesia: partai, sistem pemilu, struktur
            pemerintah, sejarah, dan isu-isu kontemporer.
          </p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="sticky top-8 bg-gray-800 border border-purple-900/30 rounded-xl p-6 card-shadow">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen size={18} />
              Topik Politik
            </h3>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                    activeSection === section.id
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {section.title.split(" ").slice(0, 2).join(" ")}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-3"
        >
          <div className="bg-gray-800 border border-purple-900/30 rounded-xl p-8 card-shadow">
            <h2 className="text-3xl font-bold text-white mb-6">
              {currentContent.title}
            </h2>

            {activeSection === "partaiPolitik" && (
              <div className="mb-6 flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 text-gray-500" size={18} />
                  <input
                    type="text"
                    placeholder="Cari partai..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-purple-900/30 text-white rounded-lg focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>
            )}

            <div className="prose prose-invert max-w-none">
              {currentContent.content.split("\n\n").map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-gray-300 mb-6 leading-relaxed whitespace-pre-wrap text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 p-6 bg-purple-900/20 border border-purple-900/50 rounded-xl">
              <h3 className="font-bold text-purple-400 flex items-center gap-2 mb-3">
                <AlertCircle size={18} />
                Catatan Penting
              </h3>
              <p className="text-gray-300 text-sm">
                Informasi ini diperbarui hingga Februari 2025. Lanskap politik
                Indonesia terus berkembang. Untuk informasi paling terkini,
                kunjungi situs resmi KPU, DPR, atau Sekretariat Negara.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
