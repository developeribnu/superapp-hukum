"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Scale, BookOpen, AlertCircle } from 'lucide-react';

const legalGuide = {
  kuhp: {
    title: "KUHP (Kitab Undang-Undang Hukum Pidana)",
    content: `SEJARAH & PERKEMBANGAN KUHP

KUHP Indonesia berlaku sejak 1 Januari 1886 dan merupakan warisan dari hukum kolonial Belanda.
Hingga saat ini, KUHP masih menjadi dasar hukum pidana Indonesia, meski ada upaya pembaruan
terhadap Kitab Undang-Undang Hukum Pidana (KUHP) Baru yang masih dalam proses legislasi.

STRUKTUR KUHP

BUKU I: KETENTUAN UMUM
Pasal 1-100: Asas-asas umum hukum pidana
- Asas legalitas: Tiada pidana tanpa undang-undang
- Asas pertanggungjawaban: Harus ada kesalahan
- Asas proporsionalitas: Pidana seimbang dengan perbuatan

BUKU II: KEJAHATAN (PIDANA)
Pasal 104-488: Berbagai jenis kejahatan
- Kejahatan terhadap keamanan negara (Pasal 104-140)
- Kejahatan terhadap presiden (Pasal 141-156)
- Kejahatan terhadap ketertiban umum (Pasal 157-171)
- Kejahatan terhadap pemalsuan (Pasal 263-284)
- Kejahatan terhadap kepercayaan publik (Pasal 362-367)
- Kejahatan terhadap harta benda (Pasal 362-467)
- Kejahatan terhadap kesusilaan (Pasal 468-485)

BUKU III: PELANGGARAN (KONTRAVENTI)
Pasal 489-569: Pelanggaran ringan

JENIS-JENIS PIDANA

Pidana Pokok:
- Pidana mati: Untuk kejahatan paling berat
- Pidana penjara: Seumur hidup atau sementara (1 hari - 15 tahun)
- Pidana kurungan: 1 hari - 1 tahun untuk pelanggaran
- Pidana denda: Denda uang untuk berbagai kejahatan

Pidana Tambahan:
- Pencabutan hak-hak tertentu
- Perampasan barang tertentu
- Publikasi putusan pengadilan

KEJAHATAN UMUM

Pencurian (Pasal 362):
- Diancam pidana penjara max 5 tahun atau denda max Rp 60 juta
- Pencurian dengan kekerasan: Pasal 365
  Diperberat jika menyebabkan luka atau kematian

Penggelapan (Pasal 372):
- Memanfaatkan barang yang dipercayakan
- Pidana max 4 tahun penjara

Penipuan (Pasal 378):
- Menipu orang dengan janji palsu
- Pidana max 4 tahun penjara

Pemalsuan Dokumen (Pasal 263):
- Membuat atau mengubah dokumen palsu
- Pidana max 6 tahun penjara
- Dokumen yang dipalsukan adalah bukti sah (false evidence)

KEJAHATAN KESUSILAAN

Pemerkosaan (Pasal 285):
- Ancaman pidana 12 tahun penjara (dapat ditambah)
- Diperberat jika korban di bawah umur
- Penyebarluasan video pemerkosaan: UU ITE Pasal 27(4)

Citra Kesusilaan (Pasal 282-283):
- Menampilkan citra/buku/materi mesum
- Pidana max 2.5 tahun penjara

TINDAK PIDANA TERTENTU

Korupsi:
- Diatur dalam UU No. 31 Tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi
- Ancaman 4-20 tahun penjara
- Penyelidikan oleh KPK (Komisi Pemberantasan Korupsi)

Narkoba:
- Diatur dalam UU No. 35 Tahun 2009 tentang Narkotika
- Ancaman pidana 4-20 tahun
- Untuk pengedar ancaman lebih berat
- Pabrik/produksi: Ancaman seumur hidup

Terorisme:
- Diatur dalam UU No. 15 Tahun 2003 tentang Penetapan Perpu No. 1 Tahun 2002 tentang Tindak Pidana Terorisme
- Ancaman pidana 4-seumur hidup`,
  },

  uuite: {
    title: "UU ITE (Undang-Undang Informasi dan Transaksi Elektronik)",
    content: `SEJARAH & LINGKUP UU ITE

UU ITE No. 11 Tahun 2008 (dengan amandemen UU No. 19 Tahun 2016) mengatur pemanfaatan,
perlindungan, dan pencegahan penyalahgunaan teknologi informasi dan transaksi elektronik.
Lingkup mencakup: dokumen elektronik, tanda tangan digital, sertifikat digital, dan e-commerce.

KONTEN TERLARANG

Pasal 27 UU ITE:
Ancaman hukum untuk konten dan perilaku online

Pasal 27(1): Konten Asusila
- Menyebarluaskan, mentransmisikan, atau membuat accessible konten mesum
- Pidana max 6 tahun penjara dan/atau denda Rp 1 miliar
- Contoh: Foto/video porno, konten esekutif

Pasal 27(3): Pencemaran Nama Baik
- Dengan sengaja dan tanpa hak mendistribusikan informasi yang merendahkan martabat
- Pidana max 4 tahun penjara dan/atau denda Rp 750 juta
- Berlaku untuk pernyataan palsu atau menyudutkan
- Tidak ada pidana jika informasi true dan kepentingan publik

Pasal 27(4): Spam/Penghinaan
- Menyebarluaskan informasi palsu untuk menimbulkan kerugian atau ancaman
- Pidana max 6 tahun penjara dan/atau denda Rp 1 miliar
- Contoh: Hoax, ujaran kebencian

PENYALAHGUNAAN TEKNOLOGI

Pasal 30: Akses Tanpa Izin
- Mengakses komputer/jaringan tanpa izin (hacking)
- Pidana max 6 tahun penjara dan/atau denda Rp 600 juta

Pasal 31: Intersepsi Tanpa Izin
- Menyadap, merekam, atau membaca data elektronik tanpa izin
- Pidana max 6 tahun penjara dan/atau denda Rp 600 juta
- Khusus untuk DPR: Ijin Presiden diperlukan

Pasal 32: Modifikasi Data
- Mengubah, menambah, mengurangi data tanpa izin
- Pidana max 8 tahun penjara dan/atau denda Rp 2 miliar

Pasal 33: Pemalsuan Digital
- Membuat dokumen elektronik palsu atau memodifikasinya
- Pidana max 5 tahun penjara dan/atau denda Rp 1 miliar

PENIPUAN ONLINE & CYBER CRIME

UU ITE Pasal 28(1): Konten Palsu
- Membuat/memodifikasi dokumen untuk dipercaya sebagai asli
- Pidana max 6 tahun penjara

Penipuan E-Commerce:
- Jual-beli online dengan itikad buruk
- Pidana berdasarkan KUHP (penipuan) + UU ITE
- Pembeli atau penjual bisa tersangka

Malware & Virus:
- Membuat/menyebarkan malware untuk merusak sistem
- Pasal 32 + Pasal 30 UU ITE
- Pidana hingga 14 tahun (gabungan)

HAK DIGITAL & PERLINDUNGAN PRIVASI

Pasal 26: Perlindungan Data Pribadi
- Setiap orang berhak kontrol penggunaan data pribadi
- Larangan mendistribusikan data pribadi tanpa consent
- Pidana max 6 tahun penjara dan/atau denda Rp 500 juta
- Pengecualian: Keharusan hukum, tugas publik, kepentingan legitimate

Hak Cipta Digital:
- Konten online (musik, film, game) dilindungi hak cipta
- Downloading illegal = pelanggaran HAKI
- Pidana max 7 tahun atau denda Rp 5 miliar

Platform Liability:
- Platform (media sosial, marketplace) bertanggung jawab pada konten user
- Harus remove konten ilegal dalam 24 jam
- Bertanggung jawab jika tidak comply

TRANSAKSI ELEKTRONIK LEGAL

E-Signature Sah:
- Tanda tangan digital memiliki kekuatan hukum yang sama dengan tanda tangan manual
- Harus memenuhi requirements dan disertifikasi

Kontrak Online:
- Kontrak online via email, chat, atau platform valid secara hukum
- Screenshot/bukti digital dapat digunakan di pengadilan

Bukti Digital:
- Email, chat logs, social media posts adalah bukti sah
- Harus original dan belum dimodifikasi
- Screenshot harus autentik dan verified

TANGGUNGJAWAB PENGGUNA

Pengguna Information:
- Bertanggung jawab untuk informasi yang dipublikasikan
- Walaupun dapat hide identity, tanggung jawab tetap ada
- IP tracking dapat membuktikan identitas

Content Removal:
- User dapat request removal konten pribadi dari platform
- Platform harus comply dalam waktu reasonable
- Jika tidak: User dapat sue platform

ASPEK HUKUM PENTING

Forum Litigasi (Pasal 47):
- Kasus UU ITE bisa ditangani di pengadilan online (e-court)
- Lebih cepat dan efisien

Bukti Digital Acceptable:
- Screenshoot, print-out data elektronik diterima pengadilan
- Harus dalam kondisi asli (tidak dimanipulasi)
- Expert analysis bisa diminta untuk verifikasi

Hukum Internasional:
- UU ITE selaras dengan berbagai konvensi internasional
- Budapest Convention on Cybercrime
- Cross-border cases bisa ditangani`,
  },

  prosesHukum: {
    title: "Proses Hukum & Sistem Peradilan",
    content: `TAHAP-TAHAP PROSES HUKUM PIDANA

1. PENYIDIKAN (Investigation)
Dilakukan oleh: Polisi, Jaksa Penuntut Umum (untuk tindak pidana tertentu), atau Badan lain (KPK, LPSK, dll)
Tujuan: Mengumpulkan bukti dan menemukan tersangka

Tanda Tangan Penyidikan:
- Laporan Polisi (LP) dibuat di kepolisian
- Berita Acara Pemeriksaan (BAP) untuk saksi/tersangka
- Surat Tanda Nomor (STN) untuk identifikasi kasus

Barang Bukti:
- Dikumpulkan dan didokumentasikan
- Disimpan dalam barang bukti room
- Inventaris lengkap untuk trial

Waktu Penyidikan:
- Normal: Max 2 bulan
- Perpanjangan pertama: Max 2 bulan
- Perpanjangan kedua: Max 1 bulan
- Total: Max 5 bulan

2. PENUNTUTAN (Prosecution)
Dilakukan oleh: Jaksa Penuntut Umum dari Kejaksaan
Tujuan: Mengajukan tuntutan ke pengadilan

Proses:
- Jaksa menerima berkas dari penyidik
- Review kelengkapan dan legalitas bukti
- Jika cukup (P-21): Ajukan ke pengadilan
- Jika kurang (P-16): Kembalikan ke penyidik untuk dilengkapi

Tuntutan Pidana:
- Jaksa mengajukan tuntutan berdasarkan pasal-pasal dilanggar
- Contoh: "Tuntut 5 tahun penjara dan denda Rp 100 juta"
- Tuntutan bersifat rekomendasi (hakim bebas menentukan)

3. PEMERIKSAAN PENGADILAN (Trial)
Dilakukan di: Pengadilan Negeri (first instance) atau Pengadilan Tinggi
Peserta: Hakim, Jaksa Penuntut Umum, Terdakwa, Pengacara (kurir), Saksi

Tahap Trial:
a) Pembacaan Tuntutan
   - Jaksa membaca tuntutan pidana
   - Terdakwa dan pengacara dengarkan

b) Pembuktian
   - Jaksa sajikan bukti dan saksi
   - Pengacara cross-examine saksi
   - Terdakwa dapat memberikan keterangan

c) Pleidoi (Closing Arguments)
   - Jaksa: Alasan tuntutan harus diterima
   - Pengacara: Alasan terdakwa harus dibebaskan/dihukum ringan

d) Musyawarah Hakim
   - Hakim bermusyawarah secara tertutup
   - Membuat putusan

e) Pengucapan Putusan
   - Pengadilan mengumumkan vonis
   - Tertulis dalam surat putusan

4. UPAYA HUKUM (Legal Remedies)
Setelah putusan dapat diajukan upaya hukum:

Banding:
- Diajukan ke Pengadilan Tinggi
- Max 14 hari setelah putusan
- Review ulang fakta dan hukum

Kasasi:
- Diajukan ke Mahkamah Agung
- Hanya review masalah hukum (bukan fakta)
- Max 30 hari setelah putusan banding

Peninjauan Kembali:
- Diajukan ke Mahkamah Agung
- Hanya jika ada alasan sangat urgent (bukti baru, visum atau autopsi salah)
- Sangat jarang diterima

HAK TERDAKWA

Hak Konstitusional:
- Presumption of Innocence: Dianggap tidak bersalah sampai terbukti
- Right to Counsel: Hak mendapatkan pengacara
- Fair Trial: Pengadilan yang adil dan terbuka
- Right to Appeal: Hak mengajukan upaya hukum

Hak Selama Penyidikan:
- Hak untuk diam (tidak usah jawab pertanyaan)
- Hak access counsel saat pemeriksaan
- Hak mendapat salinan dokumen
- Hak untuk tahu alasan penangkapan

Hak di Pengadilan:
- Hak hadiri persidangan
- Hak cross-examine saksi
- Hak mempresentasikan pertahanan
- Hak dapat penerjemah (jika tidak mengerti bahasa Indonesia)

SISTEM BUKTI

Jenis Bukti yang Diterima:
- Keterangan Saksi
- Keterangan Terdakwa (pengakuan atau penyangkalan)
- Surat/Dokumen (tertulis atau elektronik)
- Barang Bukti (fisik)
- Keterangan Ahli (expert witness)

Kekuatan Pembuktian:
- Minimal 2 (dua) alat bukti untuk buktikan bersalah
- Kombinasi dimungkinkan (misal: 1 saksi + bukti fisik)
- Pengakuan terdakwa saja tidak cukup

Hukum Pembuktian:
- Sys tem hukum Indonesia: Sistem pembuktian "positive conviction"
- Hakim harus mempunya keyakinan atas dasar bukti
- Jika ada keraguan: Dimenangkan terdakwa (in dubio pro reo)

LAMA PERSIDANGAN

Acara Cepat:
- Kasus sederhana: 1-2 bulan
- Ditangani di pengadilan level lower
- Misal: Pencurian ringan, kekerasan ringan

Acara Biasa:
- Kasus kompleks: 3-12 bulan atau lebih
- Banyak saksi dan bukti untuk diproses
- Misal: Korupsi, pembunuhan, narkoba

Acara Istimewa:
- Kasus tertentu dengan persidangan khusus
- Terrorism, korupsi (KPK), narkoba dapat percepatan
- Atau justru diperlambat untuk keadilan`,
  },
};

