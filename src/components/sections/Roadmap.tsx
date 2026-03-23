import { config } from '@/config';
import { RoadmapBlock } from '@/components/RoadmapBlock';

export function Roadmap() {
    const { roadmap } = config.dynamicContent;

    return (
        <section id="process" className="py-24 bg-[#0D0C0C] relative overflow-hidden border-t border-white/5">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(229, 211, 179, 0.5) 40px, rgba(229, 211, 179, 0.5) 41px),
                    repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(229, 211, 179, 0.5) 40px, rgba(229, 211, 179, 0.5) 41px)`
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <p className="text-primary font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                        Así Trabajamos
                    </p>
                    <h2 className="text-4xl md:text-7xl font-display text-white tracking-widest">
                        PROCESO <span className="text-primary">CLARO</span>
                    </h2>
                </div>

                {/* Connecting line */}
                <div className="relative">
                    <div className="absolute top-[52px] left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                        {roadmap.map((item, index) => (
                            <RoadmapBlock
                                key={index}
                                step={item.step}
                                title={item.title}
                                desc={item.desc}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
