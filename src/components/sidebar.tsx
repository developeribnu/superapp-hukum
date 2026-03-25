"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Scale } from "lucide-react";
import { navigation } from "@/data/navigation";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed bottom-6 right-6 z-50 lg:hidden bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}

      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -400 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-screen w-72 bg-gray-900 border-r border-indigo-900/30 overflow-y-auto z-40 lg:static lg:translate-x-0 lg:z-0"
      >
        <div className="sticky top-0 bg-gray-900 border-b border-indigo-900/30 p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Scale size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">LegalHub</h1>
            <p className="text-xs text-gray-400">Hukum Indonesia</p>
          </div>
        </div>

        <nav className="p-6 space-y-8">
          {navigation.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                          isActive
                            ? "bg-indigo-600/20 text-indigo-400 border-l-2 border-indigo-600"
                            : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                        }`}
                      >
                        <Icon size={18} />
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800 bg-gray-900/95 backdrop-blur">
          <p className="text-xs text-gray-500 text-center">
            © 2026 LegalHub. Semua hak dilindungi.
          </p>
        </div>
      </motion.aside>

      <style jsx>{`
        @media (min-width: 1024px) {
          body {
            margin-left: 288px;
          }
        }
      `}</style>
    </>
  );
}
