import { motion } from "framer-motion";
import { ArrowRight, HardHat, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function CTA() {
    const { branding } = config;

    return (
        <section className="py-32 bg-[#0F1115] text-white relative overflow-hidden border-t border-white/5">
            {/* Orange glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F59E0B]/8 blur-[100px] rounded-full pointer-events-none" />

            {/* Subtle diagonal lines */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(224,123,42,1) 10px, rgba(224,123,42,1) 11px)`
                }}
            />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <HardHat size={48} className="mx-auto mb-8 text-[#F59E0B] opacity-60" />

                    <h2 className="text-5xl md:text-8xl font-display mb-10 leading-[0.9] tracking-widest">
                        ¿LISTO PARA UN TRABAJO{" "}
                        <span className="text-[#F59E0B]">BIEN HECHO?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-zinc-400 mb-16 font-sans font-light leading-relaxed max-w-2xl mx-auto">
                        Contáctanos hoy y recibe tu presupuesto sin costo. Sin sorpresas, con garantía escrita en cada proyecto.
                    </p>

                    {/* Trust pillars */}
                    <div className="flex flex-wrap justify-center gap-8 mb-16">
                        {[
                                { icon: <ShieldCheck size={18} />, text: "Garantía Escrita" },
                                { icon: <Clock size={18} />, text: "Entrega en Tiempo" },
                                { icon: <HardHat size={18} />, text: "Materiales de Calidad" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-zinc-400 text-sm font-sans">
                                <span className="text-[#F59E0B]">{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="h-20 px-16 bg-[#F59E0B] text-white hover:brightness-110 rounded-none text-sm tracking-[0.3em] uppercase font-black transition-all duration-500 shadow-[0_20px_50px_-15px_rgba(224,123,42,0.5)]"
                            onClick={() => window.location.href = '#contact'}
                        >
                            Solicitar Presupuesto Gratis <ArrowRight className="ml-4 w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-20 px-12 rounded-none text-sm tracking-[0.3em] uppercase font-black"
                            onClick={() => window.location.href = `https://wa.me/${config.demoUser.whatsapp.replace('+', '')}`}
                        >
                            WhatsApp Directo
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
