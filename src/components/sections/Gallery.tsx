import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const projects = [
    {
        id: 1,
        title: "Residencia Bosques",
        category: "Carpintería Residencial",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Local Comercial San Pedro",
        category: "Remodelación Comercial",
        image: "https://images.unsplash.com/photo-1541888062137-0105ff785ad3?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Penthouse Cumbres",
        category: "Interiorismo",
        image: "https://images.unsplash.com/photo-1628744448834-8b671607590d?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Cafetería Centro",
        category: "Carpintería Comercial",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"
    }
];

export function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    
    // Custom cursor state for this specific section
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
        }
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        cursorX.set(e.clientX - 60); // half cursor width
        cursorY.set(e.clientY - 60); // half cursor height
    };

    return (
        <section 
            className="py-32 bg-background relative overflow-hidden cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Custom Gallery Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-[120px] h-[120px] rounded-full bg-primary/90 flex items-center justify-center pointer-events-none z-50 backdrop-blur-md"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.5
                }}
            >
                <span className="text-black font-sans text-[10px] tracking-widest uppercase font-bold text-center leading-tight p-2">
                    Ver<br/>Proyecto
                </span>
            </motion.div>

            <div className="container mx-auto px-6 max-w-[1400px] mb-16 pl-6 md:pl-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary tracking-[0.2em] text-sm md:text-md uppercase font-sans font-semibold mb-4"
                >
                    El Portafolio
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-display font-light text-foreground"
                >
                    Proyectos Destacados
                </motion.h3>
            </div>

            <motion.div ref={containerRef} className="pl-6 md:pl-16 cursor-grab active:cursor-grabbing overflow-hidden">
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }} 
                    className="flex gap-8"
                >
                    {projects.map((item, i) => (
                        <motion.div 
                            key={item.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="min-w-[70vw] md:min-w-[400px] lg:min-w-[500px] aspect-[3/4] relative group rounded-md overflow-hidden"
                        >
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 transition-all duration-700 pointer-events-none scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h4 className="text-3xl font-display text-white mb-2">{item.title}</h4>
                                <p className="text-primary font-sans text-sm tracking-widest uppercase">{item.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
