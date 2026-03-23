import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, HardHat, Check } from "lucide-react";
import { config } from "@/config";

const schema = z.object({
    name: z.string().min(2, "Requerido"),
    phone: z.string().min(10, "Mínimo 10 dígitos"),
    service: z.string().min(1, "Selecciona un servicio"),
    message: z.string().min(5, "Describe brevemente el trabajo"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
    const { dynamicContent, demoUser, services } = config;
    const { city, localAnchor } = dynamicContent;

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        console.log("Lead capturado:", data);
        await new Promise(resolve => setTimeout(resolve, 1200));
        alert("¡Mensaje enviado! Te contactaremos hoy mismo para coordinar la visita.");
        reset();
    };

    return (
        <section id="contact" className="relative py-32 bg-[#0D0C0C] border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Info */}
                    <div>
                        <p className="text-[#F59E0B] font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                            Contacto Directo
                        </p>
                        <h2 className="text-5xl md:text-6xl font-display text-white mb-10 tracking-widest leading-tight">
                            COTIZACIÓN <span className="text-[#F59E0B]">SIN COSTO</span>
                        </h2>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-[#F59E0B] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-1 font-black">Ubicación</h4>
                                    <p className="text-zinc-400 text-sm">{localAnchor}, {city}</p>
                                    <p className="text-zinc-600 text-xs mt-1">También atendemos a domicilio</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-[#F59E0B] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-1 font-black">Teléfono / WhatsApp</h4>
                                    <p className="text-zinc-400 text-sm">{demoUser.whatsapp}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="w-5 h-5 text-[#F59E0B] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-xs mb-1 font-black">Horario de Atención</h4>
                                    <p className="text-zinc-400 text-sm">Lunes a Sábado: 8:00 – 19:00</p>
                                    <p className="text-zinc-600 text-xs mt-1">Urgencias con cita previa</p>
                                </div>
                            </div>
                        </div>

                        {/* Differentiators */}
                        <div className="border border-[#F59E0B]/20 p-6 bg-[#F59E0B]/5">
                            <p className="text-[#F59E0B] text-xs font-black uppercase tracking-widest mb-4">Por qué elegir nuestra constructora</p>
                            <ul className="space-y-3">
                                {[
                                    "Presupuesto gratis y sin compromiso",
                                    "Garantía escrita en todos los trabajos",
                                    "Materiales de calidad comprobada",
                                    `Más de ${dynamicContent.stats.projectsDone} proyectos completados`,
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-400 font-sans">
                                        <Check size={12} className="text-[#F59E0B] flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-1">
                                <input
                                    {...register("name")}
                                    className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-white focus:outline-none focus:border-[#F59E0B] transition-colors placeholder:text-zinc-700 text-sm tracking-widest font-sans"
                                    placeholder="NOMBRE COMPLETO"
                                />
                                {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                            </div>

                            <div className="space-y-1">
                                <input
                                    {...register("phone")}
                                    className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-white focus:outline-none focus:border-[#F59E0B] transition-colors placeholder:text-zinc-700 text-sm tracking-widest font-sans"
                                    placeholder="TELÉFONO / WHATSAPP"
                                />
                                {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                            </div>

                            <div className="space-y-1">
                                <select
                                    {...register("service")}
                                    className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-zinc-400 focus:outline-none focus:border-[#F59E0B] transition-colors text-sm tracking-widest font-sans appearance-none cursor-pointer"
                                >
                                    <option value="" className="bg-zinc-950">TIPO DE SERVICIO</option>
                                    {services.map((s) => (
                                        <option key={s.id} value={s.title} className="bg-zinc-950">{s.title}</option>
                                    ))}
                                    <option value="Otro" className="bg-zinc-950">Otro</option>
                                </select>
                                {errors.service && <span className="text-xs text-red-500">{errors.service.message}</span>}
                            </div>

                            <div className="space-y-1">
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-white focus:outline-none focus:border-[#F59E0B] transition-colors resize-none placeholder:text-zinc-700 text-sm tracking-widest font-sans"
                                    placeholder="DESCRIBE EL TRABAJO O PROBLEMA"
                                />
                                {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#F59E0B] text-white hover:brightness-110 rounded-none py-5 uppercase tracking-[0.2em] text-xs font-black transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(224,123,42,0.4)]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "ENVIANDO..." : "SOLICITAR PRESUPUESTO GRATIS"}
                            </Button>

                            <p className="text-center text-zinc-600 text-[10px] uppercase tracking-widest">
                                Sin spam. Sin compromiso. Respondemos hoy.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
