import { motion } from "framer-motion";
import { config } from "@/config";

export function Gallery() {
    const { gallery } = config;

    return (
        <section id="gallery" className="py-32 bg-[#0A0909] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <p className="text-[#F59E0B] font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                        Nuestro Portafolio
                    </p>
                    <h2 className="text-4xl md:text-6xl font-display text-white tracking-widest uppercase">
                        PROYECTOS <span className="text-[#F59E0B]">RECIENTES</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {gallery.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                                <span className="text-[#F59E0B] text-[10px] uppercase tracking-[0.3em] font-black mb-2">
                                    {item.category}
                                </span>
                                <h4 className="text-white font-display text-2xl tracking-widest uppercase">
                                    {item.title}
                                </h4>
                            </div>

                            {/* Corner detail */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20 group-hover:border-[#F59E0B] transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
