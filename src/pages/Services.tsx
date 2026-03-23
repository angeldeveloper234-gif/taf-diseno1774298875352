import { motion } from "framer-motion";
import { config } from "@/config";
import { Features, FAQ, CTA } from "@/components/sections";
import { SEO } from "@/components/ui/SEO";

export function Services() {
    const { branding, services } = config;

    return (
        <main className="pt-24 min-h-screen bg-[#0F1115]">
            <SEO 
                title="Servicios Especializados" 
                description={`Descubre las soluciones de construcción y arquitectura de ${branding.name}.`}
                keywords={`${branding.name}, arquitectura, edificación, remodelaciones, servicios`}
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
                        Nuestras Capacidades
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-display font-medium text-white mb-8 tracking-tighter"
                    >
                        Soluciones DE <span className="text-primary italic">INGENIERÍA</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 font-sans leading-relaxed text-balance"
                    >
                        Ofrecemos un espectro integral de servicios de edificación, desde el diseño conceptual hasta la ejecución técnica final.
                    </motion.p>
                </div>
            </section>

            {/* List Section */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-10 border border-white/5 bg-zinc-900 group relative overflow-hidden flex flex-col justify-between h-[350px]"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 -mr-16 -mt-16 blur-2xl group-hover:bg-primary/30 transition-all rounded-full" />
                                <div>
                                    <div className="text-4xl mb-8 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                                    <h2 className="text-2xl font-display font-medium text-white mb-4 tracking-tight uppercase">
                                        {service.title}
                                    </h2>
                                    <p className="text-zinc-500 text-[10px] font-sans mb-6 tracking-widest uppercase leading-loose italic border-l-2 border-primary pl-4">
                                        {service.problem}
                                    </p>
                                </div>
                                <p className="text-zinc-400 text-sm font-sans leading-relaxed">
                                    {service.solve}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Features />
            <FAQ />
            <CTA />
        </main>
    );
}
