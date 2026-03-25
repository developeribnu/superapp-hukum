"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Vote,
  AlertCircle,
  ArrowRight,
  Users,
  TrendingUp,
  FileText,
  Shield,
  BarChart3,
  Gavel,
} from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Link from "next/link";

const corruptionData = [
  { year: 2019, cases: 145, conviction: 98 },
  { year: 2020, cases: 158, conviction: 112 },
  { year: 2021, cases: 172, conviction: 125 },
  { year: 2022, cases: 189, conviction: 138 },
  { year: 2023, cases: 201, conviction: 152 },
  { year: 2024, cases: 218, conviction: 165 },
];

const categories = [
  {
    id: "hukum",
    title: "Hukum & Legal",
    description: "Panduan lengkap hukum Indonesia, KUHP, UU ITE, dan case law database",
    icon: Scale,
    color: "from-indigo-600 to-blue-600",
    href: "/hukum",
    stats: "500+ Artikel",
  },
  {
    id: "politik",
    title: "Politik Indonesia",
    description: "Informasi partai politik, pemilihan umum, dan pemerintahan",
    icon: Vote,
    color: "from-purple-600 to-pink-600",
    href: "/politik",
    stats: "50+ Parpol",
  },
  {
    id: "antikorupsi",
    title: "Anti-Korupsi",
    description: "Database kasus korupsi, data KPK, dan panduan whistleblower",
    icon: AlertCircle,
    color: "from-red-600 to-orange-600",
    href: "/korupsi",
    stats: "1K+ Kasus",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border border-indigo-900/50 p-8 lg:p-12"
      >
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Selamat Datang di LegalHub
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Platform komprehensif untuk hukum, politik, dan anti-korupsi di Indonesia.
            Informasi terpercaya dan terdepan untuk kesadaran hukum publik.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/hukum"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            >
              <Scale size={20} />
              Pelajari Hukum
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/korupsi"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all border border-gray-700"
            >
              <AlertCircle size={20} />
              Anti-Korupsi
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-0" />
      </motion.section>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          { icon: FileText, label: "Undang-Undang", value: "800+", color: "from-indigo-600 to-blue-600" },
          { icon: Gavel, label: "Putusan Pengadilan", value: "5K+", color: "from-blue-600 to-indigo-600" },
          { icon: AlertCircle, label: "Kasus Korupsi", value: "1.2K+", color: "from-indigo-500 to-purple-500" },
          { icon: Users, label: "Pengguna Terdaftar", value: "95K+", color: "from-purple-500 to-indigo-500" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-indigo-900/30 rounded-xl p-6 card-shadow"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} p-2.5 mb-4`}>
              <stat.icon size={24} className="text-white" />
            </div>
            <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Category Cards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">Jelajahi Kategori</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href={category.href}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-indigo-900/30 rounded-xl p-6 card-shadow hover:border-indigo-600/60 transition-all"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} p-4 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <p className="text-indigo-400 font-semibold text-sm">{category.stats}</p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.section>

      {/* Corruption Data */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 border border-indigo-900/30 rounded-xl p-8 card-shadow"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <BarChart3 className="text-indigo-500" />
              Tren Kasus Korupsi (2019-2024)
            </h2>
            <p className="text-gray-400 mt-1">Data kasus dan konviksi korupsi di Indonesia</p>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={corruptionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis stroke="#9CA3AF" dataKey="year" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #4f46e5",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#F3F4F6" }}
              />
              <Bar dataKey="cases" fill="#4f46e5" name="Total Kasus" />
              <Bar dataKey="conviction" fill="#7c3aed" name="Konviksi" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            icon: FileText,
            title: "KUHP & KUHAP",
            desc: "Undang-undang pidana dan acara pidana",
            href: "/hukum",
          },
          {
            icon: Shield,
            title: "UU ITE & Cybercrime",
            desc: "Hukum teknologi informasi dan keamanan siber",
            href: "/hukum",
          },
          {
            icon: TrendingUp,
            title: "Statistik KPK",
            desc: "Data penindakan korupsi terkini",
            href: "/korupsi",
          },
        ].map((quick, idx) => (
          <Link
            key={idx}
            href={quick.href}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-indigo-900/30 rounded-xl p-6 hover:border-indigo-600/60 transition-all card-shadow"
          >
            <quick.icon className="text-indigo-600 group-hover:text-indigo-400 transition-colors mb-3" size={32} />
            <h3 className="font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
              {quick.title}
            </h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              {quick.desc}
            </p>
            <div className="flex items-center gap-2 text-indigo-600 mt-4 opacity-0 group-hover:opacity-100 transition-all">
              <span>Pelajari</span>
              <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </motion.section>

      {/* Info Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-900/50 rounded-xl p-8 lg:p-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
          <AlertCircle className="text-yellow-500" />
          Disclaimer Penting
        </h2>
        <p className="text-gray-300 mb-4">
          Informasi di LegalHub disediakan untuk tujuan edukasi umum. Kami tidak memberikan
          konsultasi hukum profesional. Untuk masalah hukum spesifik, silakan konsultasikan
          dengan lawyer atau advokat berlisensi di Indonesia.
        </p>
        <p className="text-gray-400 text-sm">
          Semua data dan putusan pengadilan diambil dari sumber publik yang resmi dan tersertifikasi.
        </p>
      </motion.section>
    </div>
  );
}
