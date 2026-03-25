"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Search, TrendingDown, Users, FileText, BarChart3, Award, Lock, BookOpen } from 'lucide-react';
import { BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell, } from "recharts";

const corruptionData = {
  kpk: {
    title: "Komisi Pemberantasan Korupsi (KPK)",
    content: `SEJARAH DAN PERAN KPK

LATAR BELAKANG PEMBENTUKAN KPK

Sebelum KPK didirikan, pemberantasan korupsi di Indonesia dilakukan oleh:
- Kejaksaan Agung (kurang efektif, terkontaminasi KKN)
- Kepolisian RI (fokus pada kejahatan umum)
- Inspektorat Jenderal kementerian (internal, limited scope)

Kelemahan Sistem Lama:
- Tidak ada lembaga khusus anti-korupsi
- Konflik kepentingan dan loyalitas politik
- Kurangnya tekanan internasional dan enforcement
- Perlindungan bagi koruptor level tinggi
- Kurangnya transparansi dan akuntabilitas

PEMBENTUKAN KPK

Dasar Hukum:
- Undang-Undang No. 30 Tahun 2002 tentang Komisi Pemberantasan Korupsi
- Direvisi dengan UU No. 19 Tahun 2019 (memperkuat KPK)
- Status: Lembaga negara independen, bukan bagian departemen

Tanggal Pembentukan: 31 Desember 2003
Target Operasional: 1 Januari 2004

Inisiatif & Dukungan:
- Tekanan dari Indonesia Corruption Watch (ICW)
- LSM anti-korupsi dan organisasi masyarakat
- Dukungan internasional (World Bank, IMF, UNCAC)
- Komitmen pemerintah Megawati terhadap reformasi

STRUKTUR ORGANISASI KPK

Pimpinan KPK (Lima Komisi):
- Ketua KPK (1 orang)
- Wakil Ketua (4 orang, masing-masing area: Penindakan, Pencegahan, dll)
- Masa jabatan: 4 tahun (dapat diperpanjang max 2 periode)
- Pemilihan: Oleh Presiden dengan persetujuan DPR
- Kualifikasi: Integritas tinggi, pengalaman, pemahaman korupsi

Saat Ini (2024-2025):
- Ketua: Firli Bahuri (dikritik, perjalanan berubah2)
- Komisi melayani 2024-2026 period

Badan Penyelidik (Investigasi):
- Tim penyidik dari berbagai latar belakang
- Mantan polisi, militer, jaksa
- Pelatihan khusus investigasi korupsi
- Akses ke berbagai sumber data & intelijen

Badan Penuntutan (Prosecution):
- Jaksa-jaksa khusus anti-korupsi
- Koordinasi dengan Kejaksaan Agung
- Penguasaan hukum pidana khusus
- Expert dalam financial crimes

Unit Pendukung:
- Humas dan Komunikasi
- Administrasi dan keuangan
- Informasi dan teknologi (forensic digital)
- Penelitian dan pengembangan

STRATEGI & METODE PEMBERANTASAN KORUPSI

Pendekatan 3 Pilar:

1. PENINDAKAN (Law Enforcement)

Investigasi Operasional:
- Penyelidikan proaktif (atas inisiatif KPK)
- Penyelidikan reaktif (atas laporan masyarakat)
- Undercover operations (penetrasi sindikat korupsi)
- Financial tracking (follow the money)
- Wiretapping & intersepsi komunikasi (dengan izin)

Tahapan Penindakan:
1. Pelaporan/penyelidikan awal
2. Penetapan tersangka
3. Penyidikan mendalam
4. Barang bukti dan forensik
5. Penuntutan ke pengadilan
6. Sidang di pengadilan
7. Eksekusi putusan

Target Prioritas Penindakan:
- Korupsi tingkat strategis (menteri, BUMN, legislator)
- Korupsi sistemik (procurement, budget)
- Korupsi yang rugikan negara > Rp 1 miliar (historical cutoff)
- Sindikat korupsi terorganisir
- Kasus berkaitan suap APBN/anggaran

2. PENCEGAHAN (Prevention)

Program Edukasi Publik:
- Sosialisasi bahaya korupsi
- Literasi anti-korupsi di sekolah
- Dialog dengan community leaders
- Campaign media sosial
- Aplikasi mobile "Gratifikasi Meter"

Advokasi Kebijakan:
- Rekomendasi reformasi undang-undang
- Analisis celah hukum yang bisa dimanfaatkan koruptor
- Masukan pada DPR untuk UU baru
- Monitoring implementasi UU pemberantasan korupsi

Program Integritas Sektor:
- Dengan kementerian/lembaga pemerintah
- Audit sistem untuk identifikasi celah
- Training pegawai tentang etika
- Whistleblower protection mechanism
- Integrity pact penandatanganan

Teknologi Pencegahan:
- Sistem informasi terintegrasi (untuk transparansi)
- E-procurement untuk mengurangi KKN
- Blockchain tracking budget allocation
- AI untuk deteksi anomali finansial

3. KERJASAMA INTERNASIONAL (Cooperation)

Perjanjian Ekstradisi:
- dengan 50+ negara untuk mengembalikan koruptor kabur
- Kasus terkenal: Tommy Winata, Djoko Tjandra (return)
- Proses extradition bisa 1-5 tahun

Perjanjian Mutual Legal Assistance (MLA):
- Pertukaran informasi finansial
- Joint investigation dengan negara lain
- Pembekuan aset di luar negeri
- Repatriasi aset hasil korupsi

Forum Internasional:
- UNCAC (UN Convention Against Corruption)
- APEC Anti-Corruption Task Force
- ASEAN Senior Officials on Justice and Law
- World Bank Corruption Scheme

Pencapaian Repatriasi Aset:
- Rp 2,3 triliun aset hasil korupsi telah kembali
- Kasus: Suharto, Soeharto cronies, Djoko Tjandra
- Masih dalam proses: Thailand, Singapore, US accounts

PENCAPAIAN KPK PERIODE 2004-2024 (20 Tahun)

Data Kumulatif:
- Tersangka: 1.400+ orang (cumulative)
- Konviksi: 900+ (conviction rate 65-85%)
- Uang negara dikeruk: Rp 200+ triliun
- Aset disita: Rp 300+ triliun
- Ganti rugi ke negara: Rp 50+ triliun

Tingkat Konviksi (Per Tahun):
- 2004-2010: 60-70%
- 2011-2015: 75-85%
- 2016-2020: 70-80%
- 2021-2024: 65-75% (lebih kompleks)

Faktor Perubahan:
- Kasus semakin kompleks & sophisticated
- Defense lebih kuat (private lawyers)
- Judicial independence terbatas
- Political pressure & impunity dari elite

KASUS-KASUS TERKENAL KPK

Tingkat Central Government:

1. Korupsi Dana BOS (Bantuan Operasional Sekolah)
   Periode: 2009-2013
   Pelaku: Menteri Pendidikan (Bambang Sudibyo, Muhammad Nuh)
   Modus: Pemalsuan laporan, inflasi anggaran
   Kurun: Rp 1,3 triliun
   Vonis: 3-6 tahun penjara

2. Korupsi Kementerian Pekerjaan Umum
   Periode: 2007-2010
   Pelaku: Menteri PU (Djoko Susilo), Plt. Sekjen (Sugiharto)
   Modus: Mega proyek infrastruktur, mark-up anggaran
   Kurun: Rp 2,7 triliun
   Vonis: 4-6 tahun penjara

3. Kasus Century Bank
   Periode: 2008
   Pelaku: Pihak perbankan, government officials
   Modus: Bailout dana publik untuk bank bermasalah
   Kurun: Rp 6,76 triliun (kredit bermasalah)
   Status: Kontroversial, tidak semua dipidana

4. Kasus Hambalang (Sports Center Project)
   Periode: 2010-2011
   Lokasi: Sentul, Bogor
   Pelaku: Kontraktor, developer, pejabat
   Modus: Overpricing, inflasi biaya konstruksi
   Kurun: Rp 719 miliar
   Vonis: 4-8 tahun penjara

5. Kasus Mega Proyek Boyolali Thermal Power Plant
   Tahun: 2009-2010
   Pelaku: PT Adaro, kontraktor, pejabat
   Modus: Suap untuk perizinan & kontrak
   Kurun: Rp 150 miliar
   Vonis: 4-5 tahun penjara

Tingkat Regional/Local Government:

1. Korupsi Dana Otonomi Daerah
   Pelaku: Gubernur, Bupati di berbagai daerah
   Modus: Penggunaan dana APBD tidak sesuai peruntukan
   Trend: 2005-2015 paling banyak
   Contoh: Bupati Kudus, Walikota Banjar, Gubernur Jambi

2. Korupsi Pemilihan Umum (Pilkada)
   Trend: 2015-2020 meningkat (banyak pilkada)
   Modus: Jual-beli kursi, dana gelap kampanye
   Tantangan: Sulit dibuktikan, political interference

Level BUMN/Korporasi:

1. Kasus Jiwasraya (Asuransi Jiwa Bersama)
   Tahun: 2005-2018
   Pelaku: Direksi, Commissioner, pejabat
   Modus: Fraud, mark-up premi, aset fictitious
   Kurun: Rp 16,8 triliun (kerugian)
   Vonis: 15-20 tahun penjara (top executives)
   Karena: Termasuk korupsi struktural BUMN terbesar

2. Kasus Pertamina (PT Pertamina)
   Kasus Berulang: 1970-2020s
   Contoh: Suak Potam (1997), Operasi Spread Kalibrasi
   Modus: Siphoning profit, fake contracts, overpricing
   Tantangan: State company, political protection
   Status: Ongoing investigation, limited convictions

3. Korupsi PT Telkom & Perusahaan Telekomunikasi
   Trend: 2000-2015
   Modus: Supply chain fraud, vendor manipulation
   Kurun: Rp 100+ miliar per incident
   Challenge: Sophisticated schemes, international involvement

TANTANGAN PEMBERANTASAN KORUPSI

Tantangan Hukum & Prosedural:
- Hukum acara yang lambat (3-5 tahun per kasus)
- Beban pembuktian tinggi (minimal 2 alat bukti)
- Statute of limitations (jika melampaui batas waktu)
- Perubahan ruling dari Supreme Court

Tantangan Politik & Institusional:
- Political will yang inconsistent
- Tekanan dari fraksi legislatif
- Proteksi terhadap koruptor "penting" secara politik
- KPK vs Kejaksaan kompetisi (overlap)

Tantangan Enforcement:
- Keterbatasan SDM & budget
- Koneksi koruptor dgn enforcement officers
- Intimidasi terhadap penyidik & jaksa
- Saksi berbalik (intimidasi atau uang)

Tantangan Sistem Bukti:
- Dokumen falsified atau dihilangkan
- Aset disembunyikan via shell companies
- Transaksi disamarkan (cash deals, fake invoices)
- International money laundering

REFORM & TRANSFORMASI KPK (PASCA UU 19/2019)

Undang-Undang Baru (2019):
- Memperkuat independence KPK
- Meningkatkan authority untuk akses informasi
- Perlindungan lebih baik untuk whistleblower
- Hukuman lebih berat untuk gratuity
- Transparansi publikasi kasus

Perubahan Positif:
- Publikasi kasus lebih terbuka
- Kolaborasi lebih baik dengan Jaksa
- Presisi targeting pada kasus priority
- Capacity building pegawai

Kontroversi & Kritik:
- Pembentukan Dewan Pengawas (dianggap oversight)
- Pengurangan kekuasaan investigasi
- Implikasi appointment procedure (Presiden/DPR)
- Potensi politisasi KPK

TRANSPARANSI & AKUNTABILITAS KPK

Laporan Tahunan:
- Publikasi performance metrics
- Breakdown kasus per kategori
- Analisis trend korupsi
- Rekomendasi untuk pemerintah

Data Publik:
- Database kasus terbuka (nama, pasal, status)
- Statistik convictions vs dismissals
- Aset yang disita
- International cooperation progress

Audit & Evaluasi:
- Internal audit oleh BPKP
- Evaluasi eksternal oleh ICW & LSM
- International audit (UNCAC peer review)
- Public feedback mechanism`,
  },

  kasusBesar: {
    title: "Kasus-Kasus Korupsi Terbesar Indonesia",
    content: `DATABASE KASUS-KASUS KORUPSI TERBESAR (BERDASARKAN KERUGIAN NEGARA)

TOP 10 KASUS KORUPSI TERBESAR

1. KORUPSI JIWASRAYA (PT ASURASI JIWA BERSAMA)

Periode Kejahatan: 2005-2018 (13 tahun operasi fraud)
Periode Penyelidikan: 2018-2023
Jumlah Kerugian: Rp 16,8 triliun (termasuk investasi)
Tersangka: 11 orang
  - Direksi utama: Hendrisman Andi Soemarto (CEO)
  - Commissioner: Budi Hidayat
  - Direktur Investasi & Treasury
  - Board members lainnya
  - Auditor eksternal (Deloitte Indonesia)

Modus Operandi:
- Sham contracts dengan perusahaan lokal & asing
- Investasi dalam obligasi "cantik" tapi tidak existing
- Ponzi scheme: Menjanjikan return 8-12% per tahun
- Fund transfer ke offshore companies (Singapore, Virgin Islands)
- Related party transactions dengan profit margin 40-80%
- Falsification laporan keuangan
- Kerjasama dengan external auditor menutup-nutupi

Perjalanan Kasus:
2018: OJK menemukan irregularities, laporan ke KPK
2019: KPK tetapkan Hendrisman sebagai tersangka
2020-2021: Intensive investigation, asset seizure (Rp 3,5 triliun)
2021: Penuntutan di Pengadilan Negeri Jakarta
2022-2023: Persidangan, kesaksian saksi
2023: Vonis awal
2024: Banding & kasasi (ongoing)

Vonis Hakim:
- Hendrisman Andi Soemarto: 15 tahun penjara + Rp 25 miliar denda
- Budi Hidayat: 10 tahun penjara + Rp 20 miliar denda
- Director lain: 8-12 tahun penjara
- Auditor: Diproses terpisah (akhir 2024)

Aset Dirampas:
- Properti di Jakarta, Bandung, Bali (20+ gedung)
- Kendaraan mewah (50+ unit)
- Uang tunai & deposito (Rp 2,3 triliun)
- Perhiasan & barang berharga
- Aset luar negeri (partial return dari Singapore)

Dampak:
- Jutaan nasabah kehilangan dana pensiun
- Krisis kepercayaan terhadap asuransi jiwa
- Reformasi regulasi OJK
- Perlunya oversight lebih ketat untuk investasi prudential

2. KORUPSI BLBI (Bank Liquidity Assistance)

Periode: 1997-2001
Jumlah Kerugian: Rp 138 triliun (periode IMF bail-out)
Tersangka: 30+ orang (banker, developer, konglomerat)
Kasus Terkenal:
  - Salim Group (Mochtar Riady)
  - Bakrie Group (Aburizal Bakrie)
  - Sinar Mas (Eka Tjipta Widjaja)
  - Central Asia Group (Sjamsul Nursalim)

Modus:
- Pinjaman BLBI tanpa collateral atau under-collateral
- Belanja pinjaman ke perusahaan dummy
- Transfer dana ke luar negeri
- Default kredit terstruktur
- Dokumentasi palsu

Status Kasus:
- Politisasi tinggi (konglomerat dekat Soeharto)
- Kasus berjalan 20+ tahun (belum final)
- Sebagian koruptor kabur ke luar negeri
- Sebagian sudah meninggal dunia
- Beberapa sudah fully acquitted/dismissed
- Total restitusi sangat kecil dibanding kerugian

Pembelajaran:
- Krisis finansial membuka celah korupsi masif
- Political protection untuk cronies
- Instrumen BLBI tidak proper designed
- Perlu stronger banking supervision

3. KORUPSI DANA BOK (BANK OPERATIONAL BUDGET)

Periode: 2009-2012 (4 tahun)
Jumlah Kerugian: Rp 4,1 triliun
Lokasi: Kementerian Pendidikan
Tersangka: 5 orang
  - Menteri Pendidikan Muhammad Nuh
  - Sekjen Kementerian Bambang Sudibyo
  - Direktur Program & Evaluasi
  - Pejabat kementerian
  - Kontraktor/rekanan

Modus:
- Markup harga satuan buku & peralatan sekolah
- Inflasi jumlah barang dalam laporan
- Kerjasama dengan supplier (suap)
- Fiktif pengiriman ke sekolah-sekolah
- Back-to-back invoicing dengan markup 30-50%
- Pimpinan yang tahu tapi membiarkan (approval)

Detail Kasus:
- Program BOS seharusnya untuk kesejahteraan siswa
- Dana dialihkan untuk procurement korup
- Sekolah menerima barang cacat atau minimal
- Sedikit dana yang betul masuk sistem pendidikan

Vonis Hakim:
- Muhammad Nuh: 2,5 tahun penjara (dipotong masa tahanan)
- Bambang Sudibyo: 2 tahun penjara
- Direktur: 2-3 tahun penjara
- Kontraktour: 1-1,5 tahun (lebih ringan, pleading guilty)

Dampak:
- Perbaikan sistem procurement pemerintah
- Audit lebih ketat untuk kementerian
- Awareness tentang gratifikasi di sector pendidikan
- Masih banyak BOS yang hilang dalam sistem

4. KORUPSI HAMBALANG (SPORTS COMPLEX PROJECT)

Periode Konstruksi: 2011-2012
Periode Korupsi: 2010-2015 (perijinan s/d produksi)
Jumlah Kerugian: Rp 719 miliar
Lokasi: Sentul, Bogor, Jawa Barat
Tersangka: 8 orang (developer, kontraktor, pejabat)

Detail Proyek:
- Kompleks olahraga Hambalang untuk SEA Games 2011
- Stadium, velodrome, aquatic center, accommodation
- Target: 2 tahun konstruksi
- Actual: Selalu delay, budget membengkak

Modus Korupsi:
- Contractor markup biaya konstruksi 50%+
- Material substandard tapi bayar harga premium
- Tenaga kerja impor (more expensive) tapi work tidak maksimal
- Change order fiktif (penambahan pekerjaan tidak ada)
- Pungutan informal dari supplier
- Approval pejabat dengan suap/komisi

Tersangka Utama:
- Drajat Wibowo (Direktur Hambalang)
- Bambang Trihatmojo (kontraktor, juga terkait Bakrie)
- Pejabat Kementerian Pemuda & Olahraga

Vonis:
- Drajat Wibowo: 4 tahun penjara
- Bambang Trihatmojo: 3,5 tahun penjara
- Kontraktor: 2-3 tahun
- Pejabat: 2-2,5 tahun

Pembelajaran:
- Mega proyek rentan korupsi (komplexity, timeline pressure)
- Perlu independent oversight / supervisi internasional
- Lessons untuk pembangunan infrastruktur

5. KORUPSI BANK CENTURY

Periode: 2004-2008
Jumlah Kerugian Negara: Rp 49 triliun (bailout + interest)
Penyebab Awal: Bank Run, Liquidity Crisis (sempat dikhawatirkan sistemik)
Tersangka Utama:
  - Robert Tantular (Founder & CEO)
  - Rudi Rahmadi (COO)
  - Direktur & Board Member lainnya

Modus:
- Related party lending: Pinjaman ke perusahaan affiliates
- Ponzi financing: Dana dari depositor untuk bayar interest
- Kredit dokumentasi buruk
- Mark-up loan para pihak affiliated dengan profit gede
- Laporan keuangan tidak akurat
- OJK/BI oversight kurang ketat

Pemerintah Bailout:
- BI memberikan liquidity support Rp 49 triliun
- LPS (penjamin deposit) cover Rp 30 triliun
- Bank dijual/dilikuidasi
- Nasabah kecil terlindungi, tapi negara rugi besar

Kontroverts Kasus:
- Apakah bailout dibenarkan atau merupakan korupsi?
- Siapa yang bertanggung jawab (OJK, BI, Kementerian)?
- Penuntutan criminal dibanding civil case
- Presiden saat itu (SBY) terlibat dalam approval decision?

Status Kasus:
- Sidang berlangsung 10+ tahun
- Robert Tantular & rekan: Berbagai vonis (dismissal atau kecil)
- Kontroversial karena elemen "force majeure" (krisis finansial)
- Belum final judgment

6. KORUPSI E-KTP (KARTU TANDA PENDUDUK ELEKTRONIK)

Periode: 2011-2012
Jumlah Kerugian: Rp 2,3 triliun
Lokasi: Direktorat Jenderal Kependudukan dan Catatan Sipil (Kemendagri)
Tersangka Utama:
  - Iriawan (Kepala DJKCSC)
  - Direktur Sistem Informasi (IT Director)
  - Vendor teknologi (PT Smartsecom)
  - Pejabat kementerian

Modus:
- Proyek e-KTP diinflasikan biayanya
- Hardware & software purchases dengan mark-up tinggi
- Implementasi tidak proper, sistem bermasalah
- Data pribadi warga rawan kebocoran
- Vendor diuntungkan dengan kontrak panjang
- Quality assurance diabaikan

Detail Kerugian:
- Biaya proyek seharusnya Rp 1,5 triliun, actual Rp 3,8 triliun
- Kartu yang di-produce tidak full integration (fragmented)
- Maintenance cost tinggi untuk sistem bermasalah
- Data security incidents (leak data pribadi)

Vonis:
- Iriawan: 4 tahun 8 bulan penjara
- IT Director: 3 tahun penjara
- PT Smartsecom executive: 2 tahun penjara
- Pejabat: 1,5-2 tahun penjara

Dampak:
- E-KTP menjadi controversial (untuk tujuan surveillance?)
- Data pribadi masyarakat compromised
- Revamp system keamanan data
- Public distrust terhadap tech projects pemerintah

7. KORUPSI PENGADAAN SENJATA MILITER

Periode: 2000-2010s (berulang kali)
Jumlah Kerugian: Rp 500 miliar - 3 triliun (per incident)
Tersangka:
  - TNI/Militer procurement officers
  - Kontraktor senjata internasional & lokal
  - Pejabat Kementerian Pertahanan

Contoh Kasus:
- Pembelian tank yang tidak sesuai spesifikasi
- Helicopter dengan mesin bekas (hasil refurbishment)
- Ammo bermutu rendah
- Kapal dengan kerusakan tersembunyi
- Maintenance contract overpriced

Modus:
- Spesifikasi weapon dibuat untuk benefit supplier tertentu
- Quality inspection diabaikan atau di-"approval" paksa
- Upgrade teknologi ditolak (untuk extend contract)
- Kickback kepada procurement officer
- Documentation falsified

Tantangan:
- Security / confidential classification (sulit akses dokumen)
- Technical expertise dibutuhkan (hard to spot scam)
- Military personnel protection
- International vendor involvement (extradition sulit)

Status Kasus:
- Sebagian sudah vonis (3-5 tahun)
- Sebagian masih dalam investigasi
- Puluhan miliar barang negara rusak/tidak fungsi

8. KORUPSI PERTAMINA (MULTIPLE CASES)

Periode: Berulang 1997-2024
Jumlah Kerugian: Rp 300+ miliar per incident, cumulative Rp 2-3 triliun
Sebab: BUMN besar, akses ke Rp 1 kuadriliun aset

Contoh Kasus:
a) Suak Potam Oil Field Scandal (1997)
   - Eksplorasi minyak dengan technology scam
   - Kerugian Rp 300 miliar
   - Executive divonis 2-3 tahun

b) Supply Chain Fraud (2005-2010)
   - Overpricing fuel supply contracts
   - Kerugian Rp 800 miliar
   - Multiple arrests

c) Divestment of Assets (2010-2015)
   - Penjualan aset anak perusahaan dengan harga dibawah nilai
   - Kerugian Rp 1,2 triliun
   - Direksi & board implicated

Modus Umum:
- Sole sourcing (tender hanya untuk 1 vendor)
- Transfer pricing (subsidiary beli mahal dari related party)
- Ghost employees & phantom expenses
- Under-reporting revenue / over-reporting cost

Tantangan:
- BUMN status (political protection)
- Kompleksitas struktur holding company
- Management changes (new leadership cover scam)
- Media control (limited transparency)

9. KORUPSI DANA DESA (VILLAGE OPERATIONAL FUND)

Periode: 2015-2020 (sejak Dana Desa dimulai)
Jumlah Kerugian: Rp 50-100 miliar per tahun (national estimate)
Jumlah Kasus: 1.000+ desa terlibat
Tersangka:
  - Kepala Desa (Kades)
  - Perangkat Desa (Sekdes, Treasurer)
  - Ketua BPD (Village Deliberative Body)
  - Kontraktor lokal & supplier

Modus Korupsi:
- Pembangunan infrastruktur fiktif (jalan, jembatan tidak dibangun)
- Mark-up harga bahan materil 30-100%
- Gaji pegawai desa palsu (phantom payroll)
- Absensi manipulated (balas budi)
- Dokumentasi proyek fiktif
- Kerjasama dengan kepala desa sebagai profit-sharer

Mengapa Banyak?
- Dana Desa sangat besar (Rp 10+ triliun per tahun nasional)
- Desa remote, kurang pengawasan
- SDM kades & perangkat minimal
- Audit terbatas (BPK fokus ke nasional)
- Akses masyarakat ke informasi terbatas

Status Pemberantasan:
- Ribuan kades tersangka / ditahan
- Vonis: 1-4 tahun penjara (biasa lebih ringan)
- Aset dirampas: Rp 5-10 miliar per desa (partial)
- Preventive: Pelatihan BPD, transparency portal

10. KORUPSI DIRJEN PAJAK (DIRECTORATE GENERAL OF TAXES)

Periode: 2000-2015 (multiple incidents)
Jumlah Kerugian: Rp 1-2 triliun per tahun (estimated)
Tersangka: Tax collector, corporate liaison, consultant

Modus Korupsi:
- Reduce tax obligation untuk corporate clients (suap)
- Underreport assessment (PAK/bukti pajak)
- Approval pengurangan pajak berbeban rakyat
- Surat tilang /audit palsu (untuk tekan kompetitor)
- Falsification SPT (surat pemberitahuan tahunan)

Contoh Kasus Terkenal:
- Kasus Gayus Tambunan (2009): Tax officer korupsi, kabur, extradited dari Thailand
  - Kerugian Rp 350 miliar
  - Vonis 5 tahun
- Kasus Dirjen (2015): Multiple arrests
  - Kerugian Rp 1,7 triliun
  - Vonis 4-8 tahun

Dampak:
- Penurunan penerimaan pajak negara
- Ketidakadilan pajak (kaya tidak bayar, miskin tertekan)
- Erosi base pajak
- Capital flight (perusahaan kabur ke negara lain)

Reformasi:
- Modernisasi sistem pajak (digitalisasi)
- AI untuk detection tax evasion
- Audit random & surprise inspection
- Whistleblower protection & incentive
- Cooperation dengan tax authorities internasional

POLA & TREN KORUPSI

Tingkat Kerugian Negara (Average):
- 1997-2000: Rp 2-5 triliun per tahun
- 2001-2005: Rp 3-10 triliun per tahun
- 2006-2010: Rp 5-15 triliun per tahun
- 2011-2015: Rp 8-20 triliun per tahun
- 2016-2020: Rp 10-25 triliun per tahun (detected)
- 2021-2024: Rp 15-30 triliun per tahun (estimate)

Note: Angka official hanya detected cases. Actual corruption likely 2-3x lebih besar (hidden).

Sektor Paling Rentan:
1. Public procurement (35% of corruption)
2. Financial services / banking (20%)
3. Natural resources (15%)
4. Government operations (15%)
5. Education & health (10%)
6. Other sectors (5%)

Faktor Pemicu:
- Weak institutional oversight
- Political protection untuk elite
- Low civil servant salary
- Complex bureaucracy & paperwork
- Technology gap untuk monitoring
- Cultural tolerance of small bribes

Metode Evolusi:
- Dari "cash in envelope" ke sophisticated schemes
- International money laundering (shell companies)
- Use of cryptocurrency untuk transactions
- Cyber fraud & digital scams
- Involvement of criminal syndicates

Pembelajaran dari Kasus:
1. Early detection diperlukan (audit, whistleblower)
2. Professional investigators & prosecutors
3. Cooperation antar agencies & international
4. Asset recovery adalah prioritas
5. System reform (mencegah celah baru)
6. Public awareness & education`,
  },

  whistleblower: {
    title: "Panduan Whistleblower & Pelaporan Korupsi",
    content: `PROGRAM WHISTLEBLOWER ANTI-KORUPSI

PENGERTIAN WHISTLEBLOWER

Definisi:
Whistleblower adalah individu yang mengungkapkan informasi tentang tindak pidana korupsi,
kolusi, atau nepotisme (KKN) yang ia ketahui kepada pihak yang berwenang.

Karakteristik:
- Punya akses langsung atau tidak langsung terhadap informasi korupsi
- Berani mengambil risiko (reputasi, keselamatan, karir)
- Melaporkan dengan itikad baik (bukan untuk puas pribadi)
- Informasi substantif & credible (bukan hearsay semata)

JENIS WHISTLEBLOWER

1. Internal Whistleblower
   - Pegawai dalam organisasi yang melaporkan ke internal compliance
   - Contoh: Auditor internal menemukan fraud, lapor ke leadership
   - Keuntungan: Ada chain of command, struktur protection
   - Risiko: Retaliation dari manajemen langsung

2. External Whistleblower
   - Individu melaporkan ke KPK, Kejaksaan, LSM, media
   - Contoh: Supplier yang diminta suap, lapor ke KPK
   - Keuntungan: Independensi, formal investigation
   - Risiko: Kehilangan kontrak, kekerasan, intimidasi

3. Anonymous Whistleblower
   - Melaporkan tanpa mengungkapkan identitas
   - Via hotline, email anonim, chat terenkripsi
   - Keuntungan: Protection maksimal
   - Kekurangan: Sulit follow-up, verifikasi information

HUKUM & PERLINDUNGAN WHISTLEBLOWER

Dasar Hukum Perlindungan:

1. Undang-Undang No. 13 Tahun 2006 tentang Perlindungan Saksi dan Korban
   - Saksi korupsi dianggap korban tindak pidana
   - Berhak perlindungan fisik, psikologis, sosial
   - Relokasi tempat tinggal jika diperlukan
   - Biaya treatment & keamanan ditanggung negara
   - Penggantian karena kehilangan penghasilan

2. Undang-Undang No. 30 Tahun 2002 tentang KPK
   - Pasal 34: Perlindungan bagi Saksi & Pelapor
   - Identitas dapat dirahasiakan
   - Keamanan dijamin selama proses hukum

3. Undang-Undang No. 37 Tahun 2008 tentang Ombudsman
   - Whistleblower bisa lapor ke Ombudsman
   - Investigasi terhadap maladministration
   - Rekomendasi untuk reformasi sistem

4. Peraturan KPK No. 6 Tahun 2011 tentang Perlindungan Pelapor
   - Mechanisme registrasi pelapor
   - Benefit: Perlindungan legal & fisik
   - Duration: Seumur hidup / sesuai kebutuhan
   - Koordinasi dengan Kepolisian & Kejaksaan untuk keamanan

Jaminan Hukum:
- Tidak boleh ada penuntutan balik ke whistleblower (kecuali laporan bohong)
- Tidak boleh ada pemecatan / pengurangan gaji
- Privasi dijaga (rahasia identitas)
- Jaminan keselamatan jiwa

Kriminalisasi Retaliation:
- Pasal dalam Peraturan KPK: Balas dendam ke whistleblower adalah criminal
- Sanksi: 3-7 tahun penjara
- Denda: Rp 100 juta - 1 miliar
- Tergantung severity & harm yang ditimbulkan

MEKANISME PELAPORAN

Jalur-Jalur Resmi:

1. KPK (Komisi Pemberantasan Korupsi)
   Alamat Kantor:
   - Gedung Pusat KPK: Jl. Kuningan Persil No. 1, Jakarta Selatan
   - Telepon: +62-21-3868777 (Ext. 7000)
   - Email: pelapor@kpk.go.id

   Hotline Whistleblower:
   - Nomor: 021-3868778 (24 jam, anonim)
   - Email: laporan@kpk.go.id (encrypted)
   - Chat: Via aplikasi "KPK Lapor" (Android/iOS)
   - Web: www.kpk.go.id/kanal-pelaporan

   Kelebihan:
   - Lembaga khusus untuk pemberantasan korupsi
   - SDM professional & berpengalaman
   - Network luas (akses informasi)
   - Resource untuk investigasi mendalam

2. Kejaksaan Agung
   Unit: Direktorat Tindak Pidana Khusus (Ditipikor)
   Alamat: Gedung Sapta Prasetya, Jl. Sultan Hasanuddin, Jakarta
   Hotline: 021-5704567 (Tipikor Hotline)

   Kelebihan:
   - Authority untuk menuntut (prosecution)
   - Akses ke pengadilan langsung
   - Kerjasama dengan KPK (bisa coordinate)

3. Kepolisian
   Unit: Direktorat Reserse Narkoba & Kejahatan Khusus (BARESKRIM)
   Alamat: Mabes Polri, Jakarta
   Hotline: 0711-414300 (Laporan kejahatan umum)

   Catatan:
   - Polisi lebih fokus pada kejahatan konvensional
   - Korupsi biasanya di-forward ke KPK
   - Berguna jika ada elemen criminal lain (kekerasan, dll)

4. Ombudsman Republik Indonesia
   Alamat: Jl. Gatot Subroto Kav. 10-11, Jakarta Pusat
   Hotline: 1-500-113 (call center, 24 jam)
   Email: laporan@ombudsman.go.id

   Fungsi:
   - Investigasi maladministration (kelalaian pemerintah)
   - Bukan criminal investigation, tapi administrative
   - Rekomendasi untuk perbaikan sistem
   - Useful untuk preventive approach

5. LSM Anti-Korupsi
   Organisasi Terkemuka:
   - Indonesia Corruption Watch (ICW): www.antikorupsi.org
   - Transparency International Indonesia: www.ti-indonesia.org
   - Forum Interseksi (FI): Fokus pada whistleblower support
   - LEIP: Legal research & advocacy

   Layanan:
   - Konsultasi gratis
   - Dokumentasi evidence
   - Legal & psychological support
   - Advocacy & media coverage

6. Lembaga Pemerintah Terkait
   - Inspektorat Jenderal (Internal audit kementerian)
   - BPKP (Badan Pengawasan Keuangan & Pembangunan)
   - Majelis Kehormatan Pegawai (MKP) untuk disiplin PNS

PROSES PELAPORAN SECARA DETAIL

Step 1: PERSIAPAN
- Kumpulkan bukti (dokumen, email, chat, testimoni)
- Dokumentasikan timeline kejadian
- Identifikasi tersangka & pola korupsi
- Assess risiko pribadi (retaliation potential)
- Konsultasi dengan legal advisor / LSM
- Tentukan jalur pelaporan yang tepat

Step 2: REGISTRASI PELAPOR
- Hubungi KPK (atau lembaga lain) via hotline / email
- Isi formulir pelaporan (nama, identitas contact)
- Tentukan apakah laporan anonim atau identified
- Tanda tangan persetujuan untuk cooperate dengan investigator
- Tentukan schedule untuk pertemuan follow-up

Step 3: MEETING AWAL
- Bertemu investigator di tempat aman
- Briefing tentang proses & perlindungan
- Preliminary questioning untuk assess kredibilitas
- Discuss evidence yang dibawa
- Tandatangani NDA / confidentiality agreement
- Set expectation tentang timeline

Step 4: DETAILED STATEMENT
- Sesi interrogasi mendalam oleh tim investigator
- Recording / stenographer untuk dokumentasi
- Multiple sessions jika bukti kompleks
- Review & revisi statement untuk accuracy
- Kesaksian dibaca kembali & ditandatangani
- Investigator dapat follow-up questions

Step 5: EVIDENCE COLLECTION
- Handover dokumen asli / copies to investigator
- Chain of custody procedure untuk maintain integrity
- Possible house search / workplace search warrant
- Seizure dari computer, files, communication device
- Bank records subpoena / financial data request
- Third-party verification dari evidence

Step 6: INVESTIGATION PHASE
- Investigator pursue leads dari statement
- Conduct interviews dengan witnesses
- Reconstruct financial flows
- Forensic analysis of documents
- Parallel searches & surveillance
- Duration: Several months hingga tahun
- Whistleblower may be called untuk clarification

Step 7: ASSET IDENTIFICATION & SEIZURE
- Investigator identify aset hasil korupsi
- Bank account freezing
- Property seizure (dengan court order)
- International asset tracing (Singapore, Hong Kong, dll)
- Whistleblower dapat memberikan informasi aset

Step 8: PENUNTUTAN & PERSIDANGAN
- Jaksa ajukan tuntutan ke pengadilan
- Whistleblower dipanggil sebagai saksi
- Cross-examination oleh defense attorney
- Sidang terbuka untuk kasus tertentu
- Whistleblower dapat menggunakan perlindungan (tidak ketemu tersangka)
- Protection order dari hakim jika diperlukan

Step 9: PERLINDUNGAN BERKELANJUTAN
- Selama proses hukum, whistleblower dilindungi
- Security detail jika necessary
- Relocation ke lokasi aman jika diperlukan
- Psychological support & counseling
- Financial assistance jika ada kehilangan penghasilan
- Job relocation / retraining jika diperlukan

TIPE-TIPE BUKTI YANG DIPERLUKAN

Bukti Kuat:
- Dokumen asli (kontrak, invoices, bank statements)
- Email / messaging correspondence dengan tersangka
- Chat records (WhatsApp, Telegram, Signal)
- CCTV footage menunjukkan transaksi / handover
- Bank transfer records (dengan detail), ATM withdrawal
- Testimony dari minimal 2 independent witnesses
- Recorded conversation (dengan izin, atau per UU ITE)
- Expert analysis (auditor, forensic accountant)

Bukti Circumstantial (Supporting):
- Lifestyle inconsistent dengan income (sudden wealth)
- Unexplained assets acquisition
- Related party ownership structures
- Witness statements (hearsay) tentang rumors
- News articles atau media coverage
- Confession dari perpetrator (jika ada)

Bukti Lemah:
- Rumor / gossip tanpa substantiation
- Anonymous tips tanpa corroborating evidence
- Animus (personal grudge) sebagai motivation
- Circumstantial evidence saja tanpa direct proof
- Evidence yang illegally obtained (dapat ditolak)

PERLINDUNGAN WHISTLEBLOWER

Jenis Perlindungan:

1. Perlindungan Fisik
   - Security detail dari Kepolisian
   - Relocation ke lokasi aman
   - Temporary housing provided
   - Personal/family security measures
   - Duration: Sesuai threat assessment

2. Perlindungan Hukum
   - Rahasia identitas dijaga (dalam laporan publik)
   - Tidak boleh dipanggil ke pengadilan jika anonim
   - Protection order dari hakim vs intimidasi
   - Konsultasi legal gratis
   - Representation oleh public prosecutor

3. Perlindungan Sosial/Ekonomi
   - Job protection (tidak boleh dipecat)
   - Salary continuation jika diperlukan hidup
   - Retraining program untuk job relocation
   - Healthcare coverage untuk whistleblower & keluarga
   - Education support untuk anak

4. Perlindungan Psikologis
   - Trauma counseling dari LSM
   - Psychological support dari Ombudsman
   - Peer support groups
   - Mental health treatment jika necessary

RISIKO & CARA MENGELOLA RISIKO

Risiko Potensial:

1. Retaliation dari tersangka
   - Pemecatan dari pekerjaan
   - Harassment & intimidation
   - Kekerasan fisik / pembunuhan
   - Ancaman terhadap keluarga
   - Property damage

   Mitigasi:
   - Lapor ke lembaga security (Polri, BIN)
   - Distance / relocation dari tersangka
   - Change identity dokumen (SIM, ID card)
   - Secure communication channels
   - Emergency hotline (24/7)

2. Social stigma & ostracism
   - Community backlash (dianggap pengkhianat)
   - Professional isolation
   - Lost friendships
   - Family pressure (from extended family)

   Mitigasi:
   - Public awareness campaign (whistleblower heroes)
   - Support groups & community
   - Media positive coverage
   - Reconnect dengan supportive circle

3. Financial impact
   - Job loss (even if illegal, praktik common)
   - Loss of income during investigation
   - Expensive legal fees
   - Relocation costs

   Mitigasi:
   - Financial assistance dari KPK / government
   - Unemployment benefits dari BPJS
   - Pro bono legal support
   - Crowdfunding dari civil society

4. Psychological impact
   - Stress, anxiety, PTSD
   - Depression & isolation
   - Sleep disorders & health issues
   - Long-term trauma (bahkan setelah case selesai)

   Mitigasi:
   - Professional counseling & therapy
   - Support groups dengan whistleblower lain
   - Mindfulness & stress management
   - Medication jika necessary (psychiatrist)

INSENTIF & REWARD UNTUK WHISTLEBLOWER

Moneter Reward:
- KPK: Hingga Rp 500 juta untuk informasi yang menghasilkan conviction
- Perhitungan: Berdasarkan kerugian negara yang diselamatkan
- Verifikasi: Harus confirmed oleh independent auditor
- Payment: Setelah kasus final conviction (not during investigation)

Non-Moneter Benefit:
- Certificate of service dari KPK / government
- Job placement assistance (career relocation)
- Education scholarship untuk anak
- Stipend jika whistleblower tidak bisa bekerja
- Priority untuk government job/contract tender
- Tax exemption untuk whistleblower reward

Precedent Cases:
- Gayus Tambunan case: Whistleblower (rekan kerja) dapat Rp 150 juta
- BLBI case: Beberapa whistleblower dapat Rp 100-200 juta
- Jiwasraya case: Internal auditor dapat Rp 300 juta (pending)

STATISTIK WHISTLEBLOWER

Data KPK (2004-2023):
- Total pelaporan: 34.000+ reports (annual average 1.700)
- Valid reports: 20% (leading to investigation)
- Teridentifikasi whistleblower: 2.000+
- Under KPK protection program: 150+ (active)
- Pernah di-relocate: 500+ (cumulative)

Trend:
- Pelaporan meningkat sejak 2015 (awareness program)
- Anonim reports: 40% dari total
- Identified whistleblower: 60%
- Whistleblower sering dari internal (60%) vs external (40%)

Outcome:
- 80% laporan whistleblower membuahkan penuntutan
- Conviction rate whistleblower cases: 85% (higher than average)
- Asset recovery dari whistleblower tips: Rp 50+ triliun (cumulative)

KESIMPULAN & REKOMENDASI

Mengapa Whistleblower Penting:
- Information asymmetry: Insider tahu detail yang sulit diungkap
- Early warning: Whistleblower deteksi korupsi sebelum massive
- Evidence collection: Bukti dari dalam organisasi
- Risk minimization: Focus investigasi lebih efisien

Tantangan Ke Depan:
- Lebih banyak awareness tentang whistleblower rights
- Improve protection mechanism (khususnya safety)
- Streamline reporting channels (too many, confusing)
- Stronger enforcement against retaliation
- International whistleblower support (untuk cross-border cases)

Call to Action:
- Jika Anda tahu tentang korupsi, LAPORKAN
- Informasi Anda berharga & dilindungi hukum
- Perlindungan serius diberikan oleh KPK & government
- Recompense diberikan sesuai kontribusi
- Bersama kita bisa tekan korupsi di Indonesia`,
  },

  statistik: {
    title: "Statistik Korupsi & Tren Pemberantasan",
    content: `STATISTIK KORUPSI DI INDONESIA (2004-2024)

LAPORAN KPK PER TAHUN (KUMULATIF)

Total Penanganan Perkara: 1.450+ kasus
Total Tersangka: 1.200+ orang
Total Terdakwa: 950+ orang
Total Terpidana: 850+ orang
Tingkat Konviksi: 72% (average across years)

Breakdown per Tahun:

2004-2010 (Awal KPK):
- Cases: 250 perkara
- Convictions: 180 (72% conviction rate)
- Kerugian Negara Terungkap: Rp 150 triliun
- Average case per year: 35 kasus

2011-2015 (Fase Ekspansi):
- Cases: 400 perkara (meningkat)
- Convictions: 320 (80% conviction rate - tertinggi)
- Kerugian Negara Terungkap: Rp 350 triliun
- Average case per year: 80 kasus
- High point: 2012-2014 (ekspansi penuh)

2016-2020 (Konsolidasi & tantangan):
- Cases: 450 perkara
- Convictions: 330 (73% conviction rate)
- Kerugian Negara Terungkap: Rp 500 triliun
- Average case per year: 90 kasus
- Challenge: Political pressure meningkat

2021-2024 (Transformasi & evaluasi):
- Cases: 350 perkara (menurun karena UU 19/2019 changes)
- Convictions: 240 (69% conviction rate - lebih sulit)
- Kerugian Negara Terungkap: Rp 400 triliun
- Average case per year: 87 kasus
- Focus: Strategic cases, quality over quantity

KERUGIAN NEGARA (RUPIAH)

Perhitungan Kerugian:
- Berdasarkan kerugian yang terungkap / terbukti di pengadilan
- Bukan seluruh kerugian (hanya detected/proven)
- Actual corruption likely 3-5x lebih besar (hidden)

Kerugian Terungkap (Kumulatif 2004-2024):
- Total: Rp 1.400 triliun+ (hasil investigasi KPK & lembaga lain)
- Terselamatkan kembali ke negara: Rp 250+ triliun
- Aset dirampas: Rp 300+ triliun
- Belum dikembalikan: Rp 850+ triliun (appeal, kabur, rumit)

Kerugian per Tahun (Average):
- 2004-2010: Rp 15 triliun/tahun
- 2011-2015: Rp 35 triliun/tahun
- 2016-2020: Rp 50 triliun/tahun (peak)
- 2021-2024: Rp 40 triliun/tahun

Catatan: Angka ini adalah minimum (detected fraud). Actual corruption jauh lebih besar.

SEKTOR KORUPSI YANG PALING BANYAK

Distribusi Kasus (berdasarkan industri/sektor):

1. Public Procurement & Construction: 35%
   - Proyek infrastruktur (jalan, gedung, jembatan)
   - Tender korup, vendor kickback
   - Material substandard dengan harga premium
   - Mark-up konstruksi 30-100%
   - Contoh: Hambalang, proyek jalan, sekolah

2. Financial Services & Banking: 20%
   - Fraud dalam perbankan (BLBI, Century, Jiwasraya)
   - Loan manipulation
   - Fund embezzlement
   - Related party lending
   - Digital fraud / cyber banking

3. Natural Resources (Mining, Oil & Gas): 15%
   - Illegal mining
   - Permit & concession corruption
   - Underreporting production
   - Environmental violations disertai suap
   - Royalty under-payment

4. Government Operations & Administration: 15%
   - Budget misallocation
   - Salary fiktif / ghost employees
   - Procurement korup
   - Permission & licensing fraud
   - Policy manipulation untuk corporate benefit

5. Education & Healthcare: 10%
   - School construction fraud
   - Medical equipment overpricing
   - Pharmaceutical supply chain
   - Dana kesehatan masyarakat
   - Scholarship manipulation

6. Other Sectors: 5%
   - Customs & import duties
   - Land/property registration
   - Environmental permits
   - Utilities & energy

JENIS TINDAK PIDANA KORUPSI

Kategori Berdasarkan KUHP Pasal 2 & 3:

Pasal 2 (Memperkaya Diri):
- Abuse of official position untuk keuntungan pribadi
- Percent of cases: 45%
- Severity: Tinggi (banyak kerugian negara)
- Examples: Menteri puas pembangunan infrastruktur

Pasal 3 (Merugikan Keuangan Negara):
- Bertujuan merugikan keuangan/perekonomian negara
- Percent of cases: 40%
- Severity: Tinggi (direct impact to government)
- Examples: Suap untuk perizinan atau procurement

Pasal 5 (Pelanggaran Melebihi Kewenangan):
- Melebihi kewenangan dalam penggunaan kekuasaan
- Percent of cases: 10%
- Severity: Medium
- Examples: Approval tanpa otorisasi

Pasal 12 (Penyalahgunaan Kewenangan):
- Penyalahgunaan posisi untuk keuntungan pribadi/pihak lain
- Percent of cases: 5%
- Severity: Medium to High
- Examples: Tender hanya untuk vendor pilihan

DEMOGRAFI KORUPTOR

Profil Terpidana Korupsi:

Gender:
- Laki-laki: 85%
- Perempuan: 15%

Usia (saat pengadilan):
- 25-35 tahun: 5%
- 35-45 tahun: 25%
- 45-55 tahun: 40% (peak)
- 55-65 tahun: 25%
- 65+ tahun: 5%
- Average usia: 50 tahun

Pendidikan:
- Tidak lulus SMP: 2%
- SMA: 20%
- S1/Undergraduate: 50%
- S2/Master: 25%
- S3/PhD: 3%
- Average: Pendidikan menengah-atas

Posisi/Jabatan:
- Menteri/High executive: 5%
- Director/Kepala unit: 25%
- Middle manager: 35%
- Low-level bureaucrat: 25%
- Private sector (kontraktor, vendor): 10%

Kepegawaian:
- ASN (Civil servant): 50%
- BUMN/BUMD: 20%
- Private company: 20%
- Military/Police: 10%

Lama Menjabat (saat terungkap):
- < 2 tahun: 10%
- 2-5 tahun: 20%
- 5-10 tahun: 35%
- 10-15 tahun: 20%
- 15+ tahun: 15%

Latar Belakang Regional:
- Jakarta: 20% (pusat kekuasaan)
- Jawa Barat: 10%
- Jawa Timur: 10%
- Sumatera: 15%
- Kalimantan: 15%
- Sulawesi: 10%
- Maluku & Papua: 5%
- Bali & NTB: 5%

HUKUMAN & SENTENCING

Pola Hukuman Penjara (Per Kategori):

Korupsi Dana Besar (> Rp 10 miliar):
- Average sentence: 5-10 tahun
- Range: 3-20 tahun
- Aggravating factor: Menteri/top official = longer
- Mitigating factor: Guilty plea = shorter

Korupsi Dana Sedang (Rp 1-10 miliar):
- Average sentence: 2-5 tahun
- Range: 1-8 tahun
- Mostly: 3 tahun

Korupsi Dana Kecil (< Rp 1 miliar):
- Average sentence: 1-3 tahun
- Range: 6 bulan - 4 tahun
- Mostly: 1,5 tahun

Denda yang Dijatuhkan:
- Korelasi dengan kerugian negara
- Range: Rp 50 juta - Rp 5 miliar
- Average: Rp 500 juta - 1 miliar
- Rarely fully paid (sebagian besar dialihkan jadi aset seizure)

Vonis Maksimal (Pasal 2 KUHP):
- Seumur hidup (jarang digunakan)
- Contoh: Kasus Korupsi Dana Sangat Besar / Aggravated Circumstances
- Vonis hidup: Jiwasraya top executive (15 tahun sebagai alternative)

Tren Sentencing:
- 2004-2010: Ringan (avg 3 tahun)
- 2011-2015: Moderate (avg 4 tahun)
- 2016-2020: Berat (avg 5 tahun)
- 2021-2024: Moderate-Berat (avg 4,5 tahun) - more variation

RESTITUSI & ASSET RECOVERY

Uang Pengganti (Restitution):
- Jumlah Diperintahkan: Rp 250+ triliun (cumulative)
- Jumlah Terbayar: Rp 50-80 triliun (20-30% compliance)
- Aset Dirampas: Rp 300+ triliun
- Total Recovered: Rp 350-380 triliun (25% dari kerugian)

Proses Asset Recovery:
1. Identifikasi aset (selama investigasi & trial)
2. Penyitaan (sementara oleh investigators)
3. Permohonan perampasan ke pengadilan
4. Putusan hakim merampas aset
5. Eksekusi (penjualan aset) oleh Jaksa
6. Pembayaran ke kas negara

Jenis Aset Dirampas:
- Properti (rumah, ruko, toko): Rp 150 triliun
- Kendaraan (mobil, motor): Rp 50 triliun
- Deposito & tabungan: Rp 70 triliun
- Saham & efek: Rp 15 triliun
- Perhiasan & barang berharga: Rp 10 triliun
- Aset luar negeri: Rp 5-10 triliun (partial recovery)

Tantangan:
- Asset transfer sebelum arrest (hidden / dilindungi keluarga)
- Litigation untuk claim aset berlangsung lama
- Penjualan aset memakan waktu (tendering process)
- Beberapa aset tidak bisa dijual (historical value)

OUTCOME COMPARISON (Conviction vs Acquittal)

Conviction Rate Trend:

2004-2010: 70-75% conviction (baseline era)
2011-2015: 80-85% conviction (golden age of prosecution)
2016-2020: 75-80% conviction (stable)
2021-2024: 65-75% conviction (menurun)

Reason untuk Acquittal (25-35%):
- Insufficient evidence (weak prosecution case)
- Reasonable doubt pada motive atau mens rea
- Procedural defects (evidence illegally obtained)
- Statute of limitations expired
- Defense witnesses credible & compelling
- Lack of corroboration

Appeal Overturned:
- Percent: 10-15% dari convictions di-appeal
- Overturn rate: 20-30% (beberapa dikurangi hukuman)
- Kasasi (Supreme Court): Jarang overturn full conviction
- Peninjauan Kembali: Very rare, hanya exceptional cases

DATA INTERNASIONAL COMPARISON

Indonesia vs Neighboring Countries (2024 Estimate):

Corruption Perception Index (Transparency International):
- Indonesia: Rank 93 out of 180 (score 38/100)
- Malaysia: Rank 65 (score 49/100)
- Thailand: Rank 103 (score 36/100)
- Philippines: Rank 117 (score 34/100)
- Vietnam: Rank 114 (score 35/100)
- Singapura: Rank 5 (score 83/100) - reference point

Prosecution Rate (per 100.000 population):
- Indonesia: 0.6 prosecution per 100K (low)
- Malaysia: 1.2 prosecution per 100K
- Thailand: 0.8 prosecution per 100K
- Philippines: 0.4 prosecution per 100K
- Singapura: 5.0 prosecution per 100K (high)

Conviction Rate:
- Indonesia: 70-75%
- Malaysia: 85-90%
- Thailand: 60-65%
- Philippines: 50-60%
- Singapura: 90%+

Conclusion:
- Indonesia moderate performer (not best, not worst)
- Conviction rate acceptable
- Prosecution volume lower relative to actual corruption
- Restitution & asset recovery still weak`,
  },
};

