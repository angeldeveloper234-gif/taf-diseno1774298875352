import { Hero, BentoGrid, Gallery, Testimonials, Roadmap, Contact, Footer } from "@/components/sections";
import { CustomCursor } from "@/components/features/CustomCursor";
import { SEO } from "@/components/ui/SEO";
import { config } from "@/config";

export function Home() {
    const { branding } = config;

    return (
        <main className="relative selection:bg-primary selection:text-black bg-background">
            <SEO 
                description={`Líderes en ${branding.trade}. Proyectos de construcción de alta calidad en ${config.dynamicContent.city}. ${branding.slogan}.`}
                keywords={`${branding.name}, construcción, remodelación, arquitectura, edificación, interiorismo, carpintería`}
            />
            {/* 1 & 2. Hero Inmersivo y Grilla de Métricas */}
            <Hero />
            
            {/* 3. Especialidades ("TRABAJO QUE DURA") */}
            <BentoGrid />

            {/* 4. Proyectos Destacados */}
            <Gallery />

            {/* 5. Prueba Social Curada ("TRABAJOS QUE HABLAN") */}
            <Testimonials />

            {/* 6. El Proceso */}
            <Roadmap />

            {/* 7. Formulario High-End */}
            <Contact />

            {/* 8. Footer is in App.tsx globally, so no need to include here, but let's make sure it's correct */}
            <CustomCursor />
        </main>
    );
}
