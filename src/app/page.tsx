/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Coins, CarFront, ArrowUpRight, User } from "lucide-react";
import { Inter } from 'next/font/google';
import Image from 'next/image';


const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function Home() {
  // Tipe data Variants dan easeOut standar dikembalikan agar lolos Build
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <main className={`min-h-screen relative selection:bg-black selection:text-white ${inter.className}`}>
      
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 md:py-6 true-glass border-b-0 rounded-b-3xl md:rounded-full md:mt-4 md:mx-12 md:top-2">
        <div className="flex items-center gap-3">
<Image 
  src="/logo.png" 
  alt="Dekingg Logo" 
  width={36} 
  height={36} 
  priority 
  className="object-contain" 
/>
          <span className="text-xl font-semibold tracking-tight text-[#1d1d1f]">{"dekingg"}<span className="text-gray-400">{".co"}</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
          <a href="#about" className="hover:text-black transition-colors">{"About"}</a>
          <a href="#ecosystem" className="hover:text-black transition-colors">{"Divisions"}</a>
          <a href="#founder" className="hover:text-black transition-colors">{"Founder"}</a>
        </div>

        <a href="https://moch-sugih-nugraha-v2.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium bg-[#1d1d1f] text-white px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300">
          {"View Architect"}
        </a>
      </nav>

      <section id="about" className="pt-48 pb-24 px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
          <motion.div variants={fadeUp} className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-8">
            {"The Parent Ecosystem"}
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-[7rem] font-medium leading-[0.95] tracking-tighter mb-10 text-[#1d1d1f]">
            {"Architecting"} <br />
            <span className="text-gray-400">{"the Future."}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-500 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
            {"Dekingg is the holding ecosystem driving innovation across enterprise software architecture, premium precious metals brokerage, and executive mobility."}
          </motion.p>
        </motion.div>
      </section>

      <section id="founder" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="true-glass rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{"Principal Architect"}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-6">{"Moch Sugih Nugraha"}</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
  {"Tech Manager & Principal Architect driving the Dekingg ecosystem. Backed by a track record of shipping 10+ high-performance technology projects and mentoring 40+ digital talents, he bridges the gap between sophisticated engineering and business scaling. Specializing in End-to-End Web Architecture—from robust server-side logic to high-performance frontends—and metric-driven UI/UX, he translates complex operations into elite, enterprise-grade digital assets."}
</p>
            <a href="https://moch-sugih-nugraha-v2.vercel.app/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1d1d1f] hover:text-gray-500 transition-colors">
              {"Explore Personal Portfolio"} 
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
<div className="w-full md:w-72 h-72 rounded-[2rem] overflow-hidden border border-white/50 shadow-2xl relative">
  <Image 
    src="/profile.png" 
    alt="Moch Sugih Nugraha" 
    fill 
    sizes="(max-width: 768px) 100vw, 288px"
    priority
    className="object-cover hover:scale-105 transition-transform duration-700" 
  />
</div>
        </motion.div>
      </section>

      <section id="ecosystem" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1d1d1f]">{"Ecosystem Divisions"}</h2>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.a href="#" variants={fadeUp} className="group relative flex flex-col justify-between p-10 rounded-[2rem] true-glass transition-all duration-500 cursor-pointer overflow-hidden">
             <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="text-[#1d1d1f] w-6 h-6" />
             </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                <Code2 className="text-[#1d1d1f] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] mb-3">{"TechLab"}</h3>
              <p className="text-gray-500 text-base leading-relaxed font-light">
                {"Enterprise web infrastructure and high-performance frontend architecture for modern businesses."}
              </p>
            </div>
          </motion.a>

          <motion.a href="#" variants={fadeUp} className="group relative flex flex-col justify-between p-10 rounded-[2rem] true-glass transition-all duration-500 cursor-pointer overflow-hidden">
             <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="text-[#1d1d1f] w-6 h-6" />
             </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                <Coins className="text-[#1d1d1f] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] mb-3">{"Gold"}</h3>
              <p className="text-gray-500 text-base leading-relaxed font-light">
                {"Premium precious metals brokerage powered by real-time algorithmic spread calculation."}
              </p>
            </div>
          </motion.a>

          <motion.a href="#" variants={fadeUp} className="group relative flex flex-col justify-between p-10 rounded-[2rem] true-glass transition-all duration-500 cursor-pointer overflow-hidden">
             <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="text-[#1d1d1f] w-6 h-6" />
             </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                <CarFront className="text-[#1d1d1f] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] mb-3">{"Auto"}</h3>
              <p className="text-gray-500 text-base leading-relaxed font-light">
                {"Executive mobility networks and integrated automotive asset management."}
              </p>
            </div>
          </motion.a>
        </motion.div>
      </section>

      <footer className="border-t border-black/5 py-10 mt-12 text-center text-xs font-medium tracking-widest uppercase text-gray-400">
        <p>{"© 2026 Dekingg Ecosystem. All rights reserved. | Sumedang, ID"}</p>
      </footer>
    </main>
  );
}