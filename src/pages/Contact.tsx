import { motion } from "framer-motion";
import { config } from "@/config";
import { Contact as SimpleContact, FAQ } from "@/components/sections";
import { SEO } from "@/components/ui/SEO";

export function Contact() {
    const { branding } = config;

    return (
        <main className="pt-24 min-h-screen bg-[#0F1115]">
            <SEO 
                title="Presupuesto y Contacto" 
                description={`Solicita tu cotización gratuita en ${branding.name}. Proyectos de ${branding.trade} en ${config.dynamicContent.city}.`}
                keywords={`${branding.name}, presupuesto, contactar, oficina, construcción`}
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
                        Inicia Tu Proyecto
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-display font-medium text-white mb-8 tracking-tighter"
                    >
                        AGENDA TU <span className="text-primary italic">VISITA</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 font-sans leading-relaxed text-balance"
                    >
                        Nuestro equipo técnico está listo para analizar tus planos o realizar un levantamiento en sitio para tu nueva edificación o remodelación.
                    </motion.p>
                </div>
            </section>

            <SimpleContact />
            <FAQ />
        </main>
    );
}