export default function HukumPage() {
  const [activeSection, setActiveSection] = useState("kuhp");

  const sections = Object.entries(legalGuide).map(([key, value]) => ({
    id: key,
    title: value.title,
  }));

  const currentContent = legalGuide[activeSection as keyof typeof legalGuide];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/40 to-blue-900/30 border border-indigo-900/50 p-8 lg:p-12"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="text-indigo-500" size={40} />
            <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
              Panduan Hukum Indonesia
            </h1>
          </div>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            Pelajari KUHP, UU ITE, dan sistem peradilan Indonesia secara mendalam.
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
          <div className="sticky top-8 bg-gray-800 border border-indigo-900/30 rounded-xl p-6 card-shadow">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen size={18} />
              Topik Hukum
            </h3>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                    activeSection === section.id
                      ? "bg-indigo-600 text-white"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {section.title.split(" ")[0]}
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
          <div className="bg-gray-800 border border-indigo-900/30 rounded-xl p-8 card-shadow">
            <h2 className="text-3xl font-bold text-white mb-6">
              {currentContent.title}
            </h2>

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

            <div className="mt-8 p-6 bg-indigo-900/20 border border-indigo-900/50 rounded-xl">
              <h3 className="font-bold text-indigo-400 flex items-center gap-2 mb-3">
                <AlertCircle size={18} />
                Disclaimer
              </h3>
              <p className="text-gray-300 text-sm">
                Informasi ini disediakan untuk edukasi umum saja. Untuk konsultasi hukum profesional
                dan spesifik, silakan hubungi lawyer atau advokat berlisensi.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
