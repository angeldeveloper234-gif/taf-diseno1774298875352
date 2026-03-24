import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function Contact() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        type: "",
        message: ""
    });

    const nextStep = () => {
        if (step === 1 && (!formData.name || !formData.contact)) return;
        if (step === 2 && !formData.type) return;
        setStep(s => s + 1);
    };

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(4); // success
    };

    return (
        <section id="contact" className="py-32 bg-background relative overflow-hidden flex items-center min-h-[80vh]">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary tracking-[0.2em] text-xs uppercase font-sans font-bold mb-6"
                    >
                        Cotización Sin Costo
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-light text-foreground"
                    >
                        Respuestas rápidas, presupuestos claros.<br />
                        <span className="italic text-primary">Cuéntanos de tu proyecto.</span>
                    </motion.h3>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Progress */}
                    <div className="flex justify-between items-center mb-12 relative">
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
                        <motion.div 
                            className="absolute top-1/2 left-0 h-[1px] bg-primary -translate-y-1/2 z-0 origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: step === 1 ? 0.33 : step === 2 ? 0.66 : 1 }}
                            transition={{ duration: 0.8 }}
                        />
                        {[1, 2, 3].map((num) => (
                            <div 
                                key={num}
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs relative z-10 transition-all duration-500 ${step >= num ? 'bg-primary text-black font-bold' : 'bg-background border border-white/20 text-white/50'}`}
                            >
                                {step > num ? <Check size={14} /> : num}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={submitForm} className="relative min-h-[300px]">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div 
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex flex-col gap-8"
                                >
                                    <div className="relative group">
                                        <input 
                                            type="text" 
                                            placeholder="Tu Nombre o Empresa *"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full bg-transparent border-b border-white/20 pb-4 text-xl md:text-2xl font-display font-light text-white outline-none focus:border-primary transition-colors duration-500 placeholder:text-white/30"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <input 
                                            type="text" 
                                            placeholder="Teléfono o Email *"
                                            required
                                            value={formData.contact}
                                            onChange={(e) => setFormData({...formData, contact: e.target.value})}
                                            className="w-full bg-transparent border-b border-white/20 pb-4 text-xl md:text-2xl font-display font-light text-white outline-none focus:border-primary transition-colors duration-500 placeholder:text-white/30"
                                        />
                                    </div>
                                    
                                    <div className="flex justify-end mt-4">
                                        <button 
                                            type="button" 
                                            onClick={nextStep}
                                            disabled={!formData.name || !formData.contact}
                                            className="flex items-center gap-4 text-primary font-sans uppercase tracking-[0.2em] text-sm hover:opacity-70 transition-opacity disabled:opacity-50"
                                        >
                                            Siguiente <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                            
                            {step === 2 && (
                                <motion.div 
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex flex-col gap-6"
                                >
                                    <h4 className="font-display text-2xl mb-4">¿Qué tipo de proyecto tienes en mente?</h4>
                                    {['Carpintería Residencial', 'Remodelación Comercial', 'Recubrimientos / Otro'].map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => {
                                                setFormData({...formData, type});
                                                setStep(3);
                                            }}
                                            className={`text-left text-xl font-display font-light pb-4 border-b transition-all duration-300 ${formData.type === type ? 'border-primary text-primary' : 'border-white/20 text-white hover:border-white/50 hover:pl-2'}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div 
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex flex-col gap-8"
                                >
                                    <div className="relative">
                                        <textarea 
                                            placeholder="Detalles del proyecto (Opcional)"
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            className="w-full bg-transparent border-b border-white/20 pb-4 text-xl font-display font-light text-white outline-none focus:border-primary transition-colors duration-500 placeholder:text-white/30 resize-none"
                                        />
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        <button 
                                            type="button" 
                                            onClick={() => setStep(2)}
                                            className="text-white/50 font-sans uppercase tracking-[0.2em] text-sm hover:text-white"
                                        >
                                            Volver
                                        </button>
                                        <button 
                                            type="submit" 
                                            className="group relative flex items-center gap-4 px-8 py-4 bg-primary text-black rounded-full hover:bg-white transition-all duration-500"
                                        >
                                            <span className="font-sans text-xs tracking-[0.2em] uppercase font-bold">
                                                Enviar Solicitud
                                            </span>
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div 
                                    key="step4"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-12 gap-6"
                                >
                                    <div className="w-20 h-20 rounded-full border border-primary flex items-center justify-center text-primary">
                                        <Check size={32} />
                                    </div>
                                    <h4 className="font-display text-3xl font-light text-white">Solicitud Recibida</h4>
                                    <p className="font-sans text-white/60 font-light max-w-sm">
                                        Nos pondremos en contacto contigo lo antes posible para comenzar tu proyecto.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </section>
    );
}
