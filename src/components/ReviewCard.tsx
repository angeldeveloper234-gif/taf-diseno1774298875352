import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TestimonialItem } from "@/config";

interface ReviewCardProps {
    item: TestimonialItem;
    index: number;
}

export function ReviewCard({ item, index }: ReviewCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0F1115] border border-white/5 p-8 md:p-10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
        >
            {/* Quote watermark */}
            <Quote
                size={80}
                className="absolute -top-2 -right-2 text-primary/5 group-hover:text-primary/10 transition-colors"
                fill="currentColor"
            />

            <div className="flex flex-col h-full relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={16} className="fill-primary text-primary" />
                    ))}
                </div>

                <p className="text-lg md:text-xl font-sans font-light text-zinc-300 leading-relaxed mb-8 flex-1 group-hover:text-white transition-colors">
                    "{item.text}"
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold px-3 py-1 border border-primary/20">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-11 h-11 bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-xl flex-shrink-0">
                        {item.name.charAt(0)}
                    </div>
                    <div>
                        <p className="text-white font-sans text-sm font-bold tracking-wider uppercase">
                            {item.name}
                        </p>
                        <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-0.5">
                            {item.role}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
