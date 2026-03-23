import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Products() {
    const { products } = config;

    return (
        <section id="products" className="py-32 bg-[#0D0C0C] relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <p className="text-[#F59E0B] font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                            Suministros y Materiales
                        </p>
                        <h2 className="text-4xl md:text-6xl font-display text-white tracking-widest uppercase mb-0">
                            PRODUCTOS <span className="text-[#F59E0B]">DISPONIBLES</span>
                        </h2>
                    </div>
                    <Button variant="outline" className="border-white/10 text-white rounded-none tracking-widest text-[10px] h-12">
                        VER TODO EL CATÁLOGO <ArrowRight className="ml-2 w-4 h-4 text-[#F59E0B]" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#0F1115] border border-white/5 flex flex-col group hover:border-[#F59E0B]/30 transition-all duration-500"
                        >
                            <div className="aspect-square overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6 bg-[#F59E0B] text-white font-display text-xl px-4 py-1 tracking-widest">
                                    {product.price}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h4 className="text-white font-display text-2xl tracking-widest uppercase mb-3">
                                    {product.name}
                                </h4>
                                <p className="text-zinc-500 font-sans text-sm font-light mb-8 flex-1">
                                    {product.desc}
                                </p>
                                
                                <Button 
                                    className="w-full bg-white/5 hover:bg-[#F59E0B] text-white hover:text-black transition-all duration-500 rounded-none h-14 tracking-[0.2em] font-black text-[10px] uppercase"
                                    onClick={() => window.location.href = `https://wa.me/${config.demoUser.whatsapp.replace('+', '')}?text=Hola, me interesa el servicio: ${product.name}`}
                                >
                                    Consultar por WhatsApp <ShoppingCart className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
