    import React from "react";
    import { useNavigate } from "react-router-dom";
    import { nombre } from "../data/data.js";

    export const AboutPreview = () => {
        const navigate = useNavigate();

        return (
            <section className="min-h-screen bg-(--fondo-color) text-(--texto-color) montserrat-title-light">
                <div className="mx-auto max-w-6xl px-6 h-screen grid grid-cols-2 items-start gap-16">
                    <div className="self-start">
                        <h2 className="text-5xl font-bold mb-4 uppercase">
                            Acerca de mí
                        </h2>
                    </div>
                    <div>
                        <h3 className="text-4xl text-(--acento-color) font-bold montserrat-title-bold uppercase w-5xl mb-4">
                            Breve descripción
                        </h3>
                        <p className="">
                            Soy un desarrollador frontend enfocado en crear interfaces modernas, claras y accesibles. Me interesa especialmente construir experiencias que no solo se vean bien, sino que también sean intuitivas y fáciles de usar. Disfruto trabajar con tecnologías como React y Tailwind CSS, cuidando tanto la estructura del código como los detalles visuales. Siempre busco aprender algo nuevo y mejorar mis habilidades a través de proyectos reales y desafíos constantes.
                        </p>
                        <button className="bg-(--acento-color) text-black uppercase px-6 py-3 rounded-full hover:bg-(--acento-color-hover) transition-all duration-300 ease-in-out mt-4">
                            Ver más
                        </button>
                    </div>
                </div>
            </section>
        );
    };