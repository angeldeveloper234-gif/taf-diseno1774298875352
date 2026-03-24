import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Asesoría con Flor",
        description: "Reunión inicial con nuestra interiorista experta para entender tu visión."
    },
    {
        number: "02",
        title: "Selección de Diseño",
        description: "Elección de tapices, materiales y desarrollo del concepto arquitectónico."
    },
    {
        number: "03",
        title: "Producción",
        description: "Fabricación a medida con precisión milimétrica en nuestro taller."
    },
    {
        number: "04",
        title: "Instalación Impecable",
        description: "Montaje final cuidado al detalle, entregando espacios listos para habitar."
    }
];

export function Roadmap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section className="py-32 bg-surface text-foreground relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary tracking-[0.2em] text-sm md:text-md uppercase font-sans font-semibold mb-4"
                        >
                            Desmitificando el Servicio
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display font-light"
                        >
                            El Proceso
                        </motion.h3>
                    </div>
                </div>

                <div 
                    ref={containerRef}
                    className="relative w-full pb-20 mt-32"
                >
                    {/* Background Line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10 hidden md:block" />
                    
                    {/* Animated Progress Line */}
                    <motion.div 
                        className="absolute top-0 left-0 h-[2px] bg-primary hidden md:block origin-left"
                        style={{ scaleX }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-0 md:pt-12 relative">
                        {/* Mobile left line */}
                        <div className="absolute top-0 left-4 w-[2px] h-full bg-white/10 md:hidden block" />
                        <motion.div 
                            className="absolute top-0 left-4 w-[2px] bg-primary md:hidden block origin-top"
                            style={{ scaleY: scaleX, height: '100%' }}
                        />

                        {steps.map((step, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="relative flex flex-col pl-12 md:pl-0"
                            >
                                {/* Dots */}
                                <div className="absolute left-[-24px] top-2 md:top-[-54px] md:left-0 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 hidden md:block" />
                                <div className="absolute left-[11px] top-6 w-3 h-3 rounded-full bg-background border-2 border-primary z-10 md:hidden block" />
                                
                                <span className="text-primary/30 font-display text-7xl font-light mb-4 leading-none hidden md:block">
                                    {step.number}
                                </span>
                                <h4 className="text-2xl font-display text-white mb-4 flex items-center gap-4">
                                    <span className="text-primary/50 text-xl font-light md:hidden">{step.number}</span>
                                    {step.title}
                                </h4>
                                <p className="text-foreground/60 font-sans font-light text-base leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
