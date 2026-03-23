import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { config } from "@/config";

export function WhatsAppWidget() {
    const [showNotification, setShowNotification] = useState(false);
    const { demoUser } = config;

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNotification(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        const message = encodeURIComponent("¡Hola! Me gustaría solicitar un presupuesto para mi proyecto.");
        const whatsappUrl = `https://wa.me/${demoUser.whatsapp.replace(/\+/g, '')}?text=${message}`;
        window.open(whatsappUrl, "_blank");
        setShowNotification(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[#25D366]/20 transition-shadow overflow-visible font-sans"
                aria-label="Contactar por WhatsApp"
            >
                <MessageCircle size={30} fill="currentColor" />
                
                <AnimatePresence>
                    {showNotification && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-[#1a1a1a] rounded-full flex items-center justify-center pointer-events-none"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
            
            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 20, opacity: 0 }}
                        className="absolute right-full mr-4 bottom-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-xl shadow-xl border border-white/5 whitespace-nowrap hidden sm:block pointer-events-none font-sans"
                    >
                        <p className="text-sm font-bold tracking-tight">¿Tienes un proyecto?</p>
                        <p className="text-xs text-zinc-400">Te asesoramos por WhatsApp</p>
                        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#1a1a1a] rotate-45 border-r border-t border-white/5" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
