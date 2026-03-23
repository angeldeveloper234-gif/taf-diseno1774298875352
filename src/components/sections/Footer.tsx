import { motion } from "framer-motion";
import { config } from "@/config";

export function Footer() {
    const { branding } = config;

    return (
        <footer className="bg-[#0A0909] text-white pt-20 pb-12 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Big brand watermark */}
                <div className="flex flex-col items-center justify-center mb-16 text-center">
                    <h2 className="text-[12vw] leading-none font-display font-bold text-white/[0.03] select-none tracking-widest uppercase">
                        {branding.name.split(' ')[0]}
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-8">
                    <div className="mb-8 md:mb-0">
                        <p className="text-zinc-500 text-sm font-sans mb-1">
                            <span className="text-[#F59E0B] font-black tracking-wider">{branding.logo}</span> — {branding.trade}
                        </p>
                        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
                            © {new Date().getFullYear()} {branding.name}. Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <a href="/privacy" className="text-zinc-500 hover:text-[#F59E0B] text-[10px] uppercase tracking-widest transition-colors font-bold">Aviso de Privacidad</a>
                        <a href="/terms" className="text-zinc-500 hover:text-[#F59E0B] text-[10px] uppercase tracking-widest transition-colors font-bold">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