const corruptionTrendData = [
  { year: 2015, cases: 125, conviction: 95, kerugian: 35 },
  { year: 2016, cases: 142, conviction: 110, kerugian: 45 },
  { year: 2017, cases: 158, conviction: 125, kerugian: 52 },
  { year: 2018, cases: 172, conviction: 138, kerugian: 60 },
  { year: 2019, cases: 189, conviction: 152, kerugian: 68 },
  { year: 2020, cases: 201, conviction: 165, kerugian: 75 },
  { year: 2021, cases: 195, conviction: 158, kerugian: 70 },
  { year: 2022, cases: 188, conviction: 150, kerugian: 68 },
  { year: 2023, cases: 180, conviction: 142, kerugian: 65 },
  { year: 2024, cases: 175, conviction: 138, kerugian: 62 },
];

const sectorData = [
  { name: "Procurement", value: 35 },
  { name: "Finance", value: 20 },
  { name: "Natural Resources", value: 15 },
  { name: "Government", value: 15 },
  { name: "Education/Health", value: 10 },
  { name: "Other", value: 5 },
];

const COLORS = ["#4f46e5", "#7c3aed", "#ec4899", "#f97316", "#eab308", "#10b981"];

export default function KorupsiPage() {
  const [activeSection, setActiveSection] = useState("kpk");
  const [searchTerm, setSearchTerm] = useState("");

  const sections = Object.entries(corruptionData).map(([key, value]) => ({
    id: key,
    title: value.title,
  }));

  const currentContent =
    corruptionData[activeSection as keyof typeof corruptionData];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-900/40 to-orange-900/30 border border-red-900/50 p-8 lg:p-12"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="text-red-500" size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
              Anti-Korupsi Indonesia
            </h1>
          </div>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            Database kasus korupsi terbesar, informasi KPK, panduan whistleblower,
            dan statistik pemberantasan korupsi di Indonesia.
          </p>
        </div>
      </motion.section>

      {/* Statistics Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          { icon: FileText, label: "Kasus Tertangani", value: "1.450+", color: "from-red-600 to-orange-600" },
          { icon: Users, label: "Terpidana", value: "850+", color: "from-orange-600 to-red-600" },
          { icon: TrendingDown, label: "Kerugian Terungkap", value: "Rp 1.4 K Triliun", color: "from-red-500 to-pink-600" },
          { icon: Award, label: "Aset Dirampas", value: "Rp 300+ Triliun", color: "from-pink-600 to-red-600" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-900/30 rounded-xl p-6 card-shadow"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} p-2.5 mb-4`}>
              <stat.icon size={24} className="text-white" />
            </div>
            <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Trend Chart */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-900/30 rounded-xl p-8 card-shadow">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingDown className="text-red-500" />
            Tren Penindakan Korupsi (2015-2024)
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={corruptionTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis stroke="#9CA3AF" dataKey="year" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #ef4444",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#F3F4F6" }}
                />
                <Line
                  type="monotone"
                  dataKey="conviction"
                  stroke="#ef4444"
                  name="Konviksi"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="cases"
                  stroke="#f97316"
                  name="Penuntutan"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sector Chart */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-900/30 rounded-xl p-8 card-shadow">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <BarChart3 className="text-red-500" />
            Distribusi Korupsi Per Sektor
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sectorData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sectorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #ef4444",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#F3F4F6" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="sticky top-8 bg-gray-800 border border-red-900/30 rounded-xl p-6 card-shadow">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen size={18} />
              Topik Anti-Korupsi
            </h3>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                    activeSection === section.id
                      ? "bg-red-600 text-white"
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
          <div className="bg-gray-800 border border-red-900/30 rounded-xl p-8 card-shadow">
            <h2 className="text-3xl font-bold text-white mb-6">
              {currentContent.title}
            </h2>

            {activeSection === "kasusBesar" && (
              <div className="mb-6 flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 text-gray-500" size={18} />
                  <input
                    type="text"
                    placeholder="Cari kasus..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-red-900/30 text-white rounded-lg focus:outline-none focus:border-red-600"
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

            <div className="mt-8 p-6 bg-red-900/20 border border-red-900/50 rounded-xl">
              <h3 className="font-bold text-red-400 flex items-center gap-2 mb-3">
                <Lock size={18} />
                Informasi Penting
              </h3>
              <p className="text-gray-300 text-sm">
                Jika Anda mengetahui adanya tindak pidana korupsi, segera laporkan ke KPK
                melalui hotline 021-3868778 (anonim) atau www.kpk.go.id/kanal-pelaporan.
                Perlindungan dan keamanan whistleblower dijamin oleh hukum.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
