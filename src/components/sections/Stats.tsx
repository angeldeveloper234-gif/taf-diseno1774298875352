import { motion } from 'framer-motion';
import { config } from '@/config';

export function Stats() {
    const { stats } = config.dynamicContent;

    const data = [
        { label: "Proyectos Terminados", value: `${stats.projectsDone}`, suffix: "+" },
        { label: "Años de Trayectoria", value: `${stats.experienceYears}`, suffix: "" },
        { label: "Clientes Satisfechos", value: `${stats.happyClients}`, suffix: "+" },
        { label: "M² Construidos", value: `${stats.m2Built}`, suffix: "" },
    ];

    return (
        <section className="py-24 bg-[#0F1115] border-y border-white/5 relative overflow-hidden">
            {/* Subtle orange glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-[#F59E0B]/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className="text-center md:text-left border-l-4 border-[#F59E0B]/30 pl-8 hover:border-[#F59E0B] transition-colors duration-500"
                        >
                            <p className="text-zinc-500 font-sans text-xs tracking-[0.3em] uppercase mb-3 font-bold">
                                {item.label}
                            </p>
                            <div className="flex items-end gap-1">
                                <span className="text-6xl md:text-8xl font-display font-bold tabular-nums tracking-tight text-white">
                                    {item.value}
                                </span>
                                <span className="text-4xl md:text-5xl font-display font-bold text-[#F59E0B] mb-2">
                                    {item.suffix}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
