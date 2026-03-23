import { motion } from 'framer-motion';
import { ClipboardList, Wrench, Key } from 'lucide-react';

interface RoadmapBlockProps {
    step: string;
    title: string;
    desc: string;
    index: number;
}

export function RoadmapBlock({ step, title, desc, index }: RoadmapBlockProps) {
    const icons = [
        <ClipboardList size={28} className="text-primary" key="1" />,
        <Wrench size={28} className="text-primary" key="2" />,
        <Key size={28} className="text-primary" key="3" />,
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative"
        >
            <div className="bg-[#0F1115] border border-white/8 p-10 rounded-none hover:border-primary/40 transition-all duration-500 overflow-hidden">
                {/* Number watermark */}
                <div className="absolute -top-6 -right-4 text-[120px] font-display font-bold text-white/[0.02] pointer-events-none group-hover:text-primary/[0.04] transition-colors leading-none select-none">
                    {step}
                </div>

                <div className="relative z-10">
                    {/* Step indicator */}
                    <div className="w-14 h-14 border border-primary/30 flex items-center justify-center mb-8 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all">
                        {icons[index % icons.length]}
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-primary font-mono text-xs font-black tracking-widest uppercase">PASO {step}</span>
                        <div className="h-[1px] w-6 bg-primary/40"></div>
                    </div>

                    <h3 className="text-2xl font-display text-white mb-4 group-hover:text-primary transition-colors tracking-wider">
                        {title}
                    </h3>

                    <p className="text-zinc-500 font-sans font-light text-base leading-relaxed">
                        {desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
