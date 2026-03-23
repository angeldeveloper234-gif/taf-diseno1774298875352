import { config } from "@/config";
import { ReviewCard } from "@/components/ReviewCard";

export function Testimonials() {
    const { testimonials } = config;

    return (
        <section id="testimonials" className="py-32 bg-[#0D0C0C] relative overflow-hidden border-t border-white/5">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <p className="text-primary font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                        Lo Que Dicen Nuestros Clientes
                    </p>
                    <h2 className="text-4xl md:text-6xl font-display text-white tracking-widest">
                        TRABAJOS QUE <span className="text-primary">HABLAN</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <ReviewCard key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
