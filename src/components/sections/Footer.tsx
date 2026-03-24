import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background pt-32 pb-12 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
                    <div className="max-w-md">
                        <h5 className="text-primary tracking-[0.2em] font-sans text-xs font-bold uppercase mb-6">
                            Contacto Directo
                        </h5>
                        <div className="space-y-4 font-sans font-light text-foreground/70 text-sm">
                            <a href="mailto:hola@tafdiseno.mx" className="block hover:text-white transition-colors">
                                hola@tafdiseno.mx
                            </a>
                            <a href="tel:+528100000000" className="block hover:text-white transition-colors">
                                +52 81 0000 0000
                            </a>
                            <div className="flex items-start gap-2 pt-4">
                                <MapPin size={16} className="text-primary mt-1 shrink-0" />
                                <span>
                                    Plaza 1A, Cumbres<br />
                                    Monterrey, N.L.
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end space-y-4">
                        <h5 className="text-primary tracking-[0.2em] font-sans text-xs font-bold uppercase mb-2">
                            Social
                        </h5>
                        <a 
                            href="#" 
                            className="flex items-center gap-3 text-foreground/70 hover:text-white transition-colors group"
                        >
                            <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                            <span className="font-sans font-light text-sm">Instagram</span>
                        </a>
                    </div>
                </div>

                {/* Masked Giant Title */}
                <div className="w-full relative py-10 md:py-20 flex justify-center overflow-hidden mix-blend-screen pointer-events-none">
                    <h1 
                        className="font-display font-black text-[12vw] leading-none text-transparent bg-clip-text"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2000&auto=format&fit=crop')",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text"
                        }}
                    >
                        TAF DISEÑO
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-foreground/40 font-sans text-xs">
                    <p>© {new Date().getFullYear()} TAF Diseño. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0 tracking-widest uppercase text-[10px]">Interiorismo & Carpintería</p>
                </div>
            </div>
        </footer>
    );
}
