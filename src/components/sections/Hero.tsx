import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function Counter({ from, to }: { from: number; to: number }) {
    const [count, setCount] = useState(from);

    useEffect(() => {
        let start = from;
        const end = to;
        if (start === end) return;
        const duration = 1500; // 1.5 seconds
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        let frame = 0;
        
        const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Easing function: easeOutExpo
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(start + (end - start) * easeOutExpo));
            
            if (frame === totalFrames) {
                setCount(end);
                clearInterval(timer);
            }
        }, frameRate);
        
        return () => clearInterval(timer);
    }, [from, to]);

    return <span>{count}</span>;
}

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-end pb-12 pt-32 px-6 md:px-12 overflow-hidden bg-background">
            {/* Background Video/Image */}
            <motion.div 
                className="absolute inset-0 z-0 origin-center"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
                    alt="Cocina de diseño terminada"
                    className="w-full h-full object-cover opacity-50 filter grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-background/30" />
            </motion.div>

            <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col items-start gap-12 mt-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50, skewY: 1 }}
                    animate={{ opacity: 1, y: 0, skewY: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                    <h1 className="font-display font-light text-[clamp(3.5rem,8vw,9rem)] leading-[0.9] text-foreground max-w-6xl">
                        Interiorismo y Carpintería de <i className="text-primary italic pr-4">Revista.</i>
                    </h1>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-end gap-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        className="font-sans text-foreground/70 text-[clamp(1rem,1.5vw,1.25rem)] max-w-xl font-light leading-relaxed"
                    >
                        Materializamos tu visión en Monterrey. Ejecución puntual y calidad estética para espacios comerciales y residenciales.
                    </motion.p>
                    
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="group relative flex items-center gap-6 pl-8 pr-2 py-2 rounded-full bg-surface/40 backdrop-blur-xl border border-white/10 hover:bg-surface/60 hover:border-white/20 transition-all duration-500 overflow-hidden"
                    >
                        <span className="relative z-10 font-sans text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-foreground">
                            Agendar Asesoría
                        </span>
                        <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-95 transition-transform duration-500">
                            <ArrowRight className="w-5 h-5 text-background" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.a>
                </div>

                {/* Grid of Metrics */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 pt-10 border-t border-white/5"
                >
                    {[
                        { val: "120", suffix: "+", label: "Proyectos Entregados" },
                        { val: "8", suffix: "", label: "Años de Experiencia" },
                        { val: "95", suffix: "%", label: "Clientes Satisfechos" },
                        { val: "5000", suffix: "+", label: "Horas de Diseño" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-start gap-4">
                            <div className="flex items-baseline font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-primary font-light">
                                <Counter from={0} to={parseInt(stat.val)} />
                                <span className="ml-1 opacity-80">{stat.suffix}</span>
                            </div>
                            <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/50">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
