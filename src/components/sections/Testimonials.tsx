import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "El mejor servicio y calidad, nos apoyaron con la cocina... de revista se ve. Cumplieron en tiempos.",
        author: "Gerardo A.",
        role: "Cliente Residencial"
    },
    {
        quote: "Gran servicio, cumplió con el tiempo y el diseño tal cuál se solicitó.",
        author: "Aza Hamed.",
        role: "Cliente Comercial"
    },
    {
        quote: "Calidad en sus presentaciones. Muy creativos, puntuales y excelente gusto estético.",
        author: "Isabel Vale.",
        role: "Interiorismo"
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-40 bg-background relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            <div className="absolute inset-0 z-0 bg-surface/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(188,163,127,0.05)_0%,transparent_50%)]" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <Quote className="w-16 h-16 text-primary/40" />
                </motion.div>

                <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-primary tracking-[0.3em] text-xs uppercase font-sans font-bold mb-16"
                >
                    Trabajos Que Hablan
                </motion.h2>

                <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <h3 className="font-display font-light text-[clamp(2rem,4vw,4rem)] text-foreground leading-[1.2] mb-12 max-w-4xl italic">
                                "{testimonials[currentIndex].quote}"
                            </h3>
                            
                            <div className="flex flex-col items-center gap-2">
                                <p className="font-sans font-bold text-white tracking-widest uppercase text-sm">
                                    {testimonials[currentIndex].author}
                                </p>
                                <p className="font-sans text-xs text-primary/80 uppercase tracking-widest">
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-4 mt-12">
                    {testimonials.map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-[2px] transition-all duration-500 ease-in-out ${i === currentIndex ? 'w-12 bg-primary' : 'w-4 bg-white/20'}`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
