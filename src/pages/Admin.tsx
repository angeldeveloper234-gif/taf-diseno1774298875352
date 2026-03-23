import { useState } from "react";
import { config } from "@/config";

export function Admin() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Since we don't have a backend by default, we just log it and show a success message
        console.log("Nuevo proyecto subido:", { title, category, imageUrl });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setTitle("");
        setCategory("");
        setImageUrl("");
    };

    return (
        <section className="pt-32 pb-24 relative z-10 min-h-screen">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
                    <h1 className="text-3xl font-display font-bold text-white mb-2">
                        Panel de Administración
                    </h1>
                    <p className="text-gray-400 mb-8 font-light">
                        Sube nuevos proyectos terminados para mostrarlos en el portafolio público de {config.branding.name}.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Título del Proyecto
                            </label>
                            <input
                                type="text"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full bg-[#1A1D24] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                placeholder="Ej: Residencia Lomas"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Categoría
                            </label>
                            <select
                                required
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-[#1A1D24] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                            >
                                <option value="" disabled>Selecciona una categoría</option>
                                <option value="Residencial">Residencial</option>
                                <option value="Comercial">Comercial</option>
                                <option value="Corporativo">Corporativo</option>
                                <option value="Paisajismo">Paisajismo</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                URL de la Imagen
                            </label>
                            <input
                                type="url"
                                required
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="w-full bg-[#1A1D24] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                placeholder="https://ejemplo.com/imagen.jpg"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-primary text-black font-semibold py-4 rounded-lg hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                            >
                                Subir Proyecto
                            </button>
                        </div>

                        {success && (
                            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center text-sm">
                                Proyecto subido exitosamente al portafolio.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
