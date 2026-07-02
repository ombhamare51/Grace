import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Palette, Layers, Smartphone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function Home() {
  const features = [
    {
      title: "React 19 & Vite",
      description: "Lightning fast development with the latest React compiler and Vite build tools.",
      icon: <Zap className="w-12 h-12 text-indigo-500 mb-6" />
    },
    {
      title: "Tailwind CSS & shadcn/ui",
      description: "Beautifully crafted components that you can copy and paste into your apps.",
      icon: <Palette className="w-12 h-12 text-pink-500 mb-6" />
    },
    {
      title: "Framer Motion",
      description: "Production-ready animation and gesture library for React.",
      icon: <Layers className="w-12 h-12 text-purple-500 mb-6" />
    },
    {
      title: "Swiper",
      description: "The most modern mobile touch slider with hardware accelerated transitions.",
      icon: <Smartphone className="w-12 h-12 text-blue-500 mb-6" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Colorful Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%] w-[30%] h-[30%] rounded-full bg-purple-500/20 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6 inline-block shadow-sm">
            v1.0 is now live
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 tracking-tight leading-tight">
            Build Faster with <br className="hidden sm:block" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-2">
              Modern Tech
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-pink-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            The ultimate starter template featuring React, Tailwind CSS, shadcn/ui, Framer Motion, and more. Start your next project with a solid foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Feature Slider Section */}
      <section className="py-20 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 dark:to-indigo-950/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Everything you need</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We've pre-configured the most popular and powerful libraries in the React ecosystem.</p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10 bg-card/80 backdrop-blur-xl border border-border/50">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-64 md:h-80"
              >
                {features.map((feature, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-indigo-500/5 via-background to-pink-500/5">
                      {feature.icon}
                      <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground max-w-lg">{feature.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
