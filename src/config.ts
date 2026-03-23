// ============================================================
// CONFIG.TS — TAF Diseño
// ============================================================

export interface GalleryItem {
    title: string;
    category: string;
    image: string;
}

export interface ProductItem {
    id: string;
    name: string;
    price: string;
    desc: string;
    image: string;
}

export interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    problem: string;
    agitation: string;
    solve: string;
    price: string;
}

export interface TestimonialItem {
    name: string;
    role: string;
    text: string;
    tags: string[];
}

export interface Config {
    branding: {
        name: string;
        slogan: string;
        logo: string;
        trade: string;
    };
    supabase: {
        url: string;
        anonKey: string;
    };
    analytics: {
        webhookUrl: string;
    };
    bookingUrl: string;
    paymentLink: string;
    googleMapsReviewUrl: string;
    dynamicContent: {
        city: string;
        localAnchor: string;
        stats: {
            projectsDone: number;
            experienceYears: number;
            happyClients: number;
            m2Built?: string;
        };
        specialization: {
            title: string;
            pain: string;
            ego: string;
            hook: string;
        };
        roadmap: Array<{
            step: string;
            title: string;
            desc: string;
        }>;
        pricing: {
            basic: string;
            comprehensive: string;
            retainer: string;
        };
    };
    services: ServiceItem[];
    testimonials: TestimonialItem[];
    demoUser: {
        name: string;
        email: string;
        whatsapp: string;
    };
    features: {
        showGallery: boolean;
        showProducts: boolean;
        showTestimonials: boolean;
        showFAQ: boolean;
        showStats: boolean;
    };
    gallery: GalleryItem[];
    products: ProductItem[];
}

export const config: Config = {
    // ─── Identidad del Negocio ───────────────────────────────
    branding: {
        name: "TAF Diseño",
        slogan: "Tu espacio, diseñado para inspirar",
        logo: "TAF",
        trade: "Diseño de Interiores",
    },

    // ─── Servicios Externos (Opcionales) ────────────────────
    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL || "",
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    },
    analytics: {
        webhookUrl: import.meta.env.VITE_SPEED_WEBHOOK || "",
    },

    // ─── Links Externos ─────────────────────────────────────
    bookingUrl: "#contact",
    paymentLink: "https://buy.stripe.com/",
    googleMapsReviewUrl: "",

    // ─── Contenido Dinámico ─────────────────────────────────
    dynamicContent: {
        city: "Monterrey",
        localAnchor: "Cumbres 2o. Sector",
        stats: {
            projectsDone: 120,
            experienceYears: 8,
            happyClients: 95,
            m2Built: "5,000+"
        },
        specialization: {
            title: "INSPIRAR",
            pain: "espacios genéricos y sin vida",
            ego: "TU ESPACIO",
            hook: "DISEÑADO PARA"
        },
        roadmap: [
            {
                step: "01",
                title: "Diagnóstico",
                desc: "Analizamos tu espacio y tus necesidades en una visita técnica inicial."
            },
            {
                step: "02",
                title: "Estrategia",
                desc: "Desarrollamos una propuesta de diseño y presupuesto detallado."
            },
            {
                step: "03",
                title: "Resolución",
                desc: "Ejecución de obra con supervisión experta y entrega llave en mano."
            }
        ],
        pricing: {
            basic: "Consultar",
            comprehensive: "Consultar",
            retainer: "Consultar"
        }
    },

    // ─── Servicios Ofrecidos ────────────────────────────────
    services: [
        {
            id: "01",
            icon: "🛋️",
            title: "Diseño de Interiores",
            problem: "¿Tu hogar no refleja tu personalidad?",
            agitation: "Vivir en espacios que no te inspiran afecta tu estado de ánimo y confort diario.",
            solve: "Creamos atmósferas únicas que combinan estética y funcionalidad.",
            price: "A medida"
        },
        {
            id: "02",
            icon: "🏢",
            title: "Remodelación Comercial",
            problem: "¿Tu negocio no atrae clientes?",
            agitation: "La imagen de tu local es la primera impresión. Un diseño anticuado aleja ventas.",
            solve: "Transformamos locales comerciales en experiencias de marca memorables.",
            price: "A medida"
        },
        {
            id: "03",
            icon: "🪚",
            title: "Carpintería Residencial",
            problem: "¿Muebles que no encajan?",
            agitation: "El mobiliario estándar desperdicia espacio valioso en tu hogar.",
            solve: "Diseñamos y fabricamos mobiliario a medida para optimizar cada rincón.",
            price: "A medida"
        }
    ],

    // ─── Testimoniales ──────────────────────────────────────
    testimonials: [
        {
            name: "Elias Sifuentes Hernandez",
            role: "Cliente Residencial",
            text: "Me encantó su trabajo, son súper profesionales desde el trato hasta la cotización. El consejo sobre el tapiz fue excelente.",
            tags: ["Profesionalismo", "Asesoría"]
        },
        {
            name: "Isabel Vale",
            role: "Cliente Comercial",
            text: "Muy buen servicio, calidad en sus presentaciones. Muy creativos, puntuales y excelente gusto estético.",
            tags: ["Creatividad", "Puntualidad"]
        },
        {
            name: "Gerardo A. Rodriguez",
            role: "Remodelación Cocina",
            text: "El mejor servicio y calidad, nos apoyaron con la cocina... se ve de revista. Cumplieron en tiempos.",
            tags: ["Calidad", "Cumplimiento"]
        }
    ],

    // ─── Datos del Demo ─────────────────────────────────────
    demoUser: {
        name: "TAF Admin",
        email: "contacto@tafdiseno.com",
        whatsapp: "+528126079926"
    },

    // ─── Configuración de Secciones ─────────────────────────
    features: {
        showGallery: true,
        showProducts: false,
        showTestimonials: true,
        showFAQ: true,
        showStats: true
    },

    // ─── Galería de Proyectos ───────────────────────────────
    gallery: [
        {
            title: "Residencia Cumbres",
            category: "Interiorismo",
            image: "https://images.unsplash.com/photo-1616486341351-7973a6970512?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Oficinas Valle",
            category: "Comercial",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Cocina Moderna",
            category: "Remodelación",
            image: "https://images.unsplash.com/photo-1556912177-859416b84034?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Carpintería Fina",
            category: "Mobiliario",
            image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop"
        }
    ],

    products: []
};
