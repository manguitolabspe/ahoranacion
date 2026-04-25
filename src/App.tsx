/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  MapPin, 
  Mail, 
  Facebook, 
  Instagram, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Vote, 
  Building2, 
  ShieldCheck,
  Phone
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Propuestas', href: '#propuestas' },
    { name: 'Candidato', href: '#candidato' },
    { name: 'Participa', href: '#participa' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white shadow-lg py-3 border-slate-200' : 'bg-transparent py-5 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-brand-red text-white font-black text-xl sm:2xl px-2 sm:px-3 py-1 rounded shadow-sm">AN</div>
            <span className={`font-bold text-base sm:text-xl tracking-tight uppercase ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>
              Ahora Nación <span className="text-brand-red hidden xs:inline">Talara</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 text-xs font-black uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-brand-red ${isScrolled ? 'text-slate-600' : 'text-slate-800'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button className="bg-brand-red text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all active:scale-95 text-xs uppercase tracking-wider">
              Súmate al Cambio
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xl font-black text-slate-900 hover:text-brand-red uppercase tracking-tight"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-brand-red text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl">
                Súmate al Cambio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-0 min-h-screen w-full">
        
        {/* Content Side */}
        <div className="col-span-1 md:col-span-12 lg:col-span-7 p-8 pt-32 md:p-16 md:pt-40 lg:p-24 flex flex-col justify-center relative bg-white z-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-5 rounded-bl-full -z-10" />
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-brand-red font-black tracking-[0.3em] mb-6 uppercase text-sm border-l-4 border-brand-red pl-4">
              Candidato a la Alcaldía 2026-2031
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-8 uppercase tracking-tighter">
              ELMER BACA <br/>
              <span className="text-brand-red">MEDINA</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-xl font-medium">
              Por una Talara con progreso, seguridad y agua para todos. Juntos devolveremos la grandeza a nuestra provincia con gestión honesta y trabajo de campo.
            </p>
            
            {/* Quick Pillars from Design */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="border-l-4 border-brand-red pl-5">
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">AGUA 24/7</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-1">Gestión directa</div>
              </div>
              <div className="border-l-4 border-brand-red pl-5">
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">Seguridad</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-1">Talara Vigilada</div>
              </div>
              <div className="border-l-4 border-brand-red pl-5">
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">Empleo</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-1">Mano de Obra Local</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 active:scale-95 group text-sm">
                Nuestras Propuestas
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-brand-red border-2 border-brand-red px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-red-50 transition-all active:scale-95 text-sm">
                Conoce al Dr. Elmer
              </button>
            </div>
          </motion.div>
        </div>

        {/* Visual Side */}
        <div className="col-span-1 md:col-span-12 lg:col-span-5 relative bg-brand-red overflow-hidden flex items-center justify-center pt-24 lg:pt-0">
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-black/20" />
          
          <img 
            src="/hero-candidate.jpg" 
            className="h-full w-full object-cover opacity-90 mix-blend-luminosity"
            alt="Dr. Elmer Baca Medina"
            referrerPolicy="no-referrer"
          />

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/30 inline-block w-full max-w-[280px] sm:max-w-sm"
            >
              <div className="text-5xl sm:text-7xl font-black text-white leading-none tracking-tighter">VOTA</div>
              <div className="flex justify-center mt-4 sm:mt-6">
                <div className="bg-white w-20 h-20 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-brand-red text-4xl sm:text-6xl font-black italic">AN</span>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-white font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-sm">Ahora Nación</div>
            </motion.div>
          </div>
          
          {/* Background Decals */}
          <div className="absolute top-10 right-10 text-white/10 font-black text-9xl hidden lg:block select-none pointer-events-none">2026</div>
          <div className="absolute bottom-10 -left-10 text-white/10 font-black text-9xl hidden lg:block rotate-90 select-none pointer-events-none">2031</div>
        </div>
      </div>
    </section>
  );
};

const Proposals = () => {
  const proposals = [
    {
      title: "Agua 24/7",
      desc: "Gestión directa e inmediata para garantizar el acceso al agua potable las 24 horas del día en toda la provincia.",
      icon: <Building2 className="text-brand-red" size={32} />
    },
    {
      title: "Seguridad Ciudadana",
      desc: "Implementación del programa 'Talara Vigilada' con cámaras de alta resolución y patrullaje integrado.",
      icon: <ShieldCheck className="text-brand-red" size={32} />
    },
    {
      title: "Salud Integral",
      desc: "Fortalecimiento de los centros de salud municipales con especialistas y medicinas siempre disponibles.",
      icon: <CheckCircle2 className="text-brand-red" size={32} />
    },
    {
      title: "Empleo Local",
      desc: "Prioridad absoluta para la mano de obra talareña en las obras y servicios municipales.",
      icon: <Users className="text-brand-red" size={32} />
    }
  ];

  return (
    <section id="propuestas" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="text-brand-red font-black uppercase tracking-[0.2em] text-xs">Plan de Gobierno</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mt-4 tracking-tight uppercase">Ejes de Gestión</h2>
          <div className="mt-6 w-24 h-2 bg-brand-red mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proposals.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group transition-all"
            >
              <div className="bg-slate-50 group-hover:bg-brand-red/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-5 tracking-tight uppercase">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all shadow-xl active:scale-95 text-sm">
                Descargar Plan Técnico Completo
            </button>
        </div>
      </div>
    </section>
  );
};

const Candidate = () => {
  return (
    <section id="candidato" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-6 bg-brand-red/5 rounded-3xl -rotate-2" />
              <div className="absolute top-0 left-0 bg-brand-red text-white font-black px-6 py-3 rounded-br-2xl z-20 uppercase tracking-widest">El Candidato</div>
              <img 
                src="/bio-candidate.jpg" 
                alt="Dr. Elmer Baca Medina hablando con la gente"
                className="relative rounded-3xl shadow-2xl z-10 w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700 aspect-square md:h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-brand-red font-black uppercase tracking-[0.2em] text-xs">Experiencia y Compromiso</span>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mt-4 mb-8 tracking-tighter uppercase leading-none">Dr. Elmer <br/> Baca Medina</h3>
            <div className="h-1.5 w-32 bg-brand-red mb-10" />
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
              "Ser abogado es más que una profesión, es un compromiso constante con la verdad, la equidad y el bienestar de los talareños."
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Profesional con más de 15 años de trayectoria defendiendo los derechos ciudadanos. Su visión para Talara se basa en una gestión transparente, técnica y sobre todo humana, escuchando a cada vecino en su propio sector.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                "Liderazgo Humano",
                "Gestión Transparente",
                "Vecino de Talara",
                "Experto en Derecho"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center space-x-4 bg-slate-50 p-4 rounded-xl border-l-4 border-brand-red">
                  <div className="bg-brand-red/10 p-2 rounded-lg text-brand-red">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-slate-900 font-black text-sm uppercase tracking-tight">{point}</span>
                </div>
              ))}
            </div>
            <button className="w-full sm:w-auto bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl text-sm">
                Ver Trayectoria Profesional
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Participate = () => {
  return (
    <section id="participa" className="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none text-9xl font-black flex items-center justify-center select-none whitespace-nowrap">
        AHORA NACIÓN AHORA NACIÓN AHORA NACIÓN
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <div className="bg-brand-red w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl rotate-3">
            <Vote size={48} className="text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Talara necesita <br/> <span className="text-brand-red">un cambio ahora</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            No permitiremos más indiferencia. Únete a nuestro equipo de defensores del voto y guardianes de la democracia en cada sector de Talara.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-brand-red text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-red-900/50 text-sm active:scale-95">
              Postular como Personero
            </button>
            <button className="bg-white text-slate-900 px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-slate-100 transition-all shadow-2xl text-sm active:scale-95">
              Ser Coordinador Local
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contacto" className="bg-white border-t border-slate-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-brand-red text-white font-black text-2xl px-3 py-1 rounded">AN</div>
              <span className="text-slate-900 font-bold text-xl tracking-tight uppercase">Ahora Nación</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8 font-medium">
              Gestión honesta, técnica y humana para devolverle la grandeza a Talara. El futuro de nuestra provincia se construye hoy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 hover:bg-brand-red hover:text-white transition-all shadow-sm">
                <Facebook size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 hover:bg-brand-red hover:text-white transition-all shadow-sm">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-8 border-l-4 border-brand-red pl-4">Campaña</h4>
            <ul className="space-y-4 font-bold text-slate-600 uppercase text-xs tracking-widest">
              <li><a href="#inicio" className="hover:text-brand-red transition-colors">Inicio</a></li>
              <li><a href="#propuestas" className="hover:text-brand-red transition-colors">Ejes de Gestión</a></li>
              <li><a href="#candidato" className="hover:text-brand-red transition-colors">Candidato</a></li>
              <li><a href="#participa" className="hover:text-brand-red transition-colors">Participación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-8 border-l-4 border-brand-red pl-4">Central de Campaña</h4>
            <ul className="space-y-6 text-slate-600 text-sm font-medium">
              <li className="flex items-start gap-4">
                <MapPin className="text-brand-red shrink-0" size={24} />
                <span>AA.HH MARIO AGUIRRE K-3 <br/> Talara, Piura - Perú</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-brand-red shrink-0" size={24} />
                <a href="mailto:dr.elmerbacamedina@gmail.com" className="hover:text-brand-red transition-colors break-words">
                  dr.elmerbacamedina@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-brand-red shrink-0" size={24} />
                <span>+51 987 654 321</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-sm mb-8 border-l-4 border-brand-red pl-4">Boletín</h4>
            <p className="text-slate-500 mb-6 text-sm font-medium">Recibe las últimas noticias y eventos de la campaña en tu correo.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:border-brand-red focus:bg-white transition-all font-medium"
              />
              <button className="w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] py-4 rounded-xl transition-all shadow-lg active:scale-95 text-xs">
                Suscribirme ahora
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Ahora Nación Talara. #TalaraRenace</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600">Privacidad</a>
            <a href="#" className="hover:text-slate-600">Transparencia</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Proposals />
        <Candidate />
        <Participate />
        
        {/* News/Agenda Ticker */}
        <div className="bg-gray-100 py-4 overflow-hidden border-y border-gray-200">
           <div className="flex whitespace-nowrap animate-pulse items-center justify-center space-x-12">
             <span className="text-red-700 font-bold uppercase text-xs tracking-widest">● Agenda Talara 2026</span>
             <span className="text-gray-600 font-bold uppercase text-xs tracking-widest">● Elmer Baca Medina</span>
             <span className="text-red-700 font-bold uppercase text-xs tracking-widest">● Ahora Nación</span>
             <span className="text-gray-600 font-bold uppercase text-xs tracking-widest hidden md:inline">● Un gobierno con trabajo de campo</span>
             <span className="text-red-700 font-bold uppercase text-xs tracking-widest hidden md:inline">● Por el desarrollo de Talara</span>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
