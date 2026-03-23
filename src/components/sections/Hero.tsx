import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

interface HeroProps {
    dynamic_city?: string;
    project_counter?: number;
    hook_headline?: string;
}

export function Hero({ dynamic_city, project_counter, hook_headline }: HeroProps) {
    const { dynamicContent, branding } = config;
    const { specialization, city: configCity, localAnchor, stats } = dynamicContent;

    const displayCity = dynamic_city || configCity;
    const displayProjects = project_counter || stats.projectsDone;
    const displayHeadline = hook_headline || specialization.hook;

    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0F1115]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1556912177-859416b84034?q=80&w=2000&auto=format&fit=crop"
                    alt="Interiorismo y Remodelación"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115] via-[#0F1115]/95 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent" />
                {/* Diagonal texture overlay */}
                <div className="texture-overlay" />
            </div>

            {/* Accent glow */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Trade Badge */}
                    <div className="flex items-center gap-4 mb-8 overflow-hidden">
                        <div className="h-[1px] w-8 bg-primary"></div>
                        <p className="text-primary font-sans text-xs tracking-[0.4em] uppercase font-black active-badge whitespace-nowrap">
                            {branding.slogan}
                        </p>
                    </div>

                    {/* Main Headline */}
                    <div className="font-display leading-none mb-10">
                        <h1 className="flex flex-col gap-0">
                            <span className="block text-zinc-500 text-xl md:text-3xl tracking-[0.15em] uppercase mb-2 font-sans font-light">
                                {specialization.ego}
                            </span>
                            <span className="block text-white text-[56px] md:text-[110px] tracking-widest uppercase leading-[0.9]">
                                {displayHeadline}
                            </span>
                            <span className="block text-primary text-[56px] md:text-[110px] tracking-widest uppercase leading-[0.9] md:ml-16">
                                {specialization.title}
                            </span>
                        </h1>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="max-w-xl mb-12"
                >
                    <p className="text-lg md:text-xl text-zinc-400 font-sans font-light leading-relaxed border-l-4 border-primary/50 pl-6">
                        Expertos en Interiorismo y Remodelación en <span className="text-white font-medium">{displayCity}</span>.
                        Transformamos {specialization.pain} en realidades tangibles.
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-zinc-500 font-sans text-sm">
                        <MapPin size={14} className="text-primary flex-shrink-0" />
                        <span>{localAnchor}, {displayCity}</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                >
                    <div className="flex flex-col gap-3">
                        <Button
                            size="lg"
                            className="bg-primary text-black hover:bg-white rounded-none px-10 py-7 text-sm tracking-widest uppercase font-black shadow-[0_20px_40px_-15px_rgba(229,211,179,0.4)] group transition-all duration-500"
                            onClick={() => window.location.href = '#contact'}
                        >
                            COTIZA TU PROYECTO
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Button>

                        <div className="flex items-center gap-2 text-[10px] text-primary uppercase tracking-widest font-black ml-1">
                            <ShieldCheck size={12} />
                            <span>Garantía de Satisfacción</span>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 flex flex-wrap gap-10"
                >
                    {[
                        { val: `${displayProjects}+`, label: "Proyectos Terminados" },
                        { val: `${stats.experienceYears}`, label: "Años de Experiencia" },
                        { val: `${stats.happyClients}+`, label: "Clientes Satisfechos" },
                    ].map((s, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-4xl md:text-5xl font-display text-white tracking-tight">{s.val}</span>
                            <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold max-w-[80px] leading-tight">{s.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
