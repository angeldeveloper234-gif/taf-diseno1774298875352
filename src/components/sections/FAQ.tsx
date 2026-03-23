import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "¿El presupuesto tiene algún costo?",
        a: "No, nuestras visitas y presupuestos son totalmente gratuitos y sin compromiso. Nos interesa conocer tu proyecto para darte la mejor solución.",
    },
    {
        q: "¿Ofrecen garantía por los trabajos?",
        a: "Sí, todos nuestros trabajos cuentan con garantía escrita. Dependiendo del tipo de servicio, la cobertura puede variar de 6 meses a 2 años.",
    },
    {
        q: "¿Los materiales están incluidos?",
        a: "Ofrecemos ambas modalidades: podemos proveer nosotros los materiales de primera calidad con los que trabajamos habitualmente, o podemos trabajar con los materiales que tú ya tengas comprados.",
    },
    {
        q: "¿Cuánto tiempo tardan en iniciar un proyecto?",
        a: "Normalmente podemos agendar el inicio de obra dentro de los 3 a 5 días hábiles posteriores a la aprobación del presupuesto.",
    },
    {
        q: "¿Realizan urgencias las 24 horas?",
        a: "Atendemos urgencias coordinadas en horario extendido, aunque te recomendamos agendar con anticipación para asegurar disponibilidad inmediata.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-32 bg-[#0D0C0C] text-white relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-20">
                    <p className="text-[#F59E0B] font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                        Despeja tus dudas
                    </p>
                    <h2 className="text-4xl md:text-6xl font-display tracking-widest uppercase">
                        Preguntas <span className="text-[#F59E0B]">Frecuentes</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/5 bg-[#0F1115] hover:border-[#F59E0B]/30 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-8 text-left transition-colors group"
                            >
                                <span className="text-lg font-sans font-bold tracking-wider uppercase group-hover:text-[#F59E0B] transition-colors pr-8">
                                    {faq.q}
                                </span>
                                <div className="text-[#F59E0B] bg-[#F59E0B]/10 p-2">
                                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 text-zinc-400 font-sans font-light leading-relaxed border-t border-white/5 mt-2">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
