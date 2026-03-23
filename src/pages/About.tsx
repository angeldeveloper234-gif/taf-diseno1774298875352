import { motion } from "framer-motion";
import { config } from "@/config";
import { Stats, Testimonials, CTA } from "@/components/sections";
import { SEO } from "@/components/ui/SEO";

export function About() {
    const { branding, dynamicContent } = config;
    const { specialization } = dynamicContent;

    return (
        <main className="pt-24 min-h-screen bg-[#0F1115]">
            <SEO 
                title="Sobre Nosotros" 
                description={`Conoce la trayectoria de ${branding.name}, líderes en ${branding.trade}.`}
                keywords={`${branding.name}, construcción, experiencia, proyectos`}
            />

            {/* Hero Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary text-xs tracking-[0.3em] uppercase block mb-6 font-display"
                    >
                        Nuestra Trayectoria
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-display font-medium text-white mb-8 tracking-tighter"
                    >
                        EDIFICANDO EL <span className="text-primary italic">FUTURO</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 font-sans leading-relaxed text-balance"
                    >
                        {specialization.ego} — {specialization.hook}
                    </motion.p>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-[4/5] bg-zinc-900 relative overflow-hidden group"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1541888946425-481d993a113b?q=80&w=800&auto=format&fit=crop" 
                                alt="Construcción"
                                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] to-transparent opacity-60" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-display font-medium text-white tracking-tight uppercase">
                                Calidad que trasciende <span className="text-primary">generaciones</span>
                            </h2>
                            <p className="text-zinc-400 font-sans leading-relaxed">
                                En {branding.name}, cada proyecto es un compromiso con la solidez y la innovación. Nos especializamos en {branding.trade}, transformando visiones en realidades estructurales que cumplen con los más altos estándares internacionales.
                            </p>
                            <p className="text-zinc-400 font-sans leading-relaxed">
                                Desde residencias de lujo hasta complejos industriales, nuestro equipo multidisciplinario garantiza precisión técnica y cumplimiento riguroso de tiempos y presupuestos.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div>
                                    <h4 className="text-primary font-display text-2xl mb-2">MISIÓN</h4>
                                    <p className="text-zinc-500 text-xs font-sans leading-relaxed uppercase tracking-widest">
                                        Entregar obras maestras funcionales y seguras.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-primary font-display text-2xl mb-2">VISIÓN</h4>
                                    <p className="text-zinc-500 text-xs font-sans leading-relaxed uppercase tracking-widest">
                                        Ser referentes de innovación en {dynamicContent.city}.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Stats />
            <Testimonials />
            <CTA />
        </main>
    );
}
