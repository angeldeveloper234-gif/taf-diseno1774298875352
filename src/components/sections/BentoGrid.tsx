import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const specialties = [
    {
        title: "Carpintería Residencial",
        description: "Cocinas y Clósets a medida.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop",
        className: "md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[600px]"
    },
    {
        title: "Remodelación Comercial",
        description: "Locales y Restaurantes.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop",
        className: "md:col-span-1 md:row-span-1 min-h-[300px]"
    },
    {
        title: "Recubrimientos",
        description: "Paneles 3D y Tapices.",
        image: "https://images.unsplash.com/photo-1623348737397-bb253965d53a?q=80&w=2000&auto=format&fit=crop",
        className: "md:col-span-1 md:row-span-1 min-h-[300px]"
    }
];

export function BentoGrid() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary tracking-[0.2em] text-sm md:text-md uppercase font-sans font-semibold mb-4"
                    >
                        Trabajo Que Dura
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-light text-foreground"
                    >
                        Especialidades
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-min">
                    {specialties.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`group relative overflow-hidden bg-surface rounded-none border border-white/5 cursor-pointer ${item.className}`}
                        >
                            {/* Base Dark Background */}
                            <div className="absolute inset-0 bg-surface z-10 transition-opacity duration-700 ease-in-out group-hover:opacity-0" />
                            
                            {/* Image Reveal */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 h-full p-8 md:p-12 flex flex-col justify-end">
                                <motion.div className="translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-2xl md:text-4xl font-display font-medium text-foreground">
                                            {item.title}
                                        </h4>
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-foreground/70 font-sans font-light text-lg">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
