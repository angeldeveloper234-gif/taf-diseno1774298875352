import { Hero, Gallery, Products, Roadmap, Stats, Features, Testimonials, CTA, Contact, FAQ, BentoGrid } from "@/components/sections";
import { CustomCursor } from "@/components/features/CustomCursor";
import { SEO } from "@/components/ui/SEO";
import { config } from "@/config";

export function Home() {
    const { branding, features } = config;

    return (
        <main className="relative selection:bg-primary selection:text-black">
            <SEO 
                description={`Líderes en ${branding.trade}. Proyectos de construcción de alta calidad en ${config.dynamicContent.city}. ${branding.slogan}.`}
                keywords={`${branding.name}, construcción, remodelación, arquitectura, edificación`}
            />
            <Hero />
            {features.showStats && <Stats />}
            <BentoGrid />
            <Features />
            {features.showGallery && <Gallery />}
            {features.showProducts && <Products />}
            <Roadmap />
            {features.showTestimonials && <Testimonials />}
            <CTA />
            <Contact />
            {features.showFAQ && <FAQ />}

            {/* Features */}
            <CustomCursor />
        </main>
    );
}
